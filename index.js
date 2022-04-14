const animatingEl = document.querySelectorAll(".grid-container");


const option = {
    threshold: 0.1,
}

let observer = new IntersectionObserver(function( entry, observer){
    entry.forEach(enter=>{
        if(!enter.isIntersecting){
             enter.target.classList.remove("active")
            
        }
        else{
            enter.target.classList.add("active")
        }
    })

},option)
animatingEl.forEach(animate=>{
    observer.observe(animate)
})