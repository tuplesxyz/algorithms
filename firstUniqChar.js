// First Unique Character

function firstUniqChar(s) {
    var hashT = {}

    for(var i = 0; i < s.length; i++) {
        if(!hashT[s[i]]){
            hashT[s[i]] = 0
        }
        hashT[s[i]]++
    }

    for(k in hashT){
        if(hashT[k] === 1){
            return k;
        }
    }

    return 1;
}

module.exports = firstUniqChar
