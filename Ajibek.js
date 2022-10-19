//1) write a function that when given a URL as a string, parses out just the domain name and returns
// it as a string. For example:


function domainName(url) {
    if (typeof url === "string") {
        let domain = url.replace("http://", "").replace("https://", "").replace("www.", "").split(".")[0];
        return domain;
    }
    return "Invalid URL";

}

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName(56));



//2) write a function that takes as integer as input and returns the number of bits that are equal to one in the
//  representation of that number. You can guarantee that input is non-negative.


function countBits(n) {
    let binary = n.toString(2);
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
            count++;
        }
    }
    return count;
}

console.log(countBits(1234));
console.log(countBits(-10));
console.log(countBits(2345322));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));


//3) a pangram is sentence that contains every single letter of the alphabet at least once. For example, the sentence
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once
// (case is irrelevant). Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

// variant1

function isPangram(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let str = string.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
console.log(isPangram("abcdefghijklmnopqrstuvwxyz."));

//variant2

function isPangram(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let str = string.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (!str.includes(alphabet[i])) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
console.log(isPangram("abcdefghijklmnopqrstuvwxyz."));

//variant3

function isPangram(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lowerCase = string.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (lowerCase.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
console.log(isPangram("abcdefghijklmnopqrstuvwxyz."));


// whe main idea is to count all the occuring characters in a string. If you have a string like aba, then the result
// should be {'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.

//vraiant1

function count(string) {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        if (obj[string[i]]) {
            obj[string[i]]++;
        } else {
            obj[string[i]] = 1;
        }
    }
    return obj;
}

console.log(count("aba"));
console.log(count(""));
console.log(count("aabbcc"));



// event emitter example 
 