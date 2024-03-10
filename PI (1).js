let vendas=prompt("o numero de produtos vendidos")
let preco_1=prompt("preco da venda 1") * 1;
let preco_2=prompt("preco da venda 2") * 1;

function someFrete(){
    let soma=preco_1 + preco_2
    if (soma>=50){
            return alert("o preco total foi" + soma)

    } else {
        let frete=soma + 20
        return alert(`o valor total foi de ${soma} mais o frete foi de ${frete}`)
    }

}
someFrete();

