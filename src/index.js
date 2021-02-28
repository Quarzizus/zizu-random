const messages = [
    "Oscar",
    "Ana",
    "Miguel",
    "Juan",
    "Laura",
    "Jimena",
    "Norly",
    "Facundo",
    "Luz",
    "Susana"
]

const randomM = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {randomM}