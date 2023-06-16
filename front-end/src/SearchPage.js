import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import Header from "./Header";
import Drawer from '@mui/material/Drawer';
import { SearchOutlined } from "@mui/icons-material";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  page: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  bg: {
    backgroundImage: "url('RRoom.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.4,
    zIndex: -1,
  },
  body: {
    position: "relative",
    overflow: "auto",
    height: "100vh",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "hidden",
    alignContent: "space-between",
  },
  search: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10,
      paddingTop: '150px',
      paddingBottom: '50px',
  },
  actionArea: {
      borderRadius: 10,
      transition: '0.2s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'auto',
    bottom: 0,
    width: '100%',
    padding: '10px',
    background: 'transparent',
    paddingTop: "30px",
  },
}));

const navItems = [
    { label: '辦公用品', path: '/HomeSearch', link: 'https://imgur.com/dbpUIAg.jpg', link2x: 'https://imgur.com/dbpUIAg.jpg 2x' },
    { label: '各式書籍', path: '/BookGameSearch', link: 'https://imgur.com/o27q3n3.jpg', link2x: 'https://imgur.com/o27q3n3.jpg 2x' },
    { label: '桌遊卡牌', path: '/BookGameSearch', link: 'https://imgur.com/y2W2QAf.jpg', link2x: 'https://imgur.com/y2W2QAf.jpg 2x' },
    { label: '電子電器', path: '/HomeInventory', link: 'https://imgur.com/oYHDu3r.jpg', link2x: 'https://imgur.com/oYHDu3r.jpg 2x' },
    { label: '廚房用品', path: '/HomeInventory', link: 'https://imgur.com/v4mKF0h.jpg', link2x: 'https://imgur.com/v4mKF0h.jpg 2x' },
    { label: '五金工具', path: '/TeacherSignIn', link: 'https://imgur.com/U79rs5m.jpg', link2x: 'https://imgur.com/U79rs5m.jpg 2x' },
    { label: '其他類別', path: '/TeacherSignIn', link: 'https://imgur.com/bOh5EQP.jpg', link2x: 'https://imgur.com/bOh5EQP.jpg 2x' },
];

function Content() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  return (
    <Pagination
      page={page}
      count={10}
      size="large"
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}

const page = (
  <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
    <Routes>
      <Route path="*" element={<Content />} />
    </Routes>
  </MemoryRouter>
);

export default function SearchPage(props) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();

  const SearchBar = (
    <Paper
        component="form"
        elevation={3}
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          px: 1, 
          py: 0.5,
          borderRadius: "30px",
          maxWidth: "800px",
          width: "70vw", // Adjust the value as per your desired width
          [theme.breakpoints.up("sm")]: {
            width: "60vw", // Adjust the value for larger screens
          },
         }}
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(searchTerm || "");
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="搜尋物品...."
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          {...props.inputProps}
        />
        <Divider sx={{ height: 28, mx: 0.5 }} orientation="vertical" />
        <IconButton type="submit">
          <SearchOutlined />
        </IconButton>
      </Paper>
  );
  
  const CustomCard = () => {
    return (
      <Container sx={{ pb: 8 }} maxWidth="md">
        <Grid container spacing={3} justifyContent="center">
        {navItems.map((nav) => (
          <Grid item xs={15} sm={12} md={8}>
            <Link to={nav.path}>
              <CardActionArea className={classes.actionArea}>
              <Card sx={{ maxWidth: '100%', minWidth: 200, boxShadow: 'lg' }}>
                <CardOverflow>
                  <AspectRatio sx={{ minWidth: 200, maxWidth: "100% "}}>
                    <img
                      src={nav.link}
                      srcSet={nav.link2x}
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardContent sx={{backgroundColor: "#34241e", paddingY: '10px', paddingLeft: '20px'}}>
                <Typography fontSize="xl" fontWeight="xl" color="white" sx={{ mt: 1, justifyContent: 'center' }}>
                    {nav.label}
                </Typography>
                </CardContent>
              </Card>
              </CardActionArea>
            </Link>
            </Grid>
        ))}
        </Grid>
      </Container>
    );
  };

  return (
    <div className={classes.page}>
    <Header/>
      <body className={classes.body}>
        <div className={classes.bg}/>
        
        <div className={classes.content}>
          <div className={classes.search}>
            {SearchBar}
          </div>
        </div>
        <div className={classes.container}>
          <CustomCard/>
        </div>
        <div className={classes.paginationContainer}>
          <Content page={page} />
        </div>
      </body>
    </div>
  );
}
