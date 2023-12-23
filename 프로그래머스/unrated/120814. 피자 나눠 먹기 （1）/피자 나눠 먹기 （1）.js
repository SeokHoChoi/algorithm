/**
* @param {number} n - 피자를 나눠먹을 사람의 수
* @return {number} 피자의 수
* 
* @description 
* 사람의 수 n이 7명 이하일 때는 한 판의 피자가 필요합니다.
* 사람의 수 n이 7명을 초과할 때는 7로 나누어 떨어진다면 몫만큼,
* 나누어 떨이지지 않는다면 n을 피자의 조각수 7로 나눈 몫에 
* 1을 더해주면 필요한 피자의 수가 나옵니다.
* 7로 나눈 나머지는 곧 1~6명의 사람들이기 때문입니다.
*
* 가장 간단한 방법으로는 Math.ceil(n / 7) 메서드를 이용 가능합니다.
* ceil 메서드를 이용하여 절상 시킨다면 n / 7에서
* 7 이하라면 1판,
* 7로 나누어떨어진다면 몫,
* 나누어떨어지지 않는다면 절상되기에 자동으로 한 판의 피자 수가 추가됩니다.
*/
function solution(n) {
    const rest = n % 7;
    const parts = parseInt(n / 7, 10);
    
    if (rest === 0) {
        return parts;
    }
    
    return parts + 1; 
}