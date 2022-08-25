interface department {
  modelNumber: string;
  modelName: string;
  count: string;
  
}



class juice implements department {
  modelNumber: string;
  modelName: string;
  count: string;
  constructor(modelNumber: string, modelName: string, count: string) {
      this.modelNumber = modelNumber; 
      this.modelName = modelName;
      this.count = count;
  }
  brand: string = 'juice';
  
}
class biscult implements department{
  modelNumber: string;
  modelName: string;
  count: string;
  constructor(modelNumber: string, modelName: string, count: string) {
      this.modelNumber = modelNumber; 
      this.modelName = modelName;
      this.count = count;
      this.modelNumber = 6;
  }
  
  brand: string = 'biscult';

  
}
// var juice1 = {modelNumber:'1',modelName:'7up',count:'10'};

var juice1 = new juice('1', '7up','20');

juice1.price="24";

console.log(juice1);





var juice2 = new juice('2', 'sprit','21');

var  biscult1 = new biscult('1','milk','23');
var biscult2 = new biscult('2','hidenseek','13');
var biscult3 = new biscult('3','5050','10');
delete biscult3['modelNumber'];

console.log("-----------------------");

function getKey(juice1,juice2){
  const arr = [],
  obj = Object.keys(juice1);
  for (var count in obj){
    if(juice1[obj[count]] > 5){
      arr.push(obj[count]);
    }
    
    
  }
  return juice1;
  }
  



// const juice3 = { juice1, name: { modelnumber: '3',
//  modelname:'bovonto',
//   count:12} }
// const juice4 = { available:'yes/no'}

// const juice3withjuice4=Object.assign(juice3,juice4);


// console.log(juice3);
// class ProductsComponent {
//   constructor() {
//     this.products = [{
//       modelNumber:1,
//       modeName: 'mongdol',
//       quantity: 20
//     },
//     {
//       modelNumber:2,
//       modeName: 'tangle',
//       quantity: 200
//     },
//     {
//       modelNumber:3,
//       modeName: 'kurkurae',
//       quantity: 30
//     }];

//     this.addNewProduct(5,'roll', 50 );
//     this.products1 = [{
//       modelNumber:1,
//       modeName: '7up',
//       quantity: 20
//     },
//     {
//       modelNumber:2,
//       modeName: 'sprit',
//       quantity: 200
//     },
//     {
//       modelNumber:3,
//       modeName: 'fanta',
//       quantity: 30
//     }];

//   }

//   addNewProduct(modelNumber,modelName, quantity) {
//     this.products.push({ modelNumber,modelName, quantity });
//   }
// }

// const comp = new ProductsComponent();

// console.log("---------------");

// console.log(comp.products);
// console.log(comp.products1);

// delete biscult3['modelNumber'];

// console.log("-----------------------");








//  console.log(juice2);
// var veg = {"mushrooms": 30, "peppers": 60, "meatballs": 1, "chicken": 
// 2, "olives": 4}

          


// var juice5 = [{brand:"juice", modelNumber:"2",modelName:"Sprit",count:"23"},
// {brand:"juice", modelNumber:"3",modelName:"soda",count:"21"}];

// const result = juice5.filter((obj) => {
// return obj.count > '5';

// });

// console.log(result);

//  var juice6 = {};

// Object.assign(juice5, {brand:"juice", modelNumber:"2",modelName:"Sprit",count:"23"});
// Object.assign(juice6,{brand:"juice", modelNumber:"3",modelName:"soda",count:"21"})

// juice6   = juice5.filter(function(elem) {

//   return !(elem.count >5 )});





// console.log(juice1.getEngineInfo());
console.log("Department dataset");

console.log(juice1,juice2,biscult1,biscult2);
console.log("--------------------------------");
console.log("delete");

console.log(biscult3);

console.log("-----------------------");
console.log("addional");

// console.log(juice5);
// console.log("-----------------------");
console.log("---------------------------");
console.log("threshold");



console.log("juice1")


// console.log(result);

// console.log(juice2);
// console.log(biscult1);
// console.log(biscult2);
// console.log(juice3withjuice4);

// var biscult1 = new biscult('2', 'milk','12');
// console.log(biscult.getEngineInfo());
// console.log(biscult1);

// var obj: {name: string, age:number};
// obj = {name: "X", age: 1}





