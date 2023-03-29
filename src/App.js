import Birthdayreminemain from "./compoents/FunctionalComponents/BithdayReminder/Birthdayreminemain.js";
import TourContainer from "./compoents/FunctionalComponents/Tour/TourContainer";
import { Reviewmain } from "./compoents/FunctionalComponents/Review/Reviewmain";
import AccordianContainer from "./compoents/FunctionalComponents/Accordian/AccordianContainer";
import FoodMenuContainer from "./compoents/FunctionalComponents/FoodMenu/FoodMenuContainer";
import TabsContainer from "./compoents/FunctionalComponents/Tabs/TabsContainer";
import SliderContainer from "./compoents/FunctionalComponents/Slider/SliderContainer";
import Header from "./compoents/common/Header";
import ErrorPage from "./compoents/FunctionalComponents/Error/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DigitalClock from "./compoents/FunctionalComponents/Clock/DigitalClock";
import "./scss/style.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Birthdayreminemain />}></Route>
        <Route path="/" element={<Birthdayreminemain />}></Route>
        <Route path="/tours" element={<TourContainer />}></Route>
        <Route path="/review" element={<SliderContainer />}></Route>
        <Route path="/faq" element={<AccordianContainer />}></Route>
        <Route path="/foods" element={<FoodMenuContainer />}></Route>
        <Route path="/employee" element={<TabsContainer />}></Route>
        <Route path="/reviews" element={<Reviewmain />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
