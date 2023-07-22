import TypingAnimation from "./components/TypingAnimation/TypingAnimation.jsx";

const home = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="column">
            <img src={"/assests/logo.png"}/>
            </div>
            <div className="column">
                <TypingAnimation />
            </div>
        </div>

    </div>
    //   <div>
    //   <About />
    //   </div>
    // <div> <Projects /> </div>
    // <div> <Contact /> </div>
  );
}

export default home;