let search = document.getElementById('search-btn'),
    crypt = document.getElementById('crypt'),
    textarea = document.getElementById('input-textarea'),
    analys = document.getElementById('analys');

search.addEventListener('click' , function search(event){
    event.preventDefault();
    let searchedWord = document.getElementById('search-input').value,
        myText = textarea.value,
        outputFoundWord = document.getElementById('found-text');

        if(searchedWord.length > 0 && myText.indexOf(searchedWord) > -1){
           outputFoundWord.value = searchedWord;
        }else{
            outputFoundWord.value = "Text nebol nájedný."
        } 
});   

analys.addEventListener('click' , function analys(event){
    event.preventDefault();
    let outputLength = document.getElementById('length'),
        outputLengthWithoutSpace = document.getElementById('length-without-space'),
        outputNumbersInText =  document.getElementById('numbers-in-text'),
        myText = textarea.value,
        outputLongestWord = document.getElementById('longest-word'); 
    
        outputLength.value = myText.length;
        outputLengthWithoutSpace.value = myText.replaceAll(" " , "").length;  
        
        let words = myText.split(' '),
        size = 0,
        max = [''];
        for(let i = 0; i <words.length ; i++){
            if(words[i].length >= size){
                size = words[i].length;
                if(max[max.length-1].length < words[i].length){
                    max = [];
                    max.push(words[i]);
                }else{
                    max = [...max,words[i]];
                }
            }
            outputLongestWord.value = [...max] + " " + "("+max[0].length+")";
        }

        outputNumbersInText.value = "0";
        if(myText.match(/\d/g).length > 0){
            outputNumbersInText.value = myText.match(/\d/g).length;
        }           
});

crypt.addEventListener('click' , function crypt(event){
    event.preventDefault();
    let outputCrypted = document.getElementById('crypted'),
        myText = textarea.value;

    myText = myText.replaceAll( 'O' , '0');
    myText = myText.replaceAll( 'o' , '0');
    myText = myText.replaceAll( 'I' , '1');
    myText = myText.replaceAll( 'i' , '1');
    myText = myText.replaceAll( 'E' , '3');
    myText = myText.replaceAll( 'e' , '3');
    myText = myText.replaceAll( 'A' , '4');
    myText = myText.replaceAll( 'a' , '4');
    myText = myText.replaceAll( 'S' , '5');
    myText = myText.replaceAll( 's' , '5');
    myText = myText.replaceAll( 'B' , '8');
    myText = myText.replaceAll( 'b' , '8');

    outputCrypted.value = myText;    
});