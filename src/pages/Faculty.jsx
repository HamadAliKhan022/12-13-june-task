import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import { firestoreDB } from "../firebase/firebase";

import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function Faculty() {
  const [faculty, setFaculty] = useState([]);

  async function load() {
    const snap = await getDocs(collection(firestoreDB, "faculty"));

    setFaculty(
      snap.docs.map((doc) => ({
        id: doc.id,

        ...doc.data(),
      })),
    );
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Grid container spacing={3}>
      {faculty.map((f) => (
        <Grid size={4} key={f.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{f.name}</Typography>

              <Typography>{f.department}</Typography>

              <Typography>{f.designation}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
