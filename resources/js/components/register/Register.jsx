import React, { useEffect, useState  } from 'react';
import Swal from 'sweetalert2';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Register() {

    const [ name, setName ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ passwordConfirm, setPasswordConfirm ] = useState(null);

    const MessageError = async (data) => {
        Swal.fire({
          title: 'Error',
          text: data,
          icon: 'warning',
        })
    }

    const MessageSuccess = async (data) => {
        Swal.fire({
            text: data,
            icon: 'success',
        })
    }

    const limpiar = async() =>{
        setEmail('');
        setName('');
        setPassword('');
        setPasswordConfirm("");
    }

    const validateEmail = async (data) => {
        var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        console.log("validacion email");
        console.log(regex.test(data));
        return regex.test(data);

    }

    const create = async () => {

        var message = ''
        var error = false
        var res = await validateEmail(email)

        if(name == null){
            error = true
            message = "Debe escribir el nombre"
        }
        else if (res == false) {
            error = true
            message = "El correo no es correcto o está vacío"
        }
        else if (password == null) {
            error = true
            message = "El campo de contraseña no debe ir vacío"
        }
        else if (password.length > 6) {
            error = true
            message = "La contraseña no es correcta debe tener mínimo 6 caracteres"
        }
        else if (password != passwordConfirm) {
            error = true
            message = "las contraseñas no coinciden"
        }
        else{
          const data = new FormData()
          data.append('name', name)
          data.append('email',email)
          data.append('password', password)
          data.append('password_confirmation', passwordConfirm)
          axios.post('/api/admin/register',data).then(response=>{
            console.log("entro")
            console.log("saassasasa")
          console.log("aqui la respuesta de guardado: ",response);
          if (response) {
            MessageSuccess("Usuario creado correctamente")
            limpiar()
            window.location.replace("/");
         }
          else{
            MessageError(" No se logro crear el usuario")
            limpiar()
        }
        })
      }
    }

    return (
        <div className='container'>
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Crear una cuenta!</h1>
                                </div>
                                <form className="user">
                                    <div className="form-group row">
                                        <input type="text" className="form-control form-control-user" id="exampleInputEmail"
                                            placeholder="Nombres y apelldios" value = {name} onChange = {(e)=>setName(e.target.value)}>
                                        </input>
                                    </div>
                                    <div className="form-group row">
                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                            placeholder="Email" value = {email} onChange = {(e)=>setEmail(e.target.value)}>
                                        </input>
                                    </div>
                                    <div className="form-group row">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password" value={password} onChange = {(e)=>setPassword(e.target.value)}>
                                        </input>
                                    </div>

                                    <div className="form-group row">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password" value={passwordConfirm} onChange = {(e)=>setPasswordConfirm(e.target.value)}>
                                        </input>
                                    </div>
                                    <a onClick = {()=>create()} className="btn btn-primary btn-user btn-block">
                                        Registrar cuenta
                                    </a>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <div className="text-center">
                                    <a className="small" href="login">Already have an account? Login!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;

if (document.getElementById('register')) {
    ReactDOM.render(<Register />, document.getElementById('register'));
}

