function loginAttempt() {
  var a = document.forms["login"]["username"].value;
  var b = document.forms["login"]["password"].value;
  if (a == "" || b == "")
    alert("Empty Field");

  else
    alert("logged in");
}

function signupAttempt() {
  var a = document.forms["signup"]["phNum"].value;
  var b = document.forms["signup"]["email"].value;
  var c = document.forms["signup"]["pw"].value;

  if (a == "" || b == "" || c == "")
    alert("Empty Field");

  else
    alert("Account Registered");
}

// ---------------------motherboard.xml-----------------//
//------------------------------------------------------//

function loadMBXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "products.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
  var x, i, xmlDoc, txt;
  var count = 0;
  var back = "<tr><h4>test</h4></tr>";
  var read = false;
  
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("customers");
  document.getElementById("cat_table_ID").innerHTML = "<h4 onclick=\"location.href=\'bottom.html\'\" style=\"padding-left:20px; cursor:pointer;\">Back</h4>";
  for (i = 0; i < x.length; i++) {
    if ((count == 0 || count == 7) && read == false)
    txt += "<tr class=\"mbPic_tr\" style=\"text-align: left;\">";
    
    if(x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue == "Motherboard"){
      
      txt += "<td><img src=\"pics/" +
      x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" +
      x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>" +
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

      count++;
      read = true;
    }
    
    if (count == 7 && read == true) {
      txt += "</tr>";
      count = 0;
      read = false;
    }
  }
  document.getElementById("cat_table_ID").innerHTML += txt;
}

//----------------------Processors.xml------------------------//
//------------------------------------------------------------//

function loadcpuXML() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      writeCpuXml(this);
    }
  };
  xmlhttp.open("GET", "products.xml", true);
  xmlhttp.send();
}

function writeCpuXml(xml) {
  var x, i, xmlDoc, txt;
  var count = 0;
  var back = "<tr><h4>test</h4></tr>";
  var read = false;
  
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("customers");
  document.getElementById("cat_table_ID").innerHTML = "<h4 onclick=\"location.href=\'bottom.html\'\" style=\"padding-left:20px; cursor:pointer;\">Back</h4>";
  for (i = 0; i < x.length; i++) {
    if ((count == 0 || count == 7) && read == false)
    txt += "<tr class=\"mbPic_tr\" style=\"text-align: left;\">";
    
    if(x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue == "Processor"){
      
      txt += "<td><img src=\"pics/" +
      x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" +
      x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>" +
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

      read = true;
      count++;
    }
    
    if (count == 7 && read == true) {
      txt += "</tr>";
      count = 0;
      read = false;
    }
    
  }
  document.getElementById("cat_table_ID").innerHTML += txt;
}

//-----------------------memBank.xml-------------------//
//-----------------------------------------------------//

function loadmemBankXML() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      writememBank(this);
    }
  };
  xmlhttp.open("GET", "products.xml", true);
  xmlhttp.send();
}

function writememBank(xml) {
  var x, i, xmlDoc, txt;
  var count = 0;
  var back = "<tr><h4>test</h4></tr>";
  var read = false;
  
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("customers");
  document.getElementById("cat_table_ID").innerHTML = "<h4 onclick=\"location.href=\'bottom.html\'\" style=\"padding-left:20px; cursor:pointer;\">Back</h4>";
  for (i = 0; i < x.length; i++) {
    if ((count == 0 || count == 7) && read == false)
    txt += "<tr class=\"mbPic_tr\" style=\"text-align: left;\">";
    
    if(x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue == "Memory"){
      
      txt += "<td><img src=\"pics/" +
      x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" +
      x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>" +
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

      count++;
      read = true;
    }
    
    if (count == 7 && read == true) {
      txt += "</tr>";
      count = 0;
      read = false;
    }
  }
  document.getElementById("cat_table_ID").innerHTML += txt;
}

//----------------------------PC_Case.xml----------------//
//-------------------------------------------------------//


function loadpcCaseXML() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      writePcXML(this);
    }
  };
  xmlhttp.open("GET", "products.xml", true);
  xmlhttp.send();
}

