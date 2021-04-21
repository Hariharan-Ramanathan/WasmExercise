
// fetch('test.wasm').then(response =>
//     response.arrayBuffer()
//   ).then(bytes =>
//     WebAssembly.instantiate(bytes)
//   ).then(results => {
//       console.log(results.instance.exports._Z8additionii(3, 10));

//   });
//----------------------------------------------------------------------------------------------------------------------------------------
//   (async ()=>{
//       const response = await fetch('hello.wasm');
//       const bytes = await response.arrayBuffer();
//       const results = await WebAssembly.instantiate(bytes);
//         console.log(results);
//   })()
//----------------------------------------------------------------------------------------------------------------------------------------

var Module = {
    onRuntimeInitialized:function(){
        console.log(Module.addition(2, 3));
    }
};