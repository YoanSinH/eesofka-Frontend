import { useState } from "react";
import { APIURL } from "../url";
import { onPutAxios } from "../components/ApiClient";
import Swal from "sweetalert2";

const url = APIURL+"/api/nave/"

export function EditNave(){
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

    const handleEdit = () => {
        onPutAxios(url,navesInfoId,{
            id: navesInfoId,
            name: data.name,
            type: data.type,
            emitter: data.emitter,
            destination: data.destination,
            mission: data.mission,

        });
        Swal.fire({
            title: "Nave Editada",
            icon: "success",
            timer: 1500,
            timerProgressBar: true
        })
    }

    return(
        <>
        </>
    )
}

/*
        <form id="formNave" onSubmit={onSubmit}>
            <div><p>Editar nave</p></div>
            <div>
                <label>Nombre </label>
                <input type="text" name="name" id="name" autoComplete="off" onChange={handleChange}>{navesInfo.name}</input>
            </div>
            <div>
                <label>Tipo de Nave </label>
                <input type="text" name="type" id="type" autoComplete="off" onChange={handleChange}>{navesInfo.type}</input>
            </div>
            <div>
                <label>Emisor </label>
                <input type="text" name="emitter" id="emitter" autoComplete="off" onChange={handleChange}>{navesInfo.emitter}</input>
            </div>
            <div>
                <label>Destino </label>
                <input type="text" name="destination" id="destination" autoComplete="off" onChange={handleChange}>{navesInfo.destination}</input>
            </div>
            <div>
                <label>Mision </label>
                <input type="text" name="mission" id="mission" autoComplete="off" onChange={handleChange}>{navesInfo.mission}</input>
            </div>

            <button name="createNave" onClick={handleEdit}>Enviar</button>
        </form>
*/