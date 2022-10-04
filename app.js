$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

//login btn
var modal = document.getElementById('login');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* Calculate */
//sum income
$(".Jan").on("input", function(){
    var tui1= document.getElementById("tui1").value;
    var co1= document.getElementById("co1").value;
    var other1= document.getElementById("other1").value;
    tui1= parseFloat(tui1);
    co1= parseFloat(co1);
    other1= parseFloat(other1);
 
    document.getElementById("sum1").value = tui1+ co1+ other1;
 
    var sa1= document.getElementById("sa1").value;
    var pa1= document.getElementById("pa1").value;
    var ot1= document.getElementById("ot1").value;
    sa1= parseFloat(sa1);
    pa1= parseFloat(pa1);
    ot1= parseFloat(ot1);
 
    document.getElementById("inSum1").value = sa1 + pa1 + ot1;
})
 
$(".Feb").on("input", function(){
    var tui2 = document.getElementById("tui2").value;
    var co2 = document.getElementById("co2").value;
    var other2 = document.getElementById("other2").value;
    tui2 = parseFloat(tui2);
    co2 = parseFloat(co2);
    other2 = parseFloat(other2);
 
    document.getElementById("sum2").value = tui2 + co2 + other2;
 
    var sa2= document.getElementById("sa2").value;
    var pa2= document.getElementById("pa2").value;
    var ot2= document.getElementById("ot2").value;
    sa2= parseFloat(sa2);
    pa2= parseFloat(pa2);
    ot2= parseFloat(ot2);
 
    document.getElementById("inSum2").value = sa2 + pa2 + ot2;
})
 
$(".Mar").on("input", function(){
    var tui3 = document.getElementById("tui3").value;
    var co3 = document.getElementById("co3").value;
    var other3 = document.getElementById("other3").value;
    tui3 = parseFloat(tui3);
    co3 = parseFloat(co3);
    other3 = parseFloat(other3);
 
    document.getElementById("sum3").value = tui3 + co3 + other3;
 
    var sa3= document.getElementById("sa3").value;
    var pa3= document.getElementById("pa3").value;
    var ot3= document.getElementById("ot3").value;
    sa3= parseFloat(sa3);
    pa3= parseFloat(pa3);
    ot3= parseFloat(ot3);
 
    document.getElementById("inSum3").value = sa3 + pa3 + ot3;
})
 
$(".Apr").on("input", function(){
    var tui4 = document.getElementById("tui4").value;
    var co4 = document.getElementById("co4").value;
    var other4 = document.getElementById("other4").value;
    tui4 = parseFloat(tui4);
    co4 = parseFloat(co4);
    other4 = parseFloat(other4);
 
    document.getElementById("sum4").value = tui4 + co4 + other4;
 
    var sa4= document.getElementById("sa4").value;
    var pa4= document.getElementById("pa4").value;
    var ot4= document.getElementById("ot4").value;
    sa4= parseFloat(sa4);
    pa4= parseFloat(pa4);
    ot4= parseFloat(ot4);
 
    document.getElementById("inSum4").value = sa4 + pa4 + ot4;
})
 
$(".May").on("input", function(){
    var tui5 = document.getElementById("tui5").value;
    var co5 = document.getElementById("co5").value;
    var other5 = document.getElementById("other5").value;
    tui5 = parseFloat(tui5);
    co5 = parseFloat(co5);
    other5 = parseFloat(other5);
 
    document.getElementById("sum5").value = tui5 + co5 + other5;
 
    var sa5= document.getElementById("sa5").value;
    var pa5= document.getElementById("pa5").value;
    var ot5= document.getElementById("ot5").value;
    sa5= parseFloat(sa5);
    pa5= parseFloat(pa5);
    ot5= parseFloat(ot5);
 
    document.getElementById("inSum5").value = sa5 + pa5 + ot5;
})
 
$(".Jun").on("input", function(){
    var tui6= document.getElementById("tui6").value;
    var co6= document.getElementById("co6").value;
    var other6= document.getElementById("other6").value;
    tui6= parseFloat(tui6);
    co6= parseFloat(co6);
    other6= parseFloat(other6);
 
    document.getElementById("sum6").value = tui6+ co6+ other6;
   
    var sa6= document.getElementById("sa6").value;
    var pa6= document.getElementById("pa6").value;
    var ot6= document.getElementById("ot6").value;
    sa6= parseFloat(sa6);
    pa6= parseFloat(pa6);
    ot6= parseFloat(ot6);
 
    document.getElementById("inSum6").value = sa6 + pa6 + ot6;
})
 
