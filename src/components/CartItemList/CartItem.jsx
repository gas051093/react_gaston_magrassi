function CartItem ({ prod }) { 
    return (
      <tr>
        <td scope="row">{prod.title}</td>
        <td>{prod.price}</td>
        <td>{prod.category}</td>
      </tr>
    );
}

export default CartItem