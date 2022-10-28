
//objetos

const hospedagem = {
    suite: "Quarto Bronze",
    diaria: 500.00,
    confirmacaoImediata: true,
    imagem: "foto4.jpg",
    acomodacoes: ["Cama casal", "Ar condicionado", "Banheiro privativo", "Tv"]
}

const hospedagem1 = {
    suite: "Quarto Prata",
    diaria: 650.00,
    imagem: "foto3.jpg",
    confirmacaoImediata: true,
    acomodacoes: ["Cama casal", "Ar condicionado", "Banheiro privativo", "Tv", "Frigobar", "Secador"]
}

const hospedagem2 = {
    suite: "Quarto Ouro",
    diaria: 750.00,
    imagem: "foto1.jpg",
    confirmacaoImediata: false,
    acomodacoes: ["Cama casal extragrande", "Ar condiconado", "Banheiro privativo", "Tv", "Frigobar", "Secador", "Varanda com vista"]
}

const hospedagem3 = {
    suite: "Quarto Diamante",
    diaria: 900.00,
    imagem: "foto2.jpg",
    confirmacaoImediata: false,
    acomodacoes: ["Cama casal extragrande", "Ar condiconado", "Banheiro privativo", "Tv", "Frigobar", "Secador", "Varanda com vista", "Banheira de hidromassagem", "Lareira"]
}


const mediaItens = (hospedagem.diaria + hospedagem1.diaria + hospedagem2.diaria + hospedagem3.diaria) / 4
console.log("Media dos valores das hospedagens= " + mediaItens)


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
hospedagens.push(hospedagem)
hospedagens.push(hospedagem1)
hospedagens.push(hospedagem2)
hospedagens.push(hospedagem3)


// if (hospedagem.confirmacaoImediata === true) {
//     hospedagens.push(hospedagem)
// } else {
//    // alert('Item não foi adicionado')
// }
// // 1
// if (hospedagem1.confirmacaoImediata === true) {
//     hospedagens.push(hospedagem1)
// } else {
//    // alert("Item não foi adicionado")
// }
// // 2
// if (hospedagem2.confirmacaoImediata === true) {
//     hospedagens.push(hospedagem2)
// } else {
//    // alert("Item não foi adicionado")
// }
// // 3
// if (hospedagem3.confirmacaoImediata === true) {
//     hospedagens.push(hospedagem3)
// } else {
//    // alert("Item não foi adicionado")
// }

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
    const strObj = `<ul><li><h4><a href="http://www.pousadadoschas.com.br/blog/5-diferenciais-de-se-hospedar-em-pousada-que-voce-precisa-saber/" target="_blank">${obj.suite.toUpperCase()} </a></h4></li>
    <li>Diaria: ${obj.diaria} </li>
    <li>Confirmação Imediata: ${obj.confirmacaoImediata == true ? "Sim" : "Não"} </li>
    <li>Acomodações: ${obj.acomodacoes}</li></ul>`

    return strObj
}


function retornaObjetoPorNomeTitulo(arrayObj, nomeTitulo) {
    const retorno = []

    for (const obj of arrayObj) {
        if(obj.suite.toUpperCase().startsWith(nomeTitulo.toUpperCase())) {
            retorno.push(obj)
        }
    }

    if(retorno.length === 0) {
        alert('Não existe suite com o nome passado')
    }

    return retorno;
}



//console.log("acomodacoes com o nome Quarto Bronze: ", retornaObjetoPorNomeTitulo(hospedagens, "Quart1o Bronze"))

function pesquisarItem(event){

    let container = document.getElementById("container")
    container.innerHTML = ""

    var nomeHotel = document.getElementById("Nome").value;

    const items = retornaObjetoPorNomeTitulo(hospedagens, nomeHotel)

    for (let index = 0; index < items.length; index++) {
        const element = items[index];

        let elementoNovo = document.createElement("section")
        elementoNovo.classList.add("card")

        let elementoImg = document.createElement("img")
        elementoImg.classList.add("img-card")
        elementoImg.src = "img/" + element.imagem
        
        let referencia = document.getElementById("container")
        referencia.insertAdjacentElement("beforeend",elementoNovo)
        
        elementoNovo.insertAdjacentElement("beforeend",elementoImg)

        let elementoDiv = document.createElement("div")
        elementoDiv.classList.add("divTxt")
        elementoDiv.innerHTML = retornaStringObjeto(element)

        elementoImg.insertAdjacentElement("afterend",elementoDiv)
    }
    
}

window.onload = function carregaPaginaInicial() {
    pesquisarItem()
}