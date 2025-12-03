# TrendPulse AI

**Predict if any topic is Rising, Stable, or Declining — instantly.**

TrendPulse AI is a lightweight trend-prediction API + frontend MVP that converts 7-day Google Trends data into a clear, actionable verdict: **Rising / Stable / Declining**, plus a trend score, confidence, best posting time, related keywords, and a 7-day sparkline.


## Built with
- **Python**  
- **FastAPI** (backend)  
- **pytrends** (Google Trends extraction)  
- **Pandas / NumPy** (data processing & math)  
- **Uvicorn** (ASGI server)  
- **Render** (production hosting for backend)  
- **Lovable** (no-code frontend) + **Vercel** (frontend hosting)  
- **Swagger UI** (auto-generated API docs)

---

## Live demo
- Backend (always-on): `https://trendpulse-backend-vmr1.onrender.com`  
- API endpoint: `POST https://trendpulse-backend-vmr1.onrender.com/analyze`  
> (Frontend URL: hosted via Lovable/Vercel — ask your team for the published domain)

---

## Quick Features
- Single-keyword analysis
- Trend Direction: **Rising / Stable / Declining**
- Trend Score (0–100)
- Confidence: High / Medium / Low
- Best Posting Time (rule-based)
- Related keyword suggestions
- 7-day graph data for visualization

---

## Table of Contents
- [Getting started (local)](#getting-started-local)
- [API docs](#api-docs)
- [Example requests & responses](#example-requests--responses)
- [Math model (how it works)](#math-model-how-it-works)
- [Deployment (Render)](#deployment-render)
- [Frontend integration (Lovable)](#frontend-integration-lovable)
- [Troubleshooting & tips](#troubleshooting--tips)
- [Contributing](#contributing)
- [License](#license)

---

## Getting started (local)

> Requirements: Python 3.10+ recommended

1. Clone the repo
```bash
git clone https://github.com/<your-org>/trendpulse-backend.git
cd trendpulse-backend
2. Create a venv & install
python -m venv .venv
source .venv/bin/activate      # macOS / Linux
.venv\Scripts\activate         # Windows PowerShell
pip install -r requirements.txt
3.Run locally
uvicorn main: null --reload --host 0.0.0.0 --port 8000
4.Open API docs
Visit: http://localhost:8000/docs
