// sito components
import { Box, Typography } from "@mui/material";

// contexts
import { useLanguage } from "../../context/LanguageProvider";

const Footer = () => {
  const { languageState } = useLanguage();
  return (
    <Box
      justifyContent="space-between"
      sx={{
        display: "flex",
        padding: { xl: "20px 5rem", lg: "20px 4rem", xs: "20px" },
      }}
    >
      <Typography variant="caption">
        {languageState.texts.Footer.Company}
      </Typography>
      <Typography variant="caption">
        {languageState.texts.Footer.Date}
      </Typography>
    </Box>
  );
};

export default Footer;
