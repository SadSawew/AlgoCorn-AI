import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const modules = [
    { id: 1, title: 'Module 1' },
    { id: 2, title: 'Module 2' },
    { id: 3, title: 'Module 3' },
    //... more modules
];

function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <List>
                {modules.map(module => (
                    <ListItem key={module.id} disablePadding>
                        <ListItemButton component={Link} to={`/module/${module.id}`}>
                            <ListItemText primary={module.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default Sidebar;