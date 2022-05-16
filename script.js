/*Autors: Annija Karitone, ak21368 */
window.onload = function(){ 
// to open more information about drivers
    //data about drivers
    var data = [
        {   
            "Name": "Charles Leclerc",
            "Age":"24",
            "Nationality": "Monaco Monégasque",
            "Car number":	"16",
            "Entries": "81",
            "Wins": "2",
            "Podiums": "13", 
            "Career points": "560",
            "Pole positions": "9", 
            "Fastest laps": "4", 
            "2021 position":"7th (159 pts)"
        },
        {
            "Name": "Carlos Sainz",
            "Age":"27",
            "Nationality": "Spanish",
            "Car number":	"55",
            "Entries": "141",
            "Wins": "0",
            "Podiums": "6", 
            "Career points": "536.5",
            "Pole positions": "0", 
            "Fastest laps": "1", 
            "2021 position":"5th (164.5 pts)"
        }
    ]

    //to add information about Leclerc
    var infoLeclerc = document.createElement("div"); 
    infoLeclerc.setAttribute("class", "information");
    var hideLeclerc = document.createElement("button"); 
    hideLeclerc.appendChild(document.createTextNode("Hide information"));

    document.getElementById("showLeclerc").onclick = function(){ 
        document.getElementById("driver-text-leclerc").style.display = 'none';
        infoLeclerc.innerHTML=""; 
        for(let elem in data[0]){ 
            let line = document.createElement("p"); 
            line.appendChild(document.createTextNode(elem + ": "+ data[0][elem]));
            infoLeclerc.appendChild(line); 
        }
        infoLeclerc.appendChild(hideLeclerc); 
        document.getElementById("Leclerc-info").appendChild(infoLeclerc); 
    }
    //to hide information about Leclerc
    hideLeclerc.onclick = function(){ 
        infoLeclerc.remove(); 
        document.getElementById("driver-text-leclerc").style.display = 'block';
    }
    //to add information about Sainz
    var infoSainz = document.createElement("div"); 
    infoSainz.setAttribute("class", "information");
    var hideSainz = document.createElement("button"); 
    hideSainz.appendChild(document.createTextNode("Hide information"));

     document.getElementById("showSainz").onclick = function(){ 
        document.getElementById("driver-text-sainz").style.display = 'none';
        infoSainz.innerHTML="";
        for(let elem in data[1]){ 
            let line = document.createElement("p"); 
            line.appendChild(document.createTextNode(elem + ": "+ data[1][elem]));
            infoSainz.appendChild(line); 
        }
        infoSainz.appendChild(hideSainz); 
        document.getElementById("Sainz-info").appendChild(infoSainz); 
    }
    //to hide information about Sainz
    hideSainz.onclick = function(){ 
        infoSainz.remove(); 
        document.getElementById("driver-text-sainz").style.display = 'block';
    }


//to validate user input
    document.getElementsByTagName("form")[0].onsubmit = function(){ 
        
        var name = $("#form-name").val();
        var place = $("#form-place").val(); 
        var errors = 0; 

        if(name == ""){ 
            $("#nameInput").html("This field is required");
            errors++; 
        }
        else{ 
            $("#nameInput").empty();
        }

        if( place == ""){ 
            $("#placeInput").html("This field is required");
            errors++;  
        }
        else if(!Number.isInteger(Number(place))&&place!=""){ 
            $("#placeInput").html("A number is required");
            errors++; 
        }
        else if(!(place>=1 && place<=10)){ 
            $("#placeInput").html("A number should be in interval 1-10"); 
            errors++;
        }
        else { 
            $("#placeInput").empty();
        }
        return errors==0; 
    }

//to show more information about race 
    //data about races
    var raceData = [
        {
            "country": "Bahrain", 
            "date": "20 March", 
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/bahrain-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "Saudi-Arabian", 
            "date":"27 March",
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/saudi-arabian-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "Australian", 
            "date":"10 April",
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/brazilian-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "Emilia-Romagna", 
            "date":"24 April",
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/imola-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "Miami", 
            "date":"8 May",
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/united-states-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "Spanish", 
            "date":"22 May",
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/spanish-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "Monaco", 
            "date":"29 May",
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/monaco-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "Azerbaijan", 
            "date":"12 June",
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/azerbaijan-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "Canadian", 
            "date":"19 June",
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/brazilian-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "British", 
            "date":"3 July",
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/british-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "Austrian", 
            "date": "10 July", 
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/austrian-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "French", 
            "date": "24 July", 
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/french-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "Hungarian", 
            "date": "31 July", 
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/hungarian-grand-prix/map_0.svg?v=1.39.0"
        },
        {
            "country": "Belgian", 
            "date": "28 August", 
            "map": "https://addons-redbullracing-com2020.redbull.com/b3993c8955aad441ec69/assets/races/belgian-grand-prix/map_0.svg?v=1.39.0"
        }

    ]
    //function to show data about race
     function RaceInfo(country){
        $("#maps").empty(); 
        for(let elem in raceData){
            if(raceData[elem]["country"]==country){ 
                $("#maps").append($("<h3></h3>").text(country+ " Grand Prix")); 
                $("#maps").append($("<h3></h3>").text("Date of the race: "+ raceData[elem]["date"])); 
                var img = document.createElement("IMG");
                img.src = raceData[elem]["map"];
                img.alt = country+ " Grand Prix race map"; 
                $('#maps').append(img); 
                break;
            }
        }
    }
    //to show first race info onload 
    var countryOnLoad = raceData[0]["country"]; 
    RaceInfo(countryOnLoad); 
    $("#"+countryOnLoad).css("color", "yellow");
    
    //to show race info onmouseenter
    $("#section-races li").mouseenter(function(){
        var country = this.id; 
        if(country!=countryOnLoad) $("#"+countryOnLoad).css("color", "white");
        RaceInfo(country); 

    });
    //to show first race info onmouseleave
    $("#section-races li").mouseleave(function(){
        RaceInfo(countryOnLoad);
        $("#"+countryOnLoad).css("color", "yellow");
    })

};





