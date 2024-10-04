import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function DescriptionControlButtonsEnd() {
    return (
        <div className="float-end position-absolute top-50 end-0 translate-middle-y me-3">
            <GreenCheckmark/>
            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}