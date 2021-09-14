// // שאלה 1 a

// // const titles = [


// //     {
// //         title: "helo",
// //         writer: "shay",
// //         date: new Date()
// //     }



// // ]

// // titles.forEach((key) => {


// //     console.log(key);



// // })



// //-----------------------------------------------//


// //שאלה1 b


// // for (const key of titles) {

// //     console.log(key);

// // }


// //-----------------------------------------------//


// // שאלה 2 


// const objects = [


//     {
//         name: "david",
//         hairColor: "black",

//     },

//     {
//         name: "yossi",
//         hairColor: "black",

//     },


//     {
//         name: "yoni",
//         hairColor: "black",

//     }




// ]



// for (const key in objects) {


//     console.log(objects[key]);


// }


// //---------------------------------------------------//


// //שאלה 3 a

// const books = [

//     {

//         name: "harry poter",
//         writer: "shay",
//         price: 2000,

//     },

//     {


//         name: "sdadas",
//         writer: "shay",
//         price: 2000,

//     },


//     {
//         name: "hdasdr",
//         writer: "shay",
//         price: 2000,

//     },

//     {
//         name: "hdsadasdsa",
//         writer: "shaasdaay",
//         price: 2000,

//     },


//     {


//         name: "hdsadasdsa",
//         writer: "shaasdaay",
//         price: 2000,

//     }


// ]


// for (const key in books) {

//     console.log(books[key]);

//     //-------------------------------//

//     //שאלה 3 b
//     console.log(books[key].writer);

// }


//----------------------------//


// שאלה 4 a

// let numbers = [12, 16, 78, 43, 46, 4, 32]
// let sum = 0;
// numbers.forEach((number, index) => {

//     sum += number


// });

// console.log("sum -", sum);




// שאלה 4 b
// let numbers = [12, 16, 78, 43, 46, 4, 32]
// let sum = 0;
// for (const number of numbers) {

//     sum += number
// }

// console.log("sum -", sum);