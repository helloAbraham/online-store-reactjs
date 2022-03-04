import React, {useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { Button } from 'react-bootstrap';

import ComponentToPrintTwo from './ComponentToPrintTwo';


export default function PrintComponentTwo(){
    let componentRef = useRef();

    return (
        <>
        
        <div>
            {/* button to trigger printing of target component */}
            
            {/* component to be printed */}
            <ComponentToPrintTwo ref={(elm)=> (componentRef = elm)} />
            <ReactToPrint
            trigger={()=> <Button>Print</Button>}
            content = {() => componentRef}
            />

        </div>
        </>
    )
}