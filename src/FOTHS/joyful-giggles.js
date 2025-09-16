const jokeDisplay = document.getElementById("jokeDisplay");
const newJokeBtn = document.getElementById("newJokeBtn");

// 100 Christian-themed jokes
const christianJokes = [
  {
    setup: "Why did Noah have so many animals on the Ark?",
    punchline: "Because he wanted to keep the pair-ent alive!",
  },
  {
    setup: "Why did Jonah refuse to swim in the ocean?",
    punchline: "Because he didn’t want to be caught in a whale of a problem!",
  },
  {
    setup: "Why did Moses use a tablet?",
    punchline: "Because he couldn’t handle paper-scroll notifications!",
  },
  {
    setup: "Why did the shepherd start a band?",
    punchline: "Because he had the best *sheep harmony*!",
  },
  {
    setup: "Why did the Bible class bring string to church?",
    punchline: "To tie in all the loose ends!",
  },
  {
    setup: "Why did David bring a slingshot to the party?",
    punchline: "Because he heard Goliath was throwing shade!",
  },
  {
    setup: "Why did Adam and Eve do math every morning?",
    punchline: "They wanted to stay in *prime* condition!",
  },
  {
    setup: "Why did the pastor cross the playground?",
    punchline: "To get to the other *pew*!",
  },
  {
    setup: "Why did the angel break up with the cloud?",
    punchline: "Because it was feeling under the weather!",
  },
  {
    setup: "Why did Samson refuse to fight on Mondays?",
    punchline: "Because he didn’t want to be a weekday hero!",
  },
  {
    setup: "Why did Noah have to discipline the animals?",
    punchline: "Because some were being *a little lion*!",
  },
  {
    setup: "Why did the choir bring ladders?",
    punchline: "To hit the heavenly high notes!",
  },
  {
    setup: "Why did the Israelites never play cards?",
    punchline: "Because Moses always held the deck!",
  },
  {
    setup: "Why did the pastor go to the bakery?",
    punchline: "To get some holy rolls!",
  },
  {
    setup: "Why did the fruit go to church?",
    punchline: "Because it wanted to become a *prayer pie*!",
  },
  {
    setup: "Why did the Bible teacher go to art class?",
    punchline: "To learn how to draw inspiration!",
  },
  {
    setup: "Why did the angels get good grades?",
    punchline: "Because they were always on the *honor roll*!",
  },
  {
    setup: "Why did the candle sit next to the Bible?",
    punchline: "Because it wanted to be enlightened!",
  },
  {
    setup: "Why did the tomato turn red in church?",
    punchline: "Because it saw the salad dressing!",
  },
  {
    setup: "Why did the pastor bring a pencil to the sermon?",
    punchline: "To draw closer to God!",
  },
  {
    setup: "Why did the youth group sing in the rain?",
    punchline: "To shower their praises!",
  },
  {
    setup: "Why did the monk bring a ladder?",
    punchline: "To reach a higher state of mind!",
  },
  {
    setup: "Why did the angel go to therapy?",
    punchline: "Because it had too many emotional wings!",
  },
  {
    setup: "Why did the Bible student bring a ladder?",
    punchline: "To reach the top of the class!",
  },
  {
    setup: "Why did the hymn book look sad?",
    punchline: "Because it had too many notes to sing!",
  },
  {
    setup: "Why did the church bell ring?",
    punchline: "Because it couldn’t hold its tone!",
  },
  {
    setup: "Why did the pastor go to the gym?",
    punchline: "To strengthen his core and his faith!",
  },
  {
    setup: "Why did the choir practice on the roof?",
    punchline: "To hit the high heavens!",
  },
  {
    setup: "Why did the angel sit on a cloud?",
    punchline: "Because it was feeling a little lofty!",
  },
  {
    setup: "Why did the priest bring a ruler?",
    punchline: "To measure his congregation’s patience!",
  },
  {
    setup: "Why did the youth leader go to the zoo?",
    punchline: "To learn about Noah’s animals firsthand!",
  },
  {
    setup: "Why did the monk eat a clock?",
    punchline: "Because it was time-consuming!",
  },
  {
    setup: "Why did the angel bring a pencil?",
    punchline: "To draw closer to God!",
  },
  {
    setup: "Why did the Bible study go hiking?",
    punchline: "To climb closer to heaven!",
  },
  {
    setup: "Why did the pastor carry a notebook?",
    punchline: "To keep track of heavenly notes!",
  },
  {
    setup: "Why did the computer go to church?",
    punchline: "To get its Windows blessed!",
  },
  {
    setup: "Why did the music teacher go to jail?",
    punchline: "Because she got caught with too many sharp notes!",
  },
  {
    setup: "Why did the church start a gardening club?",
    punchline: "To grow in faith and flowers!",
  },
  {
    setup: "Why did the grape stop in the middle of the road?",
    punchline: "It ran out of juice!",
  },
  {
    setup: "Why did the angel go to school?",
    punchline: "To improve its halo-cation!",
  },
  {
    setup: "Why did the candle go to church?",
    punchline: "To lighten the mood!",
  },
  {
    setup: "Why did the tomato blush in the church?",
    punchline: "Because it saw the salad dressing!",
  },
  {
    setup: "Why did the Bible student bring a pencil?",
    punchline: "To draw inspiration!",
  },
  {
    setup: "Why did the choir bring a flashlight?",
    punchline: "To find the right note in the dark!",
  },
  {
    setup: "Why did the altar boy bring a ladder?",
    punchline: "To reach the top of the cross!",
  },
  {
    setup: "Why did the youth group go camping?",
    punchline: "To pitch their faith!",
  },
  {
    setup: "Why did the angel break up with the cloud?",
    punchline: "Because it was feeling under the weather!",
  },
  {
    setup: "Why did David bring a slingshot?",
    punchline: "To deal with Goliath’s attitude!",
  },
  {
    setup: "Why did the pastor cross the playground?",
    punchline: "To get to the other pew!",
  },
  {
    setup: "Why did the Bible class go to the bakery?",
    punchline: "To get a slice of heaven!",
  },
  {
    setup: "Why did the shepherd start a band?",
    punchline: "Because he had the best sheep harmony!",
  },
  {
    setup: "Why did Adam and Eve do math?",
    punchline: "To stay in prime condition!",
  },
  {
    setup: "Why did the Israelites wander 40 years?",
    punchline: "Because even then, men refused to ask for directions!",
  },
  {
    setup: "Why did Samson avoid Monday fights?",
    punchline: "Because he didn’t want to be a weekday hero!",
  },

  {
    setup: "Why didn’t they play cards on the Ark?",
    punchline: "Because Noah was standing on the deck!",
  },
  {
    setup: "Why did Moses cross the Red Sea?",
    punchline: "To get to the other side!",
  },
  {
    setup: "Why did the hawk sit on the church steeple?",
    punchline: "Because it was a bird of pray!",
  },
  {
    setup: "What kind of man was Boaz before he got married?",
    punchline: "Ruth-less!",
  },
  {
    setup: "Who was the fastest runner in the race?",
    punchline: "Adam… because he was first in the human race!",
  },
  {
    setup: "Why couldn’t Jonah trust the ocean?",
    punchline: "Because he knew there was something fishy about it!",
  },
  {
    setup: "Why did the Israelites wander in the desert for 40 years?",
    punchline: "Because even then men refused to ask for directions!",
  },
  {
    setup: "Why did Samson try to avoid arguments?",
    punchline: "He didn’t want to split hairs!",
  },
  {
    setup: "Why did the angel go to school?",
    punchline: "To improve his *spelling*!",
  },
  {
    setup: "Why did David fight Goliath with a slingshot?",
    punchline: "Because he didn’t have a giant ego!",
  },
  {
    setup: "Why did the church start a gardening club?",
    punchline: "To turn over a new leaf!",
  },
  {
    setup: "Why was the math book sad at Sunday school?",
    punchline: "It had too many problems!",
  },
  {
    setup: "Why did the pastor bring a ladder to church?",
    punchline: "To reach the high notes in his sermon!",
  },
  {
    setup: "Why did Noah have so many animals on the Ark?",
    punchline: "Because he wanted to keep the pair-ent alive!",
  },
  {
    setup: "Why did the fish blush?",
    punchline: "Because it saw the ocean’s bottom!",
  },
  {
    setup: "Why did the Bible study group go to the beach?",
    punchline: "To work on their *soul surfing*!",
  },
  {
    setup: "Why did the grape stop in the middle of the road?",
    punchline: "It ran out of juice!",
  },
  {
    setup: "Why did the Bible teacher go to art class?",
    punchline: "To learn about drawing inspiration!",
  },
  {
    setup: "Why did the angel bring a pencil?",
    punchline: "To draw closer to God!",
  },
  {
    setup: "Why did the monk refuse novocaine at the dentist?",
    punchline: "He wanted to transcend dental medication!",
  },
  { setup: "Why was the broom late to church?", punchline: "It overswept!" },
  {
    setup: "Why did the choir bring a ladder?",
    punchline: "To reach the high notes!",
  },
  {
    setup: "Why did the pastor go to the bank?",
    punchline: "To check his spiritual balance!",
  },
  {
    setup: "Why did the tomato turn red in church?",
    punchline: "Because it saw the salad dressing!",
  },
  {
    setup: "Why was the computer cold in church?",
    punchline: "Because it left its Windows open!",
  },
  {
    setup: "Why did the music teacher go to jail?",
    punchline: "Because she got caught with too many sharp notes!",
  },
  {
    setup: "Why did the pastor start a gardening class?",
    punchline: "He wanted to plant seeds of faith!",
  },
  {
    setup: "Why did the church buy a GPS?",
    punchline: "So the congregation wouldn’t get lost spiritually!",
  },
  {
    setup: "Why did the priest go to the gym?",
    punchline: "To strengthen his faith and his core!",
  },
  {
    setup: "Why did the Bible teacher go to the bank?",
    punchline: "To open a savings for souls!",
  },
  {
    setup: "Why did the angel go to therapy?",
    punchline: "Because he had too many emotional wings!",
  },
  {
    setup: "Why did the Sunday school kid bring a ladder?",
    punchline: "To reach the top of the class!",
  },
  {
    setup: "Why did the church start a band?",
    punchline: "To get the spirit moving!",
  },
  {
    setup: "Why did the Bible student bring a pencil?",
    punchline: "To draw inspiration!",
  },
  {
    setup: "Why did the monk eat a clock?",
    punchline: "Because it was time-consuming!",
  },
  {
    setup: "Why did the pastor bring a notebook?",
    punchline: "To keep track of heavenly notes!",
  },
  {
    setup: "Why did the choir practice on the roof?",
    punchline: "To hit the high heavens!",
  },
  {
    setup: "Why did the angel go to school?",
    punchline: "To improve his halo-cation!",
  },
  {
    setup: "Why did the youth group go camping?",
    punchline: "To pitch their faith!",
  },
  {
    setup: "Why did the Bible class go to the bakery?",
    punchline: "To get a slice of heaven!",
  },
  {
    setup: "Why did the pastor carry a pencil?",
    punchline: "To draw nearer to God!",
  },
  {
    setup: "Why did the music teacher visit the forest?",
    punchline: "To find the right pitch!",
  },
  {
    setup: "Why did the candle go to church?",
    punchline: "To lighten the mood!",
  },
  {
    setup: "Why did the altar boy bring a ladder?",
    punchline: "To reach the top of the cross!",
  },
  {
    setup: "Why did the choir bring a flashlight?",
    punchline: "To find the right note in the dark!",
  },
  {
    setup: "Why did the youth leader go to the zoo?",
    punchline: "To learn about Noah’s animals firsthand!",
  },
  {
    setup: "Why did the priest bring a ruler?",
    punchline: "To measure his congregation’s patience!",
  },
  {
    setup: "Why did the hymn book look sad?",
    punchline: "Because it had too many notes to sing!",
  },
  {
    setup: "Why did the Bible study go hiking?",
    punchline: "To climb closer to heaven!",
  },
  {
    setup: "Why did the angel sit on the cloud?",
    punchline: "Because it was a silver lining!",
  },
  {
    setup: "Why did the church bell ring?",
    punchline: "Because it couldn’t hold its tone!",
  },
  {
    setup: "Why did the pastor go to the bakery?",
    punchline: "To find some holy rolls!",
  },
  {
    setup: "Why did the youth group sing in the rain?",
    punchline: "To shower their praises!",
  },
];

// Show random joke with fade-in effect and laugh emoji
function showRandomJoke() {
  const randomIndex = Math.floor(Math.random() * christianJokes.length);
  const joke = christianJokes[randomIndex];

  // Fade-out text
  jokeDisplay.style.opacity = 0;
  setTimeout(() => {
    jokeDisplay.innerText = `${joke.setup} ... ${joke.punchline}`;
    jokeDisplay.style.opacity = 1;

    // (Removed duplicate emoji animation code block)

    // Add laughing emoji animation
    const emoji = document.createElement("span");
    emoji.className = "laugh-emoji";
    emoji.innerText = "😂";
    emoji.style.left = `${
      newJokeBtn.offsetLeft + newJokeBtn.offsetWidth / 2 - 12
    }px`;
    emoji.style.top = `${newJokeBtn.offsetTop - 20}px`;
    document.body.appendChild(emoji);

    // Remove emoji after animation
    setTimeout(() => emoji.remove(), 1000);
  }, 300);
}

newJokeBtn.addEventListener("click", showRandomJoke);

// Show one joke on page load
showRandomJoke();
