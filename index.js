Office.initialize = function (reason) {
}

window.onload = function Start() { 
   console.log('page loaded'); 

   var app_1 = document.getElementById("app"); 
   app_1.innerHTML = '<b>hello world</b>'; 

   app_1.innerHTML = app_1.innerHTML + '<br><input id="test" type="button" value="Add Data" onclick="loadExcelData();" />'; 
} 


window.loadExcelData = loadExcelData;
function loadExcelData() {
   console.log('excel data loaded');

   Excel.run(function (ctx) {
      var sheet = ctx.workbook.worksheets.getActiveWorksheet();
      sheet.getRange("B2").values = [ [Math.floor(Math.random() * 1000)] ];
      return ctx.sync();
   });
}






