import { useState } from "react";
import { Inventory } from "../functions/Inventory";
import { CreateNave } from "../functions/CreateNave";
import { Footer } from "../views/Footer";
import Modal from '../components/Modal';

export function Home() {
    const [ error,setError ] = useState();
    const [ modalStateCreateNave, changeState ] = useState(false);
    const [ inputText, setInputText ] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.toLowerCase();
        setInputText(lowerCase);
    }

    return (
        <>
        <div id="header" className="header">
            <h2>Estacion Espacial Sofka</h2>
            <button className="button" type="button" onClick={()=> changeState(!modalStateCreateNave)}>Crear Nave</button>
        </div>

        <div id="content">
            <Modal state={modalStateCreateNave} changeState={changeState}>
                <CreateNave/>
            </Modal>
        </div>

        <Inventory/>
        
        <div>&nbsp;</div>
        <Footer/>
        </>
    )
}