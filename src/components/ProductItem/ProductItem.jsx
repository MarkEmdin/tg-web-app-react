import React from 'react';
import "./ProductItem.css"
import Button from "../Button/Button";

const ProductItem = ({product, className, onAdd}) => {
    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'}> <img src={product.picture_url} height="100"   alt={product.title}/></div>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Хочу!
            </Button>
        </div>
    );
};

export default ProductItem;