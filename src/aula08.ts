let dados={
    nome: "Andre Matos",
    idade: 47,
    status: "M",
    ola:()=>{console.log("samp")},
    pessoa:(n:string, i:number, s:string)=>{console.log(n, i, s)},
    velho:(bmrp:number)=>{console.log(bmrp)}
}

console.log(dados.nome, dados.idade)
console.log(typeof(dados))
dados.ola()
dados.pessoa(dados.nome, dados.idade, dados.status)
dados.velho(dados.idade)