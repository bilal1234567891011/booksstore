import './App.css';
// import Header from './components/Header';
import{Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import About from './About';
import Edit from './Edit';
import View from './components/View';

function App() {
  return (
    <div>

  {/* <Header></Header> */}

<Routes>
  <Route path='/' element={<Home></Home>}></Route>


  <Route path='/add' element={<AddBook></AddBook>}></Route>
  <Route path='/books' element={<Books></Books>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/edit/:id' element={<Edit></Edit>}></Route>
  <Route path='/view/:id' element={<View></View>}></Route>  



</Routes>

    </div>
  );
}

export default App;
