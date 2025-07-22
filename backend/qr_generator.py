# backend/qr_generator.py

import io
import base64
import qrcode

def generate_qr_base64(data: str) -> str:
    img = qrcode.make(data)
    buffer = io.BytesIO()
    img.save(buffer, format="PNG")
    img_bytes = buffer.getvalue()
    base64_str = base64.b64encode(img_bytes).decode("utf-8")
    return base64_str
