// Shandeepa Wickramasinghe



var gl;


var theta = 0.0;

var thetaLoc;


var speed = 100;

var direction = true;


var index=0;

window.onload = function init()

{

    var canvas = document.getElementById( "gl-canvas" );
    

    gl = WebGLUtils.setupWebGL( canvas );
  
  if ( !gl ) { alert( "WebGL isn't available" ); 
}


    //
    //  Configure WebGL
    //
    
gl.viewport( 0, 0, canvas.width, canvas.height );

    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

   

 //  Load shaders and initialize attribute buffers
    
  
  var program = initShaders( gl, "vertex-shader", "fragment-shader" );
 
   gl.useProgram( program );

   


 // Load the data into the GPU   
var vertices = new Float32Array([-0.5, -0.5, 0, 0.5, 0.5, -0.5]);

 

var vertices1 = new Float32Array([
-0.5,0,
0,0.5,
0.5,0,
0,-0.5,
-0.5,-0.5]);

var vertices2= new Float32Array([-0.5, -0.5, 0, 0.5, 0.5, -0.5,0,-0.75]);

 

var vertices3=new Float32Array([
-0.5,0.5,
0.0,0.5,
-0.25,0.0,
0.0,0.5,
-0.25,0.0,
0.25,0.0,
0.0,0.5,
0.25,0.0,
0.5,0.5,
-0.5,-0.5,
-0.25,0.0,
0.0,-0.5,
-0.25,0.0,
0.0,-0.5,
0.25,0.0,
0.25,0.0,
0.0,-0.5,
0.5,-0.5
]);

var vertices4=new Float32Array([
-0.5,0,
0,0.5,
0.5,0,
0,-0.5,
-0.5,-0.5]);

 var vertices5=new Float32Array([
-0.5,0.5,
0.0,0.5,
-0.25,0.0,
0.0,0.5,
-0.25,0.0,
0.25,0.0,
0.0,0.5,
0.25,0.0,
0.5,0.5,
-0.5,-0.5,
-0.25,0.0,
0.0,-0.5,
-0.25,0.0,
0.0,-0.5,
0.25,0.0,
0.25,0.0,
0.0,-0.5,
0.5,-0.5
]);

var vertices6=new Float32Array([
 // Vertex coordinates and color
 0.0,0.0,
 0.5, 0.0,
 0.5, 0.5,
0.0,0.0,
0.0,0.5,
-0.5,0.5,
0.0,0.0, 
-0.5,0.0,
-0.5,-0.5,
0.0,0.0,
0.0,-0.5,
0.5,-0.5]);
 
var vertices7 =  new Float32Array([-0.5, -0.5, 0, 0.25, 0.5, -0.5,0,-0.75]);


var vertices8=new Float32Array([
-0.5,0,
0,0.5,
0.5,0,
0,-0.5,
-0.5,-0.5]);



var vertices9=new Float32Array([
-0.5,0.5,
0.0,0.5,
-0.25,0.0,
0.0,0.5,
-0.25,0.0,
0.25,0.0,
0.0,0.5,
0.25,0.0,
0.5,0.5,
-0.5,-0.5,
-0.25,0.0,
0.0,-0.5,
-0.25,0.0,
0.0,-0.5,
0.5,0.0,
0.25,0.0,
0.0,-0.5,
0.5,-0.5
]);


var vertices10=new Float32Array([
-0.5,0,
0,0.725,
0.5,0,
0.5,-0.25,
0,-0.5,
-0.5,-0.5]);

 var vertices11=new Float32Array([
-0.5,0,
0,0.25,
0.5,0,
0.5,-0.25,
0,-0.5,
-0.5,-0.25]);

 
    var bufferId = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
 
   gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

 
   
// Associate out shader variables with our data buffer
   
  var vPosition = gl.getAttribLocation( program, "vPosition" );
   
 gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
  
  gl.enableVertexAttribArray(vPosition);
    

    thetaLoc = gl.getUniformLocation(program, "theta");
  


 render();

// canvas.onclick=function() 
// {
// index=index+1;
//index=index % 3;

if(index==0)
{
 var bufferId = gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );

  
}

