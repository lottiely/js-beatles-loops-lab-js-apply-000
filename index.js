let theBeatlesPlay = (musicians, instruments) => {
  arr = [];
  
  for(let i = 0; i < musicians.length; i++){
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return arr;
}

let 