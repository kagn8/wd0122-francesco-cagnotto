import SuperForms from "../Modules/Form.js";

let nameOptions = {
    type: 'text', name: 'nome', classes: 'form-control', id: 'nome'
}
let nome = SuperForms.createHTMLInputElement(nameOptions)

document.querySelector('body').append(nome)