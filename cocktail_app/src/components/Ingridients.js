import React from "react"
import IngridientComponent from "./ingridientComponent"
import { getAllIngridients } from "../databasehandler"
import {Link} from "react-router-dom"

function ingridient(probs) {
    let allIngredients = getAllIngridients()
    let selectItems = () => {

    }

    console.log("All: ", allIngredients)
    return (
        <div>
            <table>
                <IngridientComponent allIngredients={allIngredients} selected={selectItems} />
                <tr>
                    <td>
                        Wollen Sie einkaufen gehen?
                    </td>
                    <td>
                        <button>Ja</button>
                    </td>
                    <td>
                        <button>Nein</button>
                    </td>

                </tr>
                <tr>
                    <td>
                        <Link to={"/cocktail"} probs={"Test"}>
                            <button className="startButton">
                                Weiter zu den Cocktails
                </button>
                        </Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default ingridient;
