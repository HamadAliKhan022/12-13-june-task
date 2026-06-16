import { Card, CardContent, Typography, Stack, Button } from "@mui/material";

export default function StudentCard({ student, onEdit, onDelete }) {
  return (
    <Card
      sx={{
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight="700">
            {student.name}
          </Typography>

          <Typography>
            Gender:
            {student.gender}
          </Typography>

          <Typography>
            Department:
            {student.department}
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => onEdit(student)}>
              Edit
            </Button>

            <Button
              color="error"
              variant="contained"
              onClick={() => onDelete(student.id)}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
