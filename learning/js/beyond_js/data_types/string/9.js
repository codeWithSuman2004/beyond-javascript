String("Hello Abinash") // 'Hello Abinash'
String(12345) // '12345'
String(-987.100) // '-987.1'
String(100n) // '100'
String([]) // '', empty string
String([1]) // '1'
String([1,2,3,4]) // '1,2,3,4'
String({}) // '[object Object]'
String({message : "Hello World"}) // '[object Object]'
String(true) // 'true'
String(false) // 'false'
console.log(String(NaN)) // 'NaN'
console.log(String(undefined)) // 'undefined'