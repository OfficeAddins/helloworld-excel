window.onload = function Start() { 
   console.log('hello world'); 

   var app_1 = document.getElementById("app"); 
   app_1.innerHTML = '<b>hello world</b>'; 

   app_1.innerHTML = app_1.innerHTML + 
      '<br><input type="button" value="Add Data" onclick="loadExcelData();" />'; 
} 

Office.initialize = function (reason) { 
} 

window.loadExcelData = loadExcelData; 

function loadExcelData() { 
   console.log('excel data loaded'); 

   funWrite = function fun_write(message) { 
      console.log('fun_write called'); 

      var app_1 = document.getElementById("message"); 
      app_1.innerHTML += message + '<br>';  
   }; 

   Excel.run(function (ctx) { 
      var sheet = ctx.workbook.worksheets.getActiveWorksheet(); 
      sheet.getRange("B2").values = [ [Math.floor(Math.random() * 1000)] ]; 
      return ctx.sync(); 
   }); 

   funWrite('initial text'); 
} 