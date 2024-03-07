const generateBackgroundColor = ()=>{
    const x = Math.random()*255;
     const y = Math.random()*255;
      const z = Math.random()*255;
      document.getElementById('main').style.backgroundColor = `rgb(${x},${y},${z})`;


};


const countWords = (text)=>{
    return text.split(' ').length;
};

const countLetters = (text)=>{
    const symbols = [' ', '.', ',', '?', '!'];
    return text.split('').filter((symbol)=>!symbols.includes(symbol)).length;
};

const countSentences = (text)=>{
return text.split('.').length;
};





const generateStatistics = ()=>{
    const text = document.getElementById('text-box').value;
    if(text){
        document.getElementById("1").innerText = countSentences(text);
document.getElementById("2").innerText = countWords(text);
document.getElementById("3").innerText = countLetters(text);
    }

}