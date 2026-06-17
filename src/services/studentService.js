import { ref, push, get, update, remove } from "firebase/database";

import { realtimeDB } from "../firebase/firebase";

export async function addStudent(data) {
  await push(ref(realtimeDB, "students"), data);
}

export async function getStudents() {
  const snapshot = await get(ref(realtimeDB, "students"));

  if (!snapshot.exists()) return [];

  const data = snapshot.val();

  return Object.entries(data).map(([id, val]) => ({
    id,

    ...val,
  }));
}

export async function updateStudent(id, data) {
  await update(
    ref(realtimeDB, `students/${id}`),

    data,
  );
}

export async function removeStudent(id) {
  await remove(ref(realtimeDB, `students/${id}`));
}
