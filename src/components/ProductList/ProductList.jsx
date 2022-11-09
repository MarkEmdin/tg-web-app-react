import React, {useEffect, useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import axios from "axios";
import './ProductList.css'


const productsTest = [
    {user_id: '1', title: 'Джинсы', description: 'Синего цвета, прямые',picture_url:'https://static.reserved.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/3/0/3046C-55J-010-1-324961.jpg'},
    {user_id: '2', title: 'Шкаф',  description: 'Два отсева, самовывоз',picture_url:'https://res.cloudinary.com/lmru/image/upload/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/v1/LMCode/82841405.jpg'},
    {user_id: '3', title: 'Кровать',  description: 'Всего одна ножка, подходит если вас зовут Семен',picture_url:'https://ormamebel.ru/wa-data/public/shop/products/40/26/2640/images/14229/14229.970.jpeg'},
    {user_id: '4', title: 'Стул',  description: 'Икеа, почти новый',picture_url:'https://basket-03.wb.ru/vol406/part40610/40610228/images/big/1.jpg'},
    {user_id: '5', title: 'Кровать + матрасс',  description: 'Съезжаем, отдадим в хорошие руки',picture_url:'https://remstroiblog.ru/wp-content/uploads/2017/11/matras-Askona.jpg'},
    {user_id: '6', title: 'Чайник',  description: 'просто чайник',picture_url:'data:image/jpeg;base64,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'},
    {user_id: '7', title: 'Ракетка для настольного тенниса',  description: 'Сын играл раньше проффессионально, сейчас перешел в балет',picture_url:'https://s8.stc.all.kpcdn.net/expert/wp-content/uploads/2021/11/8-35.jpg'},
    {user_id: '8', title: 'Куртка',  description: 'Зимняя, теплая',picture_url:'data:image/jpeg;base64,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'},
]

const ProductList = () => {
    const {tg} = useTelegram();
    const [ads,setAds] = useState([{}])
    const [currentProduct,setCurrentProduct] = useState({})

    // для отправки данных об одном товаре боту
    useEffect(()=>{
        tg.onEvent('mainButtonClicked', onSendData)
        return ()=>{
            tg.offEvent('mainButtonClicked', onSendData)
        }

    },[onSendData])

    // для инициализации списка все товаров
    useEffect(() => {
        const apiUrl = 'http://localhost:8080/api/ads/';
        axios.get(apiUrl).then((resp) => {
            const allAds = resp.data;
            // console.log(typeof (allAds));
            setAds(allAds);
        });
    }, [setAds]);

    const onSendData  = () =>{
        tg.sendData(JSON.stringify(currentProduct));
    }

    // обрабатываем нажатие на кнопку товара
    const onAdd = (product) =>{
        setCurrentProduct(product);
        tg.MainButton.setParams({
            text:`${product.user_id}`
        })
        tg.MainButton.show()

        // срабатваает когда нажимают кнопку "написать" у тавара
        // отправляем запрос в бот, чтобы он написал сообщение с контактима человека
        console.log(`Что бы получить "${product.title}" необходимо написать пользователю по id #id${product.user_id}` );
    }

    return (
        <div className={'list'}>
            {productsTest.map(item => (
                <ProductItem
                    key = {item.id + item.title}
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;