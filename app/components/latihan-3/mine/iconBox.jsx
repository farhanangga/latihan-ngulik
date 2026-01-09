import { FaReaact, FaServer, FaBolt } from "react-icons/fa";

export default function IconBox ({ type }) {
    const icons = {
        react: FaReact,
        server: FaServer,
        speed: FaBolt,
    };

    const Icon = icons[type];

    return (
        <div className="text-4xl text-blue-500">
            <Icon/>
        </div>
    );
}