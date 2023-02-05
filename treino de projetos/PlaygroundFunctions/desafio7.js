function catAndMouse( mouse, cat1,cat2){
    if(Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
        return 'cat1';
    } else if(Math.abs(mouse - cat1) === Math.abs(mouse - cat2)){
        return 'os gatos trombam e o rato foge';
    } else{
        return 'cat2';
    }
  
    }
  

    

  
  
    

