import {BsGripVertical} from "react-icons/bs";
import {MdOutlineAssignment} from "react-icons/md";

export default function DescriptionControlButtonsStart() {
    return (
        <div className="position-absolute top-50 start-0 translate-middle-y">
            <BsGripVertical className="me-2 fs-3"/>
            <MdOutlineAssignment className="me-2 fs-3" color="green"/>
        </div>
    );
}