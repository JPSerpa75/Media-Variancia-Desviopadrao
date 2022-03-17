let adi = document.querySelector("input#adi")
let fin = document.querySelector("input#fin")
let lim = document.querySelector("input#lim")
let num = document.querySelector("input#txtnum")
let lista = document.querySelector("ul#txtlista")
let res = document.querySelector("p#res")
let valores = []

adi.addEventListener("click", adicionar)
fin.addEventListener("click", finalizar)
lim.addEventListener("click", limpar)

function adicionar(){
    if(num.value.length == 0){
        window.alert("Por favor, digite um numero")
    }else{
        res.innerHTML=""
        let item = document.createElement("li")
        item.innerHTML = `Valor ${Number(num.value)} adicionado`
        item.id = `${Number(num.value)}`
        lista.appendChild(item)
        valores.push(Number(num.value))
    }
    num.value=""
    num.focus()
}

function finalizar(){
    if(valores.length==0){
       window.alert("Por favor, adicione valores") 
    }else{
        
        let soma=0.0
        for(let i in valores){
            soma+=valores[i]
        }
        let media = soma/valores.length
        let somatorio=0.0
    
        res.innerHTML +=`<p>Media = ${media}</p>`
        res.innerHTML +=`<hr/>`
        res.innerHTML +=`Variância =`

        for(let i in valores){
            somatorio+=(valores[i]-media)**2
            res.innerHTML +=` (${valores[i]} - ${media})<sup>2</sup> `
            if(i<valores.length-1){
                res.innerHTML+=`+`
            }
        }

        res.innerHTML+=` / ${valores.length}`
        res.innerHTML +=`<p>Variância = ${somatorio} / ${valores.length} </p>`
        
        let variancia = somatorio/valores.length

        res.innerHTML +=`<p>Variância = ${variancia}</p>`
        res.innerHTML +=`<hr/>`
        res.innerHTML +=`<p>Desvio Padrão = \u{0221A}${variancia}</p>`
        res.innerHTML +=`<p>Desvio Padrão = ${Math.sqrt(variancia)}</p>`
    }
}

function limpar(){
    if(valores.length==0){
        window.alert("Por favor, adicione valores") 
     }else{
        for(let i in valores){
            let li = document.querySelector("#txtlista li")
            lista.removeChild(li)   
        }
        valores=[]
        res.innerHTML=""
     }
}