import PropTypes from "prop-types";

// styles
import { styled } from "@mui/material/styles";

// @mui/material
import { Box, Paper, Grid } from "@mui/material";

// test
import { album, artists, genres } from "../../data/data";
import InViewComponent from "../InViewComponent/InViewComponent";

const models = { album, artists, genres };

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PrettyGrid = (props) => {
  const { model, filter, count } = props;

  const splitArray = (array) => {
    let res = [];
    let partial = [];
    for (let i = 0; i < array.length; i++) {
      partial.push(array[i]);
      if (i % 2 === 1) {
        res.push(partial);
        partial = [];
      }
    }
    return res;
  };

  const givePosition = (i, j) => {
    if (i % 2 === 0) {
      if (j % 2 === 0) return 8;
      return 4;
    } else {
      if (j % 2 === 0) return 4;
      return 8;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {splitArray(models[model].slice(0, count)).map((item, i) => (
        <Grid container spacing={2} key={i}>
          {item.map((jtem, j) => (
            <Grid key={item.id} item xs={6} md={givePosition(i, j)}>
              <InViewComponent delay={`0.${i + 1}s`}>
                {console.log(i, i % 2)}
                <Item>xs=6 md=8</Item>
              </InViewComponent>
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
};

PrettyGrid.defaultProps = {
  count: 10,
  model: "songs",
  filter: "genres",
};

export default PrettyGrid;
