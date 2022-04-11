class MyArray{
    constructor(){
        this.length = 0;
        this.items = {};
    }

    get(index){
        return this.items[index];
    }

    indexOf(item){
        if(this.length === 0) return -1;

        let left = 0;
        let right = this.length - 1;

        return this.#itemExistOrNot(left, right, item);
    }

    contains(item){
        return this.indexOf(item) !== -1;
    }

    #itemExistOrNot(left, right, target){
        let mid;
        let values = this.values();

        while(left <= right) {

            mid = Math.floor(left + (right - left) / 2);

            if(values[mid] == target) return mid;

            if (values[mid] > target) {
                right -= 1;
            } else {
                left += 1;
            }
        }
        return -1
    }

    push(item){
        this.items[this.length++] = item;
    }

    pop(){
        delete this.items[this.length - 1];
        this.length--;
    }

    deleteAt(index){

        if(this.items[index] === undefined) throw new Error("undefined item in the given index");
        
        for (let j = index; j < this.length - 1; j++) {
            this.items[j] = this.items[j + 1];
        }
        
        delete this.items[this.length - 1];
        this.length--;
    }

    reverse(){
        if (this.length < 0) return;
        
        let newItems = {};
        let count = 0;
    
        for (let i = this.length - 1; i >= 0; i--) {
            newItems[count++] = this.items[i];
        }

        return Object.values(newItems);
    }

    values(){
        return Object.values(this.items)
    }

    size(){
        return this.length;
    }
}
