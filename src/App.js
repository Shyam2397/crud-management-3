import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/DashBoard';
import StudentsList from './pages/StudentsList';
import TeachersList from './pages/TeachersList';
import InterviewNotes from './pages/InterviewNotes';
import Profile from './pages/Profile';
import Nopage from './pages/Nopage';
import AddStudents from './components/AddStudents';
import { useState } from 'react';
import EditStudents from './components/EditStudents';


function App() {

  const StudentDatas = [
    {
      id: 1,
      name: "shyam",
      batch: "b47wd",
      education: "B.E"
    },
    {
      id: 2,
      name: "sudha",
      batch: "b47we",
      education: "B.com"
    }
  ]

  const pages = [
    {
      name: "student",
      path: "/students/all"
    }
  ]

  const [crumState,setCrumState] = useState(pages)
  const [Data, setData] = useState(StudentDatas)

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<DashBoard/>}/>
        <Route path="/addStudents" element=
          {
            <AddStudents
              StudentData={Data}
              setData={setData}
            />
          }
        />
        <Route path="/editStudents/:id" element=
          {
            <EditStudents
              StudentData={Data}
              setData={setData}
              crumState={crumState}
              setCrumState={setCrumState}
            />
          }
        />
        <Route  path='/students/all' element=
          {
            <StudentsList
              crumState={crumState}
              setCrumState={setCrumState}
              StudentData={Data}
              setData={setData}
            />
          }
        />
        <Route  path='/teachers/all' element={<TeachersList/>}/>
        <Route  path='/interview/notes' element={<InterviewNotes/>}/>
        <Route  path='/profile' element={<Profile/>}/>
        <Route  path='*' element={<Nopage/>}/>
      </Routes>
    </div>
  );
}

export default App;
