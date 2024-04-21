// ปุุ่มขวาบน
const myButton = document.getElementById('myButton');
const myImage = document.getElementById('myImage');
const closeButton = document.getElementById('closeButton');

myButton.addEventListener('click', () => {
  myImage.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  myImage.style.display = 'none';
});
closeButton.addEventListener('click', () => {
  myImage.src = 'newImage.jpg';
});
// ปุ่มขวาบน
class Deck {
    constructor() {
      this.deck = [];
      this.reset(); // Add 52 cards to the deck
      this.shuffle(); // Shuffle the deck
    } // End of constructor
  
    reset() {
      this.deck = [];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      for (let suit of suits) {
        for (let value of values) {
          this.deck.push(`${value} of ${suit}`);
        }
      }
    } // End of reset()
  
    shuffle() {
      let numberOfCards = this.deck.length;
      for (let i = 0; i < numberOfCards; i++) {
        let j = Math.floor(Math.random() * numberOfCards);
        let tmp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = tmp;
      }
    } // End of shuffle()
  
    deal() {
      return this.deck.pop();
    } // End of deal()
  
    isEmpty() {
      return this.deck.length == 0;
    } // End of isEmpty()
  
    length() {
      return this.deck.length;
    } // End of length()
  } // End of Deck Class
  
  class Card {
    constructor(card) {
      this.card = card;
      const cardValues = {
        "Ace of Hearts": 1, 
        "2 of Hearts": 2, 
        "3 of Hearts": 3, 
        "4 of Hearts": 4, 
        "5 of Hearts": 5, 
        "6 of Hearts": 6, 
        "7 of Hearts": 7, 
        "8 of Hearts": 8, 
        "9 of Hearts": 9, 
        "10 of Hearts": 10, 
        "Jack of Hearts": 11, 
        "Queen of Hearts": 12, 
        "King of Hearts": 13,
        "Ace of Diamonds": 1, 
        "2 of Diamonds": 2, 
        "3 of Diamonds": 3, 
        "4 of Diamonds": 4, 
        "5 of Diamonds": 5, 
        "6 of Diamonds": 6, 
        "7 of Diamonds": 7, 
        "8 of Diamonds": 8, 
        "9 of Diamonds": 9, 
        "10 of Diamonds": 10, 
        "Jack of Diamonds": 11, 
        "Queen of Diamonds": 12, 
        "King of Diamonds": 13,
        "Ace of Clubs": 1, 
        "2 of Clubs": 2, 
        "3 of Clubs": 3, 
        "4 of Clubs": 4, 
        "5 of Clubs": 5, 
        "6 of Clubs": 6, 
        "7 of Clubs": 7, 
        "8 of Clubs": 8, 
        "9 of Clubs": 9, 
        "10 of Clubs": 10, 
        "Jack of Clubs": 11, 
        "Queen of Clubs": 12, 
        "King of Clubs": 13,
        "Ace of Spades": 1, 
        "2 of Spades": 2, 
        "3 of Spades": 3, 
        "4 of Spades": 4, 
        "5 of Spades": 5, 
        "6 of Spades": 6, 
        "7 of Spades": 7, 
        "8 of Spades": 8, 
        "9 of Spades": 9, 
        "10 of Spades": 10, 
        "Jack of Spades": 11, 
        "Queen of Spades": 12, 
        "King of Spades": 13
      };
  
      this.value = cardValues[card];
      this.suit = card.substring(card.indexOf(" of ") + 4);
      this.placeHolder = null;
      this.flipped = false;
  
      const suits = { 'Hearts': 0, 'Diamonds': 13, 'Clubs': 26, 'Spades': 39 };
      this.position = suits[this.suit] + this.value; // Position in a sorted deck
    } // End of Constructor
  
    

    displayCard(placeHolder, flipped = true) {
      this.placeHolder = document.getElementById(placeHolder);
      this.placeHolder.classList.add("card");
      this.flipped = flipped;
      if (flipped) {
        this.placeHolder.style.backgroundPosition = -150 * this.position + "px";
      } else {
        this.placeHolder.style.backgroundPosition = "0px";
      }
    } // End of displayCard
  
    checkCardValue1(cards) {
      // Array to store the values of all cards
      const cardValues = cards.map(card => card.value);
  
      // Count occurrences of each value
      const valueCounts = {};
      for (const value of cardValues) {
          valueCounts[value] = (valueCounts[value] || 0) + 1;
      }
  
      // Get unique values and sort them in descending order
      const uniqueValues = Object.keys(valueCounts).map(Number).sort((a, b) => a - b);
    
        // Check for straight
        let isStraight = false;
        for (let i = 0; i < uniqueValues.length - 4; i++) {
            if (uniqueValues[i + 1] === uniqueValues[i] + 1 &&
                uniqueValues[i + 2] === uniqueValues[i] + 2 &&
                uniqueValues[i + 3] === uniqueValues[i] + 3 &&
                uniqueValues[i + 4] === uniqueValues[i] + 4) {
                isStraight = true;
                break;
            }
        }
    
        // Check for flush
        let isFlush = false;
        const countFlush = {};
        for (const card of cards) {
            countFlush[card.suit] = (countFlush[card.suit] || 0) + 1;
            if (countFlush[card.suit] === 5) {
                isFlush = true;
                break;
            }
        }
    
        // Check for straight flush
        const isStraightFlush = isStraight && isFlush;
    
        // Check for four of a kind
        const isFourOfAKind = uniqueValues.some(value => valueCounts[value] === 4);
    
        // // Check for full house
        const isFullHouse = uniqueValues.some(value => valueCounts[value] === 3) && uniqueValues.some(value => valueCounts[value] === 2);
    
        // Check for three of a kind
        const isThreeOfAKind = uniqueValues.some(value => valueCounts[value] === 3);
    
        // Check for two pair
        const isTwoPair = uniqueValues.filter(value => valueCounts[value] === 2).length === 2;
    
        // Check for one pair
        const isOnePair = uniqueValues.some(value => valueCounts[value] === 2);

        // Determine the highest combination
        let highestCombination = '';
        let showCardHighestText = ''
        if (isStraightFlush) {
          highestCombination = 9;
          showCardHighestText = 'StraightFlush'
        } else if (isFourOfAKind) {
          highestCombination = 8;
          showCardHighestText = 'Four of A Kind'
        } else if (isFullHouse) {
          highestCombination = 7;
          showCardHighestText = 'Full House'
        } else if (isFlush) {
          highestCombination = 6;
          showCardHighestText = 'Flush'
        } else if (isStraight) {
          highestCombination = 5;
          showCardHighestText = 'Straight'
        } else if (isThreeOfAKind) {
          highestCombination = 4;
          showCardHighestText = 'Three of A Kind'
        } else if (isTwoPair) {
          highestCombination = 3;
          showCardHighestText = 'Two Pair'
        } else if (isOnePair) {
          highestCombination = 2;
          showCardHighestText = 'One Pair'
        } else {
          highestCombination = 1;
          showCardHighestText = 'High Card'
        }
    
        return {highestCombination,showCardHighestText}

      }
      checkCardValue2(cards) {
        // Array to store the values of all cards
        const cardValues = cards.map(card => card.value);
    
        // Count occurrences of each value
        const valueCounts = {};
        for (const value of cardValues) {
            valueCounts[value] = (valueCounts[value] || 0) + 1;
        }
    
        // Get unique values and sort them in descending order
        const uniqueValues = Object.keys(valueCounts).map(Number).sort((a, b) => a - b);
      
          // Check for straight
          let isStraight = false;
          for (let i = 0; i < uniqueValues.length - 4; i++) {
              if (uniqueValues[i + 1] === uniqueValues[i] + 1 &&
                  uniqueValues[i + 2] === uniqueValues[i] + 2 &&
                  uniqueValues[i + 3] === uniqueValues[i] + 3 &&
                  uniqueValues[i + 4] === uniqueValues[i] + 4) {
                  isStraight = true;
                  break;
              }
          }
    
        // Check for flush
        let isFlush = false;
        const countFlush = {};
        for (const card of cards) {
            countFlush[card.suit] = (countFlush[card.suit] || 0) + 1;
            if (countFlush[card.suit] === 5) {
                isFlush = true;
                break;
            }
        }
    
        // Check for straight flush
        const isStraightFlush = isStraight && isFlush;
    
        // Check for four of a kind
        const isFourOfAKind = uniqueValues.some(value => valueCounts[value] === 4);
    
        // Check for full house
        const isFullHouse = uniqueValues.some(value => valueCounts[value] === 3) && uniqueValues.some(value => valueCounts[value] === 2);
    
        // Check for three of a kind
        const isThreeOfAKind = uniqueValues.some(value => valueCounts[value] === 3);
    
        // Check for two pair
        const isTwoPair = uniqueValues.filter(value => valueCounts[value] === 2).length === 2;
        
        // Check for one pair
        const isOnePair = uniqueValues.some(value => valueCounts[value] === 2);

        // Determine the highest combination
        let cpuhighestCombination = '';
        let showCardcpuHighestText = ''
        if (isStraightFlush) {
          cpuhighestCombination = 9;
          showCardcpuHighestText = 'StraightFlush'
        } else if (isFourOfAKind) {
          cpuhighestCombination = 8;
          showCardcpuHighestText = 'Four of A Kind'
        } else if (isFullHouse) {
          cpuhighestCombination = 7;
          showCardcpuHighestText = 'Full House'
        } else if (isFlush) {
          cpuhighestCombination = 6;
          showCardcpuHighestText = 'Flush'
        } else if (isStraight) {
          cpuhighestCombination = 5;
          showCardcpuHighestText = 'Straight'
        } else if (isThreeOfAKind) {
          cpuhighestCombination = 4;
          showCardcpuHighestText = 'Three of A Kind'
        } else if (isTwoPair) {
          cpuhighestCombination = 3;
          showCardcpuHighestText = 'Two Pair'
        } else if (isOnePair) {
          cpuhighestCombination = 2;
          showCardcpuHighestText = 'One Pair'
        } else {
          cpuhighestCombination = 1;
          showCardcpuHighestText = 'High Card'
        }
    
        return {cpuhighestCombination,showCardcpuHighestText}

      }

      
  
    flip() {
      if (this.flipped) {
        this.placeHolder.style.backgroundPosition = "0px";
        this.flipped = false;
      } else {
        this.placeHolder.style.backgroundPosition = -150 * this.position + "px";
        this.flipped = true;
      }
    } // End of flip()
  } // End of Card class
  
  const deck = new Deck();
  let playerCard1, playerCard2,playerCard3,playerCard4;
  // let card1, card2, card3, card4, card5, playerCard1, playerCard2,playerCard3,playerCard4;
  let card1 = 2
  let card2 = 3
  let card3 = 4
  let card4 = 5
  let card5 = 6

  function deal() {
    if (deck.length() < 7) {
      deck.reset();
      deck.shuffle();
    }

    // card1 = new Card('2 of Diamonds')
    // card2 = new Card('10 of Diamonds')
    // card3 = new Card('5 of Diamonds')
    // card4 = new Card('2 of Spades')
    // card5 = new Card('3 of Spades')
    // playerCard1 = new Card('4 of Diamonds')
    // playerCard2 = new Card('6 of Diamonds')
    // playerCard3 = new Card('8 of Clubs')
    // playerCard4 = new Card('7 of Clubs')
    card1 = new Card(deck.deal());
    card2 = new Card(deck.deal());
    card3 = new Card(deck.deal());
    card4 = new Card(deck.deal());
    card5 = new Card(deck.deal());
    playerCard1 = new Card(deck.deal());
    playerCard2 = new Card(deck.deal());
    playerCard3 = new Card(deck.deal());
    playerCard4 = new Card(deck.deal());
  
    card1.displayCard("card1", false);
    card2.displayCard("card2", false);
    card3.displayCard("card3", false);
    card4.displayCard("card4", false);
    card5.displayCard("card5", false);
    playerCard1.displayCard("playerCard1", true);
    playerCard2.displayCard("playerCard2", true);
    playerCard3.displayCard("playerCard3", false);
    playerCard4.displayCard("playerCard4", false);
  
    const boardCards = [card1, card2, card3, card4, card5];
    const allCards = [...boardCards, playerCard1, playerCard2];
    const cpuCards = [...boardCards, playerCard3, playerCard4];

    const highestCombination = playerCard1.checkCardValue1(allCards);
    const cpuhighestCombination = playerCard3.checkCardValue2(cpuCards);
    console.log("Player Highest combination:", highestCombination);
    console.log("CPU Highest combination:", cpuhighestCombination);
    console.log('player got: ', highestCombination.showCardHighestText)
    console.log('cpu got: ', cpuhighestCombination.showCardcpuHighestText)
  } // End of deal()

  function Winner(){
    const boardCards = [card1, card2, card3, card4, card5];
    const allCards = [...boardCards, playerCard1, playerCard2];
    const cpuCards = [...boardCards, playerCard3, playerCard4];
    let re = document.getElementById("result")
    const highestCombination = playerCard1.checkCardValue1(allCards);
    const cpuhighestCombination = playerCard3.checkCardValue2(cpuCards);
    if (highestCombination.highestCombination > cpuhighestCombination.cpuhighestCombination){
      // re.innerHTML = "Winner is player"
      // alert("c")
      Swal.fire({
        title: "Good job!",
        text: "Winner is player!",
        icon: "success"
      });
    }
    else if(highestCombination.highestCombination === cpuhighestCombination.cpuhighestCombination){
      // re.innerHTML = "Draw"
      // alert("Draw");
      Swal.fire({
        title: "Draw",
        text: "Let's start a new game?",
        icon: "question"
      });
    }
    else{
      // re.innerHTML = "Winner is cpu"
      // alert("Winner is cpu")
      Swal.fire({
        icon: "error",
        title: "Winner is cpu!",
        text: "Fail",
      });
    }
  }
  
  function start() {
    deal();
  }
  
  function nextStep(el) {
    let re = document.getElementById("result")
    if (!card1.flipped) {
      card1.flip();
      card2.flip();
      card3.flip();
      el.innerHTML = "Reveal 4<sup>th</sup> card";
    } else if (!card4.flipped) {
      card4.flip();
      el.innerHTML = "Reveal 5<sup>th</sup> card";
    } else if (!card5.flipped) {
      card5.flip();
      el.innerHTML = "Show card"
      // playerCard3.flip();
      // playerCard4.flip();
      // el.innerHTML = "New Round";
    } 
    else if(!playerCard3.flipped){
      playerCard3.flip();
      playerCard4.flip();
      el.innerHTML = "results"
    }
    // else if (!playerCard3.flipped){
    //   el.innerHTML = "New Round"
    // }
    else {
      Winner()
      re.innerHTML = ""
      deal();
      el.innerHTML = "Reveal first 3 cards.";
    }
  } // End of nextStep()
  
  function surrnder() {
    deal();
  }
  
 