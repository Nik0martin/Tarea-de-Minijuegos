//en cuanto se pulse el boton se activara la cuenta atras y se mostraran las preguntas 
document.getElementById("mostrarPreguntas").addEventListener("click", function() {
    document.getElementById("preguntas").classList.remove("oculto");
    
    //creamos la constante para la cuenta atras
    const consttemporizador = document.getElementById('temporizador');
  
    //al ser un minuto para que sea mas sencilla voy a trabajar solo con segundos
    let segundos=60;
    //creamos la funcion que actualizara el temporizador
    function actualizartemporizador(){
      //cuando el temporizador llegue a 0 se finaliza el test y se inhabilitan las respuestas y se muestran en verde las correctas
      if(segundos ===0){
          //con esto hacemos que se detenga la cuenta atras parando el interval que lo actualiza
          clearInterval(actualizador);
          alert("Se acabo el tiempo");
          alert("Puntos="+ puntos);
          opcion1pregunta1.disabled = true;
          opcion2pregunta1.disabled = true;
          opcion3pregunta1.disabled = true;
          opcion1pregunta2.disabled = true;
          opcion2pregunta2.disabled = true;
          opcion3pregunta2.disabled = true;
          opcion1pregunta3.disabled = true;
          opcion2pregunta3.disabled = true;
          opcion3pregunta3.disabled = true;
          opcion1pregunta4.disabled = true;
          opcion2pregunta4.disabled = true;
          opcion3pregunta4.disabled = true;
          opcion1pregunta5.disabled = true;
          opcion2pregunta5.disabled = true;
          opcion3pregunta5.disabled = true;
          opcion1pregunta6.disabled = true;
          opcion2pregunta6.disabled = true;
          opcion3pregunta6.disabled = true;
          opcion1pregunta7.disabled = true;
          opcion2pregunta7.disabled = true;
          opcion3pregunta7.disabled = true;
          opcion1pregunta8.disabled = true;
          opcion2pregunta8.disabled = true;
          opcion3pregunta8.disabled = true;
  
          opcion2pregunta1.style.backgroundColor = 'green';
          opcion3pregunta2.style.backgroundColor = 'green';
          opcion1pregunta3.style.backgroundColor = 'green';
          opcion2pregunta4.style.backgroundColor = 'green';
          opcion1pregunta5.style.backgroundColor = 'green';
          opcion3pregunta6.style.backgroundColor = 'green';
          opcion1pregunta7.style.backgroundColor = 'green';
          opcion2pregunta8.style.backgroundColor = 'green';
  
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      }
      segundos--;
      //actualizamos el texto del cronometro
      consttemporizador.textContent = '00:'+segundos;
    }
    //vamos a usar un set interval para que llame a la funcion de actualizar cada segundo
    actualizador = setInterval(actualizartemporizador, 1000);
  
    
  });
  
      
      
      let puntos=0;
      console.log(puntos);
      
  
      //respuestas de la primera pregunta
      const opcion1pregunta1 = document.getElementById("opcion1p1");
      const opcion2pregunta1 = document.getElementById("opcion2p1");
      const opcion3pregunta1 = document.getElementById("opcion3p1");
      opcion1pregunta1.addEventListener("click",function(){
          
          //modificamos el color de los bototnes indicando la correcta y la erronea si es que se le da mal
          opcion1pregunta1.style.backgroundColor = 'red';
          opcion2pregunta1.style.backgroundColor = 'green';
          //cada error resto 0,5 aunque lo podemos modificar
          puntos-=0.5;
          //con esto lo que hago es inhabilitar el resto de botones una vez se ha elegido una opcion
          
          opcion1pregunta1.disabled = true;
          opcion2pregunta1.disabled = true;
          opcion3pregunta1.disabled = true;
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
      opcion2pregunta1.addEventListener("click",function(){
          
  
          opcion2pregunta1.style.backgroundColor = 'green';
          
          opcion1pregunta1.disabled = true;
          opcion2pregunta1.disabled = true;
          opcion3pregunta1.disabled = true;
          puntos+=1;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
      opcion3pregunta1.addEventListener("click",function(){
          
          
          opcion2pregunta1.style.backgroundColor = 'green';
          opcion3pregunta1.style.backgroundColor = 'red';
          puntos-=0.5;
          opcion1pregunta1.disabled = true;
          opcion2pregunta1.disabled = true;
          opcion3pregunta1.disabled = true;
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
  
      //respuestas segunda pregunta
      const opcion1pregunta2 = document.getElementById("opcion1p2");
      const opcion2pregunta2 = document.getElementById("opcion2p2");
      const opcion3pregunta2 = document.getElementById("opcion3p2");
      opcion1pregunta2.addEventListener("click", function(){
          
          opcion1pregunta2.style.backgroundColor = 'red';
          opcion3pregunta2.style.backgroundColor = 'green';
          puntos-=0.5;
          opcion1pregunta2.disabled = true;
          opcion2pregunta2.disabled = true;
          opcion3pregunta2.disabled = true;
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
      opcion2pregunta2.addEventListener("click",function(){
          
          
          opcion2pregunta2.style.backgroundColor = 'red';
          opcion3pregunta2.style.backgroundColor = 'green';
          opcion1pregunta2.disabled = true;
          opcion2pregunta2.disabled = true;
          opcion3pregunta2.disabled = true;
          puntos-=0.5;
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
      opcion3pregunta2.addEventListener("click",function(){
          
          
          opcion3pregunta2.style.backgroundColor = 'green';
          opcion1pregunta2.disabled = true;
          opcion2pregunta2.disabled = true;
          opcion3pregunta2.disabled = true;
          puntos+=1;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
  
      //respuestas tercera pregunta
      const opcion1pregunta3 = document.getElementById("opcion1p3");
      const opcion2pregunta3 = document.getElementById("opcion2p3");
      const opcion3pregunta3 = document.getElementById("opcion3p3");
  
      opcion1pregunta3.addEventListener("click", function(){
          
          opcion1pregunta3.style.backgroundColor = 'green';
          
          opcion1pregunta3.disabled = true;
          opcion2pregunta3.disabled = true;
          opcion3pregunta3.disabled = true;
          puntos+=1;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
  
      opcion2pregunta3.addEventListener("click",function(){
         
          opcion1pregunta3.style.backgroundColor = 'green';
          opcion2pregunta3.style.backgroundColor = 'red';
          
          opcion1pregunta3.disabled = true;
          opcion2pregunta3.disabled = true;
          opcion3pregunta3.disabled = true;
          puntos-=0.5;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
  
      opcion3pregunta3.addEventListener("click",function(){
          
          
          opcion1pregunta3.style.backgroundColor = 'green';
          opcion3pregunta3.style.backgroundColor = 'red';
          opcion1pregunta3.disabled = true;
          opcion2pregunta3.disabled = true;
          opcion3pregunta3.disabled = true;
          puntos-=0.5;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
  
      //cuarta pregunta
      const opcion1pregunta4 = document.getElementById("opcion1p4");
      const opcion2pregunta4 = document.getElementById("opcion2p4");
      const opcion3pregunta4 = document.getElementById("opcion3p4");
  
      opcion1pregunta4.addEventListener("click", function(){
          
          opcion1pregunta4.style.backgroundColor = 'red';
          opcion2pregunta4.style.backgroundColor = 'green';
          
  
          opcion1pregunta4.disabled = true;
          opcion2pregunta4.disabled = true;
          opcion3pregunta4.disabled = true;
          puntos-=0.5;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
      opcion2pregunta4.addEventListener("click",function(){
          
          
          opcion2pregunta4.style.backgroundColor = 'green';
          
          opcion1pregunta4.disabled = true;
          opcion2pregunta4.disabled = true;
          opcion3pregunta4.disabled = true;
          puntos+=1;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
  
      })
  
      opcion3pregunta4.addEventListener("click",function(){
          
          opcion2pregunta4.style.backgroundColor = 'green';
          opcion3pregunta4.style.backgroundColor = 'red';
          opcion1pregunta4.disabled = true;
          opcion2pregunta4.disabled = true;
          opcion3pregunta4.disabled = true;
          puntos-=0.5;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
  
      //pregunta 5
      const opcion1pregunta5 = document.getElementById("opcion1p5");
      const opcion2pregunta5 = document.getElementById("opcion2p5");
      const opcion3pregunta5 = document.getElementById("opcion3p5");
  
      opcion1pregunta5.addEventListener("click", function(){
          opcion1pregunta5.style.backgroundColor = 'green';
          opcion1pregunta5.disabled = true;
          opcion2pregunta5.disabled = true;
          opcion3pregunta5.disabled = true;
          puntos+=1;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
  
      opcion2pregunta5.addEventListener("click",function(){
          opcion1pregunta5.style.backgroundColor = 'green';
          opcion2pregunta5.style.backgroundColor = 'red';
          opcion1pregunta5.disabled = true;
          opcion2pregunta5.disabled = true;
          opcion3pregunta5.disabled = true;
          puntos-=0.5;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
  
      })
  
      opcion3pregunta5.addEventListener("click",function(){
          opcion1pregunta5.style.backgroundColor = 'green';
          opcion3pregunta5.style.backgroundColor= 'red';
          opcion1pregunta5.disabled = true;
          opcion2pregunta5.disabled = true;
          opcion3pregunta5.disabled = true;
          puntos-=0.5;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
      })
  //pregunta6
      const opcion1pregunta6 = document.getElementById("opcion1p6");
      const opcion2pregunta6 = document.getElementById("opcion2p6");
      const opcion3pregunta6 = document.getElementById("opcion3p6");
  
  opcion1pregunta6.addEventListener("click",function(){
      opcion1pregunta6.style.backgroundColor ='red';
      opcion3pregunta6.style.backgroundColor = 'green';
          opcion1pregunta6.disabled = true;
          opcion2pregunta6.disabled = true;
          opcion3pregunta6.disabled = true;
          puntos-=0.5;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
  })
  opcion2pregunta6.addEventListener("click",function(){
      opcion2pregunta6.style.backgroundColor ='red';
      opcion3pregunta6.style.backgroundColor = 'green';
          opcion1pregunta6.disabled = true;
          opcion2pregunta6.disabled = true;
          opcion3pregunta6.disabled = true;
          puntos-=0.5;
          console.log(puntos);
          document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
  })
  opcion3pregunta6.addEventListener("click",function(){
      opcion3pregunta6.style.backgroundColor = 'green';
      opcion1pregunta6.disabled = true;
      opcion2pregunta6.disabled = true;
      opcion3pregunta6.disabled = true;
      puntos+=1;
      console.log(puntos);
      document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
  })
  
  //pregunta 7
  const opcion1pregunta7 = document.getElementById("opcion1p7");
  const opcion2pregunta7 = document.getElementById("opcion2p7");
  const opcion3pregunta7 = document.getElementById("opcion3p7");
  
  opcion1pregunta7.addEventListener("click",function(){
      opcion1pregunta7.style.backgroundColor = 'green';
      opcion1pregunta7.disabled = true;
      opcion2pregunta7.disabled = true;
      opcion3pregunta7.disabled = true;
      puntos+=1;
      console.log(puntos);
      document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
  })
  opcion2pregunta7.addEventListener("click",function(){
      opcion1pregunta7.style.backgroundColor = 'green';
      opcion2pregunta7.style.backgroundColor='red';
      opcion1pregunta7.disabled = true;
      opcion2pregunta7.disabled = true;
      opcion3pregunta7.disabled = true;
      puntos-=0.5;
      console.log(puntos);
      document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
  })
  
  opcion3pregunta7.addEventListener("click",function(){
      opcion1pregunta7.style.backgroundColor = 'green';
      opcion3pregunta7.style.backgroundColor='red';
      opcion1pregunta7.disabled = true;
      opcion2pregunta7.disabled = true;
      opcion3pregunta7.disabled = true;
      puntos-=0.5;
      console.log(puntos);
      document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
  })
  
  //pregunta8
  const opcion1pregunta8 = document.getElementById("opcion1p8");
  const opcion2pregunta8 = document.getElementById("opcion2p8");
  const opcion3pregunta8 = document.getElementById("opcion3p8");
  
  opcion1pregunta8.addEventListener("click",function(){
      opcion1pregunta8.style.backgroundColor = 'red';
      opcion2pregunta8.style.backgroundColor = 'green';
      opcion1pregunta8.disabled = true;
      opcion2pregunta8.disabled = true;
      opcion3pregunta8.disabled = true;
      puntos-=0.5;
      console.log(puntos);
      document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
  })
  
  opcion2pregunta8.addEventListener("click",function(){
      opcion2pregunta8.style.backgroundColor = 'green';
      opcion1pregunta8.disabled = true;
      opcion2pregunta8.disabled = true;
      opcion3pregunta8.disabled = true;
      puntos+=1;
      console.log(puntos);
      document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
  })
  opcion3pregunta8.addEventListener("click",function(){
      opcion3pregunta8.style.backgroundColor = 'red';
      opcion2pregunta8.style.backgroundColor = 'green';
      opcion1pregunta8.disabled = true;
      opcion2pregunta8.disabled = true;
      opcion3pregunta8.disabled = true;
      puntos-=0.5;
      console.log(puntos);
      document.getElementById("puntos").innerHTML = "<strong>Puntos= </strong><strong>"+ puntos + "</strong>";
  })
  
  //boton de finalizar
  
  const finalizar = document.getElementById("finalizar");
      finalizar.addEventListener("click", function(){
          clearInterval(actualizador);
          opcion1pregunta1.disabled = true;
          opcion2pregunta1.disabled = true;
          opcion3pregunta1.disabled = true;
          opcion1pregunta2.disabled = true;
          opcion2pregunta2.disabled = true;
          opcion3pregunta2.disabled = true;
          opcion1pregunta3.disabled = true;
          opcion2pregunta3.disabled = true;
          opcion3pregunta3.disabled = true;
          opcion1pregunta4.disabled = true;
          opcion2pregunta4.disabled = true;
          opcion3pregunta4.disabled = true;
          opcion1pregunta5.disabled = true;
          opcion2pregunta5.disabled = true;
          opcion3pregunta5.disabled = true;
          opcion1pregunta6.disabled = true;
          opcion2pregunta6.disabled = true;
          opcion3pregunta6.disabled = true;
          opcion1pregunta7.disabled = true;
          opcion2pregunta7.disabled = true;
          opcion3pregunta7.disabled = true;
          opcion1pregunta8.disabled = true;
          opcion2pregunta8.disabled = true;
          opcion3pregunta8.disabled = true;
  
          opcion2pregunta1.style.backgroundColor = 'green';
          opcion3pregunta2.style.backgroundColor = 'green';
          opcion1pregunta3.style.backgroundColor = 'green';
          opcion2pregunta4.style.backgroundColor = 'green';
          opcion1pregunta5.style.backgroundColor = 'green';
          opcion3pregunta6.style.backgroundColor = 'green';
          opcion1pregunta7.style.backgroundColor = 'green';
          opcion2pregunta8.style.backgroundColor = 'green';
          alert("Puntos="+ puntos);
      })
  