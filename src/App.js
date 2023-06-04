import {Routes, Route} from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Navigation/NavigationBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
