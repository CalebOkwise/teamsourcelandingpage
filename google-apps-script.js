// Google Apps Script Code for handling form submissions
// Attach this script to a Google Sheet with columns: Timestamp | Name | Email | Phone | Interests

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Append the row to the sheet
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.interests
    ]);
    
    // Send notification email
    const recipient = 'your-email@example.com'; // Replace with your actual email address
    const subject = 'New Registration Closed Page Lead';
    const body = `A new lead has signed up for notifications:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Interests: ${data.interests}
Submission Timestamp: ${timestamp}

Please check the Google Sheet for full details.`;
    
    MailApp.sendEmail(recipient, subject, body);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error and return error response
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}