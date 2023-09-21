

const messageboxaddr = Module.findExportByName("user32.dll", "MessageBoxA");
console.log("--address of messagebox: " + messageboxaddr);

Interceptor.attach(messageboxaddr, {
    onEnter: function(args){
        console.log("--entered messagebox--");
        console.log("--lpText: " + Memory.readUtf8String(args[1]));
        console.log("--lpCaption: " + Memory.readUtf8String(args[2]));
    },

    onLeave: function(retval){
        console.log("--exited messagebox--");
    },
});

