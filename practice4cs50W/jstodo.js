document.addEventListener('DOMContentLoaded', function() {

    // get input text field and button as variables
    const newTask = document.querySelector('#new-task')
    const submit = document.querySelector('#submit')

    // submit disabled by default
    submit.disabled = true

    // check the user typed something before they can submit
    newTask.onkeyup = () => {
        if (newTask.value.length > 0 ) {
            submit.disabled = false
        }
        else {
            submit.disabled = true
        }
    }


    document.querySelector('form').onsubmit = () => {

        const li = document.createElement('li')
        li.innerHTML = newTask.value

        li.setAttribute("style", "cursor: pointer" )

        // add new task to list
        document.querySelector('#list').append(li)
        // clear the input field
        newTask.value = ''
        // makes it so if you click on a task you remove it from the list
        li.onclick = () => li.remove()

        return false
    }

})