function writePcXML(xml) {
  var x, i, xmlDoc, txt;
  var count = 0;
  var back = "<tr><h4>test</h4></tr>";
  var read = false;
  
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("customers");
  document.getElementById("cat_table_ID").innerHTML = "<h4 onclick=\"location.href=\'bottom.html\'\" style=\"padding-left:20px; cursor:pointer;\">Back</h4>";
  for (i = 0; i < x.length; i++) {
    if ((count == 0 || count == 7) && read == false)
    txt += "<tr class=\"mbPic_tr\" style=\"text-align: left;\">";
    
    if(x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue == "PC Case"){
      
      txt += "<td><img src=\"pics/" +
      x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" +
      x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>" +
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

      count++;
      read = true;
    }
    
    if (count == 7 && read == true) {
      txt += "</tr>";
      count = 0;
      read = false;
    }
  }
  document.getElementById("cat_table_ID").innerHTML += txt;
}

//--------------------------------Monitor.xml-----------------//
//------------------------------------------------------------//

function loadMonitorXML() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      writeMonitorXML(this);
    }
  };
  xmlhttp.open("GET", "products.xml", true);
  xmlhttp.send();
}

function writeMonitorXML(xml) {
  var x, i, xmlDoc, txt;
  var count = 0;
  var back = "<tr><h4>test</h4></tr>";
  var read = false;
  
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("customers");
  document.getElementById("cat_table_ID").innerHTML = "<h4 onclick=\"location.href=\'bottom.html\'\" style=\"padding-left:20px; cursor:pointer;\">Back</h4>";
  for (i = 0; i < x.length; i++) {
    if ((count == 0 || count == 7) && read == false)
    txt += "<tr class=\"mbPic_tr\" style=\"text-align: left;\">";
    
    if(x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue == "Monitors"){
      
      txt += "<td><img src=\"pics/" +
      x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" +
      x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>" +
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

      count++;
      read = true;
    }
    
    if (count == 7 && read == true) {
      txt += "</tr>";
      count = 0;
      read = false;
    }
  }
  document.getElementById("cat_table_ID").innerHTML += txt;
}


//-------------------------Orders.xml-------------------//
//------------------------------------------------------//



function loadOrders() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      writeOrders(this);
    }
  };
  xmlhttp.open("GET", "Orders.xml", true);
  xmlhttp.send();
}

function writeOrders(xml) {
  var x, i, xmlDoc, txt;

  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("Customer");
  for (i = 0; i < x.length; i++) {

    txt += "<tr class=\"orderList_tr\">";

    txt +=
      "<td class=\"orderInfo\" style=\"width:90px\">" + x[i].getElementsByTagName("cid")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"orderInfo\" style=\"width:55px\">" + x[i].getElementsByTagName("pid")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"orderInfo\" style=\"width:110px\">" + x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"orderInfo\" style=\"width:100px\">" + x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"orderInfo\" style=\"width:75px\">" + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"orderInfo\" style=\"width:60px\">" + x[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"orderInfo\" style=\"width:90px\">" + x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</td>";

    txt += "</tr>";

  }
  document.getElementById("orderID").innerHTML = txt;
}

//-----------------customerOrders.xml-------------------//
//------------------------------------------------------//


function readCustOrders() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      getCustInfo(this);
    }
  };
  xmlhttp.open("GET", "customerOrders.xml", true);
  xmlhttp.send();
}

function getCustInfo(xml) {
  var x, i, xmlDoc, txt;

  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("customers");
  for (i = 0; i < x.length; i++) {

    txt += "<tr class=\"Customer_tr\">";

    txt +=
      "<td class=\"Customer_info\" style=\"width:120px\">" + x[i].getElementsByTagName("cid")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"Customer_info\" style=\"width:130px\">" + x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"Customer_info\" style=\"width:120px\">" + x[i].getElementsByTagName("number")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"Customer_info\" style=\"width:120px\">" + x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</td>";

    txt += "</tr>";

  }
  document.getElementById("CustID").innerHTML = txt;
}


//----------------------StockIn.xml-------------------//
//------------------------------------------------------//

function loadOrders() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      writeOrders(this);
    }
  };
  xmlhttp.open("GET", "Orders.xml", true);
  xmlhttp.send();
}

