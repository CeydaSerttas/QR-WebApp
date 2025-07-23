import { useState } from "react";

export default function ReadQR() {
  const [qrText, setQrText] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://127.0.0.1:8000/read_qr", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setQrText(data.data);
  };

  return (
    <div className="qr-section">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="qr-file-input"
      />

      {qrText && (
        <div className="qr-result-card">
          📄 <strong>QR Code Content:</strong>
          <p>{qrText}</p>
        </div>
      )}
    </div>
  );
}
