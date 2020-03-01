import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import {idGenerator} from "../idGenerator"


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function IngridientComponent(props) {
    console.log("IngridientsComponent props: ", props)
    const [state, setState] = useState({ selected: ["Bitte Auswählen"] });
    const classes = useStyles();

    let handleChange = (item, e) => {
        let index = state.selected.indexOf(item)
        state.selected[index] = e
        setState({ selected: state.selected })
        props.setSelected(state.selected)
    }

    let createContent = () => {
        console.log("CreateContent state: ", state)
        let content = []
        let selectebalItems = []
        props.allIngredients.map(element => {
            selectebalItems.push(<MenuItem key={idGenerator("MenuItem")} value={element}>{element}</MenuItem>)
            return null
        }
        )
        state.selected.forEach(item => {
            content.push(
                <tr key={item}>
                    <td>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={item}
                                onChange={(e) => {
                                    handleChange(item, e.target.value)
                                    item = e.target.value
                                }
                                }>
                                <MenuItem value="Bitte Auswählen">Bitte Auswählen</MenuItem>
                                {
                                    selectebalItems
                                }
                            </Select>
                        </FormControl>
                    </td>
                    <td>
                        <IconButton
                            aria-label="delete"
                            onClick={() => {
                                state.selected = state.selected.filter(element => element !== item)
                                setState({ selected: state.selected });
                            }
                            }>
                            <DeleteIcon />
                        </IconButton>
                    </td>
                </tr >
            )
        });
        return content
    }

    let addIngridient = () => {
        state.selected.push("Bitte Auswählen");
        setState({ selected: state.selected });
    }

    return (
        <>
            {createContent()}
            <tr key={idGenerator("Zutate hinzufügen")}>
                <td>
                    <Button
                        variant="contained"
                        className="startButton"
                        style={{ "marginLeft": "30%" }}
                        onClick={addIngridient}
                    >
                        Zutat hinzufügen
                </Button>
                </td>
            </tr>
            </>
    );
}

export default IngridientComponent;
