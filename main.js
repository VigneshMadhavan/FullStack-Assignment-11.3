function showAttributes(){
    //get the div has id attrs 
    var attrs = document.getElementById("attrs");
    //get all the Anchor tag 
    var allAnchor = document.getElementsByTagName("a");
    //result to store all attribute name and 
    var result="";

    for(var i=0;i<allAnchor.length;i++){
        var currentAnchor=allAnchor[i];
        //get each Anchor tag Attibutes
        var attributes = currentAnchor.attributes;
        result+=`There are ${attributes.length} attributes for Anchor at ${i}, they are:</br>`;
       //get each Attribute tag name and value
        for (var j=0;j<attributes.length;j++){
            result+=`<span class="name">${attributes[j].name}</span> : <span class="value">${attributes[j].value}</span> </br>`;
        }
        
        result+=`</br>`;
    }

    attrs.innerHTML=result;
}

function clearResult(){

    //get the div has id attrs 
    var attrs = document.getElementById("attrs");
    attrs.innerHTML="";
    
}