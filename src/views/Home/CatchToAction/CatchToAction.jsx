import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { useTheme, Box, Button, Typography } from "@mui/material";

// @mui/icons-material
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// components
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// test
import { news } from "../../../data/data";
import SitoImage from "sito-image";

const CatchToAction = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        marginTop: "40px",
        marginRight: "-50px",
        gap: "20px",
        display: "flex",
        padding: {
          xl: "20px 0 20px 0",
          xs: "20px 0 20px 0",
        },
      }}
    >
      <Box>
        <Typography>{languageState.texts.Home.CatchToAction.Title}</Typography>
        <Typography>
          {languageState.texts.Home.CatchToAction.Description}
        </Typography>
        <Button variant="contained">
          {languageState.texts.Home.CatchToAction.Button}
        </Button>
      </Box>
      <Box>
        <SitoImage
          sx={{ width: "300px", height: "300px" }}
          sx="https://xsgames.co/randomusers/assets/avatars/female
            /300.jpg"
          alt="person"
        />
      </Box>
    </Box>
  );
};

export default CatchToAction;
