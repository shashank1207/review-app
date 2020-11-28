import React from 'react';

const Products = ({products, openProduct}) => {

    const productList = products.map(product => {
            return (
                <div className='items' key={product.key} onClick={()=>{openProduct(product.key)}}>
                    {product.name}
                </div>
            )
        });
        return(
            <div>
                {productList}
            </div>
        )
}

export default Products;