import axios from "axios";
import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState();
  const [showModal, setShowModal] = useState(false);
  const [number, setNumber] = useState();
  const [name, setName] = useState(false);
  const [bedroom_number, setBedroom] = useState(false);
  useEffect(() => {

    let config = {
      method: "get",
      url: "http://localhost:3000/v1/users?role=user&limit=106",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTE4M2VlZjY0NzNmNjM5Mjk1NjhlN2YiLCJpYXQiOjE2OTYxNTAyNzYsImV4cCI6MTY5NjIzNjY3NiwidHlwZSI6ImFjY2VzcyJ9.8GdJ7GMjG98WtcuTAaPcSChJy9DC9ftvsjTLvhXyF_4"
      }
    };
    axios
      .request(config)
      .then((response) => {
        response.data.results.sort((a, b) => a.number - b.number);
        setStudents(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  const sendData = () => {
    console.log(number, name, bedroom_number);
    let data = JSON.stringify({
      name: name,
      number: number,
      bedroom_number: bedroom_number,
      email: String(number)
    });

    let config = {
      method: "post",
      url: "http://localhost:3000/v1/users",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTE4M2VlZjY0NzNmNjM5Mjk1NjhlN2YiLCJpYXQiOjE2OTYxNTAyNzYsImV4cCI6MTY5NjIzNjY3NiwidHlwZSI6ImFjY2VzcyJ9.8GdJ7GMjG98WtcuTAaPcSChJy9DC9ftvsjTLvhXyF_4"
      },
      data: data
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-3"
      >
        Yeni Talebe Ekle
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Yeni Talebe Ekle</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    type="text"
                    id="first_name"
                    onChange={(event) => setNumber(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                    placeholder="Talebe Numarası"
                    required
                  />
                  <input
                    type="text"
                    id="first_name"
                    onChange={(event) => setName(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                    placeholder="Talebe Adı Soyadı"
                    required
                  />
                  <input
                    type="text"
                    id="first_name"
                    onChange={(event) => setBedroom(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                    placeholder="Talebe Yatakhane Numarası"
                    required
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setNumber();
                      setName();
                      setBedroom();
                    }}
                  >
                    Vazgeç
                  </button>
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      sendData();
                    }}
                  >
                    Ekle
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Talebe Numarası
            </th>
            <th scope="col" className="px-6 py-3">
              Talebe Adı
            </th>
            <th scope="col" className="px-6 py-3">
              Yatakhane Numarası
            </th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr
              key={student.number}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {student.number}
              </th>
              <td className="px-6 py-4">{student.name}</td>
              <td className="px-6 py-4 flex flex-row gap-5">
                {student.bedroom_number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Students;
