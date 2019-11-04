// 2. Zadatak

var m = 5;
var n = 30;
var s=0;
var br = 0;
    

for (let i = m; i <= n; i++) {
    if (i % 7 == 0) {
        s = s + i;
        br = br + 1;}}
    

var as = s / br;
console.log(as);
//20
//Zadatak 3

var krov = 3;
        var zvezdica = "*".padStart(krov+1)
        console.log(zvezdica)
         for (let h=1; h<= krov; h++){
            var str = ' '.repeat(krov-h);
            var str2 = '*' 
            var str3 = ' '.repeat(h*2 -1)
           
           console.log(str + str2 + str3 + str2);
        }
     
           for (let d=2; d<= krov; d++){
               var str5 = '*'.padStart(krov*3-d*2-1)
               var str4 = ' '.repeat(d-1)            
           
           console.log(str4+str2+str5);
           
        }
        console.log(zvezdica)

//15
        /// zadatak 1

        var k=4;
        var n=12;
        var s=0;
        var s1=0; 
        var s2=0;
            
         
        for (let i=0; i<= n; i++){               
            if (i%2 != 0)
                s1 = s1 + (i+1)/(k+i);
            else
                s2 = s2 + (i+1)/(k+i);
            s = s1 - s2;}

           console.log (s);
//30
//zadata 4

