const strArr: Array<String> = ['1', '2']; // Array of Strings

//Generic function
interface Lengthy{
    length:number
}
function processElems<T extends Lengthy, U extends keyof T>(first: T, second:U): T{
    return first;
}
console.log(processElems({length: 10}, 'length'));


//Generic class
class CustomStorage<T>{
    item: T;

    constructor(item: T){
        this.item = item;
    }

    getItem(): T{
        return this.item;
    }

    setItem(item: T){
        this.item = item;
    }
    
}

const storage = new CustomStorage<number>(2);