function writeOrders(xml) {
  var x, i, xmlDoc, txt;

  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("Customer");
  for (i = 0; i < x.length; i++) {

    txt += "<tr class=\"orderList_tr\">";

    txt +=
      "<td class=\"orderInfo\" style=\"width:90px\">" + x[i].getElementsByTagName("cid")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"orderInfo\" style=\"width:55px\">" + x[i].getElementsByTagName("pid")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"orderInfo\" style=\"width:110px\">" + x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"orderInfo\" style=\"width:100px\">" + x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"orderInfo\" style=\"width:75px\">" + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"orderInfo\" style=\"width:60px\">" + x[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"orderInfo\" style=\"width:90px\">" + x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</td>";

    txt += "</tr>";

  }
  document.getElementById("orderID").innerHTML = txt;
}

//-----------------customerOrders.xml-------------------//
//------------------------------------------------------//


function readStockIn() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      getStockIns(this);
    }
  };
  xmlhttp.open("GET", "StockIn.xml", true);
  xmlhttp.send();
}

function getStockIns(xml) {
  var x, i, xmlDoc, txt;

  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("Products");
  for (i = 0; i < x.length; i++) {

    txt += "<tr class=\"list_tr\">";

    txt +=
      "<td class=\"catalog_info\" style=\"width:120px\">" + x[i].getElementsByTagName("pid")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"catalog_info\" style=\"width:130px\">" + x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"catalog_info\" style=\"width:120px\">" + x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"catalog_info\" style=\"width:120px\">" + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>" +
      "<td class=\"catalog_info\" style=\"width:120px\">" + x[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue + "</td>";

    txt += "</tr>";

  }
  document.getElementById("StockIn_ID").innerHTML = txt;
}

//------------------------------------BRANDS------------------------------------------//
//------------------------------------------------------------------------------//

//---------------------------ACER--------------------//
//---------------------------------------------------//

function getAcerBrands() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      writeAcerProducts(this);
    }
  };
  xmlhttp.open("GET", "products.xml", true);
  xmlhttp.send();

}

function writeAcerProducts(xml) {
  var x, i, xmlDoc, txt;
  var count = 0;
  var back = "<tr><h4>test</h4></tr>";
  var read = false;
  
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("customers");
  document.getElementById("POPULAR_BRANDS").innerHTML = "<h4 onclick=\"location.href=\'bottom.html\'\" style=\"padding-left:20px; cursor:pointer;\">Back</h4>";
  for (i = 0; i < x.length; i++) {
    if ((count == 0 || count == 7) && read == false)
    txt += "<tr class=\"mbPic_tr\" style=\"text-align: left;\">";
    
    if(x[i].getElementsByTagName("pbrand")[0].childNodes[0].nodeValue == "Acer"){
      
      txt += "<td><img src=\"pics/" +
      x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" +
      x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>" +
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

      count++;
      read = true;
    }
    
    if (count == 7 && read == true) {
      txt += "</tr>";
      count = 0;
      read = false;
    }
  }
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  document.getElementById("POPULAR_BRANDS").innerHTML += txt;
}

//---------------------------INTEL--------------------//
//---------------------------------------------------//

function getIntelBrands() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      writeIntelProducts(this);
    }
  };
  xmlhttp.open("GET", "products.xml", true);
  xmlhttp.send();
}

function writeIntelProducts(xml) {
  var x, i, xmlDoc, txt;
  var count = 0;
  var back = "<tr><h4>test</h4></tr>";
  var read = false;
  
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("customers");
  document.getElementById("POPULAR_BRANDS").innerHTML = "<h4 onclick=\"location.href=\'bottom.html\'\" style=\"padding-left:20px; cursor:pointer;\">Back</h4>";
  for (i = 0; i < x.length; i++) {
    if ((count == 0 || count == 7) && read == false)
    txt += "<tr class=\"mbPic_tr\" style=\"text-align: left;\">";
    
    if(x[i].getElementsByTagName("pbrand")[0].childNodes[0].nodeValue == "Intel"){
      
      txt += "<td><img src=\"pics/" +
      x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" +
      x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>" +
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";
      
      count++;
      read = true;
    }
    
    if (count == 7 && read == true) {
      txt += "</tr>";
      count = 0;
      read = false;
    }
  }
  document.getElementById("POPULAR_BRANDS").innerHTML += txt;
}

