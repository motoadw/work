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
      // เพิ่มในสไลเรื่อง จัดเก็บ Array ว่าใช้ยังไงทำงานแบบไหนอธิบายเพิ่มเติม
      this.deck = [];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      // วนลูป ดอกกับค่าไผ่ น่าจะเป็น หัวข้อ recursive ไม่แน่ใจ
      for (let suit of suits) {
        for (let value of values) {
          this.deck.push(`${value} of ${suit}`);
        }
      }
    } // End of reset()
  
    // Fisher-Yates Shuffle ไม่ได้จัดเลียงแบบแผนแต่จัดแบบสุ่ม เว็ปเรียน"https://www.youtube.com/watch?v=tLxBwSL3lPQ&ab_channel=AdamKhoury"
    shuffle() {
      let numberOfCards = this.deck.length;
      for (let i = 0; i < numberOfCards; i++) {
        let j = Math.floor(Math.random() * numberOfCards);
        let tmp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = tmp;
      }
    } // End of shuffle()

    
// โค้ด shuffle() ที่คุณให้มาเป็นการสร้างฟังก์ชันที่ทำหน้าที่ในการสลับลำดับของไพ่ในสำรับไพ่ ดังนี้:
// numberOfCards จะถูกกำหนดค่าเป็นความยาวของอาร์เรย์ของสำรับไพ่.
// การวนลูปเกิดขึ้นสำหรับแต่ละไพ่ในสำรับไพ่.
// ภายในลูป, ดัชนีสุ่ม j ถูกสร้างขึ้นโดยใช้ Math.random() เพื่อแทนตำแหน่งของไพ่อื่นในสำรับไพ่.
// ไพ่ที่ตำแหน่ง i ถูกเก็บไว้ชั่วคราวใน tmp.
// ไพ่ที่ตำแหน่ง i ถูกแทนที่ด้วยไพ่ที่ตำแหน่ง j.
// ไพ่ที่ตำแหน่ง j ถูกแทนที่ด้วยไพ่ที่ถูกเก็บไว้ใน tmp, ซึ่งทำให้การสลับตำแหน่งของไพ่สองใบเกิดขึ้น.
// การวนลูปดำเนินต่อไปจนกระทั่งไพ่ทั้งหมดในสำรับไพ่ถูกสลับลำดับเรียบร้อย.
// ฟังก์ชันนี้ทำให้สำรับไพ่ถูกสลับลำดับโดยการสลับตำแหน่งของไพ่อย่างสุ่มหลายครั้ง ซึ่งทำให้ได้ลำดับที่สุ่มมาใหม่ของไพ่แต่ละใบในสำรับไพ่แล้วละเอียด.

  
    deal() {
      return this.deck.pop();
    } // End of deal()
  
  
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
//       indexOf(" of ") จะคืนค่าดัชนี (index) ของตำแหน่งแรกของ " of " ในข้อความของบัตร
// substring() จะตัดข้อความของบัตรเริ่มต้นจากตำแหน่งที่ " of " จบ และเลื่อนไปอีก 4 ตำแหน่ง (จำนวนตัวอักษรใน " of ")
// นั่นหมายความว่า this.suit จะถูกกำหนดค่าเป็นสัญลักษณ์ของไพ่ (เช่น "Hearts", "Diamonds" เป็นต้น) โดยอิงจากชื่อของบัตรที่รับเข้ามา
    



      this.placeHolder = null;
      this.flipped = false;
  



      const suits = { 'Hearts': 0, 'Diamonds': 13, 'Clubs': 26, 'Spades': 39 };
      this.position = suits[this.suit] + this.value; // Position in a sorted deck

//       suits เป็นอ็อบเจกต์ที่แมปชื่อของสัญลักษณ์ไพ่กับตำแหน่งของสัญลักษณ์นั้นในสำรับที่ถูกเรียงลำดับ
// this.position ถูกกำหนดค่าโดยการรวมค่าของสัญลักษณ์ของไพ่ (this.suit) และค่าตัวเลขของไพ่ (this.value) เพื่อให้ได้ตำแหน่งที่ตรงกับบัตรนั้นในสำรับที่เรียงลำดับแล้ว
// ตัวอย่างเช่น หากบัตรเป็น "3 of Diamonds" (this.suit คือ "Diamonds" และ this.value คือ 3) คำนวณ this.position จะได้:

// suits['Diamonds'] = 13
// this.value = 3
// this.position = 13 + 3 = 16
// ดังนั้น ตำแหน่งของบัตร "3 of Diamonds" ในสำรับที่ถูกเรียงลำดับแล้วคือที่ตำแหน่งที่ 16 ในสำรับนั้น




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
  





