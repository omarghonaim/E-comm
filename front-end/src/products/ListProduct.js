import Header from "../Header";
import { Table } from 'react-bootstrap';
import React,{ useEffect, useState } from "react";
function ListProduct() {
    const [data, setData] = useState([]);
    async function getData(){
        let result = await fetch("http://127.0.0.1:8000/api/list");
        result = await result.json();
        setData(result);
    }

    useEffect(async ()=> {
            getData()
    }, [])
   async function deleteOper(id){
        let result = await fetch('http://127.0.0.1:8000/api/delete/'+id,{
            method:'DELETE',
            
        });
        result = result.json();
        getData();
    }
    return (
        <>
            <Header />
            
                <h1>product list site</h1>
                <div className='col-sm-8 offset-sm-2 '>
                <Table >
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Operations</th>
                        </tr>
                    
                        {
                            data.map((item)=>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td><img style={{width:100}} src={"http://localhost:8000/" + item.file_path}/></td>
                                    <td><button onClick={()=>deleteOper(item.id)} className='btn btn-danger' style={{backgroundColor: '#dc3545'}}>Delete</button>
                                     
                                     </td>
                                </tr>
                            )
                        }   

                </Table>
                </div>
        </>
    )

}
export default ListProduct