export default function createIteratorObject(report) {
  const iterator = [];
  for (const [, employees] of Object.entries(report.allEmployees)) {
    for (const employee of employees) iterator.push(employee);
  }
  return (iterator);
}
