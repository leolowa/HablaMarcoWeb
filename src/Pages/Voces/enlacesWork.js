import ESPN from '../../Static/Video/ESPN.mp4';
import videoAUDIBLE from '../../Static/Video/AUDIBLE_1.mp4';
import videoAUDIBLE2 from '../../Static/Video/AUDIBLE2.mp4';
import videoPARAMOUNT from '../../Static/Video/Paramount+.mp4';
import videoFANTA from '../../Static/Video/FANTA.mp4';
import videoSPRITE from '../../Static/Video/Sprite.mp4';
import videoHONDA2 from '../../Static/Video/HONDA2.mp4';
import videoHONDA3 from '../../Static/Video/HONDA3.mp4';
import videoCOCACOLA from '../../Static/Video/Coca-Cola.mp4';
import videoDisney from '../../Static/Video/Disney1.mov';
import videoDiscovery from '../../Static/Video/FoodNetwork1.mov';
import videoDiscovery2 from '../../Static/Video/FoodNetwork2.mov';
import videoDiscovery3 from '../../Static/Video/FoodNetwork3.mov';
import videoHonda from '../../Static/Video/HONDA1.mp4';
import videoPantene from '../../Static/Video/PANTENE1.mp4';
import videoPantene2 from '../../Static/Video/PANTENE2.mp4';
import videoSchweppes from '../../Static/Video/Schweppes.mp4';
import StellaArtois1 from '../../Static/Video/StellaArtois1.mp4';
import StellaArtois2 from '../../Static/Video/StellaNoire.mp4';
import ypf from '../../Static/Video/YPF.mp4';
import ingravido from '../../Static/Video/INGRAVIDO.mp4';
import Ford from '../../Static/Video/Ford.mp4';

const urlVideo = [
  {
    url: ESPN,
    tituloComercial: 'Espn',
  },
  {
    url: ypf,
    tituloComercial: 'YPF',
  },
  {
    url: ingravido,
    tituloComercial: 'Ingravido',
  },
  {
    url: videoCOCACOLA,
    otrasUrls: [
      {url: videoCOCACOLA, tituloComercial: 'Coca Cola'},
      {url: videoFANTA, tituloComercial: 'Fanta'},
      {url: videoSPRITE, tituloComercial: 'Sprite'},
    ],
    tituloComercial: 'Coca Cola',
  },
  {
    url: videoDisney,
    tituloComercial: 'Disney',
  },
  {
    url: videoDiscovery,
    otrasUrls: [
      {url: videoDiscovery, tituloComercial: 'Video 1'},
      {url: videoDiscovery2, tituloComercial: 'Video 2'},
      {url: videoDiscovery3, tituloComercial: 'Video 3'},
    ],
    tituloComercial: 'Discovery NF',
  },
  {
    url: videoHonda,
    otrasUrls: [
      {url: videoHonda, tituloComercial: 'Video 1'},
      {url: videoHONDA2, tituloComercial: 'Video 2'},
      {url: videoHONDA3, tituloComercial: 'Video 3'},
    ],
    tituloComercial: 'Honda',
  },
  {
    url: videoPantene,
    otrasUrls: [
      {url: videoPantene, tituloComercial: 'Video 1'},
      {url: videoPantene2, tituloComercial: 'Video 2'},
    ],
    tituloComercial: 'Pantene',
  },
  {
    url: videoSchweppes,
    tituloComercial: 'Schweppes',
  },
  {
    url: StellaArtois1,
    otrasUrls: [
      {url: StellaArtois1, tituloComercial: 'Stella Artois'},
      {url: StellaArtois2, tituloComercial: 'Stella Noire'},
    ],
    tituloComercial: 'Stella Artois',
  },
  {
    url: videoAUDIBLE,
    otrasUrls: [
      {url: videoAUDIBLE, tituloComercial: 'Video 1'},
      {url: videoAUDIBLE2, tituloComercial: 'Video 2'},
    ],
    tituloComercial: 'Audible',
  },
  {
    url: videoPARAMOUNT,
    tituloComercial: 'Paramount+',
  },
  {
    url: Ford,
    tituloComercial: 'Ford',
  },
];

export default urlVideo;
