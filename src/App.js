
import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";



function App() {
    const {tg, onToggleButton} = useTelegram()

    useEffect(()=>{
        tg.ready(); // метод сообщает о том, что приложение инициализировалось
    },[])

    const onClose = () =>{
        tg.close();
    }

  return (
    <div className="App">
        <Header/>
        <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
