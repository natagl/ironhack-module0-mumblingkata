
function accum(s) {
var c =[];
var j = 0;
for(var i = 0 ; i < s.length ; i++){
   c[j] = s.charAt(i).toUpperCase() ;
   console.log(c[j]);
   j++;
   if( i!== 0){
       for(var k = i;  k > 0 ; k--){
           c[j] = s.charAt(i).toLowerCase();
           console.log(c[j]);
           j++;
       }
   }
   if( i!== (s.length-1)){
       c[j] = '-';
       j++;
   }  
}
return c.join("");
}