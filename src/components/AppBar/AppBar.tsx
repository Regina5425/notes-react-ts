import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "400px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{ backgroundColor: "#212121", padding: "15px" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className='app-bar__items'>
              <div className='app-bar__item'>
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  sx={{ mr: 1 }}
                >
                  <FormatListBulletedIcon />
                </IconButton>
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  sx={{ mr: 1 }}
                >
                  <GridViewIcon />
                </IconButton>
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  sx={{ mr: 1 }}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
              </div>
              <div className='app-bar__item'>
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  sx={{ mr: 1 }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </div>
            </div>
          </Grid>
          <Grid item xs={7}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              sx={{ mr: 2 }}
            >
              <NoteAddIcon />
            </IconButton>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              sx={{ mr: 2 }}
            >
              <TextFormatIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Поиск…'
                inputProps={{ "aria-label": "поиск" }}
              />
            </Search>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
