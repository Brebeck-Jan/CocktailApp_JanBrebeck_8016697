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
    const [selected, setState] = useState(["Bitte wählen Sie die"]);
    const [selected2, setState2] = useState(["Test"]);
    const classes = useStyles();
    let selectedIngridient = ""

    let handleChange = (e) => {
        console.log(e.target.value)
        selectedIngridient = "Ten"
        setState2(e.target.value)
    }

    console.log("Test")
    let createContent = () => {
        let content = []
        let options = []
        console.log("Test: ", selected)
        selected.forEach(ingridient => {
            content.push(
                <>
                    <tr>
                        <td>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selected2}
                                    onChange={handleChange
                                    }>
                                    {
                                        probs.allIngredients.map(element => {
                                            options.push(<MenuItem value={element}>{element}</MenuItem>)
                                        })
                                    }
                                    {options}
                                </Select>
                            </FormControl>
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                    </tr>
                </>
            )
        });
        return content
    }

    let addIngridient = () => {
        selected.push("Bitte auswählen!")
        setState([...selected])
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