import { Grid, Paper, Typography } from "@mui/material";

export default function Dashboard({ students }) {
  const total = students.length;

  const male = students.filter(
    (s) => s.gender?.toLowerCase() === "male",
  ).length;

  const female = students.filter(
    (s) => s.gender?.toLowerCase() === "female",
  ).length;

  return (
    <Grid container spacing={3}>
      {[
        ["Students", total],

        ["Male", male],

        ["Female", female],
      ].map(([title, value]) => (
        <Grid size={4} key={title}>
          <Paper
            sx={{
              p: 4,
            }}
          >
            <Typography>{title}</Typography>

            <Typography variant="h3">{value}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
