
// var Timer; 
// var TotalSeconds;

// function CreateTimer(id) { 
    
//     Timer = document.getElementById(id); 
//     TotalSeconds = 10; 
//     Update(); 
//     window.setTimeout(change, 1000); 
// }

// function change() {
//         if (TotalSeconds <= 0) {
//             Timer.innerHTML='Happy New Year'; 
//             return; 
//         } 
//         TotalSeconds -= 1; 
//         Update();
//         window.setTimeout(change, 1000); 
// }

// function Update() { 
//     Timer.innerHTML = TotalSeconds; 
// }

// CreateTimer('countdown');
setTimeout(()=>{
    document.getElementById('countdown').innerHTML = 10;
    setTimeout(()=>{
        document.getElementById('countdown').innerHTML = 9;
        setTimeout(()=>{
            document.getElementById('countdown').innerHTML = 8;
            setTimeout(()=>{
                document.getElementById('countdown').innerHTML = 7;
                setTimeout(()=>{
                    document.getElementById('countdown').innerHTML = 6;
                    setTimeout(()=>{
                        document.getElementById('countdown').innerHTML = 5;
                        setTimeout(()=>{
                            document.getElementById('countdown').innerHTML=4;
                            setTimeout(()=>{
                                document.getElementById('countdown').innerHTML=3;
                                setTimeout(()=>{
                                    document.getElementById('countdown').innerHTML = 2;
                                    setTimeout(()=>{
                                        document.getElementById('countdown').innerHTML = 1;
                                        setTimeout(()=>{
                                            document.getElementById('countdown').innerHTML = 'Happy New Year';
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},0)