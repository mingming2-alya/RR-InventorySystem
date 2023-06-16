import { Link } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import { makeStyles } from "@mui/styles";
import Header from "./Header";

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
  sitetitle: {
      color: "#322619",
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      fontSize: 50,
      fontWeight: 'bold',
      marginBottom: 10,
      paddingTop: '150px',
      paddingBottom: '50px',
      letterSpacing: 15,
  },
  actionArea: {
      borderRadius: 10,
      transition: '0.2s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
  },
}));

const navItems = [
    { label: '辦公用品', link: 'https://imgur.com/dbpUIAg.jpg', link2x: 'https://imgur.com/dbpUIAg.jpg 2x' },
    { label: '各式書籍', link: 'https://imgur.com/o27q3n3.jpg', link2x: 'https://imgur.com/o27q3n3.jpg 2x' },
    { label: '桌遊卡牌', link: 'https://imgur.com/y2W2QAf.jpg', link2x: 'https://imgur.com/y2W2QAf.jpg 2x' },
    { label: '電子電器', link: 'https://imgur.com/oYHDu3r.jpg', link2x: 'https://imgur.com/oYHDu3r.jpg 2x' },
    { label: '廚房用品', link: 'https://imgur.com/v4mKF0h.jpg', link2x: 'https://imgur.com/v4mKF0h.jpg 2x' },
    { label: '五金工具', link: 'https://imgur.com/U79rs5m.jpg', link2x: 'https://imgur.com/U79rs5m.jpg 2x' },
    { label: '其他類別', link: 'https://imgur.com/bOh5EQP.jpg', link2x: 'https://imgur.com/bOh5EQP.jpg 2x' },
];

export default function HomeSearch(props) {
  const classes = useStyles();
  
  const CustomCard = () => {
    return (
      <Container sx={{ pb: 8 }} maxWidth="md">
            {/* End hero unit */}
        <Grid container spacing={4} justifyContent="center">
        {navItems.map((nav) => (
          <Grid item xs={8} sm={5} md={4}>
            <Link to='/SearchPage'>
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
          <div className={classes.sitetitle}>尋找物品</div>
        </div>
        <div className={classes.container}>
          <CustomCard/>
        </div>
      </body>
    </div>
  );
}
