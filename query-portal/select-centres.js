// Browser snippet
// Copiar a Chrome DevTools -> Code -> Snippets -> New snippet

// Selecciona uns determinats centres a:
// https://educaciodigital.cat/portal/index.php?module=Agoraportal&type=admin&func=sql

// Centres públics de secundària que fan ús de Wiris a 27/04/2021 
const usus = ['2267', '2476', '275', '684', '2477', '889', '473', '218', '2205', '2464', '1364', '142', '284', '1368', '134', '2137', '1107', '1117',
  '1255', '3', '286', '749', '1425', '498', '1087', '1231', '100', '42', '370', '82', '1459', '377', '265', '561', '974', '375', '771', '273', '1476',
  '1531', '2147', '2139', '2142', '2143', '106', '2138', '2293', '1060', '2146', '245', '2145', '2151', '2144', '2480', '2140', '1038', '303', '588',
  '1470', '297', '422', '789', '1040', '1435', '15', '847', '150', '1069', '357', '655', '524', '431', '328', '139', '399', '1288', '1113', '1225', '1092',
  '848', '519', '1361', '70', '119', '1412', '1213', '2157', '620', '1295', '263', '797', '492', '801', '287', '1440', '241', '371', '598', '1120', '251',
  '1054', '455', '270', '526', '597', '224', '988', '50', '147', '95', '300', '178', '20', '2447', '8', '521', '557', '679', '1333', '230', '572', '24',
  '329', '204', '73', '27', '989', '46', '947', '229', '664', '626', '582', '1568', '631'];

const llista = document.querySelector('#clients_sel');
const options = llista?.querySelectorAll('option');

if (options)
  options.forEach(op => {
    if (usus.find(usu => op.text.startsWith(`${usu}.`)))
      op.selected = true;
  });
else
  console.error('No existeix la llista amb ID "clients_sel" al document actual!');