import { useState } from "react";
import GenerateQR from "./components/GenerateQR";
import ReadQR from "./components/ReadQR";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("generate");

  return (
    <div className="app-wrapper">
      <div className="main-card">
        <h1 className="app-title">🎀 QR Kod Uygulaması 🎀</h1>

        <div className="tab-buttons">
          <button
            className={`tab-btn ${page === "generate" ? "active-tab" : ""}`}
            onClick={() => setPage("generate")}
          >
            🎨 QR ÜRET
          </button>
          <button
            className={`tab-btn ${page === "read" ? "active-tab" : ""}`}
            onClick={() => setPage("read")}
          >
            📷 QR OKU
          </button>
        </div>

        <div className="card-inner">
          {page === "generate" ? <GenerateQR /> : <ReadQR />}
        </div>
      </div>

      <p className="footer-text">Made with love and pink sparkles ✨</p>
    </div>
  );
}
