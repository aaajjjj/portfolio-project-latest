import React,{useState,useEffect} from 'react'
import Typed from 'react-typed';

export default function Header() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        const Url="https://api.quotable.io/random"
        const answer=fetch(Url)
        .then(response=>response.json())
        .then((data) => setPosts(data.content))
        .catch(res=> console.log(res))
    },[]);

    const [posts1,setPosts1]=useState([])
    useEffect(()=>{
        const Url="https://api.quotable.io/random"
        const answer=fetch(Url)
        .then(response=>response.json())
        .then((data) => setPosts1(data.author))
        .catch(res=> console.log(res))
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


