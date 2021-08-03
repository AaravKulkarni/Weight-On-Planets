function calculate(){
    var Earth= document.getElementById("Weight").value;
    var Mercury= 0.38*document.getElementById("Weight").value;
    var Venus= 0.91*document.getElementById("Weight").value;
    var Mars= 0.38*document.getElementById("Weight").value;
    var Jupiter= 2.34*document.getElementById("Weight").value;
    var Saturn= 1.06*document.getElementById("Weight").value;
    var Uranus= 0.92*document.getElementById("Weight").value;
    var Neptune= 1.19*document.getElementById("Weight").value;
    var Pluto=  0.06*document.getElementById("Weight").value;
    console.log(Mercury);
    console.log(Venus);
    console.log(Earth);
    console.log(Mars);
    console.log(Jupiter);
    console.log(Saturn);
    console.log(Uranus);
    console.log(Neptune);
    console.log(Pluto);
    document.getElementById("earth").innerHTML="Weight on Earth is "+Earth+" kg";
    document.getElementById("mercury").innerHTML="Weight on Mercury is "+Mercury+" kg";
    document.getElementById("venus").innerHTML="Weight on Venus is "+Venus+" kg";
    document.getElementById("mars").innerHTML="Weight on Mars is "+Mars+" kg";
    document.getElementById("jupiter").innerHTML="Weight on Jupiter is "+Jupiter+" kg";
    document.getElementById("staurn").innerHTML="Weight on Saturn is "+Saturn+" kg";
    document.getElementById("uranus").innerHTML="Weight on Uranus is "+Uranus+" kg";
    document.getElementById("neptune").innerHTML="Weight on Neptune is "+Neptune+" kg";
    document.getElementById("pluto").innerHTML="Weight on Pluto is "+Pluto+" kg";
}