// src/Admin/AdminForm.jsx
const AdminForm = () => {
  return (
    <form className="bg-white p-6 rounded shadow max-w-md">
      <input
        className="border p-2 w-full mb-4"
        placeholder="Name"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};
export default AdminForm;
