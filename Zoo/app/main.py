from fastapi import FastAPI
from .routers import animales
from .routers import inventario
from .routers import inventario


app = FastAPI(
    title="ZooApi",
    version="0.0.1"

)

@app.get("/", tags=["index"])
async def index():
    return {
        "success": True,
        "data":[
            "/animales",
            "/inventario",
            "/empleados"
        ],
        "message":"here you have your endpoints"
    }

app.include_router(animales.router)
app.include_router(inventario.router)
app.include_router(inventario.router)





