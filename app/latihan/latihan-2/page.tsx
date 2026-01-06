export default async function halaman() {

    const navbar = [
        {id : 1 , name : "Home" },
        {id : 2 , name : "Pricing" },
        {id : 3 , name : "About Us" },
        {id : 4 , name : "services" },
    ]

    const content = [
        {id : 1 , text : "welcome to"},
        {id : 2 , text : "LATIHAN 1 COMPANY WEBSITE"},
        {id : 3 , text : "enjoy your Self"},
    ]

    const footerSocialMedia = [
        {id : 1 , text : "Facebook"},
        {id : 2 , text : "Instagram"},
        {id : 3 , text : "Twitter"},
        {id : 4 , text : "Tiktok"},
    ]

    const footerAlamat = [
        {id : 1 , text : "Indonesia, Jawa Barat, Kota Cirebol, Kecamatan Lemahwungkuk, Kelurahan Lemahwungkuk, Kampung Cangkol Selatan, Rw.06, Rt.05, No.47"},
        {id : 2 , text : "0213 64378"},
        {id : 3 , text : "Company@gmail.com"},
    ]

    const cardCompany = [
        {id : 1, title : "title 1" , sub : "information"},
        {id : 2, title : "title 2" , sub : "information"},
        {id : 3, title : "title 3" , sub : "information"},
        {id : 4, title : "title 4" , sub : "information"},
        {id : 5, title : "title 5" , sub : "information"},
        {id : 6, title : "title 6" , sub : "information"},
        {id : 7, title : "title 7" , sub : "information"},
        {id : 8, title : "title 8" , sub : "information"},        
    ]
    return (
        <div className="bg-white w-full h-full">
            
            {/* NAVBAR */}
            <div className="flex bg-white fixed h-20 border-b-3 w-full justify-center sm:justify-between px-5 sm:px-20 xl:px-40">
                <div className="hidden lg:flex justify-center my-auto ">
                    <h1 className="text-gray-800 font-bold text-2xl">COMPANY</h1>
                </div>
                <div className="flex justify-center h-full gap-5 md:gap-20">
                {navbar.map(n => (
                    <button key={n.id} className=" font-bold text-gray-800 hover:text-red-800 transition duration-200">{n.name}</button>
                ))}
                </div>
                <div className="hidden sm:block my-auto">
                    <button className="rounded-sm bg-gray-800 border-gray-800 border-3 py-3 px-6 hover:text-gray-800 hover:bg-white transition duration-300">Sign In</button>
                </div>
            </div>
            
            {/* CONTENT */}
            <div className="pt-20 pb-10 sm:pb-20 md:pb-30 lg:pb-40 flex flex-col w-full justify-center">

                {/* TITLE */}
                <div className="py-10 sm:py-20 md:py-30 lg:py-40 flex flex-col text-center">
                    {content.map(c => (
                        <h1 key={c.id} className="font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800">{c.text}</h1>
                    ))}
                </div>
                
                {/* BUTTONS */}
                <div className="flex-col sm:flex-row flex justify-center gap-5 sm:gap-0">
                    <button className="py-4 px-15 hover:px-20 mx-10 hover:mx-5 hover:text-white 
                    text-gray-800 border-3 hover:bg-gray-800 transition duration-300 hover:border-none
                    border-gray-200 hover:border-blue-200 rounded-sm font-bold">
                        Sign Up
                    </button>
                    <button className="py-4 px-15 hover:px-20 mx-10 hover:mx-5 hover:text-white
                    text-gray-800 border-3 hover:bg-gray-800 transition duration-300 hover:border-none
                    border-gray-200 hover:border-blue-200 rounded-sm font-bold">
                        Sign In
                    </button>
                </div>
                
                {/* CARD */}
                <div className="justify-between gap-6 sm:gap-11 md:gap-16 lg:gap-21 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 mx-auto mt-20 mb-20">
                    {cardCompany.map(cc =>(
                        <div key={cc.id}  className="bg-red-200  h-72 w-56 sm:h-90 sm:w-70 rounded-lg shadow-lg ">
                            <div className="bg-gray-300  w-full h-52 sm:h-70 rounded-t-lg">

                            </div>
                            <div className="bg-gray-800 w-full h-20 rounded-b-lg px-3 py-3">
                                <h1 className="text-2xl">{cc.title}</h1>
                                <h1 >{cc.sub}</h1>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            
            {/* FOOTER */}
            <footer className="bg-gray-800 w-full h-100 p-5 sm:py-20 sm:px-40 flex flex-col">
                <div className="py-5">
                    <h1 className="text-4xl text-white">COMPANY</h1>
                </div>
                <div className="flex  justify-between flex-col sm:flex-row text-white gap-10 sm:gap-0">
                    <div className="flex flex-col w-200">
                        {footerSocialMedia.map(fsm =>(
                            <a key={fsm.id} href="">{fsm.text}</a>
                        ))}
                    </div>
                    <div className="flex flex-col w-full sm:w-100">
                        {footerAlamat.map(fa =>(
                            <a key={fa.id} href="">{fa.text}</a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};