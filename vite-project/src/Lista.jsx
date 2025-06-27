import "./Lista.css";


function Lista({ items }) {
  return (
    <div className="lista-container">
      <ul className="lista">
        {items.map((item) => (
          <li className="item-lista" key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      </div>
  );
}

export default Lista;


