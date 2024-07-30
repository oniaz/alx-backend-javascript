const express = require('express');
const fs = require('fs').promises;

const app = express();

async function countStudents(filePath) {
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
        return 'Cannot load the database';
      }
      throw err;
    });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const data = await countStudents(process.argv[2]);
  res.send(`This is the list of our students\n${data}`);
});

app.listen(1245, () => {
});

module.exports = app;
