import Color from "color";
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from "@mui/styles";
import Header from "./Header";

const useStyles = makeStyles(() => ({
  page: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  bg: {
    position: "absolute",
    minWidth: "100%",
    resizeMode: "contain",
    opacity: 0.5,
  },
  body: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
    alignContent: "center",
    paddingLeft: "60px",
    paddingRight: "60px",
    paddingTop: "200px",
  },
  subcontainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    overflow: "hidden",
    maxWidth: "500px",
    minWidth: "300px",
    padding: "50px",
  },
  actionArea: {
      borderRadius: 50,
      transition: '0.2s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
  },
  card: ({ color }) => ({
      minWidth: 306,
      maxWidth: 500,
      borderRadius: 50,
      boxShadow: 'none',
      '&:hover': {
        boxShadow: `0 6px 12px 0 ${Color(color)
          .rotate(-12)
          .darken(0.2)
          .fade(0.5)}`,
      },
  }),
  content: ({ color }) => {
      return {
        backgroundColor: color,
        padding: '1rem 1.5rem 1.5rem',
      };
  },
  title: {
      fontSize: '2rem',
      color: '#fff',
      textTransform: 'uppercase',
  },
  subtitle: {
      color: '#fff',
      opacity: 0.87,
      marginTop: '2rem',
      fontWeight: 500,
      fontSize: 14,
  },
}));

const CustomCard = ({ classes, link, image, title, subtitle }) => {
    const mediaStyles = makeStyles(() => ({
        root: ({ bgColor = 'rgba(0, 0, 0, 0.08)' }) => ({
        width: '100%',
        height: 0,
        paddingBottom: '75%',
        backgroundColor: bgColor,
      }),
    }));
    return (
        <CardActionArea className={classes.actionArea}>
        <Card className={classes.card}>
          <CardMedia 
          component="img"
          alt="random"
          image={image}
          className={mediaStyles}/>
          <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h5'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
          </CardContent>
        </Card>
        </CardActionArea>
    );
  };

export default function Home(props) {
  const classes = useStyles();
  const findCardstyles = useStyles({ color: '#34241e' });
  const workCardstyles = useStyles({ color: '#203f52' });

  return (
    <div className={classes.page}>
    <Header/>
      <body className={classes.body} >
        <img className={classes.bg} src="/RRoom.png" alt=""/>
        <div className={classes.container}>
        <div className={classes.subcontainer}>
            <Link to={'/HomeSearch'}>
                <CustomCard
                classes={findCardstyles}
                title={'尋找物品'}
                image={'https://i.imgur.com/TxVDS9o.png'}
                />
            </Link>
        </div>
        <div className={classes.subcontainer}>
            <Link to={'/HomeInventory'}>
                <CustomCard
                classes={workCardstyles}
                title={'每月盤點'}
                image={'https://i.imgur.com/VoBXa8t.png'}
                />
            </Link>
        </div>
        </div>
      </body>
    </div>
  );
}
