import React from 'react'

const ShoppingCart = ({val}) => {
  return (
    <div>
    {val.map((product,index)=>(<li key={index}>Name = {product.name}, price = {product.price}</li>))}
    </div>
  )
}

export default ShoppingCart;