import img61 from '../assets/images (61).jpg';
import img62 from '../assets/images (62).jpg';
import img63 from '../assets/images (63).jpg';

const bgImage = (img) => `url("${img}") center/cover no-repeat`;

export const getColorByWeatherId = (weatherId) => {
  const id = Number(weatherId);

  if (id === 800) {
    // 맑음
    return bgImage(img61);
  }

  const group = Math.floor(id / 100);

  switch (group) {
    case 2: // 뇌우
    case 3: // 이슬비
    case 5: // 비
      return bgImage(img62);
    case 6: // 눈
    case 7: // 안개/먼지
    case 8: // 구름 (801~804)
      return bgImage(img63);
    default:
      return 'linear-gradient(135deg, #64748B 0%, #94A3B8 100%)';
  }
};