$(".Jul").on("input", function(){
    var tui7 = document.getElementById("tui7").value;
    var co7 = document.getElementById("co7").value;
    var other7 = document.getElementById("other7").value;
    tui7 = parseFloat(tui7);
    co7 = parseFloat(co7);
    other7 = parseFloat(other7);
 
    document.getElementById("sum7").value = tui7 + co7 + other7;
 
    var sa7= document.getElementById("sa7").value;
    var pa7= document.getElementById("pa7").value;
    var ot7= document.getElementById("ot7").value;
    sa7= parseFloat(sa7);
    pa7= parseFloat(pa7);
    ot7= parseFloat(ot7);
 
    document.getElementById("inSum7").value = sa7 + pa7 + ot7;
})
 
$(".Aug").on("input", function(){
    var tui8= document.getElementById("tui8").value;
    var co8= document.getElementById("co8").value;
    var other8= document.getElementById("other8").value;
    tui8= parseFloat(tui8);
    co8= parseFloat(co8);
    other8= parseFloat(other8);
 
    document.getElementById("sum8").value = tui8+ co8+ other8;
 
    var sa8= document.getElementById("sa8").value;
    var pa8= document.getElementById("pa8").value;
    var ot8= document.getElementById("ot8").value;
    sa8= parseFloat(sa8);
    pa8= parseFloat(pa8);
    ot8= parseFloat(ot8);
 
    document.getElementById("inSum8").value = sa8 + pa8 + ot8;
})
 
$(".Sep").on("input", function(){
    var tui9 = document.getElementById("tui9").value;
    var co9 = document.getElementById("co9").value;
    var other9 = document.getElementById("other9").value;
    tui9 = parseFloat(tui9);
    co9 = parseFloat(co9);
    other9 = parseFloat(other9);
 
    document.getElementById("sum9").value = tui9+ co9 + other9;
 
    var sa9= document.getElementById("sa9").value;
    var pa9= document.getElementById("pa9").value;
    var ot9= document.getElementById("ot9").value;
    sa9= parseFloat(sa9);
    pa9= parseFloat(pa9);
    ot9= parseFloat(ot9);
 
    document.getElementById("inSum9").value = sa9 + pa9 + ot9;
})
 
$(".Oct").on("input", function(){
    var tui10 = document.getElementById("tui10").value;
    var co10 = document.getElementById("co10").value;
    var other10 = document.getElementById("other10").value;
    tui10 = parseFloat(tui10);
    co10 = parseFloat(co10);
    other10 = parseFloat(other10);
 
    document.getElementById("sum10").value = tui10 + co10 + other10;
   
    var sa10= document.getElementById("sa10").value;
    var pa10= document.getElementById("pa10").value;
    var ot10= document.getElementById("ot10").value;
    sa10= parseFloat(sa10);
    pa10= parseFloat(pa10);
    ot10= parseFloat(ot10);
 
    document.getElementById("inSum10").value = sa10 + pa10 + ot10;
})
 
$(".Nov").on("input", function(){
    var tui11= document.getElementById("tui11").value;
    var co11= document.getElementById("co11").value;
    var other11= document.getElementById("other11").value;
    tui11= parseFloat(tui11);
    co11= parseFloat(co11);
    other11= parseFloat(other11);
 
    document.getElementById("sum11").value = tui11+ co11+ other11;
 
    var sa11= document.getElementById("sa11").value;
    var pa11= document.getElementById("pa11").value;
    var ot11= document.getElementById("ot11").value;
    sa11= parseFloat(sa11);
    pa11= parseFloat(pa11);
    ot11= parseFloat(ot11);
 
    document.getElementById("inSum11").value = sa11 + pa11 + ot11;
})
 
$(".Dec").on("input", function(){
    var tui12= document.getElementById("tui12").value;
    var co12= document.getElementById("co12").value;
    var other12= document.getElementById("other12").value;
    tui12= parseFloat(tui12);
    co12= parseFloat(co12);
    other12= parseFloat(other12);
 
    document.getElementById("sum12").value = tui12+ co12+ other12;
 
    var sa12= document.getElementById("sa12").value;
    var pa12= document.getElementById("pa12").value;
    var ot12= document.getElementById("ot12").value;
    sa12= parseFloat(sa12);
    pa12= parseFloat(pa12);
    ot12= parseFloat(ot12);
 
    document.getElementById("inSum12").value = sa12 + pa12 + ot12;
})
 
