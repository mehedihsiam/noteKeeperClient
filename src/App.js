import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllNotes from './Pages/AllNotes/AllNotes';
import SingleNoteView from './Pages/AllNotes/SingleNoteView/SingleNoteView';
import EditeNote from './Pages/AllNotes/EditNote/EditeNote';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AddNote from './Pages/AddNote/AddNote';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllNotes />} />
        <Route path='/addNote' element={<AddNote />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<EditeNote />} />
        <Route path='/notes/:id' element={<SingleNoteView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
