import React, { Component } from "react";

//login del usuario
const Registrarse = () => {
  return (
    <>
      <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src="../src/assets/images/img-01.png" alt="IMG"/>
				</div>

				<form className="login100-form validate-form">
					<span className="login100-form-title">
						Registrate
					</span>

					<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" placeholder="Email"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Password is required" >
                        <input className="input100" type="text" name="email" placeholder="Email"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>

                    <div className="wrap-input100 validate-input" data-validate="">
						<input className="input100" type="text" name="Nombre" placeholder="name"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="">
						<input className="input100" type="text" name="Apellido" placeholder="last name"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
					<div className="wrap-input100 validate-input" data-validate="">
						<input className="input100" type="text" name="Telefono" placeholder="Phone number"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="">
						<input className="input100" type="date" name="Fecha" placeholder="birthday"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="">
						<input className="input100" type="text" name="Direccion" placeholder="Adress"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Registrate
						</button>
					</div>
					<div className="text-center p-t-136">
						<a className="txt2" href="./src/components/Registrarse.jsx">
							Log in
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    </>
  );
};

export default Registrarse;