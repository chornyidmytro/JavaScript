// intro training
/*var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);*/

//training boulean
/*var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = "Teacher";
isMarried = false;
console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

age = "twenty eight";
job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);*/

// training precedence
/*var yearJohn, yaerMark, now;
now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yaerMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

console.log(typeof johnOlder);
console.log(typeof ageJohn);

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageMark + ageJohn) / 2;
console.log(average);

var x, y;
x = (3 + 5) * 4 - 6;
console.log(x);

x *= 2;
console.log(x);*/

// challenge No 1
/*var heightJohn = 1.8;
var massJohn = 75;
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

var heightMark = 1.75;
var massMark = 62;
var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

if (bmiMark > bmiJohn) {
  console.log("Mark's BMI higher than John's");
} else {
  console.log("John's BMI higher than Mark's");
}

var bmiCompare = bmiMark > bmiJohn;
console.log(" Is Mark's BMI higher than John's? " + bmiCompare);*/

// if & else Statements

/*var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married! ");
} else {
  console.log(firstName + " will hopefully marry soon :) ");
}*/

//Bolean logic
/*var firstName = "John";
var age = 20;

if (age < 13) {
  console.log(firstName + " is a boy ");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager ");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man ");
} else {
  console.log(firstName + " is a man ");
}*/

//Ternary operators

/*var name = "Alex";
var ageAlex = 20;

ageAlex >= 18
  ? console.log(name + " drink's beer ")
  : console.log(name + " drink's juice ");

var drink = ageAlex >= 18 ? "beer" : "juice";
console.log(drink);

//Switch statement
var job = "teacher";
switch (job) {
  case "teacher":
    console.log(name + " teaches kids how to code ");
    break;
  case "driver":
    console.log(name + " drives uber in Lisbon ");
    break;
  default:
    console.log(name + " does smth else ");
}

var firstGameJohn = 89;
var secondGameJohn = 120;
var thirdGameJohn = 103;
var averageScoreJohn = (thirdGameJohn + secondGameJohn + firstGameJohn) / 3;
console.log(averageScoreJohn);

var firstGameMike = 116;
var secondGameMike = 94;
var thirdGameMike = 123;
var averageScoreMike = (thirdGameMike + secondGameMike + firstGameMike) / 3;
console.log(averageScoreMike);

var firstGameMary = 97;
var secondGameMary = 134;
var thirdGameMary = 105;
var averageScoreMary = (firstGameMary + secondGameMary + thirdGameMary) / 3;
console.log(averageScoreMary);

if (
  averageScoreMike > averageScoreJohn &&
  averageScoreMike > averageScoreMary
) {
  console.log(
    " Mike's team wins ",
    averageScoreMike,
    averageScoreJohn,
    averageScoreMary
  );
} else if (
  averageScoreJohn > averageScoreMike &&
  averageScoreJohn > averageScoreMary
) {
  console.log(
    " Jonh's team wins ",
    averageScoreJohn,
    averageScoreMike,
    averageScoreMary
  );
} else if (
  averageScoreMary > averageScoreMike &&
  averageScoreMary > averageScoreJohn
) {
  console.log(
    " Mary's team wins ",
    averageScoreMary,
    averageScoreMike,
    averageScoreJohn
  );
} else {
  console.log(" Draw ", averageScoreJohn, averageScoreMike);
}*/

//Challenge No 3
/*function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill > 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return bill * percentage;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];
console.log(tips);

var totalBills = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(totalBills);*/

//Challenge No 4
/*var john = {
  firstName: "John",
  height: 1.8,
  mass: 75,
  calcBmi: function () {
    this.Bmi = this.mass / (this.height * this.height);
    return this.Bmi;
  },
};

var mark = {
  firstName: "Mark",
  height: 1.75,
  mass: 102,
  calcBmi: function () {
    this.Bmi = this.mass / (this.height * this.height);
    return this.Bmi;
  },
};

if (john.calcBmi() > mark.calcBmi()) {
  console.log(john.firstName + " has bigger Bmi " + john.Bmi);
} else if (mark.calcBmi() > john.calcBmi()) {
  console.log(mark.firstName + " has bigger Bmi " + mark.Bmi);
} else console.log(" Bmi are same ");*/

//Coding challenge No 5
var familyJohn = {
  fullName: "John Smith",
  bills: [0, 125, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValue = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill > 50 && bill < 150) {
        pecentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips[i] = bill * percentage;
      this.finalValue[i] = bill + bill * percentage;
    }
  },
};

var familyMark = {
  fullName: "Mark Jones",
  bills: [77, 375, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValue = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill > 100 && bill < 300) {
        pecentage = 0.1;
      } else {
        percentage = 0.25;
      }

      this.tips[i] = bill * percentage;
      this.finalValue[i] = bill + bill * percentage;
    }
  },
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

familyJohn.calcTips();
familyMark.calcTips();
console.log(familyJohn, familyMark);

familyJohn.average = calcAverage(familyJohn.tips);
familyMark.average = calcAverage(familyMark.tips);
console.log(familyJohn, familyMark);

if (familyJohn.average > familyMark.average) {
  console.log(
    familyJohn.fullName +
      "'s family pays more tips, with an average in $" +
      familyJohn.average
  );
} else {
  console.log(
    familyMark.fullName +
      "'s family pays more tips, with an average in $" +
      familyMark.average
  );
}
