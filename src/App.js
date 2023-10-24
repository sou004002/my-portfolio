import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <Router>
      <div className="App">
        <Header />
        <HomePage />
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes> */}
        {/* <Footer /> */}
      </div>
    // </Router>
  );
}

export default App;
