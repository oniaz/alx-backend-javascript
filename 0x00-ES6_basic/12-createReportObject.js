export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };
  return report;
}
