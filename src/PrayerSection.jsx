function PrayerSection() {
  return (
    <>
      <h1 className="flex flex-col items-center text-2xl">
        <div className="font-bold italic text-3xl">Ahmediye Külliyesi</div>
        <div className="font-light ">Talebe Yoklama Sistemi</div>
      </h1>
      <div>
        <h2 className="flex flex-col items-center text-xl"> Sabah Yoklaması</h2>
        <h2 className="flex flex-col items-center text-xl"> 22.09.2023</h2>
      </div>
      <div>
        <div className="flex flex-col items-center text-xl font-bold italic">
          {" "}
          Talebe Listesi
        </div>
        {/* <MyTable columns={columns} data={data} /> */}

        <div className="relative overflow-x-auto">
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
                  Yoklama
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">Furkan Aydın</td>
                <td className="px-6 py-4 flex flex-row gap-5">
                  <input type="radio" name="yoklama"></input> Var
                  <input type="radio" name="yoklama"></input> Yok
                  <input type="radio" name="yoklama"></input> İzinli
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td className="px-6 py-4">Serdar Kaya</td>
                <td className="px-6 py-4 flex flex-row gap-5">
                  <input type="radio" name="yoklama"></input> Var
                  <input type="radio" name="yoklama"></input> Yok
                  <input type="radio" name="yoklama"></input> İzinli
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  3
                </th>
                <td className="px-6 py-4">Yavuz Savan</td>
                <td className="px-6 py-4 flex flex-row gap-5">
                  <input type="radio" name="yoklama"></input> Var
                  <input type="radio" name="yoklama"></input> Yok
                  <input type="radio" name="yoklama"></input> İzinli
                </td>
              </tr>
            </tbody>
          </table>
          <button className="p-2 bg-blue-400 rounded m-3">Kaydet</button>
        </div>
      </div>
    </>
  );
}

export default PrayerSection;
