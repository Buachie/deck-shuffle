var deck = new Array();
var suits = ["spades", "hearts", "clubs", "diamonds"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function createDeck() {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      var card = {
        Value: values[Math.random() * Math.ceil(j)],
        Suit: suits[Math.random() * Math.ceil(i)]
      };
      deck.push(card);
    }
  }
  return deck;
}

function renderDeck() {
  document.getElementById("cards").innerHTML = "";
  for (let y = 0; y < deck.length; y++) {
    let card = document.createElement("div");
    let value = document.createElement("div");
    let suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit" + deck[y].Suit; //Example: class="suitspades"

    value.innerHTML = deck[y].Value;
    card.appendChild(value);
    card.appendChild(suit);

    document.getElementById("cards").appendChild(card);
  }
}

function randomizer() {
  rand = Math.random(52);
}
createDeck();
renderDeck();
