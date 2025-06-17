import { useState } from "react";
import './ItemCount.scss';
function ItemCount() { 
    const [count, setCount] = useState(1)
    return (
      <div className="itemCount">
        <button className="itemCount__btn m-0" onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
            <p className="itemCount__count m-0">{count}</p>
            <button className="itemCount__btn m-0" onClick={() => setCount(count + 1 )}>+</button>
      </div>
    );
}
export default ItemCount