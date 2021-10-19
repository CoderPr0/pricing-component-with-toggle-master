const basicPrice = document.querySelector('.basic-price')
const proPrice = document.querySelector('.pro-price')
const masterPrice = document.querySelector('.master-price')

const toggle = document.querySelector('.timeframe-toggle')
const toggleCheck = document.getElementById('timeframe-toggle')

priceChange = () => {
    if(toggleCheck.checked == true){
        basicPrice.innerHTML = '$19.99'
        proPrice.innerHTML = '$24.99'
        masterPrice.innerHTML = '$39.99'
    }else{
        basicPrice.innerHTML = '$199.99'
        proPrice.innerHTML = '$249.99'
        masterPrice.innerHTML = '$399.99'
    }
}

toggle.addEventListener('click', ()=>{
    priceChange()
})

toggle.addEventListener('keydown', ()=>{
    if(event.keyCode == 13){
        if(toggleCheck.checked == true){
            toggleCheck.checked = false
            priceChange()
        }else{
            toggleCheck.checked = true
            priceChange()
        }
    }
})

priceChange()