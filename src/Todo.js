import React from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase'
import {Button} from '@material-ui/core'

function Todo(props) {


    return (
        <List className="todo__list">
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
            </ListItem>
            <DeleteForeverIcon onClick={event => {
                db.collection('todos').doc(props.todo.id).delete();
                }}>Delete me</DeleteForeverIcon>
        </List>
    )
}

export default Todo
