import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";

export default function Sidebar({ setPage }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,

        "& .MuiDrawer-paper": {
          width: 260,
        },
      }}
    >
      <List>
        <ListItemButton onClick={() => setPage("dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={() => setPage("add")}>
          <ListItemText primary="Add Student" />
        </ListItemButton>

        <ListItemButton onClick={() => setPage("list")}>
          <ListItemText primary="Students" />
        </ListItemButton>

        <ListItemButton onClick={() => setPage("addFaculty")}>
          <ListItemText primary="Add Faculty" />
        </ListItemButton>

        <ListItemButton onClick={() => setPage("faculty")}>
          <ListItemText primary="Faculty" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
