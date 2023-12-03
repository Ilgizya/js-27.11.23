class Task {
    constructor(description) {
        this.description = description
        this.completed = false
    }

    createList() {
        const li = document.createElement('li')
        li.textContent = this.description

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Выполнено'
        completeButton.classList.add('button')
        completeButton.addEventListener('click', function (e) {
            this.completed = !this.completed
            //li.style.textDecoration = 'line-through'
            li.classList.toggle('li')
        })

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить'
        deleteButton.classList.add('button')
        deleteButton.addEventListener('click', function (e) {
            li.remove()
        })

        li.append(completeButton)
        li.append(deleteButton)

        return li
    }

}

const addTaskFunction = () => {
    const taskText = newTask.value.trim()
    const task = new Task(taskText)
    tasksList.append(task.createList())
    newTask.value = ''
}

addTask.addEventListener('click', addTaskFunction)

newTask.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        //console.log(e.key);
        addTaskFunction()
    }
});
