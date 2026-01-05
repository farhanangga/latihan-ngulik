export default async function mine(){

    const button = [
        {id:1 , name: "Button 1"},
        {id:2 , name: "Button 2"},
        {id:3 , name: "Button 3"},
        {id:4 , name: "Button 4"},
        {id:5 , name: "Button 5"},
        {id:6 , name: "Button 6"},
    ]   

    return (  
    <main>
        <div className="h-100 w-100 border-10 p-10 border-red-200 bg-white">
            <ul>
                {button.map(b =>(
                    <button 
                    key={b.id} 
                    className=" m-5 rounded 10 bg-purple-400 
                                    hover:bg-purple-600 hover:mx-0 hover:px-10 
                                    py-3 px-5 transtition duration-300">
                    {b.name}
                    </button>
                ))}
            </ul>
        </div>
    </main>
    );
}