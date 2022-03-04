import React,{useState, useRef} from 'react';
import { singleSale } from '../../api/authenticationService';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';


const MainWrapper=styled.div`
    padding-top:40px;
`;

const SalesOne=()=>{
 // const url = `http://localhost:8080/api/v1/addSalesOne`
  const [data, setData] = useState({
    pName: '',
    quantity: '1',
    discount:'20',
    price:''
    });

    function handleChange(e) {
      const newData = {... data}
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData)
    }

    function handleSubmit(e){
      e.preventDefault();

      singleSale(data).then((response)=>{

        console.log("response",response);
      });
    }

    
  return (
    <Container>
      <MainWrapper>
     
      <div style={{backgroundColor: "#03A9F4"}} >
                <h1 style={{ textDecoration: 'none', color:'Red',  lineBottom: '0 px', textAlign:'center', fontFamily:'broadway', fontSize:'45px', textShadow: '5px 5px 25px white' }}>Twinkle</h1>
                <p style={{ textDecoration: 'none', color:'#FF00E2', textShadow: '1px 1px 3px white',textAlign:'Right', fontFamily:'Arial' }}>Outfit makes you happy.</p>
                </div>
        <form onSubmit={ (e) => handleSubmit(e)}>
          <input type="text"
          id="pName"
          value= {data.pName}
          onChange={(e) =>handleChange(e)}
          />

        <input type="number"
          id="quantity"
          value= {data.quantity}
          onChange={(e) =>handleChange(e)}
          />

<        input type="number"
          placeholder='discount %'
          id="discount"
          value= {data.discount}
          onChange={(e) =>handleChange(e)}
          />

        <input type="number"
          placeholder='Amount'
          id="price"
          value= {data.price}
          onChange={(e) =>handleChange(e)}
          required
          />
        <button type="submit">Sale</button>
     
        </form>
        </MainWrapper>
    </Container>
  );
}


export default SalesOne;
