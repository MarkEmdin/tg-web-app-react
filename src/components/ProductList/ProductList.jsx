import React from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";

const products = [
    {id: '1', title: 'Джинсы', description: 'Синего цвета, прямые',image_url:'https://mobimg.b-cdn.net/v3/fetch/ad/ad9ecd9981913c4af8002ef2937e64eb.jpeg'},
    {id: '2', title: 'Шкаф',  description: 'Два отсева, самовывоз',image_url:'https://mobimg.b-cdn.net/v3/fetch/ad/ad9ecd9981913c4af8002ef2937e64eb.jpeg'},
    {id: '3', title: 'Кровать',  description: 'Всего одна ножка, подходит если вас зовут Семен',image_url:'https://mobimg.b-cdn.net/v3/fetch/ad/ad9ecd9981913c4af8002ef2937e64eb.jpeg'},
    {id: '4', title: 'Стул',  description: 'Икеа, почти новый',image_url:'https://mobimg.b-cdn.net/v3/fetch/ad/ad9ecd9981913c4af8002ef2937e64eb.jpeg'},
    {id: '5', title: 'Кровать + матрасс',  description: 'Съезжаем, отдадим в хорошие руки',image_url:'https://mobimg.b-cdn.net/v3/fetch/ad/ad9ecd9981913c4af8002ef2937e64eb.jpeg'},
    {id: '6', title: 'Чайник',  description: 'просто чайник',image_url:'https://mobimg.b-cdn.net/v3/fetch/ad/ad9ecd9981913c4af8002ef2937e64eb.jpeg'},
    {id: '7', title: 'Ракетка для настольного тенниса',  description: 'Сын играл раньше проффессионально, сейчас перешел в балет',image_url:'https://mobimg.b-cdn.net/v3/fetch/ad/ad9ecd9981913c4af8002ef2937e64eb.jpeg'},
    {id: '8', title: 'Куртка',  description: 'Зимняя, теплая',image_url:'https://mobimg.b-cdn.net/v3/fetch/ad/ad9ecd9981913c4af8002ef2937e64eb.jpeg'},
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