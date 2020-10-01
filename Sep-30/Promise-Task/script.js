// Creeating Promise
function promise() {
    return new Promise(function(resolve, reject) {
        //  Creating an XMLHTTPRequest
        var request=new XMLHttpRequest();
        //  Getting the data from rest API
        request.open('GET','https://restcountries.eu/rest/v2/all',true);
        request.onload=function() {
            //  Checking whether the promise is resolved or rejected
            if(this.status>=200 && this.status<300) {
                var result=JSON.parse(this.response);
                resolve(result);
            }
            else {
                reject(this.statusText);
            }
        }
        request.send();
    })
}

// Calling promise 
promise()
.then(function(data) {
    //  Looping through all the Countries
    for(var i=0;i<data.length;i++) {
        //  Setting the necessary details
        var countryName=data[i].name;
        var capital=data[i].capital;
        var flag=data[i].flag;
        var latlng=data[i].latlng;
        var region=data[i].region;
        var currencyCode=data[i].currencies[0].name;
        var currencySymbol=data[i].currencies[0].code;
        //  Creating the card
        var outerDiv=document.createElement('div');
        outerDiv.setAttribute('class','col-xs-6');
        var card=document.createElement('div');
        card.setAttribute('class','card');
        var cardBody=document.createElement('div')
        cardBody.setAttribute('class','card-body');
        //  Card title
        var cName=document.createElement('h4');
        cName.setAttribute('class','card-title text-center');
        cName.innerHTML=countryName;
        var key=['Capital','Region','Flag','Latlng','Currency-Code','Currrency-Symbol'];
        var value=[capital,region,flag,latlng,currencyCode,currencySymbol];
        var detail=setValues(key,value);
        //  Appending the results
        document.getElementById('details').append(outerDiv);
        outerDiv.append(card);
        card.append(cardBody);
        cardBody.append(cName,detail);
    }
})
.catch(function(error) {
    console.log(error);
})


function setValues(key,value) {
    var div=document.createElement('div');
    div.setAttribute('class','row');
    for(var i=0;i<key.length;i++) {
        var div1=document.createElement('div');
        div1.setAttribute('class','col-sm-6');
        div1.innerHTML=key[i];
        if(i==2) {
            var div2=document.createElement('div');
            div2.setAttribute('class','col-sm-6');
            var a=document.createElement('a');
            a.setAttribute('href',value[i]);
            a.setAttribute('target','_blank');
            a.innerHTML=value[i];
            div2.append(a);
        }
        else {
            var div2=document.createElement('div');
            div2.setAttribute('class','col-sm-6');
            div2.innerHTML=value[i];
        }
        div.append(div1,div2);
    } 
    return div;
}   