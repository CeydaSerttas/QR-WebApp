# backend/qr_reader.py

import cv2
import numpy as np

def read_qr_code(image_bytes: bytes) -> str:
    np_arr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    detector = cv2.QRCodeDetector()
    data, _, _ = detector.detectAndDecode(img)

    if not data:
        raise ValueError("Geçerli bir QR kod tespit edilemedi.")

    return data
