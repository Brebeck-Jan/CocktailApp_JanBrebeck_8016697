import React from "react"
import IngridientComponent from "./ingridientComponent"
import { getAllIngridients } from "../databasehandler"

function ingridient(probs) {
    let allIngridients = ["Apfel","Rum"]
    return (
        <div>
            <table>
                <IngridientComponent data={allIngridients} />
                <tr>
                    <td>
                        Wollen Sie einkaufen gehen?
                    </td>
                    <td>
                        <input type="Checkbox"/>
                    </td>
                </tr>
        </table>
        </div>
            );
        }
        
        export default ingridient;
