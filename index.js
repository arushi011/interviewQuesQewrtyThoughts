//Problem Statement 1
var string = process.argv[2];
//"This world need <a href='qwertythoughts.com'>more</a> empathy, <em>less</em> jealousy <img src='smiley.jpg' />.";
var regex= /<.+?>.+?<\/.+?>|<\/.+?>|<.+?\/>/g;
var finalArr= [];
while((tag = regex.exec(string))!==null){
  string.substring(0,tag.index).trim().split(/\s/).forEach((val)=>{
    finalArr.push(val);
  });
  finalArr.push(tag[0]);
  string = string.slice(tag[0].length+tag.index,string.length).trim().replace(/\n/g, '');
  regex.exec(string);
}
string.split(/\s/).forEach((val)=>{
  finalArr.push(val);
});
console.log(finalArr);
//Problem Statement 2
var syllable = require('syllable');
var str = process.argv[3];
var characters= str.replace(/\s/g,'').split("");
var words = str.split(/\s/g);
var sentences = str.split(/\.\s[A-Z]/);
var syllableCount = 0;
console.log('characters( without spaces ):'+characters.length);
console.log('spaces:'+str.match(/\s/g).length);
console.log('words:'+words.length);
console.log('sentences:'+sentences.length);
console.log('average number of characters per word: ' + parseFloat(characters.length/words.length).toFixed(2));
words.forEach((word)=>{
  syllableCount += syllable(word);
});
console.log('average number of syllables per word: ' + parseFloat(syllableCount/words.length).toFixed(2));
console.log('average number of words per sentence: ' + parseFloat(words.length/sentences.length).toFixed(2));
