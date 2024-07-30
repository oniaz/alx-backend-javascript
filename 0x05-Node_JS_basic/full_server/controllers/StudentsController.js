import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let message = 'This is the list of our students\n';
        const fields = Object.keys(data);
        // fields.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        // fields.sort();
        fields.forEach((field) => {
          message += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
        });
        response.status(200).send(message);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    if (!['CS', 'SWE'].includes(request.params.major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    return readDatabase(process.argv[2])
      .then((data) => {
        if (!data[request.params.major]) {
          return response.status(500).send('Cannot load the database');
        }
        return response.status(200).send(`List: ${data[request.params.major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
