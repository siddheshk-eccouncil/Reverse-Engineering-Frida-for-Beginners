Java.perform(()=>{

    //-- base64decode --
    const base64 = Java.use("android.util.Base64");
    var arrayofbyte = base64.decode("5UJiFctbmgbDoLXmpL12mkno8HT4Lv8dlat8FxR2GOc=",0);

    //-- b function --
    const bfunclass = Java.use("sg.vantagepoint.uncrackable1.a");
    var enckey = bfunclass.b("8d127684cbc37c17616d806cf50473cc");

    //-- a function --
    const afunclass = Java.use("sg.vantagepoint.a.a");
    var decryptedarray = afunclass.a(enckey, arrayofbyte);

    //-- convert to string and show --
    const strclass = Java.use("java.lang.String");
    var decryptedstr = strclass.$new(decryptedarray);
    console.log(decryptedstr);
});
