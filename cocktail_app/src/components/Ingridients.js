import React from "react"
import IngridientComponent from "./ingridientComponent"
import { getAllIngridients } from "../databasehandler"
import { Link } from "react-router-dom"
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./Ingredients.css"

//TODO min margin left

const AntSwitch = withStyles(theme => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);


function Ingridient(probs) {
    const [state, setState] = React.useState({
        shopping: false,

    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
        console.log("Event: ", event.target.checked)
        console.log("HandleChange State: ", state)
    };

    let allIngredients = ["Rum"]
    allIngredients = getAllIngridients()

    let selectItems = (items) => {
        setState({
            selectedItems: items
        })

    }
    let setSelected = (selectedItems) => {
        setState({ test: selectedItems })
    }

    console.log("All: ", allIngredients)
    return (
        <div className="ingredients">
            <table>
                <IngridientComponent allIngredients={allIngredients} setSelected={setSelected} />
                <tr>
                    <td>
                        Wollen Sie einkaufen gehen?
                    </td>
                    <td>
                        <Typography component="div">
                            <Grid component="label" container alignItems="center" spacing={1}>
                                <Grid item>Nein</Grid>
                                <Grid item>
                                    <AntSwitch
                                        checked={state.shopping}
                                        onChange={handleChange('shopping')}
                                        value="checkedC"
                                    />
                                </Grid>
                                <Grid item>Ja!</Grid>
                            </Grid>
                        </Typography>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link to={{ pathname: "/cocktail", selected: state.test, shopping: state.shopping }} >
                            <button type="button"
                                onClick={() => {
                                    console.log("Test; ", state.test)
                                }}
                                className="startButton"
                            >
                                Weiter zu den Cocktails
                </button>
                        </Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Ingridient;
