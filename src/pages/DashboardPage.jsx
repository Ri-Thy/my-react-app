import { useEffect, useState } from "react";

import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ProfileCard from "../components/ProfileCard";
import ActivityList from "../components/ActivityList";

import { studentService } from "../services/studentService";

export default function DashboardPage() {
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    studentId: "",
    fullName: "",
    gender: "",
    email: "",
    phone: "",
    major: "",
    year: "",
    status: ""
  });

  // Handle form input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Add student
  const handleAddStudent = async () => {
    try {
      await studentService.create({
        ...form,
        year: Number(form.year)
      });

      alert("Student added successfully!");

      setForm({
        studentId: "",
        fullName: "",
        gender: "",
        email: "",
        phone: "",
        major: "",
        year: "",
        status: ""
      });

      const data = await studentService.getAll();
      setStudents(data);
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to add student.");
    }
  };

  // Edit student
  const handleEditStudent = (student) => {
    setForm({
      studentId: student.studentId || "",
      fullName: student.fullName || "",
      gender: student.gender || "",
      email: student.email || "",
      phone: student.phone || "",
      major: student.major || "",
      year: student.year || "",
      status: student.status || ""
    });

    setEditingId(student.id);
  };

  // Update student
  const handleUpdateStudent = async () => {
    try {
      await studentService.update(editingId, {
        ...form,
        year: Number(form.year)
      });

      alert("Student updated successfully!");

      setEditingId(null);

      setForm({
        studentId: "",
        fullName: "",
        gender: "",
        email: "",
        phone: "",
        major: "",
        year: "",
        status: ""
      });

      const data = await studentService.getAll();
      setStudents(data);
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update student.");
    }
  };

  // Delete student
  const handleDeleteStudent = async (id) => {
    try {
      await studentService.remove(id);

      alert("Student deleted successfully!");

      const data = await studentService.getAll();
      setStudents(data);
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student.");
    }
  };

  // Load students from Firebase
  useEffect(() => {
    const loadStudents = async () => {
      try {
        const data = await studentService.getAll();

        setStudents(data);

        console.log("Students from Firebase:", data);
      } catch (error) {
        console.error("Error loading students:", error);
      }
    };

    loadStudents();
  }, []);

  // Dashboard statistics
  const [stats] = useState([
    {
      title: "Total Users",
      value: 1200,
      color: "bg-blue-600"
    },
    {
      title: "Orders",
      value: 340,
      color: "bg-green-600"
    },
    {
      title: "Revenue",
      value: "$8,500",
      color: "bg-purple-600"
    },
    {
      title: "Messages",
      value: 89,
      color: "bg-orange-500"
    }
  ]);

  // Recent activities
  const [activities] = useState([
    "New user registered",
    "Order #1001 has been placed",
    "Payment received successfully",
    "Profile information updated"
  ]);

  // Current user
  const savedUser = JSON.parse(localStorage.getItem("user"));

  const user = {
    name: savedUser?.name || "Guest User",
    role: "Student",
    email: savedUser?.email || "No email"
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <div className="flex-1">
        <DashboardHeader />

        <main className="p-6 space-y-6">

          {/* Add / Update Student Form */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">
              {editingId ? "Update Student" : "Add Student"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                name="studentId"
                placeholder="Student ID"
                value={form.studentId}
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <input
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <input
                name="gender"
                placeholder="Gender"
                value={form.gender}
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <input
                name="major"
                placeholder="Major"
                value={form.major}
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <input
                name="year"
                type="number"
                placeholder="Year"
                value={form.year}
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <input
                name="status"
                placeholder="Status"
                value={form.status}
                onChange={handleChange}
                className="border p-2 rounded"
              />

            </div>

            <button
              type="button"
              onClick={
                editingId
                  ? handleUpdateStudent
                  : handleAddStudent
              }
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {editingId ? "Update Student" : "Add Student"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);

                  setForm({
                    studentId: "",
                    fullName: "",
                    gender: "",
                    email: "",
                    phone: "",
                    major: "",
                    year: "",
                    status: ""
                  });
                }}
                className="mt-4 ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item, index) => (
              <StatCard
                key={index}
                title={item.title}
                value={item.value}
                color={item.color}
              />
            ))}
          </div>

          {/* Profile and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ProfileCard user={user} />

            <ActivityList activities={activities} />

            {/* Students Table */}
            <div className="bg-white rounded-lg shadow p-6 lg:col-span-3">

              <h2 className="text-xl font-bold mb-4">
                Students
              </h2>

              {students.length === 0 ? (
                <p>No students found.</p>
              ) : (
                <div className="overflow-x-auto">

                  <table className="w-full border-collapse">

                    <thead>
                      <tr className="border-b">

                        <th className="text-left p-2">
                          Student ID
                        </th>

                        <th className="text-left p-2">
                          Full Name
                        </th>

                        <th className="text-left p-2">
                          Gender
                        </th>

                        <th className="text-left p-2">
                          Email
                        </th>

                        <th className="text-left p-2">
                          Major
                        </th>

                        <th className="text-left p-2">
                          Year
                        </th>

                        <th className="text-left p-2">
                          Status
                        </th>

                        <th className="text-left p-2">
                          Action
                        </th>

                      </tr>
                    </thead>

                    <tbody>

                      {students.map((student) => (

                        <tr
                          key={student.id}
                          className="border-b"
                        >

                          <td className="p-2">
                            {student.studentId}
                          </td>

                          <td className="p-2">
                            {student.fullName}
                          </td>

                          <td className="p-2">
                            {student.gender}
                          </td>

                          <td className="p-2">
                            {student.email}
                          </td>

                          <td className="p-2">
                            {student.major}
                          </td>

                          <td className="p-2">
                            {student.year}
                          </td>

                          <td className="p-2">
                            {student.status}
                          </td>

                          <td className="p-2">

                            {/* Edit */}
                            <button
                              type="button"
                              onClick={() =>
                                handleEditStudent(student)
                              }
                              className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                            >
                              Edit
                            </button>

                            {/* Delete */}
                            <button
                              type="button"
                              onClick={() =>
                                handleDeleteStudent(student.id)
                              }
                              className="bg-red-600 text-white px-3 py-1 rounded"
                            >
                              Delete
                            </button>

                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>
              )}

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}