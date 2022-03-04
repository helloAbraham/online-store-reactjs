import React,{useState} from 'react';
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../redux/authAction';
import './loginpage.css';
import {signupUser} from '../api/authenticationService';
import {Alert,Spinner} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage=({loading,error,...props})=>{

    const navigate = useNavigate(); // <-- call hook to get navigate function
    const [values, setValues] = useState({
        userName: '',
        password: '',
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:''
        });

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        props.authenticate();

        signupUser(values).then((response)=>{

            console.log("response",response);
            if(response.status===200){
                //console.log(response.data);
                props.setUser(response.data);
                navigate('/');
            }
            else{
               props.loginFailure('Something Wrong! Please Try Again'); 
            }

        }).catch((err)=>{

            if(err && err.response){
            
            switch(err.response.status){
                case 401:
                    console.log("401 status");
                    props.loginFailure("Authentication Failed.Bad Credentials");
                    break;
                default:
                    props.loginFailure('Something Wrong!Please Try Again'); 

            }

            }
            else{
                props.loginFailure('Something Wrong!Please Try Again');
            }
                

            

        });
        //console.log("Loading again",loading);

        
    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
        }));
    };

    console.log("Loading ", loading);

    return (
        <div className="login-page">
                   
              
                                            
        <section className="h-100">
        <div className="container h-100">
       
            <div className="row justify-content-md-center h-100">
                <div className="card-wrapper">

                    <div className="card fat">
                        <div className="card-body">
                            <h4 style={{ textDecoration: 'none', backgroundColor: "#03A9F4", color:'Red',  lineBottom: '0 px', textAlign:'center', fontFamily:'broadway', fontSize:'45px', textShadow: '5px 5px 25px white' }}>Twinkle ...</h4>
                                                      
                            <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                                <div className="form-group">
                                    <label htmlFor="username">User Name</label>
                                    <input id="username" type="text" className="form-control" minLength={5} value={values.userName} onChange={handleChange} name="userName" required />
                                </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input id="password" type="password" className="form-control" minLength={8} value={values.password} onChange={handleChange} name="password" required/>
                                        <div className="invalid-feedback">
                                        Password is required
                                    </div>

                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input id="firstName" type="text" className="form-control" minLength={5} value={values.firstName} onChange={handleChange} name="firstName" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input id="lastName" type="text" className="form-control" minLength={5} value={values.lastName} onChange={handleChange} name="lastName" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email" type="text" className="form-control" minLength={5} value={values.email} onChange={handleChange} name="email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone </label>
                                    <input id="phoneNumber" type="text" className="form-control" minLength={5} value={values.phoneNumber} onChange={handleChange} name="phoneNumber" required />
                                </div>

                                </div>                            

                                <div className="form-group m-0">
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                        {loading && (
                                            <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                          />
                                        )}
                                        {/* <ClipLoader
                                        //css={override}
                                        size={20}
                                        color={"#123abc"}
                                        loading={loading}
                                        /> */}
                                    </button>
                                </div>
                            </form>
                            { error &&
                            <Alert style={{marginTop:'20px'}} variant="danger">
                                    {error}
                                </Alert>

                            }
                            
        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )


    
}

const mapStateToProps=({auth})=>{
    console.log("state ",auth)
    return {
        loading:auth.loading,
        error:auth.error
}}


const mapDispatchToProps=(dispatch)=>{

    return {
        authenticate :()=> dispatch(authenticate()),
        setUser:(data)=> dispatch(authSuccess(data)),
        loginFailure:(message)=>dispatch(authFailure(message))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);