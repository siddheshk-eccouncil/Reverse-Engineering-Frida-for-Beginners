
const memoryrange = Process.enumerateRanges("rw");

//console.log(memoryrange);

//-- Registered to
var searchStr = "52 65 67 69 73 74 65 72 65 64 20 74 6F";

for( var i=0; i<memoryrange.length; i++){
    var memory = Memory.scan(memoryrange[i].base, memoryrange[i].size, searchStr,{
        onMatch: function(address, size){
            console.log(address);
            console.log(address.readUtf8String());

           
            address.writeUtf8String("Registered to: crackinglessons.com");
            console.log(address.readUtf8String());
        },

        onError: function(reason){
            console.log("-- error: " + reason);
        },

        onCompete: function(){
            console.log("-- finished ---");
        },
    });
}
