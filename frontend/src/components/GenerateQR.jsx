import { useState } from "react";

export default function GenerateQR() {
  const [inputText, setInputText] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQR = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/generate_qr?data=${inputText}`,
      { method: "POST" }
    );
    const data = await response.json();
    setQrCode(data.qr_code);
  };

  return (
    <div className="qr-section">
      <input
        className="qr-input"
        placeholder="💖 Text to convert into QR 💖"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={generateQR} className="qr-btn">
        🎀 QR Kod Üret 🎀
      </button>

      {qrCode && (
        <img
          src={`data:image/png;base64,${qrCode}`}
          alt="QR Kod"
          className="qr-image"
        />
      )}
    </div>
  );
}
