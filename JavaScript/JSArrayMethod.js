

// fetch(`https://jsonplaceholder.typicode.com/todos`)
// .then(response => response.json())
//     .then(data => console.log())
// .catch(error => console.error(error))

// let changeString ;
//
// fetch(`https://dummyjson.com/products`)
// .then(response => response.json())
//     .then(data => {
//         changeString = data.products
//         // console.log("changeString", changeString)
//         changeToString();
//     })
// .catch(error => console.error(error))
//
// const changeToString = () => {
//     if (changeString !== undefined) {
//         return changeString?.map(value => {
//             // console.log(value.id.toString())
//         });
//     }
// }



let names = [
    "Liam", "Emma", "Noah", "Olivia", "Anna"
];

let names1 = [
    "hasan", "murad"
];

const tryTheJoinHOF = () => {
    // Join()
    console.log(names.join()); // Çıktı: "Liam,Emma,Noah,Olivia"
    console.log(names.join(' ')); // Çıktı: "Liam Emma Noah Olivia"
    console.log(names.join('-')); // Çıktı: "Liam-Emma-Noah-Olivia"
    console.log(names.join('.')); // Çıktı: "Liam.Emma.Noah.Olivia"
}

// tryTheJoinHOF();

const tryThePopHOF = () => {
    // pop removes last element of an array
    console.log(names.pop()) //outPut: Olivia
    console.log("names",names) //outPut: names [ 'Liam', 'Emma', 'Noah' ]

}

// tryThePopHOF()

const tryThePushHOF = () => {
    // push adds new items to the end of an array
    console.log(names.push("hasan")) //outPut: 5
    console.log("names", names) //outPut: names [ 'Liam', 'Emma', 'Noah', 'Olivia', 'hasan' ]
}

// tryThePushHOF()

const tryTheShiftHOF = () => {
    // shift emoves first elements and returns it
    console.log(names.shift()) //outPut: Liam
    console.log("names", names) //outPut: names [ 'Emma', 'Noah', 'Olivia' ]

}

// tryTheShiftHOF();

const tryTheUnShiftHOF = () => {
    console.log(names.unshift("hasan")) //outPut: 5
    console.log("names", names) //outPut: names [ 'hasan', 'Liam', 'Emma', 'Noah', 'Olivia']
}

// tryTheUnShiftHOF()

const tryTheDeleteHOF = () => {
    delete names[0]
    console.log("names", names) //outPut: names [ <1 empty item>, 'Emma', 'Noah', 'Olivia' ]

}

// tryTheDeleteHOF()

const tryTheConCatHOF = () => {
    // conCat() method joins two or more arrays
    console.log(names.concat(names1)) //outPut:[ 'Liam', 'Emma', 'Noah', 'Olivia', 'hasan', 'murad' ]
}

// tryTheConCatHOF()

const tryTheSortHOF = () => {
    // sort() sorts the elements of array and overwrites the orgnal Array
    console.log("names", names) //outPut: names [ 'Liam', 'Emma', 'Noah', 'Olivia', 'Anna' ]
    console.log(names.sort()) //outPut: [ 'Anna', 'Emma', 'Liam', 'Noah', 'Olivia' ]
}

// tryTheSortHOF()


