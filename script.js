function display(data){

    document.getElementById("take").value += data

}

function clearScreen(){

    document.getElementById("take").value = ""

}


function solve(){

  let x =  document.getElementById("take").value 
  let y = eval(x);

  document.getElementById("take").value = y ;


}


function solvev(){

    let x =  document.getElementById("take").value;
    let y = eval(x)
    let z = y / 100;
  
    document.getElementById("take").value = z ;
  
  
}