import React,{useState} from 'react';
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../redux/authAction';
import './loginpage.css';
import {addNewEmployee} from '../api/authenticationService';
import {Alert,Spinner} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const getToken=()=>{                                   //replace by USER_KEY
    return localStorage.getItem('authenticatedUser'); //here we can say authenticatedUser                                                //also need to change AuthAction.js
    }
const AddEmployee=({loading,error,...props})=>{

    const navigate = useNavigate(); // <-- call hook to get navigate function
    const [values, setValues] = useState({
        empid: '',
        empName: '',
        phoneNumber:'',
        email:'',
        });

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        props.authenticate();

        addNewEmployee(values).then((response)=>{

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
                        <h4 style={{ textDecoration: 'none', backgroundColor: "#40BFB1", color:'Red',  lineBottom: '0 px', textAlign:'center', fontFamily:'broadway', fontSize:'45px', textShadow: '5px 5px 25px white' }}>Twinkle ...</h4>
                            <h5 style={{ textDecoration: 'none', backgroundColor: "white", color:'black',  lineBottom: '0 px', textAlign:'center', fontFamily:'broadway', fontSize:'30px', textShadow: '5px 5px 25px white' }} ><FaUserCircle /></h5> 
                            
                            <h5 style={{ textDecoration: 'none', backgroundColor: "#00d084", color:'#ff9800',  lineBottom: '0 px', textAlign:'center', fontFamily:'broadway', fontSize:'30px', textShadow: '5px 5px 25px white' }} >Add Employee</h5>  
                                                 
                            <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                                <div className="form-group">
                                    <label htmlFor="empid">Employee Id</label>
                                    <input id="empid" type="number" className="form-control" minLength={5} value={values.empid} onChange={handleChange} name="empid" required />
                                </div>

                                    <div className="form-group">
                                        <label>Employee Name</label>
                                        <input id="empName" type="text" className="form-control" minLength={8} value={values.empName} onChange={handleChange} name="empName" required/>

                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone</label>
                                    <input id="phoneNumber" type="text" className="form-control" minLength={5} value={values.phoneNumber} onChange={handleChange} name="phoneNumber" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email" type="text" className="form-control" minLength={5} value={values.email} onChange={handleChange} name="email" required />
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
                                <br></br>
                                <div>
                                    {<button className="btn btn-primary" style={{border:'none', backgroundColor:'none', leftMargin:'125px'}}><Link to="/dashboard" style={{ borderColor:'white', textDecoration: 'none', color:'black', background:"white" }}>Go Back Dashboard</Link></button> }
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


export default connect(mapStateToProps,mapDispatchToProps)(AddEmployee);