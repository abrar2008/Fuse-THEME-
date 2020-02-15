import React, {useState, useEffect} from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, withStyles, useTheme, ThemeProvider } from '@material-ui/styles';
import { Grid, Paper, Container, FormControl, InputLabel, Select, MenuItem, Button, TableHead, TableRow, TableCell, TableContainer, Tab, Table, TableBody } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import { useSelector } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import { Line } from 'react-chartjs-2';
import _ from '@lodash';

const StyeldTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);



const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
    }
}));


function PriorityTable() {
        // const classes = useStyles(props);
    const [daData, setDaData] = useState({
        showSeo: false,
        showAxe: false,
        showAxeRaw: false,
        data: {}
    });

    useEffect(() => {

        fetch('http://localhost:5000/getReportAxe?site=selection.website + &process_id= + selection.processId').then(
            response => response.json()
        ).then(
            data => {
                setDaData({
                    showSeo: false,
                    showAxe: true,
                    showAxeRaw: false,
                    data: {
                    }
                });
            }
        ).catch((error) => {
            setDaData({
                showSeo: false,
                showAxe: true,
                showAxeRaw: false,
                data: {
                    'priroty': [
                        ['low', 21, 4.2], ['medium', 127, 1.2],
                        ['low', 21, 4.2], ['medium', 127, 1.2],
                    ],


                }
            });
        })


    }, [])

    return (

        <Grid style={{ display:"flex",justifyItems:"center"}} className="w-full" container xs={12} md={11} lg={11}>
            {Object.keys(daData.data).map((title) => (
                <Grid style={{ padding: 30, with: "100%" }} item xs={12} md={12} lg={12}>
                    {/* <h2>{title}</h2>
                <br /> */}
                    <TableContainer style={{ height: 230,width:"100%" }} component={Paper}>
                        <Table style={{width: "100%" }} stickyHeader >
                            <TableHead>
                                <StyeldTableCell><b>{title}</b></StyeldTableCell>
                                <StyeldTableCell><b>Times it asppeared</b></StyeldTableCell>
                                <StyeldTableCell><b>AVG/Page</b></StyeldTableCell>
                            </TableHead>
                            {daData.data[title].map((field) => (
                                <TableBody>
                                    <StyeldTableCell>{field[0]}</StyeldTableCell>
                                    <StyeldTableCell>{field[1]}</StyeldTableCell>
                                    <StyeldTableCell>{field[2]}</StyeldTableCell>
                                </TableBody>
                            ))}
                        </Table>
                    </TableContainer>
                </Grid>
            ))}
        </Grid>
    )

}



export default function Queue(data) {


    const [queue, setQueue] = useState([]);

    useEffect(() => {
        //const interval = setInterval(() => {
            // fetch("http://localhost:5000/getLiveQueue").then(
            //     response => response.json().then(
            //         data => {
            //             let a = [];
            //             for (const item in data) {
            //                 a.push(data[item])
            //             }
            //             setQueue(a);
            //         }
            //     )
            // ); 
       // }, 500);

       // return () => clearInterval(interval);
    }, []);

    return (


            <PriorityTable/>

    )
} 

{/* <h2>Queue</h2> */ }
{/* {queue.map((item) => (
                <Paper style={{
                    padding: 30,
                    display: 'flex',
                    overflow: 'auto',
                    flexDirection: 'column'
                }}>
                    home_url: {item.home_url}<br/>
                    browser: {item.browser}<br/>
                    resolution: {item.resolution}<br/>
                    request_time: {item.time_token}
                </Paper>
            ))} */}