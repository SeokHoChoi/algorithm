function solution(phone_book) {
    phone_book.sort();

    for (let i =  0; i < phone_book.length -  1; i++) {
        if (phone_book[i +  1].indexOf(phone_book[i]) ===  0) {
            return false;
        }
    }

    return true;
    
// 시간 초과
//     var answer = true;
//     for (let i = 0; i < phone_book.length; i++) {
//         for (let j = 0; j < phone_book.length; j++) {
//             const number = phone_book[i];
//             const len = number.length;
//             if (i !== j && number === phone_book[j].slice(0, len)) {
//                 return false;
//             }
//         }
//     }
    
//     return answer;
}