/* eslint-disable no-unused-vars */
import { useState, useEffect, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";

// @mui/material
import {
  Box,
  IconButton,
  Typography,
  Breadcrumbs,
  Link as MUILink,
  Tooltip,
  FormGroup,
  FormControl,
  FormControlLabel,
  InputAdornment,
  useMediaQuery,
  OutlinedInput,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  InputLabel,
} from "@mui/material";

// @mui/icons-material
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

// components
import Grid from "../../components/Grid/Grid";
import Loading from "../../components/Loading/Section";

// contexts
import { useMode } from "../../context/ModeProvider";
import { useLanguage } from "../../context/LanguageProvider";
import { useNotification } from "../../context/NotificationProvider";

// test
import {
  albums,
  artists,
  genres,
  concerts,
  events,
  songs,
  products,
} from "../../data/data";

const models = { albums, artists, genres, concerts, events, songs, products };

const colors = [
  { label: "red", value: false },
  { label: "blue", value: false },
  { label: "black", value: false },
  { label: "gray", value: false },
  { label: "green", value: false },
  { label: "pink", value: false },
  { label: "yellow", value: false },
  { label: "orange", value: false },
  { label: "purple", value: false },
];

const filterTypes = [
  {
    name: "artists",
    label: "Artista",
    type: "model",
  },
  {
    name: "productType",
    label: "Tipo de producto",
    type: "attribute",
  },
  {
    name: "musicStyle",
    label: "Estilo de música",
    type: "attribute",
  },
  {
    name: "specialEdition",
    label: "Edición especial",
    type: "attribute",
  },
  {
    name: "price",
    label: "Precio",
    type: "slider",
  },
  {
    name: "color",
    label: "Color",
    type: "colorGrid",
  },
  {
    name: "size",
    label: "Talla",
    type: "attribute",
  },
];

const attributes = {
  productType: [
    "Camisetas",
    "Complementos",
    "Gorras",
    "Otros",
    "Sudaderas",
    "Taza y Mensaje",
  ],
  musicStyle: ["Urbano"],
  specialEdition: ["Exclusivo"],
  size: ["XS", "S", "M", "XL"],
};

const Store = () => {
  const location = useLocation();
  const biggerThanMD = useMediaQuery("(min-width:900px)");

  const { modeState } = useMode();
  const { languageState } = useLanguage();
  const { setNotificationState } = useNotification();

  const showNotification = (ntype, message) =>
    setNotificationState({
      type: "set",
      ntype,
      message,
    });

  const [loading, setLoading] = useState(1);

  const [selectedFilter, setSelectedFilter] = useState("");

  const [showSearch, setShowSearch] = useState(false);
  const toggleSearchInput = () => setShowSearch(!showSearch);

  const searchResultReducer = (searchResultState, action) => {
    const { type } = action;
    switch (type) {
      case "set": {
        const { newArray } = action;
        return newArray;
      }
      default:
        return [];
    }
  };

  const [searchResult, setSearchResult] = useReducer(searchResultReducer, []);

  const preventDefault = (event) => event.preventDefault();

  const [toSearch, setToSearch] = useState("");
  const clearInput = () => setToSearch("");

  const handleToSearch = (e) => setToSearch(e.target.value);

  const filtersReducer = (filterState, action) => {
    const { type } = action;
    switch (type) {
      case "toggle-color": {
        const { color } = action;
        filterState.colors[color].value = !filterState.colors[color].value;
        return { ...filterState };
      }
      default:
        return { colors: [...colors] };
    }
  };

  const [filters, setFilters] = useReducer(filtersReducer, {
    colors: [...colors],
  });

  useEffect(() => {
    setLoading(0);
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 40px",
            margin: "40px 0",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            {selectedFilter.length > 0 ? (
              <MUILink underline="hover" color="inherit" href="/">
                {languageState.texts.Store.Home}
              </MUILink>
            ) : (
              <Typography color="text.primary">
                {languageState.texts.Store.Home}
              </Typography>
            )}
            {selectedFilter.length > 0 ? (
              <Typography color="text.primary">{selectedFilter}</Typography>
            ) : null}
          </Breadcrumbs>
          <Box>
            <FormControl
              sx={{
                overflow: "hidden",
                position: "absolute",
                right: "120px",
                div: { borderRadius: "25px" },
                width: showSearch ? "50%" : "40px",
                transition: "all 1000ms ease",
                marginLeft: showSearch ? 0 : "50%",
                fieldset: {
                  transition: "all 1000ms ease",
                  borderWidth: showSearch ? "1px" : 0,
                },
                input: { padding: "7.5px 14px", fontSize: "15px" },
              }}
              variant="outlined"
            >
              <OutlinedInput
                id="search"
                size="small"
                value={toSearch}
                placeholder={languageState.texts.Navbar.Search.placeholder}
                onChange={handleToSearch}
                type="search"
                endAdornment={
                  <InputAdornment
                    position="end"
                    sx={{ button: { marginRight: "20px" } }}
                  >
                    {toSearch.length > 0 ? (
                      <IconButton
                        sx={{ marginRight: "20px" }}
                        color="secondary"
                        aria-label="clear"
                        onClick={clearInput}
                        onMouseDown={preventDefault}
                        edge="end"
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    ) : null}
                  </InputAdornment>
                }
              />
            </FormControl>
            <Tooltip title={languageState.texts.Tooltips.Search}>
              <IconButton color="primary" onClick={toggleSearchInput}>
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={languageState.texts.Tooltips.Account}>
              <Link to="/store/account">
                <IconButton color="primary">
                  <PersonIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title={languageState.texts.Tooltips.Cart}>
              <Link to="/store/cart">
                <IconButton color="primary">
                  <ShoppingBagIcon />
                </IconButton>
              </Link>
            </Tooltip>
          </Box>
        </Box>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          {languageState.texts.Store.Title}
        </Typography>
      </Box>
      <Box sx={{ padding: "40px", display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "350px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            {languageState.texts.Store.Filters.Title}
          </Typography>
          {filterTypes.map((item, i) => (
            <Accordion key={item.name} defaultExpanded={i === 0 ? true : false}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{item.label}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.type === "model" ? (
                  <FormGroup>
                    {models[item.name].slice(0, 9).map((jtem) => (
                      <FormControlLabel
                        key={jtem.id}
                        control={<Checkbox />}
                        label={jtem.name}
                      />
                    ))}
                  </FormGroup>
                ) : null}
                {item.type === "attribute" ? (
                  <FormGroup>
                    {attributes[item.name].slice(0, 9).map((jtem, j) => (
                      <FormControlLabel
                        key={j}
                        control={<Checkbox />}
                        label={jtem}
                      />
                    ))}
                  </FormGroup>
                ) : null}
                {item.type === "slider" ? (
                  <Box sx={{ display: "flex" }}>
                    <FormControl>
                      <InputLabel>
                        {languageState.texts.Store.Filters.Price.Min}
                      </InputLabel>
                      <OutlinedInput
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        type="number"
                        min={0}
                        label={languageState.texts.Store.Filters.Price.Min}
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel>
                        {languageState.texts.Store.Filters.Price.Max}
                      </InputLabel>
                      <OutlinedInput
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        type="number"
                        min={0}
                        label={languageState.texts.Store.Filters.Price.Max}
                      />
                    </FormControl>
                  </Box>
                ) : null}
                {item.type === "colorGrid" ? (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {filters.colors.map((item, i) => (
                      <Box
                        sx={{
                          border: filters.colors[i].value
                            ? `2px solid ${
                                modeState.mode !== "light" ? "pink" : "black"
                              }`
                            : "",
                          background: item.label,
                          padding: "10px",
                          width: "40px",
                          height: "40px",
                          cursor: "pointer",
                        }}
                        key={item.label}
                        onClick={() =>
                          setFilters({
                            type: "toggle-color",
                            color: i,
                          })
                        }
                      />
                    ))}
                  </Box>
                ) : null}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            marginTop: "52px",
          }}
        >
          <Loading visible={loading === 1} />
          <Grid count={9} model="products" component="product" scrollable />
        </Box>
      </Box>
    </Box>
  );
};

export default Store;
