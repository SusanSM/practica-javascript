import readline from 'readline';

const textoRequerimientos =
    "Bienvenido/a! Qué opción deseas ejecutar? \n1- Mostrar en formato de tabla todos los alumnos. \n2 - Mostrar por consola la cantidad de alumnos que hay en clase.\n3 - Mostrar por consola todos los nombres de los alumnos.\n4 - Eliminar el último alumno de la clase.\n5 - Eliminar un alumno aleatoriamente de la clase.\n6 - Mostrar por consola todos los datos de los alumnos que son chicas.\n7 - Mostrar por consola el número de chicos y chicas que hay en la clase.\n8 - Mostrar true o false por consola si todos los alumnos de la clase son chicas.\n9 - Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.\n10 - Añadir un alumno nuevo con los siguientes datos: \n-Nombre aleatorio. \n-Edad aleatoria entre 20 y 50 años. \n-Género aleatorio. \n-Listado de calificaciones vacío.\n11 - Mostrar por consola el nombre de la persona más joven de la clase.¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.\n12 - Mostrar por consola la edad media de todos los alumnos de la clase.\n13 - Mostrar por consola la edad media de las chicas de la clase.\n14 - Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.\n15 - Ordenar el array de alumnos alfabéticamente según su nombre."







const students = [{
    age: 32,
    examScores: [9],
    gender: 'male',
    name: 'edu'
}, {
    age: 29,
    examScores: [7],
    gender: 'female',
    name: 'silvia'
}, {
    age: 44,
    examScores: [6],
    gender: 'female',
    name: 'teodora'
}, {
    age: 35,
    examScores: [3],
    gender: 'male',
    name: 'ambrosio'
}, {
    age: 50,
    examScores: [2],
    gender: 'female',
    name: 'margarita'
}]


const available_MaleNames = ['lorenzo', 'valentín', 'isidoro', 'bonifacio', 'pantaleón', 'hilario'];
const available_FemaleNames = ['hermenegilda', 'casimira', 'matilde', 'petronila', 'gertrudis', 'guadalupe'];
const available_Genders = ['male', 'female'];




function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});




let numberFromConsole

let can_Go = false
do {
    //mostrar opciones por consola
    console.log(textoRequerimientos)
    const textFromConsole = await getNumberFromConsole()
    numberFromConsole = parseInt(textFromConsole)
    switch (numberFromConsole) {
        case 1:
            console.table(students)
            break;

        case 2:
            const total_Students = Object.entries(students);
            const total_Number = total_Students.length
            console.log(total_Number)
            break;

        case 3:
            const all_Names = students
                .map(item => item.name);
            console.log(all_Names)
            break;

        case 4:
            students.pop()
            console.log(students)
            break;

        case 5:
            function calculateRandomNumber(min, max) {
                const random_Number = Math.floor(Math.random() * (max - min + 1)) + min;
                return random_Number;
            }

            const random_Eliminate = calculateRandomNumber(0, students.length - 1)
            const definitive_Eliminate = students.filter((_, index) => index != random_Eliminate);
            console.log(definitive_Eliminate)
            break;

        case 6:
            students.forEach(object => {
                if (object.gender === 'female') {
                    console.log(object)
                }
            })
            break;

        case 7:
            const how_Many = students
                .map(item => item.gender)
                .reduce((list_Gender, genero) => {
                    if (list_Gender[genero]) {
                        list_Gender[genero] = list_Gender[genero] + 1
                    } else {
                        list_Gender[genero] = 1
                    }
                    return list_Gender;
                }, {});
            console.log(how_Many)
            break;

        case 8:
            function is_Women(students) {
                return students.every(students => students.gender === 'female');
            }

            console.log(is_Women(students))
            break;

        case 9:
            const alum_Yogurines = students.filter(std => std.age >= 20 && std.age <= 25)
                .map(item => item.name);
            console.log(alum_Yogurines)
            break;

        case 10:
            const new_Age = calculateRandomNumber(20, 50);

            function calculateRandomName(min, max) {
                const random_Name = Math.floor(Math.random() * (max - min + 1)) + min;
                return random_Name;
            }

            const index_Gender10 = calculateRandomName(0, available_Genders.length - 1)
            const new_Gender = available_Genders[index_Gender10]


            let new_Student = ''


            if (new_Gender === 'male') {
                let index_Name_10 = calculateRandomName(0, available_MaleNames.length - 1)
                new_Student = available_MaleNames[index_Name_10]

            } else {
                let index_Name_10 = calculateRandomName(0, available_FemaleNames.length - 1)
                new_Student = available_FemaleNames[index_Name_10]
            }


            students.push({
                age: new_Age,
                examScores: [],
                gender: new_Gender,
                name: new_Student
            })

            console.log(students)
            break;

        case 11:
            let students_ByAge = students.sort((actual, next) => (actual.age < next.age) ? -1 : 1)
            console.log(students_ByAge[0].name)
            break;

        case 12:
            let all_Ages = students
                .map(item => item.age)

            let sum = all_Ages.reduce((previous, current) => current += previous);
            let avg = sum / all_Ages.length

            console.log(avg)
            break;

        case 13:
            let just_Females = []

            students.forEach(object => {
                if (object.gender === 'female') {
                    just_Females.push(object)
                }
            })

            let all_AgesF = just_Females
                .map(item => item.age)

            let total_Ages = all_AgesF.reduce((previous, current) => current += previous);
            let avg_Ages = total_Ages / all_AgesF.length

            console.log(avg_Ages)
            break;

        case 14:
            students.forEach(object => {
                let new_Score = calculateRandomNumber(0, 10)
                let score_Students = object.examScores;
                score_Students.push(new_Score);

            })

            console.log(students)

            break;

        case 15:
            const students_Names = students.sort((actual, next) => (actual.name < next.name) ? -1 : 1)
                .map(item => item.name);
            console.log(students_Names)
            break;

        default:
            console.log("Has elegido mal, por ende, el juego se acabó")
            can_Go = true;

            break;

    }


    //if "una condicion se cumple" => hago un break
}
while (can_Go === false);

rl.close()



function getNumberFromConsole() {
    const promise = new Promise((resolve, reject) => {
        rl.question("¿Cuál de las 15 opciones eliges? ", (num) => {
            rl.pause();
            resolve(num);
        });
    });


    return promise;
}


const isInt = (str) => {
    const integer = parseInt(str);
    if (Number.isNaN(integer)) {
        return false;
    } else {
        return true;
    }
};