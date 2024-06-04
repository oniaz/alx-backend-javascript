export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList.filter((studentObj) => studentObj.location === city)
    .map((student) => {
      const gradeUpdate = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
      return {
        ...student,
        grade: gradeUpdate ? gradeUpdate.grade : 'N/A',
      };
    });
}
