
export default class View {

    constructor(tasks) {

        tasks.forEach((tasks) => {
            this.renderTask(tasks)
        })
    }

    elements = {
        input: document.querySelector('#newTask'),
        form: document.querySelector('#form'),
        tasksList: document.querySelector('#tasksList')
    }

    renderTask(taskObjects) {

        let completeClass = ''
        let checked = ''

        if (taskObjects.status === 'done') {
            completeClass = 'completed'
            checked = 'checked'
        }

        const taskHTML = `<li class="todo-item" data-id = "${taskObjects.id}">
                            <label class="todo-item-label">
                                <input class="checkbox" type="checkbox" / ${checked}>
                                <span class = '${completeClass}'>${taskObjects.text}</span>
                                <button class="btn btn-secondary btn-sm" data-delete>Удалить</button>
                            </label>
                          </li>`

        this.elements.tasksList.insertAdjacentHTML('beforeend', taskHTML)
    }

    clearInput() {
        this.elements.input.value = ''
    }

    changeStatus(taskObjects) {

        const taskElement = this.elements.tasksList.querySelector(`[data-id = "${taskObjects.id}"]`)
        const taskTextEl = taskElement.querySelector('span')

        if (taskObjects.status === 'done') {
            taskTextEl.classList.add('completed')
        } else {
            taskTextEl.classList.remove('completed')
        }
    }

    removeTask(taskObjects) {
        const taskElement = this.elements.tasksList.querySelector(`[data-id = "${taskObjects.id}"]`)
        taskElement.remove()
    }

}