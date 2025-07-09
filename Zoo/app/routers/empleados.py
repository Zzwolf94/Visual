from fastapi import APIRouter

router = APIRouter(prefix="/empleados", tags=["El empleados"])


empleados_db = [{"nombre":"Edu"},{"nombre":"Nestor"},{"nombre":"Fran"},{"nombre":"Ana"}]

@router.get("/")
async def leer_invetario():
    return{
        "success": True,
        "data": empleados_db,
        "message":"here you have your endpoints"
    }