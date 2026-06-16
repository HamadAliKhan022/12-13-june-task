import { Paper, Typography } from "@mui/material";

export default function StatCard({ title, value }) {
  return (
    <Paper
      sx={{
        p: 4,
        borderRadius: 4,
      }}
    >
      <Typography>{title}</Typography>

      <Typography variant="h3" fontWeight="700">
        {value}
      </Typography>
    </Paper>
  );
}
