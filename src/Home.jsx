import TypingAnimation from "./components/TypingAnimation/TypingAnimation.jsx";

const home = () => {
  return (
    <div className="container">
      <h1>Homefe</h1>
        <div className="row">
            <div className="column">
            <img src={"/assests/react.svg"}/>
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