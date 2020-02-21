import React, {useState} from "react"

function IngridientComponent(probs) {
    const [selected, setState] = useState(["Test"]);
    console.log(probs)
    setState(["TEst","Test2"])

    let createContent = () => {
        let content = []
        selected.forEach(ingridient => {
            content.push(
                <tr>
                    <td>
                        {ingridient}
                    </td>
                    <td>
                        <input type="checkbox" />
                    </td>
                </tr>
            )
        });
        return content
    }

    let addIngridient = () => {

    }

    addIngridient()
    return (
        <tbody>
            {createContent}
            <td>
                <button onClick={addIngridient}>
                    Zutat hinzufügen
                        </button>
            </td>
        </tbody>

    );
}

export default IngridientComponent;
