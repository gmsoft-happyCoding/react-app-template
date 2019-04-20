const externals = require('./externals');

const externalLibs = externals();
const SystemJSModules = Object.keys(externalLibs).map(
  key => `SystemJS.set('${key}', SystemJS.newModule({ __useDefault: ${externalLibs[key].var} }));`
);

module.exports = SystemJSModules.join('\n');
