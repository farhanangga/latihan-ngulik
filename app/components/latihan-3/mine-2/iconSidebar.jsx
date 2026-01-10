import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdSearch } from "react-icons/md";

export default function iconSidebar( {type} ){
    const icons = {
        home: FaHome,
        chat:IoChatbubbleOutline,
        search:MdSearch,
        user:FaUser,
        setting:FaCog,
    }

    const Icon = icons[type];

    return (
        <div className=" text-gray-800">
            <Icon className="h-6 w-6 lg:h-5 lg:w-5"/>
        </div>
    );
}