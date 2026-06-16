import { useState, useEffect } from "react";

import { Paper, TextField, Button, Stack, Typography } from "@mui/material";

import { addStudent, updateStudent } from "../services/studentService";

export default function AddStudent({ refresh, editing, clearEdit }) {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    department: "",
  });

  useEffect(() => {
    if (editing) {
      setForm({
        name: editing.name || "",

        gender: editing.gender || "",

        department: editing.department || "",
      });
    }
  }, [editing]);

  function handle(e) {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  }

  async function submit(e) {
    e.preventDefault();

    if (editing) {
      await updateStudent(editing.id, form);

      clearEdit();
    } else {
      await addStudent(form);
    }

    setForm({
      name: "",
      gender: "",
      department: "",
    });

    await refresh();
  }

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" mb={3}>
        {editing ? "Edit Student" : "Add Student"}
      </Typography>

      <form onSubmit={submit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handle}
          />

          <TextField
            label="Gender"
            name="gender"
            value={form.gender}
            onChange={handle}
          />

          <TextField
            label="Department"
            name="department"
            value={form.department}
            onChange={handle}
          />

          <Button type="submit" variant="contained">
            {editing ? "Save Changes" : "Add Student"}
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
