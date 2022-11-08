import React from 'react';
import "./ProductItem.css"
import Button from "../Button/Button";

const ProductItem = ({product, className}) => {


    return (
        <div className={'product ' + className}>
            <div className={'img'}> <img src="https://mobimg.b-cdn.net/v3/fetch/ad/ad9ecd9981913c4af8002ef2937e64eb.jpeg" height="100"  alt="котик"/></div>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <Button className={'add-btn'}>
                Написать владельцу
            </Button>
        </div>
    );
};

export default ProductItem;