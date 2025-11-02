function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var name = data.name;
  var response = data.response;

  var subject = "Proposal Response 💌";
  var message = name + " ne '" + response + "' click kiya hai.";

  // 👇 Apna email likho yahan
  MailApp.sendEmail("your_email@gmail.com", subject, message);

  return ContentService.createTextOutput("Email Sent");
}
