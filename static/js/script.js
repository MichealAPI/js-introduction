let correctOnes = 0;

let values = [
    {
        question: "Qual e' la capitale dell'Italia?",
        answer: "Roma"
    },
    {
        question: "Qual è il fiume che attraversa Roma?",
        answer: "Tevere"
    },
    {
        question: "Qual è il lago più grande d'Italia?",
        answer: "Lago di Garda"
    },
    {
        question: "Qual è il monte più alto d'Italia?",
        answer: "Monte Bianco"
    },
    {
        question: "Qual è la regione più popolosa d'Italia?",
        answer: "Lombardia"
    },
    {
        question: "Qual è la regione più grande d'Italia?",
        answer: "Sicilia"
    },
    {
        question: "Qual è il comune più popoloso d'Italia?",
        answer: "Roma"
    }
]

values.forEach(
    (obj) => {

        console.log(obj.answer)

        let answer = prompt(obj.question);

        if (answer.toLowerCase() === obj.answer.toLowerCase()) {
            console.log("Corretto!");
            correctOnes++;
        } else {
            console.log("Sbagliato!");
        }

    }
)

alert("Percentuale corrette: " + ((correctOnes * 100) / values.length).toFixed(2) + "%")