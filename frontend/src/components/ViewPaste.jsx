import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL; ;

export default function ViewPaste() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${API}/api/pastes/${slug}`)
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then((data) => setContent(data.content))
      .catch(() => setContent("❌ Paste not available"));
  }, [slug]);

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center p-4">
      <div className="max-w-3xl w-full bg-slate-800 text-white rounded-xl p-6 mt-10">
        <h2 className="text-xl font-bold mb-4">📄 Paste Content</h2>
        <pre className="whitespace-pre-wrap break-words text-sm bg-slate-900 p-4 rounded-lg">
          {content}
        </pre>
      </div>
    </div>
  );
}
