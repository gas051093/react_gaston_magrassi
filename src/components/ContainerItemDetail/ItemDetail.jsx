import './ItemDetail.scss'
import ItemCount from './ItemCount';
function ItemDetail({ prod }) { 
    
    return (
        <>
            <div className="itemDetail p-5 row m-0 justify-content-center">       
                <div className="itemDetail__container col-12 p-3">
                    <div className="row p-2 gap-3 justify-content-between mb-4">
                        <div className="itemDetail__img col-12 col-md-8">
                            <img className="" src={prod.thumbnail} alt={prod.title} />
                        </div>
                        <div className="col-12 col-md-3 py-2 itemDetail__containerPrice d-flex flex-column justify-content-between">
                            <div>  
                                <h2 className="itemDetail__title m-0 p-0">{prod.title}</h2>
                                <p className="itemDetail__rating">Rating: {prod.rating}⭐</p>
                                <p className="itemDetail__price mt-5">U$D {prod.price} <br/><span className='itemDetail__sub'>precio sin impuestos</span></p>
                                <p className="itemDetail__stock">Stock: {prod.stock}U. en nuestras sucursales</p>  
                            </div>
                            <div className='d-grid gap-2'>
                                    <ItemCount/>
                                    <button className='itemDetail__btn'>Comprar</button>
                                    <button className='itemDetail__btn'>Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-8'>
                        <h4>Descipcion del producto</h4>
                        <hr/>
                        <p>{prod.description}</p>
                        <p>Marca: {prod.brand ? prod.brand : 'Sin marca'}</p>
                        <p>Garantia: {prod.warrantyInformation}</p>
                        <p className=''>Dimenciones:
                            <span className='itemDetail__dimenciones' >Ancho: {prod.dimensions?.width}</span>
                            <span className='itemDetail__dimenciones' >Alto: {prod.dimensions?.height}</span>
                            <span className='itemDetail__dimenciones' >Profundidad: {prod.dimensions?.depth}</span>
                        </p>
                    </div>
                </div>
            </div>
      </>
    );
}

export default ItemDetail