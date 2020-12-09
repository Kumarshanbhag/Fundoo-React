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
import LabelIcon from '@material-ui/icons/Label';

import '../scss/sidebar.scss';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    console.log("Label", this.props.allLabel);
    return (
      <Drawer variant='persistent' open={this.props.openDrawer} >
        <List>
          <Link to="/dashboard">
            <ListItem className="note" >
              <ListItemIcon>
                <NoteIcon />
              </ListItemIcon>
              <ListItemText>Note</ListItemText>
            </ListItem>
          </Link>

          <Link to="/reminder">
            <ListItem className="note">
              <ListItemIcon>
                <ReminderIcon />
              </ListItemIcon>
              <ListItemText>Reminder</ListItemText>
            </ListItem>
          </Link>

          <Divider />
          {this.props.allLabel.map((value, index) => {
            return (
              <ListItem className="note">
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>
                <ListItemText>{value.label}</ListItemText>
              </ListItem>
            )
          })}

          <ListItem className="note">
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText>Edit Label</ListItemText>
          </ListItem>
          <Divider />

          <Link to="/archive">
            <ListItem className="note">
              <ListItemIcon>
                <ArchiveIcon />
              </ListItemIcon>
              <ListItemText>Archive</ListItemText>
            </ListItem>
          </Link>

          <Link to="/trash">
            <ListItem className="note">
              <ListItemIcon>
                <TrashIcon />
              </ListItemIcon>
              <ListItemText>Trash</ListItemText>
            </ListItem>
          </Link>
        </List >
      </Drawer >
    )
  }
}

export default Sidebar;