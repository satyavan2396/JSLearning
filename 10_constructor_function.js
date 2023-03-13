function Person(fullName,city){
    this.fullName=fullName;
    this.city=city;
    this.show =function(){
            console.log(`${this.fullName} ${this.city}`);
    }
}
Person.prototype.country="India";
const personDhoni= new Person("Ms Dhoni","Ranchi")
personDhoni.show();
console.log(personDhoni.country);
const personShubham= new Person("Shubham Gill","Mumbai")
personShubham.show();
console.log(personShubham.country);
const personAshwin= new Person("R Ashwin","Chenneai")
personAshwin.show();
console.log(personAshwin.country);



const array=[1,2,3,4,5,89]
array.push(70);
array.pop();