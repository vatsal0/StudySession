import styled from "styled-components";

const Container = styled.div`
    font-family: "Segoe UI";
    text-align: center;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
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
    div {
        max-width: 20%;
    }
    #or-container {
        max-width:100%;
        width: 100%;
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
    
`

export default Container;