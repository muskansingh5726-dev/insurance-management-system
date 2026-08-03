import Sidebar from "../components/Sidebar";
import { FaDownload, FaUpload, FaTrash } from "react-icons/fa";

const documents = [
  {
    name: "Aadhar Card",
    date: "12 Jul 2026",
  },
  {
    name: "PAN Card",
    date: "20 Jul 2026",
  },
  {
    name: "Insurance Policy",
    date: "01 Aug 2026",
  },
];

function Documents() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            Documents
          </h1>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2">
            <FaUpload />
            Upload
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>

                <th className="p-4">Document</th>

                <th>Date</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {documents.map((doc, index) => (

                <tr key={index} className="border-b">

                  <td className="p-4">{doc.name}</td>

                  <td>{doc.date}</td>

                  <td>

                    <div className="flex gap-5 text-lg">

                      <FaDownload className="text-blue-600 cursor-pointer" />

                      <FaTrash className="text-red-500 cursor-pointer" />

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>
    </div>
  );
}

export default Documents;