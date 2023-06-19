import CrumBar from "../components/CrumBar";
import NavSideBar from "../components/NavSideBar";
import StudentCard from "../components/StudentCards";


export default function StudentList({ StudentData, setData, crumState, setCrumState }) {
    return (
        <NavSideBar>
            <div>
                <div>
                    <CrumBar
                        crumState={crumState}
                        setCrumState={setCrumState}
                    />
                </div>
                <div className="flex flex-row flex-wrap place-content-evenly gap-5 m-5">
                    {StudentData.map((stud, ind) => (
                        <StudentCard
                            student={stud}
                            StudentData={StudentData}
                            setData={setData}
                            key={stud.id}
                            crumState={crumState}
                            setCrumState={setCrumState}
                        />
                    ))}
                </div>
            </div>
        </NavSideBar>
    )
}