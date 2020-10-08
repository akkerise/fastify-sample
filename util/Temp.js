let grades = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' }
]
let isBoy = student => student.sex === 'M'
let isGirl = student => student.sex === 'F'
let getBoys = grades => grades.filter(isBoy)
let getGirls = grades => grades.filter(isGirl)
let average = grades => grades.reduce((acc, curr) => (acc + curr.grade), 0) / grades.length
let maxGrade = grades => Math.max(...grades.map(student => student.grade))
let minGrade = grades => Math.min(...grades.map(student => student.grade))
let classroomAverage = average(grades) // 10.2
let boysAverage = average(getBoys(grades)) // 7
let girlsAverage = average(getGirls(grades)) // 13.4
let highestGrade = maxGrade(grades) // 18
let lowestGrade = minGrade(grades) // 2
let highestBoysGrade = maxGrade(getBoys(grades)) // 16
let lowestBoysGrade = minGrade(getBoys(grades)) // 2
let highestGirlsGrade = maxGrade(getGirls(grades)) // 18
let lowestGirlsGrade = minGrade(getGirls(grades)) // 9

/**
 * Closure
 * @param {*} job 
 */

function hello(greeting) {
  return (who) => {
    console.log(greeting + ' ' + who);
  }
}

hello('Hello')('Dat'); // Hello Dat
hello('Good morning')('Matianda'); // Good morning Matianda

printInterviewQuestionFor("developer")("Matianda"); //Can you tell me about latest software you have built, Matianda?
printInterviewQuestionFor(); // nothings happen
printInterviewQuestionFor("designer")(); //Can you please explain about UX design, ?
printInterviewQuestionFor("")();

/**
 * IIFE
 */
let Printer = (function () {
  // private
  let hello = "Hello, ";
  // public
  return { greeting: () => hello }
})();

let PrinterController = (function (instancePrinter) {
  // public
  return {
    init: () => {
      var text = instancePrinter.greeting() + "Matianda";
      console.log(text);
    }
  }
})(Printer);

PrinterController.init(); // will print "Hello, Matianda"