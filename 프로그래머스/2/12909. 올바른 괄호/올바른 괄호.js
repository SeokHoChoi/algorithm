function solution(s){
    var answer = true;
    const stack = [];
    let i = 0;
    for (let i = 0; i < s.length; i++) {
        const tmp = s[i];
        if (tmp === '(') {
            stack.push(tmp);
        } else {
           const tmp2 = stack.pop();
            if (tmp2 === ')' || tmp2 === undefined) {
                return false;
              
            } else {
                answer = true;
            }
        }
    }
    if (!!stack.length) {
        answer = false;
    }
    

    return answer;
}

// function solution(s) {
//     const stack = [];
    
//     for (let i =  0; i < s.length; i++) {
//         const char = s[i];
//         if (char === '(') {
//             stack.push(char);
//         } else if (char === ')') {
//             if (stack.length ===  0) {
//                 return false; 
//             }
//             stack.pop();
//         }
//     }
    
//     return stack.length ===  0;
// }