import { useEffect, useState } from "react";


function Reloj() {
 const [hora, setHora] = useState(new Date());

 useEffect( () => {
    console.log("Creando intervalo");

    const intervalo = setInterval(()=>{ setHora( new Date())
 }, 1000)
    
    return () => clearInterval(intervalo)

},[])


 return (
 
    <p>{hora.toLocaleTimeString("es-ES")}</p>

 )
}

export default Reloj