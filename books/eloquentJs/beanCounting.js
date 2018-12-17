function countBs(string, ch) {
    count = 0
    for(i = 0; i < string.length; i++) {
        if (str[i]== ch) {
            count += 1
        }
        console.log(count);
    }
    console.log("There are " + count + "'s")
}
var ch = "B"
var string = "BdfBfdgBfdgB"

countBs();



// function countChar(string, ch) {
//     let counted = 0;
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] == ch) {
//         counted += 1;
//       }
//     }
//     return counted;
//   }
  
//   function countBs(string) {
//     return countChar(string, "B");
//   }
  
//   console.log(countBs("BBC"));
//   // → 2
//   console.log(countChar("kakkerlak", "k"));