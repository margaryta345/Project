import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Footer from './components/Footer'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import AbouUs from "./pages/AbouUs";
import Course from "./pages/Course";
import CourseMain from "./pages/CourseMain";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      {/* <Main/> */}
    {/* <AbouUs/> */}
    {/* <Course/> */}
    {/* <Test/> */}
    <CourseMain/>
      <Footer/>
    </div>
  );
}

export default App;
