import { useEffect, useState } from "react";
import useCrud from "../hooks/useCrud";
import Table from "../components/Table";
import Modal from "../components/Modal";

export default function StudentsPage() {
  const {
    data: students,
    loading,
    error,
    getAll,
    create,
    update,
    remove,
  } = useCrud("students");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const [formData, setFormData] = useState({
    studentId: "",
    fullName: "",
    gender: "",
    email: "",
    phone: "",
    major: "",
    year: "",
    status: "",
  });

  useEffect(() => {
    getAll();
  }, []);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function resetForm() {
    setFormData({
      studentId: "",
      fullName: "",
      gender: "",
      email: "",
      phone: "",
      major: "",
      year: "",
      status: "",
    });
  }

  function openAddModal() {
    setEditingStudent(null);
    resetForm();
    setIsModalOpen(true);
  }

  function openEditModal(student) {
    setEditingStudent(student);

    setFormData({
      studentId: student.studentId || "",
      fullName: student.fullName || student.name || "",
      gender: student.gender || "",
      email: student.email || "",
      phone: student.phone || "",
      major: student.major || "",
      year: student.year || "",
      status: student.status || "",
    });

    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setEditingStudent(null);
    resetForm();
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const studentData = {
      studentId: formData.studentId,
      fullName: formData.fullName,
      gender: formData.gender,
      email: formData.email,
      phone: formData.phone,
      major: formData.major,
      year: Number(formData.year),
      status: formData.status,
    };

    if (editingStudent) {
      await update(editingStudent.id, studentData);
    } else {
      await create(studentData);
    }

    closeModal();
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      await remove(id);
    }
  }

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Students
            </h1>

            <p className="mt-1 text-gray-600">
              Manage student information
            </p>
          </div>

          <button
            onClick={openAddModal}
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
          >
            + Add Student
          </button>
        </div>

        {error && (
          <p className="mb-4 rounded-lg bg-red-100 p-3 text-red-600">
            {error}
          </p>
        )}

        <div className="overflow-x-auto rounded-2xl bg-white p-6 shadow-sm">
          {loading ? (
            <p className="py-8 text-center text-gray-500">
              Loading students...
            </p>
          ) : (
            <Table
              data={students}
              onEdit={openEditModal}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        title={editingStudent ? "Edit Student" : "Add Student"}
        onClose={closeModal}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Student ID
            </label>

            <input
              type="text"
              name="studentId"
              placeholder="ST001"
              value={formData.studentId}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              placeholder="012345678"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Major
            </label>

            <input
              type="text"
              name="major"
              placeholder="Information Technology"
              value={formData.major}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Year
            </label>

            <input
              type="number"
              name="year"
              placeholder="3"
              min="1"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700"
            >
              {editingStudent ? "Update Student" : "Add Student"}
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="flex-1 rounded-lg bg-gray-200 py-2.5 font-semibold text-gray-700 hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </section>
  );
}