import { useState, useRef, useEffect } from "react";
//import { useState, useRef, useEffect } from "react";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
*/

const Home = () => {
  //uncomment this for testing
  //const [activePage, setActivePage] = useState("mintcompletepage");
  const [activePage, setActivePage] = useState("home");


  const refreshPage = () => {
    window.location.reload();
  };

  if (activePage === "home") {
    return (
      <div id="homepage">
        <div id="centered-div">
        <img id="num-img" src="Numb3r.png"/>
        <img id="binary-num-img" src="binary-numbers.png"/>
        </div>
      </div>
    );
  }
};

export default Home;
