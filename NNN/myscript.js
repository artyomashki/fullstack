//1st EXERCISE

let fnum = 9;
let snum = 8;

 if (fnum > snum) {
     document.write('EX1: '+ '</br>');
     document.write(fnum);
 }
 else if (snum > fnum) {
     document.write('EX1: '+ '</br>');
     document.write(snum);
 }
else {
    document.write('EX1: '+ '</br>');
    document.write('Even Nums');
}

// End of 1st EXERCISE
document.write('</br></br></br>');

//2nd EXERCISE
let a = 5;
let b = 2;
let c = -2;

if ( (a + b + c) < 0) {
    document.write('EX2: '+ '</br>');
    document.write('-');
}
else if ( (a + b + c) > 0) {
    document.write('EX2: '+ '</br>');
    document.write('+');
}
else {
    document.write('EX2: '+ '</br>');
    document.write('ZERO');
}

//End OF 2nd EXERCISE
document.write('</br></br></br>');
//3rd EXERCISE
//לא יודע אם למדנו את זה
let arr = [2,1,8,5,12];
let newarr = arr.sort(function(a, b){return a - b});

//למקרה ולא למדנו - הדרך הארוכה
let long_arr = [2,1,8,5,12];
let long_newarr = long_arr;

for (let i = 0; i < long_newarr.length; i++) {
    for (let j = i; j < long_newarr.length; j++) {
      if (long_newarr[i] > long_newarr[j]) {
        let temp = long_newarr[i];
        long_newarr[i] = long_newarr[j];
        long_newarr[j] = temp;
      };
    };
  };
  document.write(long_newarr);

  //End OF 3rd EXERCISE
document.write('</br></br></br>');

