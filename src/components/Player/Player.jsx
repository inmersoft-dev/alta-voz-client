import { useState } from "react";

// @mui/material
import {
  useTheme,
  Box,
  Slider,
  Button,
  IconButton,
  Typography,
} from "@mui/material";

// @mui/icons-material
// control
import PauseIcon from "@mui/icons-material/Pause";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// volume
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
// like
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Player = (props) => {
  const theme = useTheme();
  const [state, setState] = useState(false);
  const [like, setLike] = useState(false);

  const [volume, setVolume] = useState(40);
  const [songName, setSongName] = useState("Desenfocao");
  const [songTrack, setSongTrack] = useState(40);
  const [showVolume, setShowVolume] = useState(false);

  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  return (
    <Box
      sx={{
        left: 0,
        bottom: 0,
        zIndex: 99,
        gap: "10px",
        width: "100%",
        height: "70px",
        display: "flex",
        position: "fixed",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.background.paper,
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <IconButton color="inherit">
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={() => setState(!state)} color="inherit">
          {state ? (
            <PlayArrowIcon fontSize="large" />
          ) : (
            <PauseIcon fontSize="large" />
          )}
        </IconButton>
        <IconButton color="inherit">
          <SkipNextIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            borderRadius: "0px 0px 10px 10px",
            transition: "background 500ms ease",
            background: showVolume ? theme.palette.disabled.dark : "none",
          }}
          onMouseLeave={() => setShowVolume(false)}
        >
          <Box
            onMouseLeave={() => setShowVolume(false)}
            sx={{
              display: "flex",
              justifyContent: "center",
              bottom: "40px",
              width: "40px",
              overflow: "hidden",
              padding: "15px 5px",
              position: "absolute",
              height: showVolume ? "120px" : 0,
              borderRadius: "10px 10px 0px 0px",
              transition: "all 500ms ease",
              background: showVolume ? theme.palette.disabled.dark : "none",
            }}
          >
            <Slider
              size="small"
              color="disabled"
              aria-label="volume"
              orientation="vertical"
              valueLabelDisplay="auto"
              onChange={(e, v) => setVolume(v)}
              sx={{
                opacity: showVolume ? 1 : 0,
                transition: "opacity 500ms ease",
              }}
              value={volume}
            />
          </Box>
          {volume <= 50 && volume !== 0 && (
            <VolumeDownIcon
              onMouseEnter={() => setShowVolume(true)}
              sx={{ margin: "8px" }}
            />
          )}
          {volume === 0 && (
            <VolumeMuteIcon
              onMouseEnter={() => setShowVolume(true)}
              sx={{ margin: "8px" }}
            />
          )}
          {volume >= 50 && (
            <VolumeUpIcon
              onMouseEnter={() => setShowVolume(true)}
              sx={{ margin: "8px" }}
            />
          )}
        </Box>
        <IconButton onClick={() => setLike(!like)} color="inherit">
          {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        sx={{ width: "30%", margin: "0 40px" }}
      >
        <Typography variant="caption">{songName}</Typography>
        <Box
          display="flex"
          alignItems="center"
          gap="5px"
          sx={{ width: "100%" }}
        >
          <Typography fontSize="0.6rem" variant="caption">
            00:00
          </Typography>
          <Slider size="small" color="primary" value={songTrack} />
          <Typography fontSize="0.6rem" variant="caption">
            00:00
          </Typography>
        </Box>
      </Box>
      <Box sx={{ gap: "5px", display: "flex", alignItems: "center" }}>
        <Button
          variant={shuffle ? "contained" : "inherit"}
          sx={{ minWidth: 0, padding: "8px", borderRadius: "50%" }}
          onClick={() => setShuffle(!shuffle)}
        >
          <ShuffleIcon />
        </Button>
        <Button
          variant={repeat ? "contained" : "inherit"}
          sx={{ minWidth: 0, padding: "8px", borderRadius: "50%" }}
          onClick={() => setRepeat(!repeat)}
        >
          <RepeatIcon />
        </Button>
        <IconButton color="inherit">
          <QueueMusicIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

Player.propTypes = {};

export default Player;