// ก้อปสร้าง array ใหม่มาเพื่อใช้ในการเช็คค่า
    checkCardValue1(cards) {
      // Array to store the values of all cards
      const cardValues = cards.map(card => card.value);
        
  // map() จะถูกใช้กับอาร์เรย์ cards เพื่อสร้างอาร์เรย์ใหม่ cardValues.
  // ในการเรียกใช้ map() นี้, ฟังก์ชันที่ให้กำหนดจะถูกเรียกใช้สำหรับแต่ละสมาชิกใน cards.
  // ฟังก์ชันนี้จะรับบัตรแต่ละใบ (card) เข้ามาและส่งคืนค่า value ของบัตรนั้น.
  // ดังนั้น, cardValues จะเป็นอาร์เรย์ที่ประกอบด้วยค่า value ของบัตรทั้งหมดในอาร์เรย์ cards.

  


// ไม่เข้าใจ
      // Count occurrences of each value
      const valueCounts = {};
      for (const value of cardValues) {
          valueCounts[value] = (valueCounts[value] || 0) + 1;
      }
//       การทำงานของโค้ดนี้คือ:

// สร้างอ็อบเจกต์ valueCounts ซึ่งจะใช้ในการเก็บจำนวนครั้งที่แต่ละค่า value ปรากฏในอาร์เรย์ cardValues.
// ในการวนลูป for...of นี้, แต่ละค่า value ในอาร์เรย์ cardValues ถูกดึงออกมา.
// ในแต่ละรอบของลูป, โค้ดจะตรวจสอบว่า valueCounts มี key value หรือไม่:
// หากมี จะเพิ่มจำนวนที่ปรากฏของ value นั้นขึ้นอีก 1.
// หากไม่มี จะกำหนด valueCounts[value] เป็น 1 เพื่อระบุว่า value นั้นปรากฏครั้งแรกในอาร์เรย์ cardValues.
// ดังนั้น, หลังจากการทำงานของลูปนี้เสร็จสิ้น, valueCounts จะเป็นอ็อบเจกต์ที่บอกถึงจำนวนครั้งที่แต่ละค่า value ปรากฏในอาร์เรย์ cardValues
  







// เลียงค่าไผ่
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
        // หัวข้อ revursive 
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
  // let playerCard1, playerCard2,playerCard3,playerCard4;
  let card1, card2, card3, card4, card5, playerCard1, playerCard2,playerCard3,playerCard4;


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
    // console.log("Player Highest combination:", highestCombination);
    // console.log("CPU Highest combination:", cpuhighestCombination);
    
  } // End of deal()

  function Winner(){
    const boardCards = [card1, card2, card3, card4, card5];
    const allCards = [...boardCards, playerCard1, playerCard2];
    const cpuCards = [...boardCards, playerCard3, playerCard4];
    // let re = document.getElementById("result")
    const highestCombination = playerCard1.checkCardValue1(allCards);
    const cpuhighestCombination = playerCard3.checkCardValue2(cpuCards);
    console.log("Player Highest combination:", highestCombination);
    console.log("CPU Highest combination:", cpuhighestCombination);
    console.log('player got: ', highestCombination.showCardHighestText);
    console.log('cpu got: ', cpuhighestCombination.showCardcpuHighestText);
    if (highestCombination.highestCombination > cpuhighestCombination.cpuhighestCombination){
      // re.innerHTML = "Winner is player"
      // alert("c")
      correct.play()
      Swal.fire({
        title: "Good job!",
        text: "Winner is player!",
        icon: "success"
      });
    }
    else if(highestCombination.highestCombination === cpuhighestCombination.cpuhighestCombination){
      // re.innerHTML = "Draw"
      // alert("Draw");
      drawSound.play()
      
      Swal.fire({
        title: "Draw",
        text: "Let's start a new game?",
        icon: "question"
      });
    }
    else{
      // re.innerHTML = "Winner is cpu"
      // alert("Winner is cpu")
      wrong.play()
      Swal.fire({
        icon: "error",
        title: "Winner is cpu!",
        text: "Fail",
      });
    }
  }
  
  var cardSound = document.getElementById("cardSound");
  var correct = document.getElementById("correctSound");
  var wrong = document.getElementById("wrongSound");
  var drawSound = document.getElementById("quiz");

  function start() {
    deal();
    cardSound.play()
  }
  
  function nextStep(el) {
    // let re = document.getElementById("result")
    if (!card1.flipped) {
      cardSound.play()
      card1.flip();
      card2.flip();
      card3.flip();
      el.innerHTML = "Reveal 4<sup>th</sup> card";
    } else if (!card4.flipped) {
      cardSound.play()
      card4.flip();
      el.innerHTML = "Reveal 5<sup>th</sup> card";
    } else if (!card5.flipped) {
      cardSound.play()
      card5.flip();
      el.innerHTML = "Show card"
      // playerCard3.flip();
      // playerCard4.flip();
      // el.innerHTML = "New Round";
    } 
    else if(!playerCard3.flipped){
      cardSound.play()
      playerCard3.flip();
      playerCard4.flip();
      el.innerHTML = "results"
    }
    // else if (!playerCard3.flipped){
    //   el.innerHTML = "New Round"
    // }
    else {
      Winner()
      deal();
      el.innerHTML = "Reveal first 3 cards.";
    }
  } // End of nextStep()
  

  // ********************** bg music ********************************
  function toggleSound() {
    if (isMuted) {
      audio.play(); // เริ่มเล่นเพลง
      audio.volume = 0.1; // เปิดเสียง
      document.getElementById('da2').innerText = "🔊";
    } else {
      audio.pause(); // หยุดเล่นเพลง
      audio.volume = 0; // ปิดเสียง
      document.getElementById('da2').innerText = "🔇";
    }
    isMuted = !isMuted; // เปลี่ยนสถานะการเปิด-ปิดเสียง
  }
  
  document.getElementById('toggleButton').addEventListener('click', toggleSound);
  
  var audio = document.getElementById('backgroundMusic');
  var isMuted = false;