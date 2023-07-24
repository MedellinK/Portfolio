import TypingAnimation from "./components/TypingAnimation/TypingAnimation.jsx";

const home = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="column">
                <img src={"/assets/logo.jpeg"}/>
            </div>
            <div className="column">
                <TypingAnimation />
            </div>
        </div>

    </div>
  );
}

export default home;