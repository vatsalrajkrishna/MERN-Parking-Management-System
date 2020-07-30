import React, {useState, useEffect, Component} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import Nav from './Nav';
import {authenticate, getUser, getToken} from './helpers'
import { Button } from '@material-ui/core';

class Token extends Component{
    
    render(){
        
        
            
        window.x = sessionStorage.getItem("token");
        window.y = sessionStorage.getItem("user");
            
      
        
        return(

        <div>
            <div class="header">
            <div class="container">   

                <h3>PARKING MANAGEMENT SYSTEM</h3>

            </div>
        </div> 
        <div class="logo wow fadeInDown animated" data-wow-delay=".5s">
            <Nav />
        </div>
    

        
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <div className="container pb-5">
                        <h3>TOKEN LOGGED IN</h3>
                        <hr />
                        
                       UserName: <p >{window.y}</p>
                        Token: <p style={{width:'10px', display: 'flex'}}>{window.x}</p>
                        
                    </div>
                </div>
            </div>
        </div>
   </div>
        )
    }
}
   
  

export default Token;