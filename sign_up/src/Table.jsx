import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Table = () => {
  const [userData, setUserData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData")) || [];
    setUserData(data);
  }, []);

  const handleEdit = (index) => {
    const editingData = userData[index];
    navigate("/edit", { state: { editingData } });
  };

  const handleDelete = (index) => {
    const data = JSON.parse(localStorage.getItem("userData")) || [];
    data.splice(index, 1);
    localStorage.setItem("userData", JSON.stringify(data));
    window.location.reload();
  };

  const handleView = (index) => {
    const viewData = userData[index]
    navigate("/view" ,{state: {viewData}});
  }

  const handleSort = () => {
    const sortedData = [...userData].sort((a, b) => 
      a.firstName.localeCompare(b.firstName)
    );
    setUserData(sortedData);
    setIsSorted(!isSorted);
  };

  const filteredData = userData.filter(user =>
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center text-white py-20">
      <h1 className="pb-8 text-xl font-semibold">User Data</h1>
    <div className='mx-auto w-[1150px] flex gap-2 '>   <input
        type="text"
        name="searchbar"
        placeholder="Search by first name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 w-[95%] p-2 border border-gray-300 rounded text-black  outline-none bg-white bg-opacity-20 placeholder-white placeholder-opacity-80"
      />  <button onClick={handleSort} className="mb-4 p-2 border border-gray-300 rounded text-white">
        Sort
      </button> </div>
     
      <div className="table-overFlow overflow-x-auto w-full xl:w-auto px-4">
        <table className="min-w-full border-collapse border border-slate-500 rounded-md overflow-hidden">
          <thead>
            <tr className="bg-slate-700">
              <th className="py-4 px-6 border-b border-slate-600">First Name</th>
              <th className="py-4 px-6 border-b border-slate-600">Second Name</th>
              <th className="py-4 px-6 border-b border-slate-600">Email</th>
              <th className="py-4 px-6 border-b border-slate-600">Gender</th>
              <th className="py-4 px-6 border-b border-slate-600">Phone No</th>
              <th className="py-4 px-6 border-b border-slate-600">password</th>
              <th className="py-4 px-6 border-b border-slate-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => (
              <tr key={index} className="bg-slate-800">
                <td className="py-4 px-6 border-b border-slate-600">{user.firstName}</td>
                <td className="py-4 px-6 border-b border-slate-600">{user.secondName}</td>
                <td className="py-4 px-6 border-b border-slate-600">{user.email}</td>
                <td className="py-4 px-6 border-b border-slate-600">{user.gender}</td>
                <td className="py-4 px-6 border-b border-slate-600">{user.mobileNumber}</td>
                <td className="py-4 px-6 border-b border-slate-600">{user.password}</td>

                <td className="py-4 px-6 border-b border-slate-600"> <div className='flex items-center justify-center gap-1'><button onClick={() => handleView(index)} className="bg-blue-500 py-1 px-2 rounded">View</button> <button onClick={() => handleEdit(index)} className="bg-green-700 py-1 px-2 rounded">Edit</button>  <button onClick={() => handleDelete(index)} className="bg-red-600 py-1 px-2 rounded">Delete</button> </div> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;