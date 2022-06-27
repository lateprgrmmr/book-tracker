import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Container, TextField } from "@mui/material";

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');
    return (
        <Container
            className="todo-form"
        >
            <div className="todo-text">
                <TextField
                    // className="add-todo-form"
                    id="outlined-basic"
                    variant="outlined"
                    type="text"
                    fullWidth
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
            </div>
            <div className="add-button">
                <Button
                    variant="contained"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        if (text) {
                            addTodo(text);
                        }
                        setText('');
                    }}
                >Add Todo
                </Button>
            </div>
        </Container>
    )
}