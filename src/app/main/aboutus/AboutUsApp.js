import React, {useState, useEffect} from 'react';
import {Grid, Paper, Container, FormControl, InputLabel, Select, MenuItem, Button, TableHead, TableRow, TableCell, TableContainer, Tab, Table, TableBody} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

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


export default function AddANewSiteApp() {

    const [websiteList, setWebsiteList] = useState({});
    const [selection, setSelection] = useState({
        website: '',
        processId: '',
        analysis: 'seo'
    });
    const [daData, setDaData] = useState({
        showSeo: false,
        showAxe: false,
        showAxeRaw: false,
        data: {}
    });

    useEffect(() => {

        fetch("http://localhost:5000/getWebsiteList").then(
            response => response.json()
        ).then(
            data => {
                setWebsiteList(data);
            }
        ).catch((error)=>{
            setWebsiteList({
                            'rebeldesign.com':[190232321321,21312343534,234324324324]
                           });
            console.log('Error:', error);
        })

                
    }, []);

    const handleSelectionChange = name => event => {
        setSelection({
            ...selection,
            [name]: event.target.value
        })
    }

    const handleButtonPress = () => {
        if (selection.website !== '') {
            if (selection.processId !== '') {
                if (selection.analysis === 'seo') {
                    fetch('http://localhost:5000/getReportDa?site='+selection.website+'&process_id='+selection.processId).then(
                        response => response.json()
                    ).then(
                        data => {
                            setDaData({
                                showSeo: true,
                                showAxe: false,
                                showAxeRaw: false,
                                data: data
                            });
                        }
                    ).catch((error)=>{
                        setDaData({
                            showSeo: true,
                            showAxe: false,
                            showAxeRaw: false,
                            data: {
                                title1: [['value11', 'value12'], ['value11', 'value12']],
                                title2:[['value21', 'value22']],
                                title3:[['value11', 'value12']],
                                title4:[['value21', 'value22']], 
                                title5:[['value11', 'value12']],
                                title6:[['value21', 'value22']]
                            }
                        });
                    })
                } else if (selection.analysis === 'axe') {
                    fetch('http://localhost:5000/getReportAxe?site='+selection.website+'&process_id='+selection.processId).then(
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
                    ).catch((error)=>{
                        setDaData({
                            showSeo: false,
                            showAxe: true,
                            showAxeRaw: false,
                            data: {
                                'priroty': [['low', 21, 4.2], ['medium', 127, 1.2]],
                                'violations': [['ARIA role must be appropiate for the element', 3, 0.6]]
                            }
                        });
                    })                
                } else if (selection.analysis === 'axe_raw') {
                    fetch('http://localhost:5000/getReportAxeRaw?site='+selection.website+'&process_id='+selection.processId).then(
                        response => response.json()
                    ).then(
                        data => {
                            setDaData({
                                showSeo: false,
                                showAxe: false,
                                showAxeRaw: true,
                                data: data
                            });
                            console.log(data);
                        }
                    ).catch(error=>{
                        setDaData({
                            showSeo: false,
                            showAxe: false,
                            showAxeRaw: true,
                            data: {
                                    0:['http://www.rebeldesign.com/','violations','low','ARIA role must be appropiate for the element','Ensures role attribute has an appropiate value for the element','#top-navigation','nav'],
                                    1: ['http://www.rebeldesign.com/', 'violations', 'high', 'Buttons must have discernible text', 'Ensures buttons have discernible text', '.btn', 'a'],
                                    2: ['http://www.rebeldesign.com/', 'violations', 'low', 'ARIA role must be appropiate for the element', 'Ensures role attribute has an appropiate value for the element', '#top-navigation', 'nav']
                                }
                        });
                    })
                }
            }
        }
    }

    const handleDownloadButton = () => {
        if (selection.website !== '') {
            if (selection.processId !== '') {
                fetch('http://localhost:5000/getAxeCsv?site='+selection.website+'&process_id='+selection.processId).then(
                    response => response.blob().then((blob) => {
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = "main-table.csv";
                        a.click(); 
                    })
                )
            }
        }
    }

    return (
      <Grid justify="center"  container spacing={2}>
        <Grid item  xs={12} md={11} lg={11}>
          <Paper  style={{
                      marginTop:20,
                      padding: 30,
                      display: 'flex',
                      overflow: 'auto',
                      flexDirection: 'column',
                  }}>
            <Container  style={{
              textAlign: 'center',
        }} >
                        <h1 style={{fontSize:40,padding:8}}>Results</h1>
                        <FormControl variant="outlined"  style={{width: 200, margin:8}}>
                            <InputLabel id="selectwebsite" style={{ backgroundColor: 'white' }}>Select Website</InputLabel>
                            <Select id="selectWeb" labelId="selectwebsite" onChange={handleSelectionChange('website')} autoWidth>
                                {Object.keys(websiteList).map((key) => (
                                    <MenuItem value={key}>
                                        {key}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        
                        <FormControl variant="outlined" style={{ width: 200, margin: 8 }} >
                            <InputLabel id="selectProcessId" style={{ backgroundColor: 'white' }}>Select ProcessId</InputLabel>
                            <Select labelId="selectProcessId" id="selectProccessIdddd" onChange={handleSelectionChange('processId')} autoWidth>
                                {selection.website !== '' ? websiteList[selection.website].map((val) => ( 
                                    <MenuItem value={val}>
                                        {val}
                                    </MenuItem>
                                )) : <MenuItem>Select a website first!</MenuItem>}
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined" style={{ width: 200, margin: 8 }}>
                            <InputLabel id="selectAnalysis" style={{backgroundColor:'white'}}>Select Analysis</InputLabel>
                            <Select id="selectana" labelId="selectAnalysis" onChange={handleSelectionChange('analysis')} autoWidth>
                                <MenuItem value={'seo'}>SEO (Script 1)</MenuItem>
                                <MenuItem value={'axe'}>Violations (Script 2)</MenuItem>
                                <MenuItem value={'axe_raw'}>Main Table</MenuItem>
                            </Select>
                        </FormControl>
                        <br/>
                        <Fab
                            variant="extended"
                            size="medium"
                            color="primary"
                            aria-label="add"
                            style={{ marginTop: '20px' }}
                            onClick={handleButtonPress}
                        >
                        Fetch Results
                        </Fab>
                         <br/>
                        {daData.showAxeRaw ? <Button variant='contained' onClick={handleDownloadButton} style={{marginTop: '20px'}}>Download CSV</Button> : <Container></Container>}
                    </Container>
                </Paper>
            </Grid>
            {daData.showSeo ? 
                <Grid container xs={12} md={10} lg={10} spacing={3}>
                {Object.keys(daData.data).map((title) => (
                    <Grid item xs={4} md={3} lg={3}>
                        <h2>{title}</h2>
                        <br/>
                        <TableContainer component={Paper}>
                            <Table>
                                {daData.data[title].map((field) => (
                                    <TableBody>
                                        <StyeldTableCell>{field[0]}</StyeldTableCell>
                                        <StyeldTableCell>{field[1]}</StyeldTableCell>
                                    </TableBody>
                                ))}
                            </Table>
                        </TableContainer>
                    </Grid>
                ))}
            </Grid>
            : <Container></Container>}
            {daData.showAxe ?
                <Grid container item xs={12} md={11} lg={11}>
                {Object.keys(daData.data).map((title) => (
                    <Grid item xs={12} md={12} lg={12}>
                        <h2>{title}</h2>
                        <br/>
                        <TableContainer component={Paper}>
                            <Table>
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
            : <Container></Container>}
            {daData.showAxeRaw ?
                <Grid container item xs={12} md={11} lg={11}>
                <TableContainer component={Paper} >
                    <Table>
                        <TableHead>
                            <StyledTableRow>
                                <StyeldTableCell component='th'><b>S.No.</b></StyeldTableCell>
                                <StyeldTableCell component='th'><b>url</b></StyeldTableCell>
                                <StyeldTableCell component='th'><b>category</b></StyeldTableCell>
                                <StyeldTableCell component='th'><b>priority</b></StyeldTableCell>
                                <StyeldTableCell component='th'><b>violation_help</b></StyeldTableCell>
                                <StyeldTableCell component='th'><b>description</b></StyeldTableCell>
                                <StyeldTableCell component='th'><b>element_location</b></StyeldTableCell>
                                <StyeldTableCell component='th'><b>element</b></StyeldTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(daData.data).map((row) => (
                                <StyledTableRow>
                                    <StyeldTableCell>{row}</StyeldTableCell>
                                    {daData.data[row].map((item) => (
                                        <StyeldTableCell>{item}</StyeldTableCell>
                                    ))}
                                </StyledTableRow> 
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            : <Container></Container>}
        </Grid>
      
    )
}

