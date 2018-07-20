var fs = require("fs");
fs.unlink('AutoFB.js', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});
fs.unlink('Auto.js', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});
