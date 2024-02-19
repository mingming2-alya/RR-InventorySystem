import { Link } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useState } from 'react'; 
import { FormHelperText, FormControl} from '@mui/material'; 
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

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
    justifyContent: "center",
    overflow: "hidden",
    alignContent: "center",
  },
  sitetitle: {
      color: "#203f52",
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

const columns = [
  { field: 'id', headerName: '', width: 90, sortable: false },
  {
    field: 'oPic',
    headerName: '',
    width: 250,
    sortable: false,
    autoHeight: true,
    renderCell: (params) => <img src={params.value} alt='' width='90%'/>,
  },
  {
    field: 'oName',
    headerName: '物品名稱',
    alignContent: 'left',
    width: 300,
    sortable: false,
    flexWrap: true,
  },
  {
    field: 'oModel',
    headerName: '品牌 / 型號',
    alignContent: 'left',
    width: 150,
    sortable: false,
    flexWrap: true,
  },
  {
    field: 'oLoc',
    headerName: '物品位置',
    alignContent: 'left',
    width: 150,
    flexWrap: true,
  },
  {
    field: 'oPreDate',
    headerName: '最後盤點日期',
    alignContent: 'left',
    width: 200,
    flexWrap: true,
    type: 'date',
  },
  {
    field: 'oPreQ',
    headerName: '最後數量',
    width: 150,
    type: 'number',
    sortable: false,
    flexWrap: true,
  },
  {
    field: 'oNewQ',
    headerName: '本次數量',
    width: 150,
    type: 'number',
    editable: true,
    sortable: false,
    flexWrap: true,
  },
];

const rows = [
  { id: 1, oPic: 'https://i.imgur.com/faQkSli.jpg', oName: 'Frozen yoghurt33333333333333333333333333333333333333333333333333', oModel: 'Jon', oLoc: 'A', oPreDate: new Date(), oPreQ: 10, oNewQ: null},
  { id: 2, oPic: 'https://imgur.com/o27q3n3.jpg', oName: 'Ice cream sandwich', oModel: 'Cersei', oLoc: 'A', oPreDate: new Date(), oPreQ: 110, oNewQ: null},
  { id: 3, oPic: 'https://imgur.com/y2W2QAf.jpg', oName: 'Eclair', oModel: 'Jaime', oLoc: 'A', oPreDate: new Date(), oPreQ: 120, oNewQ: null},
  { id: 4, oPic: 'https://imgur.com/oYHDu3r.jpg', oName: 'Cupcake', oModel: 'Arya', oLoc: 'A', oPreDate: new Date(), oPreQ: 130, oNewQ: null},
  { id: 5, oPic: 'https://imgur.com/U79rs5m.jpg', oName: 'Gingerbread', oModel: 'Daenerys', oLoc: 'A', oPreDate: new Date(), oPreQ: 140, oNewQ: null},
];


export default function OfficeInventory(props) {
  const classes = useStyles();

  return (
    <div className={classes.page}>
    <Header/>
      <body className={classes.body}>
        <div className={classes.bg}/>
        <div className={classes.content}>
          <div className={classes.sitetitle}>盤點物品</div>
        </div>
        <div className={classes.container}>
        <FormControl>
        <Box 
          sx={{ height: '100%', width: '100%', borderRadius: 1, bgcolor: 'white', padding: 3}} 
        >
          <DataGrid
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            showCellVerticalBorder
            showColumnVerticalBorder
            sx={{
              fontSize: '20px'
            }}
            getRowHeight={() => 'auto'}
          />
        </Box>
        </FormControl> 
        </div>
      </body>
    </div>
  );
}
