function forLoop(array){
  for (var i = 0; i < 25; i++){
    array.push(`I am ${i + 1} strange loop${i === 0 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(n){
  while (n > 0){
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(array){
  function maybeTrue(){
    return array.length > 0;
  }
  do {
    array.pop();
  } while (array.length = 0 || maybeTrue());
  return array
}
