function readDatabase(filePath) {
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


      let output= {};

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