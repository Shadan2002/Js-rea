const myNumbs=[1,2,3,4]

// const myTotal=myNumbs.reduce(function(acc,currval){
//     console.log(`acc:$(acc) and currval:${currval}`);
//     return acc+currval

// },0)

const mytotal=myNumbs.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal);

const shoppingcart=[{
    itemName:"js course",
    price:2999
},
{
    itemName:"py",
    price:20000
},
{
    itemName:"java",
    price:40000
}
]

const pricetopay=shoppingcart.reduce((acc,item)=> item.price,0)
  console.log(pricetopay);