import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#0f172a",
      }}
    >
      <Toolbar>
        <Typography variant="h5" fontWeight="700">
          Student Management
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