document.getElementById("Button3").onclick = function ()
{
debugger;
   if(index == 0)
   {
       index = index + 1;
       var bufferId1 = gl.createBuffer();
   
       gl.bindBuffer( gl.ARRAY_BUFFER, bufferId1 );
  
       gl.bufferData( gl.ARRAY_BUFFER,flatten(vertices1), gl.STATIC_DRAW );


   }
   else 
   {document.getElementById('gl-canvas').style.display = 'none';
    if(index==1)
   {
      document.getElementById('mainImage').src="index1.jpg";
    }
else if(index==2)
   {
      document.getElementById('mainImage').src="index2.jpg";
    }
else if(index==3)
   {
      document.getElementById('mainImage').src="index3.jpg";
    }
else if(index==4)
   {
      document.getElementById('mainImage').src="index4.jpg";
    }
else if(index==5)
   {
      document.getElementById('mainImage').src="index5.jpg";
    }
else if(index==6)
   {
      document.getElementById('mainImage').src="index6.jpg";
    }
else if(index==7)
   {
      document.getElementById('mainImage').src="index7.jpg";
    }
else if(index==8)
   {
      document.getElementById('mainImage').src="index8.jpg";
    }
else if(index==9)
   {
      document.getElementById('mainImage').src="index9.jpg";
    }
else if(index==10)
   {
      document.getElementById('mainImage').src="index10.jpg";
    }
else if(index==11)
   {
      document.getElementById('mainImage').src="index11.jpg";
    }}
var vPosition = gl.getAttribLocation( program, "vPosition" );
  
  gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
 
   gl.enableVertexAttribArray( vPosition );

   
render();   
}

document.getElementById("Button5").onclick = function ()
{
if(index == 1)
   {
       index = index + 1;
 var bufferId2= gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices2), gl.STATIC_DRAW );

 
 }
else if(index == 7)
   {
       index = index + 1;
  var bufferId8= gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId8 );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices8), gl.STATIC_DRAW );

    
 }
else if(index == 8)
   {
       index = index + 1;
  var bufferId9= gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId9 );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices9), gl.STATIC_DRAW );

    
 }

else 
   {document.getElementById('gl-canvas').style.display = 'none';

 if(index==0)
{
 document.getElementById('mainImage').src="index0.jpg";
}

else if(index==2)
{
 document.getElementById('mainImage').src="index2.jpg";
}

else if(index==3)
{
 document.getElementById('mainImage').src="index3.jpg";
}

else if(index==4)
   {
      document.getElementById('mainImage').src="index4.jpg";
    }
else if(index==5)
   {
      document.getElementById('mainImage').src="index5.jpg";
    }
else if(index==6)
   {
      document.getElementById('mainImage').src="index6.jpg";
    }

else if(index==9)
   {
      document.getElementById('mainImage').src="index9.jpg";
    }
else if(index==10)
   {
      document.getElementById('mainImage').src="index10.jpg";
    }
else if(index==11)
   {
      document.getElementById('mainImage').src="index11.jpg";
    }
}
  var vPosition = gl.getAttribLocation( program, "vPosition" );
  
  gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
 
   gl.enableVertexAttribArray( vPosition );

   
render(); 
}


document.getElementById("Button4").onclick = function ()
{
 if(index == 2)
   {
       index = index + 1;
var bufferId3= gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId3 );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices3), gl.STATIC_DRAW );

 
 }
else if(index == 4)
   {
       index = index + 1;
  var bufferId5= gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId5 );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices5), gl.STATIC_DRAW );

  
 }

else 
   {document.getElementById('gl-canvas').style.display = 'none';
if(index==0)
{
 document.getElementById('mainImage').src="index0.jpg";
}
else if(index==1)
{
 document.getElementById('mainImage').src="index1.jpg";
}

 else if(index==3)
{
 document.getElementById('mainImage').src="index3.jpg";
}  

else if(index==5)
   {
      document.getElementById('mainImage').src="index5.jpg";
    }
else if(index==6)
   {
      document.getElementById('mainImage').src="index6.jpg";
    }
else if(index==7)
   {
      document.getElementById('mainImage').src="index7.jpg";
    }
else if(index==8)
   {
      document.getElementById('mainImage').src="index8.jpg";
    }
else if(index==9)
   {
      document.getElementById('mainImage').src="index9.jpg";
    }
else if(index==10)
   {
      document.getElementById('mainImage').src="index10.jpg";
    }
else if(index==11)
   {
      document.getElementById('mainImage').src="index11.jpg";
    }
  }  
var vPosition = gl.getAttribLocation( program, "vPosition" );
  
  gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
 
   gl.enableVertexAttribArray( vPosition );

   
render();    
}


document.getElementById("Button6").onclick = function ()
{
 if(index == 3)
   {
       index = index + 1;
 var bufferId4= gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId4 );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices4), gl.STATIC_DRAW );

  
 }
