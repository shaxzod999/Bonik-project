// import axios from "axios"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom"

const Register = () => {
    // const [inputData, setInputData] = useState({name:"", password:""})
    // const navigate = useNavigate()

    // const register = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:3001/users', inputData).
    //     then((res)=>navigate('/')).catch((err)=>console.log(err))
    // }

    return(
        // <div className="container w-100 d-flex justify-content-center align-items-center py-5">
        //     <div className="card w-50">
        //         <div className="card-header bg-primary text-light"><h3>Register</h3></div>
        //         <div className="card-body">
        //             <form onSubmit={register}>
        //                 <input onChange={(e)=>setInputData({...inputData, name: e.target.value})} className="form-control mb-2" type="text" />
        //                 <input onChange={(e)=>setInputData({...inputData, password: e.target.value})} className="form-control mb-2" type="text" />
        //                 <button className="btn"> register </button>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <div class="container w-100 d-flex flex-column justify-content-center align-items-center py-5">
            <div class="alert alert- w-50 m-auto my-3" role="alert"></div>
            <div class="card shadow">
                <div class="card-header " style={{backgroundColor:"rgb(233, 69, 96)",color:"#fff"}}>
                    <h3>Register</h3>
                </div>
                <div class="card-body">
                    <form>
                        <div class="w-100 d-flex justify-content-between gap-2 mb-3">
                            <div class="w-50">
                                <label for="">Firstname</label>
                                <input required="" placeholder="Andrey" class="w-100 form-control" type="text"/>
                            </div>
                            <div class="w-50">
                                <label for="">Lastname</label>
                                <input required="" placeholder="Molodsov" class="w-100 form-control" type="text"/>
                            </div>
                        </div>
                        <div class="w-100 d-flex justify-content-between gap-2 mb-3">
                            <div class="w-50">
                                <label for="">Email</label>
                                <input required="" placeholder="example@gmail.com" class="w-100 form-control" type="email"/>
                            </div>
                            <div class="w-50">
                                <label for="">Username</label>
                                <input required="" placeholder="Andrey1" class="w-100 form-control" type="text" />
                            </div>
                        </div>
                        <div class="w-100 d-flex justify-content-between gap-2 ">
                            <div class="w-50">
                                <label for="">Password</label>
                                <input required="" placeholder="********" class="w-100 form-control" type="text"/>
                            </div>
                            <div class="w-50">
                                <label for="">Confirm_password</label>
                                <input required="" placeholder="********" class="w-100 form-control" type="text"/>
                            </div>
                        </div>
                        <div class="w-100 d-flex justify-content-between gap-2 ">
                            <div class="w-100">
                                <label for="">Role</label>
                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option hidden="" class="form-control" value=""></option>
                                    <option class="form-control" value="users">Users</option>
                                    <option class="form-control" value="admins">Admin</option>
                                    <option class="form-control" value="kitchen">Kitchen</option>
                                    <option class="form-control" value="delivery">Delivery</option>
                                    <option class="form-control" value="manager">Manager</option>
                                </select>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex gap-2 align-items-center">
                                <p class="p-0 m-0">have you an account</p>
                                <a class="my-2 " type="button" href="/login">Login</a>
                            </div>
                            <Link to={'/login'} class="btn float-end my-2" style={{backgroundColor:"rgb(233, 69, 96)",color:"#fff"}}>Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default Register