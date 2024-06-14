var lengthOfLastWord = function(s) {
    var array = []
       var lastWord = s.split(" ")
      lastWord.forEach((ele) => {
         if(ele !== ""){
             array.push(ele)
         }
      })
      lastWord =array[array.length-1]
      return console.log(lastWord.length)
 };

 lengthOfLastWord("   fly me   to   the moon  ")