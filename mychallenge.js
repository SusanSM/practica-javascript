/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

const students = [{
        edad: 22,
        examScores: [],
        gender: 'male',
        name: 'edu'
    },
    {
        edad: 29,
        examScores: [],
        gender: 'female',
        name: 'silvia'
    },
    {
        edad: 44,
        examScores: [],
        gender: 'female',
        name: 'teodora'
    },
    {
        edad: 35,
        examScores: [],
        gender: 'male',
        name: 'ambrosio'
    },
    {
        edad: 50,
        examScores: [],
        gender: 'female',
        name: 'margarita'
    }
]




//### 1- Mostrar en formato de tabla todos los alumnos.
//console.table(students)

//### 2- Mostrar por consola la cantidad de alumnos que hay en clase


const total_students = Object.entries(students);

const total_number = total_students.length

console.log(total_number)

//### 3- Mostrar por consola todos los nombres de los alumnos.

const all_names = students
    .map(item => item.name);
console.log(all_names)

//### 4- Eliminar el último alumno de la clase.

students.pop()
console.log(students)

//### 5- Eliminar un alumno aleatoriamente de la clase.
function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

const random_eliminate = calculateRandomNumber(0, students.length - 1)
const definitive_eliminate = students.filter((_, index) => index != random_eliminate);
console.log(definitive_eliminate)

//### 6- Mostrar por consola todos los datos de los alumnos que son chicas.
students.forEach(object => {
    if (object.gender === 'female') {
        console.log(students)
    }
})


//### 7- Mostrar por consola el número de chicos y chicas que hay en la clase.

const howMany = students
    .map(item => item.gender)
    .reduce((list_gender, genero) => {
        if (list_gender[genero]) {
            list_gender[genero] = list_gender[genero] + 1
        } else {
            list_gender[genero] = 1
        }
        return list_gender;
    }, {});
console.log(howMany)

//### 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.

function isWomen(students) {
    return students.every(students => students.gender === 'female');
}

console.log(isWomen(students))


//### 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.

const alumYogurines = students.filter(std => std.edad >= 20 && std.edad <= 25)
    .map(item => item.name);
console.log(alumYogurines)

/*### 10- Añadir un alumno nuevo con los siguientes datos:
- nombre aleatorio.
- edad aleatoria entre 20 y 50 años.
- género aleatorio.
- listado de calificaciones vacío.

¡OJO!, el nombre y el género tienen que ir acordes.*/

const availableMaleNames = ['lorenzo', 'valentín', 'isidoro', 'bonifacio', 'pantaleón', 'hilario'];
const availableFemaleNames = ['hermenegilda', 'casimira', 'matilde', 'petronila', 'gertrudis', 'guadalupe'];
const availableGenders = ['male', 'female'];

const newAge = calculateRandomNumber(20, 50);

function calculateRandomName(min, max) {
    const randomName = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomName;
}

const index_genero_10 = calculateRandomName(0, availableGenders.length - 1)
const newGender = availableGenders[index_genero_10]


let newStudent = ''


if (newGender === 'male') {
    let index_nombre_10 = calculateRandomName(0, availableMaleNames.length - 1)
    newStudent = availableMaleNames[index_nombre_10]

} else {
    let index_nombre_10 = calculateRandomName(0, availableFemaleNames.length - 1)
    newStudent = availableFemaleNames[index_nombre_10]
}


students.push({
    age: newAge,
    examScores: [],
    gender: newGender,
    name: newStudent
})

console.log(students)

//### 11- Mostrar por consola el nombre de la persona más joven de la clase.

let students_by_age = students.sort((actual, next) => (actual.age < next.age) ? -1 : 1)
console.log(students_by_age[0].name)

//### 12- Mostrar por consola la edad media de todos los alumnos de la clase.




//### 13- Mostrar por consola la edad media de las chicas de la clase.




//### 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, 
//tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.





//### 15- Ordenar el array de alumnos alfabéticamente según su nombre.


let allNames = students.sort((actual, next) => (actual.name < next.name) ? -1 : 1)
    .map(item => item.name);
console.log(allNames)