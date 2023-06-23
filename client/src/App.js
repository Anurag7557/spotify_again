
import {Routes,Route} from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Search from './components/pages/Search/search';
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Genre from './components/pages/Search/genre';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path="/genre/:name" element={<Genre/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
   
    </>
  );
}

export default App;
