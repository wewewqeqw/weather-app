
export const getOutfit=(temp)=>{
    if(temp>=28) return '민소매, 반바지'
    if(temp>=23) return '민소매, 반바지'
    if(temp>=17) return '민소매, 반바지'
    if(temp>=12) return '민소매, 반바지'
    if(temp>=5) return '민소매, 반바지'
    return '패딩 목도리 필수!'
}