// Countdown starts
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