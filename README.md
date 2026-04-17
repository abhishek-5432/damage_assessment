# Damage Assessment System - Hardened Deployment

This project provides a secure, industry-grade implementation for disaster damage assessment using Roboflow Computer Vision and a FastAPI backend proxy.

## Security Features
- **Zero Secret Exposure**: Roboflow API keys are stored in backend environment variables and never sent to the client browser.
- **Secure Proxy**: All inference requests are proxied through a hardened FastAPI endpoint.
- **Input Validation**: Backend strictly validates file types and sizes.
- **CORS Protection**: Configured to restrict access to trusted origins.

## Setup Instructions

1. **Rotate API Key**: 
   - Immediately rotate your Roboflow API key in the [Roboflow Dashboard](https://app.roboflow.com/settings/api).
   - The old key (previously in `index.html`) is permanently compromised.

2. **Configure Environment**:
   - Rename `.env.example` to `.env`.
   - Update `ROBOFLOW_API_KEY` with your new rotated key.
   - (Optional) Modify `ROBOFLOW_MODEL_ID` if using a different version.

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run Secure Server**:
   ```bash
   python app.py
   # OR
   uvicorn app:app --reload
   ```

5. **Launch Interface**:
   - Access the dashboard at `index.html` via **Live Server** (VS Code) or by hosting it on a web server.
   - The interface will automatically connect to the secure gateway at `http://127.0.0.1:8000`.

## Architecture
- **Frontend**: HTML5, Tailwind CSS, GSAP 3D Animations.
- **Backend Proxy**: FastAPI (Python), uvicorn.
- **AI Engine**: Roboflow Inference API (Deployed Model).
