// function returns true or false depending on whether a Note with the NoteText
function Note(noteText, magText){

  var noteArray = noteText.toLowerCase().split(' '),
      magArray = magText.toLowerCase().split(' '),
      magObject = {},
      usable = true;

      magArray.forEach(word => {
        if (!magObject[word]) magObject[word] = 0;
        magObject[word]++
      });

      noteArray.forEach(word =>{
        if (magObject[word] > 0) magObject[word]--
        else usable = false 
      })

      return usable;

}



console.log(Note('give one one gRand today', 'give me one grAnd today and one tomorrow night'))