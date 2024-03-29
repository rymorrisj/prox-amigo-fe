import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Map from './pages/Map';
// import StickyFooter from './views/StickyFooter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/'></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/map' element={<Map />}></Route>
        </Routes>
        {/* <StickyFooter /> */}
      </div>
    </Router>
  );
}

export default App;
