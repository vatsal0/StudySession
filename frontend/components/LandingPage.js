import Container from "./styles/LandingPageStyle"

const LandingPage = (props) => {
    return (
        <div>
            <Container className="">
                <h1 className="grey-text text-lighten-4">
                    Study Session
                </h1>
                <form>
                    <div className="row input-field">
                        <input id="join_code" type="text" className="validate blue-text text-lighten-3" />
                        <label htmlFor="join_code" className="green-text text-lighten-3">
                            Enter a session code
                        </label>
                    </div>
                </form>
                <button className="btn teal lighten-1 waves-effect waves-light">
                    Join
                </button>
                <div id="or-container"><p className="grey-text text-lighten-4">OR</p></div>
                <p className="green-text text-lighten-3"><strong>Start a new session</strong></p>
                <button className="btn teal lighten-1 waves-effect waves-light">
                    Create
                </button>
            </Container>
        </div>
    )
    
}

export default LandingPage;