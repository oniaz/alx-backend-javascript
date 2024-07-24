const http = require('http');
const fs = require('fs').promises;

function countStudents(filePath) {
  return fs.readFile(filePath, 'utf8')
    .then((data) => {
      const rows = data.split('\n').filter((row) => row.trim() !== '');
      const headers = rows[0].split(',');
      const studentsByField = {};

      rows.slice(1).forEach((row) => {
        const values = row.split(',');
        const field = values[headers.indexOf('field')];
        const firstname = values[headers.indexOf('firstname')];

        if (field && firstname) {
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        }
      });

      let output = `Number of students: ${rows.length - 1}`;

      Object.keys(studentsByField).forEach((field) => {
        output += `\nNumber of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`;
      });

      return output;
    })
    .catch((err) => {
      if (err.code === 'ENOENT') {
        throw new Error('Cannot load the database');
      }
      throw err;
    });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/' && req.method === 'GET') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    res.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(1245, () => {
});

module.exports = app;
