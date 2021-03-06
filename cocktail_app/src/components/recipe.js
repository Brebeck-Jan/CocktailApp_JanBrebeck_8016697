import React, { useState } from 'react';
import List from "@material-ui/core/List";
import { ListItem } from '@material-ui/core';
import "./recipe.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { idGenerator } from "../idGenerator"

export default function Recipe(props) {
    const [state, setState] = useState({});

    const ingredients = () => {
        let content = []
        props.recipe.ingredients.forEach(ingredient => {
            content.push(
                <ListItem
                    key={idGenerator(ingredient)
                    }>
                    {ingredient}
                </ListItem>
            )
        });
        return (content);
    }

    const stepsOfPreparation = () => {
        let content = []
        let keys = {}
        props.recipe.stepsOfPreparation.forEach(step => {
            if (!keys[step]) {
                keys[step] = false
            }
            content.push(
                <TableRow key={idGenerator("TableRow")}>
                    <TableCell
                        key={idGenerator(step)}
                        align="right">
                        {step}
                    </TableCell>
                    <TableCell
                        key={idGenerator("right cell")}
                        align="right"
                    >{
                            <Checkbox
                                checked={state[step]}
                                onChange={() => {
                                    if (state[step]) {
                                        state[step] = true
                                    } else {
                                        state[step] = true
                                    }
                                }}
                                value="primary"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        }</TableCell>
                </TableRow>
            )
        });
        if (state.length !== keys.length) {
            setState(keys)
        }
        return (content);
    }

    return (
        <div className="recipe">
            <h1>{props.recipe.name}</h1>
            <h3>Zutaten</h3>
            <List>
                {ingredients()}
            </List>
            <h3>Zubereitung</h3>
            <TableContainer component={Paper}>
                <Table className={"stepTable"} aria-label="simple table">
                    <TableBody>
                        {stepsOfPreparation()}
                    </TableBody>
                </Table>
            </TableContainer>
            <button onClick={props.backButton}>back</button>
        </div >
    )
}
