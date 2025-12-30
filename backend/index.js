import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import shortid from 'shortid';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Schema
const pasteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  slug: { type: String, unique: true },
  expiresAt: { type: Date, default: null },
  viewsRemaining: { type: Number, default: null },
});

// Auto-delete expired pastes (TTL index)
pasteSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const Paste = mongoose.model('Paste', pasteSchema);

// Create paste
app.post('/api/pastes', async (req, res) => {
  try {
    const { content, ttl, views } = req.body;

    const paste = await Paste.create({
      content,
      slug: shortid.generate(),
      expiresAt: ttl ? new Date(Date.now() + ttl * 1000) : null,
      viewsRemaining: views ?? null,
    });

    res.json({ slug: paste.slug });
  } catch {
    res.status(500).json({ error: 'Failed to create paste' });
  }
});

// View paste
app.get('/api/pastes/:slug', async (req, res) => {
  try {
    const paste = await Paste.findOne({ slug: req.params.slug });
    if (!paste) return res.status(404).json({ error: 'Not found' });

    if (paste.viewsRemaining !== null) {
      if (paste.viewsRemaining <= 0) {
        await Paste.deleteOne({ _id: paste._id });
        return res.status(404).json({ error: 'Not found' });
      }
      paste.viewsRemaining--;
      await paste.save();
    }

    res.json({ content: paste.content });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
