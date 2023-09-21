//-- https://frida.re/docs/javascript-api/#module

const module = Module.load("CrackMe2.exe");

var functions = module.enumerateImports();

for(var i=0; i < functions.length; i++){
    console.log(functions[i].name);
}