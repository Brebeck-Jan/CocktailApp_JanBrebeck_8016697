import React from "react"

function ingridientComponent(probs) {
    console.log(probs)
    let content = []
    probs.data.forEach(ingridient => {
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
    return (
        <tbody>
            {content}

        </tbody>

    );
}

export default ingridientComponent;
