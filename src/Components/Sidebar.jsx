import React, { Component } from 'react'
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ArchiveIcon from '@material-ui/icons/Archive';
import ReminderIcon from '@material-ui/icons/Notifications';
import TrashIcon from '@material-ui/icons/Delete';
import NoteIcon from '@material-ui/icons/EmojiObjects';
import EditIcon from '@material-ui/icons/EditOutlined';

import '../scss/sidebar.scss';

class Sidebar extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
        <Drawer variant='persistent' open={this.props.openDrawer} >
          <List>
            <ListItem className="note">
              <ListItemIcon>
                  <NoteIcon/>
              </ListItemIcon>
              <ListItemText>Note</ListItemText>
            </ListItem>

            <ListItem className="note">
              <ListItemIcon>
                <ReminderIcon/>
              </ListItemIcon>
              <ListItemText>Reminder</ListItemText>
            </ListItem>
            
            <Divider/>
            <ListItem className="note">
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText>Edit Label</ListItemText>
            </ListItem>
            <Divider />

            <ListItem className="note">
              <ListItemIcon>
                <ArchiveIcon/>
              </ListItemIcon>
              <ListItemText>Archive</ListItemText>
            </ListItem>
            
            <ListItem className="note">
              <ListItemIcon>
                <TrashIcon/>
              </ListItemIcon>
              <ListItemText>Trash</ListItemText>
            </ListItem>
          </List>
        </Drawer>
    )
  }
}

export default Sidebar;