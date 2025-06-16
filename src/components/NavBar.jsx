import './Navbar.scss';
import CartWidget from './CartWidget';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

function NavBar() { 
    const [cat, setCat] = useState([]);

  const callJson = async (url) => {
      try {const resp = await fetch(url);
        const data = await resp.json();
        return data
      } catch (err) {
        console.log(`error encontrado en la conx: ${err}`)
      }
        
    }
    async function setCategorias() {
        setCat(await callJson("https://dummyjson.com/products/category-list"))
    }
    useEffect(() => { 
        setCategorias();
    }, [])
    
    return (
      <div className="navbar row p-0 py-3 m-0">
        <p className="navbar__name p-0 m-0 position-absolute start-50 translate-middle-x">
          Csistemas shop
        </p>
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
                  <NavLink className="dropdown-item" to={`/category/${cate}`}>
                    {cate}
                  </NavLink>
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