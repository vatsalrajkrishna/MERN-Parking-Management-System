import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Nav from './Nav'
import {getUser} from './helpers';

const Expiry = () => {
    
    const [posts, setPosts] =useState([])

    const fetchPosts =() =>{
        window.v=0;
 
        axios.get(`${process.env.REACT_APP_API}/posts`)
            .then((response)=>{
                window.JSONQury = {};  
                console.table(response.data)
               var l=(response.data.length);
               //console.log(l);
               window.date= new Date().toLocaleDateString();
            //    console.log(window.date);
            //    console.log("Vatsal")
            window.j=0;
                for(var i=0;i<l;i++)
                {
                    var d=response.data[i]
                    var t=new Date(d.createdAt).toLocaleDateString();
                    //console.log(t); 
                   // console.log(d.createdAt)
                    if(t!=window.date)
                    {
                        // console.log(t);
                        window.v=response.data[i];
                        window.JSONQury[window.j]=window.v.num
                        console.table(window.JSONQury[window.j]) 
                        window.j++;
                            setPosts(response.data);    
                    }
                }  
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
    window.date= new Date()
    window.date=window.date.toLocaleString()

    return(
        
        <div>

       
        
            <div class="logo wow fadeInDown animated" data-wow-delay=".5s">
                <Nav />
            </div>

            <br /><br /><br />
            <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <div className="container pb-5">
                        <h3>EXPIRED VEHICLE NUMBERS</h3>
                        <hr />
                       VEHICLE NUMBER: <p style={{width:'10px', display: 'flex', color:'red'}}>{ JSON.stringify(window.JSONQury)}</p>
                        
                    </div>  
                </div>
            </div>
        </div>


        <div class="footer">
            <p>© Copyright 2020-21</p>
        </div>
        </div>
    );

    
}

export default Expiry;