import { createContext, useContext, useState } from "react"


const AppCtx = createContext()
function AppProvider({children}) {

  const sdataBase = [
    {
      id: 1,
      name: "Kumar",
      batch: "b47wd",
      education: "B.E"
    },
    {
      id: 2,
      name: "sudha",
      batch: "b47we",
      education: "B.com"
    },
    {
      id: 3,
      name: "saran",
      batch: "b47Be",
      education: "Bsc"
    }
  ]

  const tdataBase = [
    {
      id: 1,
      tname: "Latha maheswari",
      designation: "Principal",
      qualification: "M.Sc,M.Ed",
      experience: "32"
    },
    {
      id: 2,
      tname: "Muniyappan",
      designation: "SR.Principal",
      qualification: "M.Sc,M.Ed",
      experience: "42"
    },
    {
      id: 3,
      tname: "narasimha reddy",
      designation: "PGT",
      qualification: "BSC",
      experience: "9"
    }
  ]

  const spages = [
    {
      name: "Student",
      path: "/students/all"
    }
  ]

  const tpages = [
    {
      name: "Teacher",
      path: "/teachers/all"
    }
  ]
  const [crumState, setCrumState] = useState(spages)
  const [tcrumState,setTcrumState] = useState(tpages)

  const [studentData, setData] = useState(sdataBase)
  const [teacherData,setTeacherData] = useState(tdataBase)


  return (
    <AppCtx.Provider
      value = {{
        studentData,
        setData,
        crumState,
        setCrumState,
        teacherData,
        setTeacherData,
        tcrumState,
        setTcrumState
      }}

    >
      {children}
    </AppCtx.Provider>
  )
}

export const Appstate = ()=>{
  return useContext(AppCtx)
}

export default AppProvider
