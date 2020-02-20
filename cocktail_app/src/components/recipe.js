import React, { useState } from 'react';
import List from "@material-ui/core/List";
import { ListItem } from '@material-ui/core';
import "./recipe.css"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

export default function Recipe(props) {
    const [value, setValue] = useState(0); // integer state
    const update = () => {
        console.log("UPDATE")
        setValue(value => ++value); // update the state to force render
    }

    const ingredients = () => {
        let content = []
        props.recipe.ingredients.forEach(ingredient => {
            content.push(
                <ListItem>{ingredient}</ListItem>
            )
        });
        return (content);
    }

    const stepsOfPreparation = () => {
        let content = []
        let checked = false;
        props.recipe.stepsOfPreparation.forEach(step => {
            content.push(
                <TableRow>
                    <TableCell align="right">{step}</TableCell>
                    <TableCell align="right">{
                        <Checkbox
                            checked={checked}
                            onChange={() => {
                                checked = true
                                update()
                            }}
                            value="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    }</TableCell>
                </TableRow>
            )
        });
        return (content);
    }

    console.log("recipe.props", props)
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
