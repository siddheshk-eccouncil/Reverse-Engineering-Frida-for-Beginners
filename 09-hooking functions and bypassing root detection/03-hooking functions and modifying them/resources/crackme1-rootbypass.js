Java.perform(()=>{
    const rootcheckclass = Java.use("sg.vantagepoint.a.c");

    rootcheckclass.a.implementation = function(){
        console.log("--bypass c.a()--");
        return false;
    }

    rootcheckclass.b.implementation = function(){
        console.log("--bypass c.b()--");
        return false;
    }

    rootcheckclass.c.implementation = function(){
        console.log("--bypass c.c()--");
        return false;
    }
});