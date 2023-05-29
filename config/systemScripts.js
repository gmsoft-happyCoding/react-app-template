const externals = require('./externals');

const externalLibs = externals();
const libKeys = Object.keys(externalLibs);

const systemJsMaps = libKeys.map(
  (key, index) =>
    `"${key}":"${externalLibs[key].cdn[process.env.NODE_ENV]}"${
      index === libKeys.length - 1 ? '' : ','
    }`
);

const mapsJSON = `{
  "imports":{
    ${systemJsMaps.join('\n')}
  }
}`;

const mapsScript = `<script type="systemjs-importmap">${mapsJSON}</script>`;

module.exports = `${mapsScript}
<script src="https://cdn.gm/systemjs/6.14.1/system.min.js"></script>
<script src="https://cdn.gm//systemjs/6.14.1/extras/amd.min.js"></script>
<script src="https://cdn.gm//systemjs/6.14.1/extras/use-default.min.js"></script>`;
