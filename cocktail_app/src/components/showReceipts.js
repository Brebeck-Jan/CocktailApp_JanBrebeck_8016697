import React from 'react';

export function showReceipts(allReceipts) {
    allReceipts = Object.values(allReceipts)
    console.log("props of showCocktails: ", allReceipts)
    let content = []

    allReceipts.forEach(receipt => {
        console.log("Receipt: ", receipt)
        let innerContent = []
        // innerContent.push(
        //     <p>
        //         {receipt.name}
        //     </p>
        // )

        receipt.ingridients.forEach(ingridient => {
            console.log(ingridient)
            innerContent.push(
                <>
                    <td>{ingridient.ingridient}</td>
                    <td>{ingridient.amount}</td>
                </>
            )
        })
        content.push(
            <>
                <tr>
                    <p>
                        {receipt.name}
                    </p>
                </tr>
                <tr>
                    {innerContent}
                </tr>
            </>
        )
    });

    console.log("content", content)
    return (
        <div>
            <table>
                {content}
            </table>
        </div>
    );
} 