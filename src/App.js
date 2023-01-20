import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Header from './component/Header/Header';
import About from './component/page/about/about';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
