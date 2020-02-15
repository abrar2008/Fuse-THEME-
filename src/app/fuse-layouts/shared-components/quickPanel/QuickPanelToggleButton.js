import React from 'react';
import {Icon, IconButton} from '@material-ui/core';
import * as quickPanelActions from './store/actions';
import {useDispatch} from 'react-redux';

function QuickPanelToggleButton(props)
{
    const dispatch = useDispatch();

    return (
        <IconButton className="w-54 h-34" onClick={ev => dispatch(quickPanelActions.toggleQuickPanel())}>
            Status
        </IconButton>
    );
}

QuickPanelToggleButton.defaultProps = {
    children: <Icon>format_list_bulleted</Icon>
};

export default QuickPanelToggleButton;
