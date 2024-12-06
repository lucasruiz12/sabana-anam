const clients = [
    {
        "id": 32,
        "name": "32 - AGE - La Virgen"
    },
    {
        "id": 47,
        "name": "47 - Aduana Agua Prieta - Sede"
    },
    {
        "id": 48,
        "name": "48 - Aduana Guaymas - Sede"
    },
    {
        "id": 49,
        "name": "49 - Aduana Naco - Sede"
    },
    {
        "id": 50,
        "name": "50 - Aduana La Paz - Sede/Local de La Paz sede"
    },
    {
        "id": 51,
        "name": "51 - Aduana Nogales Puente 3 - Sede"
    },
    {
        "id": 52,
        "name": "52 - Local Mazatlan - Sede"
    },
    {
        "id": 53,
        "name": "53 - Aduana Ensenada - Sede"
    },
    {
        "id": 54,
        "name": "54 - Aduana Tijuana - Mesa de Otay - Sede"
    },
    {
        "id": 55,
        "name": "55 - Aduana Tecate - Sede"
    },
    {
        "id": 56,
        "name": "56 - Aduana Mexicali  Seccion Nuevo Mexicali - Sede"
    },
    {
        "id": 57,
        "name": "57 - Aduana San Luis Rio Colorado - Sede"
    },
    {
        "id": 58,
        "name": "58 - Aduana Sonoyta - Sede"
    },
    {
        "id": 59,
        "name": "59 - Aduana Sonoyta - Garita San Emeterio"
    },
    {
        "id": 60,
        "name": "60 - Local Hermosillo - Sede"
    },
    {
        "id": 61,
        "name": "61 - Local Tijuana - Sede"
    },
    {
        "id": 63,
        "name": "63 - Local Nogales - Sede"
    },
    {
        "id": 64,
        "name": "64 - Local Ensenada - Sede"
    },
    {
        "id": 65,
        "name": "65 - Local Ensenada - Administracion Local de Auditoria Fiscal - Subsede Alvarado"
    },
    {
        "id": 66,
        "name": "66 - Local Mexicali - Sede (Plaza Fimbres)"
    },
    {
        "id": 67,
        "name": "67 - Local Mexicali - Centauro del Norte"
    },
    {
        "id": 68,
        "name": "68 - Local Cd. Obregon - Sede"
    },
    {
        "id": 69,
        "name": "69 - Local Los Mochis - Sede"
    },
    {
        "id": 71,
        "name": "71 - Local Culiacan - Sede"
    },
    {
        "id": 77,
        "name": "77 - Local Mexicali - Subsede Puerto Penasco"
    },
    {
        "id": 78,
        "name": "78 - Aduana Mazatlan - Aeropuerto de Culiacan"
    },
    {
        "id": 79,
        "name": "79 - Aduana Mazatlan - Seccion Topolobampo"
    },
    {
        "id": 80,
        "name": "80 - Aduana Mazatlan - Sede"
    },
    {
        "id": 81,
        "name": "81 - Aduana La Paz - Seccion Aduanera Pichilingue"
    },
    {
        "id": 82,
        "name": "82 - Aduana La Paz - Seccion Aduanera Santa Rosalia"
    },
    {
        "id": 83,
        "name": "83 - Aduana La Paz - Aeropuerto Internacional de San Jose del Cabo"
    },
    {
        "id": 84,
        "name": "84 - Aduana La Paz - Aeropuerto Intercontinental de Loreto"
    },
    {
        "id": 86,
        "name": "86 - Aduana La Paz - Seccion La Paz Area de Carga"
    },
    {
        "id": 87,
        "name": "87 - Aduana Guaymas - Aeropuerto Internacional de Cd. Obregon"
    },
    {
        "id": 88,
        "name": "88 - Aduana Guaymas - Aeropuerto de Hermosillo"
    },
    {
        "id": 89,
        "name": "89 - Aduana Guaymas - Modulo Portuario"
    },
    {
        "id": 90,
        "name": "90 - Aduana Mexicali - Algodones"
    },
    {
        "id": 91,
        "name": "91 - Aduana Mexicali - Aeropuerto Mexicali"
    },
    {
        "id": 95,
        "name": "95 - Aduana Cd. Del Carmen - Seccion Aduanera Seybaplaya"
    },
    {
        "id": 96,
        "name": "96 - Local Los Mochis - Subsede de Guasave"
    },
    {
        "id": 97,
        "name": "97 - Aduana Nogales - Garita 1 Puerta Mexico"
    },
    {
        "id": 101,
        "name": "101 - Aduana Piedras Negras - Sede (Puente II)/Local Piedras Negras  - Sede"
    },
    {
        "id": 102,
        "name": "102 - Aduana Ojinaga - Sede"
    },
    {
        "id": 103,
        "name": "103 - Aduana Puerto Palomas - Sede"
    },
    {
        "id": 104,
        "name": "104 - Aduana Torreon - Sede"
    },
    {
        "id": 105,
        "name": "105 - Aduana Cd. Acuna - Sede"
    },
    {
        "id": 106,
        "name": "106 - Aduana Cd. Juarez - Puente Cordova - Sede"
    },
    {
        "id": 107,
        "name": "107 - Aduana Cd. Juarez - Seccion Zaragoza"
    },
    {
        "id": 108,
        "name": "108 - Aduana Chihuahua - Sede"
    },
    {
        "id": 109,
        "name": "109 - Local Torreon - Sede"
    },
    {
        "id": 110,
        "name": "110 - Local Chihuahua - Sede"
    },
    {
        "id": 112,
        "name": "112 - Local Cd. Juarez - Sede (Simona Barba)"
    },
    {
        "id": 113,
        "name": "113 - Local Durango - Sede"
    },
    {
        "id": 115,
        "name": "115 - Local Zacatecas - Sede"
    },
    {
        "id": 116,
        "name": "116 - Local Saltillo - Sede"
    },
    {
        "id": 118,
        "name": "118 - Local de Piedras Negras (Extension del 101)"
    },
    {
        "id": 120,
        "name": "120 - Local Saltillo - MAF de Monclova"
    },
    {
        "id": 121,
        "name": "121 - Aduana Cd. Juarez - Modulo de Ferrocarril"
    },
    {
        "id": 122,
        "name": "122 - Aduana Cd. Juarez - Aeropuerto Cd. Juarez Area de Carga"
    },
    {
        "id": 123,
        "name": "123 - Aduana Cd. Juarez - Seccion San Jeronimo"
    },
    {
        "id": 124,
        "name": "124 - Aduana Cd Juarez - Garita de salida Km 30"
    },
    {
        "id": 126,
        "name": "126 - Aduana Chihuahua - Aeropuerto de Chihuahua Seccion de Carga"
    },
    {
        "id": 127,
        "name": "127 - Aduana Chihuahua - Las Americas"
    },
    {
        "id": 128,
        "name": "128 - Local San Luis Potosi - Subsede Ciudad Valles"
    },
    {
        "id": 129,
        "name": "129 - Aduana Piedras Negras - Aeropuerto Ramos Arizpe"
    },
    {
        "id": 130,
        "name": "130 - Aduana Torreon - Aeropuerto Internacional de Torreon"
    },
    {
        "id": 131,
        "name": "131 - Aduana Torreon - Aeropuerto Internacional de Durango"
    },
    {
        "id": 134,
        "name": "134 - Aduana Ojinaga  Puerta Internacional"
    },
    {
        "id": 136,
        "name": "136 - Aduana Altamira - Sede"
    },
    {
        "id": 137,
        "name": "137 - Aduana Tuxpan - Sede"
    },
    {
        "id": 138,
        "name": "138 - Aduana Cd. Camargo - Sede (Puente Internacional)"
    },
    {
        "id": 139,
        "name": "139 - Aduana Miguel Aleman - Sede"
    },
    {
        "id": 140,
        "name": "140 - Aduana Monterrey - Aeropuerto Internacional Mariano Escobedo Seccion Carga"
    },
    {
        "id": 141,
        "name": "141 - Aduana Matamoros - Puente Zaragoza Los Tomates - Sede"
    },
    {
        "id": 142,
        "name": "142 - Aduana Reynosa - Puente Nuevo Amanecer Sede"
    },
    {
        "id": 143,
        "name": "143 - Aduana Monterrey - Sede"
    },
    {
        "id": 144,
        "name": "144 - Aduana Colombia - Sede"
    },
    {
        "id": 145,
        "name": "145 - Aduana Nuevo Laredo Puente 3 - Sede"
    },
    {
        "id": 146,
        "name": "146 - Aduana Tampico - Sede"
    },
    {
        "id": 147,
        "name": "147 - Local Guadalupe - Sede"
    },
    {
        "id": 148,
        "name": "148 - Local Cd. Victoria - Sede"
    },
    {
        "id": 149,
        "name": "149 - Local Monterrey - Sede"
    },
    {
        "id": 150,
        "name": "150 - Local San Pedro Garza - Sede"
    },
    {
        "id": 151,
        "name": "151 - Local Reynosa - Sede"
    },
    {
        "id": 152,
        "name": "152 - Local Matamoros - Sede"
    },
    {
        "id": 153,
        "name": "153 - Local Tampico - Sede"
    },
    {
        "id": 154,
        "name": "154 - Local Nuevo Laredo - Sede"
    },
    {
        "id": 155,
        "name": "155 - Local Tuxpan - Sede"
    },
    {
        "id": 157,
        "name": "157 - Local Tuxpan - MAF Poza Rica"
    },
    {
        "id": 158,
        "name": "158 - Local Campeche - Subsede Cd del Carmen"
    },
    {
        "id": 160,
        "name": "160 - Local San Pedro Garza - MAF Montemorelos"
    },
    {
        "id": 161,
        "name": "161 - Local Tuxpan - MAF Panuco"
    },
    {
        "id": 163,
        "name": "163 - Aduana Nuevo Laredo - Puente 1"
    },
    {
        "id": 166,
        "name": "166 - Aduana Nuevo Laredo - Estacion Sanchez"
    },
    {
        "id": 167,
        "name": "167 - Aduana Nuevo Laredo - Puente 2"
    },
    {
        "id": 168,
        "name": "168 - Aduana Guaymas - Aeropuerto internacional de Guaymas"
    },
    {
        "id": 170,
        "name": "170 - Aduana Reynosa - Plataforma Fiscal"
    },
    {
        "id": 171,
        "name": "171 - Aduana Reynosa - Benito Juarez (Puente 1 y 2)"
    },
    {
        "id": 175,
        "name": "175 - Aduana Reynosa - Las Flores Nuevo Progreso (Importacion)"
    },
    {
        "id": 176,
        "name": "176 - Aduana Matamoros - Seccion Lucio Blanco"
    },
    {
        "id": 178,
        "name": "178 - Aduana Matamoros - Puente Brownsville/Matamoros Puente Viejo"
    },
    {
        "id": 181,
        "name": "181 - Aduana de Guadalajara- Sede"
    },
    {
        "id": 182,
        "name": "182 - Local Guadalajara Centro - Sede"
    },
    {
        "id": 184,
        "name": "184 - Local Guadalajara Sur - Sede"
    },
    {
        "id": 185,
        "name": "185 - Local Aguascalientes - Sede"
    },
    {
        "id": 186,
        "name": "186 - Local Zapopan - Sede"
    },
    {
        "id": 187,
        "name": "187 - Local Cd. Guzman - Sede"
    },
    {
        "id": 188,
        "name": "188 - Local Cd. Guzman - Modulo Cd. Guzman"
    },
    {
        "id": 189,
        "name": "189 - Local Tepic- Sede"
    },
    {
        "id": 190,
        "name": "190 - Local  Colima - Sede"
    },
    {
        "id": 193,
        "name": "193 - Local Puerto Vallarta - Sede"
    },
    {
        "id": 196,
        "name": "196 - Aduana Guadalajara - Aeropuerto Internacional"
    },
    {
        "id": 199,
        "name": "199 - Local Colima - Modulo de Manzanillo"
    },
    {
        "id": 200,
        "name": "200 - Aduana Manzanillo - Sede"
    },
    {
        "id": 201,
        "name": "201 - Aduana Aguascalientes - Seccion Aduanera Interpuerto de San Luis Potosi"
    },
    {
        "id": 202,
        "name": "202 - Aduana Salina Cruz - Aeropuerto Internacional de Huatulco"
    },
    {
        "id": 203,
        "name": "203 - Aduana Aguascalientes - Aeropuerto Internacional de Zacatecas"
    },
    {
        "id": 204,
        "name": "204 - Aduana Guadalajara - Aeropuerto Internacional de Puerto Vallarta"
    },
    {
        "id": 205,
        "name": "205 - Aduana Guadalajara - Seccion Intermodal Ferroviaria"
    },
    {
        "id": 206,
        "name": "206 - Aduana Matamoros - Puerta Mexico Puente Nuevo"
    },
    {
        "id": 208,
        "name": "208 - Aduana Queretaro"
    },
    {
        "id": 209,
        "name": "209 - Local Celaya - Sede"
    },
    {
        "id": 210,
        "name": "210 - Local Queretaro - Sede"
    },
    {
        "id": 211,
        "name": "211 - Local San Luis Potosi- Sede"
    },
    {
        "id": 212,
        "name": "212 - Local Leon - Sede"
    },
    {
        "id": 213,
        "name": "213 - Local Irapuato - Sede"
    },
    {
        "id": 214,
        "name": "214 - Local Morelia - Sede"
    },
    {
        "id": 215,
        "name": "215 - Local Uruapan - Sede"
    },
    {
        "id": 216,
        "name": "216 - Local Uruapan - Subsede Uruapan"
    },
    {
        "id": 217,
        "name": "217 - Local Pachuca - Sede"
    },
    {
        "id": 219,
        "name": "219 - Local Uruapan - MAF Zamora"
    },
    {
        "id": 222,
        "name": "222 - Aduana Guanajuato - Seccion Aduanera Celaya"
    },
    {
        "id": 224,
        "name": "224 - Aduana Guanajuato - Aeropuerto Internacional del Bajio"
    },
    {
        "id": 225,
        "name": "225 - Centro de Procesamiento Electronico de Datos"
    },
    {
        "id": 226,
        "name": "226 - Aduana Lazaro Cardenas - Aeropuerto Internacional de Ixtapa Zihuatanejo"
    },
    {
        "id": 228,
        "name": "228 - Aduana Subteniente Lopez - Sede"
    },
    {
        "id": 229,
        "name": "229 - Aduana Cd. Del Carmen - Sede"
    },
    {
        "id": 231,
        "name": "231 - Aduana Salina Cruz - Sede"
    },
    {
        "id": 232,
        "name": "232 - Aduana Cd. Hidalgo - Sede (Suchiate II)"
    },
    {
        "id": 233,
        "name": "233 - Aduana Dos Bocas - Sede"
    },
    {
        "id": 234,
        "name": "234 - Aduana Cancun - Sede"
    },
    {
        "id": 235,
        "name": "235 - Local Oaxaca - Administracion Regional de Oaxaca"
    },
    {
        "id": 236,
        "name": "236 - Local Oaxaca - Sede"
    },
    {
        "id": 237,
        "name": "237 - Local Villahermosa - Sede"
    },
    {
        "id": 238,
        "name": "238 - Local Merida - Sede"
    },
    {
        "id": 239,
        "name": "239 - Local Cancun - Sede"
    },
    {
        "id": 241,
        "name": "241 - Local Oaxaca - Administracion Local de Auditoria"
    },
    {
        "id": 242,
        "name": "242 - Local Oaxaca - Administracion de Innovacion y Calidad de Oaxaca"
    },
    {
        "id": 243,
        "name": "243 - Local Tuxtla Gutierrez - Sede"
    },
    {
        "id": 244,
        "name": "244 - Local Tapachula - Sede"
    },
    {
        "id": 245,
        "name": "245 - Local Campeche - Sede"
    },
    {
        "id": 246,
        "name": "246 - Local Campeche - ALAF de Campeche"
    },
    {
        "id": 247,
        "name": "247 - Local Chetumal - Sede"
    },
    {
        "id": 248,
        "name": "248 - Aduana Puerto Progreso - Area de reconocimiento Aduanero"
    },
    {
        "id": 251,
        "name": "251 - Aduana Cancun - Seccion Puerto Morelos"
    },
    {
        "id": 252,
        "name": "252 - Aduana Cancun - Seccion Aduanera de Cozumel"
    },
    {
        "id": 255,
        "name": "255 - Aduana Cd. Hidalgo - Rodolfo Robles Suchiate I"
    },
    {
        "id": 256,
        "name": "256 - Aduana Cd. Hidalgo - Talisman"
    },
    {
        "id": 257,
        "name": "257 - Aduana Cd. Hidalgo - Aeropuerto Internacional Tapachula"
    },
    {
        "id": 258,
        "name": "258 - Aduana Cd. Hidalgo - Cuahutemoc"
    },
    {
        "id": 259,
        "name": "259 - Aduana Puerto Progreso - Seccion Aduanera Merida"
    },
    {
        "id": 261,
        "name": "261 - Aduana Salina Cruz - Aeropuerto internacional de Oaxaca"
    },
    {
        "id": 262,
        "name": "262 - Aduana Coatzacoalcos - Sede"
    },
    {
        "id": 263,
        "name": "263 - Aduana Puebla - Sede"
    },
    {
        "id": 264,
        "name": "264 - Aduana Acapulco - Sede"
    },
    {
        "id": 265,
        "name": "265 - Aduana Veracruz - Sede"
    },
    {
        "id": 266,
        "name": "266 - Local Puebla Sur- Sede"
    },
    {
        "id": 267,
        "name": "267 - Local Cuernavaca - Sede"
    },
    {
        "id": 268,
        "name": "268 - Local Acapulco - Sede"
    },
    {
        "id": 269,
        "name": "269 - Local Veracruz - Sede (Marina Mercante)"
    },
    {
        "id": 272,
        "name": "272 - Local Coatzacoalcos - Sede"
    },
    {
        "id": 273,
        "name": "273 - Local Xalapa - Sede"
    },
    {
        "id": 275,
        "name": "275 - Local Cordoba - Sede"
    },
    {
        "id": 276,
        "name": "276 - Local Cordoba- Subsede de ALAF"
    },
    {
        "id": 277,
        "name": "277 - Local Tlaxcala - Sede"
    },
    {
        "id": 278,
        "name": "278 - Local Tlaxcala - Local de Juridica de Ingresos de Tlaxcala"
    },
    {
        "id": 279,
        "name": "279 - Local Tlaxcala - Edificio de Auditoria"
    },
    {
        "id": 282,
        "name": "282 - Local Iguala - ALAF Iguala Bandera"
    },
    {
        "id": 283,
        "name": "283 - Local Puebla Norte - Sede"
    },
    {
        "id": 288,
        "name": "288 - Local Iguala - Subsede de Chilpancingo"
    },
    {
        "id": 289,
        "name": "289 - Aduana Acapulco - Aeropuerto Internacional de Acapulco"
    },
    {
        "id": 290,
        "name": "290 - Aduana Dos Bocas - Aeropuerto Internacional de Villahermosa"
    },
    {
        "id": 291,
        "name": "291 - Aduana Veracruz - Aeropuerto Internacional de Veracruz"
    },
    {
        "id": 293,
        "name": "293 - Aduana Puebla - Aeropuerto de Puebla Seccion Pasajeros"
    },
    {
        "id": 294,
        "name": "294 - Aduana Puebla - Seccion Aduanera de Cuernavaca"
    },
    {
        "id": 296,
        "name": "296 - Aduana Pantaco - Sede"
    },
    {
        "id": 297,
        "name": "297 - Aduana Toluca - Sede"
    },
    {
        "id": 298,
        "name": "298 - Aduana AICM - Sede"
    },
    {
        "id": 299,
        "name": "299 - Local DF Sur - Sede"
    },
    {
        "id": 302,
        "name": "302 - Local DF Norte - Sede"
    },
    {
        "id": 303,
        "name": "303 - Local Toluca - Sede"
    },
    {
        "id": 304,
        "name": "304 - Local Naucalpan - Sede"
    },
    {
        "id": 307,
        "name": "307 - Local Naucalpan - MAF Naucalpan"
    },
    {
        "id": 308,
        "name": "308 - Local Naucalpan - MAF Texcoco"
    },
    {
        "id": 309,
        "name": "309 - Local Naucalpan - MAF Nezahualcoyotl"
    },
    {
        "id": 312,
        "name": "312 - Local Naucalpan - MAF Cuautitlan"
    },
    {
        "id": 314,
        "name": "314 - Aduana AICM - Terminal 1"
    },
    {
        "id": 315,
        "name": "315 - AGRS - MAF Col. El Reloj"
    },
    {
        "id": 316,
        "name": "316 - Local DF Norte - Modulo Tacubaya"
    },
    {
        "id": 318,
        "name": "318 - Aduana Toluca - Aeropuerto Toluca"
    },
    {
        "id": 319,
        "name": "319 - Aduana Salina Cruz - Aeropuerto Internacional de Puerto Escondido"
    },
    {
        "id": 320,
        "name": "320 - AGRS - El Reloj (CPN)"
    },
    {
        "id": 321,
        "name": "321 - AGRS - Conjunto Hidalgo (BANCEN)"
    },
    {
        "id": 322,
        "name": "322 - AGRS - Sinaloa 43"
    },
    {
        "id": 323,
        "name": "323 - AGRS - Lucas Alaman"
    },
    {
        "id": 328,
        "name": "328 - AGRS - Laboratorio de Aduanas"
    },
    {
        "id": 334,
        "name": "334 - Local DF Oriente - Almacen Chicoloapan"
    },
    {
        "id": 335,
        "name": "335 - Aduana Pantaco - Seccion Aduanera"
    },
    {
        "id": 336,
        "name": "336 - Local DF Sur - Modulo Del Valle (Felix Cuevas)"
    },
    {
        "id": 339,
        "name": "339 - AGRS - Almacen Talisman"
    },
    {
        "id": 340,
        "name": "340 - Local Uruapan - MAF Lazaro Cardenas"
    },
    {
        "id": 341,
        "name": "341 - Local Cabo San Lucas - Sede"
    },
    {
        "id": 345,
        "name": "345 - Aduana Piedras Negras - Modulo de Ferrocarril"
    },
    {
        "id": 348,
        "name": "348 - Local Hermosillo - Subsede Caborca"
    },
    {
        "id": 349,
        "name": "349 - Local Nogales - Subsede Agua Prieta"
    },
    {
        "id": 351,
        "name": "351 - Local Naucalpan - MAF Ecatepec (Center Plaza)"
    },
    {
        "id": 353,
        "name": "353 - Aduana Cancun - Aeropuerto Internacional de Cancun T2"
    },
    {
        "id": 356,
        "name": "356 - Aduana Nogales - Seccion de Ferrocarril"
    },
    {
        "id": 357,
        "name": "357 - Aduana Nuevo Laredo - Estacion Ferroviaria Km. 6"
    },
    {
        "id": 361,
        "name": "361 - Aduana Reynosa - Las Flores Nuevo Progreso (Exportacion)"
    },
    {
        "id": 362,
        "name": "362 - Aduana Aguascalientes - Aeropuerto de San Luis Potosi Seccion de Carga"
    },
    {
        "id": 363,
        "name": "363 - Aduana Veracruz - Terminal Maritima Muelles 4 y 6"
    },
    {
        "id": 365,
        "name": "365 - Aeropuerto de Manzanillo - Aduana de Manzanillo"
    },
    {
        "id": 367,
        "name": "367 - Aduana Tampico - Aeropuerto Tampico"
    },
    {
        "id": 368,
        "name": "368 - Aduana Reynosa - Aeropuerto Lucio Blanco"
    },
    {
        "id": 369,
        "name": "369 - Aduana Guanajuato - Sede"
    },
    {
        "id": 371,
        "name": "371 - Aduana Mazatlan - Aeropuerto Mazatlan"
    },
    {
        "id": 372,
        "name": "372 - Aduana La Paz - Aeropuerto Internacional de Baja California Sur"
    },
    {
        "id": 374,
        "name": "374 - Aduana Mexicali - Garita Vieja"
    },
    {
        "id": 377,
        "name": "377 - Aduana Dos Bocas - Seccion Aduanera El Ceibo"
    },
    {
        "id": 379,
        "name": "379 - Aduana Queretaro - Aeropuerto Internacional de Morelia"
    },
    {
        "id": 380,
        "name": "380 - Aduana Queretaro - Aeropuerto Intercontinental de Queretaro"
    },
    {
        "id": 381,
        "name": "381 - Aduana Nogales - Garita 3 Mariposas"
    },
    {
        "id": 383,
        "name": "383 - Aduana AICM - Terminal 2"
    },
    {
        "id": 384,
        "name": "384 - Aduana Cancun - Aeropuerto Internacional de Cancun T3"
    },
    {
        "id": 385,
        "name": "385 - Aduana AICM - SEPOMEX"
    },
    {
        "id": 386,
        "name": "386 - Local Cuernavaca - MAIC Cuautla Morelos"
    },
    {
        "id": 390,
        "name": "390 - Aduana Puebla - Aeropuerto de Puebla Seccion Carga"
    },
    {
        "id": 391,
        "name": "391 - Aduana Toluca - Puerta Mexico Recinto Intermodal"
    },
    {
        "id": 392,
        "name": "392 - Aduana Aguascalientes - Sede (Seccion Aduanera Chicalote)"
    },
    {
        "id": 396,
        "name": "396 - Aduana Nuevo Laredo - Puente Negro Rayos Gamma"
    },
    {
        "id": 400,
        "name": "400 - Aduana Lazaro Cardenas - Aduana de FFCC Lazaro Cardenas"
    },
    {
        "id": 401,
        "name": "401 - Aduana Nuevo Laredo - Antigua Aduana"
    },
    {
        "id": 402,
        "name": "402 - Aduana Aguascalientes - Aeropuerto Internacional de Aguascalientes"
    },
    {
        "id": 404,
        "name": "404 - AGA - C2"
    },
    {
        "id": 405,
        "name": "405 - AGRS - Inmueble Moctezuma Grandes Contribuyentes"
    },
    {
        "id": 407,
        "name": "407 - Aduana Queretaro - Aeropuerto Intercontinental de Queretaro Seccion de Carga"
    },
    {
        "id": 408,
        "name": "408 - Aduana Altamira - Aeropuerto de Cd. Victoria"
    },
    {
        "id": 409,
        "name": "409 - Terminal 8 Aeropuerto Internacional Mariano Escobedo"
    },
    {
        "id": 410,
        "name": "410 - Aduana Cd. Juarez - Puente Santa Fe"
    },
    {
        "id": 411,
        "name": "411 - Aduana Cd. Juarez - Puente Reforma Puente Lerdo"
    },
    {
        "id": 417,
        "name": "417 - Aduana Cd. Juarez - Garita Guadalupe Dr. Parra"
    },
    {
        "id": 418,
        "name": "418 - Aduana Cd. Juarez - Garita El Porvenir"
    },
    {
        "id": 419,
        "name": "419 - Aduana Reynosa - Anzalduas"
    },
    {
        "id": 420,
        "name": "420 - Local Cd. Acuna (Extension del 105)"
    },
    {
        "id": 423,
        "name": "423 - Aduana Cd. Hidalgo - Garita del Carmen-Xhan"
    },
    {
        "id": 424,
        "name": "424 - Aduana Cd. Hidalgo - El Gariton"
    },
    {
        "id": 427,
        "name": "427 - Aduana La Paz - Amacen Fiscal del Aeropuerto de La Paz"
    },
    {
        "id": 428,
        "name": "428 - Aduana La Paz - Sala de Servicios Aduanales del Aerodromo de Cabo San Lucas"
    },
    {
        "id": 429,
        "name": "429 - Aduana Piedras Negras - Puente 1"
    },
    {
        "id": 430,
        "name": "430 - Aduana Monterrey - Aeropuerto de Monterrey Seccion A Pasajeros"
    },
    {
        "id": 431,
        "name": "431 - Aduana Monterrey - Sala internacional de pasajeros ADN"
    },
    {
        "id": 435,
        "name": "435 - Aduana Miguel Aleman - Cortina Presa Falcon"
    },
    {
        "id": 437,
        "name": "437 - Aduana Cancun - Sala Internacional del Aeropuerto de Cozumel"
    },
    {
        "id": 438,
        "name": "438 - Aduana Cancun - Terminal FBO Vuelos Privados"
    },
    {
        "id": 439,
        "name": "439 - Aduana Coatzacoalcos - Aeropuerto Minatitlan"
    },
    {
        "id": 440,
        "name": "440 - Aduana Mexicali - Aeropuerto San Felipe"
    },
    {
        "id": 441,
        "name": "441 - Aduana Piedras Negras - Aeropuerto Piedras Negras"
    },
    {
        "id": 443,
        "name": "443 - Aduana Piedras Negras - Aeropuerto de Monclova"
    },
    {
        "id": 444,
        "name": "444 - Aduana Piedras Negras - Patio Fiscal"
    },
    {
        "id": 447,
        "name": "447 - Aduana Cd. Acuna - Aeropuerto"
    },
    {
        "id": 451,
        "name": "451 - Aduana Nogales - Garita 2 Peatonal"
    },
    {
        "id": 452,
        "name": "452 - Aduana Nogales - Aeropuerto Nogales"
    },
    {
        "id": 454,
        "name": "454 - Aduana Reynosa - Central de Autobuses"
    },
    {
        "id": 459,
        "name": "459 - Aduana Subteniente Lopez - Aeropuerto Internacional de Chetumal"
    },
    {
        "id": 460,
        "name": "460 - Aduana Subteniente Lopez - Central de Autobuses de Chetumal"
    },
    {
        "id": 461,
        "name": "461 - Aduana Manzanillo - San Pedrito"
    },
    {
        "id": 462,
        "name": "462 - Aduana Manzanillo - Modulo de Ferrocarril Rayos Gamma"
    },
    {
        "id": 465,
        "name": "465 - Aduana Cd. Camargo - Puerto Diaz Ordaz El Vado"
    },
    {
        "id": 466,
        "name": "466 - Aduana Sonoyta - Garita Almejas"
    },
    {
        "id": 467,
        "name": "467 - Aduana Nogales - Garita El Sasabe"
    },
    {
        "id": 468,
        "name": "468 - Aduana Monterrey - Seccion Aduanera del Ferrocarril de Kansas City Southern"
    },
    {
        "id": 470,
        "name": "470 - Aduana Tampico - Recinto Fiscalizado de Tampico Muelle 10 y 11"
    },
    {
        "id": 471,
        "name": "471 - Aduana Cd. Acuna - Cruce Presa la Amistad"
    },
    {
        "id": 476,
        "name": "476 - Aduana Cd. Del Carmen - Aeropuerto Internacional de Cd. Del Carmen"
    },
    {
        "id": 477,
        "name": "477 - Aduana Cd. del Carmen - Aeropuerto Internacional de Campeche"
    },
    {
        "id": 485,
        "name": "485 - Aduana Puebla - Aeropuerto Internacional de Cuernavaca"
    },
    {
        "id": 486,
        "name": "486 - Aduna San Luis Rio Colorado - San Luis Rio Colorado II"
    },
    {
        "id": 488,
        "name": "488 - Aduana Reynosa - Puente Internacional Rio Bravo Donna"
    },
    {
        "id": 490,
        "name": "490 - ECE de Chichimequillas"
    },
    {
        "id": 492,
        "name": "492 - AGRS - Almacen Modulo XVII"
    },
    {
        "id": 493,
        "name": "493 - Local San Luis Potosi - Unidad de Diligenciacion"
    },
    {
        "id": 495,
        "name": "495 - Aduana Sonoyta - Garita Caborca"
    },
    {
        "id": 496,
        "name": "496 - Aduana Lazaro Cardenas - Sede Isla Cayacal"
    },
    {
        "id": 497,
        "name": "497 - Local DF Centro El Caballito - Sede"
    },
    {
        "id": 502,
        "name": "502 - Aduana Puerto Progreso - Aeropuerto Internacional de Pasajeros de Merida"
    },
    {
        "id": 503,
        "name": "503 - Aduana Sonoyta - Aeropuerto Internacional del Mar de Cortes"
    },
    {
        "id": 504,
        "name": "504 - Aduana Cd. Hidalgo - Aeropuerto Internacional Albino Corzo"
    },
    {
        "id": 513,
        "name": "513 - Local Toluca - Modulo Valle de Bravo"
    },
    {
        "id": 517,
        "name": "517 - Local Cd. Victoria - MFS Cd. Mante"
    },
    {
        "id": 518,
        "name": "518 - Local Celaya - Modulo Acambaro"
    },
    {
        "id": 519,
        "name": "519 - Local Coatzacoalcos - Modulo San Andres Tuxtla"
    },
    {
        "id": 520,
        "name": "520 - Local Irapuato - Modulo Salamanca"
    },
    {
        "id": 521,
        "name": "521 - Local La Paz - Subsede Constitucion"
    },
    {
        "id": 522,
        "name": "522 - Local Puebla Sur - Modulo San Martin Texmelucan"
    },
    {
        "id": 523,
        "name": "523 - Local Uruapan - MAF La Piedad"
    },
    {
        "id": 525,
        "name": "525 - MTS Sahuayo"
    },
    {
        "id": 526,
        "name": "526 - Local Veracruz - MAF Alvarado"
    },
    {
        "id": 530,
        "name": "530 - Aduana Dos Bocas - Seccion Dos Bocas"
    },
    {
        "id": 531,
        "name": "531 - Aduana Tijuana - Cruce Fronterizo El Chaparral"
    },
    {
        "id": 533,
        "name": "533 - Aduana Subteniente Lopez - Subteniente Lopez II"
    },
    {
        "id": 534,
        "name": "534 - Aduana Cd. Hidalgo - Seccion Aduanera Huixtla"
    },
    {
        "id": 535,
        "name": "535 - Aduana Aguascalientes - Aeropuerto de San Luis Potosi.- Sala de Pasajeros"
    },
    {
        "id": 538,
        "name": "538 - Aduana Dos Bocas - Aeropuerto Internacional de Palenque"
    },
    {
        "id": 540,
        "name": "540 - Aduana Tijuana - Puerta Mexico Este"
    },
    {
        "id": 541,
        "name": "541 - Aduana Manzanillo Zona Norte"
    },
    {
        "id": 543,
        "name": "543 - Local DF Oriente - Sede"
    },
    {
        "id": 546,
        "name": "546 - Almacen Fiscal Reforma en Nuevo Laredo"
    },
    {
        "id": 547,
        "name": "547 - Aduana Monterrey - Seccion aduanera FERROMEX"
    },
    {
        "id": 548,
        "name": "548 - MODULO: 5 ORIENTE PUEBLA"
    },
    {
        "id": 550,
        "name": "550 - Aduana Dos Bocas - Catazaja"
    },
    {
        "id": 552,
        "name": "552 - Aduana Cd. Hidalgo - Comitan-Trinitaria"
    },
    {
        "id": 573,
        "name": "573 - Local Toluca- Sede"
    },
    {
        "id": 584,
        "name": "584 - Quintana Roo 1"
    },
    {
        "id": 580,
        "name": "580 - Nuevo cruce comercial en Guadalupe - Tomillo"
    },
    {
        "id": 581,
        "name": "581 - Tuxpan Port Terminal TPT"
    },
    {
        "id": 587,
        "name": "587 - Local del Sur - MAF Plaza Oasis"
    },
    {
        "id": 588,
        "name": "588 - Aduana de Cancun T4"
    },
    {
        "id": 590,
        "name": "590 - Recinto Fiscalizado Matrix"
    },
    {
        "id": 591,
        "name": "591 - Aduana de Monterrey - Seccion aduanera interpuerto"
    },
    {
        "id": 595,
        "name": "595 - Aduana Toluca -Recinto Fiscal en Aerolineas Ejecutivas"
    },
    {
        "id": 597,
        "name": "597 - Recinto Fiscal del Hangar Servicios Aereos Across Aduana de Toluca"
    },
    {
        "id": 601,
        "name": "601 - Recinto Fiscal en Hangar Asertec - Aduana de Toluca"
    },
    {
        "id": 605,
        "name": "605 - Aeropuerto Internacional Felipe Angeles (AIFA) - carga"
    },
    {
        "id": 606,
        "name": "606 - Aeropuerto Internacional Felipe Angeles (AIFA)- SEPOMEX"
    },
    {
        "id": 99999,
        "name": "AIFA - Aeropuerto Internacional Felipe Angeles (AIFA)"
    },
];

export default clients;