const test=(txt:string="Saco"):void=>{
    console.log(test)
}

const fsoma=(n:number[]):number=>{
    let s:number=0
    n.forEach((e)=>{
        s+=e
    })

    return s
}

let numer:number[]=[10,20,30,40]
console.log(fsoma(numer))

test("Andre Matos")
test("Samp")
test("bosta")
