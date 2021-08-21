
function dibujarEjes(){

   fill(0,0,0);
   stroke(0,0,0);
   strokeWeight(3) ;
   line(0,0,0,200,0,0) ;
   line(0,0,0,0,200,0) ;
   line(0,0,0,0,0,200) ;
   strokeWeight(40) ;
   stroke(255,0,0);
   point(0,200,0)
   stroke(0,255,0);
   point(0,0,200)
   stroke(0,0,255);
   point(200,0,0)

}

function puntosToride(R,r,incremento ){


  var toroide = [] ;

   for(var alfa = 0 ; alfa < 2 * Math.PI ; alfa+=incremento ){
     for(var beta = 0 ; beta < 2 * Math.PI ; beta+=incremento ){

        // ecuaciones parametricas

        var x = ( R + r *  Math.cos(alfa) )*  Math.cos(beta) ;
        var y = ( R + r *  Math.cos(alfa) )*  Math.sin(beta) ;
        var z = r* Math.sin(alfa)

        var punto = [x,y,z] ;

        toroide.push(punto);


     }
   }

   return toroide ;

}

function concha(r,incremento){

  var toroide = [] ;

   for(var alfa = 0 ; alfa < 2 * Math.PI ; alfa+=incremento/4 ){
     for(var beta = 0 ; beta < 2 * Math.PI ; beta+=incremento ){


    var u = alfa ;
    var v = beta ;
    var R=1;    // radius of tube
    var N=4.6;  // number of turns
    var H=2;    // height
    var P=2;    // power

   var W = u/(2*Math.PI)*R
   var x = W*Math.cos(N*u)*(1+Math.cos(v))
   var y = W*Math.sin(N*u)*(1+Math.cos(v))
   var z = W*Math.sin(v) + H*(u/(2*Math.PI))* H*(u/(2*Math.PI))



       var punto = [40*x,40*y,40*z] ;

       toroide.push(punto);
    }
  }
  return toroide ;

}

function esfera(r,incremento){

  var toroide = [] ;

   for(var alfa = 0 ; alfa < 2 * Math.PI ; alfa+=incremento ){
     for(var beta = 0 ; beta < 2 * Math.PI ; beta+=incremento ){

        // ecuaciones parametricas

        var x = r *  Math.cos(alfa) *  Math.cos(beta) ;
        var y =  r  *  Math.cos(alfa) *  Math.sin(beta) ;
        var z = r*  Math.sin(alfa)

        var punto = [x,y,z] ;

        toroide.push(punto);


     }
   }

   return toroide ;

}

function fourierTrans (senal){

  // Fk = Sum[n = 0 a N-1 ] ( fn *(cos(2*PI*n*K/N) -i*sen( cos(2*PI*n*K/N))  )
  // Fk --> a + bi
  // r = (a²+b²)^(1/2)
  //  an = artg(b/a)
  var frecuencias = [] ;
  var N = senal.length ;

  for(var k = 0 ; k < N ; k++ ){

    var a = 0 ;
    var b = 0 ;

    for (var n = 0 ; n < N; n++ ){

         var fn = senal[n] ;

         a += fn *( Math.cos(( 2*Math.PI*k*n)/N)) ;
         b -= fn *( Math.sin(( 2*Math.PI*k*n)/N)) ;
    }

    a = a/N ;
    b = b/N ;

    var r = Math.sqrt(a*a+b*b) ;
    var an = Math.atan2(b,a) ;
    var fr = k ;

    frecuencias.push([fr , r , an ,a ,b ]) ;

  }

  return frecuencias ;

}

// ------------

function ordenarFrecuencias(frecuencias){

  for(var i = 0 ; i < frecuencias.length ; i++ ){
     var f = frecuencias[i][1] ;
    for(var x  = 0  ; x < frecuencias.length ;  x++){

          var cm = frecuencias[x][1] ;

          if( f >= cm ){

            var guarda = frecuencias[x] ;
            frecuencias[x] = frecuencias[i] ;
            frecuencias[i] = guarda ;

          }

    }
  }

}

