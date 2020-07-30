import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';


const SingleRead =(props) =>{
    const [post, setPost] = useState('');


    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
            .then((response)=> setPost(response.data))
            .catch((err) => alert('Error in loading data'))
    },[]);
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
        <br />
        <div className="container pb-5">
            <h1>{post.num}</h1>
            <h2 className="lead">{post.content}</h2>
            <h3>{post.user}</h3>
            <h5>Fee Taken: {post.fee}</h5>
            <p className="badge">Coming From: {post.from}</p>
            <p className="badge">Arrived On{''}<span className="badge">{new Date(post.createdAt).toLocaleString()}</span></p>
        </div>
                   

        </div>
    )
};

export default SingleRead;