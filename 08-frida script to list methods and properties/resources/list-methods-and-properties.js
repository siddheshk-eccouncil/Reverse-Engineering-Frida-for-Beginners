Java.perform(()=>{
    console.log("--- ok ---");
    const activityclass = Java.use("com.example.helloapp.MainActivity");
    console.log(activityclass);
    console.log(Object.getOwnPropertyNames(activityclass).join("\n"));
});