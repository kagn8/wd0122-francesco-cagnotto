export default class SuperForms{


    //questo metodo controlla se l'utente ha settato un attributo per il campo,poi aggiunge l'attributo dato
    static setIfAttributeExists(input, obj, attr){
        if(obj[attr] != undefined){
            input[attr] = obj[attr]
        }

    }

    static createHTMLInputElement(obj){



        let input = document.createElement('input');

        this.setIfAttributeExists(input, obj, 'type')
        this.setIfAttributeExists(input, obj, 'name')
        this.setIfAttributeExists(input, obj, 'placeholder')
        this.setIfAttributeExists(input, obj, 'id')
        if(obj.classes != undefined){
            input.classList.add(obj.classes)
        }
        return input
    }
}