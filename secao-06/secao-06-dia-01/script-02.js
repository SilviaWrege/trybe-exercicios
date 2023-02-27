const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// //   Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

let newKey = 'turno';
let turno = 'noturno';

const adicionaPropriedade = (objeto,NovaPropriedade,valor) => {
    objeto[NovaPropriedade] = valor
};

 adicionaPropriedade(lesson2,newKey,turno);
    console.log(lesson2);

// // //  Crie uma função para listar as keys de um objeto (as  chaves de um determinado objeto). Essa função deve receber um objeto como parâmetro.

const listKeys = (objeto) => Object.keys(objeto);

console.log(listKeys(lesson1));
console.log(listKeys(lesson2));
console.log(listKeys(lesson3));

// // // Crie uma função para mostrar o tamanho de um objeto.

 const tamanhoObjeto = (objeto) => Object.keys(objeto).length;

console.log(tamanhoObjeto(lesson1));
console.log(tamanhoObjeto(lesson2));
console.log(tamanhoObjeto(lesson3));

// // // Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valoresObjeto = (objeto) => Object.values(objeto);
console.log(valoresObjeto(lesson1));
console.log(valoresObjeto(lesson2));
console.log(valoresObjeto(lesson3));

// // Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 

const allLessons = Object.assign({}, {lesson1,lesson2,lesson3});
console.log(allLessons);

// Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática;

 const assistiuAulaMat = (allLessons) => {
let total = 0;
const keys = Object.keys(allLessons);
for(index in keys){
  if(allLessons[keys[index]].materia === 'Matemática'){
    total += allLessons[keys[index]].numeroEstudantes;
  }
}
return total;
 }
 console.log(assistiuAulaMat(allLessons));

//  Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

// criar uma função que retorne um objeto
// este objeto que vai retornar tem que trazer o relatorio dos professores, neste relatório tem que constar qual professor (nome dele) e qual materia eles deram e o total de alunos que assistiram a materia do professor ou da professora

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const values = Object.values(obj);
  for (index in values) {
    if (values[index].professor === name) {
      allLessons.push(values[index].materia)
      allStudent += values[index].numeroEstudantes;
    }
  }
  return { aulas: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
