const alph=["A","B","C","d"]
const number=[1,2,3,4]
 //alph.push(number)
 //console.log(alph)
 //const all=alph.concat(number)
 //console.log(all)

 const all_new=[...alph,...number]
 //console.log(all_new)

 const array=[1,2,3,[4,5,6],7,[8,9,[22,33]]]

//  const another_array=array.flat()//give in single array ==() how many depth you have to do
//  console.log(another_array)
//  const another_array1=array.flat(2)//give in single array ==() how many depth you have to do 1,2,3 Infinity
//  console.log(another_array1)

console.log(Array.isArray("khan"))
console.log(Array.from("khan"))
console.log(Array.from({name:"khan"}))//interesting array
 let score1=100
 let score2=200
 let score3=300
 console.log(Array.of(score1,score2,score3))//it convert into array
