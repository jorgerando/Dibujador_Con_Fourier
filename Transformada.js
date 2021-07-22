

function fourierTrans (señal){

  // Fk = Sum[n = 0 a N-1 ] ( fn *(cos(2*PI*n*K/N) -i*sen( cos(2*PI*n*K/N))  )
  // Fk --> a + bi
  // r = (a²+b²)^(1/2)
  //  an = artg(b/a)

  var N = señal.length ;

  for(var k = 0 ; k < N ; k++ ){

    var a = 0 ;
    var b = 0 ;

    for (var n = 0 ; n < N; n++ ){
         var fn = señal[n] ;
         a += fn *( cos(( 2*PI*k*n)/N)) ;
         b += fn *( -sin(( 2*PI*k*n)/N)) ;
    }

    a = a/N ;
    b = b/N ;

    var r = sqrt(a*a+b*b) ;
    var an = atan2(b,a) ;
    var fr = k ;

    return [fr , r , an ,a ,b ] ;

  }



}


function visualizacion (){
  
}



function setup(){
  createCanvas(2000, 800);

}

function draw(){

  background(0);



}