else if(index == 10)
   {
       index = index + 1;
  var bufferId11= gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId11 );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices11), gl.STATIC_DRAW );

    
 }

else 
   {document.getElementById('gl-canvas').style.display = 'none';
 if(index==0)
   {
      document.getElementById('mainImage').src="index0.jpg";
    }
else if(index==1)
   {
      document.getElementById('mainImage').src="index1.jpg";
    }
else if(index==2)
   {
      document.getElementById('mainImage').src="index2.jpg";
    }

  else if(index==4)
   {
      document.getElementById('mainImage').src="index4.jpg";
    }
else if(index==5)
   {
      document.getElementById('mainImage').src="index5.jpg";
    }
else if(index==6)
   {
      document.getElementById('mainImage').src="index6.jpg";
    }
else if(index==7)
   {
      document.getElementById('mainImage').src="index7.jpg";
    }
else if(index==8)
   {
      document.getElementById('mainImage').src="index8.jpg";
    }
else if(index==9)
   {
      document.getElementById('mainImage').src="index9.jpg";
    }

else if(index==11)
   {
      document.getElementById('mainImage').src="index11.jpg";
    }
    }
   var vPosition = gl.getAttribLocation( program, "vPosition" );
  
  gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
 
   gl.enableVertexAttribArray( vPosition );

   
render(); 
}




document.getElementById("Button7").onclick = function ()
{
 if(index == 5)
   {
       index = index + 1;
  var bufferId6= gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId6 );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices6), gl.STATIC_DRAW );

    
 }
else 
   {document.getElementById('gl-canvas').style.display = 'none';
 if(index==0)
   {
      document.getElementById('mainImage').src="index0.jpg";
    }
else if(index==1)
   {
      document.getElementById('mainImage').src="index1.jpg";
    }
else if(index==2)
   {
      document.getElementById('mainImage').src="index2.jpg";
    }
 if(index==3)
   {
      document.getElementById('mainImage').src="index3.jpg";
    }
else if(index==4)
   {
      document.getElementById('mainImage').src="index4.jpg";
    }

else if(index==6)
   {
      document.getElementById('mainImage').src="index6.jpg";
    }
else if(index==7)
   {
      document.getElementById('mainImage').src="index7.jpg";
    }
else if(index==8)
   {
      document.getElementById('mainImage').src="index8.jpg";
    }
else if(index==9)
   {
      document.getElementById('mainImage').src="index9.jpg";
    }
else if(index==10)
   {
      document.getElementById('mainImage').src="index10.jpg";
    }
  else if(index==11)
   {
      document.getElementById('mainImage').src="index11.jpg";
    }
}
    var vPosition = gl.getAttribLocation( program, "vPosition" );
  
  gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
 
   gl.enableVertexAttribArray( vPosition );

   
render();
}


document.getElementById("Button8").onclick = function ()
{

   {document.getElementById('gl-canvas').style.display = 'none';
   if(index == 0)
   {
      document.getElementById('mainImage').src="index0.jpg";   
   }
   else if(index==1)
   {
      document.getElementById('mainImage').src="index1.jpg";
    }
else if(index==2)
   {
      document.getElementById('mainImage').src="index2.jpg";
    }
else if(index==3)
   {
      document.getElementById('mainImage').src="index3.jpg";
    }
else if(index==4)
   {
      document.getElementById('mainImage').src="index4.jpg";
    }
else if(index==5)
   {
      document.getElementById('mainImage').src="index5.jpg";
    }
else if(index==6)
   {
      document.getElementById('mainImage').src="index6.jpg";
    }
else if(index==7)
   {
      document.getElementById('mainImage').src="index7.jpg";
    }
else if(index==8)
   {
      document.getElementById('mainImage').src="index8.jpg";
    }
else if(index==9)
   {
      document.getElementById('mainImage').src="index9.jpg";
    }
else if(index==10)
   {
      document.getElementById('mainImage').src="index10.jpg";
    }
else if(index==11)
   {
      document.getElementById('mainImage').src="index11.jpg";
    }
}
}


document.getElementById("Button9").onclick = function ()
{
 if(index == 6)
   {
       index = index + 1;
  var bufferId7= gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId7 );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices7), gl.STATIC_DRAW );

    
 }
else if(index == 9)
   {
       index = index + 1;
  var bufferId10= gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId10 );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices10), gl.STATIC_DRAW );

    
 }
