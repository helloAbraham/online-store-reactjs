import React from 'react';
import axios from 'axios';


const getToken=()=>{                                   //replace by USER_KEY
    return localStorage.getItem('authenticatedUser'); //here we can say authenticatedUser
                                                    //also need to change AuthAction.js
}

export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:8081'}/api/v1/auth/login`,
        'data':authRequest
    })
}

//Let's create the signup page to new user sign up, here not adding token
export const signupUser=(authPost)=> {
    return axios({
        'method':'POST',
        'url':`${process.env.hotsUrl || 'http://localhost:8081'}/api/v1/auth/signup`,
        headers:{
            'accept':'application/json',
            //'Authorization':'Bearer '+ getToken()
        },
        'data':authPost
    })

}

//This I'm trying to do that below way 

export const singleSale=(authPost)=> {
    return axios({
        'method':'POST',
        'url':`${process.env.hotsUrl || 'http://localhost:8081'}/api/v1/addSalesOne`,
        headers:{
            'Authorization':'Bearer '+ getToken()
        },
        'data':authPost

    })

}

export const doubleSale=(authPost)=> {
    return axios({
        'method':'POST',
        'url':`${process.env.hotsUrl || 'http://localhost:8081'}/api/v1/addSalesTwo`,
        headers:{
            'Authorization':'Bearer '+ getToken()
        },
        'data':authPost

    })

}

export const tripleSale=(authPost)=> {
    return axios({
        'method':'POST',
        'url':`${process.env.hotsUrl || 'http://localhost:8081'}/api/v1/addSalesThree`,
        headers:{
            'Authorization':'Bearer '+ getToken()
        },
        'data':authPost

    })

}

export const fourthSale=(authPost)=> {
    return axios({
        'method':'POST',
        'url':`${process.env.hotsUrl || 'http://localhost:8081'}/api/v1/addSalesFour`,
        headers:{
            'Authorization':'Bearer '+ getToken()
        },
        'data':authPost

    })

}

//Authorized person can add new employee
export const addNewEmployee=(authPost)=> {
    return axios({
        'method':'POST',
        'url':`${process.env.hotsUrl || 'http://localhost:8081'}/api/v1/auth/addemp`,
        headers:{
            'Authorization':'Bearer '+ getToken()
        },
        'data':authPost

    })

}

//Employees timein post 
export const empTimeIn=(authPost)=> {
    return axios({
        'method':'POST',
        'url':`${process.env.hotsUrl || 'http://localhost:8081'}/api/v1/auth/timein`,
        headers:{
            'Authorization':'Bearer '+ getToken()
        },
        'data':authPost
    })
}

//Employees timeout
export const empTimeOut=(authPost)=> {
    return axios({
        'method':'POST',
        'url':`${process.env.hotsUrl || 'http://localhost:8081'}/api/v1/auth/timeout`,
        headers:{
            'Authorization':'Bearer '+ getToken()
        },
        'data':authPost

    })
}

//Let's addCustomerInfo 
export const addCustInfo=(authPost)=> {
    return axios({
        'method':'POST',
        'url':`${process.env.hotsUrl || 'http://localhost:8081'}/api/v1/auth/addCustomer`,
        headers:{
            'Authorization':'Bearer '+ getToken()
        },
        'data':authPost

    })

}

export const fetchUserData=(authRequest)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8081'}/api/v1/auth/userinfo`,
        headers:{
            'Authorization':'Bearer '+ getToken()
        }
    })
};


