import IconSidebar from "./iconSidebar";

export default function listSidebar({ iconType, name }){
    return (
        <div className="flex flex-row gap-0 lg:gap-3 bg-white text-gray-800 font-bold p-3 
                        hover:bg-gray-100 duration-300 rounded-lg ">
            <div>
                <IconSidebar type={iconType}/>
            </div>
            
            <div>
                <h1 className="hidden lg:block w-20 xl:w-30">
                    {name}
                </h1>
            </div>
            
        </div> 
    );
}