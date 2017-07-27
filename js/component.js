let All = 0;
let totalSuccess = 0;
let totalFailure = 0;

function clearTable(){
  $("#myTable td").remove();
}

function allscripts(url,id){
   clearTable();
   document.getElementById("myTable").deleteRow(1);
   All = 0, totalSuccess = 0, totalFailure = 0;
   $.getJSON(url, function (result) {
    result.forEach(function(json){
      if (json.location == id){
      let loadcase = json.loadcase;
      let component = json.component;
      let analysisType = json.analysisType;
      let olddate = json.olddate;
      let currentdate = json.currentdate;
      let previousEngine = json.previousEngine;
      let currentEngine = json.currentEngine;
      let previousResult = json.previousResult;
      let currentResult = json.currentResult;
      let status = json.status;

      let table = document.getElementById("myTable");
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      let cell7 = row.insertCell(6);
      let cell8 = row.insertCell(7);
      let cell9 = row.insertCell(8);
      let cell10 = row.insertCell(9);
          
      cell1.innerHTML = loadcase;
      cell2.innerHTML = component;
      cell3.innerHTML = analysisType;
      cell4.innerHTML = olddate;
      cell5.innerHTML = currentdate;
      cell6.innerHTML = previousEngine;
      cell7.innerHTML = currentEngine;
      cell8.innerHTML = previousResult;
      cell9.innerHTML = currentResult;    

      All++
      if (status == "success" ){
        totalSuccess++;
        cell10.innerHTML = '<font color="#4CAF50">Passed</font>';
      }else if (status == "failure"){
        totalFailure++;
        cell10.innerHTML = '<font color="red">Failure</font>';
      }
    }
  });
  document.getElementById("All").innerHTML = ' All: ' + All;
    document.getElementById("totalSuccess").innerHTML = ' Passed: ' + totalSuccess;
    document.getElementById("totalFailure").innerHTML = 'Failed: ' + totalFailure;
  });
 }

 function passedscripts(url,id){
  clearTable();
   document.getElementById("myTable").deleteRow(1);
   All = 0, totalSuccess = 0, totalFailure = 0;
   $.getJSON(url, function (result) {
    result.forEach(function(json){
      if (json.location == id){
      let loadcase = json.loadcase;
      let component = json.component;
      let analysisType = json.analysisType;
      let olddate = json.olddate;
      let currentdate = json.currentdate;
      let previousEngine = json.previousEngine;
      let currentEngine = json.currentEngine;
      let previousResult = json.previousResult;
      let currentResult = json.currentResult;
      let status = json.status;

      if (status == "success" ){
      let table = document.getElementById("myTable");
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      let cell7 = row.insertCell(6);
      let cell8 = row.insertCell(7);
      let cell9 = row.insertCell(8);
      let cell10 = row.insertCell(9);
          
      cell1.innerHTML = loadcase;
      cell2.innerHTML = component;
      cell3.innerHTML = analysisType;
      cell4.innerHTML = olddate;
      cell5.innerHTML = currentdate;
      cell6.innerHTML = previousEngine;
      cell7.innerHTML = currentEngine;
      cell8.innerHTML = previousResult;
      cell9.innerHTML = currentResult;   
      cell10.innerHTML = '<font color="#4CAF50">Passed</font>';
      }}
    });  
  });
 }

 function failedscripts(url,id){
  clearTable();
   document.getElementById("myTable").deleteRow(1);
   All = 0, totalSuccess = 0, totalFailure = 0;
   $.getJSON(url, function (result) {
    result.forEach(function(json){
       if (json.location == id){
      let loadcase = json.loadcase;
      let component = json.component;
      let analysisType = json.analysisType;
      let olddate = json.olddate;
      let currentdate = json.currentdate;
      let previousEngine = json.previousEngine;
      let currentEngine = json.currentEngine;
      let previousResult = json.previousResult;
      let currentResult = json.currentResult;
      let status = json.status;

      if (status == "failure"){
        let table = document.getElementById("myTable");
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
        let cell9 = row.insertCell(8);
        let cell10 = row.insertCell(9);
          
        cell1.innerHTML = loadcase;
        cell2.innerHTML = component;
        cell3.innerHTML = analysisType;
        cell4.innerHTML = olddate;
        cell5.innerHTML = currentdate;
        cell6.innerHTML = previousEngine;
        cell7.innerHTML = currentEngine;
        cell8.innerHTML = previousResult;
        cell9.innerHTML = currentResult;   
        cell10.innerHTML = '<font color="red">Failed</font>';
      }}
    });
  });
 }
