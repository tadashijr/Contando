function contar() {
    let ini = document.getElementById('cini')
    let fim = document.getElementById('cfim')
    let passo = document.getElementById('cpasso')
    let res = document.getElementById('res')
    
   if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossível contar!'   
        window.alert('[ERRO] Falta o preenchimento de todos os campos!')      
   }else{
       res.innerHTML = 'Contando: '
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p<= 0 ){
           window.alert('Passo inválido! Considerando Passo com valor 1 para realizar a contagem :)')
           p=1
       }
       if (i < f){
        //Contagem cresente   
        for (let c = i; c <= f; c += p)
            res.innerHTML += `${c} \u{1F449}`    
       }else{
        //Contagem regressiva   
        for (let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }
        
       }
       res.innerHTML += `\u{1F3C1}`
   }
}