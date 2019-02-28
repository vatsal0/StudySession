import styled from "styled-components";

const Panel = styled.div`
    width: 20%;
    height: 40%;
    position:absolute;
    z-index: 0;
    top:30%;
    left:40%;
        text-align: center;
    h5 {
        height: 10%;
        display: block;
    }
    input {
        display: block;
    }
    p {
        vertical-align: top;
    }
    button {
        border-radius: 5px;
        height: 15%;
        width: 40%;
        left:30%;
        top:10%;
        display: block;
        border: 0px;
        font: 1.2rem "Segoe UI";
    }
`

export default Panel;