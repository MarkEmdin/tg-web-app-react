import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom';
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";



function App() {
    const {tg} = useTelegram()

    useEffect(()=>{
        tg.ready(); // метод сообщает о том, что приложение инициализировалось
    },[])

  return (
    <div className="App">
        <Header/>
        <Routes>
            {/*<Route index element = {<Form/>} />*/}
            <Route index element = {<ProductList/>} />
            <Route path={'form'} element={<Form />}/>
        </Routes>
    </div>
  );
}

export default App;
