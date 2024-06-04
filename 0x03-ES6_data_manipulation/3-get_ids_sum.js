export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((sum, studentObj) => sum + studentObj.id, 0);
}
