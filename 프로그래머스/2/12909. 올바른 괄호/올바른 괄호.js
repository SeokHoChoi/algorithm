function solution(s){
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char === '(') {
            stack.push(char);
            continue;
        }
        
        if (stack.length === 0) {
            return false;
        }
        stack.pop();
    }
    
    return stack.length === 0;
}
