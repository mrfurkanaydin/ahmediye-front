

function App() {
  
  return (
    <>
      <h1 className="flex flex-col items-center text-2xl">
        <div className="font-bold italic text-3xl">Ahmediye Külliyesi</div>
        <div className="font-light ">Talebe Yoklama Sistemi</div>
      </h1>
      <div>
        <h2 className="flex flex-col items-center text-xl">Hizmetler</h2>
        <div className="flex justify-center gap-5">
          <a href="/prayerTrack" className="bg-fuchsia-400 rounded p-3">
            Namaz Takip
          </a>
          <a href="/takip" className="bg-fuchsia-400 rounded p-3">
            Ders Takip
          </a>
          <a href="/students" className="bg-fuchsia-400 rounded p-3">
            Talebe Listesi
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
