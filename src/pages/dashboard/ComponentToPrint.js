import React,{ useState} from 'react';
import { singleSale } from '../../api/authenticationService';
import styled from 'styled-components';
import {Container, Form} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';


const StyledInput = styled(Form.Control)`
font-size:12px;
padding:2px 5px;
`;

const SentenceInput = styled.input`
padding:0;
margin: 0;
border: none;
border: 1px solid black;
/* added styles */
font-family: inherit;
font-size: inherit;
position: absolute;
vertical-align: top;
top: 0;
left: 0;
width: 100%;
background: white;
` 
const Label = styled.label`
  display: inline-block;
  position: relative;
  min-width: 2em;
  min-height: 1.4em;
`


const Template = styled.span`
  white-space: pre;
  /* max-width : could be wised to set a maximum width and overflow:hidden; */
`
const getToken=()=>{                                   //replace by USER_KEY
      return localStorage.getItem('authenticatedUser'); //here we can say authenticatedUser                                                //also need to change AuthAction.js
      }

class ComponentToPrint extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pName:'',
            quantity: 1,
            regPrice: 0,
            discount:20,
            price: 0,
            totalPrice: 0,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
        this.handleChangeDiscount=this.handleChangeDiscount.bind(this)
        this.handleChangeRegPrice = this.handleChangeRegPrice.bind(this)    
        
        this.state={
                curTime: new Date().toLocaleString()
              }
            
    }

    //I need to change each of state since I'm going to calculate 
 handleChange = e => {
              this.setState({
                  [e.target.name]: e.target.value
                })
            }

  handleChangeDiscount = (e)=>{
        this.setState({
          discount: e.target.value
        })
  }

  handleChangeRegPrice = (e) =>{
              this.setState({
                regPrice: e.target.value
              })
  }

//     calAfterDiscountPrice= (e)=>{
//          this.setState({
//            price: this.regPrice*(1- (this.discount)/100)
//          })
//     }

 handleSubmit = e =>{
                e.preventDefault();
                let pName=this.state.pName;
                let quantity=this.state.quantity;
                let price = this.state.price;
                let discount = this.state.discount;
                let afterDiscountPrice = (this.state.quantity *this.state.regPrice) * (1 -(this.state.discount/100));
         // console.log(afterDiscountPrice);
                singleSale({
                  pName:pName,
                  quantity:quantity,
                  price:price,
                  discount:discount,
                  price:afterDiscountPrice,
                }).then((response)=>{
          
                  console.log("response",response);
                });
          
              }
              
    render(){
        const {pName, quantity, regPrice, discount, price, totalPrice} = this.state

        //since class base not using hook
        // const [data, setData] = useState({
        //     pName: '',
        //     quantity: '1',
        //     discount:'20',
        //     price:''
        //     });
        
           const afterDiscountPrice = Math.round([(this.state.quantity) * (this.state.regPrice) ] * (1 - (this.state.discount/100)));
        
        
            return (
              <Container>
                <div style={{backgroundImage:'none'}}>
                
                  <h1 style={{ textDecoration: 'none', color:'black', marginLeft:'35px', marginTop:'10px',  lineBottom: '0px', textAlign:'left', fontFamily:'broadway', fontSize:'45px', textShadow: '5px 5px 25px white' }}> Twinkle</h1>
                  <h4 style={{ textDecoration: 'none', color:'black', marginLeft:'125px', lineHeight: '0 px', textAlign:'left', fontFamily:'arial', fontSize:'12px', textShadow: '5px 5px 25px white' }}>Outfit makes you happy.<br /> Phone +8801774647159</h4>
                  <h4 style={{ textDecoration: 'none', color:'black', marginLeft:'3px', lineHeight: '0 px', textAlign:'left', fontFamily:'arial', fontSize:'12px', textShadow: '5px 5px 25px white' }}> 
                  <FaMapMarkerAlt /> 245, PB Road, Interseection of G.L Ray Road <br />Rangpur, Beside Agomony Bus Depo.
                  <br/>Date: {this.state.curTime}</h4>
                 
                  <form onSubmit={this.handleSubmit} >
                        <label style={{marginLeft:'3px'}}> Item Name| Qtn | Price ....| Dst |Amount</label>
                        <br />
                        <label style={{marginLeft:'3px'}}>-------------------------------------------</label>
                       <br />
                      <input type="text" style={{marginLeft:'3px', marginRight:'0px', maxWidth:'5em', border:'none', borderColor:'white'}}
                      name="pName"
                      placeholder='Item'
                      value= {pName}
                      onChange={this.handleChange}
                      />
            
                    <input type="number" style={{display: 'margin-right:10px', maxWidth:'2.5em', border:'none', borderColor:'white'}}
                      name="quantity"
                      placeholder='Qtn'
                      value= {quantity}
                      onChange={this.handleChange}
                      />

                    <input type="number" style={{display: 'margin-right:10px',  maxWidth:'3.7em', border:'none', borderColor:'white'}}
                      name="regPrice"
                      placeholder='Price'
                      value= {regPrice}
                      onChange={this.handleChange}
                      />
            
                    <input type="number" style={{display: 'margin-right:10px',maxWidth:'2.5em', border:'none', borderColor:'white'}}
                      placeholder='discount %'
                      name="discount"
                      value= {discount}
                      onChange={this.handleChange}
                      />
            
                    <input type="number" style={{display: 'margin-right:10px', maxWidth:'3.7em', border:'none', borderColor:'white'}}
                      placeholder='Amount'
                      name="price"
                      value= {afterDiscountPrice}
                      onChange={this.handleChange}
                      //required
                      />
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <label style={{marginLeft:'8em', maxWidth:'5.5em'}}>Total BDT = </label>
                      <input type="number" style={{ maxWidth:'5em', border:'none', borderColor:'white'}}
                      placeholder='Amount'
                      name="totalPrice"
                      value= {afterDiscountPrice}
                      onChange={this.handleChange}
                      //required
                      />  
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    <Label style={{marginLeft:'3px'}}> Thank you for shpping here.<br /><FaGlobe /> www.twinklemode.com</Label><br/>
                    <button type="submit">Sale</button>
                
                    </form>
                    {<button style={{border:'none', backgroundColor:'none'}}><Link to="/dashboard" style={{ borderColor:'white', textDecoration: 'none', color:'black', background:"white" }}>****************************************</Link></button> }
                </div>
                </Container>
                 );
            }
}
export default ComponentToPrint;