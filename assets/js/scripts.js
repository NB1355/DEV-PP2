
this.document.getElementById("x1-button").style.display = "block";

document.getElementById("x1-button").addEventListener("click", function (testStatus) {
    console.log(testStatus);
    testStart();
});






addEventListener("click", function () {

    if (document.getElementById('x1-radio').checked == true) {
        this.document.getElementById("x2-button").style.display = "none";
    } else {
        this.document.getElementById("x2-button").style.display = "block";
    }
});



function testStart() {
    console.log("finction is working!!!!");
    this.document.getElementById("x1-button").style.display = "none";
    let testStatus = "runnning"; 
  
    this.document.getElementById("x2-button").style.display = "none";   
     
}