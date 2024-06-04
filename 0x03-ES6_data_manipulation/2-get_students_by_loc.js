export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter((studentObj) => studentObj.location === city);
}
