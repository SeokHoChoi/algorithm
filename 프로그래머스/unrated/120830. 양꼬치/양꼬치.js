/**
* @param {number} n - 양꼬치 먹은 인분
* @param {number} k - 음료수 마신 수
* @return 지불할 가격
*
* @description
* 할인받을 수 있는 음료의 개수를 얻은 후 그만큼을 제하고 가격을 책정합니다
*/
function solution(n, k) {
    const offsetOfN = 12000 * 10;
    const offsetOfK = parseInt((n * 12000) / offsetOfN, 10);
    const price = (n * 12000) + (k - offsetOfK) * 2000;

    return price;
}