let numeros:number[]=[20,30,40]

numeros.push(50)
numeros.unshift(10)

numeros.pop()
numeros.shift()

console.log(numeros)

let numeros_ro:ReadonlyArray<number>=[100,200,300]