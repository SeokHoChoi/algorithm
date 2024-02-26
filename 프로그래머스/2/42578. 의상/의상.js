function solution(clothes) {
    var answer =  1;
    const clothesMap = {};

    for (let i =  0; i < clothes.length; i++) {
        const clothType = clothes[i][1];
        if (!clothesMap[clothType]) {
            clothesMap[clothType] =  0;
        }
        clothesMap[clothType]++;
    }

    for (const key in clothesMap) {
        answer *= (clothesMap[key] +  1); 
    }

    return answer -  1; 
}