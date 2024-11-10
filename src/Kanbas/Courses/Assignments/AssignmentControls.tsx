import { FaPlus } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import {useSelector} from "react-redux";
export default function AssignmentControls(
    { setAssignment }: { setAssignment: () => void; }
) {
    const {cid} = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <input id="wd-search-assignment" className="form-control float-start w-50" type="search" placeholder="&#128269; Search.." />
            <Link to={`/Kanbas/Courses/${cid}/Assignments/new`}>
                {currentUser.role === "FACULTY" && <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end" onClick={setAssignment}>
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment</button>}
            </Link>
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group</button>
        </div>
    );
}