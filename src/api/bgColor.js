// import img1 from '../assets/1.png'//맑음

// const bgImage =()=> `url(${img1}) center/cover no-repeat`

// export const getColorByWeatherId=(weatherId)=>{
//     if(weatherId==800)
//         return bgImage(img1)
//     const group = Math.floor(weatherId/100)

//     switch (group){
//         case 2:return bgImage(img7)
//         case 3:return bgImage(img7)
//         case 4:return bgImage(img7)
//         default :return bgImage()
//     }
// }

export const getColorByWeatherId=(weatherId)=>{

    if(weatherId==800)
        return 'linear-gradient(135deg, #4FACFE 0%, #FFD86F 100%)'

    const group = Math.floor(weatherId/100)

    switch (group){

        case 2: // 뇌우: 먹구름 → 번개 보라
            return 'linear-gradient(135deg, #0F172A 0%, #3B2F63 60%, #7C5CFF 100%)';
        case 3: // 이슬비: 물기 먹은 회청색
            return 'linear-gradient(135deg, #8EA7B8 0%, #C9D9E3 100%)';
        case 5: // 비: 짙은 비구름 → 젖은 파랑
            return 'linear-gradient(135deg, #2C3E50 0%, #4C7A9E 100%)';
        case 6: // 눈: 차가운 흰색 → 아이스 블루
            return 'linear-gradient(135deg, #E6F0FA 0%, #B8D4EC 100%)';
        case 7: // 안개/먼지: 뿌연 베이지 회색
            return 'linear-gradient(135deg, #B8B2A7 0%, #DCD6CC 100%)';
        case 8: // 구름: 흐린 은회색 하늘
            return 'linear-gradient(135deg, #7F8FA6 0%, #C4CED9 100%)';
        default:
            return 'linear-gradient(135deg, #64748B 0%, #94A3B8 100%)';
    }
}