const tg = window.Telegram.WebApp;

export function useTelegram(){

    const onClose =  () =>{
        tg.close()
    };

    // специальная кнопка для взаимодейсствия с тш
    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }
    return{
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
    }
}