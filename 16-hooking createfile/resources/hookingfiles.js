
//--- createfile ---
const createfileaddr = Module.getExportByName("kernel32.dll", "CreateFileA");

console.log("-- createfile addr: " + createfileaddr);


Interceptor.attach(createfileaddr, {
    onEnter: function(args){
        console.log("--entered createfile--");
        console.log("--lpFileName: " + args[0].readUtf8String());
        console.log("--dwDesiredAccess: " + args[1]);
    },

    onLeave: function(retval){
        //retval.replace(1);
        console.log("--exited createfile--");
        console.log("-- createfile retval: " + retval);
        
    }
});





