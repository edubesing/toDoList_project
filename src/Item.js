class Item {
    static ultimoId = 0;

    constructor(text) {
        this.id = Item.ultimoId++;
        this.text = text;
        this.done = false;
    }
}

export default Item;