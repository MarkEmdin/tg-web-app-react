
import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
const tg = window.Telegram.WebApp;


function App() {

    useEffect(()=>{
        tg.ready(); // метод сообщает о том, что приложение инициализировалось
    },[])

    const onClose = () =>{
        tg.close();
    }

  return (
    <div className="App">
        <Header></Header>
        <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