//---------------------------AMD--------------------//
//---------------------------------------------------//

function getAMDBrands() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      writeAMDProducts(this);
    }
  };
  xmlhttp.open("GET", "products.xml", true);
  xmlhttp.send();
}

function writeAMDProducts(xml) {
  var x, i, xmlDoc, txt;
  var count = 0;
  var back = "<tr><h4>test</h4></tr>";
  var read = false;
  
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("customers");
  document.getElementById("POPULAR_BRANDS").innerHTML = "<h4 onclick=\"location.href=\'bottom.html\'\" style=\"padding-left:20px; cursor:pointer;\">Back</h4>";
  for (i = 0; i < x.length; i++) {
    if ((count == 0 || count == 7) && read == false)
    txt += "<tr class=\"mbPic_tr\" style=\"text-align: left;\">";
    
    if(x[i].getElementsByTagName("pbrand")[0].childNodes[0].nodeValue == "AMD"){
      
      txt += "<td><img src=\"pics/" +
      x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" +
      x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>" +
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

      count++;
      read = true;
    }
    
    if (count == 7 && read == true) {
      txt += "</tr>";
      count = 0;
      read = false;
    }
  }
  document.getElementById("POPULAR_BRANDS").innerHTML += txt;
}

//---------------------------ASUS--------------------//
//---------------------------------------------------//

function getAsusBrands() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      writeAsusProducts(this);
    }
  };
  xmlhttp.open("GET", "products.xml", true);
  xmlhttp.send();
}

function writeAsusProducts(xml) {
  var x, i, xmlDoc, txt;
  var count = 0;
  var back = "<tr><h4>test</h4></tr>";
  var read = false;
  
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("customers");
  document.getElementById("POPULAR_BRANDS").innerHTML = "<h4 onclick=\"location.href=\'bottom.html\'\" style=\"padding-left:20px; cursor:pointer;\">Back</h4>";
  for (i = 0; i < x.length; i++) {
    if ((count == 0 || count == 7) && read == false)
    txt += "<tr class=\"mbPic_tr\" style=\"text-align: left;\">";
    
    if(x[i].getElementsByTagName("pbrand")[0].childNodes[0].nodeValue == "ASUS"){
      
      txt += "<td><img src=\"pics/" +
      x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" +
      x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>" +
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

      count++;
      read = true;
    }
    
    if (count == 7 && read == true) {
      txt += "</tr>";
      count = 0;
      read = false;
    }
  }
  document.getElementById("POPULAR_BRANDS").innerHTML += txt;
}

//---------------------------Kingston--------------------//
//---------------------------------------------------//

function getKingstonBrands() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      writeKingstonProducts(this);
    }
  };
  xmlhttp.open("GET", "products.xml", true);
  xmlhttp.send();
}

function writeKingstonProducts(xml) {
  var x, i, xmlDoc, txt;
  var count = 0;
  var back = "<tr><h4>test</h4></tr>";
  var read = false;
  
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("customers");
  document.getElementById("POPULAR_BRANDS").innerHTML = "<h4 onclick=\"location.href=\'bottom.html\'\" style=\"padding-left:20px; cursor:pointer;\">Back</h4>";
  for (i = 0; i < x.length; i++) {
    if ((count == 0 || count == 7) && read == false)
    txt += "<tr class=\"mbPic_tr\" style=\"text-align: left;\">";
    
    if(x[i].getElementsByTagName("pbrand")[0].childNodes[0].nodeValue == "Kingston"){
      
      txt += "<td><img src=\"pics/" +
      x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" +
      x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>" +
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

      count++;
      read = true;
    }
    
    if (count == 7 && read == true) {
      txt += "</tr>";
      count = 0;
      read = false;
    }
  }
  document.getElementById("POPULAR_BRANDS").innerHTML += txt;
}

//----------------------------TOOLTIP--------------------------//
//-------------------------------------------------------------//
var mbAjaxSetting = {
  context: { index: -1 },
  success: mbCallback,
  responseType: "xml"
};

