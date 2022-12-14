import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
import logoLight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();

  const { languageState } = useLanguage();
  const { modeState, setModeState } = useMode();

  const [showDrawer, setShowDrawer] = useState(false);

  const [toSearch, setToSearch] = useState("");
  const handleToSearch = (e) => setToSearch(e.target.value);

  const actionToSearch = () => {};

  const preventDefault = (event) => event.preventDefault();
  const [cPathname, setCPathname] = useState("/");

  useEffect(() => {
    const { pathname } = location;
    setCPathname(pathname);
  }, [location]);

  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      sx={{
        display: "flex",
        background: theme.palette.background.paper,
        padding: "5px 25px",
        gap: "10%",
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
          <SitoImage
            src={modeState.mode === "light" ? logoLight : logoDark}
            alt="logo"
            sx={{
              width: "110px",
              height: "25px",
            }}
          />
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
                  color="primary"
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
            <Typography color={item.to === cPathname ? "primary" : "inherit"}>
              {item.label}
            </Typography>
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
