import Container from "./styles/LandingPageStyle"

const LandingPage = (props) => {
    return (
        <div>
            <Container className="teal darken-2">
                <h1 className="light-green-text text-accent-2">
                    Study Session
                </h1>
                <form>
                    <div className="row">
                        <label htmlFor="join_code" className="light-blue-text text-lighten-3 text-accent-4">
                            Enter a session code
                        </label>
                        <input id="join_code" type="text" className="validate" />
                    </div>
                </form>
                <button className="btn teal lighten-2 waves-effect waves-light">
                    Join
                </button>
            </Container>
        </div>
    )
    
}

export default LandingPage;