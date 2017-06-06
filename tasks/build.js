const buble = require('rollup-plugin-buble'); 
const rollup = require('rollup');
const copy = require('copy'); 
// use rollup module, make src/main.js as an entry point to code
buildJS();
buildHTML();
function buildJS(){
rollup.rollup({
  entry: 'src/main.js', 
  plugins: [buble()]
}).then(function(bundle) {
 
  bundle.write({
   format: 'iife',
   dest: 'dist/bundle.js' 
  }); 
});
}
function buildHTML(){
copy('src/*.html', 'dist', function(err,files){
    if(err) throw err;
})
} 
