import { useEffect, useState, useReducer} from "react";
import { APIURL } from "../url";
import { onDelete } from "../components/ApiClient"
import Swal from "sweetalert2";

const urlGet = APIURL+"/api/nave/"
const urlDelete = APIURL+"/api/nave/"

export function Inventory(){

    const [naves, setnaves] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [setError] = useState();
    const [reducerValue,forceUpdate] = useReducer(x=>x+1,0)

    useEffect(() =>{
        fetchData();
        function fetchNavesList() {
        }
        fetchNavesList()
    },[reducerValue]) // eslint-disable-line react-hooks/exhaustive-deps

    const fetchData = async () =>{
        await fetch(urlGet, {method: 'GET'})
        .then(response => response.json())
        .then((data) => setnaves(data))
        .catch(error => console.log("Error en la API "+error))
        forceUpdate()
    }

    function deleteAction (url,id){
        Swal.fire({
            title: "¿Estas Seguro?",
            text: "Accion irreversible",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar.',
        }).then((result) => {
            if (result.isConfirmed){
                onDelete(url,id);
                fetchData();
                Swal.fire(
                    "Eliminado",
                    "La nave fue eliminada.",
                    "success"
                )
            }
        })
    }

    return(
        <div>
            <input
            className="input"
            type="text"
            placeholder="Buscar por Nombre, Tipo, Emisor, Destino."
            onChange={(event) =>{
                setSearchTerm(event.target.value);
            }}
            ></input>
            <h1>Naves Sofkianas</h1>
        <div id="divtable" className="container">
        <table id="inventory">
            <tr className="tr">
                <th className="tr">Nombre</th>
                <th className="tr">Tipo</th>
                <th className="tr">Emisor</th>
                <th className="tr">Destino</th>
                <th className="tr">Mision</th>
                <th className="tr">Acciones</th>
            </tr>
            {naves.filter((val)=>{
                if(searchTerm === ""){
                    return val
                }else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }else if (val.type.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }else if (val.emitter.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }else if (val.destination.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }else if (val.mission.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map(navesInfo =>{
                    return(
                        <>
                        <tr>
                        <th id="name">{navesInfo.name}</th>
                        <th id="type">{navesInfo.type}</th>
                        <th id="emitter">{navesInfo.emitter}</th>
                        <th id="destination">{navesInfo.destination}</th>
                        <th id="mission">{navesInfo.mission}</th>
                        <th id="acciones"> <button onClick={() => deleteAction(urlDelete,navesInfo.id)}>Eliminar</button></th>
                        </tr>
                        </>   
                    )
            })
            }

        </table>
        </div>
        </div>
    )
}