import styled from "styled-components";

const Container = styled.div`
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
        display: block;
        position: relative;
        height: 50%;
    }
    form {
        div {
            input {
                max-width: 20%;
            }
            label {
                display: block;
            }
        }
    }
    
`

export default Container;