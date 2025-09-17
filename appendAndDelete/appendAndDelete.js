'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    // Write your code here
    let contador = 0;
    
    let listS = selectDifference(s, t);
    let listT = selectDifference(t, s);
    
    contador = listS.length + listT.length;
    if(contador>k) return "No";
    if((contador === k) ||((k - contador)%2 === 0) || (s.length + t.length <= k)) return "Yes";
    return "No";
}
function selectDifference(str1, str2){
    let validador = false;
    let list = [];
    
    for(let i = 0; i < str1.length; i++){
        if(str1[i] != str2[i]) validador = true;
        
        if(validador) list.push(str1[i]);
    }
    return list;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = appendAndDelete(s, t, k);

    ws.write(result + '\n');

    ws.end();
}
