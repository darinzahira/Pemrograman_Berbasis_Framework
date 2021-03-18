import React from 'react';

const Login = () =>{
    return (
        <div style={{marginTop: "50px"}}>
            <h2 class="text-center">Form Login</h2>
            <br></br>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                        <h2 class="text-center">Tugas Pertemuan</h2>
                        <h2 class="text-center">Ketiga</h2>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text"placeholder="Masukkan Username" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password"placeholder="Masukkan Password Anda" className="form-control"></input>
                                </div>
                                <br></br>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-success" type="button">Login</button>
                                </div>
                                <div>
                                <br></br>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Remeber Me
                                    </label>
                                </div>
                                <br></br>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="btn btn-danger" type="button">Cancel</button>
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