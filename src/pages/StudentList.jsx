import StudentCard from "../components/StudentCard";

export default function StudentList({
  students,

  setPage,

  setEditing, 
  
  deleteStudent,
}) {
  return (
    <div
      style={{
        display: "grid",

        gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",

        gap: "20px",
      }}
    >
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onEdit={(data) => {
            setEditing(data);

            setPage("add");
          }}
          onDelete={deleteStudent}
        />
      ))}
    </div>
  );
}
