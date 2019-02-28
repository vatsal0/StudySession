import Head from "next/head";
import LandingPage from "../components/LandingPage";
import io from "socket.io-client";

var socket = io('http://localhost:8000');
socket.on('connect', function(){
    console.log("Connected to server side");
});


const Main = (props) => {
    return (
        <div>
            <Head>
                <title>Welcome - Study Session</title>
                <link type="text/css" rel="stylesheet" href="/static/materialize.css"  media="screen,projection"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <script type="text/javascript" src="/static/materialize.js"></script>
            </Head>
            <LandingPage socket={socket}/>
        </div>
    )
    
}

export default Main;