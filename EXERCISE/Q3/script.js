(async ()=>{
    const img = await fetch('https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
    const buffer = await  img.arrayBuffer();
    const typedArray = new Uint8Array(buffer);
    // console.log(typedArray);
    var Module = {
        onRuntimeInitialized:function(){
            Module.printArray(typedArray.length);
        }
    }
})()
