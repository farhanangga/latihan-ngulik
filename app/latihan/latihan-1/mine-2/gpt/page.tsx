export default function Halaman() {

  const navbar = [
    { id: 1, name: "Home" },
    { id: 2, name: "Pricing" },
    { id: 3, name: "About Us" },
    { id: 4, name: "Services" },
  ];

  const content = [
    { id: 1, text: "Welcome To" },
    { id: 2, text: "LATIHAN 1 COMPANY WEBSITE" },
    { id: 3, text: "Enjoy Your Self" },
  ];

  const cardCompany = [
    { id: 1, title: "Title 1", sub: "Information" },
    { id: 2, title: "Title 2", sub: "Information" },
    { id: 3, title: "Title 3", sub: "Information" },
    { id: 4, title: "Title 4", sub: "Information" },
    { id: 5, title: "Title 5", sub: "Information" },
    { id: 6, title: "Title 6", sub: "Information" },
    { id: 7, title: "Title 7", sub: "Information" },
    { id: 8, title: "Title 8", sub: "Information" },
  ];

  const footerSocialMedia = [
    { id: 1, text: "Facebook" },
    { id: 2, text: "Instagram" },
    { id: 3, text: "Twitter" },
    { id: 4, text: "Tiktok" },
  ];

  const footerAlamat = [
    { id: 1, text: "Indonesia, Jawa Barat, Kota Cirebon" },
    { id: 2, text: "0213 64378" },
    { id: 3, text: "company@gmail.com" },
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
        <div className="max-w-screen-xl mx-auto h-16 px-4 flex items-center justify-between">

          <h1 className="hidden lg:block text-2xl font-bold text-gray-800">
            COMPANY
          </h1>

          <nav className="flex gap-4">
            {navbar.map(n => (
              <button
                key={n.id}
                className="font-semibold text-gray-800 hover:text-blue-600 transition"
              >
                {n.name}
              </button>
            ))}
          </nav>

          <button className="hidden sm:block px-5 py-2 border border-gray-800 bg-gray-800 text-white rounded hover:bg-white hover:text-gray-800 transition">
            Sign In
          </button>

        </div>
      </header>

      {/* CONTENT */}
      <main className="pt-20 pb-16 flex flex-col items-center">

        {/* TITLE */}
        <section className="text-center px-4 space-y-2">
          {content.map(c => (
            <h1
              key={c.id}
              className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-800"
            >
              {c.text}
            </h1>
          ))}
        </section>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          <button className="px-6 py-3 border rounded font-bold text-gray-800 hover:bg-gray-800 hover:text-white hover:scale-95 transition">
            Sign Up
          </button>

          <button className="px-6 py-3 border rounded font-bold text-gray-800 hover:bg-gray-800 hover:text-white hover:scale-95 transition">
            Sign In
          </button>

        </div>

        {/* CARDS */}
        <div
        className="
            flex gap-4 px-4 mt-10
            overflow-x-auto
            snap-x snap-mandatory

            sm:grid sm:grid-cols-2
            lg:grid-cols-3
            2xl:grid-cols-4
        "
        >
        {cardCompany.map(cc => (
            <div
            key={cc.id}
            className="
                bg-red-200 h-72 w-56
                rounded-lg shadow-lg flex-shrink-0
                snap-center 
            "
            >
            <div className="bg-gray-300 w-full h-52 rounded-t-lg"></div>

            <div className="bg-gray-800 w-full h-20 rounded-b-lg px-3 py-3">
                <h1 className="text-2xl">{cc.title}</h1>
                <h1>{cc.sub}</h1>
            </div>
            </div>
        ))}
        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white mt-16 px-6 py-12">
        <div className="max-w-screen-xl mx-auto space-y-6">

          <h1 className="text-3xl font-bold">COMPANY</h1>

          <div className="flex flex-col sm:flex-row justify-between gap-8">

            <div className="flex flex-col gap-1">
              {footerSocialMedia.map(s => (
                <span key={s.id}>{s.text}</span>
              ))}
            </div>

            <div className="max-w-sm">
              {footerAlamat.map(a => (
                <p key={a.id}>{a.text}</p>
              ))}
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
