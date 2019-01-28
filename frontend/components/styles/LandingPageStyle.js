import styled from "styled-components";

const Container = styled.div`
    background-color:#182628;
    font-family: "Segoe UI";
    text-align: center;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    button {
        border-radius: 5px;
        height: 6%;
        width: 8%;
        display: inline-block;
        border: 0px;
        font: 1.5rem "Segoe UI";
    }
    h1 {
        font: 4rem sans-serif;
        height: 30%;
    }
    #or-container {
        height: 16%;
        line-height: 8em;
        text-align: center;
        p {
            display: inline-block;
            vertical-align: middle;
            line-height: normal;
            font-size: 1.5rem;
        }
    }
    form {
        div {
            max-width: 20%;
        }
    }
    
`

export default Container;