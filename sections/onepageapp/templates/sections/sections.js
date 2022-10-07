const section = ["This is Section 1", "This is Section 2", "This is Section 3"]

function showSection(input){
    document.querySelector('#content').innerHTML = section[parseInt(input) - 1]
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('button').forEach(button =>
        button.onclick = () =>
            showSection(this.dataset.section))
    })