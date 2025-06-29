// const person: {      this is not good practice 
//     name: string;    it is better to let Typescript infer this 
//     age: number;
// } = {
// const person = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR }; //has order, CONSTRUCT


const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
//person.role.push('admin'); is a typescript object only has certain number of elements you cannot add elements 
//person.role[1] = 10;  push and modifying an array with two elements will not work in addition you cannot reassign as empty

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); //map is available on arrays but not on strings
}

console.log(Role.ADMIN)
if (person.role === Role.ADMIN) { //0 === 0
    console.log('is read only');
}