const clients =
    [
        {
            "id": 32,
            "name": "AGE -  La Virgen"
        },
        {
            "id": 47,
            "name": "Aduana Agua Prieta - Sede"
        },
        {
            "id": 48,
            "name": "Aduana Guaymas - Sede"
        },
        {
            "id": 49,
            "name": "Aduana Naco - Sede"
        },
        {
            "id": 50,
            "name": "Aduana La Paz - Sede/Local de La Paz sede"
        },
        {
            "id": 51,
            "name": "Aduana Nogales Puente 3 - Sede"
        },
        {
            "id": 52,
            "name": "Local Mazatlan - Sede"
        },
        {
            "id": 53,
            "name": "Aduana Ensenada - Sede"
        },
        {
            "id": 54,
            "name": "Aduana Tijuana - Mesa de Otay - Sede"
        },
        {
            "id": 55,
            "name": "Aduana Tecate - Sede"
        },
        {
            "id": 56,
            "name": "Aduana Mexicali  Seccion Nuevo Mexicali - Sede"
        },
        {
            "id": 57,
            "name": "Aduana San Luis Rio Colorado - Sede"
        },
        {
            "id": 58,
            "name": "Aduana Sonoyta - Sede"
        },
        {
            "id": 59,
            "name": "Aduana Sonoyta - Garita San Emeterio"
        },
        {
            "id": 60,
            "name": "Local Hermosillo - Sede"
        },
        {
            "id": 61,
            "name": "Local Tijuana - Sede"
        },
        {
            "id": 63,
            "name": "Local Nogales - Sede"
        },
        {
            "id": 64,
            "name": "Local Ensenada - Sede"
        },
        {
            "id": 65,
            "name": "Local Ensenada - Administracion Local de Auditoria Fiscal - Subsede Alvarado"
        },
        {
            "id": 66,
            "name": "Local Mexicali - Sede (Plaza Fimbres)"
        },
        {
            "id": 67,
            "name": "Local Mexicali - Centauro del Norte"
        },
        {
            "id": 68,
            "name": "Local Cd. Obregon - Sede"
        },
        {
            "id": 69,
            "name": "Local Los Mochis - Sede"
        },
        {
            "id": 71,
            "name": "Local Culiacan - Sede"
        },
        {
            "id": 77,
            "name": "Local Mexicali - Subsede Puerto Penasco"
        },
        {
            "id": 78,
            "name": "Aduana Mazatlan - Aeropuerto de Culiacan"
        },
        {
            "id": 79,
            "name": "Aduana Mazatlan - Seccion Topolobampo"
        },
        {
            "id": 80,
            "name": "Aduana Mazatlan - Sede"
        },
        {
            "id": 81,
            "name": "Aduana La Paz - Seccion Aduanera Pichilingue"
        },
        {
            "id": 82,
            "name": "Aduana La Paz - Seccion Aduanera Santa Rosalia"
        },
        {
            "id": 83,
            "name": "Aduana La Paz - Aeropuerto Internacional de San Jose del Cabo"
        },
        {
            "id": 84,
            "name": "Aduana La Paz - Aeropuerto Intercontinental de Loreto"
        },
        {
            "id": 86,
            "name": "Aduana La Paz - Seccion La Paz Area de Carga"
        },
        {
            "id": 87,
            "name": "Aduana Guaymas - Aeropuerto Internacional de Cd. Obregon"
        },
        {
            "id": 88,
            "name": "Aduana Guaymas - Aeropuerto de Hermosillo"
        },
        {
            "id": 89,
            "name": "Aduana Guaymas - Modulo Portuario"
        },
        {
            "id": 90,
            "name": "Aduana Mexicali - Algodones"
        },
        {
            "id": 91,
            "name": "Aduana Mexicali - Aeropuerto Mexicali"
        },
        {
            "id": 95,
            "name": "Aduana Cd. Del Carmen - Seccion Aduanera Seybaplaya"
        },
        {
            "id": 96,
            "name": "Local Los Mochis - Subsede de Guasave"
        },
        {
            "id": 97,
            "name": "Aduana Nogales - Garita 1 Puerta Mexico"
        },
        {
            "id": 101,
            "name": "Aduana Piedras Negras - Sede (Puente II)/Local Piedras Negras  - Sede"
        },
        {
            "id": 102,
            "name": "Aduana Ojinaga - Sede"
        },
        {
            "id": 103,
            "name": "Aduana Puerto Palomas - Sede"
        },
        {
            "id": 104,
            "name": "Aduana Torreon - Sede"
        },
        {
            "id": 105,
            "name": "Aduana Cd. Acuna - Sede"
        },
        {
            "id": 106,
            "name": "Aduana Cd. Juarez - Puente Cordova - Sede"
        },
        {
            "id": 107,
            "name": "Aduana Cd. Juarez - Seccion Zaragoza"
        },
        {
            "id": 108,
            "name": "Aduana Chihuahua - Sede"
        },
        {
            "id": 109,
            "name": "Local Torreon - Sede"
        },
        {
            "id": 110,
            "name": "Local Chihuahua - Sede"
        },
        {
            "id": 112,
            "name": "Local Cd. Juarez - Sede (Simona Barba)"
        },
        {
            "id": 113,
            "name": "Local Durango - Sede"
        },
        {
            "id": 115,
            "name": "Local Zacatecas - Sede"
        },
        {
            "id": 116,
            "name": "Local Saltillo - Sede"
        },
        {
            "id": 118,
            "name": "Local de Piedras Negras (Extension del 101)"
        },
        {
            "id": 120,
            "name": "Local Saltillo - MAF de Monclova"
        },
        {
            "id": 121,
            "name": "Aduana Cd. Juarez - Modulo de Ferrocarril"
        },
        {
            "id": 122,
            "name": "Aduana Cd. Juarez - Aeropuerto Cd. Juarez Area de Carga"
        },
        {
            "id": 123,
            "name": "Aduana Cd. Juarez - Seccion San Jeronimo"
        },
        {
            "id": 124,
            "name": "Aduana Cd Juarez - Garita de salida Km 30"
        },
        {
            "id": 126,
            "name": "Aduana Chihuahua - Aeropuerto de Chihuahua Seccion de Carga"
        },
        {
            "id": 127,
            "name": "Aduana Chihuahua - Las Americas"
        },
        {
            "id": 128,
            "name": "Local San Luis Potosi - Subsede Ciudad Valles"
        },
        {
            "id": 129,
            "name": "Aduana Piedras Negras - Aeropuerto Ramos Arizpe"
        },
        {
            "id": 130,
            "name": "Aduana Torreon - Aeropuerto Internacional de Torreon"
        },
        {
            "id": 131,
            "name": "Aduana Torreon - Aeropuerto Internacional de Durango"
        },
        {
            "id": 134,
            "name": "Aduana Ojinaga  Puerta Internacional"
        },
        {
            "id": 136,
            "name": "Aduana Altamira - Sede"
        },
        {
            "id": 137,
            "name": "Aduana Tuxpan - Sede"
        },
        {
            "id": 138,
            "name": "Aduana Cd. Camargo - Sede (Puente Internacional)"
        },
        {
            "id": 139,
            "name": "Aduana Miguel Aleman - Sede"
        },
        {
            "id": 140,
            "name": "Aduana Monterrey - Aeropuerto Internacional Mariano Escobedo Seccion Carga"
        },
        {
            "id": 141,
            "name": "Aduana Matamoros - Puente Zaragoza Los Tomates - Sede"
        },
        {
            "id": 142,
            "name": "Aduana Reynosa - Puente Nuevo Amanecer Sede"
        },
        {
            "id": 143,
            "name": "Aduana Monterrey - Sede"
        },
        {
            "id": 144,
            "name": "Aduana Colombia - Sede"
        },
        {
            "id": 145,
            "name": "Aduana Nuevo Laredo Puente 3 - Sede"
        },
        {
            "id": 146,
            "name": "Aduana Tampico - Sede"
        },
        {
            "id": 147,
            "name": "Local Guadalupe - Sede"
        },
        {
            "id": 148,
            "name": "Local Cd. Victoria - Sede"
        },
        {
            "id": 149,
            "name": "Local Monterrey - Sede"
        },
        {
            "id": 150,
            "name": "Local San Pedro Garza - Sede"
        },
        {
            "id": 151,
            "name": "Local Reynosa - Sede"
        },
        {
            "id": 152,
            "name": "Local Matamoros - Sede"
        },
        {
            "id": 153,
            "name": "Local Tampico - Sede"
        },
        {
            "id": 154,
            "name": "Local Nuevo Laredo - Sede"
        },
        {
            "id": 155,
            "name": "Local Tuxpan - Sede"
        },
        {
            "id": 157,
            "name": "Local Tuxpan - MAF Poza Rica"
        },
        {
            "id": 158,
            "name": "Local Campeche - Subsede Cd del Carmen"
        },
        {
            "id": 160,
            "name": "Local San Pedro Garza - MAF Montemorelos"
        },
        {
            "id": 161,
            "name": "Local Tuxpan - MAF Panuco"
        },
        {
            "id": 163,
            "name": "Aduana Nuevo Laredo - Puente 1"
        },
        {
            "id": 166,
            "name": "Aduana Nuevo Laredo - Estacion Sanchez"
        },
        {
            "id": 167,
            "name": "Aduana Nuevo Laredo - Puente 2"
        },
        {
            "id": 168,
            "name": "Aduana Guaymas - Aeropuerto internacional de Guaymas"
        },
        {
            "id": 170,
            "name": "Aduana Reynosa - Plataforma Fiscal"
        },
        {
            "id": 171,
            "name": "Aduana Reynosa - Benito Juarez (Puente 1 y 2)"
        },
        {
            "id": 175,
            "name": "Aduana Reynosa - Las Flores Nuevo Progreso (Importacion)"
        },
        {
            "id": 176,
            "name": "Aduana Matamoros - Seccion Lucio Blanco"
        },
        {
            "id": 178,
            "name": "Aduana Matamoros - Puente Brownsville/Matamoros Puente Viejo"
        },
        {
            "id": 181,
            "name": "Aduana de Guadalajara- Sede"
        },
        {
            "id": 182,
            "name": "Local Guadalajara Centro - Sede"
        },
        {
            "id": 184,
            "name": "Local Guadalajara Sur - Sede"
        },
        {
            "id": 185,
            "name": "Local Aguascalientes - Sede"
        },
        {
            "id": 186,
            "name": "Local Zapopan - Sede"
        },
        {
            "id": 187,
            "name": "Local Cd. Guzman - Sede"
        },
        {
            "id": 188,
            "name": "Local Cd. Guzman - Modulo Cd. Guzman"
        },
        {
            "id": 189,
            "name": "Local Tepic- Sede"
        },
        {
            "id": 190,
            "name": "Local  Colima - Sede"
        },
        {
            "id": 193,
            "name": "Local Puerto Vallarta - Sede"
        },
        {
            "id": 196,
            "name": "Aduana Guadalajara - Aeropuerto Internacional"
        },
        {
            "id": 199,
            "name": "Local Colima - Modulo de Manzanillo"
        },
        {
            "id": 200,
            "name": "Aduana Manzanillo - Sede"
        },
        {
            "id": 201,
            "name": "Aduana Aguascalientes - Seccion Aduanera Interpuerto de San Luis Potosi"
        },
        {
            "id": 202,
            "name": "Aduana Salina Cruz - Aeropuerto Internacional de Huatulco"
        },
        {
            "id": 203,
            "name": "Aduana Aguascalientes - Aeropuerto Internacional de Zacatecas"
        },
        {
            "id": 204,
            "name": "Aduana Guadalajara - Aeropuerto Internacional de Puerto Vallarta"
        },
        {
            "id": 205,
            "name": "Aduana Guadalajara - Seccion Intermodal Ferroviaria"
        },
        {
            "id": 206,
            "name": "Aduana Matamoros - Puerta Mexico Puente Nuevo"
        },
        {
            "id": 208,
            "name": "Aduana Queretaro"
        },
        {
            "id": 209,
            "name": "Local Celaya - Sede"
        },
        {
            "id": 210,
            "name": "Local Queretaro - Sede"
        },
        {
            "id": 211,
            "name": "Local San Luis Potosi- Sede"
        },
        {
            "id": 212,
            "name": "Local Leon - Sede"
        },
        {
            "id": 213,
            "name": "Local Irapuato - Sede"
        },
        {
            "id": 214,
            "name": "Local Morelia - Sede"
        },
        {
            "id": 215,
            "name": "Local Uruapan - Sede"
        },
        {
            "id": 216,
            "name": "Local Uruapan - Subsede Uruapan"
        },
        {
            "id": 217,
            "name": "Local Pachuca - Sede"
        },
        {
            "id": 219,
            "name": "Local Uruapan - MAF Zamora"
        },
        {
            "id": 222,
            "name": "Aduana Guanajuato - Seccion Aduanera Celaya"
        },
        {
            "id": 224,
            "name": "Aduana Guanajuato - Aeropuerto Internacional del Bajio"
        },
        {
            "id": 225,
            "name": "Centro de Procesamiento Electronico de Datos"
        },
        {
            "id": 226,
            "name": "Aduana Lazaro Cardenas - Aeropuerto Internacional de Ixtapa Zihuatanejo"
        },
        {
            "id": 228,
            "name": "Aduana Subteniente Lopez - Sede"
        },
        {
            "id": 229,
            "name": "Aduana Cd. Del Carmen - Sede"
        },
        {
            "id": 231,
            "name": "Aduana Salina Cruz - Sede"
        },
        {
            "id": 232,
            "name": "Aduana Cd. Hidalgo - Sede (Suchiate II)"
        },
        {
            "id": 233,
            "name": "Aduana Dos Bocas - Sede"
        },
        {
            "id": 234,
            "name": "Aduana Cancun - Sede"
        },
        {
            "id": 235,
            "name": "Local Oaxaca - Administracion Regional de Oaxaca"
        },
        {
            "id": 236,
            "name": "Local Oaxaca - Sede"
        },
        {
            "id": 237,
            "name": "Local Villahermosa - Sede"
        },
        {
            "id": 238,
            "name": "Local Merida - Sede"
        },
        {
            "id": 239,
            "name": "Local Cancun - Sede"
        },
        {
            "id": 241,
            "name": "Local Oaxaca - Administracion Local de Auditoria"
        },
        {
            "id": 242,
            "name": "Local Oaxaca - Administracion de Innovacion y Calidad de Oaxaca"
        },
        {
            "id": 243,
            "name": "Local Tuxtla Gutierrez - Sede"
        },
        {
            "id": 244,
            "name": "Local Tapachula - Sede"
        },
        {
            "id": 245,
            "name": "Local Campeche - Sede"
        },
        {
            "id": 246,
            "name": "Local Campeche - ALAF de Campeche"
        },
        {
            "id": 247,
            "name": "Local Chetumal - Sede"
        },
        {
            "id": 248,
            "name": "Aduana Puerto Progreso - Area de reconocimiento Aduanero"
        },
        {
            "id": 251,
            "name": "Aduana Cancun - Seccion Puerto Morelos"
        },
        {
            "id": 252,
            "name": "Aduana Cancun - Seccion Aduanera de Cozumel"
        },
        {
            "id": 255,
            "name": "Aduana Cd. Hidalgo - Rodolfo Robles Suchiate I"
        },
        {
            "id": 256,
            "name": "Aduana Cd. Hidalgo - Talisman"
        },
        {
            "id": 257,
            "name": "Aduana Cd. Hidalgo - Aeropuerto Internacional Tapachula"
        },
        {
            "id": 258,
            "name": "Aduana Cd. Hidalgo - Cuahutemoc"
        },
        {
            "id": 259,
            "name": "Aduana Puerto Progreso - Seccion Aduanera Merida"
        },
        {
            "id": 261,
            "name": "Aduana Salina Cruz - Aeropuerto internacional de Oaxaca"
        },
        {
            "id": 262,
            "name": "Aduana Coatzacoalcos - Sede"
        },
        {
            "id": 263,
            "name": "Aduana Puebla - Sede"
        },
        {
            "id": 264,
            "name": "Aduana Acapulco - Sede"
        },
        {
            "id": 265,
            "name": "Aduana Veracruz - Sede"
        },
        {
            "id": 266,
            "name": "Local Puebla Sur- Sede"
        },
        {
            "id": 267,
            "name": "Local Cuernavaca - Sede"
        },
        {
            "id": 268,
            "name": "Local Acapulco - Sede"
        },
        {
            "id": 269,
            "name": "Local Veracruz - Sede (Marina Mercante)"
        },
        {
            "id": 272,
            "name": "Local Coatzacoalcos - Sede"
        },
        {
            "id": 273,
            "name": "Local Xalapa - Sede"
        },
        {
            "id": 275,
            "name": "Local Cordoba - Sede"
        },
        {
            "id": 276,
            "name": "Local Cordoba- Subsede de ALAF"
        },
        {
            "id": 277,
            "name": "Local Tlaxcala - Sede"
        },
        {
            "id": 278,
            "name": "Local Tlaxcala - Local de Juridica de Ingresos de Tlaxcala"
        },
        {
            "id": 279,
            "name": "Local Tlaxcala - Edificio de Auditoria"
        },
        {
            "id": 282,
            "name": "Local Iguala - ALAF Iguala Bandera"
        },
        {
            "id": 283,
            "name": "Local Puebla Norte - Sede"
        },
        {
            "id": 288,
            "name": "Local Iguala - Subsede de Chilpancingo"
        },
        {
            "id": 289,
            "name": "Aduana Acapulco - Aeropuerto Internacional de Acapulco"
        },
        {
            "id": 290,
            "name": "Aduana Dos Bocas - Aeropuerto Internacional de Villahermosa"
        },
        {
            "id": 291,
            "name": "Aduana Veracruz - Aeropuerto Internacional de Veracruz"
        },
        {
            "id": 293,
            "name": "Aduana Puebla - Aeropuerto de Puebla Seccion Pasajeros"
        },
        {
            "id": 294,
            "name": "Aduana Puebla - Seccion Aduanera de Cuernavaca"
        },
        {
            "id": 296,
            "name": "Aduana Pantaco - Sede"
        },
        {
            "id": 297,
            "name": "Aduana Toluca - Sede"
        },
        {
            "id": 298,
            "name": "Aduana AICM - Sede"
        },
        {
            "id": 299,
            "name": "Local DF Sur - Sede"
        },
        {
            "id": 302,
            "name": "Local DF Norte - Sede"
        },
        {
            "id": 303,
            "name": "Local Toluca - Sede"
        },
        {
            "id": 304,
            "name": "Local Naucalpan - Sede"
        },
        {
            "id": 307,
            "name": "Local Naucalpan - MAF Naucalpan"
        },
        {
            "id": 308,
            "name": "Local Naucalpan - MAF Texcoco"
        },
        {
            "id": 309,
            "name": "Local Naucalpan - MAF Nezahualcoyotl"
        },
        {
            "id": 312,
            "name": "Local Naucalpan - MAF Cuautitlan"
        },
        {
            "id": 314,
            "name": "Aduana AICM - Terminal 1"
        },
        {
            "id": 315,
            "name": "AGRS - MAF Col. El Reloj"
        },
        {
            "id": 316,
            "name": "Local DF Norte - Modulo Tacubaya"
        },
        {
            "id": 318,
            "name": "Aduana Toluca - Aeropuerto Toluca"
        },
        {
            "id": 319,
            "name": "Aduana Salina Cruz - Aeropuerto Internacional de Puerto Escondido"
        },
        {
            "id": 320,
            "name": "AGRS - El Reloj (CPN)"
        },
        {
            "id": 321,
            "name": "AGRS - Conjunto Hidalgo (BANCEN)"
        },
        {
            "id": 322,
            "name": "AGRS - Sinaloa 43"
        },
        {
            "id": 323,
            "name": "AGRS - Lucas Alaman"
        },
        {
            "id": 328,
            "name": "AGRS - Laboratorio de Aduanas"
        },
        {
            "id": 334,
            "name": "Local DF Oriente - Almacen Chicoloapan"
        },
        {
            "id": 335,
            "name": "Aduana Pantaco - Seccion Aduanera"
        },
        {
            "id": 336,
            "name": "Local DF Sur - Modulo Del Valle (Felix Cuevas)"
        },
        {
            "id": 339,
            "name": "AGRS - Almacen Talisman"
        },
        {
            "id": 340,
            "name": "Local Uruapan - MAF Lazaro Cardenas"
        },
        {
            "id": 341,
            "name": "Local Cabo San Lucas - Sede"
        },
        {
            "id": 345,
            "name": "Aduana Piedras Negras - Modulo de Ferrocarril"
        },
        {
            "id": 348,
            "name": "Local Hermosillo - Subsede Caborca"
        },
        {
            "id": 349,
            "name": "Local Nogales - Subsede Agua Prieta"
        },
        {
            "id": 351,
            "name": "Local Naucalpan - MAF Ecatepec (Center Plaza)"
        },
        {
            "id": 353,
            "name": "Aduana Cancun - Aeropuerto Internacional de Cancun T2"
        },
        {
            "id": 356,
            "name": "Aduana Nogales - Seccion de Ferrocarril"
        },
        {
            "id": 357,
            "name": "Aduana Nuevo Laredo - Estacion Ferroviaria Km. 6"
        },
        {
            "id": 361,
            "name": "Aduana Reynosa - Las Flores Nuevo Progreso (Exportacion)"
        },
        {
            "id": 362,
            "name": "Aduana Aguascalientes - Aeropuerto de San Luis Potosi Seccion de Carga"
        },
        {
            "id": 363,
            "name": "Aduana Veracruz - Terminal Maritima Muelles 4 y 6"
        },
        {
            "id": 365,
            "name": "Aeropuerto de Manzanillo - Aduana de Manzanillo"
        },
        {
            "id": 367,
            "name": "Aduana Tampico - Aeropuerto Tampico"
        },
        {
            "id": 368,
            "name": "Aduana Reynosa - Aeropuerto Lucio Blanco"
        },
        {
            "id": 369,
            "name": "Aduana Guanajuato - Sede"
        },
        {
            "id": 371,
            "name": "Aduana Mazatlan - Aeropuerto Mazatlan"
        },
        {
            "id": 372,
            "name": "Aduana La Paz - Aeropuerto Internacional de Baja California Sur"
        },
        {
            "id": 374,
            "name": "Aduana Mexicali - Garita Vieja"
        },
        {
            "id": 377,
            "name": "Aduana Dos Bocas - Seccion Aduanera El Ceibo"
        },
        {
            "id": 379,
            "name": "Aduana Queretaro - Aeropuerto Internacional de Morelia"
        },
        {
            "id": 380,
            "name": "Aduana Queretaro - Aeropuerto Intercontinental de Queretaro"
        },
        {
            "id": 381,
            "name": "Aduana Nogales - Garita 3 Mariposas"
        },
        {
            "id": 383,
            "name": "Aduana AICM - Terminal 2"
        },
        {
            "id": 384,
            "name": "Aduana Cancun - Aeropuerto Internacional de Cancun T3"
        },
        {
            "id": 385,
            "name": "Aduana AICM - SEPOMEX"
        },
        {
            "id": 386,
            "name": "Local Cuernavaca - MAIC Cuautla Morelos"
        },
        {
            "id": 390,
            "name": "Aduana Puebla - Aeropuerto de Puebla Seccion Carga"
        },
        {
            "id": 391,
            "name": "Aduana Toluca - Puerta Mexico Recinto Intermodal"
        },
        {
            "id": 392,
            "name": "Aduana Aguascalientes - Sede (Seccion Aduanera Chicalote)"
        },
        {
            "id": 396,
            "name": "Aduana Nuevo Laredo - Puente Negro Rayos Gamma"
        },
        {
            "id": 400,
            "name": "Aduana Lazaro Cardenas - Aduana de FFCC Lazaro Cardenas"
        },
        {
            "id": 401,
            "name": "Aduana Nuevo Laredo - Antigua Aduana"
        },
        {
            "id": 402,
            "name": "Aduana Aguascalientes - Aeropuerto Internacional de Aguascalientes"
        },
        {
            "id": 404,
            "name": "AGA - C2"
        },
        {
            "id": 405,
            "name": "AGRS - Inmueble Moctezuma Grandes Contribuyentes"
        },
        {
            "id": 407,
            "name": "Aduana Queretaro - Aeropuerto Intercontinental de Queretaro Seccion de Carga"
        },
        {
            "id": 408,
            "name": "Aduana Altamira - Aeropuerto de Cd. Victoria"
        },
        {
            "id": 409,
            "name": "Terminal 8 Aeropuerto Internacional Mariano Escobedo"
        },
        {
            "id": 410,
            "name": "Aduana Cd. Juarez - Puente Santa Fe"
        },
        {
            "id": 411,
            "name": "Aduana Cd. Juarez - Puente Reforma Puente Lerdo"
        },
        {
            "id": 417,
            "name": "Aduana Cd. Juarez - Garita Guadalupe Dr. Parra"
        },
        {
            "id": 418,
            "name": "Aduana Cd. Juarez - Garita El Porvenir"
        },
        {
            "id": 419,
            "name": "Aduana Reynosa - Anzalduas"
        },
        {
            "id": 420,
            "name": "Local Cd. Acuna (Extension del 105)"
        },
        {
            "id": 423,
            "name": "Aduana Cd. Hidalgo - Garita del Carmen-Xhan"
        },
        {
            "id": 424,
            "name": "Aduana Cd. Hidalgo - El Gariton"
        },
        {
            "id": 427,
            "name": "Aduana La Paz - Amacen Fiscal del Aeropuerto de La Paz"
        },
        {
            "id": 428,
            "name": "Aduana La Paz - Sala de Servicios Aduanales del Aerodromo de Cabo San Lucas"
        },
        {
            "id": 429,
            "name": "Aduana Piedras Negras - Puente 1"
        },
        {
            "id": 430,
            "name": "Aduana Monterrey - Aeropuerto de Monterrey Seccion A Pasajeros"
        },
        {
            "id": 431,
            "name": "Aduana Monterrey - Sala internacional de pasajeros ADN"
        },
        {
            "id": 435,
            "name": "Aduana Miguel Aleman - Cortina Presa Falcon"
        },
        {
            "id": 437,
            "name": "Aduana Cancun - Sala Internacional del Aeropuerto de Cozumel"
        },
        {
            "id": 438,
            "name": "Aduana Cancun - Terminal FBO Vuelos Privados"
        },
        {
            "id": 439,
            "name": "Aduana Coatzacoalcos - Aeropuerto Minatitlan"
        },
        {
            "id": 440,
            "name": "Aduana Mexicali - Aeropuerto San Felipe"
        },
        {
            "id": 441,
            "name": "Aduana Piedras Negras - Aeropuerto Piedras Negras"
        },
        {
            "id": 443,
            "name": "Aduana Piedras Negras - Aeropuerto de Monclova"
        },
        {
            "id": 444,
            "name": "Aduana Piedras Negras - Patio Fiscal"
        },
        {
            "id": 447,
            "name": "Aduana Cd. Acuna - Aeropuerto"
        },
        {
            "id": 451,
            "name": "Aduana Nogales - Garita 2 Peatonal"
        },
        {
            "id": 452,
            "name": "Aduana Nogales - Aeropuerto Nogales"
        },
        {
            "id": 454,
            "name": "Aduana Reynosa - Central de Autobuses"
        },
        {
            "id": 459,
            "name": "Aduana Subteniente Lopez - Aeropuerto Internacional de Chetumal"
        },
        {
            "id": 460,
            "name": "Aduana Subteniente Lopez - Central de Autobuses de Chetumal"
        },
        {
            "id": 461,
            "name": "Aduana Manzanillo - San Pedrito"
        },
        {
            "id": 462,
            "name": "Aduana Manzanillo - Modulo de Ferrocarril Rayos Gamma"
        },
        {
            "id": 465,
            "name": "Aduana Cd. Camargo - Puerto Diaz Ordaz El Vado"
        },
        {
            "id": 466,
            "name": "Aduana Sonoyta - Garita Almejas"
        },
        {
            "id": 467,
            "name": "Aduana Nogales - Garita El Sasabe"
        },
        {
            "id": 468,
            "name": "Aduana Monterrey - Seccion Aduanera del Ferrocarril de Kansas City Southern"
        },
        {
            "id": 470,
            "name": "Aduana Tampico - Recinto Fiscalizado de Tampico Muelle 10 y 11"
        },
        {
            "id": 471,
            "name": "Aduana Cd. Acuna - Cruce Presa la Amistad"
        },
        {
            "id": 476,
            "name": "Aduana Cd. Del Carmen - Aeropuerto Internacional de Cd. Del Carmen"
        },
        {
            "id": 477,
            "name": "Aduana Cd. del Carmen - Aeropuerto Internacional de Campeche"
        },
        {
            "id": 485,
            "name": "Aduana Puebla - Aeropuerto Internacional de Cuernavaca"
        },
        {
            "id": 486,
            "name": "Aduna San Luis Rio Colorado - San Luis Rio Colorado II"
        },
        {
            "id": 488,
            "name": "Aduana Reynosa - Puente Internacional Rio Bravo Donna"
        },
        {
            "id": 490,
            "name": "ECE de Chichimequillas"
        },
        {
            "id": 492,
            "name": "AGRS - Almacen Modulo XVII"
        },
        {
            "id": 493,
            "name": "Local San Luis Potosi - Unidad de Diligenciacion"
        },
        {
            "id": 495,
            "name": "Aduana Sonoyta - Garita Caborca"
        },
        {
            "id": 496,
            "name": "Aduana Lazaro Cardenas - Sede Isla Cayacal"
        },
        {
            "id": 497,
            "name": "Local DF Centro El Caballito - Sede"
        },
        {
            "id": 502,
            "name": "Aduana Puerto Progreso - Aeropuerto Internacional de Pasajeros de Merida"
        },
        {
            "id": 503,
            "name": "Aduana Sonoyta - Aeropuerto Internacional del Mar de Cortes"
        },
        {
            "id": 504,
            "name": "Aduana Cd. Hidalgo - Aeropuerto Internacional Albino Corzo"
        },
        {
            "id": 513,
            "name": "Local Toluca - Modulo Valle de Bravo"
        },
        {
            "id": 517,
            "name": "Local Cd. Victoria - MFS Cd. Mante"
        },
        {
            "id": 518,
            "name": "Local Celaya - Modulo Acambaro"
        },
        {
            "id": 519,
            "name": "Local Coatzacoalcos - Modulo San Andres Tuxtla"
        },
        {
            "id": 520,
            "name": "Local Irapuato - Modulo Salamanca"
        },
        {
            "id": 521,
            "name": "Local La Paz - Subsede Constitucion"
        },
        {
            "id": 522,
            "name": "Local Puebla Sur - Modulo San Martin Texmelucan"
        },
        {
            "id": 523,
            "name": "Local Uruapan - MAF La Piedad"
        },
        {
            "id": 525,
            "name": "MTS Sahuayo"
        },
        {
            "id": 526,
            "name": "Local Veracruz - MAF Alvarado"
        },
        {
            "id": 530,
            "name": "Aduana Dos Bocas - Seccion Dos Bocas"
        },
        {
            "id": 531,
            "name": "Aduana Tijuana - Cruce Fronterizo El Chaparral"
        },
        {
            "id": 533,
            "name": "Aduana Subteniente Lopez - Subteniente Lopez II"
        },
        {
            "id": 534,
            "name": "Aduana Cd. Hidalgo - Seccion Aduanera Huixtla"
        },
        {
            "id": 535,
            "name": "Aduana Aguascalientes - Aeropuerto de San Luis Potosi.- Sala de Pasajeros"
        },
        {
            "id": 538,
            "name": "Aduana Dos Bocas - Aeropuerto Internacional de Palenque"
        },
        {
            "id": 540,
            "name": "Aduana Tijuana - Puerta Mexico Este"
        },
        {
            "id": 541,
            "name": "Aduana Manzanillo Zona Norte"
        },
        {
            "id": 543,
            "name": "Local DF Oriente - Sede"
        },
        {
            "id": 546,
            "name": "Almacen Fiscal Reforma en Nuevo Laredo"
        },
        {
            "id": 547,
            "name": "Aduana Monterrey - Seccion aduanera FERROMEX"
        },
        {
            "id": 548,
            "name": "MODULO: 5 ORIENTE PUEBLA"
        },
        {
            "id": 550,
            "name": "Aduana Dos Bocas - Catazaja"
        },
        {
            "id": 552,
            "name": "Aduana Cd. Hidalgo - Comitan-Trinitaria"
        },
        {
            "id": 573,
            "name": "Local Toluca- Sede"
        },
        {
            "id": 584,
            "name": "Quintana Roo 1"
        },
        {
            "id": 580,
            "name": "Nuevo cruce comercial en Guadalupe - Tomillo"
        },
        {
            "id": 581,
            "name": "Tuxpan Port Terminal TPT"
        },
        {
            "id": 587,
            "name": "Local del Sur - MAF Plaza Oasis"
        },
        {
            "id": 588,
            "name": "Aduana de Cancun T4"
        },
        {
            "id": 590,
            "name": "Recinto Fiscalizado Matrix"
        },
        {
            "id": 591,
            "name": "Aduana de Monterrey - Seccion aduanera interpuerto"
        },
        {
            "id": 595,
            "name": "Aduana Toluca -Recinto Fiscal en Aerolineas Ejecutivas"
        },
        {
            "id": 597,
            "name": "Recinto Fiscal del Hangar Servicios Aereos Across Aduana de Toluca"
        },
        {
            "id": 601,
            "name": "Recinto Fiscal en Hangar Asertec - Aduana de Toluca"
        },
        {
            "id": 605,
            "name": "Aeropuerto Internacional Felipe Angeles (AIFA) - carga"
        },
        {
            "id": 606,
            "name": "Aeropuerto Internacional Felipe Angeles (AIFA)- SEPOMEX"
        },
        {
            "id": 99999999,
            "name": "Aeropuerto Internacional Felipe Angeles (AIFA)"
        },
    ];

export default clients;