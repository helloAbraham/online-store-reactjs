import React from 'react';

class ChildComponent extends React.Component{
    render(){
    return(
      
        <h2> {this.props.message} </h2>
    );
    }
}
export default ChildComponent;