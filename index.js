
//objetos

const hospedagem = {
    suite: "Quarto Bronze",
    diaria: 500.00,
    confirmacaoImediata: true,
    acomodacoes: ["cama casal", "ar condicionado", "banheiro privativo", "tv."]
}

const hospedagem1 = {
    suite: "Quarto Prata",
    diaria: 650.00,
    confirmacaoImediata: true,
    acomodacoes: ["cama casal", "ar condicionado", "banheiro privativo", "tv", "frigobar", "secador."]
}

const hospedagem2 = {
    suite: "Quarto Ouro",
    diaria: 750.00,
    confirmacaoImediata: false,
    acomodacoes: ["cama casal extragrande", "ar condiconado", "banheiro privativo", "tv", "frigobar", "secador", "varanda com vista", "armario."]
}

const hospedagem3 = {
    suite: "Quarto Diamante",
    diaria: 900.00,
    confirmacaoImediata: false,
    acomodacoes: ["cama casal extragrande", "ar condiconado", "banheiro privativo", "tv", "frigobar", "secador", "varanda com vista", "armario", "banheira de hidromassagem", "lareira."]
}

console.log((hospedagem.diaria + hospedagem1.diaria + hospedagem2.diaria + hospedagem3.diaria) / 4)
const mediaItens = 700.00

const confirmacaoImediatas = hospedagem.confirmacaoImediata && hospedagem1.confirmacaoImediata && hospedagem2.confirmacaoImediata && hospedagem3.confirmacaoImediata
console.log(confirmacaoImediatas)


// transformando cada array acomodacoes em string
let strAcomodacoes = ""
for (i = 0; i < hospedagem.acomodacoes.length; i++) {
    strAcomodacoes += hospedagem.acomodacoes[i]
    if (i !== hospedagem.acomodacoes.length - 1) {
        strAcomodacoes += ", "
    }
}

let strAcomodacoes1 = ""
for (i = 0; i < hospedagem1.acomodacoes.length; i++) {
    strAcomodacoes1 += hospedagem1.acomodacoes[i]
    if (i !== hospedagem1.acomodacoes.length - 1) {
        strAcomodacoes1 += ", "
    }
}
let strAcomodacoes2 = ""
for (i = 0; i < hospedagem2.acomodacoes.length; i++) {
    strAcomodacoes2 += hospedagem2.acomodacoes[i]
    if (i !== hospedagem2.acomodacoes.length - 1) {
        strAcomodacoes2 += ", "
    }
}
let strAcomodacoes3 = ""
for (i = 0; i < hospedagem3.acomodacoes.length; i++) {
    strAcomodacoes3 += hospedagem3.acomodacoes[i]
    if (i !== hospedagem3.acomodacoes.length - 1) {
        strAcomodacoes3 += ", "
    }
}

console.log(`SUITE: ${hospedagem.suite.toUpperCase()}
Diaria: ${hospedagem.diaria}
Confirmação Imediata: ${hospedagem.confirmacaoImediata}
Acomodações: ${strAcomodacoes}\n

SUITE: ${hospedagem1.suite.toUpperCase()}
Diaria: ${hospedagem1.diaria}
Confirmação Imediata: ${hospedagem1.confirmacaoImediata}
Acomodações: ${strAcomodacoes1}\n

SUITE: ${hospedagem2.suite.toUpperCase()}
Diaria: ${hospedagem2.diaria}
Confirmação Imediata: ${hospedagem2.confirmacaoImediata}
Acomodações: ${strAcomodacoes2}\n

SUITE: ${hospedagem3.suite.toUpperCase()}
Diaria: ${hospedagem3.diaria}
Confirmação Imediata: ${hospedagem3.confirmacaoImediata}
Acomodações: ${strAcomodacoes3}
`)


//const todasHospedagens =[]
//todasHospedagens.push(hospedagem,hospedagem1,hospedagem2,hospedagem3)
//console.log(suites)

const hospedagens = []
// 0

if (hospedagem.confirmacaoImediata === true) {
    hospedagens.push(hospedagem)
} else {
   // alert('Item não foi adicionado')
}
// 1
if (hospedagem1.confirmacaoImediata === true) {
    hospedagens.push(hospedagem1)
} else {
   // alert("Item não foi adicionado")
}
// 2
if (hospedagem2.confirmacaoImediata === true) {
    hospedagens.push(hospedagem2)
} else {
   // alert("Item não foi adicionado")
}
// 3
if (hospedagem3.confirmacaoImediata === true) {
    hospedagens.push(hospedagem3)
} else {
   // alert("Item não foi adicionado")
}

console.log(hospedagens)


console.log("~~ ACOMODACOES LOOP ~~")
for (i = 0; i < hospedagens.length; i++) {
    console.log(`SUITE: ${hospedagens[i].suite.toUpperCase()}
    Diaria: ${hospedagens[i].diaria}
    Confirmação Imediata: ${hospedagens[i].confirmacaoImediata}
    Acomodações: ${hospedagens[i].acomodacoes}`
    )
}

function retornaStringObjeto(obj) {
    const strObj = `SUITE: ${obj.suite.toUpperCase()}
        Diaria: ${obj.diaria}
        Confirmação Imediata: ${obj.confirmacaoImediata}
        Acomodações: ${obj.acomodacoes}`

    return strObj
}

/*
function retornaObjetoPorNomeTitulo(arrayObj, nomeTitulo) {
    const retorno = []

    for (const obj of arrayObj) {
        if(obj.suite === nomeTitulo) {
            retorno.push(obj)
        }
    }

    if(retorno.length === 0) {
        alert('Não existe suite com o nome passado')
    }

    return retorno;
}

*/

console.log("acomodacoes com o nome Quarto Bronze: ", retornaObjetoPorNomeTitulo(hospedagens, "Quart1o Bronze"))
