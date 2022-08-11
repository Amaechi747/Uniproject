// import './App.css';
import { Routes, Route } from "react-router-dom"
import { Signup } from './auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
