import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";
import AddEmployeeButton from "./AddEmployeeButton";

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/employees")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching employees", error));
  }, []);

  const handleUpdate = (id) => {
    console.log("Update clicked for ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for ID:", id);
  };

  const handleAddEmployee = () => {
    console.log("Add Employee clicked");
  };

  const handleNext = () => {
    if ((page + 1) * rowsPerPage < employees.length) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const paginatedEmployees = employees.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  return (
    <div className="flex justify-start gap-10 px-10 py-5 text-white">
      <div className="w-full">
        <div className="text-xl font-semibold mb-4">All Employees</div>

        <table className="w-full text-center border border-collapse bg-gray-800">
          <thead className="bg-gray-700">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedEmployees.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.firstName}</td>
                <td className="border p-2">{item.lastName}</td>
                <td className="border p-2">{item.email}</td>
                <td className="border p-2">
                  <div className="flex justify-center gap-1">
                    <UpdateButton onClick={() => handleUpdate(item.id)} />
                    <DeleteButton onClick={() => handleDelete(item.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination and Add Employee */}
        <div className="flex justify-between items-center mt-4 gap-2">
          <AddEmployeeButton onClick={handleAddEmployee} />
          <div>
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-1 rounded disabled:opacity-50 mr-2"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={(page + 1) * rowsPerPage >= employees.length}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmployee;
