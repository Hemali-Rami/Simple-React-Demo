import Birthdayreminemain from "./compoents/FunctionalComponents/BithdayReminder/Birthdayreminemain.js";
import TourContainer from "./compoents/FunctionalComponents/Tour/TourContainer";
import { Reviewmain } from "./compoents/FunctionalComponents/Review/Reviewmain";
import  AccordianContainer  from "./compoents/FunctionalComponents/Accordian/AccordianContainer";
import "./scss/style.css";
function App() {
  return (
    <>
      <Birthdayreminemain />
      <TourContainer />
      <Reviewmain />
      <AccordianContainer />
    </>
  );
}

export default App;
