import "../../styles.css";
import {BsGripVertical} from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import DescriptionControlButtonsEnd from "./DescriptionControlButtonsEnd";
import AssignmentControls from "./AssignmentControls";
import DescriptionControlButtonsStart from "./DescriptionControlButtonsStart";
import * as db from "../../Database"
import {useParams} from "react-router";

export default function Assignments() {
    const assignments = db.assignments;
    const {cid} = useParams();
    return (
        <div>
            <AssignmentControls/><br/><br/><br/><br/>
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        ASSIGNMENTS
                        <AssignmentControlButtons/>
                        <span className="float-end  rounded-pill border border-dark p-1">40% of Total</span>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">

                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <li className="wd-lesson list-group-item p-3 ps-1">
                                    <DescriptionControlButtonsStart/>
                                    <div
                                        className="position-absolute top-50 start-50 translate-middle w-75">
                                        <a className="wd-assignment-link text-black link-underline link-underline-opacity-0"
                                           href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                                            <b>{assignment._id}</b>
                                        </a>
                                        <p>
                                            <text className="text-danger">Multiple Modules</text> | <b>Not Available until
                                            </b> {assignment.unlock.split("T")[0]} at {assignment.unlock.split("T")[1]} | <b>Due</b> {assignment.due.split("T")[0]} at {assignment.due.split("T")[1]} | {assignment.points} pts
                                        </p>
                                    </div>
                                    <DescriptionControlButtonsEnd/>
                                    <br/><br/><br/>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}