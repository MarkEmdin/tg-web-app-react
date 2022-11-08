import React from 'react';
import "./ProductItem.css"
import Button from "../Button/Button";

const ProductItem = ({product, className}) => {


    return (
        <div className={'product ' + className}>
            <div className={'img'}> <img src={product.image_url} height="100"   alt={product.title}/></div>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <Button className={'add-btn'}>
                Написать владельцу
            </Button>
        </div>
    );
};

export default ProductItem;