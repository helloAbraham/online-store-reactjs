import React,{ useState} from 'react';
import { doubleSale } from '../../api/authenticationService';
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

class ComponentToPrintTwo extends React.Component{
  
    constructor(props){
        super(props);
        
        this.state = {
            pNameOne:'',
            pNameTwo:'',
            quantityOne: 1,
            quantityTwo: 1,

            regPriceOne: 0,
            regPriceTwo:0,
            discountOne:20,
            discountTwo:20,
            priceOne: 0,
            priceTwo:0,
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
                let pNameOne=this.state.pNameOne;
                let pNameTwo=this.state.pNameTwo;
                let quantityOne=this.state.quantityOne;
                let quantityTwo=this.state.quantityTwo;
                let priceOne = this.state.priceOne;
                let priceTwo = this.state.priceTwo;
                let discountOne = this.state.discountOne;
                let discountTwo = this.state.discountTwo;

                let afterDiscountPriceOne = (this.state.quantityOne *this.state.regPriceOne) * (1 -(this.state.discountOne/100));
                let afterDiscountPriceTwo = (this.state.quantityTwo *this.state.regPriceTwo) * (1 -(this.state.discountTwo/100));
         // console.log(afterDiscountPrice);
                doubleSale({
                  pNameOne:pNameOne,
                  pNameTwo:pNameTwo,
                  quantityOne:quantityOne,
                  quantityTwo:quantityTwo,
                  priceOne:priceOne,
                  priceTwo:priceTwo,
                  discountOne:discountOne,
                  discountTwo:discountTwo,
                  priceOne:afterDiscountPriceOne,
                  priceTwo:afterDiscountPriceTwo,
                }).then((response)=>{
          
                  console.log("response",response);
                });
          
              }

             
              
              
    render(){
        const {pNameOne, pNameTwo, quantityOne, quantityTwo, regPriceOne, regPriceTwo, discountOne, discountTwo, priceOne, priceTwo, totalPrice} = this.state

        //since class base not using hook
        // const [data, setData] = useState({
        //     pName: '',
        //     quantity: '1',
        //     discount:'20',
        //     price:''
        //     });
        
           const afterDiscountPriceOne = Math.round([(this.state.quantityOne) * (this.state.regPriceOne) ] * (1 - (this.state.discountOne/100)));
           const afterDiscountPriceTwo = Math.round([(this.state.quantityTwo) * (this.state.regPriceTwo) ] * (1 - (this.state.discountTwo/100)));
        
        
            return (
              <Container>
                <div>
                
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
                      name="pNameOne"
                      placeholder='Item'
                      value= {pNameOne}
                      onChange={this.handleChange}
                      />

                    <input type="number" style={{display: 'margin-right:10px', maxWidth:'2.5em', border:'none', borderColor:'white'}}
                      name="quantityOne"
                      placeholder='Qtn'
                      value= {quantityOne}
                      onChange={this.handleChange}
                    />

                    <input type="number" style={{display: 'margin-right:10px',  maxWidth:'3.7em', border:'none', borderColor:'white'}}
                      name="regPriceOne"
                      placeholder='Price'
                      value= {regPriceOne}
                      onChange={this.handleChange}
                    />
        
                    <input type="number" style={{display: 'margin-right:10px',maxWidth:'2.5em', border:'none', borderColor:'white'}}
                      placeholder='discount %'
                      name="discountOne"
                      value= {discountOne}
                      onChange={this.handleChange}
                    />
                                
                    <input type="number" style={{display: 'margin-right:10px', maxWidth:'3.7em', border:'none', borderColor:'white'}}
                      placeholder='Amount'
                      name="priceOne"
                      placeholder='Price'
                      value= {afterDiscountPriceOne}
                      onChange={this.handleChange}
                      //required
                      />
                      <br></br>
                      <input type="text" style={{marginLeft:'3px', marginRight:'0px', maxWidth:'5em', border:'none', borderColor:'white'}}
                      name="pNameTwo"
                      placeholder='Item'
                      value= {pNameTwo}
                      onChange={this.handleChange}
                      />
                      <input type="number" style={{display: 'margin-right:10px', maxWidth:'2.5em',border:'none', borderColor:'white'}}
                      name="quantityTwo"
                      placeholder='Qtn'
                      value= {quantityTwo}
                      onChange={this.handleChange}
                    />
                    <input type="number" style={{display: 'margin-right:10px',  maxWidth:'3.7em', border:'none', borderColor:'white'}}
                      name="regPriceTwo"
                      placeholder='Price'
                      value= {regPriceTwo}
                      onChange={this.handleChange}
                    />
                    <input type="number" style={{display: 'margin-right:10px',maxWidth:'2.5em', border:'none', borderColor:'white'}}
                      placeholder='discount %'
                      name="discountTwo"
                      value= {discountTwo}
                      onChange={this.handleChange}
                    />
                    <input type="number" style={{display: 'margin-right:10px', maxWidth:'3.7em',border:'none', borderColor:'white'}}
                      placeholder='Amount'
                      name="priceTwo"
                      value= {afterDiscountPriceTwo}
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
                      value= {afterDiscountPriceOne + afterDiscountPriceTwo}
                      onChange={this.handleChange}
                      //required, here need two add two total price for pay
                      />  
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    <Label style={{marginLeft:'3px'}}> Thank you for shpping here.<br /><FaGlobe /> www.twinklemode.com</Label><br/>
                    <button type="submit">Sale</button>
                    
                    </form>
                    <br />
                    {<button style={{border:'none', backgroundColor:'none'}}><Link to="/dashboard" style={{ borderColor:'white', textDecoration: 'none', color:'black', background:"white" }}>****************************************</Link></button> }
                </div>
                </Container>
                 );
            }
}
export default ComponentToPrintTwo;

