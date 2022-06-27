import { Checkbox, ListItemButton, ListItemIcon } from '@mui/material';
import React from 'react';
import './styles.css';


interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <ListItemButton
            className='font-link'
            style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
            onClick={() => {
                toggleTodo(todo);
            }}
            dense
        >
            <ListItemIcon>
                <Checkbox
                    checked={todo.complete}
                />
            </ListItemIcon>{' '}
            {todo.text}
        </ListItemButton>
    )
};