function mbCallback(response, context) {
  var i;
  var x = response.documentElement.getElementsByTagName("customers");
  for(i = 0; i < x.length; i++)
  {
    if(x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue == "Motherboard")
    {
      var pics = x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue;
      var offer = "<p style='color:red; margin-bottom:0px; font-weight:bold;'>Special Offer!</p>";
      var pcat = x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue + "<br>";
      var pname = x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>";
      var price = "<p>Price: " + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "<span style='color:red';> -10% </span></p>";
      var image = "<img src='pics/" + pics +"' style='float:right;margin-left:12px;width:75px;height:75px;' />";
      break;
    }
  }

  return "<div style='width:200px';>" + image + offer + pcat + pname + price + "</div>";
}

var cpuAjaxSetting = {
  context: { index: -1 },
  success: cpuCallback,
  responseType: "xml"
};

function cpuCallback(response, context) {
  var i;
  var x = response.documentElement.getElementsByTagName("customers");
  for(i = 0; i < x.length; i++)
  {
    if(x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue == "Processor")
    {
      var pics = x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue;
      var offer = "<p style='color:red; margin-bottom:0px; font-weight:bold;'>Special Offer!</p>";
      var pcat = x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue + "<br>";
      var pname = x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>";
      var price = "<p>Price: " + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "<span style='color:red';> -10%</span></p>";
      var image = "<img src='pics/" + pics +"' style='float:right;margin-left:12px;width:75px;height:75px;' />";
      break;
    }
  }
  return "<div style='width:230px';>" + image + offer + pcat + pname + price + "</div>";
}

var memAjaxSetting = {
  context: { index: -1 },
  success: memCallback,
  responseType: "xml"
};

function memCallback(response, context) {
  var i;
  var x = response.documentElement.getElementsByTagName("customers");
  for(i = 0; i < x.length; i++){
    if(x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue == "Memory"){
      var pics = x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue;
      var offer = "<p style='color:red; margin-bottom:0px; font-weight:bold;'>Special Offer!</p>";
      var pcat = x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue + "<br>";
      var pname = x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>";
      var price = "<p>Price: " + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "<span style='color:red';> -10%</span></p>";
      var image = "<img src='pics/" + pics +"' style='float:right;margin-left:12px;width:75px;height:75px;' />";
      break;
    }
  }
  return "<div>" + image + offer + pcat + pname + price + "</div>";
}

var caseAjaxSetting = {
  context: { index: -1 },
  success: caseCallback,
  responseType: "xml"
};

function caseCallback(response, context) {
  var i;
  var x = response.documentElement.getElementsByTagName("customers");
  for(i = 0; i < x.length; i++){
    if(x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue == "PC Case"){

      var pics = x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue;
      var offer = "<p style='color:red; margin-bottom:0px; font-weight:bold;'>Special Offer!</p>";
      var pcat = x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue + "<br>";
      var pname = x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>";
      var price = "<p>Price: " + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "<span style='color:red';> -10%</span></p>";
      var image = "<img src='pics/" + pics +"' style='float:right;margin-left:12px;width:75px;height:75px;margin-top:15px;' />";
      break;
    }
  }
  return "<div style='width:200px';>" + image + offer + pcat + pname + price + "</div>";
}

var monitorAjaxSetting = {
  context: { index: -1 },
  success: monitorCallback,
  responseType: "xml"
};

function monitorCallback(response, context) {
  var i;
  var x = response.documentElement.getElementsByTagName("customers");
  for(i = 0; i < x.length; i++){
    if(x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue == "Monitors"){
      var pics = x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue;
      var offer = "<p style='color:red; margin-bottom:0px; font-weight:bold;'>Special Offer!</p>";
      var pcat = x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue + "<br>";
      var pname = x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "<br>";
      var price = "<p>Price: " + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "<span style='color:red;';> -10%</span></p>";
      var image = "<img src='pics/" + pics +"' style='float:right;margin-left:12px;width:75px;height:75px;' />";
      break;
    }
  }
  return "<div style='width: 230px'>" + image + offer + pcat + pname + price + "</div>";
}