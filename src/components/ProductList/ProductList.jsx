import React from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";

const products = [
    {id: '1', title: 'Джинсы', description: 'Синего цвета, прямые'},
    {id: '2', title: 'Шкаф',  description: 'Два отсева, самовывоз'},
    {id: '3', title: 'Кровать',  description: 'Всего одна ножка, подходит если вас зовут Семен'},
    {id: '4', title: 'Стул',  description: 'Икеа, почти новый'},
    {id: '5', title: 'Кровать + матрасс',  description: 'Съезжаем, отдадим в хорошие руки'},
    {id: '6', title: 'Чайник',  description: 'просто чайник'},
    {id: '7', title: 'Ракетка для настольного тенниса',  description: 'Сын играл раньше проффессионально, сейчас перешел в балет'},
    {id: '8', title: 'Куртка',  description: 'Зимняя, теплая'},
]

const ProductList = () => {
    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;