import React from 'react';
//import { emailValidator, passwordValidator } from '../components/regexValidator';
import {useNavigate} from "react-router"
import solar5 from '../images/solar5.png';
import '../Styles/main.css'

const Login = () => {
	//const history = useHistory()

	const [input, setInput] = React.useState({ email: '', password: '' });

	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');
    const navigate = useNavigate();
	const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	// React.useEffect(()=>{
	// 	if(localStorage.getItem('auth')) history.push('/')
	// })

	const formSubmitter = e => {

		e.preventDefault();
		setsuccessMessage('');
		console.log("form submitted")
		// if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');

		// if (!passwordValidator(input.password))
		// 	return seterrorMessage(
		// 		'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
		// 	);
		// setsuccessMessage('Successfully Validated');
		if(input.email !== 'admin@gmail.com' || input.password !== 'Password@1') return seterrorMessage('Invalid email or password');

		//history.push('/admindash')
        navigate("/admin")
		localStorage.setItem('auth', true)

	};

	return (
		<div>
			<div className="limiter">
				<div className="container-login100" style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/clean-electric-energy-concept-renewable-electricity-resource-from-solar-panels-ecological-change-future-city-skyline-nature-landscape-background_93083-2597.jpg?w=900")' ,backgroundSize : 'auto'}}>
					<div className="wrap-login100 " style={{backgroundColor : 'transparent',height:'fit-content'}}>
						<form className="login100-form validate-form" onSubmit={formSubmitter}>
							<span className="login100-form-title m-b-20">Admin Login</span>
							{errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
							<div className="wrap-input100 validate-input m-b-23" data-validate="email is required">
								<span className="label-input100">Email</span>
								<input
									className="input100"
									type="text"
									name="email"
									placeholder="Type your username"
									onChange={handleChange}
									required
									style = {{color : 'black'}}
								/>
								<span className="focus-input100" data-symbol="" />
							</div>
							<div className="wrap-input100 validate-input" data-validate="Password is required">
								<span className="label-input100">Password</span>
								<input
									className="input100"
									type="password"
									name="password"
									placeholder="Type your password"
									onChange={handleChange}
									required
								/>
								<span className="focus-input100" data-symbol="" />
							</div>
							<br></br>
							<div className="container-login100-form-btn">
								
									
									<button className="login100-form-btn" style = {{backgroundColor:"#FFFFA7" , width : 'fit-content',padding : "10px 20px" ,borderRadius : '20px',color: 'black'}} >Login</button>
							
							</div>
							
							{/* <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17">Or Sign Up Using</span>
                <a href="#" className="txt2">
                  Sign Up
                </a>
              </div> */}
						</form>
					</div>
				</div>
			</div>
			<div id="dropDownSelect1" />
		</div>
	);
};

export default Login;
