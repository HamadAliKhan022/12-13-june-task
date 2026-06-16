import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import StudentList from "./pages/StudentList";

import { getStudents, removeStudent } from "./services/studentService";

export default function App() {
  const [page, setPage] = useState("dashboard");

  const [students, setStudents] = useState([]);

  const [editing, setEditing] = useState(null);

  async function load() {
    const data = await getStudents();

    setStudents(data);
  }

  async function deleteOne(id) {
    await removeStudent(id);

    await load();
  }

  function clearEdit() {
    setEditing(null);

    setPage("list");
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar setPage={setPage} />

      <div
        style={{
          flex: 1,
          marginLeft: 260,
        }}
      >
        <Navbar />

        <div
          style={{
            padding: 30,
          }}
        >
          {page === "dashboard" && <Dashboard students={students} />}

          {page === "add" && (
            <AddStudent
              editing={editing}
              clearEdit={clearEdit}
              refresh={load}
            />
          )}

          {page === "list" && (
            <StudentList
              students={students}
              setEditing={setEditing}
              setPage={setPage}
              deleteStudent={deleteOne}
            />
          )}
        </div>
      </div>
    </div>
  );
}
