function sumOfSquareAreas(a,b){
    return (a*a) + (b*b);
}
console.log(sumOfSquareAreas(3, 9));
console.log(sumOfSquareAreas(4,5));
console.log(sumOfSquareAreas(6,8));

function gradeCalculator(homeworkAvg, quizAvg, examAvg){
    return (homeworkAvg* 0.1) + (quizAvg * 0.15) + (examAvg * 0.75);
}
console.log(gradeCalculator(100,100,100));
console.log(gradeCalculator(90,85,90));
console.log(gradeCalculator(100,100,70));