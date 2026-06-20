function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Date', 'Nom complet', 'Téléphone', 'Discipline', 'Mode de paiement', 'Montant', 'Lieu']);
  }

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(data.date),
    data.fullname,
    data.phone,
    data.track,
    data.payment_method,
    data.amount,
    data.venue
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
