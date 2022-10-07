var counter = 1;
var quant = 20;
document.addEventListener('DOMContentLoaded', load);

window.onscroll = () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load();
    }
}

function load() {
    start = counter;
    end = counter + quant - 1;
    counter = end + 1;

    fetch(`newposts/${start}to${end}`)
    .then(response => response.json())
    .then(data => {
        data.posts.forEach(add_post)
    })
}

function add_post(contents) {
    const post = document.createElement('div');
    post.className = 'post'
    post.innerHTML = contents;

    document.querySelector('#content').append(post);
}

document.addEventListener('click', event => {
    const element = event.target;
    if(element.className === 'post'){
        element.style.animationPlayState = 'running'
        element.addEventListener('animationend', () =>
            element.remove()
        )
        
    }
})