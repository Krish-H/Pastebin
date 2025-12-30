import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePaste from './components/CreatePaste.jsx';
import ViewPaste from './components/ViewPaste.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreatePaste />} />
        <Route path="/:slug" element={<ViewPaste />} />
      </Routes>
    </BrowserRouter>
  );
}
