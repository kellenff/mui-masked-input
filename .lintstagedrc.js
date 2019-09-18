module.exports = {
  '**/*.[jt]s?(x)': (filenames) => fileames.map((filename) => `eslint '${filename}'`),
};
