import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import Nav from './Nav';
import {authenticate, getUser} from './helpers'


const Login =(props) =>{
    const [state, setState] = useState({
        name:'',
        password:''
    })

    const {name, password} = state
    useEffect(()=>{
        getUser() && props.history.push('/');
    }, [])

    const handleChange =(name) => (event) =>{
        //console.log('name', name, 'event', event.target.value)
        setState({...state, [name]: event.target.value})
    };

     const handleSubmit= event =>{
            event.preventDefault();
            console.table({name, password});
            axios.post(`${process.env.REACT_APP_API}/login`, {name, password})
             .then((response)=>{
                 console.log(response)
                console.log(response.data.token);
                 authenticate(response, ()=> props.history.push('/create'))
                 
             })
             .catch((err)=>{
                 console.log(err.response)
                 alert(err.response.data.err);
             });
     };

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
                    <div className="col-md-6 mt-5 mx-auto">
                        <div className="container pb-5">
                            <h3>ADMINISTRATIVE LOGIN</h3>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="test-muted">Admin Username</label>
                                    <input onChange={handleChange('name')} value={name} type="text" className="form-control" placeholder="Enter Admin Username" required/>
                                </div>
                                <div className="form-group">
                                    <label className="test-muted">Admin Password</label>
                                    <input onChange={handleChange('password')} value={password} type="password" className="form-control" placeholder="Enter Admin Password " required/>
                                </div>
                                <div>
                                    <button className="button btn-primary">LOGIN</button>
                                </div>
        
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);