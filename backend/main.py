# backend/main.py

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from qr_generator import generate_qr_base64
from qr_reader import read_qr_code

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate_qr")
async def generate_qr(data: str):
    qr_base64 = generate_qr_base64(data)
    return JSONResponse(content={"qr_code": qr_base64})


@app.post("/read_qr")
async def read_qr(file: UploadFile = File(...)):
    image_bytes = await file.read()
    try:
        data = read_qr_code(image_bytes)
        return JSONResponse(content={"data": data})
    except ValueError as e:
        return JSONResponse(content={"error": str(e)}, status_code=400)
