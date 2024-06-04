// const arr = ['kaylin', 'ram', 'gopal', 'ankit']

// const userDetails = {
//     'kaylin': 'khanal',
//     'alisha': 'rauniyar',
//     'ayush': 'rai',
//     'gopal': 'tharu'
// }
// arr3=Object.entries(arr)

// // expected output :
// // ['kaylin khanal', 'gopal tharu']

// for (const [i, value] of arr3.entries()) {
//     console.log('%d: %s', i, value);
// }

// let newnum = arr.filter((i,value) => (i%2==0));
// console.log(newnum)

const arr = ['kaylin', 'ram', 'gopal', 'ankit'];

const userDetails = {
  'kaylin': 'khanal',
  'alisha': 'rauniyar',
  'ayush': 'rai',
  'gopal': 'tharu'
};

let lol=arr.map((item)=>{

    if(userDetails[item])
        {
            return item+''+ userDetails['kaylin']
        }
}).filter(item=>item);
  console.log(lol);