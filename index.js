 var n = prompt("nhap so n")

for ( i = 1; i <= n; i++ ){ 
    for( j = 1; j <= n; j++){
        if( i==1 || j == 1 || i == n || j == n){
           document.write("*")
        }
        else{
            document.write("-")
        }
    } 
    document.write('<br/>')
} 
    