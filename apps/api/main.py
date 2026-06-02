from fastapi import FastAPI

app = FastAPI(title="Resume Analyzer API")


@app.get("/health")
async def health_check() -> dict:
    return {"status": "ok"}
