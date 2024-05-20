import "./App.css";
import image from "./assets/images/image-equilibrium.jpg";
import diamond from "./assets/images/icon-ethereum.svg";
import time from "./assets/images/icon-clock.svg";
import avatar from "./assets/images/image-avatar.png";
import eye from "./assets/images/icon-view.svg";

const App = () => {
  return (
    <>
      <div className="container d-flex justify-content-center  align-items-center min-vh-100   ">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="main-container text-white  rounded-4 p-3">
              <div className="img-container w-100  ">
                <img className="w-100 rounded-4" src={image} alt="" />
                <div className="overlay d-flex justify-content-center align-items-center">
                  <img src={eye} alt="..." />
                </div>
              </div>
              <div className="content mt-3 ms-1">
                <h5 className=" hover-design">Equilibrium #3429</h5>

                <p className="content-para">
                  Our Equilibrium collection promotes balance and calm.
                </p>
              </div>

              <div className="rate-time d-flex justify-content-between   pt-2   ">
                <span>
                  {" "}
                  <img className="pe-2 pb-1 " src={diamond} alt="" />
                  0.041 ETH
                </span>
                <span>
                  {" "}
                  <img className="pe-2 pb-1" src={time} alt="" />3 days left
                </span>
              </div>

              <div className="breaker"></div>
              <div className=" author-content d-flex align-items-center mt-2 ">
                <div className="author-pfp  ">
                  <img src={avatar} className="  w-100 bg-white" style={{height:"40px",borderRadius:"50%", padding:"1px"}} alt="" />
                </div>
                <div className="author-name ms-2">
                  <span className="fw-bold  " style={{color:"#455c76"}}>Creation of</span> <span className="hover-design"> Jules Wyvern</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
