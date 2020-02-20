import React from 'react';
import  ListItem from "@material-ui/core/ListItem"

export default function showReceipts(allReceipts) {
    allReceipts = Object.values(allReceipts)
    console.log("props of showCocktails: ", allReceipts)
    
    let content = []

    allReceipts.forEach(receipt => {
        console.log("Receipt: ", receipt)
        let innerContent = []
        // receipt.ingridients.forEach(ingridient => {
        //     console.log(ingridient)
        //     innerContent.push( 
        //         <>
        //             <td>{ingridient.ingridient}</td>
        //             <td>{ingridient.amount}</td>
        //         </>
        //     )
        // })
        content.push(
            <>
            {/* <ListItem>
                ingridient.name
            </ListItem> */}
            </>
        )
    });

    console.log("content", content)
    return (
        <div>
            {/* <List>
                {content}
            </List> */}
        </div>
    );
} 