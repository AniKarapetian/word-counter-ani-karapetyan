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
    const count = text.split(/\(?[^\.\?\!]+[\.!\?]\)?/g).length;

    if (['.',',','!','.', '?'].includes(text[text.length-1])){
        return count-1;
    }
    return count;
};





const generateStatistics = ()=>{
    const text = document.getElementById('text-box').value;
    if(text){
        document.getElementById("1").innerText = countSentences(text);
document.getElementById("2").innerText = countWords(text);
document.getElementById("3").innerText = countLetters(text);
    }

}

const reset = ()=>{
        document.getElementById("1").innerText = 0;
document.getElementById("2").innerText = 0;
document.getElementById("3").innerText = 0;
document.getElementById('text-box').value = '';
document.getElementById('main').style.backgroundColor = 'white';
}