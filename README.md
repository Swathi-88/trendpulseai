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
> (Frontend URL: hosted via Vercel — https://trendpulseai.vercel.app/)

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


## API docs
POST /analyze

Analyze a keyword and return trend metadata.

Request JSON

{
  "keyword": "AI jobs"
}


Response JSON

{
  "trend": "Rising",
  "score": 78,
  "confidence": "High",
  "best_posting_time": "7 PM – 10 PM",
  "related_keywords": ["AI roadmap","AI salary","Prompt engineering"],
  "graph_data": [12, 18, 24, 32, 40, 51, 72]
}

## Example requests & responses
curl
curl -X POST "https://trendpulse-backend-vmr1.onrender.com/analyze" \
  -H "Content-Type: application/json" \
  -d '{"keyword":"AI jobs"}'

Python example
import requests

url = "https://trendpulse-backend-vmr1.onrender.com/analyze"
resp = requests.post(url, json={"keyword": "AI jobs"})
print(resp.json())

## Math model — how it works

We use the slope of a linear regression line across the last 7 days of Google Trends values to quantify momentum.
x = {1, 2, 3, 4, 5, 6, 7}
y = {y1, y2, y3, y4, y5, y6, y7}

$$
m = \frac{n\sum xy - (\sum x)(\sum y)}
         {n\sum x^2 - (\sum x)^2}
$$

Rising      → m > 0.8  
Stable      → -0.8 ≤ m ≤ 0.8  
Declining   → m < -0.8

$$
score = round( min( max(m \times 12 + 50,\ 0),\ 100 ) )
$$
High     → |m| > 1.2  
Medium   → 0.6 < |m| ≤ 1.2  
Low      → |m| ≤ 0.6  


## Deployment (Render)

If you want to deploy the backend on Render (recommended — always on):

Push your code to GitHub.

Go to https://render.com
 → New → Web Service.

Connect the repo and set:

Build Command: pip install -r requirements.txt

Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT

Deploy. After build succeeds, Render will give you a stable URL (e.g. https://trendpulse-backend-vmr1.onrender.com).

No environment variables required for the MVP (pytrends uses public Google Trends). If you add paid APIs later, store keys as Render environment variables.

## Frontend integration (Lovable)

In Lovable, create an API block.

Method: POST

URL:

https://trendpulse-backend-vmr1.onrender.com/analyze


Headers:

Content-Type: application/json


Body:

{ "keyword": "{{input_keyword}}" }


Map response fields:

trend → label

score → numeric display

confidence → text

best_posting_time → text

related_keywords → chips

graph_data → Lovable line chart

Test with example keywords (see test pack below).

Testing keywords (recommended demo pack)

Use these to show Rising / Stable / Declining cases quickly:

Rising: "AI agents", "K-pop comeback"

Stable: "Python programming", "Weather today"

Declining: "NFT art", "Clubhouse app"

These generally produce clean, demonstrable outputs for the judges.

##Troubleshooting & tips

405 Method Not Allowed → Make sure Lovable sends POST, not GET.

Rate limiting from Google Trends → Use caching in backend; reuse a single TrendReq() session; add small cooldowns if needed.

Replit sleep → Deploy to Render (recommended) to avoid manual “Run”.

Graph format issues → Ensure graph_data is a numeric array (7 integers/floats) and Lovable graph expects that same shape.

Recommended caching pattern (pseudo):
cache = {}
if keyword in cache:
    return cache[keyword]
# else: fetch, compute, cache[keyword] = result

## Contributing

Contributions are welcome — open a PR or issue with:

performance improvements

smarter smoothing or forecasting (Prophet/ARIMA)

multi-platform trend aggregation

UI polish or test coverage

Please fork, create a feature branch, and open a PR. Keep changes well-scoped.

## License

MIT License — feel free to reuse for your hacks and prototypes.

Contact

Built by Swathi for Octopus Hackathon — reach out for help, improvements, or collab ideas.


Tell me which and I’ll drop it instantly.
::contentReference[oaicite:0]{index=0}
