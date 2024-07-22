const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');

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

    console.log(`Number of students: ${rows.length - 1}`);

    Object.keys(studentsByField).forEach((field) => {
      console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
    });
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
  }
}

module.exports = countStudents;
