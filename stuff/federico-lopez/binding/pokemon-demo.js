class Pokemon {
    constructor(name) {
        this.name = name
    }

    shout = function() {
        const div = document.querySelector('.pokemon')

        div.innerHTML = (this.name.toUpperCase())
    }

    choose = function() {
        const div = document.createElement('div')
        div.style.width = '500px'
        div.style.height = '500px'
        div.style.backgroundColor = 'red'
        div.style.color = 'yellow'
        div.classList.add('pokemon')
        div.style.fontSize = '50px'

        div.onclick = () => {
            this.shout()
        }

        /*
        div.onclick = () => {
            this.shout()
        }.bind(this)
        */

        const body = document.querySelector('body')
        body.appendChild(div)
    }
}

const charmander = new Pokemon('charmander')
charmander.choose()