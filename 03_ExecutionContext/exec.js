debugger


sayHi()

//
const user = 'titas'
const user2 ='ben'
//

function sayHi(){// this function has it's own execution context i.e Local exec context
    const a=20
    const b=12
    console.log(`hi we are ${user} & ${user2}`)// will throw error in console. WHY?
    console.log(a+b);
    
}

console.log('program end')


