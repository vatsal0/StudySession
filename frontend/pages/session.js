import React, {Component} from "react";
import Controller from "../lib/Controller";
import Session from "../components/Session";
import Head from "next/head";

const socket = Controller.getSocket();
const code = Controller.getSessionCode();
console.log(Controller);

const Page = () => {
    return (
        
    <div> 
         <Head>
                <title>Session {code}</title>
                <link type="text/css" rel="stylesheet" href="/static/materialize.css"  media="screen,projection"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <script type="text/javascript" src="/static/materialize.js"></script>
            </Head>
        <Session socket={socket} code={code}></Session>
    </div>
    
    )
}

export default Page;