import React,{useState,useEffect} from 'react'
import Typed from 'react-typed';
import axios from 'axios'

export default function Header() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get("http://quotes.stormconsultancy.co.uk/random.json")
        .then(res =>{
            console.log(res.data.quote)
            setPosts(res.data.quote)
        })
        .catch(err=> 
            console.log(err))
    },[]);

    const [posts1,setPosts1]=useState([])
    useEffect(()=>{
        axios.get("http://quotes.stormconsultancy.co.uk/random.json")
        .then(res =>{
            console.log(res.data.author)
            setPosts1(res.data.author)
        })
        .catch(err=> 
            console.log(err))
    },[]);
    
    
    return (
        <>
        <div className="header-wraper" id="main">
            <div className="main-info">
                <Typed
                className="typed-text"
                strings={[
                    'Welcome to my page AWESOME PEOPLE']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop />
                <div className="style_quotation">
                <p className="style_quote">
                    <q>{posts} </q>
                </p>
                <p className="style_author">
                    <cite>{posts1} </cite>
                </p>
                </div>
            </div>
        </div>
        </>
    )
    }


