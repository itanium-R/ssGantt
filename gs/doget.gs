function doGet(e) {
  
  
  var schedules = loadSchedules();
  
  // 結果を返す  
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify(schedules));
  return output;
}
