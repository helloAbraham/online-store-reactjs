import {fetchUserData} from '../../api/authenticationService';
import { useNavigate, Link } from 'react-router-dom';

import React,{useState} from 'react';
import ComponentToPrint from '../dashboard/ComponentToPrint';

const CopyData=()=>{
    const [data,setData]=useState({});
    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data);
        }).catch((e)=>{
            localStorage.clear();
           // navigate('/');
        })
    },[])

    return(
        <div>
            <ComponentToPrint name={`${data.firstName} ${data.lastName}`}/>
            </div>
    )
}

export default CopyData;