//sum expense
 
$(".Feb").on("input", function(){
    var tui2 = document.getElementById("tui2").value;
    var co2 = document.getElementById("co2").value;
    var other2 = document.getElementById("other2").value;
    tui2 = parseFloat(tui2);
    co2 = parseFloat(co2);
    other2 = parseFloat(other2);
 
    document.getElementById("sum2").value = tui2 + co2 + other2;
})
 
$(".Mar").on("input", function(){
    var tui3 = document.getElementById("tui3").value;
    var co3 = document.getElementById("co3").value;
    var other3 = document.getElementById("other3").value;
    tui3 = parseFloat(tui3);
    co3 = parseFloat(co3);
    other3 = parseFloat(other3);
 
    document.getElementById("sum3").value = tui3 + co3 + other3;
})
 
$(".Apr").on("input", function(){
    var tui4 = document.getElementById("tui4").value;
    var co4 = document.getElementById("co4").value;
    var other4 = document.getElementById("other4").value;
    tui4 = parseFloat(tui4);
    co4 = parseFloat(co4);
    other4 = parseFloat(other4);
 
    document.getElementById("sum4").value = tui4 + co4 + other4;
})
 
$(".May").on("input", function(){
    var tui5 = document.getElementById("tui5").value;
    var co5 = document.getElementById("co5").value;
    var other5 = document.getElementById("other5").value;
    tui5 = parseFloat(tui5);
    co5 = parseFloat(co5);
    other5 = parseFloat(other5);
 
    document.getElementById("sum5").value = tui5 + co5 + other5;
})
 
$(".Jun").on("input", function(){
    var tui6= document.getElementById("tui6").value;
    var co6= document.getElementById("co6").value;
    var other6= document.getElementById("other6").value;
    tui6= parseFloat(tui6);
    co6= parseFloat(co6);
    other6= parseFloat(other6);
 
    document.getElementById("sum6").value = tui6+ co6+ other6;
})
 
$(".Jul").on("input", function(){
    var tui7 = document.getElementById("tui7").value;
    var co7 = document.getElementById("co7").value;
    var other7 = document.getElementById("other7").value;
    tui7 = parseFloat(tui7);
    co7 = parseFloat(co7);
    other7 = parseFloat(other7);
 
    document.getElementById("sum7").value = tui7 + co7 + other7;
})
 
$(".Aug").on("input", function(){
    var tui8= document.getElementById("tui8").value;
    var co8= document.getElementById("co8").value;
    var other8= document.getElementById("other8").value;
    tui8= parseFloat(tui8);
    co8= parseFloat(co8);
    other8= parseFloat(other8);
 
    document.getElementById("sum8").value = tui8+ co8+ other8;
})
 
$(".Sep").on("input", function(){
    var tui9 = document.getElementById("tui9").value;
    var co9 = document.getElementById("co9").value;
    var other9 = document.getElementById("other9").value;
    tui9 = parseFloat(tui9);
    co9 = parseFloat(co9);
    other9 = parseFloat(other9);
 
    document.getElementById("sum9").value = tui9+ co9 + other9;
})
 
$(".Oct").on("input", function(){
    var tui10 = document.getElementById("tui10").value;
    var co10 = document.getElementById("co10").value;
    var other10 = document.getElementById("other10").value;
    tui10 = parseFloat(tui10);
    co10 = parseFloat(co10);
    other10 = parseFloat(other10);
 
    document.getElementById("sum10").value = tui10 + co10 + other10;
})
 
$(".Nov").on("input", function(){
    var tui11= document.getElementById("tui11").value;
    var co11= document.getElementById("co11").value;
    var other11= document.getElementById("other11").value;
    tui11= parseFloat(tui11);
    co11= parseFloat(co11);
    other11= parseFloat(other11);
 
    document.getElementById("sum11").value = tui11+ co11+ other11;
})
 
$(".Dec").on("input", function(){
    var tui12= document.getElementById("tui12").value;
    var co12= document.getElementById("co12").value;
    var other12= document.getElementById("other12").value;
    tui12= parseFloat(tui12);
    co12= parseFloat(co12);
    other12= parseFloat(other12);
 
    document.getElementById("sum12").value = tui12+ co12+ other12;
})

