import { useState } from "react";

import { Paper, Stack, TextField, Button, Typography } from "@mui/material";

import { collection, addDoc } from "firebase/firestore";

import { firestoreDB } from "../firebase/firebase";

export default function AddFaculty() {
  const [form, setForm] = useState({
    name: "",
    department: "",
    designation: "",
  });

  function handle(e) {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  }

  async function submit(e) {
    e.preventDefault();

    await addDoc(
      collection(firestoreDB, "faculty"),

      form,
    );

    setForm({
      name: "",
      department: "",
      designation: "",
    });

    alert("Faculty Added");
  }

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" mb={3}>
        Add Faculty
      </Typography>

      <form onSubmit={submit}>
        <Stack spacing={2}>
          <TextField
            label="Faculty Name"
            name="name"
            value={form.name}
            onChange={handle}
          />

          <TextField
            label="Department"
            name="department"
            value={form.department}
            onChange={handle}
          />

          <TextField
            label="Designation"
            name="designation"
            value={form.designation}
            onChange={handle}
          />

          <Button type="submit" variant="contained">
            Save Faculty
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
