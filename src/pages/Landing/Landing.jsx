import Logo from "assets/logo/android-chrome-192x192.png";
import { Wrapper } from "./styles";

const Landing = () => {
    return (
        <Wrapper className="landing">
            <nav className="landing__nav">
                <img src={Logo} alt="fyj" />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Job <span>tracking</span> app</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ex cum iure neque sit, quos ab at ducimus praesentium, ullam quis dolor id minima excepturi veritatis omnis architecto quia libero?</p>
                    <p>You are new? <a href="#">Register</a></p>
                    <button className="btn btn-hero">Login</button>
                </div>
            </div>
        </Wrapper>
    )
}

export default Landing