import React from 'react'
import { useNavigate } from 'react-router-dom';

function Table() {
  const userData = JSON.parse(localStorage.getItem("userData")) || [];
  const navigate = useNavigate();
    console.log(userData);
    
  const handleView = (index) => {
    const viewData = userData[index]
    navigate("/view" ,{state: {viewData}});
  }
  const handleEdit = (index) => {
   const  editingData = userData[index]
    
    navigate("/edit" ,{state: {editingData}});
  
  }

  const handleDele = (index) => {
    const data = JSON.parse(localStorage.getItem("userData")) || [];
    data.splice(index, 1);
    localStorage.setItem("userData", JSON.stringify(data));
    window.location.reload();
  }
  return (
    <div className="flex flex-col items-center justify-center text-white py-20">
    <h1 className="pb-8 text-xl font-semibold">User Data</h1>
    <div className="table-overFlow overflow-x-auto w-full xl:w-auto px-4">
      <table className="min-w-full border-collapse border border-slate-500 rounded-md overflow-hidden">
        <thead>
          <tr className="bg-slate-700">
            <th className="py-4 px-6 border-b border-slate-600">First Name</th>
            <th className="py-4 px-6 border-b border-slate-600">Second Name</th>
            <th className="py-4 px-6 border-b border-slate-600">Email</th>
            <th className="py-4 px-6 border-b border-slate-600">Gender</th>
            <th className="py-4 px-6 border-b border-slate-600">Phone No</th>
            <th className="py-4 px-6 border-b border-slate-600">Password</th>
            <th className="py-4 px-6 border-b border-slate-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => (
            <tr key={index} className="bg-slate-600 even:bg-slate-700 text-center">
              <td className="py-4 px-6 border-b border-slate-600">{data.firstName}</td>
              <td className="py-4 px-6 border-b border-slate-600">{data.secondName}</td>
              <td className="py-4 px-6 border-b border-slate-600">{data.email}</td>
              <td className="py-4 px-6 border-b border-slate-600">{data.gender}</td>
              <td className="py-4 px-6 border-b border-slate-600">{data.mobileNumber}</td>
              <td className="py-4 px-6 border-b border-slate-600">{data.password}</td>
              <td className="py-4 px-6 border-b border-slate-600"> <div className='flex items-center justify-center gap-1'><button onClick={() => handleView(index)} className="bg-blue-500 py-1 px-2 rounded">View</button> <button onClick={() => handleEdit(index)} className="bg-green-700 py-1 px-2 rounded">Edit</button>  <button onClick={() => handleDele(index)} className="bg-red-600 py-1 px-2 rounded">Delete</button> </div> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Table