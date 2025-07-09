from fastapi import APIRouter

router = APIRouter(prefix="/inventario", tags=["El inventario"])


inventario_db = [{"nombre":"pala"},{"nombre":"taladro"},{"nombre":"rastrillo"},{"nombre":"alicates"}]

@router.get("/")
async def leer_invetario():
    return{
        "success": True,
        "data": inventario_db,
        "message":"here you have your endpoints"
    }