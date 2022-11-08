import React from 'react';
import "./ProductItem.css"
import Button from "../Button/Button";

const ProductItem = ({product, className}) => {


    return (
        <div className={'product ' + className}>
            <div className={'img'}><a href="sample.html"><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheoryandpractice.ru%2Fposts%2F10536-molotch&psig=AOvVaw0RwyhMRGEaqzlTAIH1ps2O&ust=1668008538445000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLClj5X2nvsCFQAAAAAdAAAAABAE" width="50"
                                                               height="50" alt="Пример"/></a></div>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <Button className={'add-btn'}>
                Написать владельцу
            </Button>
        </div>
    );
};

export default ProductItem;