class Customer {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){

        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myCustomer = new Customer("mda", "fkass");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);