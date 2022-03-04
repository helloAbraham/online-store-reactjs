import React,{useState} from 'react';
import { singleSale } from '../../api/authenticationService';
import '../LoginPage';



const SalesTwo=()=>{
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
        <div>
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
        </div>
      );
    }
    
    export default SalesTwo;