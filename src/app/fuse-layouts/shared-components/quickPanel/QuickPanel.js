import React, {useEffect} from 'react';
import {Drawer, ListSubheader} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from './store/actions/index'
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: 400
    }
}));

function QuickPanel(props)
{
    const dispatch = useDispatch();
    //const data = useSelector(({quickPanel}) => quickPanel.data);
    const state = useSelector(({quickPanel}) => quickPanel.state);

    const classes = useStyles();
    //const [checked, setChecked] = useState('notifications');

    /*const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if ( currentIndex === -1 )
        {
            newChecked.push(value);
        }
        else
        {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };*/

    useEffect(() => {
        dispatch(Actions.getQuickPanelData());
    }, [dispatch]);

    return (
        <Drawer
            classes={{paper: classes.root}}
            open={state}
            anchor="right"
            onClose={ev => dispatch(Actions.toggleQuickPanel())}
        >
            <FuseScrollbars>

                <ListSubheader component="div" className="currently-scanning">Scanning Now</ListSubheader>


                <div className="quickpanel-scanning">
                  <div className="item">
                    <div className="site">
                      <a href="/apps/dashboards/analytics">website.com</a>
                      <span>101/1500</span>
                    </div>

                    <div className="address">
                      <span>http://www.website.com/project/supreme/more.com</span>
                    </div>

                    <div className="init-time">
                      <div className="left">
                        <font>Initiated</font>
                        <span>27-05-2019 20:13:36</span>
                      </div>

                      <div className="right">
                        <font>Last Analysis</font>
                        <span>27-05-2019 20:13:36</span>
                      </div>
                    </div>

                    <div className="process-cont">
                      <div className="process-bar">
                        <div className="bar-10"></div>
                      </div>
                      <span>10%</span>
                    </div>

                  </div>


                  <div className="item">
                    <div className="site">
                      <a href="/apps/dashboards/analytics">website.com</a>
                      <span>1200/1500</span>
                    </div>

                    <div className="address">
                      <span>http://www.website.com/project/supreme/more.com</span>
                    </div>

                    <div className="init-time">
                      <div className="left">
                        <font>Initiated</font>
                        <span>27-05-2019 20:13:36</span>
                      </div>

                      <div className="right">
                        <font>Last Analysis</font>
                        <span>27-05-2019 20:13:36</span>
                      </div>
                    </div>

                    <div className="process-cont">
                      <div className="process-bar">
                        <div className="bar-80"></div>
                      </div>
                      <span>80%</span>
                    </div>

                  </div>


                  <div className="item">
                    <div className="site">
                      <a href="/apps/dashboards/analytics">website.com</a>
                      <span>600/1500</span>
                    </div>

                    <div className="address">
                      <span>http://www.website.com/project/supreme/more.com</span>
                    </div>

                    <div className="init-time">
                      <div className="left">
                        <font>Initiated</font>
                        <span>27-05-2019 20:13:36</span>
                      </div>

                      <div className="right">
                        <font>Last Analysis</font>
                        <span>27-05-2019 20:13:36</span>
                      </div>
                    </div>

                    <div className="process-cont">
                      <div className="process-bar">
                        <div className="bar-40"></div>
                      </div>
                      <span>40%</span>
                    </div>

                  </div>


                  <div className="item">
                    <div className="site">
                      <a href="/apps/dashboards/analytics">website.com</a>
                      <span>1000/1500</span>
                    </div>

                    <div className="address">
                      <span>http://www.website.com/project/supreme/more.com</span>
                    </div>

                    <div className="init-time">
                      <div className="left">
                        <font>Initiated</font>
                        <span>27-05-2019 20:13:36</span>
                      </div>

                      <div className="right">
                        <font>Last Analysis</font>
                        <span>27-05-2019 20:13:36</span>
                      </div>
                    </div>

                    <div className="process-cont">
                      <div className="process-bar">
                        <div className="bar-60"></div>
                      </div>
                      <span>60%</span>
                    </div>

                  </div>



                </div>





            </FuseScrollbars>
        </Drawer>
    );
}

export default withReducer('quickPanel', reducer)(QuickPanel);
