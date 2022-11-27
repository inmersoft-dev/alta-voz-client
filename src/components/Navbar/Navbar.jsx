import { useState } from "react";
import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import {
  Box,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  useTheme,
  Divider,
} from "@mui/material";

// @mui/icons-material
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// sito components
import SitoImage from "sito-image";

// components
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";

// contexts
import { useMode } from "../../context/ModeProvider";
import { useLanguage } from "../../context/LanguageProvider";

// images
// import logoHorizontal from "../../assets/images/logo-horizontal.png";

const Navbar = () => {
  const theme = useTheme();
  const { modeState, setModeState } = useMode();
  const { languageState } = useLanguage();

  const [showDrawer, setShowDrawer] = useState(false);

  const [toSearch, setToSearch] = useState("");
  const handleToSearch = (e) => setToSearch(e.target.value);

  const actionToSearch = () => {};

  const preventDefault = (event) => event.preventDefault();

  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      sx={{
        display: "flex",
        background: theme.palette.background.paper,
        padding: "5px 25px",
        gap: "30%",
        img: {
          filter: modeState.mode === "light" ? "none" : "invert(1)",
        },
      }}
    >
      <Box display="flex" alignItems="center" gap="30px" flex={1}>
        <Link
          to="/"
          className={css({
            color: theme.palette.secondary.main,
            textDecoration: "none",
          })}
        >
          LOGO
          {/* <SitoImage
          src={logoHorizontal}
          alt="logo"
          sx={{
            width: "200px",
            height: "55px",
            filter: "grayscale(1)",
          }}
        /> */}
        </Link>
        <FormControl
          sx={{
            flex: 1,
            div: { borderRadius: "25px" },
            input: { padding: "3.5px 14px", fontSize: "15px" },
          }}
          variant="outlined"
          component="form"
        >
          <OutlinedInput
            id="search"
            color="primary"
            type="text"
            size="small"
            value={toSearch}
            placeholder={languageState.texts.Navbar.Search.placeholder}
            onChange={handleToSearch}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  color="secondary"
                  type="submit"
                  focused
                  aria-label="search"
                  onClick={actionToSearch}
                  onMouseDown={preventDefault}
                  edge="end"
                >
                  <SearchIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      <Box
        sx={{
          gap: "30px",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
        }}
      >
        {languageState.texts.Navbar.Links.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={css({
              textDecoration: "none",
              color: theme.palette.disabled.light,
              "&:hover": {
                color: theme.palette.disabled.dark,
              },
            })}
          >
            <Typography>{item.label}</Typography>
          </Link>
        ))}
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={{ borderRadius: "25px", width: "130px" }}
        >
          {languageState.texts.Buttons.Login}
        </Button>
        <IconButton
          color="inherit"
          onClick={() => setModeState({ type: "toggle" })}
        >
          {modeState.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>
      <Button
        onClick={() => setShowDrawer(true)}
        variant="contained"
        sx={{
          display: { xs: "inherit", md: "none" },
          width: "40px",
          height: "40px",
          minHeight: 0,
          minWidth: 0,
          padding: 0,
          borderRadius: "100%",
        }}
      >
        <MenuIcon />
      </Button>
      <NavigationDrawer
        open={showDrawer}
        handleClose={() => setShowDrawer(false)}
      />
    </Box>
  );
};

export default Navbar;
