const generateBackgroundColor = () => {
  const x = Math.random() * 255;
  const y = Math.random() * 255;
  const z = Math.random() * 255;
  document.getElementById("main").style.backgroundColor = `rgb(${x},${y},${z})`;
};

const countWords = (text) => {
  return text.split(" ").length;
};

const countLetters = (text) => {
  const symbols = [" ", ".", ",", "?", "!"];
  return text.split("").filter((symbol) => !symbols.includes(symbol)).length;
};

const countSentences = (text) => {
  const count = text.split(/\(?[^\.\?\!]+[\.!\?]\)?/g).length;

  if ([".", ",", "!", ".", "?"].includes(text[text.length - 1])) {
    return count - 1;
  }
  return count;
};

const generateStatistics = () => {
  const text = document.getElementById("text-box").value;
  if (text) {
    document.getElementById("sentence-count").innerText = countSentences(text);
    document.getElementById("word-count").innerText = countWords(text);
    document.getElementById("letter-count").innerText = countLetters(text);
  }
};

const reset = () => {
  document.getElementById("sentence-count").innerText = 0;
  document.getElementById("word-count").innerText = 0;
  document.getElementById("letter-count").innerText = 0;
  document.getElementById("text-box").value = "";
  document.getElementById("main").style.backgroundColor = "white";
};
