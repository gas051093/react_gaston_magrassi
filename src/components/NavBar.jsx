import './NavBar.scss';
import CartWidget from './CartWidget';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getCategory } from '../firebase/db';

function NavBar() { 
  const [cat, setCat] = useState([]);
  const navigate = useNavigate();

  
    async function setCategorias() {
        setCat(await getCategory())
    }
    useEffect(() => { 
        setCategorias();
    }, [])
    
    return (
      <div className="navbar row p-0 py-3 m-0">
        <a  onClick={()=> navigate(`/`)} className="navbar__name p-0 m-0 " >Csistemas shop</a>
        <div className="p-0 pe-3 m-0 col-12 d-flex column-gap-3 justify-content-end">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorias
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              {cat.map((cate) => (
                <li key={cate}>
                  <a className="dropdown-item" onClick={() => navigate(`category/${cate}`)}>
                    {cate}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <CartWidget />
        </div>
      </div>
    );
}

export default NavBar;