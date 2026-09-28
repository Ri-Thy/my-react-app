function Table({ data, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-3 text-left">
              Student ID
            </th>

            <th className="border px-4 py-3 text-left">
              Full Name
            </th>

            <th className="border px-4 py-3 text-left">
              Gender
            </th>

            <th className="border px-4 py-3 text-left">
              Email
            </th>

            <th className="border px-4 py-3 text-left">
              Major
            </th>

            <th className="border px-4 py-3 text-left">
              Year
            </th>

            <th className="border px-4 py-3 text-left">
              Status
            </th>

            <th className="border px-4 py-3 text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan="8"
                className="border px-4 py-6 text-center text-gray-500"
              >
                No students found.
              </td>
            </tr>
          ) : (
            data.map((student) => (
              <tr key={student.id}>
                <td className="border px-4 py-3">
                  {student.studentId || "-"}
                </td>

                <td className="border px-4 py-3">
                  {student.fullName || student.name || "-"}
                </td>

                <td className="border px-4 py-3">
                  {student.gender || "-"}
                </td>

                <td className="border px-4 py-3">
                  {student.email || "-"}
                </td>

                <td className="border px-4 py-3">
                  {student.major || "-"}
                </td>

                <td className="border px-4 py-3">
                  {student.year || "-"}
                </td>

                <td className="border px-4 py-3">
                  {student.status || "-"}
                </td>

                <td className="border px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(student)}
                      className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(student.id)}
                      className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;