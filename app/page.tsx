import Link from "next/link";

export default async function beranda(){
  
  const cardLatihan = [
    {id : 1 , name : "Latihan 1" , linkgpt : "/latihan/latihan-1", mylink : "/latihan/latihan-1/mine", mylink2 : "/latihan/latihan-1/mine-2"},
    {id : 2 , name : "Latihan 2" , linkgpt : "/latihan/latihan-2", mylink : "/latihan/latihan-2/mine", mylink2 : "/latihan/latihan-2/mine-2"},
    {id : 3 , name : "Latihan 3" , linkgpt : "/latihan/latihan-3", mylink : "/latihan/latihan-3/mine", mylink2 : "/latihan/latihan-3/mine-2"},
  ]
  
  return (
    <div className=" min-h-screen bg-gray-800 w-full h-full p-10 space-y-10">
      <p className="text-white text-center text-4xl"> Welcome to <span className="font-bold">LATIHAN REACT SERVER COMPONENT</span></p>
      <div className="flex flex-wrap gap-5">
        {cardLatihan.map(cl => (
          <div key={cl.id} className="w-50 border-3 border-gray-300 rounded-lg">
              <div className="text-center py-2 border-b-3 border-gray-300">
                  <h1 className="text-white text-xl font-bold my-auto">{cl.name}</h1>
              </div>
              <div className="flex flex-col p-2 gap-2">
                  <Link href={cl.linkgpt} className="text-center bg-green-800 p-3 m-1 hover:m-0 hover:p-4 hover:font-bold duration-400 rounded-lg">GPT Code</Link>
                  <Link href={cl.mylink} className="text-center bg-blue-800 p-3 m-1 hover:m-0 hover:p-4 hover:font-bold duration-400 rounded-lg">Mine</Link>
                  <Link href={cl.mylink2} className="text-center bg-blue-800 p-3 m-1 hover:m-0 hover:p-4 hover:font-bold duration-400 rounded-lg">Mine 2</Link>
              </div>
          </div>
        ))}
      </div> 
    </div>
  );
}