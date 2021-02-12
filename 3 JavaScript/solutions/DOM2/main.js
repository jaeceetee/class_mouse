const container = document.querySelector('#container')
const list = container.querySelector('ul')
const button = container.querySelector('button')



button.addEventListener('click', function () {

    let sortedList = sort(list)
    // while (list.firstChild) {
    //     list.removeChild(list.firstChild)
    // }
    while (list.firstChild) {
        list.firstChild.remove()
    }

    for (child of sortedList) {
        list.appendChild(child)
    }

})



function sort(array) {
    let arrayToSort = []
    let collection = []
    for (child of array.children) {
        arrayToSort.push(child.innerText)
    }
    arrayToSort.sort()

    for (elem of arrayToSort) {
        let li = document.createElement('li')
        li.innerText = elem
        li.addEventListener('click', () => {
            li.remove()
        })
        collection.push(li)
    }

    return collection
}


person = {
    name: 'Anthony',
    age: 28,
    funAge: function () {
        const getName = () => {
            return this.name
        }

        console.log(getName())
        return this.age
    },
    arrAge: () => {
        return this.age
    }
}