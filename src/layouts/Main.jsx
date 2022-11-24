import { Outlet } from "react-router-dom";

// @mui/material
import { Box } from "@mui/material";

// own components
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Main;
