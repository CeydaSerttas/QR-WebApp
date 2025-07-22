// frontend/src/components/SparkleEffect.jsx

import React, { useEffect } from "react";
import "./SparkleEffect.css";

export default function SparkleEffect() {
  useEffect(() => {
    const container = document.createElement("div");
    container.className = "sparkle-container";
    document.body.appendChild(container);

    for (let i = 0; i < 25; i++) {
      const star = document.createElement("div");
      star.className = "sparkle-star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      container.appendChild(star);
    }

    setTimeout(() => container.remove(), 2000); // 2 saniye sonra yok olsun

    return () => container.remove();
  }, []);

  return null;
}
