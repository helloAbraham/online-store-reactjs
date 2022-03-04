import React,{ useState} from 'react';
import { fourthSale } from '../../api/authenticationService';
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

class ComponentToPrintFour extends React.Component{
  
    constructor(props){
        super(props);
        
        this.state = {
            pNameOne:'',
            pNameTwo:'',
            pNameThree:'',
            pNameFour:'',

            quantityOne: 1,
            quantityTwo: 1,
            quantityThree:1,
            quantityFour:1,

            regPriceOne: 0,
            regPriceTwo:0,
            regPriceThree:0,
            regPriceFour:0,

            discountOne:20,
            discountTwo:20,
            discountThree:20,
            discountFour:20,

            priceOne: 0,
            priceTwo:0,
            priceThree:0,
            priceFour:0,

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
                let pNameThree=this.state.pNameThree;
                let pNameFour=this.state.pNameFour;

                let quantityOne=this.state.quantityOne;
                let quantityTwo=this.state.quantityTwo;
                let quantityThree=this.state.quantityThree;
                let quantityFour = this.state.quantityFour;

                let priceOne = this.state.priceOne;
                let priceTwo = this.state.priceTwo;
                let priceThree=this.state.priceThree;
                let priceFour = this.state.priceFour;

                let discountOne = this.state.discountOne;
                let discountTwo = this.state.discountTwo;
                let discountThree=this.state.discountThree;
                let discountFour = this.state.discountFour;

                let afterDiscountPriceOne = (this.state.quantityOne *this.state.regPriceOne) * (1 -(this.state.discountOne/100));
                let afterDiscountPriceTwo = (this.state.quantityTwo *this.state.regPriceTwo) * (1 -(this.state.discountTwo/100));
                let afterDiscountPriceThree = (this.state.quantityThree *this.state.regPriceThree) * (1 -(this.state.discountThree/100));
                let afterDiscountPriceFour = (this.state.quantityFour *this.state.regPriceFour) * (1 -(this.state.discountFour/100));
         // console.log(afterDiscountPrice);
                fourthSale({
                  pNameOne:pNameOne,
                  pNameTwo:pNameTwo,
                  pNameThree:pNameThree,
                  pNameFour:pNameFour,

                  quantityOne:quantityOne,
                  quantityTwo:quantityTwo,
                  quantityThree:quantityThree,
                  quantityFour:quantityFour,

                  priceOne:priceOne,
                  priceTwo:priceTwo,
                  priceThree:priceThree,
                  priceFour:priceFour,

                  discountOne:discountOne,
                  discountTwo:discountTwo,
                  discountThree:discountThree,
                  discountFour:discountFour,

                  priceOne:afterDiscountPriceOne,
                  priceTwo:afterDiscountPriceTwo,
                  priceThree:afterDiscountPriceThree,
                  priceFour:afterDiscountPriceFour,

                }).then((response)=>{
          
                  console.log("response",response);
                });
          
              }

              
    render(){
        const {pNameOne, pNameTwo, pNameThree, pNameFour, quantityOne, quantityTwo, quantityThree, quantityFour, 
                regPriceOne, regPriceTwo, regPriceThree, regPriceFour, discountOne, discountTwo, discountThree, 
                discountFour,
                priceOne, priceTwo, priceThree, priceFour, totalPrice} = this.state

        //since class base not using hook
        // const [data, setData] = useState({
        //     pName: '',
        //     quantity: '1',
        //     discount:'20',
        //     price:''
        //     });
        
           const afterDiscountPriceOne = Math.round([(this.state.quantityOne) * (this.state.regPriceOne) ] * (1 - (this.state.discountOne/100)));
           const afterDiscountPriceTwo = Math.round([(this.state.quantityTwo) * (this.state.regPriceTwo) ] * (1 - (this.state.discountTwo/100)));
           const afterDiscountPriceThree = Math.round([(this.state.quantityThree) * (this.state.regPriceThree) ] * (1 - (this.state.discountThree/100)));
           const afterDiscountPriceFour = Math.round([(this.state.quantityFour) * (this.state.regPriceFour) ] * (1 - (this.state.discountFour/100)));
        
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
                      <input type="number" style={{display: 'margin-right:10px', maxWidth:'2.5em', border:'none', borderColor:'white'}}
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
                    <input type="number" style={{display: 'margin-right:10px', maxWidth:'3.7em', border:'none', borderColor:'white'}}
                      placeholder='Amount'
                      name="priceTwo"
                      value= {afterDiscountPriceTwo}
                      onChange={this.handleChange}
                      //required
                      />
                    <br></br>
                    <input type="text" style={{marginLeft:'3px', marginRight:'0px', maxWidth:'5em', border:'none', borderColor:'white'}}
                      name="pNameThree"
                      placeholder='Item'
                      value= {pNameThree}
                      onChange={this.handleChange}
                      />
                      <input type="number" style={{display: 'margin-right:10px', maxWidth:'2.5em', border:'none', borderColor:'white'}}
                      name="quantityThree"
                      placeholder='Qtn'
                      value= {quantityThree}
                      onChange={this.handleChange}
                    />
                    <input type="number" style={{display: 'margin-right:10px',  maxWidth:'3.7em', border:'none', borderColor:'white'}}
                      name="regPriceThree"
                      placeholder='Price'
                      value= {regPriceThree}
                      onChange={this.handleChange}
                    />
                    <input type="number" style={{display: 'margin-right:10px',maxWidth:'2.5em', border:'none', borderColor:'white'}}
                      placeholder='discount %'
                      name="discountThree"
                      value= {discountThree}
                      onChange={this.handleChange}
                    />

                    <input type="number" style={{display: 'margin-right:10px', maxWidth:'3.7em', border:'none', borderColor:'white'}}
                      placeholder='Amount'
                      name="priceThree"
                      value= {afterDiscountPriceThree}
                      onChange={this.handleChange}
                      //required
                      />
                      <br></br>
                      <input type="text" style={{marginLeft:'3px', marginRight:'0px', maxWidth:'5em', border:'none', borderColor:'white'}}
                      name="pNameFour"
                      placeholder='Item'
                      value= {pNameFour}
                      onChange={this.handleChange}
                      />
                      <input type="number" style={{display: 'margin-right:10px', maxWidth:'2.5em', border:'none', borderColor:'white'}}
                      name="quantityFour"
                      placeholder='Qtn'
                      value= {quantityFour}
                      onChange={this.handleChange}
                    />
                    <input type="number" style={{display: 'margin-right:10px',  maxWidth:'3.7em', border:'none', borderColor:'white'}}
                      name="regPriceFour"
                      placeholder='Price'
                      value= {regPriceFour}
                      onChange={this.handleChange}
                    />
                    <input type="number" style={{display: 'margin-right:10px',maxWidth:'2.5em', border:'none', borderColor:'white'}}
                      placeholder='discount %'
                      name="discountFour"
                      value= {discountFour}
                      onChange={this.handleChange}
                    />

                    <input type="number" style={{display: 'margin-right:10px', maxWidth:'3.7em', border:'none', borderColor:'white'}}
                      placeholder='Amount'
                      name="priceFour"
                      value= {afterDiscountPriceFour}
                      onChange={this.handleChange}
                      //required
                      />
                      <br></br>
                      <br></br>
                      
                                           
                      <label style={{marginLeft:'8em', maxWidth:'5.5em'}}>Total BDT = </label>
                      <input type="number" style={{ maxWidth:'5em', border:'none', borderColor:'white'}}
                      placeholder='Amount'
                      name="totalPrice"
                      value= {afterDiscountPriceOne + afterDiscountPriceTwo + afterDiscountPriceThree + afterDiscountPriceFour}
                      onChange={this.handleChange}
                      //required, here need two add two total price for pay
                      />  
                      <br></br>
                      <br></br>
                      <br></br>
                  
                  
                    <Label style={{marginLeft:'3px'}}> Thank you for shpping here.<br />< FaGlobe /> www.twinklemode.com</Label><br/>
                    <button type="submit">Sale</button>
                    
                    </form>
                    <br />
                    {<button style={{border:'none', backgroundColor:'none'}}><Link to="/dashboard" style={{ borderColor:'white', textDecoration: 'none', color:'black', background:"white" }}>****************************************</Link></button> }
                </div>
                </Container>
                 );
            }
}
export default ComponentToPrintFour;

