const decks = [
    {
        id: 1,
        name: "2.6 hog cycle",
        cards: ["Hog Rider", "Musketer", "skeletons", "ice spirit", "The Log", "Fireball", "Cannon", "Ice Golem"],
        elixirCost: 2.6,
        type: "cycle"
    },

    {
        id: 2,
        name: "Log Bait",
        cards: ["Goblin Barrel", "Princess", "Knight", "Inferno Tower", "Log", "Goblin Gang", "Rocket", "Ice Spirit"],
        elixirCost: 3.1,
        type: "spell-bait"
    },

    {
        id: 3,
        name: "3.0 X-bow cycle",
        cards: ["Tesla", "Archers", "Knight", "Fireball", "X-bow", "The log", "e-spirit", "skeletons"],
        elixirCost: 3.0,
        type: "Siege"
    },

    {
        id: 4,
        name: "2.9 hoggies eq",
        cards:["Royal Hogs", "cannon", "Archer Queen", "Earthquake", "Skeletons", "Ice spirit", "Royal delivery", "The log"],
        elixirCost: 2.9,
        type: "cycle"
    },

    {
        id: 5,
        name: "Giant Graveyard",
        cards: ["Witch", "Snowball", "Mini peeka", "Giant", "Graveyard", "Bowler", "Vines", "Minions"],
        elixirCost: 4.0,
        type: "Beatdown"
    },

    {
        id: 6,
        name: "2.6 hog eq",
        cards:["Hog Rider", "cannon", "Mighty miner", "Earthquake", "Skeletons", "e spirit", "barbarian barell", "The log"],
        elixirCost: 2.6,
        type: "cycle"
    },

    {
        id: 7,
        name: "minerloon",
        cards: ["musketer", "Skeletons", "Ballon", "Miner", "Ice golem", "barbarian barell", "Giant snowball", "Bomb Tower" ],
        elixirCost: 2.9,
        type: "cycle"
    },

    {
        id: 8,
        name: "splashyard",
        cards: ["Witch", "Graveyard", "Knight", "Poison", "Vines", "Ice wizard", "Goblin Hut", "Barbarian barell"],
        elixirCost: 3.6,
        type: "Control"
    },

    {
        id: 9,
        name: "Goblin Drill",
        cards: ["Giant snowball", "Tesla", "Knight", "Goblin drill", "Goblin demolisher", "Poison", "fire spirit", "Skeletons"],
        elixirCost: 2.9,
        type: "cycle"
    },

    {
        id: 10,
        name: "Rg fisherman",
        cards:["Royal giant", "royal ghost", "Hunter", "Fisherman", "Fireball", "Skeletons", "e spirit", "barbarian barell"]
    }
]

const modeDisplay = document.querySelector(".mode-display");
const userInput = document.querySelector(".user-input");
const beginQuizBtn = document.querySelector(".start-btn");


function generateRandomDeck(){
    const randInt = Math.floor(Math.random()* decks.length);
    console.log(`Random deck chosen is ${decks[randInt].name}`);
    return decks[randInt];
}

const randomDeck = generateRandomDeck();