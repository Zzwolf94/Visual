import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="contador">
        <h1>Contador: {contador}</h1>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        <button onClick={() => setContador(0)}>Reiniciar</button>
        <button onClick={() => setContador(Math.floor(Math.random() * 100))}>
            Generar Aleatorio
        </button>

    
    </div>
  );
}

export default Contador;