
let count = 0
let counterSpan 
let counter = setInterval(()=>{
    ++count
    if (count === 100) {
        clearInterval(counter)
    }
    document.querySelector('.counterSpan').textContent = count
    console.log(count)
},50)