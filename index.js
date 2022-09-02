const nome = " Pizza de Cabalabresa"
const preco = 35.00
const confirmacaoImediata = true
const ingredientes = ["queijo","molho","calabresa"]

const nome1= " Pizza Portuguesa"
const preco1 = 38.00
const confirmacaoImediata1 = true
const ingredientes1 = ["queijo","tomate","ovo","cebola","calabresa"]

const nome2 = " Pizza de Peperoni"
const preco2 = 39.00
const confirmacaoImediata2 = false
const ingredientes2 = ["salame","queijo","pimentão"]

const nome3 = " Pizza de Camarão"
const preco3 = 49.00
const confirmacaoImediata3 = false
const ingredientes3 = ["queijo","camarão","cebola","catupiry"]

console.log ((preco + preco1 + preco2 + preco3) / 4)
const mediaItens = 40.25

const confirmacaoImediatas = confirmacaoImediata1 && confirmacaoImediata2 && confirmacaoImediata3
console.log(confirmacaoImediatas)

console.log(`NOME: ${nome.toUpperCase()}
Preço: ${preco}
Confirmação Imediata: ${confirmacaoImediata}
Ingredientes: ${ingredientes}\n
NOME: ${nome1.toUpperCase()}
Preço: ${preco1}
Confirmação Imediata: ${confirmacaoImediata1}
Ingredientes: ${ingredientes1}\n
NOME: ${nome2.toUpperCase()}
Preço: ${preco2}
Confirmação Imediata: ${confirmacaoImediata2}
Ingredientes: ${ingredientes2}\n
NOME: ${nome3.toUpperCase()}
Preço: ${preco3}
Confirmação Imediata: ${confirmacaoImediata3}
Ingredientes: ${ingredientes3}
`)