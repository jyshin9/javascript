// Q1. make a string out of an array
// {
//   const fruits = ['apple', 'banana', 'orange']; //array
//   const fruits2 = 'apple, banana, orange'; //string
//   console.log(fruits2);
// }
{
  const fruits = ['apple', 'banana', 'orange']; //array
  const result = fruits.join();
  console.log(result);
}
  
// Q2. make an array out of a string
// {
//   const fruits = '🍎, 🥝, 🍌, 🍒'; //string
//   const fruits2 = ['🍎', '🥝', '🍌', '🍒']; //array
//   console.log(fruits2);
// }
{
  const fruits = '🍎, 🥝, 🍌, 🍒'; //string
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// {
//   const array = [1, 2, 3, 4, 5];
//   for(let i=0;i<array.length;i++){
//     array.splice(i,1,array[array.length-i]);
//   }
//   console.log(array);
// }
{
  const array = [1,2,3,4,5];
  const result = array.reverse();
  console.log(result);
}
  
// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0,2);
  console.log(result); //[1, 2]
  console.log(array); //[3, 4, 5] 배열 자체에는 1, 2 삭제
}
  
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result); //[3, 4, 5]
  console.log(array); //[1, 2, 3, 4, 5] 
}



class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
  
// Q5. find a student with the score 90
{
  const result=students.find((Student)=> Student.score === 90); //callback함수를 arrowfunction으로 출력.
  console.log(result);
}
  
// Q6. make an array of enrolled students
{
  const result = students.filter((Student) => Student.enrolled===true); //callback함수를 만들어주어야함 !!
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// {
//   const result = students.map((student)=>student); //주어진 student를 아무것도 하지않고 반환(callback function이 아무일도 발생시키지않음.)
//   console.log(result);
// }
{
  const result = students.map((student)=>student.score); //callback함수: 주어진 student를 score로 변환 
  console.log(result); //[45, 80, 90, 66, 88]
}

  
// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50); //student(요소)중에서 student.score가 50점보다 낮은 학생이 (한명이라도/some) 있는지 여부 -> T/F 반환
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50); // 점수가 50점 이상인 학생이 한명이라도 있는지 없는지. 그 반대(!)
  console.log(result2);
}
  
// Q9. compute students' average score
{
  console.clear();
  const result = students.reduce((prev, curr)=>{
    console.log('----------');
    console.log(prev);
    console.log(curr);    
    return prev + curr.score; //오호랏 !!!!!
  }, 0); //0은 시작값(initial value)
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student)=>student.score) //1. 학생들의 배열을 점수로 구성된 배열로 변환
  .filter((score)=>score>=50) //2. 성적이 50 이상인 학생들의 점수만 거르기
  .join(); //3. 배열을 문자열로 변환

  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student)=>student.score)
  .sort((a,b)=>a,b)
  .join();
  console.log(result);
}