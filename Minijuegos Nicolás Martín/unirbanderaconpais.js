
function allowDrop(ev) {
    ev.preventDefault();
    }

    function drag(ev){
        ev.dataTransfer.setData("text", ev.target.id);
        
    }
    function drop(ev){
        ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            var draggedElement = document.getElementById(data);
            var cajapais = ev.target.getAttribute('class');
            
            var puntosElement = document.getElementById("puntos");
            var puntos = parseInt(puntosElement.textContent.replace(/\D/g, '')) || 0; 
            
            if (draggedElement.id === cajapais) {
                ev.target.appendChild(draggedElement);
                puntos+=1;
                puntosElement.innerHTML = "<strong>Puntos= </strong><strong>" + puntos + "</strong>";
            } else {
                alert("mal");
            }
            }
