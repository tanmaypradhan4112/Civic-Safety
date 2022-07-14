var svgMapDataGPD = {
  data: {
    country:{
      name: 'Country',
      format: '{0}',
    },
    rank: { 
      //crime rank
      name: 'Ranking',
      format: '{0}',
      thousandSeparator: ','
    },
    population: {
      //Population
      name: 'Population',
      format: '{0}',
      thousandSeparator:','
    },
    crime: {
      //Crime index
      name: 'Crime Index',
      format: '{0}',
      thousandSeparator: ',',
      thresholdMax: 85,
      thresholdMin: 10
    }
  },
  applyData: 'crime',
  values: {
    AF: {
      link: 'https://pt.wikipedia.org/wiki/AF',
      linkTarget: '_blank',
      country:"Afganisthan",
      rank: 4,
      population: 40754388,
      linkTarget: '_blank',
      crime: 76.31,
      //end: 0.02
    },
    AL: {
      link: 'https://pt.wikipedia.org/wiki/AL',
      linkTarget: '_blank',
      country:"Albania",
      rank: 78,
      population: 2866374,
      linkTarget: '_blank',
      crime: 42.53,
      //end: 4.04
    },
    DZ: {
      link: 'https://pt.wikipedia.org/wiki/DZ',
      linkTarget: '_blank',
      country:"Algeria",
      rank: 43,
      population: 45350148,
      linkTarget: '_blank',
      crime: 52.03,
      //end: 0.33
    },
    AO: {
      link: 'https://pt.wikipedia.org/wiki/AO',
      linkTarget: '_blank',
      country:"Angola",
      rank: 13,
      population:35027343,
      linkTarget: '_blank',
      crime: 66.48,
      //end: -2.56
    },
    // //missing. Antigua
    // AG: {
    //   link: 'https://pt.wikipedia.org/wiki/AG',
    //   linkTarget: '_blank',
    //   country:'Antigua'
    // },
    AR: {
      link: 'https://pt.wikipedia.org/wiki/AR',
      linkTarget: '_blank',
      country:"Argentina",
      rank: 18,
      population: 46010234,
      linkTarget: '_blank',
      crime: 63.82,
      //end: 1.77
    },
    AM: {
      link: 'https://pt.wikipedia.org/wiki/AM',
      linkTarget: '_blank',
      country:'Armenia',
      rank: 128,
      population: 2971966,
      linkTarget: '_blank',
      crime: 22.79,
      //end: 7.33
    },
    AU: {
      link: 'https://pt.wikipedia.org/wiki/AU',
      linkTarget: '_blank',
      country:"Australia",
      rank: 75,
      population: 26068792,
      linkTarget: '_blank',
      crime: 43.03,
      //end: 0.97
    },
    AT: {
      link: 'https://pt.wikipedia.org/wiki/AT',
      linkTarget: '_blank',
      country:'Austria',
      rank: 120,
      population: 906671,
      linkTarget: '_blank',
      crime: 25.54,
      //end: 2.66
    },
    AZ: {
      link: 'https://pt.wikipedia.org/wiki/AZ',
      linkTarget: '_blank',
      country:'Azerbaijan',
      rank: 104,
      population: 10300205,
      linkTarget: '_blank',
      crime: 32.02,
      //end: -0.91
    },
    BS: {
      link: 'https://pt.wikipedia.org/wiki/BS',
      linkTarget: '_blank',
      country:'Bahamas',
      rank: 20,
      population: 400516,
      linkTarget: '_blank',
      crime: 62.06,
      //end: 0.31
    },
    BH: {
      link: 'https://pt.wikipedia.org/wiki/BH',
      linkTarget: '_blank',
      country:"Bahrain",
      rank: 119,
      population: 1783.983,
      linkTarget: '_blank',
      crime: 25.64,
      //end: 1.02
    },
    BD: {
      link: 'https://pt.wikipedia.org/wiki/BD',
      linkTarget: '_blank',
      country:'Bangladesh',
      rank: 17,
      population: 167885.689,
      linkTarget: '_blank',
      crime: 63.90,
      //end: 6.1
    },
    //missing barbados
    // BB: {
    //   link: 'https://pt.wikipedia.org/wiki/BB',
    //   linkTarget: '_blank',
    //   country:'Barbados'
    // },
    BY: {
      link: 'https://pt.wikipedia.org/wiki/BY',
      linkTarget: '_blank',
      country:'Belarus',
      rank: 24,
      population: 94328,
      linkTarget: '_blank',
      crime: 59.58,
      //end: 2.52
    },
    BE: {
      link: 'https://pt.wikipedia.org/wiki/BE',
      linkTarget: '_blank',
      country:"Belgium",
      rank: 70,
      population: 11668278,
      linkTarget: '_blank',
      crime: 44.58,
      //end: 1.13
    },
    BZ: {
      link: 'https://pt.wikipedia.org/wiki/BZ',
      linkTarget: '_blank',
      country:'Belize',
      rank: 47,
      population: 41219,
      linkTarget: '_blank',
      crime: 50.39,
      //end: -1.35
    },
    //missing benin
    // BJ: {
    //   link: 'https://pt.wikipedia.org/wiki/BJ',
    //   linkTarget: '_blank',
    //   country:'Benin'
    // },
    //missing bhutan
    // BT: {
    //   link: 'https://pt.wikipedia.org/wiki/BT',
    //   linkTarget: '_blank',
    //   country:'Bhutan'

    // },
    BO: {
      link: 'https://pt.wikipedia.org/wiki/BO',
      linkTarget: '_blank',
      country:'Bolivia',
      rank: 27,
      population: 11992656,
      linkTarget: '_blank',
      crime: 57.77,
      //end: 2.73
    },
    BA: {
      link: 'https://pt.wikipedia.org/wiki/BA',
      linkTarget: '_blank',
      country:'Bosnia and Herzegovina',
      rank: 76,
      population: 3249.317,
      linkTarget: '_blank',
      crime: 42.99,
      //end: 2.6
    },
    BW: {
      link: 'https://pt.wikipedia.org/wiki/BW',
      linkTarget: '_blank',
      country:'Botswana',
      rank: 42,
      population: 2441162,
      linkTarget: '_blank',
      crime: 52.98,
      //end: 0.38
    },
    BR: {
      link: 'https://pt.wikipedia.org/wiki/BR',
      linkTarget: '_blank',
      country: 'Brazil',
      rank: 9,
      population: 215353593,
      linkTarget: '_blank',
      crime: 67.49,
      //end: 0.23
    },
    BN: {
      link: 'https://pt.wikipedia.org/wiki/BN',
      linkTarget: '_blank',
      country:'Brunei',
      rank: 111,
      population: 445431,
      linkTarget: '_blank',
      crime: 29,
      //end: -0.7
    },
    BG: {
      link: 'https://pt.wikipedia.org/wiki/BG',
      linkTarget: '_blank',
      country:'Bulgaria',
      rank: 92,
      population: 6844597,
      linkTarget: '_blank',
      crime: 38.21,
      //end: 4.23
    },
    //missing Burkina
    // BF: {
    //   link: 'https://pt.wikipedia.org/wiki/BF',
    //   linkTarget: '_blank',
    //   country:'Burkina'
    // },
    //missing burundi
    // BI: {
    //   link: 'https://pt.wikipedia.org/wiki/BI',
    //   linkTarget: '_blank',
    //   country:'Burundi'
    // },
    KH: {
      link: 'https://pt.wikipedia.org/wiki/KH',
      linkTarget: '_blank',
      country:"Cambodia",
      rank: 46,
      population: 17168639,
      linkTarget: '_blank',
      crime: 51.13,
      //end: 5.46
    },
    CM: {
      link: 'https://pt.wikipedia.org/wiki/CM',
      linkTarget: '_blank',
      country:'Cameroon',
      rank: 14,
      population: 27911548,
      linkTarget: '_blank',
      crime: 65.24,
      //end: 0.62
    },
    CA: {
      link: 'https://pt.wikipedia.org/wiki/CA',
      linkTarget: '_blank',
      country:"Canada",
      rank: 82,
      population: 38388419,
      crime: 41.89,
      //end: 2.1
    },
    // //mising kosovo
    // XK: {
    //   link: 'https://pt.wikipedia.org/wiki/XK',
    //   linkTarget: '_blank',
    //   country:'Kosovo'
    // },
    // //mising cape verde
    // CV: {
    //   link: 'https://pt.wikipedia.org/wiki/CV',
    //   linkTarget: '_blank',
    //   country:'Cape Verde'
    // },
    // //missing african republic
    // CF: {
    //   link: 'https://pt.wikipedia.org/wiki/CF',
    //   linkTarget: '_blank',
    //   country:'African Republic'
    // },
    //missing chad
    TD: {
      link: 'https://pt.wikipedia.org/wiki/TD',
      linkTarget: '_blank',
      country:'Chad'
    },
    CL: {
      link: 'https://pt.wikipedia.org/wiki/CL',
      linkTarget: '_blank',
      country:"Chile",
      rank: 41,
      population: 19250195,
      linkTarget: '_blank',
      crime: 53.42,
      //end: 0.69
    },
    CN: {
      link: 'https://pt.wikipedia.org/wiki/CN',
      linkTarget: '_blank',
      country:"China",
      rank: 109,
      population: 14484714,
      linkTarget: '_blank',
      crime: 30.14,
      //end: 6.47
    },
    CO: {
      link: 'https://pt.wikipedia.org/wiki/CO',
      linkTarget: '_blank',
      country:'Colombia',
      rank: 31,
      population:51512762 ,
      linkTarget: '_blank',
      crime: 56.87,
      //end: 0.96
    },
    // //missing comoros
    // KM: {
    //   link: 'https://pt.wikipedia.org/wiki/KM',
    //   linkTarget: '_blank',
    //   country:'Comoros'
    // },
    // //missing congo
    // CG: {
    //   link: 'https://pt.wikipedia.org/wiki/CG',
    //   linkTarget: '_blank',
    // },
    CR: {
      link: 'https://pt.wikipedia.org/wiki/CR',
      linkTarget: '_blank',
      country:"Costa Rica",
      rank: 38,
      population:5182354 ,
      linkTarget: '_blank',
      crime: 54.22,
      //end: 2.24
    },
    HR: {
      link: 'https://pt.wikipedia.org/wiki/HR',
      linkTarget: '_blank',
      country:"Croatia",
      rank: 124,
      population: 4059286,
      linkTarget: '_blank',
      crime: 24.59,
      //end: 3.15
    },
    CY: {
      link: 'https://pt.wikipedia.org/wiki/CY',
      linkTarget: '_blank',
      country:'Cyprus',
      rank: 106,
      population: 1223387,
      linkTarget: '_blank',
      crime: 31.28,
      //end: 3.95
    },
    CZ: {
      link: 'https://pt.wikipedia.org/wiki/CZ',
      linkTarget: '_blank',
      country:'Czech Republic',
      rank: 121,
      population: 10736784,
      linkTarget: '_blank',
      crime: 25.52,
      //end: 4.23
    },
    //missing congo
    // CD: {
    //   link: 'https://pt.wikipedia.org/wiki/CD',
    //   linkTarget: '_blank',
    //   country:'Congo'
    // },
    DK: {
      link: 'https://pt.wikipedia.org/wiki/DK',
      linkTarget: '_blank',
      country:'Denmark',
      rank: 118,
      population: 583495,
      linkTarget: '_blank',
      crime: 26.22,
      //end: 1.49
    },
    //Djibouti
    // DJ: {
    //   link: 'https://pt.wikipedia.org/wiki/DJ',
    //   linkTarget: '_blank',
    //   country:'Djibouti'
    // },
    // //missing dominica
    // DM: {
    //   link: 'https://pt.wikipedia.org/wiki/DM',
    //   linkTarget: '_blank',
    //   country:"Dominica",
    // },
    DO: {
      link: 'https://pt.wikipedia.org/wiki/DO',
      linkTarget: '_blank',
      country:'Dominican Republic',
      rank: 22,
      population: 1105637,
      linkTarget: '_blank',
      crime: 61.02,
      //end: 3.5
    },
    EC: {
      link: 'https://pt.wikipedia.org/wiki/EC',
      linkTarget: '_blank',
      country:'Ecuador',
      rank: 37,
      population: 18113361,
      linkTarget: '_blank',
      crime: 55.23,
      //end: 1.29
    },
    EG: {
      link: 'https://pt.wikipedia.org/wiki/EG',
      linkTarget: '_blank',
      country:'Egypt',
      rank: 59,
      population: 106156692,
      linkTarget: '_blank',
      crime: 46.83,
      //end: 2.36
    },
    SV: {
      link: 'https://pt.wikipedia.org/wiki/SV',
      linkTarget: '_blank',
      country:'El Salvador',
      rank: 8,
      population: 6550389,
      linkTarget: '_blank',
      crime: 67.79,
      //end: 1.88
    },
    //missing guinea
    // GQ: {
    //   link: 'https://pt.wikipedia.org/wiki/GQ',
    //   linkTarget: '_blank',
    //   country:'Guinea'
    // },
    //missing Eritrea
    // ER: {
    //   link: 'https://pt.wikipedia.org/wiki/ER',
    //   linkTarget: '_blank',
    //   country:'Eritrea'
    // },
    
    EE: {
      link: 'https://pt.wikipedia.org/wiki/EE',
      linkTarget: '_blank',
      country:"Estonia",
      rank: 126,
      population:132191 ,
      linkTarget: '_blank',
      crime: 23.71,
      //end: 5.08
    },
    
    ET: {
      link: 'https://pt.wikipedia.org/wiki/ET',
      linkTarget: '_blank',
      country:'Ethiopia',
      rank: 50,
      population: 120812698,
      linkTarget: '_blank',
      crime: 49.3,
      //end: 8.43
    },
    //Federated States of Micronesia
    FM: {
      link: 'https://pt.wikipedia.org/wiki/FM',
      linkTarget: '_blank',
      country:'Federated States of Micronesia'
    },

    FJ: {
      link: 'https://pt.wikipedia.org/wiki/FJ',
      linkTarget: '_blank',
      country:'Fiji',
      rank: 28,
      population: 909466,
      linkTarget: '_blank',
      crime: 57.62,
      //end: 3.08
    },
    FI: {
      link: 'https://pt.wikipedia.org/wiki/FI',
      linkTarget: '_blank',
      country:'Finland',
      rank: 115,
      population: 555496,
      linkTarget: '_blank',
      crime: 27.59,
      //end: 2.63
    },
    FR: {
      link: 'https://pt.wikipedia.org/wiki/FR',
      linkTarget: '_blank',
      country:'France',
      rank: 44,
      population: 65584518,
      linkTarget: '_blank',
      crime: 51.99,
      //end: 1.46
    },
    //missing Gabon
    // GA: {
    //   link: 'https://pt.wikipedia.org/wiki/GA',
    //   linkTarget: '_blank',
    //   country:'Gabon'
    // },
    // //missing Gambia
    // GM: {
    //   link: 'https://pt.wikipedia.org/wiki/GM',
    //   linkTarget: '_blank',
    //   country:'Gambia'
    // },
    GE: {
      link: 'https://pt.wikipedia.org/wiki/GE',
      linkTarget: '_blank',
      country:'Georgia',
      rank: 127,
      population: 3968738,
      linkTarget: '_blank',
      crime: 23.38,
      //end: 5.07
    },
    DE: {
      link: 'https://pt.wikipedia.org/wiki/DE',
      linkTarget: '_blank',
      country:'Germany',
      rank: 96,
      population: 83883596,
      linkTarget: '_blank',
      crime: 35.79,
      //end: 2.07
    },
    GH: {
      link: 'https://pt.wikipedia.org/wiki/GH',
      linkTarget: '_blank',
      country:'Ghana',
      rank: 58,
      population: 3239545,
      linkTarget: '_blank',
      crime: 46.98,
      //end: 6.28
    },
    GR: {
      link: 'https://pt.wikipedia.org/wiki/GR',
      linkTarget: '_blank',
      country:'Greece',
      rank: 66,
      population: 10316637,
      linkTarget: '_blank',
      crime: 45.85,
      //end: 1.56
    },
    //missing Grenada 
    // GD: {
    //   link: 'https://pt.wikipedia.org/wiki/GD',
    //   linkTarget: '_blank',
    //   country:'Greneda'
    // },
    GT: {
      link: 'https://pt.wikipedia.org/wiki/GT',
      linkTarget: '_blank',
      country:'Guatemala',
      rank: 26,
      population: 18584039,
      linkTarget: '_blank',
      crime: 58.67,
      //end: 0.81
    },
    GN: {
      link: 'https://pt.wikipedia.org/wiki/GN',
      linkTarget: '_blank',
      country:'Guinea',
      rank: 2,
      population: 9292169,
      linkTarget: '_blank',
      crime: 80.79, 
      //end: 4.09
    },
    //missing guinea-bissau
    // GW: {
    //   link: 'https://pt.wikipedia.org/wiki/GW',
    //   linkTarget: '_blank',
    //   country:'Guinea-Bissau'
    // },
    GY: {
      link: 'https://pt.wikipedia.org/wiki/GY',
      linkTarget: '_blank',
      country:'Guyana',
      rank: 7,
      population: 794045,
      linkTarget: '_blank',
      crime: 68.74,
      //end: 1.55
    },
    //missing Haiti
    // HT: {
    //   link: 'https://pt.wikipedia.org/wiki/HT',
    //   linkTarget: '_blank',
    //   country:'Haiti'
    // },
    HN: {
      link: 'https://pt.wikipedia.org/wiki/HN',
      linkTarget: '_blank',
      country:'Honduras',
      rank: 5,
      population: 10221247,
      linkTarget: '_blank',
      crime: 74.54,
      //end: 3.17
    },
    
    HK: {
      link: 'https://pt.wikipedia.org/wiki/HK',
      linkTarget: '_blank',
      country:'Hong Kong',
      rank: 131,
      population: 7604299,
      linkTarget: '_blank',
      crime: 22,
      //end: 2.9
    },
    HU: {
      link: 'https://pt.wikipedia.org/wiki/HU',
      linkTarget: '_blank',
      country:'Hungary',
      rank: 97,
      population: 9606259,
      linkTarget: '_blank',
      crime: 34.36,
      //end: 4.32
    },
    IS: {
      link: 'https://pt.wikipedia.org/wiki/IS',
      linkTarget: '_blank',
      country:'Iceland',
      rank: 125,
      population: 345393,
      linkTarget: '_blank',
      crime: 23.75,
      //end: 2.87
    },
    IN: {
      link: 'https://pt.wikipedia.org/wiki/IN',
      linkTarget: '_blank',
      country:'India',
      rank: 71,
      population: 1406631776,
      linkTarget: '_blank',
      crime: 44.43,
      //end: 5.43
    },
    ID: {
      link: 'https://pt.wikipedia.org/wiki/ID',
      linkTarget: '_blank',
      country:'Indonesia',
      rank: 65,
      population: 279134505,
      linkTarget: '_blank',
      crime: 45.93,
      //end: 4.33
    },
    IR: {
      link: 'https://pt.wikipedia.org/wiki/IR',
      linkTarget: '_blank',
      country:'Iran',
      rank: 48,
      population: 86022837,
      linkTarget: '_blank',
      crime: 49.38,
      //end: 3.24
    },
    IQ: {
      link: 'https://pt.wikipedia.org/wiki/IQ',
      linkTarget: '_blank',
      country:'Iraq',
      rank: 53,
      population:42164965 ,
      linkTarget: '_blank',
      crime: 48.42,
      //end: -3.79
    },
    IE: {
      link: 'https://pt.wikipedia.org/wiki/IE',
      linkTarget: '_blank',
      country:'Ireland',
      rank: 67,
      population: 5020199,
      linkTarget: '_blank',
      crime: 45.51,
      //end: 6.92
    },
    IL: {
      link: 'https://pt.wikipedia.org/wiki/IL',
      linkTarget: '_blank',
      country:'Israel',
      rank: 105,
      population:8922892,
      linkTarget: '_blank',
      crime: 31.47,
      //end: 1.77
    },
    IT: {
      link: 'https://pt.wikipedia.org/wiki/IT',
      linkTarget: '_blank',
      country:'Italy',
      rank: 69,
      population: 6026277,
      linkTarget: '_blank',
      crime: 44.85,
      //end: 1.59
    },
    //missing ivory coast
    // CI: {
    //   link: 'https://pt.wikipedia.org/wiki/CI',
    //   linkTarget: '_blank',
    //   country:'Ivory Coast'
    // },
    JM: {
      link: 'https://pt.wikipedia.org/wiki/JM',
      linkTarget: '_blank',
      country:'jamaica',
      rank: 10,
      population: 2985094,
      linkTarget: '_blank',
      crime: 67.42,
      //end: 0.67
    },
    JP: {
      link: 'https://pt.wikipedia.org/wiki/JP',
      linkTarget: '_blank',
      country:'Japan',
      rank: 130,
      population: 125584838,
      linkTarget: '_blank',
      crime: 22.19,
      //end: 1.94
    },
    JO: {
      link: 'https://pt.wikipedia.org/wiki/JO',
      linkTarget: '_blank',
      country:'Jordan',
      rank: 87,
      population: 10300869,
      linkTarget: '_blank',
      crime: 39.96,
      //end: 0.13
    },
    KZ: {
      link: 'https://pt.wikipedia.org/wiki/KZ',
      linkTarget: '_blank',
      country:'Kazakhstan',
      rank: 40,
      population: 19205043,
      linkTarget: '_blank',
      crime: 53.77,
      //end: 2.87
    },
    KE: {
      link: 'https://pt.wikipedia.org/wiki/KE',
      linkTarget: '_blank',
      country:"Kenya",
      rank: 23,
      population: 56215221,
      linkTarget: '_blank',
      crime: 60.14,
      //end: 2.29
    },
    //missing kiribati.
    // KI: {
    //   link: 'https://pt.wikipedia.org/wiki/KI',
    //   linkTarget: '_blank',
    //   country:'Kiribati'
    // },
    KW: {
      link: 'https://pt.wikipedia.org/wiki/KW',
      linkTarget: '_blank',
      country:'Kuwait',
      rank: 100,
      population: 4380326,
      linkTarget: '_blank',
      crime: 33.42,
      //end: -4.31
    },
    KG: {
      link: 'https://pt.wikipedia.org/wiki/KG',
      linkTarget: '_blank',
      country:"Kyrgyzstan",
      rank: 30,
      population: 6728271,
      linkTarget: '_blank',
      crime: 56.87,
      //end: 3.05
    },
    //missing laos
    // LA: {
    //   link: 'https://pt.wikipedia.org/wiki/LA',
    //   linkTarget: '_blank',
    //   country:'Laos'
    // },
    LV: {
      link: 'https://pt.wikipedia.org/wiki/LV',
      linkTarget: '_blank',
      country:"Latvia",
      rank: 91,
      population: 1848837,
      linkTarget: '_blank',
      crime: 38.77,
      //end: 5.58
    },
    LB: {
      link: 'https://pt.wikipedia.org/wiki/LB',
      linkTarget: '_blank',
      country:'Lebanon',
      rank: 60,
      population: 6684849,
      linkTarget: '_blank',
      crime: 46.77,
      //end: 0.63
    },
    //missing lesotho
    // LS: {
    //   link: 'https://pt.wikipedia.org/wiki/LS',
    //   linkTarget: '_blank',
    //   country:'Lesotho'
    // },
    // //missing liberia
    // LR: {
    //   link: 'https://pt.wikipedia.org/wiki/LR',
    //   linkTarget: '_blank',
    //   country:'Liberia'
    // },
    LY: {
      link: 'https://pt.wikipedia.org/wiki/LY',
      linkTarget: '_blank',
      country:'Libya',
      rank: 21,
      population: 7040745,
      linkTarget: '_blank',
      crime: 61.78,
      //end: 69.48
    },
    LT: {
      link: 'https://pt.wikipedia.org/wiki/LT',
      linkTarget: '_blank',
      country:'Lithuania',
      rank: 102,
      population: 2661708,
      linkTarget: '_blank',
      crime: 33.42,
      //end: 4.38
    },
    LU: {
      link: 'https://pt.wikipedia.org/wiki/LU',
      linkTarget: '_blank',
      country:'Luxembourg',
      rank: 98,
      population: 642371,
      linkTarget: '_blank',
      crime: 34.13,
      //end: 2.27
    },
    //missing Macau
    // MO: {
    //   link: 'https://pt.wikipedia.org/wiki/MO',
    //   linkTarget: '_blank',
    //   country:'Macau'
    // },
    MK: {
      link: 'https://pt.wikipedia.org/wiki/MK',
      linkTarget: '_blank',
      country:'Macedonia',
      rank: 90,
      population: 2081304,
      linkTarget: '_blank',
      crime: 39.12,
      //end: -0.06
    },
    //misssing Madagascar
    // MG: {
    //   link: 'https://pt.wikipedia.org/wiki/MG',
    //   linkTarget: '_blank',
    //   country:'Madagascar'
    // },
    // //missing malawi
    // MW: {
    //   link: 'https://pt.wikipedia.org/wiki/MW',
    //   linkTarget: '_blank',
    //   country:'Malawi'
    // },
    MY: {
      link: 'https://pt.wikipedia.org/wiki/MY',
      linkTarget: '_blank',
      country:'Malaysia',
      rank: 29,
      population:33181072 ,
      linkTarget: '_blank',
      crime: 57.29,
      //end: 4.55
    },
    MV: {
      link: 'https://pt.wikipedia.org/wiki/MV',
      linkTarget: '_blank',
      country:'Maldives',
      rank: 36,
      population: 540985,
      linkTarget: '_blank',
      crime: 55.34,
      //end: 2.98
    },
    //missing mali
    // ML: {
    //   link: 'https://pt.wikipedia.org/wiki/ML',
    //   linkTarget: '_blank',
    //   country:'Mali'
    // },
    MT: {
      link: 'https://pt.wikipedia.org/wiki/MT',
      linkTarget: '_blank',
      country:'Malta',
      rank: 85,
      population: 444033,
      linkTarget: '_blank',
      crime: 40.39,
      //end: 6.26
    },
    MH: {
      link: 'https://pt.wikipedia.org/wiki/MH',
      linkTarget: '_blank',
      rank: 3625,
      population: 8.21,
      linkTarget: '_blank',
      crime: 3439,
      //end: 1.83
    },
    //missing  Mauritania
    // MR: {
    //   link: 'https://pt.wikipedia.org/wiki/MR',
    //   linkTarget: '_blank',
    //   country:'Mauritania'
    // },
    MU: {
      link: 'https://pt.wikipedia.org/wiki/MU',
      linkTarget: '_blank',
      country:'Mauritius',
      rank: 51,
      population: 1274727,
      linkTarget: '_blank',
      crime: 48.88,
      //end: 3.67
    },
    MX: {
      link: 'https://pt.wikipedia.org/wiki/MX',
      linkTarget: '_blank',
      country:'Mexico',
      rank: 39,
      population: 131562772.,
      linkTarget: '_blank',
      crime: 54.19,
      //end: 0.91
    },
    MD: {
      link: 'https://pt.wikipedia.org/wiki/MD',
      linkTarget: '_blank',
      country:'Moldova',
      rank: 62,
      population: 4013171,
      linkTarget: '_blank',
      crime: 46.35,
      //end: 4.24
    },
    MN: {
      link: 'https://pt.wikipedia.org/wiki/MN',
      linkTarget: '_blank',
      country:'Mongolia',
      rank: 34,
      population: 3378078,
      linkTarget: '_blank',
      crime: 56.01,
      //end: 3.65
    },
    ME: {
      link: 'https://pt.wikipedia.org/wiki/ME',
      linkTarget: '_blank',
      country:'Montenegro',
      rank: 84,
      population: 62795,
      linkTarget: '_blank',
      crime: 41.18,
      //end: 4.16
    },
    MA: {
      link: 'https://pt.wikipedia.org/wiki/MA',
      linkTarget: '_blank',
      country:'Morroco',
      rank: 52,
      population:37772756 ,
      linkTarget: '_blank',
      crime: 48.66,
      //end: 2.96
    },
    //missing mozambique
    // MZ: {
    //   link: 'https://pt.wikipedia.org/wiki/MZ',
    //   linkTarget: '_blank',
    //   country:'Mozambique'
    // },
    MM: {
      link: 'https://pt.wikipedia.org/wiki/MM',
      linkTarget: '_blank',
      country: 'Myanmar',
      rank: 61,
      population: 55227143,
      linkTarget: '_blank',
      crime: 46.51,
      //end: 5.82
    },
    NA: {
      link: 'https://pt.wikipedia.org/wiki/NA',
      linkTarget: '_blank',
      country:'Nambia',
      rank: 15,
      population: 2633.874,
      linkTarget: '_blank',
      crime: 65.21,
      //end: -3.12
    },
    //missing narau
    // NR: {
    //   link: 'https://pt.wikipedia.org/wiki/NR',
    //   linkTarget: '_blank',
    //   country:'Narau'
    // },
    NP: {
      link: 'https://pt.wikipedia.org/wiki/NP',
      linkTarget: '_blank',
      country:'Nepal',
      rank: 95,
      population: 30225582,
      linkTarget: '_blank',
      crime: 36.01,
      //end: 6.41
    },
    NL: {
      link: 'https://pt.wikipedia.org/wiki/NL',
      linkTarget: '_blank',
      country:'Netherlands',
      rank: 116,
      population: 17211.447,
      linkTarget: '_blank',
      crime: 27.16,
      //end: 2.83
    },
    NZ: {
      link: 'https://pt.wikipedia.org/wiki/NZ',
      linkTarget: '_blank',
      country:"New Zealand",
      rank: 77,
      population: 4898203,
      linkTarget: '_blank',
      crime: 42.88,
      //end: 2.03
    },
    NI: {
      link: 'https://pt.wikipedia.org/wiki/NI',
      linkTarget: '_blank',
      country:'Nicaragua',
      rank: 55,
      population: 67791,
      linkTarget: '_blank',
      crime: 47.89,
      //end: 3.82
    },
    //missing niger
    // NE: {
    //   link: 'https://pt.wikipedia.org/wiki/NE',
    //   linkTarget: '_blank',
    //   country:'Niger'
    // },
    NG: {
      link: 'https://pt.wikipedia.org/wiki/NG',
      linkTarget: '_blank',
      country:'Nigeria',
      rank: 16,
      population: 216746934,
      linkTarget: '_blank',
      crime: 64.06,
    },
    NO: {
      link: 'https://pt.wikipedia.org/wiki/NO',
      linkTarget: '_blank',
      country:'Norway',
      rank: 99,
      population: 551137,
      linkTarget: '_blank',
      crime: 33.72,
      //end: 0.87
    },
    OM: {
      link: 'https://pt.wikipedia.org/wiki/OM',
      linkTarget: '_blank',
      country:'Oman',
      rank: 133,
      population: 5323993,
      linkTarget: '_blank',
      crime: 20.34,
      //end: -2.23
    },
    PK: {
      link: 'https://pt.wikipedia.org/wiki/PK',
      linkTarget: '_blank',
      country:'Pakistan',
      rank: 79,
      population: 229488994,
      linkTarget: '_blank',
      crime: 42.51,
      //end: 3.58
    },
    //missing palau
    // PW: {
    //   link: 'https://pt.wikipedia.org/wiki/PW',
    //   linkTarget: '_blank',
    //   rank: 17096,
    //   population: 0.27,
    //   linkTarget: '_blank',
    //   crime: 15934,
    //   //end: -2.06
    // },
    PA: {
      link: 'https://pt.wikipedia.org/wiki/PA',
      linkTarget: '_blank',
      country:'Panama',
      rank: 72,
      population: 4446964,
      linkTarget: '_blank',
      crime: 45.15,
      //end: 3.82
    },
    PG: {
      link: 'https://pt.wikipedia.org/wiki/PG',
      linkTarget: '_blank',
      country:"Papua New Guinea",
      rank: 2,
      population: 9292169,
      linkTarget: '_blank',
      crime: 80.79,
      //end: 0.46
    },
    PY: {
      link: 'https://pt.wikipedia.org/wiki/PY',
      linkTarget: '_blank',
      country:'Paraguay',
      rank: 49,
      population: 7305843,
      linkTarget: '_blank',
      crime: 49.37,
      //end: 3.06
    },
    PE: {
      link: 'https://pt.wikipedia.org/wiki/PE',
      linkTarget: '_blank',
      country:'Peru',
      rank: 12,
      population: 33684208,
      linkTarget: '_blank',
      crime: 66.72,
      //end: 1.31
    },
    PH: {
      link: 'https://pt.wikipedia.org/wiki/PH',
      linkTarget: '_blank',
      country:'Phillipines',
      rank: 80,
      population: 112508994,
      linkTarget: '_blank',
      crime: 42.46,
      //end: 5.15
    },
    PL: {
      link: 'https://pt.wikipedia.org/wiki/PL',
      linkTarget: '_blank',
      country:'Poland',
      rank: 107,
      population: 37739785,
      linkTarget: '_blank',
      crime: 30.5,
      //end: 4.73
    },
    PT: {
      link: 'https://pt.wikipedia.org/wiki/PT',
      linkTarget: '_blank',
      country:'Portugal',
      rank: 110,
      population: 1014057,
      linkTarget: '_blank',
      crime: 29.91,
      //end: 3.08
    },
    PR: {
      link: 'https://pt.wikipedia.org/wiki/PR',
      linkTarget: '_blank',
      country:'Puerto Rico',
      rank: 19,
      population: 2829812,
      linkTarget: '_blank',
      crime: 62.84,
      //end: -2.35
    },
    QA: {
      link: 'https://pt.wikipedia.org/wiki/QA',
      linkTarget: '_blank',
      country:'Qatar',
      rank: 137,
      population: 2979915,
      linkTarget: '_blank',
      crime: 12.13,
      //end: -2.31
    },
    RO: {
      link: 'https://pt.wikipedia.org/wiki/RO',
      linkTarget: '_blank',
      country:"Romania",
      rank: 113,
      population: 19031335,
      linkTarget: '_blank',
      crime: 28.3,
      //end: 7.49
    },
    RU: {
      link: 'https://pt.wikipedia.org/wiki/RU',
      linkTarget: '_blank',
      country:'Russia',
      rank: 86,
      population: 145805947,
      linkTarget: '_blank',
      crime: 39.99,
      //end: 1.5
    },
    RW: {
      link: 'https://pt.wikipedia.org/wiki/RW',
      linkTarget: '_blank',
      country:'Rwanda',
      rank: 123,
      population: 13600464,
      linkTarget: '_blank',
      crime: 24.89,
      //end: 3.7
    },
    // //missing Saints kitts and nevis
    // KN: {
    //   link: 'https://pt.wikipedia.org/wiki/KN',
    //   linkTarget: '_blank',
    //   country:'Saints Kitts and Nevis'
    // },
    // //missing saint Lucia
    // LC: {
    //   link: 'https://pt.wikipedia.org/wiki/LC',
    //   linkTarget: '_blank',
    //   country:'Saint Lucia'
    // },
    // //missing saint Vincent
    // VC: {
    //   link: 'https://pt.wikipedia.org/wiki/VC',
    //   linkTarget: '_blank',
    //   country:'Saint Vincent'
    // },
    // //missing samoa
    // WS: {
    //   link: 'https://pt.wikipedia.org/wiki/WS',
    //   linkTarget: '_blank',
    //   country:'Samao'
    // },
    // //missing san marino
    // SM: {
    //   link: 'https://pt.wikipedia.org/wiki/SM',
    //   linkTarget: '_blank',
    //   country:'San Marino'
    // },
    // //missing sao tome
    // ST: {
    //   link: 'https://pt.wikipedia.org/wiki/ST',
    //   linkTarget: '_blank',
    //   country:'Sao Tome'
    // },
    SA: {
      link: 'https://pt.wikipedia.org/wiki/SA',
      linkTarget: '_blank',
      country:'Saudi Arabia',
      rank: 122,
      population: 35844909,
      linkTarget: '_blank',
      crime: 25.23,
      //end: -2.63
    },
    //missing senegal
    // SN: {
    //   link: 'https://pt.wikipedia.org/wiki/SN',
    //   linkTarget: '_blank',
    //   country:'Senegal'
    // },
    RS: {
      link: 'https://pt.wikipedia.org/wiki/RS',
      linkTarget: '_blank',
      country:'Serbia',
      rank: 93,
      population: 8653016,
      linkTarget: '_blank',
      crime: 38.1,
      //end: 1.83
    },
    //missing Seychelles
    // SC: {
    //   link: 'https://pt.wikipedia.org/wiki/SC',
    //   linkTarget: '_blank',
    //   country:'Seychelles'
    // },
    // //missing Leone
    // SL: {
    //   link: 'https://pt.wikipedia.org/wiki/SL',
    //   linkTarget: '_blank',
    //   country:'Sierra Leone'
    // },
    SG: {
      link: 'https://pt.wikipedia.org/wiki/SG',
      linkTarget: '_blank',
      country:'Singapore',
      rank: 114,
      population: 5943546,
      linkTarget: '_blank',
      crime: 27.96,
      //end: 2.22
    },
    SK: {
      link: 'https://pt.wikipedia.org/wiki/SK',
      linkTarget: '_blank',
      country:"Slovakia",
      rank: 108,
      population: 5460185,
      linkTarget: '_blank',
      crime: 30.37,
      //end: 3.61
    },
    SI: {
      link: 'https://pt.wikipedia.org/wiki/SI',
      linkTarget: '_blank',
      country:'Slovenia',
      rank: 129,
      population: 2078034,
      linkTarget: '_blank',
      crime: 22.28,
      //end: 4.93
    },
    //missing Solomon Islands 
    // SB: {
    //   link: 'https://pt.wikipedia.org/wiki/SB',
    //   linkTarget: '_blank',
    //   country:'Solomon Islands'
    // },
    SO: {
      link: 'https://pt.wikipedia.org/wiki/SO',
      linkTarget: '_blank',
      country:'Somalia',
      rank: 33,
      population: 16841795,
      linkTarget: '_blank',
      crime: 56.04,
      //end: -1.82
    },
    ZA: {
      link: 'https://pt.wikipedia.org/wiki/ZA',
      linkTarget: '_blank',
      country:'South Africa',
      rank: 3,
      population: 60756135,
      linkTarget: '_blank',
      crime: 76.86,
      //end: -0.07
    },
    KR: {
      link: 'https://pt.wikipedia.org/wiki/KR',
      linkTarget: '_blank',
      country:'South Korea',
      rank: 117,
      population: 51329899,
      linkTarget: '_blank',
      crime: 26.68,
      //end: 2.72
    },
    //missing South Sudan
    // SS: {
    //   link: 'https://pt.wikipedia.org/wiki/SS',
    //   country:'South Sudan'
    // },
    ES: {
      link: 'https://pt.wikipedia.org/wiki/ES',
      linkTarget: '_blank',
      country:'Spain',
      rank: 103,
      population: 46719142,
      linkTarget: '_blank',
      crime: 33.32,
      //end: 3.01
    },
    LK: {
      link: 'https://pt.wikipedia.org/wiki/LK',
      linkTarget: '_blank',
      country:'Sri Lanka',
      rank: 83,
      population: 21575842,
      linkTarget: '_blank',
      crime: 41.39,
      //end: 3.46
    },
    SD: {
      link: 'https://pt.wikipedia.org/wiki/SD',
      linkTarget: '_blank',
      country:'south Sudan',
      rank: 81,
      population:4599202,
      linkTarget: '_blank',
      crime: 42.34,
      //end: -12.82
    },
    // //missing Suriname
    // SR: {
    //   link: 'https://pt.wikipedia.org/wiki/SR',
    //   linkTarget: '_blank',
    //   country:'Suriname'
    // },
    // //missing eswatini
    // SZ: {
    //   link: 'https://pt.wikipedia.org/wiki/SZ',
    //   linkTarget: '_blank',
    //   country:'Eswatini'
    // },
    SE: {
      link: 'https://pt.wikipedia.org/wiki/SE',
      linkTarget: '_blank',
      country:'Sweden',
      rank: 54,
      population: 10218971,
      linkTarget: '_blank',
      crime: 48,
      //end: 1.68
    },
    CH: {
      link: 'https://pt.wikipedia.org/wiki/CH',
      linkTarget: '_blank',
      country:'Switzerland',
      rank: 132,
      population: 8773637,
      linkTarget: '_blank',
      crime: 21.62,
      //end: 0.24
    },
    TW: {
      link: 'https://pt.wikipedia.org/wiki/TW',
      linkTarget: '_blank',
      country:'Taiwan',
      rank: 135,
      population: 23888595,
      linkTarget: '_blank',
      crime: 15.46,
      //end: 2.51
    },
    //missing Tajakistan
    // TJ: {
    //   link: 'https://pt.wikipedia.org/wiki/TJ',
    //   linkTarget: '_blank',
    //   country:'Tajakistan'
    // },
    TZ: {
      link: 'https://pt.wikipedia.org/wiki/TZ',
      linkTarget: '_blank',
      country:'Tanzania',
      rank: 35,
      population: 6329855,
      linkTarget: '_blank',
      crime: 56,
      //end: 2.96
    },
    TH: {
      link: 'https://pt.wikipedia.org/wiki/TH',
      linkTarget: '_blank',
      country:'Thailand',
      rank: 35,
      population: 70078203,
      linkTarget: '_blank',
      crime: 39.35,
      //end: 3.68
    },
    //missing Timor Leste
    // TL: {
    //   link: 'https://pt.wikipedia.org/wiki/TL',
    //   linkTarget: '_blank',
    //   country:'Timor Leste'
    // },
    //missing Togo
    // TG: {
    //   link: 'https://pt.wikipedia.org/wiki/TG',
    //   linkTarget: '_blank',
    //   country:'Togo'
    // },
    // //missing Tonga
    // TO: {
    //   link: 'https://pt.wikipedia.org/wiki/TO',
    //   linkTarget: '_blank',
    //   country:'Tonga'
    // },
    TT: {
      link: 'https://pt.wikipedia.org/wiki/TT',
      linkTarget: '_blank',
      country:'Trinidad and Tobago',
      rank: 6,
      population: 1406585,
      linkTarget: '_blank',
      crime: 71.63,
      //end: -2.58
    },
    TN: {
      link: 'https://pt.wikipedia.org/wiki/TN',
      linkTarget: '_blank',
      country:'Tunisia',
      rank: 35,
      population: 12046656,
      linkTarget: '_blank',
      crime: 43.69,
      //end: 0.85
    },
    TR: {
      link: 'https://pt.wikipedia.org/wiki/TR',
      linkTarget: '_blank',
      country:'Turkey',
      rank: 85561976,
      population: -2.82,
      linkTarget: '_blank',
      crime: 39.62,
      //end: 5.68
    },
    // //missing turkmenistan
    // TM: {
    //   link: 'https://pt.wikipedia.org/wiki/TM',
    //   linkTarget: '_blank',
    //   country:'Turkmenistan'
    // },
    //missing tuvalu
    // TV: {
    //   link: 'https://pt.wikipedia.org/wiki/TV',
    //   linkTarget: '_blank',
    //   country:'Tuvalu'
    // },
    UG: {
      link: 'https://pt.wikipedia.org/wiki/UG',
      linkTarget: '_blank',
      country:"Uganda",
      rank: 32,
      population: 48432863,
      linkTarget: '_blank',
      crime: 56.12,
      //end: 2.86
    },
    UA: {
      link: 'https://pt.wikipedia.org/wiki/UA',
      linkTarget: '_blank',
      country:'Ukraine',
      rank: 57,
      population: 43192122,
      linkTarget: '_blank',
      crime: 47.42,
      //end: 3.02
    },
    AE: {
      link: 'https://pt.wikipedia.org/wiki/AE',
      linkTarget: '_blank',
      country:'Unites Arab Emirates',
      rank: 136,
      population: 10081785,
      linkTarget: '_blank',
      crime: 15.23,
      //end: -0.86
    },
    GB: {
      link: 'https://pt.wikipedia.org/wiki/GB',
      linkTarget: '_blank',
      country:'United Kingdom',
      rank: 64,
      population: 68497907,
      linkTarget: '_blank',
      crime: 46.07,
      //end: 1.21
    },
    US: {
      link: 'https://pt.wikipedia.org/wiki/US',
      linkTarget: '_blank',
      country:"United States",
      rank: 56,
      population: 334805269,
      linkTarget: '_blank',
      crime: 47.81,
      //end: 1.48
    },
    UY: {
      link: 'https://pt.wikipedia.org/wiki/UY',
      linkTarget: '_blank',
      country:'Uruguay',
      rank: 45,
      population: 3496016,
      linkTarget: '_blank',
      crime: 51.73,
      //end: 2.74
    },
    UZ: {
      link: 'https://pt.wikipedia.org/wiki/UZ',
      linkTarget: '_blank',
      country:'Uzbekistan',
      rank: 101,
      population: 34382084,
      linkTarget: '_blank',
      crime: 33.42,
      //end: 3.89
    },
    //missing vanuata
    // VU: {
    //   link: 'https://pt.wikipedia.org/wiki/VU',
    //   linkTarget: '_blank',
    //   country:'Vanuata'
    // },
    VE: {
      link: 'https://pt.wikipedia.org/wiki/VE',
      linkTarget: '_blank',
      country:"Venezuela",
      rank: 1,
      population: 29266991,
      linkTarget: '_blank',
      crime: 83.76,
      //end: -15.3
    },
    VN: {
      link: 'https://pt.wikipedia.org/wiki/VN',
      linkTarget: '_blank',
      country:'Vietnam',
      rank: 63,
      population: 98953541,
      linkTarget: '_blank',
      crime: 46.19,
      //end: 5.78
    },
    // //misssing yemen
    // YE: {
    //   link: 'https://pt.wikipedia.org/wiki/YE',
    //   linkTarget: '_blank',
    //   country:'Yemen'
    // },
    ZM: {
      link: 'https://pt.wikipedia.org/wiki/ZM',
      linkTarget: '_blank',
      country:'Zambia',
      rank: 74,
      population: 19470234,
      linkTarget: '_blank',
      crime: 43.62,
      //end: 0.95
    },
    ZW: {
      link: 'https://pt.wikipedia.org/wiki/ZW',
      linkTarget: '_blank',
      country:'Zimbabwe',
      rank: 25,
      population: 15331428,
      linkTarget: '_blank',
      crime: 59.3,
      changeAdjusted: 1.02
    }
  }
};