//Charting
var Jan = document.getElementById('in1');
var Feb = document.getElementById('in2');
var Mar = document.getElementById('in3');
var Apr = document.getElementById('in4');
var May = document.getElementById('in5');
var Jun = document.getElementById('in6');
var Jul = document.getElementById('in7');
var Aug = document.getElementById('in8');
var Sep = document.getElementById('in9');
var Oct = document.getElementById('in10');
var Nov = document.getElementById('in11');
var Dec = document.getElementById('in12');


var Jan1 = document.getElementById('ex1');
var Feb1 = document.getElementById('ex2');
var Mar1 = document.getElementById('ex3');
var Apr1 = document.getElementById('ex4');
var May1 = document.getElementById('ex5');
var Jun1 = document.getElementById('ex6');
var Jul1 = document.getElementById('ex7');
var Aug1 = document.getElementById('ex8');
var Sep1 = document.getElementById('ex9');
var Oct1 = document.getElementById('ex10');
var Nov1 = document.getElementById('ex11');
var Dec1 = document.getElementById('ex12');



const ctx_income = document.getElementById('Income_chart').getContext('2d');
const myChart_income = new Chart(ctx_income, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Income',
            data: [Jan.value, Feb.value, Mar.value, Apr.value, May.value, Jun.value, Jul.value, Aug.value, Sep.value, Oct.value, Nov.value, Dec.value],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(113, 104, 237, 0.2)',
                'rgba(153, 193, 257, 0.2)',
                'rgba(201, 137, 110, 0.2)',
                'rgba(76, 9, 17, 0.2)',
                'rgba(12, 15, 11, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgba(113, 104, 237)',
                'rgba(153, 193, 257)',
                'rgba(201, 137, 110)',
                'rgba(76, 9, 17)',
                'rgba(12, 15, 11)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }       
    }
});

function updateChart(){
    var UpdateValues = [Jan.value, Feb.value, Mar.value, Apr.value, May.value, Jun.value, Jul.value, Aug.value, Sep.value, Oct.value, Nov.value, Dec.value];
    myChart_income.data.datasets[0].data = UpdateValues;
    myChart_income.update();
}

const ctx_expense = document.getElementById('Expense_chart').getContext('2d');
const myChart_expense = new Chart(ctx_expense, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Expense',
            data: [Jan1.value, Feb1.value, Mar1.value, Apr1.value, May1.value, Jun1.value, Jul1.value, Aug1.value, Sep1.value, Oct1.value, Nov1.value, Dec1.value],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(113, 104, 237, 0.2)',
                'rgba(153, 193, 257, 0.2)',
                'rgba(201, 137, 110, 0.2)',
                'rgba(76, 9, 17, 0.2)',
                'rgba(12, 15, 11, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgba(113, 104, 237)',
                'rgba(153, 193, 257)',
                'rgba(201, 137, 110)',
                'rgba(76, 9, 17)',
                'rgba(12, 15, 11)',
            ],   
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }      
    }
});

//Progress
function updateChart1(){
    var UpdateValues = [Jan1.value, Feb1.value, Mar1.value, Apr1.value, May1.value, Jun1.value, Jul1.value, Aug1.value, Sep1.value, Oct1.value, Nov1.value, Dec1.value];
    myChart_expense.data.datasets[0].data = UpdateValues;
    myChart_expense.update();
}


const progress = document.querySelector(".progress-done");
const expense = document.querySelector(".expense");
const income = document.querySelector(".income");
const goal = document.querySelector(".goal")

let finalexpense = 0;
let maxincome = 0;
let targetmoney = 0; 

function changeWidth() {
  progress.style.width = `${((maxincome - finalexpense)/ targetmoney) *100}%`;
  progress.innerText = `${Math.ceil(((maxincome - finalexpense) / targetmoney) *100)}%`;
}

expense.addEventListener("keyup", function() {
  finalexpense = parseInt(expense.value, 10);
  changeWidth();
});

income.addEventListener("keyup", function() {
  maxincome = parseInt(income.value, 10);
  changeWidth();
});

goal.addEventListener("keyup", function() {
  targetmoney = parseInt(goal.value, 10);
  changeWidth();
});

$(function() {
    $("#in1_sum").html(sumColumn(1));
    $("#in2").html(sumColumn(2));
  });
  
  function sumColumn(index) {
    var total = 0;
    $("td:nth-child(" + index + ")").each(function() {
      total += parseInt($(this).text(), 10) || 0;
    });  
    return total;
}
