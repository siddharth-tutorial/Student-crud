// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Student from './Student';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/student' element={<Student/>}/>
     </Routes>
    </div>
  );
}

export default App;
