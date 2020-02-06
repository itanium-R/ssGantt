function loadSchedules(){
  var schedSht = openShtByName("sched");
  
  var lastRow = schedSht.getLastRow();
  var shtVals = schedSht.getRange(3,2,lastRow-2,4).getValues();
  
  var schedules = [];
  var colors = ["ganttRed","ganttGreen","ganttBlue"];
  var colorIndex = 0;
  var shtValsLen = shtVals.length;
  for(var i = 0; i < shtValsLen; i++){
    var name = shtVals[i][0];
    if(name != "") colorIndex = (colorIndex + 1) % colors.length;
    schedules.push({
    name: name,
    desc: shtVals[i][1],
    values: [{
      from: (shtVals[i][2] - 172800000),
      to: (shtVals[i][3] - 86400001),
      label: shtVals[i][1],
      customClass: colors[colorIndex]
    }]
    });
  }
  Logger.log(schedules);
  
  return schedules;
}