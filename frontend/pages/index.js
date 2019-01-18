import Head from "next/head";
import LandingPage from "../components/LandingPage";

const Main = (props) => {
    return (
        <div>
            <Head>
                <title>Welcome - Study Session</title>
                <link type="text/css" rel="stylesheet" href="/static/materialize.css"  media="screen,projection"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <script type="text/javascript" src="/static/materialize.js"></script>
            </Head>
            <LandingPage />
        </div>
    )
    
}

export default Main;