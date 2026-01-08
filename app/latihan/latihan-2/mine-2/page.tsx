import {Suspense} from "react";
import PostList from "../../../components/latihan-2/mine-2/postList";

export default  function Home (){

    const listSidebar = [
        {id: 1 , title : "Home", icon : "HM"},
        {id: 2 , title : "Chat", icon : "CT"},
        {id: 3 , title : "Search", icon : "SC"},
        {id: 4 , title : "Profil", icon : "PF"},
        {id: 5 , title : "Setting", icon : "ST"},
    ]

    const chat = [
        {id : 1 , name : "Farhan Angga", lastMassage : " Hey this is me do you remember"},
        {id : 2 , name : "Sekar Arum Asriyanto", lastMassage : "ola bounjour"},
        {id : 3 , name : "Angga Adi Saputra", lastMassage : "thank you... ", },
        {id : 4 , name : "Bukan Orangnya", lastMassage : "what are you doing here"},
        {id : 5 , name : "Sang Hamba", lastMassage : "you cool men"},
        {id : 6 , name : "Rafa Gyieza", lastMassage : "that what i said"},
        {id : 7 , name : "Kizaru", lastMassage : "watashi no tomodachi wa shinda"},
        {id : 8 , name : "Monkey D luffy", lastMassage : "Kaizoku wa ore wa naru", },
        {id : 9 , name : "Nami san", lastMassage : "nami dare da teme", },
        {id : 10 , name : "Lukashirikato", lastMassage : "watashi no nume wa"},
        {id : 11 , name : "agus daryanto", lastMassage : "no more talking please", },

    ]

    return (
        <div className="bg-white flex min-h-screen min-w-screen flex justify-between">

            {/* SIDEBAR */}
            <div className="px-2 lg:px-5 fixed left-0 top-0 pt-10 bg-white min-h-screen tired border-r-2 border-gray-200 gap-5 flex flex-col">
                <div>
                    <h1 className="font-bold hidden lg:block text-2xl text-gray-800">COMPANY</h1>
                    <h1 className="font-bold block lg:hidden text-2xl text-gray-800 text-center">C</h1>
                </div>
                {listSidebar.map(ls => (
                    <div key={ls.id} 
                    className="hidden lg:block bg-white w-50 text-gray-800 font-bold p-3 hover:bg-gray-100 duration-300 rounded-lg">
                    {ls.title}
                    </div>        
                ))}
                {listSidebar.map(ls2 => (
                    <div key={ls2.id} 
                    className="block lg:hidden bg-white text-gray-800 font-bold p-3 hover:bg-gray-100 duration-300 rounded-lg">
                    {ls2.icon}
                    </div>        
                ))}  
            </div>

            {/* CHATBAR */}
            <div className="fixed right-0 top-0 bg-white min-h-screen border-l-2 border-gray-200 gap-5 ">
                
                {/* SEARCHING */}
                <div className="flex justify-between gap-2 border-b-2 border-gray-200 p-2 lg:p-5">
                    <input className="hidden lg:block text-gray-800 rounded-lg px-3 w-full lg:w-80 xl:w-100 bg-gray-200"/>
                    <button className="font-bold rounded-lg py-3 px-6  lg:py-3 lg:px-5 bg-gray-200 text-gray-800">O</button>
                </div>

                {/* LIST CHAT */}
                <div className="flex flex-col gap-3 w-full h-[40vw] overflow-y-auto p-2 lg:p-5 ">
                    {chat.map( c =>(
                        <div key={c.id} className="p-1 lg:p-3 w-full flex gap-5 border-2 border-gray-200 hover:border-gray-800 duration-400 rounded-lg">
                            <div className="rounded-full w-12 h-12 bg-gray-200">
                            </div>
                            <div className="hidden lg:flex flex-col">
                                <div className="w-80 flex justify-between">
                                    <div>
                                        <h1 className="text-gray-800 font-bold">{c.name}</h1>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-gray-800">{c.lastMassage}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* POSTINGAN */}
            <div className="pl-[27vw] py-10">
                <Suspense fallback={
                    <p>Loading</p>
                }>
                    <PostList />
                </Suspense>
            </div>
        </div>
    );
}