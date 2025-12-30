import { useState } from "react";

const API = "http://localhost:5000";

export default function CreatePaste() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [views, setViews] = useState("");
  const [pasteUrl, setPasteUrl] = useState("");

  const createPaste = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API}/api/pastes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        ttl: ttl ? Number(ttl) : null,
        views: views ? Number(views) : null,
      }),
    });

    const data = await res.json();
    setPasteUrl(`${window.location.origin}/${data.slug}`);
  };

  const resetForm = () => {
    setContent("");
    setTtl("");
    setViews("");
    setPasteUrl("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-slate-900 text-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          🔗 Secure Paste Link
        </h1>

        {!pasteUrl ? (
          <form onSubmit={createPaste} className="space-y-4">
            <textarea
              rows="7"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Paste your text here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />

            <div className="flex gap-3">
              <input
                type="number"
                placeholder="TTL (seconds)"
                className="w-1/2 bg-slate-800 border border-slate-700 rounded-lg p-2"
                value={ttl}
                onChange={(e) => setTtl(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max views"
                className="w-1/2 bg-slate-800 border border-slate-700 rounded-lg p-2"
                value={views}
                onChange={(e) => setViews(e.target.value)}
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 font-semibold">
              Create Paste
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-green-400 font-medium text-center">
              ✅ Paste created successfully
            </p>

            <input
              value={pasteUrl}
              readOnly
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-sm"
            />

            <div className="flex gap-3">
              <button
                onClick={() => navigator.clipboard.writeText(pasteUrl)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 rounded-lg py-2 font-medium"
              >
                Copy Link
              </button>

              <button
                onClick={resetForm}
                className="flex-1 bg-slate-700 hover:bg-slate-600 rounded-lg py-2 font-medium"
              >
                Create New
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
