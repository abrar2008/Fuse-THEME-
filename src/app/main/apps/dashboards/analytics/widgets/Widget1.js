import React, { useState, useEffect } from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles, withStyles, useTheme, ThemeProvider} from '@material-ui/styles';
import { Grid, Paper, Container, FormControl, InputLabel, Select, MenuItem, Button, TableHead, TableRow, TableCell, TableContainer, Tab, Table, TableBody } from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {useSelector} from 'react-redux';
import Fab from '@material-ui/core/Fab';
import {Line} from 'react-chartjs-2';
import _ from '@lodash';



const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
    }
}));







function Widget1(props)
{
    const mainThemeDark = useSelector(({fuse}) => fuse.settings.mainThemeDark);

    const classes = useStyles(props);
    const theme = useTheme();
    const [dataset, setDataset] = useState('2017');

    const data = _.merge({}, props.data);

    return (
        <ThemeProvider theme={mainThemeDark}>
            <div className={classes.root}>
                <div className="container relative p-16 sm:p-24 flex flex-row justify-between items-center">

                    <FuseAnimate delay={100}>
                        <div className="flex-col">
                            <Typography className="h2" color="textPrimary">Violations</Typography>
                            <Typography className="h5" color="textSecondary">Total VS New Violations</Typography>
                        </div>
                    </FuseAnimate>

                    <div className="flex flex-row items-center">
                        {/* {Object.keys(data.datasets).map((key) => (
                            <Button
                                key={key}
                                className="py-8 px-12"
                                size="small"
                                onClick={() => setDataset(key)}
                                disabled={key === dataset}
                            >
                                {key}
                            </Button>
                        ))} */}
                    </div>
                </div>
                <div   className="container flex justify-center h-256 pb-16">
                    {/* <PriorityTable /> */}
                    <Line
                        data={{
                            labels  : data.labels,
                            datasets: data.datasets[dataset].map(obj => ({
                                ...obj,
                                borderColor              : theme.palette.secondary.main,
                                backgroundColor          : theme.palette.secondary.main,
                                pointBackgroundColor     : theme.palette.secondary.dark,
                                pointHoverBackgroundColor: theme.palette.secondary.main,
                                pointBorderColor         : theme.palette.secondary.contrastText,
                                pointHoverBorderColor    : theme.palette.secondary.contrastText
                            }))
                        }}
                        options={data.options}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default React.memo(Widget1);
