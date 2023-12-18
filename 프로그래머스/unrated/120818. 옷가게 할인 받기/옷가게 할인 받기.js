/**
* @param {number} price - 구매한 옷의 가격으로 콤마(,)가 포함된 문자열이 아닌 숫자로 주어집니다.
* @return {number} 콤마(,)가 포함되지 않은 숫자를 return 합니다.
*/
function solution(price) {
    if (price >= 500000) {
        return calDiscountedPrice(price, 0.8);
    }
    
    if (price >= 300000) {
        return calDiscountedPrice(price, 0.9);
    }
    
    if (price >= 100000) {
        return calDiscountedPrice(price, 0.95);
    }
    
    return price;
}

/** 할인된 가격으로 계산해 주는 함수입니다.
* @param {number} price - 원본 가격
* @param {number} appliedDisRate - 할인율을 적용한 비율
* @return {number} 소수점 이하를 버린 정수만을 return합니다.
*/
const calDiscountedPrice = (price, appliedDisRate) => {
    return Math.floor(price * appliedDisRate);
}