function visulizarX(distancia ,frecuencias,t){

  push();
  translate(0,0,distancia)
  var x = 0 ;
  var y = 0 ;

  for( var i = 0 ; i < frecuencias.length  ; i++ ){

       var x_a = x ;
       var y_a = y ;

       var r = frecuencias[i][1] ;
       var fr = frecuencias[i][0] ;
       var anI = frecuencias[i][2] ;

       x += r * Math.cos( fr * t + anI  ) ;
       y += r * Math.sin( fr * t + anI ) ;

       noFill()
       stroke(255)
       fill(0,0,0);
       strokeWeight(1) ;

       noFill();
       line(x_a,y_a,0,x,y,0) ;
       ellipse(x_a, y_a,r*2, r*2);


  }


  pop();
  return [ x , y , distancia]

}

function visulizarY(distancia ,frecuencias,t){
  push();
  translate(0,0,distancia)
  rotateZ(PI/2);

  var x = 0 ;
  var y = 0 ;

  for( var i = 0 ; i < frecuencias.length  ; i++ ){

       var x_a = x ;
       var y_a = y ;

       var r = frecuencias[i][1] ;
       var fr = frecuencias[i][0] ;
       var anI = frecuencias[i][2] ;

       x += r * Math.cos( fr * t + anI ) ;
       y += r * Math.sin( fr * t + anI  ) ;

       noFill()
       stroke(255)


       strokeWeight(1) ;

       noFill();
       line(x_a,y_a,0,x,y,0) ;
       ellipse(x_a, y_a,r*2, r*2);


  }

  pop();
  return [ x , y ,distancia ]

}

function visulizarZ(distancia ,frecuencias,t){
  push();

  translate(distancia,0,0) ;
  rotateY(-PI/2) ;


  var x = 0 ;
  var y = 0;

  for( var i = 0 ; i < frecuencias.length  ; i++ ){

       var x_a = x ;
       var y_a = y ;

       var r = frecuencias[i][1] ;
       var fr = frecuencias[i][0] ;
       var anI = frecuencias[i][2] ;

       x += r * Math.cos( fr * t + anI ) ;
       y += r * Math.sin( fr * t + anI  ) ;

       noFill()
       stroke(255)



       strokeWeight(1) ;

       noFill();
       line(x_a,y_a,0,x,y,0) ;
       ellipse(x_a, y_a,r*2, r*2);


  }

  pop();

  return [ x , y ,distancia ]

}

// Calculo de las frecuencias

//var toroide = puntosToride(100,50,0.3);
var toroide = esfera(100,0.3);

var senalx = [] ;
var senaly = [] ;
var senalz = [] ;

for (var i = 0 ; i < toroide.length ; i+=1) {

    var punto = toroide[i]

    senalx.push(punto[0])
    senaly.push(punto[1])
    senalz.push(punto[2])
}

var frecuenciasx = fourierTrans(senalx);
var frecuenciasy = fourierTrans(senaly);
var frecuenciasz = fourierTrans(senalz);

ordenarFrecuencias(frecuenciasx);
ordenarFrecuencias(frecuenciasy);
ordenarFrecuencias(frecuenciasz);

var t = 0 ;

var path = [];
var a = 0 ;

function setup() {

  createCanvas(1000, 1000, WEBGL);
  easycam = createEasyCam() ;

}

function draw() {

  rotateY(a);
  rotateX(-a);
  background(0);

  var distancia = 200 ;

  var X = visulizarX(-200,frecuenciasx,t) ;
  var Y = visulizarY(200,frecuenciasy,t) ;
  var Z = visulizarZ(200,frecuenciasz,t) ;

  var x = X[0];
  var y = Y[0];
  var z = Z[0];

  strokeWeight(1);
  stroke(255);

  line(distancia,0,z,x,0,z);
  line(x,0,-distancia,x,0,z);
  line(0,y,distancia,0,y,z);

  line(x,0,0,x,y,0);
  line(0,y,0,x,y,0);

  line(x,0,0,x,0,z);
  line(0,0,z,x,0,z);

  line(0,y,0,0,y,z);
  line(0,y,z,0,0,z);


  line(x,y,z,0,y,z);
  line(x,y,z,x,0,z);
  line(x,y,z,x,y,0);

  strokeWeight(10) ;
  stroke(255,0,0);
  stroke(0,0,255)

  stroke(255)
  point(x,y,z);


  let v = createVector(x , y , z);
  path.unshift(v);

  beginShape();
  stroke(255);
  strokeWeight(1);
  noFill();

  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y ,  path[i].z );
  }
  endShape();


  t+= 2*Math.PI/toroide.length ;
  a+=0.01
}
