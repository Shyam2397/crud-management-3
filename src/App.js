import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/DashBoard';
import StudentsList from './pages/StudentsList';
import TeachersList from './pages/TeachersList';
import InterviewNotes from './pages/InterviewNotes';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<DashBoard/>}/>
        <Route exact path='/students/all' element={<StudentsList/>}/>
        <Route exact path='/teachers/all' element={<TeachersList/>}/>
        <Route exact path='/interview/notes' element={<InterviewNotes/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
