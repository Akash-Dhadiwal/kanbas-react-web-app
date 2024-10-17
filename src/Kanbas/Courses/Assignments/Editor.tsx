import {useParams} from "react-router";
import {assignments} from "../../Database"
import { useNavigate } from 'react-router-dom';

export default function AssignmentEditor() {
    const {cid, aid} = useParams();
    const assignment = assignments.find((assignment : any) => assignment._id === aid)
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };
    return (
        <div id="wd-assignments-editor" className="me-4">
            <label htmlFor="wd-name" className="mb-2"><b>Assignment Name</b></label>
            <input id="wd-name" defaultValue={assignment && assignment.title} className="form-control mb-4"/>
            <textarea id="wd-description" className="form-control mb-4">
        {assignment && assignment.description}
      </textarea>
            <div className="row">
                <label htmlFor="wd-points" className="col"><span
                    className="float-end me-2">Points</span></label>
                <input id="wd-points" defaultValue={assignment && assignment.points} className="form-control mb-3 col"/>
            </div>
            <div className="row">
                <label htmlFor="wd-group" className="col"><span className="float-end me-2">Assignment Group</span></label>
                <select id="wd-group" name="Assignment Groups" className="form-select mb-3 col">
                    <option value="option1">ASSIGNMENTS</option>
                </select>
            </div>
            <div className="row">
                <label htmlFor="wd-display-grade-as" className="col"><span
                    className="float-end me-2">Display Grade as</span></label>
                <select id="wd-display-grade-as" name="Display grade as"
                        className="form-select mb-3 col">
                    <option value="option1">Percentage</option>
                    <option value="option2">Letter</option>
                </select>
            </div>
            <div className="row">
                <label htmlFor="wd-submission-type" className="col"><span
                    className="float-end me-2">Submission type</span></label>
                <div className="border border-secondary rounded p-3 mb-3 col">
                    <select id="wd-submission-type" name="submission type"
                            className="form-select mb-3">
                        <option value="option1">Online</option>
                        <option value="option2">In person</option>
                    </select>

                    <label className="mb-2"><b>Online Entry Options</b></label><br/>

                    <input type="checkbox" name="check-genre" id="wd-text-entry"
                           className="form-check-input me-2"/>
                    <label htmlFor="wd-text-entry" className="form-check-label mb-2">Text
                        Entry</label><br/>

                    <input type="checkbox" name="check-genre" id="wd-website-url"
                           className="form-check-input me-2"/>
                    <label htmlFor="wd-webiste-url" className="form-check-label mb-2">Website
                        URL</label><br/>

                    <input type="checkbox" name="check-genre" id="wd-media-recordings"
                           className="form-check-input me-2"/>
                    <label htmlFor="wd-media-recordings" className="form-check-label mb-2">Media
                        Recordings</label><br/>

                    <input type="checkbox" name="check-genre" id="wd-student-annotation"
                           className="form-check-input me-2"/>
                    <label htmlFor="wd-student-annotation" className="form-check-label mb-2">Student
                        Annotation</label><br/>

                    <input type="checkbox" name="check-genre" id="wd-file-upload"
                           className="form-check-input me-2"/>
                    <label htmlFor="wd-file-upload" className="form-check-label mb-2">File
                        Uploads</label>
                </div>
            </div>
            <div className="row">
                <label htmlFor="wd-assign-to" className="col"><span
                    className="float-end me-2">Assign</span></label>
                <div className="border border-secondary rounded p-3 mb-3 col">
                    <label htmlFor="wd-assign-to"><b>Assign to</b></label><br/>
                    <input id="wd-assign-to" value="Everyone" className="form-control mb-2"/>

                    <label htmlFor="wd-due-date"><b>Due</b></label><br/>
                    <input type="datetime-local" id="wd-due-date" defaultValue={assignment && assignment.due}
                           className="form-control mb-2"/>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="wd-available-from"><b>Available From</b></label>
                            <input type="datetime-local" id="wd-available-from" defaultValue={assignment && assignment.unlock}
                                   className="form-control mb-2"/>
                        </div>
                        <div className="col">
                            <label htmlFor="wd-available-until"><b>Until</b></label>
                            <input type="datetime-local" id="wd-available-until" defaultValue={assignment && assignment.due}
                                   className="form-control mb-2"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <button onClick={handleButtonClick} className="btn btn-lg btn-danger me-1 float-end">Save</button>
            <button onClick={handleButtonClick} className="btn btn-lg btn-secondary me-1 float-end">Cancel</button>
        </div>
    );
}