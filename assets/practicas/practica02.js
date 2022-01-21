let departamento = prompt(
  "Escoje uno de los siguientes departamentos(por favor escribir tal cual aparecen):" +
    "\n" +
    "1-Valle del Cauca" +
    "\n" +
    "2-Risaralda" +
    "\n" +
    "3-Quindio" +
    "\n" +
    "4-Meta" +
    "\n" +
    "5-Antioquia"
);

if (departamento == "Valle del Cauca") {
  let municipio = prompt(
    "Escoje uno de los siguientes municipios (por favor escribir tal cual aparecen):" +
      "\n" +
      "1-Cali" +
      "\n" +
      "2-Palmira" +
      "\n" +
      "3-Tulua" +
      "\n" +
      "4-Jamundi" +
      "\n" +
      "5-Yumbo"
  );
  if (municipio == "Cali") {
    alert("Huy! Cuidado lo Roban");
  } else if (municipio == "Palmira") {
    alert("Igualmente, cuidado lo roban");
  } else if (municipio == "Tulua") {
    alert("Bonito Municipio del Valle");
  } else if (municipio == "Jamundi") {
    alert("Los Cholados son muy Ricos");
  } else if (municipio == "Yumbo") {
    alert("He ido muy pocas veces a Yumbo bro");
  } else {
    alert("Debes digitar algunos de los municipios, tal cual se muestran");
  }
} else if (departamento == "Risaralda") {
  let municipio = prompt(
    "Escoje uno de los siguientes municipios(por favor escribir tal cual aparecen):" +
      "\n" +
      "1-Pereira" +
      "\n" +
      "2-Marsella" +
      "\n" +
      "3-Dosquebradas" +
      "\n" +
      "4-Santuario" +
      "\n" +
      "5-Balboa"
  );
  if (municipio == "Pereira") {
    alert("Sin temor a equivocarme, una de las mejores ciudades de Colombia!");
  } else if (municipio == "Marsella") {
    alert(municipio == "No lo conozco bro");
  } else if (municipio == "Dosquebradas") {
    alert("Muy bonito ese municipio");
  } else if (municipio == "Santuario") {
    alert("No lo conozco, tampoco es que me llame la atencion");
  } else if (municipio == "Balboa") {
    alert("Jum ni idea Bro");
  } else {
    alert("Debes digitar algunos de los municipios, tal cual se muestran");
  }
} else if (departamento == "Quindio") {
  let municipio = prompt(
    "Escoje uno de los siguientes municipios(por favor escribir tal cual aparecen):" +
      "\n" +
      "1-Armenia" +
      "\n" +
      "2-Filandia" +
      "\n" +
      "3-Salento" +
      "\n" +
      "4-Quimbaya" +
      "\n" +
      "5-Montenegro"
  );
  if (municipio == "Armenia") {
    alert("La verdad esperaba mas de la capital de Quindio!");
  } else if (municipio == "Filandia") {
    alert("Un lugar que tienes que visitar, es muy acogedor");
  } else if (municipio == "Dosquebradas") {
    alert("Tambien lo visite en vacaciones");
  } else if (municipio == "Salento") {
    alert("Otro lugar mas que tienes que conocer, hermosos paisajes cafeteros");
  } else if (municipio == "Montenegro") {
    alert("Es un municipio mas modernizado que los anteriores");
  } else {
    alert("Debes digitar algunos de los municipios, tal cual se muestran");
  }
} else if (departamento == "Meta") {
  let municipio = prompt(
    "Escoje uno de los siguientes municipios(por favor escribir tal cual aparecen):" +
      "\n" +
      "1-Villavicencio" +
      "\n" +
      "2-Pto Lopez" +
      "\n" +
      "3-Pto Gaitan" +
      "\n" +
      "4-Mapiripan" +
      "\n" +
      "5-Lejanias"
  );
  if (municipio == "Villavicenio") {
    alert("La Capital del Meta, es muy bonito ese municipio");
  } else if (municipio == "Pto Lopez") {
    alert("Hermoso pueblo del Meta, vivi muchos anios alli");
  } else if (municipio == "Mapiripan") {
    alert("Tristes historias de terrorismo");
  } else if (municipio == "Pto Gaitan") {
    alert("Tengo muchos recuerdos de este municipio");
  } else if (municipio == "Lejanias") {
    alert("La verdad no lo conozco bro");
  } else {
    alert("Debes digitar algunos de los municipios, tal cual se muestran");
  }
} else if (departamento == "Antioquia") {
  let municipio = prompt(
    "Escoje uno de los siguientes municipios(por favor escribir tal cual aparecen):" +
      "\n" +
      "1-Medellin" +
      "\n" +
      "2-El Bagre" +
      "\n" +
      "3-Envigado" +
      "\n" +
      "4-Taraza" +
      "\n" +
      "5-Caucacia"
  );
  if (municipio == "Medellin") {
    alert("he visitado medellin varias veces, me gusta");
  } else if (municipio == "El Bagre") {
    alert("Vivi un tiempo en este municipio, hace demaciado calor");
  } else if (municipio == "Envigado") {
    alert("No estoy seguro de haber visitado Envigado");
  } else if (municipio == "Taraza") {
    alert("Peligro!");
  } else if (municipio == "Caucacia") {
    alert("Mas Peligro!");
  } else {
    alert("Debes digitar algunos de los municipios, tal cual se muestran");
  }
} else {
  alert(
    "Debes Digitar algunos de los departamentos señalados, tal cual como se muestran"
  );
}

//Esto es lo que modifique 
