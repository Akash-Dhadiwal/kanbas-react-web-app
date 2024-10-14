import "../../styles.css";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import DescriptionControlButtonsEnd from "./DescriptionControlButtonsEnd";
import AssignmentControls from "./AssignmentControls";
import DescriptionControlButtonsStart from "./DescriptionControlButtonsStart";
export default function Assignments() {
    return (
        <div>
            <AssignmentControls /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                        <span className="float-end  rounded-pill border border-dark p-1">40% of Total</span>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <DescriptionControlButtonsStart/>
                            <div className="position-absolute top-50 start-50 translate-middle w-75">
                                <a className="wd-assignment-link text-black link-underline link-underline-opacity-0"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                    <b>A1 - ENV + HTML</b>
                                </a>
                                <p><text className="text-danger">Multiple Modules</text> | <b>Not Available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</p>
                            </div>
                            <DescriptionControlButtonsEnd />
                            <br /><br /><br />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <DescriptionControlButtonsStart/>
                            <div className="position-absolute top-50 start-50 translate-middle w-75">
                                <a className="wd-assignment-link text-black link-underline link-underline-opacity-0"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                    <b>A2 - CSS + BOOTSTRAP</b>
                                </a>
                                <p><text className="text-danger">Multiple Modules</text> | <b>Not Available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</p>
                            </div>
                            <DescriptionControlButtonsEnd />
                            <br /><br /><br />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <DescriptionControlButtonsStart/>
                            <div className="position-absolute top-50 start-50 translate-middle w-75">
                                <a className="wd-assignment-link text-black link-underline link-underline-opacity-0"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                    <b>A3 - JAVASCRIPT + REACT</b>
                                </a>
                                <p><text className="text-danger">Multiple Modules</text> | <b>Not Available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts</p>
                            </div>
                            <DescriptionControlButtonsEnd />
                            <br /><br /><br />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}