import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Nav from './Nav'
import {getUser} from './helpers';

const Read = () => {
    const [posts, setPosts] =useState([])

    const fetchPosts =() =>{
        axios.get(`${process.env.REACT_APP_API}/posts`)
            .then((response)=>{
                console.log(response)
                setPosts(response.data)
            })
            .catch((err)=>{
                alert('Error in fetching Data');
            })
    };

    useEffect(() =>{
        fetchPosts()
    }, [])

    const deleteConfirm= (slug) => {
        let answer= window.confirm('Are you sure that you want to delete this post?')
        if(answer){
            deletePost(slug)
        }
    }
    
    const deletePost= (slug) => {
        //console.log('delete', slug, 'post');
        axios.delete(`${process.env.REACT_APP_API}/post/${slug}`)
            .then((response)=> {
                alert(response.data.message)
                fetchPosts()
            })
            .catch((err) =>alert('Error while deleting the data, please try again'))
    }

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
        


        <div className="container p-5">
            {
                posts.map((post, index)=>(
                    <div className="row" key={post._id} style={{borderBottom:'1px solid silver'}}>
                        <div className="col pt-3 pb-2">

                            <div className="row">
                                <div className="col-md-8">
                                    <Link to={`/post/${post.slug}`}><h2>{post.num}</h2></Link>
                                    <h2 className="lead">{post.content}</h2>
                                    <h3>{post.user}</h3>
                                    <h5>Fee Taken: {post.fee}</h5>
                                    <p className="badge">Coming From: {post.from}</p>
                                    <p className="badge">Arrived On{''}<span className="badge">{new Date(post.createdAt).toLocaleString()}</span></p>
                                    <p className="badge">Expiry On{''}<span className="badge">{new Date(post.createdAt).getDate()}</span></p>
                                    <p className="badge">Expiry On{''}<span className="badge">{new Date(post.createdAt).getDate()+1}</span></p>

                                </div>

                                {getUser() && (
                                    <div className="col-md-4">
                                    <Link to={`/post/update/${post.slug}`} className="btn btn-sm btn-outline-warning">
                                        UPDATE 
                                    </Link>
                                    <button onClick={() => deleteConfirm(post.slug)} className="btn btn-sm btn-outline-danger ml-1">DELETE</button>
                                </div>
                                )}

                            </div>
                           
                        </div>
                    </div>    
                ))
            }
        
        </div>
        <div class="footer">
            <p>© Copyright 2020-21</p>
        </div>
        </div>
    );

    
}

export default Read;