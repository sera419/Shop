import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class OderDetailsService {
  signup() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  clothesDetails = [
    {
      id: 1,
      clothesName: 'BABYTALE',
      clothesDescription: 'Disponible partout, en douzaines',
      clothesPrice: '15000 FCFA',
      clothesImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867825/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.08.19_1_gc9ojv.jpg',
      clothesVideo: 'https://res.cloudinary.com/dtdpx59sc/video/upload/br_3908k,c_fit,q_auto,vc_auto,w_1080/v1718603310/VID_20230427_194048_oj6oms.mp4'
    },
    {
      id: 2,
      clothesName: 'Démembrés',
      clothesDescription: 'pour les dessous de vos tout petits',
      clothesPrice: '2000 FCFA',
      clothesImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867823/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.07.50_tz16ui.jpg',
      clothesVideo: 'https://youtu.be/FQMCsPXeXcA?si=HUW8FT_qOLXsPHGg'
    },
    {
      id: 3,
      clothesName: 'chemisette JADE',
      clothesDescription: 'beau petit chemisier pour styler votre bb',
      clothesPrice: '1200 FCFA',
      clothesImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867826/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.08.22_pth1hi.jpg',
      clothesVideo: 'https://youtu.be/FQMCsPXeXcA?si=HUW8FT_qOLXsPHGg'
    },
    {
      id: 4,
      "clothesName": 'les Calecon de Jade',
      "clothesDescription": 'jolie sous vêtement pour bb',
      "clothesPrice": ' 700 FCFA',
      "clothesImg": 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867828/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.08.26_1_vuhmlg.jpg',
      "clothesVideo": 'https://youtu.be/FQMCsPXeXcA?si=HUW8FT_qOLXsPHGg'
    },
  ];

  calecon = [

    {
      "id": 1,
      "caleconName": 'C Douzaine',
      "caleconDescription": "Disponible en gros, livré partout au Cameroun",
      "caleconPrice": "6500 FCFA",
      "caleconImg": "https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867827/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.08.24_2_pnwjpb.jpg"
    },
    {
      "id": 2,
      "caleconName": "C Douzaine",
      "caleconDescription": "Disponible en gros, livré partout au Cameroun",
      "caleconPrice": "6500 FCFA",
      "caleconImg": "https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867899/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.08.26_1_sutkh2.jpg"
    },
    {
      "id": 3,
      "caleconName": "C Douzaine",
      "caleconDescription": "Disponible en gros, livré partout au Cameroun",
      "caleconPrice": "6500 FCFA",
      "caleconImg": "https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867898/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.08.26_2_ljk1ul.jpg"
    },
    {
      "id": 4,
      "caleconName": "C Douzaine",
      "caleconDescription": "Disponible en gros, livré partout au Cameroun",
      "caleconPrice": "6500 FCFA",
      "caleconImg": "https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867898/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.08.26_ugkqhq.jpg"
    },
    {
      "id": 5,
      "caleconName": "C Douzaine",
      "caleconDescription": "Disponible en gros, livré partout au Cameroun",
      "caleconPrice": "6500 FCFA",
      "caleconImg": "https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867828/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.08.25_1_dcmiz2.jpg"
    },
    {
      "id": 6,
      "caleconName": "C Douzaine",
      "caleconDescription": "Disponible en gros, livré partout au Cameroun",
      "caleconPrice": "6500 FCFA",
      "caleconImg": "https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867898/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.09.29_kcmkgt.jpg"
    },
    {
      "id": 7,
      "caleconName": "C Douzaine",
      "caleconDescription": "Disponible en gros, livré partout au Cameroun",
      "caleconPrice": "6500 FCFA",
      "caleconImg": "https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867898/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.09.29_3_y21ql3.jpg"
    },
    {
      "id": 8,
      "caleconName": "C Lingerie",
      "caleconDescription": "Disponible en gros, livré partout au Cameroun",
      "caleconPrice": "6500 FCFA",
      "caleconImg": "https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867897/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.09.29_1_rbdmsf.jpg"
    },
    {
      "id": 9,
      "caleconName": "'C Lingerie",
      "caleconDescription": "Disponible en gros, livré partout au Cameroun",
      "caleconPrice": "6500 FCFA",
      "caleconImg": "https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867897/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.09.28_pesavy.jpg"
    },
    {
      "id": 10,
      "caleconName": "C Douzaine",
      "caleconDescription": "Disponible en gros, livré partout au Cameroun",
      "caleconPrice": "6500 FCFA",
      "caleconImg": "https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867897/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.09.28_1_gyw3c2.jpg"
    },
    {
      "id": 11,
      "caleconName": "C Douzaine",
      "caleconDescription": "Disponible en gros, livré partout au Cameroun",
      "caleconPrice": "6500 FCFA",
      "caleconImg": "https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867828/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.08.27_oqcz3f.jpg"
    },
    {
      "id": 12,
      "caleconName": "C Douzaine",
      "caleconDescription": "Disponible en gros, livré partout au Cameroun",
      "caleconPrice": "6500 FCFA",
      "caleconImg": "https://res.cloudinary.com/dtdpx59sc/image/upload/v1670867828/samples/jade_picture/WhatsApp_Image_2022-10-16_at_19.08.25_rpb0og.jpg"
    },
  ];

  pantalon = [


    {
      id: 1,
      pantalonName: 'Jean Levis',
      pantalonDescription: ' Disponible sur commande, livraison au frais du client',
      pantalonPrice: '10000 FCFA',
      pantalonImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670868451/samples/ecommerce/WhatsApp_Image_2022-12-01_at_21.48.19_v4fk24.jpg'
    },
    {
      id: 2,
      pantalonName: 'jean Levis Black',
      pantalonDescription: 'Disponible livraison aux frais du client',
      pantalonPrice: '2500 FCFA',
      pantalonImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670868451/samples/ecommerce/WhatsApp_Image_2022-12-01_at_21.48.21_gbaadk.jpg'
    },
    {
      id: 3,
      pantalonName: 'Boxer slim',
      pantalonDescription: 'diponible sur commande, livraison au frais du client',
      pantalonPrice: '5500 Fcfa',
      pantalonImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670868451/samples/ecommerce/WhatsApp_Image_2022-12-01_at_21.48.20_jhxr99.jpg'
    },
    {
      id: 4,
      pantalonName: 'Ladie Skiny Jean',
      pantalonDescription: 'Disponible plusieurs tailles, XL, XXL, 2L',
      pantalonPrice: '7000 FCFA',
      pantalonImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670868451/samples/ecommerce/WhatsApp_Image_2022-12-01_at_21.48.17_kwosv5.jpg'
    },
    {
      id: 5,
      pantalonName: 'Lady Sprinfield',
      pantalonDescription: 'jean slim femme, disponible toute taille, livraison au frais du client',
      pantalonPrice: '10000 FCFA',
      pantalonImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670868451/samples/ecommerce/WhatsApp_Image_2022-12-01_at_21.48.18_klcpfm.jpg'
    },
    {
      id: 6,
      pantalonName: 'Lady Banana',
      pantalonDescription: 'jean skiny femme, disponible toutes les tailles, livraison au frais du client',
      pantalonPrice: '8000 FFCFA',
      pantalonImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670868450/samples/ecommerce/WhatsApp_Image_2022-12-01_at_21.48.17_1_hoh6ki.jpg'
    },
    {
      id: 7,
      pantalonName: 'Jean Blanc soft',
      pantalonDescription: 'Disponible dans toutes nos surface, livraison au frais du client',
      pantalonPrice: '10000 Fcfa',
      pantalonImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670868447/samples/ecommerce/WhatsApp_Image_2022-12-06_at_18.15.32_hcodgu.jpg'
    },
    {
      id: 8,
      pantalonName: 'Boxer FILA',
      pantalonDescription: 'soft tendence, disponible, livraison au frais du client',
      pantalonPrice: '9000 FCFA',
      pantalonImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670868447/samples/ecommerce/WhatsApp_Image_2022-12-06_at_18.15.30_1_hcmuk6.jpg'
    },
    {
      id: 9,
      pantalonName: 'boxer Gris',
      pantalonDescription: '30% de reduction ',
      pantalonPrice: '9000 Fcfa',
      pantalonImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670868446/samples/ecommerce/WhatsApp_Image_2022-12-06_at_18.15.29_1_zhlxvk.jpg'
    },
    {
      id: 10,
      pantalonName: 'Boxer FILA GREY',
      pantalonDescription: 'disponible partout, livraison au frais du client',
      pantalonPrice: '10000 FCFA',
      pantalonImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670868447/samples/ecommerce/WhatsApp_Image_2022-12-06_at_18.15.29_e6egfe.jpg'
    },
    {
      id: 11,
      pantalonName: 'Boxeur Skiny',
      pantalonDescription: 'Tenue adaptée de ville, Livraison aux frais du client',
      pantalonPrice: '9000 Fcfa',
      pantalonImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670868446/samples/ecommerce/WhatsApp_Image_2022-12-06_at_18.15.29_1_zhlxvk.jpg'
    },
    {
      id: 12,
      pantalonName: 'Jean Fila Miny',
      pantalonDescription: 'Disponible, livraison aux frais du client',
      pantalonPrice: '10000 Fcfa',
      pantalonImg: 'https://res.cloudinary.com/dtdpx59sc/image/upload/v1670868447/samples/ecommerce/WhatsApp_Image_2022-12-06_at_18.15.32_1_w9qqyg.jpg'
    },
  ]

  chemise = [
    {
      id: 1,
      chemiseName: '',
      chemiseDescription: '',
      chemisePrice: '',
      chemiseImg: ''
    },
    {
      id: 2,
      chemiseName: '',
      chemiseDescription: '',
      chemisePrice: '',
      chemiseImg: '',
    },
    {
      id: 3,
      chemiseName: '',
      chemiseDescription: '',
      chemisePrice: '',
      chemiseImg: '',
    },
    {
      id: 4,
      chemiseName: '',
      chemiseDescription: '',
      chemisePrice: '',
      chemiseImg: '',
    },
    {
      id: 5,
      chemiseName: '',
      chemiseDescription: '',
      chemisePrice: '',
      chemiseImg: '',
    },
    {
      id: 6,
      chemiseName: '',
      chemiseDescription: '',
      chemisePrice: '',
      chemiseImg: '',
    },
    {
      id: 7,
      chemiseName: '',
      chemiseDescription: '',
      chemisePrice: '',
      chemiseImg: '',
    },
    {
      id: 8,
      chemiseName: '',
      chemiseDescription: '',
      chemisePrice: '',
      chemiseImg: '',
    },
    {
      id: 9,
      chemiseName: '',
      chemiseDescription: '',
      chemisePrice: '',
      chemiseImg: '',
    },
    {
      id: 10,
      chemiseName: '',
      chemiseDescription: '',
      chemisePrice: '',
      chemiseImg: '',
    },
    {
      id: 11,
      chemiseName: '',
      chemiseDescription: '',
      chemisePrice: '',
      chemiseImg: '',
    },
    {
      id: 12,
      chemiseName: '',
      chemiseDescription: '',
      chemisePrice: '',
      chemiseImg: '',
    },
  ];

  chapeau = [

    {
      id: 1,
      chapeauName: '',
      chapeauDescription: '',
      chapeauPrice: '',
      chapeauImg: '',
    },
    {
      id: 2,
      chapeauName: '',
      chapeauDescription: '',
      chapeauPrice: '',
      chapeauImg: '',
    },

    {
      id: 3,
      chapeauName: '',
      chapeauDescription: '',
      chapeauPrice: '',
      chapeauImg: '',
    },

    {
      id: 4,
      chapeauName: '',
      chapeauDescription: '',
      chapeauPrice: '',
      chapeauImg: '',
    },

    {
      id: 5,
      chapeauName: '',
      chapeauDescription: '',
      chapeauPrice: '',
      chapeauImg: '',
    },

    {
      id: 6,
      chapeauName: '',
      chapeauDescription: '',
      chapeauPrice: '',
      chapeauImg: '',
    },

    {
      id: 7,
      chapeauName: '',
      chapeauDescription: '',
      chapeauPrice: '',
      chapeauImg: '',
    },

    {
      id: 8,
      chapeauName: '',
      chapeauDescription: '',
      chapeauPrice: '',
      chapeauImg: '',
    },
    {
      id: 9,
      chapeauName: '',
      chapeauDescription: '',
      chapeauPrice: '',
      chapeauImg: '',
    },
    {
      id: 10,
      chapeauName: '',
      chapeauDescription: '',
      chapeauPrice: '',
      chapeauImg: '',
    },
    {
      id: 11,
      chapeauName: '',
      chapeauDescription: '',
      chapeauPrice: '',
      chapeauImg: '',
    },
    {
      id: 12,
      chapeauName: '',
      chapeauDescription: '',
      chapeauPrice: '',
      chapeauImg: ''
    },
  ];
  chaussure = [
    {
      id: 2,
      cothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 3,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 4,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 5,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 6,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 7,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 8,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 9,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 10,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 11,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 12,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
  ];

  Pull = [
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
    {
      id: 1,
      clothesName: '',
      clothesDescription: '',
      clothesPrice: '',
      clothesImg: ''
    },
  ]




}
