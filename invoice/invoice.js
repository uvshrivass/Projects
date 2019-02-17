// SCript for Project: Invoice. It has total four functions: additem(): to add rows, calculate(): to calculate total price for an item
// caltotal(): to calculate total price and removeitem(): to remove rows.

// Start of the script.

var table = document.getElementById('tab');
var tablebody = document.getElementById('tbody')
var row =   document.createElement('tr');
tablebody.addEventListener('click', removeitem);

// This function will add rows.
function additem(){

    var row =   document.createElement('tr');
    var deletebtn = document.createElement('button');
    deletebtn.setAttribute("class","rr");
    deletebtn.appendChild(document.createTextNode('X'));
    deletebtn.setAttribute("contenteditable", "false");


    for (var i=0; i<=4; i++) {
        var cell = document.createElement('td');
        row.appendChild(cell);
    }

    row.children[0].appendChild(deletebtn);
    row.setAttribute("class", "r");

    for (var x= 0; x<4; x++){
        row.children[x].setAttribute("contenteditable", "true");
    }

    tablebody.appendChild(row);
    table.appendChild(tablebody);

}

// This function will calculate total price for an item.
function calculate(){
    
    for (var j=1; j < tablebody.children.length; j++){
        var dd = parseInt(tablebody.children[j].children[2].textContent)
        var ee = parseInt(tablebody.children[j].children[3].textContent)
        var ff = dd * ee;
        tablebody.children[j].children[4].textContent = ff;
    }

}

// This function will calculate total price.
function caltotal(){
    var total = 0;

    for (var k = 1; k<tablebody.children.length; k++){
        var gg = parseInt(tablebody.children[k].children[4].textContent);
        total += gg;
    }
    document.getElementById('ans').textContent = "Your total is: INR "+ total;

}

// This function will remove rows.
function removeitem(e){
    var tablebody = document.getElementById('tbody')
        if (e.target.classList.contains('rr')){
            if(confirm('You sure want to delete this item?')){
                var rowtobedeleted = e.target.parentElement.parentElement
                tablebody.removeChild(rowtobedeleted);
            }
        }
}


function printpdf(){
    window.print()
}

// End of the script.