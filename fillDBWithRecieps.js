import { addReceipt } from "./databasehandler"


export default function fillDB() {
    const receipts = [
        {
            name: "Moscow Mule",
            ingredients: ["Wodka", "Limette", "Bier", "Gurke"],
            stepsOfPreparation: [
                "Glas zur Hälfte mit Eis befüllen und den Wodka dazugeben.",
                "Limettenviertel darüber ausdrücken und hinzugeben.",
                "Gurkenscheiben dazugeben",
                "Mit Bier auffüllen"
            ]

        },
        {
            name: "Casual Friday",
            ingredients: ["Wodka", "Limette", "Apfelsaft", "Gurke", "Gurkensirup", "Apfel"],
            stepsOfPreparation: [
                "In einen mit Eiswürfeln gefüllten Shaker Wodka, Gurkensirup, Limettensaft und Apfelsaft füllen",
                "Gut schütteln",
                "Mit Apfelscheiben und Gurken dekorieren"

            ]

        },
        {
            name: "Batida Brasil",
            ingredients: ["Ananas", "Batida de Côco", "Ananassaft"],
            stepsOfPreparation: [
                "Eiswürfel, Batida de Côco, Ananassaft & frische Ananas in einen Mixer geben und mixen.",
                "Ein Stück frische Ananas in Zucker wälzen und kurz flambieren",
                "Anschließend beides zusammen servieren"
            ]

        }
    ]


    const fillDatabase = () => {
        receipts.forEach(receipts => {
            addReceipt(receipts)
        })
    }

    return (
        <button
            onClick={fillDatabase}>
            befüllen
        </button>
    );
}