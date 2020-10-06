var dropDownData={
    "Australia": {
        "New South Wales": ['Sydney','Newcastle','Central Coast','Wollongong'],
        "Queensland": ['Brisbane','Gold Coast','Townsville','Thuringowa'],
        "South Australia": ['Adelaide','Gawler','Mount Gambier','Whyalla'],
        "Victoria": ['Melbourne','Geelong','Ballarat','Mildura'],
        "Western Australia": ['Perth','Rockingham','Mandurah','Bunbury']
    },
    "China": {
        "Shanghai": ['Hangzhou','Suzhou','Wuxi','Nanjing'],
        "Beijing": ['Dongcheng','Chaoyang','Haidian','Fengtai'],
        "Tianjin": ['Baodi','Hangu','Jinghai','Jizhou']
    },
    "Germany": {
        "Berlin": ['Hamburg','München','Frankfurt','Dortmund'],
        "Bremen": ['Bremen','Bremerhaven','Griesheim','Idstein'],
        "Hessen": ['Wiesbaden','Kassel','Darmstadt','Marburg'],
        "Brandenburg": ['Fulda','Limburg','Maintal','Langen'],
        "Sachsen": ['Viernheim','Dietzenbach','Taunusstein','Rödermark']
    },
    "India": {
        "Andra Pradesh": ['Amaravati','Kakinada','Hyderabad','Vishakapatnam','Vijayawada'],
        "Kerala": ['Alappuzha','Kochi','Kollam','Kozhikode','Thiruvananthapuram'],
        "Karnataka": ['Bangalore','Hubli','Mangalore','Mysore'],
        "Maharastra": ['Mumbai','Pune','Nagpur','Aurangabad','Solapur'],
        "Tamil Nadu": ['Coimbatore','Chennai','Madurai','Salem','Nilgiris']
    },
    "USA": {
        "Alaska": ['Anchorage','Juneau','Fairbanks','Ketchikan'],
        "California": ['Los Angeles','San Francisco','San Diego','Malibu'],
        "Hawaii": ['Honolulu','Hilo','Kailua','Haleiwa'],
        "New Jersey": ['Atlantic City','New York','Trenton','Princeton'],
        "Washington": ['Seattle','Olympia','Everett','Yakima']
    }
};

window.onload=function() {
    var countrySelect=document.getElementById('countrySel');
    var stateSelect=document.getElementById('stateSel');
    var citySelect=document.getElementById('citySel');

    for(var country in dropDownData) {
        countrySelect.options[countrySelect.options.length] = new Option(country,country);
    }

    countrySelect.onchange=function() {
        stateSelect.length=1;
        citySelect.length=1;

        if(this.selectedIndex < 1) {
            return;
        }

        for(var state in dropDownData[this.value]) {
            stateSelect.options[stateSelect.options.length]=new Option(state, state);
        }
    }

    stateSelect.onchange=function() {
        citySelect.length=1;
        if(this.selectedIndex<1) {
            return;
        }
        var city=dropDownData[countrySelect.value][this.value];
        for(var i=0;i<city.length;i++) {
            citySelect.options[citySelect.options.length]=new Option(city[i], city[i]);
        }
    }
}