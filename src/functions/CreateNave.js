import { useState } from "react";
import { APIURL } from "../url";
import { onPostAxios } from "../components/ApiClient";
import Swal from "sweetalert2";

const url = APIURL+"/api/nave/"

export function CreateNave(){
    const formNave = document.getElementById("formNave")
    const onSubmit = (e) => {
        e.preventDefault();
    };

    const [data,setData] = useState({
        name: "",
        type: "",
        emitter: "",
        destination: "",
        mission: "",
    });

    const handleChange = ({target: {name,value}}) => {
        setData({ ...data,[name]: value})
    }

    const handleUpload = () => {
        onPostAxios(url,data);
        formNave.reset();
        setData({...data,name: ''});
        setData({...data,type: ''});
        setData({...data,emitter: ''});
        setData({...data,destination: ''});
        setData({...data,mission: ''});
        Swal.fire({
            title: "Nave Creada",
            icon: "success",
            timer: 1500,
            timerProgressBar: true
        })
    }

    return(
        <>
        <div><h3>Crear nave</h3></div>
        <form id="formNave" onSubmit={onSubmit}>
            
            <div className="">
                <label>Nombre </label>
                <input className="input" type="text" name="name" id="name" autoComplete="off" placeholder="Nombre de la nave" onChange={handleChange}></input>
            </div>
            <div>
                <label>Tipo de Nave </label>      
                <select className="input" type="select" name="type" id="type" onChange={handleChange}>
                    <option value="Lanzadera">Lanzadera</option>
                    <option value="No tripulada">No tripulada</option>
                    <option value="Tripulada">Tripulada</option>

                </select>
            </div>
            <div>
                <label>Emisor </label>
                <input className="input" type="text" name="emitter" id="emitter" autoComplete="off" placeholder="País emisor" onChange={handleChange}></input>
            </div>
            <div>
                <label>Destino </label>
                <input className="input" type="text" name="destination" id="destination" autoComplete="off" placeholder="Destino" onChange={handleChange}></input>
            </div>
            <div>
                <label>Mision </label>
                <input className="input" type="text" name="mission" id="mission" autoComplete="off" placeholder="Mision de la nave" onChange={handleChange}></input>
            </div>
            <br></br>
            <button className="button" name="createNave" onClick={handleUpload}>Enviar</button>
        </form>
        </>
    )
}