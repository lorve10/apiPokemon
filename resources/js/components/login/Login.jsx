import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import api from '../services/axios';

const Login = () => {
    const [ error, setError ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(()=>{

      async function fetchDataToken(){
        const res = await localStorage.getItem('myToken');
        if (res) {
          // console.log("tiene token "+res);
          // window.location.replace("admin/index");
        }
      }

      fetchDataToken();

    },[])

    const onClickLogin = async () => {

      const data = { email, password }

      const res = await api.post('auth',data);

      if (res.success&&res.token) {
        setLoading(true)
        localStorage.setItem('myToken', res.token);
        // alert(JSON.stringify(res.token))
        window.location.replace("pokemon");
      }
      if (!res.success) {
        setLoading(false)
        setError(res.message)
      }
    }
    return (
        <div className='container'>
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Bienvenido!</h1>
                                    </div>
                                      <div className="form-group">
                                          <input type="email" className="form-control form-control-user" aria-describedby="emailHelp"
                                              placeholder="Ingrese email..." value={email} onChange={(event)=>setEmail(event.target.value)} />
                                      </div>
                                      <div className="form-group">
                                          <input type="password" className="form-control form-control-user" placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                                      </div>
                                      <button className="btn btn-primary btn-user btn-block" onClick={()=>onClickLogin()}>
                                          Login
                                      </button>
                                      <br />
                                      {
                                        error&&
                                        <div class="sufee-alert alert with-close alert-danger alert-dismissible fade show">
                                          {error}
                                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                          </button>
                                        </div>
                                      }
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <a className="small" href={"register"}>Crear una cuenta!</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Login;
if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
