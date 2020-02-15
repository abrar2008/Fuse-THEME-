import React, {useEffect} from 'react';
import {Typography} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import Widget1 from './widgets/Widget1';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';
import Widget9 from './widgets/Widget9';
import Running from "./widgets/Running";
import Queue from "./widgets/Queue";
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';
import {Card} from '@material-ui/core';




function AnalyticsDashboardApp(){
    const dispatch = useDispatch();
    const widgets = useSelector(({analyticsDashboardApp}) => analyticsDashboardApp.widgets.data);

    useEffect(() => {
        dispatch(Actions.getWidgets());
    }, [dispatch]);

    if ( !widgets )
    {
        return null;
    }
    return (
        <div className="w-full">

            <Widget1 data={widgets.widget1}/>

            <FuseAnimate animation="transition.slideUpIn" delay={200}>

                <div className="flex flex-col md:flex-row sm:p-8 container">

                    <div className="flex flex-1 flex-col  min-w-0">
                        <div className=" p-16">
                        <FuseAnimate className="" delay={600}>
                            <Card className="w-full rounded-8  shadow-none border-1">
                                <Typography className="p-20 pb-20 text-28 font-500">
                                    Running
                                </Typography>
                            </Card>
                        </FuseAnimate>
                        </div>
                        <div className="flex  flex-row flex-wrap w-full  pb-32 ">

                            <Running/> 
{/* 
                            <div className="widget flex w-full sm:w-1/3 p-16">
                                <Widget2 data={widgets.widget2}/>
                            </div> */}
{/* 
                            <div className="widget flex w-full sm:w-1/3 p-16">
                                <Widget3 data={widgets.widget3}/>
                            </div>

                            <div className="widget w-full sm:w-1/3 p-16">
                                <Widget4 data={widgets.widget4}/>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex sm:flex-row pb-32">

                            <div className="widget flex w-full sm:w-1/3 p-16">
                                <Widget2 data={widgets.widget2}/>
                            </div>

                            <div className="widget flex w-full sm:w-1/3 p-16">
                                <Widget3 data={widgets.widget3}/>
                            </div>

                            <div className="widget w-full sm:w-1/3 p-16">
                                <Widget4 data={widgets.widget4}/>
                            </div>
                            */}
                        </div> 
                        <div className="p-16">       
                        <FuseAnimate delay={600}>
                            <Card className="w-full rounded-8  shadow-none border-1">
                            <Typography className="p-20 pb-20 text-28 font-500">
                                
                            </Typography>
                                    <div className="flex  flex-row w-100 flex-wrap pb-32">
                                    <Queue />
                                    </div>
                            </Card>
                        </FuseAnimate>
                        </div>

                             

                        <div className="p-16">   
                        <FuseAnimate delay={600}>
                            <Card className="w-full rounded-8  shadow-none border-1">
                            <Typography className="p-20 pb-20 text-28 font-500">
                                How many pages your users visit?
                            </Typography>
                            </Card>
                        </FuseAnimate>
                        </div>


                        <div className="widget w-full p-16 pb-32">
                            <Widget5 data={widgets.widget5}/>
                        </div>

                    </div>

                    {/* <div className="flex flex-wrap w-full md:w-320 pt-16">

                        <div className="mb-32 w-full sm:w-1/2 md:w-full">
                            <FuseAnimate delay={600}>
                                <Typography className="px-16 pb-8 text-18 font-300">
                                    What are your top devices?
                                </Typography>
                            </FuseAnimate>

                            <div className="widget w-full p-16">
                                <Widget7 data={widgets.widget7}/>
                            </div>
                        </div>

                        <div className="mb-32 w-full sm:w-1/2 md:w-full">

                            <FuseAnimate delay={600}>
                                <div className="px-16 pb-8 text-18 font-300">
                                    How are your sales?
                                </div>
                            </FuseAnimate>

                            <div className="widget w-full p-16">
                                <Widget8 data={widgets.widget8}/>
                            </div>
                        </div>

                        <div className="mb-32 w-full sm:w-1/2 md:w-full">
                            <FuseAnimate delay={600}>
                                <Typography className="px-16 pb-8 text-18 font-300 lg:pt-0">
                                    What are your top campaigns?
                                </Typography>
                            </FuseAnimate>
                            <div className="widget w-full p-16">
                                <Widget9 data={widgets.widget9}/>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </FuseAnimate> 
        </div>
    )
}

export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
