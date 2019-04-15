var i=0;
var j=0;



//pattern1

document.write("<h2>PATTERN 1</h2>");
for(i=0;i<=5;i++){
    
    for(j=0;j<i;j++){
        document.write('<h1><i class="fas fa-star"></i></h1>');
    }
    document.write("<br>");
}
document.write("<h2>PATTERN 2</h2>");
//pattern2


var j;
var star=0;
var times=0;
var minus=4;
for(times=0;times<5;times++){
   for(i=0;i<minus;i++){
         document.write("<h1></h1>");
         star++;
    }
    minus--;
    for(j=star;j<5;j++){
        document.write('<h1><i class="fas fa-star"></i></h1>');
    }
    document.write("<br>");
    i=0;
    star=0;
    j=0;
}
document.write("<h2>PATTERN 3</h2>");

//pattern3

var times=0;
var space=8;
var loop=0;
for(times=0;times<5;times++){
    for(i=loop;i<5;i++){
      document.write('<h1><i class="fas fa-star"></i></h1>');  
    }
    space--;
    space--;
    i=0;
    for(j=space;j<6;j++){
        document.write("<h1></h1>");
    }

    for(i=loop;i<5;i++){
    document.write('<h1><i class="fas fa-star"></i></h1>');  
    }
    i=0;
    document.write("<br>");
    loop++;
}
document.write("<h2>PATTERN 4</h2>");


//PATTERN 4

var times2=0;
var space2=7;
var loop2=0;
for(times2=0;times2<5;times2++){
    for(i=loop2;i<4;i++){
      document.write("<h1></h1>");  
    }
    space2--;
    space2--;
    i=0;
    for(j=space2;j<6;j++){
        document.write('<h1><i class="fas fa-star"></i></h1>');
    }

    for(i=loop2;i<4;i++){
    document.write("<h1></h1>");  
    }
    i=0;
    document.write("<br>");
    loop2++;
}
document.write("<h2>PATTERN 5</h2>");

//PATTERN 5
var x=6;
 var z=0;
var temp2;
for(i=0;i<6;i++){
    for(j=0;j<i+1;j++){
    document.write('<h1><i class="fas fa-star"></i></h1>');
    }
    for(temp2=x;temp2>=1;temp2--){
    document.write('<h1 style="color:blue;"><i class="fas fa-star-of-david"></i></h1>');
    }
    x--;
   
    document.write("<br>");
}
document.write("<h2>PATTERN 6</h2>");

//PATTERN 6

var times2=0;
var space2=7;
var loop2=0;
for(times2=0;times2<6;times2++){
    for(i=loop2;i<9;i++){
      document.write("<h4></h4>");  
    }
    space2--;
    space2--;
    i=0;
    for(j=space2;j<6;j++){
        document.write('<h4><i class="fas fa-star"></i></h4>');
    }
    for(i=loop2;i<8;i++){
    document.write("<h4></h4>");  
    }
    i=0;
    document.write("<br>");
  loop2++;  
}
var h;
var j;
var star=0;
var times=0;
var minus=4;
for(times=0;times<4;times++){
   for(i=1;i<minus;i++){
         document.write("<h4></h4>");
         star++;
    }
    minus--;
    for(j=star;j<5;j++){
        document.write('<h4><i class="fas fa-star"></i></h4>');
    }
     for(i=0;i<9;i++){
        document.write("<h4></h4>");
    }
    
        for(j=star;j<5;j++){
        document.write('<h4><i class="fas fa-star"></i></h4>');
        }
        
   
    document.write("<br>");
    i=0;
    star=0;
    j=0;
}

var h;
var j;
var star=0;
var times=0;
var minus=4;
var tem;
var t=4;
var st=0;
var tmp;
var count=4;
var m=0;
for(times=0;times<3;times++){
  for(tmp=t;tmp<5;tmp++){
    document.write("<h4></h4>");
}
t--;
for(st=0;st<count;st++){
    document.write('<h4><i class="fas fa-star"></i></h4>');
}
    count--;
     for(i=0;i<9;i++){
        document.write('<h4></h4>');
    }
    for(tem=m;tem<4;tem++){
        document.write('<h4><i class="fas fa-star"></i></h4>');
    }
    m++;
     
        
   
    document.write("<br>");
    i=0;
    star=0;
    j=0;
}




var times=0;
var space=7;
var loop=0;


for(times=0;times<6;times++){

    
    for(i=loop2;i<9;i++){
      document.write("<h4></h4>");  
    }
    for(i=loop;i<6;i++){
      document.write('<h4><i class="fas fa-star"></i></h4>');  
    }
    
    space--;
    space--;
    i=0;
    for(j=space;j<6;j++){
        document.write("<h4></h4>");
    }
   
    for(i=loop;i<6;i++){
    document.write('<h4><i class="fas fa-star"></i></h4>');  
    }
    for(i=loop2;i<8;i++){
      document.write("<h4></h4>");  
    }
    i=0;
    document.write("<br>");
    loop++;
}


