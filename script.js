const quotes = [
  "Work out your own salvation. Do not depend on others.",
  "If anything is worth doing, do it with all your heart.",
  "Three things cannot be long hidden: the sun, the moon, and the truth.",
  "The root of suffering is attachment.",
  "If you find no one to support you on the spiritual path, walk alone.",
  "All that we are is the result of what we have thought.",
  "Wear your ego like a loose fitting garment.",
  "What you are is what you have been. What you’ll be is what you do now.",
  "One moment can change a day, one day can change a life, and one life can change the world.",
  "There is no fear for one whose mind is not filled with desires.",
  "Those who cling to perceptions and views wander the world offending people.",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
  "Just as a solid rock is not shaken by the storm, even so the wise are not affected by praise or blame.",
  "Radiate boundless love towards the entire world.",
  "In separateness lies the world’s greatest misery; in compassion lies the world’s true strength.",
  "It is a man’s own mind, not his enemy or foe, that lures him to evil ways.",
  "Whatever words we utter should be chosen with care for people will hear them and be influenced by them for good or ill.",
  "There is no path to happiness. Happiness is the path.",
  "To be idle is a short road to death and to be diligent is a way of life. Foolish people are idle, wise people are diligent.",
  "The instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
  "Nothing is forever except change.",
  "If we could see the miracle of a single flower clearly, our whole life would change.",
  "The one who has conquered himself is a far greater hero than he who has defeated a thousand times a thousand men.",
  "Teach this triple truth to all: A generous heart, kind speech, and a life of service and compassion are the things which renew humanity.",
  "The way is not in the sky. The way is in the heart.",
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);

  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
