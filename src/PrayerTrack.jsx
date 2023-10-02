import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PrayerTrack() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <h1 className="flex flex-col items-center text-2xl">
        <div className="font-bold italic text-3xl">Ahmediye Külliyesi</div>
        <div className="font-light ">Talebe Yoklama Sistemi</div>
      </h1>
      <div>
        <h2 className="flex flex-col items-center text-xl">Namaz Takip</h2>
        <div className="flex justify-center gap-5">
          <button
            className="bg-fuchsia-400 active:bg-fuchsia-600   px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Yeni Namaz Ekle
          </button>
          <button className="bg-fuchsia-400 active:bg-fuchsia-600   px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Namazları Listele
          </button>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Yeni Namaz Ekle</h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <input type="date" />
                    <select>
                      <option>Seçiniz</option>
                      <option>Vazife</option>
                      <option>Sabah</option>
                      <option>Öğle</option>
                      <option>İkindi</option>
                      <option>Akşam</option>
                      <option>Yatsı</option>
                    </select>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Kapat
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        navigate("/22092023ikindi");
                      }}
                    >
                      Oluştur
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default PrayerTrack;
