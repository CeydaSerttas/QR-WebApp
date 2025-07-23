import { useState } from "react";
import GenerateQR from "./components/GenerateQR";
import ReadQR from "./components/ReadQR";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("generate");

  return (
    <div className="app-wrapper">
      <div className="main-card">
        <h1 className="app-title">🎀 QR Code App 🎀</h1>
        <div className="tab-buttons">
          <button
            className={`tab-btn ${page === "generate" ? "active-tab" : ""}`}
            onClick={() => setPage("generate")}
          >
            🎨 Generate QR
          </button>
          <button
            className={`tab-btn ${page === "read" ? "active-tab" : ""}`}
            onClick={() => setPage("read")}
          >
            📷 Read QR
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
