import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function IngridientComponent(probs) {
    console.log("IngridientsComponent probs: ", probs)
    const [state, setState] = useState({ selected: ["Bitte Auswählen", "Bitte Auswählen"] });
    const classes = useStyles();

    let handleChange = (item, e) => {
        let index = state.selected.indexOf(item)
        state.selected[index] = e
        setState({ selected: state.selected })
        probs.setSelected(state.selected)
    }

    let createContent = () => {
        console.log("CreateContent state: ", state)
        let content = []
        let selectebalItems = []
        probs.allIngredients.map(element => {
            selectebalItems.push(<MenuItem value={element}>{element}</MenuItem>)
        })
        state.selected.forEach(item => {
            content.push(
                <>
                    <tr>
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
                    </tr>
                </>
            )
        });
        return content
    }

    let addIngridient = () => {
        state.selected.push("Bitte Auswählen");
        setState({ selected: state.selected });
    }

    return (
        <tbody>
            {createContent()}
            <td>
                <button
                    onClick={
                        addIngridient
                    }>
                    Zutat hinzufügen
                        </button>
            </td>
        </tbody>

    );
}

export default IngridientComponent;
