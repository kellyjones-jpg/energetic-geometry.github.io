let table;

function preload() {
  table = loadTable('agrivoltaicsFULL_DATASET.csv', 'csv', 'header');
}

function setup() {
  noCanvas();
  print('Rows:', table.getRowCount());
  print('Columns:', table.getColumnCount());
  print('Column Headers:', table.columns);
}

for (let i = 0; i < table.getRowCount(); i++) {
  let name = table.getString(i, 'Name');
  let activity = table.getString(i, 'Agrivoltaic Activities');
  let systemSize = table.getString(i, 'System Size');
  let siteSize = table.getString(i, 'Site Size');
  let year = table.getString(i, 'Year Installed');
  let tech = table.getString(i, 'PV Technology');
  let arrayType = table.getString(i, 'Type Of Array');
  let habitat = table.getString(i, 'Habitat Type');
  let crops = table.getString(i, 'Crop Types');
  let animals = table.getString(i, 'Animal Type');

  print(`${i}: ${name}, ${activity}, ${systemSize}, ${siteSize}, ${year}, ${tech}, ${arrayType}, ${habitat}, ${crops}, ${animals}`);
}
