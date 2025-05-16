import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const AddProduct = () => {
    const [inputData, setInputData] =useState({id:"", title:"", description:"", price:"", img:""})
    const navigate = useNavigate()

    const addProduct = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:3001/products/`, inputData)
        .then(res=>{
            navigate('/')
        }).catch(console.log(err))
    }

    return(
        <div className="container mt-5 d-flex justify-content-center align-items-center">
            <div className="card w-50">
                <div className="card-header text-light" style={{backgroundColor:"rgb(233, 69, 96)",color:"#fff"}}>
                        <h3>Add user</h3>
                </div>
                <form onSubmit={addProduct}> 
                    <input placeholder="id" className="form-control mb-1 mt-4" onChange={e=>setInputData({...inputData, id : e.target.value})} type="number" /> <br />
                    <input className="form-control mb-1" onChange={e=>setInputData({...inputData, title : e.target.value})} placeholder="title" type="text" /><br />
                    <input className="form-control mb-1" onChange={e=>setInputData({...inputData, description : e.target.value})} placeholder="Description" type="text" /><br />
                    <input className="form-control mb-1" onChange={e=>setInputData({...inputData, price : e.target.value})} placeholder="price" type="text" /><br />
                    <input className="form-control mb-1" onChange={e=>setInputData({...inputData, img : e.target.value})} placeholder="img" type="file" /><br />                          
                    <button className="btn float-end" style={{backgroundColor:"rgb(233, 69, 96)",color:"#fff"}}>add</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct