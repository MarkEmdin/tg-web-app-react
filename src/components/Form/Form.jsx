import React, {useCallback, useEffect, useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import './Form.css'

const Form = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [telephone, setTelephone] = useState('Telegram');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            title,
            description,
            telephone
        }
        tg.sendData(JSON.stringify(data));
    }, [title, description, telephone])

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
        if(!title || !description){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    },[title,description])

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
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