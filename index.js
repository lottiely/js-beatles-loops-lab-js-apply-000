let theBeatlesPlay = (musicians, instruments) => {
  arr = []
  
  for(int i = 0; i < musicians.size; i++){
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return arr;
}
