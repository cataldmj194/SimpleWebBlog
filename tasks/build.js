const buble = require('rollup-plugin-buble'); 
const rollup = require('rollup');
// use rollup module, make src/main.js as an entry point to code

rollup.rollup({
  entry: 'src/main.js', 
  plugins: [buble()]
}).then(function(bundle) {
 
  bundle.write({
   format: 'iife',
   dest: 'dist/bundle.js' 
  }); 
});
