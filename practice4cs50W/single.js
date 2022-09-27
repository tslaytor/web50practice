function show(page){
    // document.querySelectorAll('div').forEach( div =>
    //     div.style.display = 'none'
    //     )
    
        document.querySelector(`#${page}`).style.display = 'block'
}

document.addEventListener('DOMContentLoaded', () =>
    document.querySelectorAll('button').forEach( button =>
        button.onclick = function(){
            show(this.dataset.page)
        })
)