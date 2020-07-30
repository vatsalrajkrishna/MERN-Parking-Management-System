import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Nav from './Nav'

const UpdateData =(props) =>{
   
    const [state, setState] =useState({
        num: '',
        content: '',
        slug: '',
        fee:'',
        from: '',
        user: ''   
    })

    const {num, content, slug, fee, from, user}= state;



    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
            .then((response)=> {
                const {num, content, slug, fee, from, user} =response.data
                setState({...state, num, content, slug, fee, from, user})
            })
            .catch((err) => alert('Error in loading data'))
    },[]);

    const handleChange =(name) => (event) =>{
        //console.log('name', name, 'event', event.target.value)
        setState({...state, [name]: event.target.value})
    };

    const handleSubmit=event =>{
        event.preventDefault()
        //console.table({num, content, user});
        axios.put(`${process.env.REACT_APP_API}/post/${slug}`, {num, content, fee, from, user})
            .then((response)=>{
                console.log(response)
                const {num, content, slug, fee, from, user} = response.data
                setState({...state,num, content, slug, fee, from, user}) 
                alert(`Vehicle Number ${response.data.num} data is updated successfully`);
            })
            .catch((err)=>{
                console.log(err.response)
                alert(err.response.data.err);
            })
    };


    const showUpdateForm =() => (
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="test-muted">Vehicle Type</label>
                    <select name="monthofbirth" onChange={handleChange('content')} className="form-control" required>
                        <option selected="true" disabled>Please Select Vehicle Type in case of previous error</option>
                        <option value="Bicycle">Bicycle</option>
                        <option value="2 Wheelers">2 Wheelers</option>
                        <option value="3 Wheelers">3 Wheelers</option>
                        <option value="4 Wheelers">4 Wheelers</option>
                        <option value="Rickshaw">Rickshaw</option>
                    </select>                
                </div>
                <div className="form-group">
                    <label className="test-muted">Vehicle Number</label>
                    <input onChange={handleChange('num')} value={num} type="text" className="form-control" placeholder="Enter Vehicle Number" required/>
                </div>
                <div className="form-group">
                    <label className="test-muted">Total Fees Taken Now </label>
                    <input onChange={handleChange('fee')} value={fee} type="number" className="form-control" placeholder="Enter Total Fee taken now " required/>
                </div>
                <div className="form-group">
                    <label className="test-muted">Vehicle Coming From</label>
                    <input onChange={handleChange('from')} value={from} type="text" className="form-control" placeholder="Enter Vehicle Coming From " required/>
                </div>
                <div className="form-group">
                    <label className="test-muted">Username</label>
                    <input onChange={handleChange('user')} value={user} type="text" className="form-control" placeholder="Enter Owner Name" required/>
                </div>
                <div>
                    <button className="button btn-primary">Save</button>
                </div>
        
            </form>
    )

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
        

        <div className="container pb-5">
            
            <br />
            <h2>UPDATE DETAILS</h2>

            {showUpdateForm()}
            
        </div>
        </div>
    )
};

export default UpdateData;