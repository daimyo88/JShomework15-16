var Human = {
  name   : "Damien",
  age    : "28",
  sex    : "male",
  height : "183",
  weight : "93kg"
}

function Worker(placeOfWork, salary) {
  this.placeOfWork = placeOfWork;
  this.salary      = +salary;
  this.work        = function() {
    this.salary += +salary;
  }
}
Worker.prototype = Human;

function Student(placeOfStudy, stipend) {
  this.__proto__    = Human;
  this.placeOfStudy = placeOfStudy;
  this.stipend      = stipend;
  this.watchMovies  = function() {
    this.stipend /= 2;
  }
};

var meWorker  = new Worker("job", 5000);
var meStudent = new Student("school", 1000);

console.log(meWorker.age);
console.log(meStudent.height);
