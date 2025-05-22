import './NavBar.scss';
import CartWidget from './CartWidget';

function NavBar() { 
    return (
    <div className='navbar row p-0 py-3 m-0'>
        <p className='navbar__name p-0 m-0 position-absolute start-50 translate-middle-x'>Csistemas shop</p>
        <div className='p-0 pe-3 m-0 col-12 d-flex column-gap-3 justify-content-end'>
            <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item" href="#">CPU</a></li>
                        <li><a className="dropdown-item" href="#">Impresoras</a></li>
                        <li><a className="dropdown-item" href="#">Tintas</a></li>
                        <li><a className="dropdown-item" href="#">Insumos</a></li>
                    </ul>
                </div>
                    <CartWidget/>
                <div>
                </div> 
        </div>   
    </div>
    )
}

export default NavBar;