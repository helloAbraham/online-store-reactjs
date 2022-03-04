import React,{useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {fetchUserData} from '../../api/authenticationService';
import { useNavigate, Link } from 'react-router-dom';





const MainWrapper=styled.div`
    padding-top:40px;
`;

export const Dashboard=(props)=>{
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState({});


    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data);
        }).catch((e)=>{
            localStorage.clear();
            navigate('/');
        })
    },[])

    const logOut=()=>{
        localStorage.clear();
        navigate('/');

        //Lets pass user name to ComponentToPrint
    }
      
    return (
    
        <Container > 
            {/* <UsersNameDisplay name = {data && `${data.firstName} ${data.lastName}`} /> */}
            <MainWrapper>
                <div style={{backgroundColor: "#40BFB1"}}>
                <h1 style={{ textDecoration: 'none', color:'Red',  lineBottom: '0 px', textAlign:'center', fontFamily:'broadway', fontSize:'45px', textShadow: '5px 5px 25px white' }}>Twinkle</h1>
                <p style={{ textDecoration: 'none', color:'#FF00E2', textShadow: '1px 1px 3px white',textAlign:'Right', fontFamily:'Arial' }}>Outfit makes you happy.</p>
                </div>
        
                <h4>Welcome {data && `${data.firstName} ${data.lastName}`}</h4>
                <br></br>
                {<Button type="variant" color="white"><Link to="print" style={{ textDecoration: 'none', color:'Red' }}>I-Items</Link></Button> }
                <br></br>
                <br></br>
                {<Button type="variant" color="white"><Link to="printTwo" style={{ textDecoration: 'none', color:'Red' }}>II-Items</Link></Button> }
                <br></br>
                <br></br>
                {<Button type="variant" color="white"><Link to="printThree" style={{ textDecoration: 'none', color:'Red' }}>III-Items</Link></Button> }
                <br></br>
                <br></br>
                {<Button type="variant" color="white"><Link to="printFour" style={{ textDecoration: 'none', color:'Red' }}>IV-Items</Link></Button> }
        
                <br></br>
                <br></br>
                {<Button type="variant" color="white"><Link to="addEmp" style={{ textDecoration: 'none', color:'Red' }}>AddEmployee</Link></Button> }
                <br></br>
                <br></br>
                {<Button type="variant" color="white"><Link to="custInfo" style={{ textDecoration: 'none', color:'Red' }}>AddCustomerInfo</Link></Button> }
                <br></br>
                <br></br>
                {<Button type="variant" color="white"><Link to="timein" style={{ textDecoration: 'none', color:'Red' }}>EmployeeTimein</Link></Button> }
                <br></br>
                <br></br>
                {<Button type="variant" color="white"><Link to="timeout" style={{ textDecoration: 'none', color:'Red' }}>EmployeeTimeOut</Link></Button> }
                <br></br>
                <br></br>

                <br></br>
                {/* Admin Role related below*/}
                {data && data.roles && data.roles.filter(value => value.roleCode==='ADMIN').length>0 && <Button type="variant" color="white"><Link to="SalesOne" style={{ textDecoration: 'none', color:'Red' }}>I-Item</Link></Button> }
                <br></br>
                <br></br>
                {data && data.roles && data.roles.filter(value => value.roleCode==='ADMIN').length>0 && <Button type="variant" color="white"><Link to="SalesTwo" style={{ textDecoration: 'none', color:'Red' }}>II-Items</Link></Button> }
                <br></br>
                <br></br>
                {data && data.roles && data.roles.filter(value => value.roleCode==='ADMIN').length>0 && <Button type="variant" color="white"><Link to="SalesThree" style={{ textDecoration: 'none', color:'Red' }}>III-Items</Link></Button> }
                <br></br>
                <br></br>
                {data && data.roles && data.roles.filter(value => value.roleCode==='ADMIN').length>0 && <Button type="variant" color="white"><Link to="SalesFour" style={{ textDecoration: 'none', color:'Red' }}>IV-Items</Link></Button> }

                           
                
                {/* <SalesOne /> */}
                <Button style={{marginTop:'5px'}} onClick={() =>logOut()}>Logout</Button>
            </MainWrapper>
        </Container>
        
    )
}
