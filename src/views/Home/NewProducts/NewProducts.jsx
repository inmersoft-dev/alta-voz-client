import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// components
import Grid from "../../../components/Grid/Grid";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const NewProducts = () => {
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        padding: {
          xl: "40px 5rem 40px 5rem",
          lg: "40px 4rem 40px 4rem",
          xs: "30px 20px",
        },
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h4" sx={{ marginBottom: 0 }}>
          {languageState.texts.Home.NewProducts.Title}
        </Typography>
        <Link to="/store" className={css({ textDecoration: "none" })}>
          <Button>{languageState.texts.Home.NewProducts.SeeMore}</Button>
        </Link>
      </Box>
      <Grid count={4} model="products" component="product" />
    </Box>
  );
};

export default NewProducts;
