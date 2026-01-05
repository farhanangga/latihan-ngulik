export default async function mine(){

    const button = [
        {id:1 , name: "Button 1", color: "bg-blue-400"},
        {id:2 , name: "Button 2", color: "bg-red-400"},
        {id:3 , name: "Button 3", color: "bg-green-400"},
    ]

    return (  
    <main>
        <div className="h-100 w-100 border-10 p-10 border-red-200 bg-white">
            <ul>
                {button.map(b =>(
                    <button key={b.id} className={'px-4 py-2 ${b.color}'} >{b.name}</button>
                ))}
            </ul>
        </div>
    </main>
    );
}