import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Categories from '../Utils/Categories';
import { Typography } from '@mui/material';

export default function SwipeableTemporaryDrawer({ category, setCategory }) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 220 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            padding={'0px 10px'}
        >
            <Typography padding={'20px'}>Categories</Typography>
            <Divider />
            <List>
                {Categories.map((text) => (
                    <ListItem key={text} disablePadding onClick={() => {
                        setCategory(text.toLowerCase())
                    }}>
                        <ListItemButton sx={{ bgcolor: text.toLowerCase() === category ? '#FF0000' : "none", borderRadius: 2 }}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={"left"}>
                <Button onClick={toggleDrawer("left", true)}>{<FontAwesomeIcon icon={faBars} />}</Button>
                <SwipeableDrawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    onOpen={toggleDrawer("left", true)}
                >
                    {list("left")}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
