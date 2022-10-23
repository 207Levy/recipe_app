from fastapi import FastAPI, HTTPException, Request, Response, status
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
import routers.recipes_router as recipes



app = FastAPI()
app.include_router(recipes.router)


app.mount("/client", StaticFiles(directory="client"), name="client")


@app.get('/')
def root():
    return FileResponse('.\client\index.html')


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
