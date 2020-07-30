import React, {useState} from 'react';
import axios from 'axios';

import Nav from './Nav';

const Create= () => {
    const [state, setState] = useState({
        num: '',
        content:'',
        fee:'',
        from: '',
        user:''
    })

    const {num, content, fee, from, user} =state

    const handleChange =(name) => (event) =>{
        //console.log('name', name, 'event', event.target.value)
        setState({...state, [name]: event.target.value})
    };

    const handleSubmit=event =>{
        event.preventDefault()
        console.table({num, content, from, user});
        axios.post(`${process.env.REACT_APP_API}/post`, {num, content, fee, from, user})
            .then((response)=>{
                console.log(response)
                setState({...state, num: '', content: '', fee: '', from: '', user: ''}) 
                alert(`Vehicle Number ${response.data.num} data is saved successfully`);
            })
            .catch((err)=>{
                console.log(err.response)
                alert(err.response.data.err);
            })
    };
    function isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }

    return (
        <div>
        
            <div class="header">
                <div class="container">   
   
                    <h3>PARKING MANAGEMENT SYSTEM</h3>
    
                </div>
            </div> 
            <div class="logo wow fadeInDown animated" data-wow-delay=".5s">
                <Nav />
            </div>
        

        <div className="container p-5">

          <h3>ENTER VEHICLE INFORMATION </h3>
            <br/>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="test-muted">Vehicle Type</label>
                    <select name="monthofbirth" onChange={handleChange('content')} className="form-control" placeholder="Please Select Vehicle Type" required>
                        <option selected="true" disabled>Please Select Vehicle Type</option>
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
                    <label className="test-muted">Fees Taken</label>
                    <input onChange={handleChange('fee')} value={fee} type="number" className="form-control" onkeypress="return isNumberKey(event)" placeholder="Enter Fee Taken at Arrival " required/>
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
          
        </div>
        <br />
        <div class="footer">
            <p>© Copyright 2020-21</p>
        </div>

        </div>
        );
};


export default Create;
