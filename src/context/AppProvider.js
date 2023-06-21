import { createContext, useContext, useState } from "react"


const AppCtx = createContext()
function AppProvider({children}) {

  const sdataBase = [
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

  const [crumState, setCrumState] = useState(pages)
  const [studentData, setData] = useState(sdataBase)


  return (
    <AppCtx.Provider
      value = {{
        studentData,
        setData,
        crumState,
        setCrumState
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
