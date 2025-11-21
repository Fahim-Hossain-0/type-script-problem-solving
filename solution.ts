const formatValue = (value: string | number | boolean) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "boolean") {
        return !value;
    }
    return value;


};

const getLength = (value: string | any[]): number => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
};


class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}


const filterByRating = (items: { title: string, rating: number }[]) => {

    return items.filter(item => item.rating >= 4)

}


const filterActiveUsers = (users: { id: number, name: string, email: string, isActive: boolean }[]) => {
    return users.filter(user => user.isActive === true)
}


interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}
const printBookDetails = (book:Book) => {
 console.log(`title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`)


}

const getUniqueValues = (array1: (number | string)[], array2: (number | string)[]): (number | string)[] => {
  const result: (number | string)[] = [];

  
  const addUnique = (value: number | string) => {
    let exists = false;
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result[result.length] = value; 
    }
  };


  for (let i = 0; i < array1.length; i++) {
    addUnique(array1[i]);
  }


  for (let i = 0; i < array2.length; i++) {
    addUnique(array2[i]);
  }

  return result;
};

const calculateTotalPrice =(products:{name:string,price:number,quantity:number, discount?:number}[])=>{
    
    let total = 0
     
    products.map(product=>{
      
    
    if(!product.discount){
        total += product.price*product.quantity
    }
    else{
        total+= product.price * product.quantity * (1 - product.discount / 100);
    }
    })
       
     return total   
   
}
