import React, {useCallback, useEffect, useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import './Form.css'
import axios from "axios";

const Form = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const [telephone, setTelephone] = useState('Telegram');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            title,
            city,
            description,
            telephone
        }
        const mydata = {
            title: title,
            picture_url: "https://img2.akspic.ru/previews/5/8/2/8/6/168285/168285-astronavt-risovanie-kosmos-kosmicheskoe_prostranstvo-multfilm-500x.jpg",
            location: city,
            telephone: telephone,
            description: description
        }
        // поправить id того, кто отправляет посылку!!!
        axios.post(`http://localhost:8080/api/ads?id=10`,  mydata )
            .then(res => {
                console.log(res.data);
            })
        tg.sendData(JSON.stringify(data));
    }, [title,city,description,telephone])

    useEffect(()=>{
        tg.onEvent('mainButtonClicked', onSendData)
        return ()=>{
            tg.offEvent('mainButtonClicked', onSendData)
        }

    },[onSendData])

    useEffect(()=>{
        tg.MainButton.setParams({
            text:"Отправить"
        })
    },[])

    useEffect(()=>{
        if(!title || !description || !city){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    },[title,city,description])

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const onChangeTelephone = (e) => {
        setTelephone(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите информацию о товаре</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Название'}
                value={title}
                onChange={onChangeTitle}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Город'}
                value={city}
                onChange={onChangeCity}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Описание'}
                value={description}
                onChange={onChangeDescription}
            />
            <select value={telephone} onChange={onChangeTelephone} className={'select'}>
                <option value={'Telegram'}>Телеграм</option>
                <option value={'Telephone'}>Звонок по телефону</option>
            </select>
        </div>
    );
};

export default Form;