else
 {document.getElementById('gl-canvas').style.display = 'none';
 if(index == 0)
   {
      document.getElementById('mainImage').src="index0.jpg";   
   }
   else if(index==1)
   {
      document.getElementById('mainImage').src="index1.jpg";
    }
else if(index==2)
   {
      document.getElementById('mainImage').src="index2.jpg";
    }
else if(index==3)
   {
      document.getElementById('mainImage').src="index3.jpg";
    }
else if(index==4)
   {
      document.getElementById('mainImage').src="index4.jpg";
    }
else if(index==5)
   {
      document.getElementById('mainImage').src="index5.jpg";
    }

   else if(index==7)
   {
      document.getElementById('mainImage').src="index7.jpg";
    }
else if(index==8)
   {
      document.getElementById('mainImage').src="index8.jpg";
    }

else if(index==10)
   {
      document.getElementById('mainImage').src="index10.jpg";
    }
else if(index==11)
   {
      document.getElementById('mainImage').src="index11.jpg";
    }
}
    var vPosition = gl.getAttribLocation( program, "vPosition" );
  
  gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
 
   gl.enableVertexAttribArray( vPosition );

   
render();
}


document.getElementById("Button10").onclick = function ()
{
 {document.getElementById('gl-canvas').style.display = 'none';
 if(index == 0)
   {
      document.getElementById('mainImage').src="index0.jpg";   
   }
   else if(index==1)
   {
      document.getElementById('mainImage').src="index1.jpg";
    }
else if(index==2)
   {
      document.getElementById('mainImage').src="index2.jpg";
    }
else if(index==3)
   {
      document.getElementById('mainImage').src="index3.jpg";
    }
else if(index==4)
   {
      document.getElementById('mainImage').src="index4.jpg";
    }
else if(index==5)
   {
      document.getElementById('mainImage').src="index5.jpg";
    }
else if(index==6)
   {
      document.getElementById('mainImage').src="index6.jpg";
    }
else if(index==7)
   {
      document.getElementById('mainImage').src="index7.jpg";
    }
else if(index==8)
   {
      document.getElementById('mainImage').src="index8.jpg";
    }
else if(index==9)
   {
      document.getElementById('mainImage').src="index9.jpg";
    }
else if(index==10)
   {
      document.getElementById('mainImage').src="index10.jpg";
    }
else if(index==11)
   {
      document.getElementById('mainImage').src="index11.jpg";
    }
 }
}
 
  
  // Initialize event handlers
  

  
    document.getElementById("slider").onchange = function(event) 
{

        speed = 100 - event.target.value;
  
  };

    document.getElementById("Direction").onclick = function ()
 {

        direction = !direction;
 
   };
  
  
    document.getElementById("Controls").onclick = function( event) 
{
		
switch(event.target.index)
 {

          case 0:
            direction = !direction;
   
         break;

 
        case 1:
            speed /= 0.40;
    
        break;

     
    case 2:
            speed *= 0.05;
       
     break;
    
   }

    };


    window.onkeydown = function( event )
 {

        var key = String.fromCharCode(event.keyCode);
   
     switch( key ) 
{

          case '1':
            direction = !direction;
  
          break;

   
       case '2':
            speed /= 0.10;
      
      break;

      
    case '3':
            speed *= 0.05;
    
        break;
     
   }
    };


    render();

};




function render()

{

    gl.clear( gl.COLOR_BUFFER_BIT );

 
if (index==0)
{
gl.drawArrays( gl.TRIANGLES, 0, 3 );

}
if(index==1)
{
gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4);

}
if(index==2)
{
gl.drawArrays( gl.TRIANGLE_FAN, 0, 4); 
}
if (index==3)
{
 gl.drawArrays( gl.TRIANGLES, 0, 18 );

}
if (index==4)
{
 gl.drawArrays( gl.TRIANGLE_FAN, 0, 4);

}
if (index==5)
{
gl.drawArrays( gl.TRIANGLE_FAN, 0, 18 );

}
if (index==6)
{
gl.drawArrays( gl.TRIANGLES, 0, 12 );
}
if (index==7)
{
gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4);

}
if (index==8)
{
gl.drawArrays( gl.TRIANGLE_FAN, 0, 5);

}
if (index==9)
{
gl.drawArrays( gl.TRIANGLE_FAN, 0, 18 );

}
if (index==10)
{
gl.drawArrays( gl.TRIANGLE_FAN, 0, 6);


}
if (index==11)
{
gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6);

}


gl.drawArrays( gl.TRIANGLES, 0, 3 );

   theta += (direction ? 0.1 : -0.1);
 
   gl.uniform1f(thetaLoc, theta);

  
 
    setTimeout(
        function () {requestAnimFrame( render );},
        speed
    );


}
