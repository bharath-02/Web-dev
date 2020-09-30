
var Timer; 
var TotalSeconds;

function CreateTimer(id) { 
    
    Timer = document.getElementById(id); 
    TotalSeconds = 10; 
    Update(); 
    window.setTimeout(change, 1000); 
}

function change() {
        if (TotalSeconds <= 0) {
            Timer.innerHTML='Happy New Year'; 
            return; 
        } 
        TotalSeconds -= 1; 
        Update();
        window.setTimeout(change, 1000); 
}

function Update() { 
    Timer.innerHTML = TotalSeconds; 
}

CreateTimer('countdown');
