

function xor(input: Array<number>, key: string): Array<number> 
{
    let j = 0;
    let arr = new Array(input.length);

    for (let i = 0; i < input.length; ++i){
        arr[i] = input[i] ^ key.charCodeAt(j);
        if (++j == key.length){
            j = 0;
        }
    }

    return arr;
}

function hash(s: string): number 
{
    let hash = 0, i, chr;
    for (i = 0; i < s.length; i++) {
      chr   = s.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }

function stringToNumArray(input: string) : Array<number>
{
    let arr = new Array(input.length);
    for (let i = 0; i < input.length; ++i){
        arr[i] = input.charCodeAt(i);
    }
    return arr;
}

function numArrayToString(input: Array<number>): string 
{
    return String.fromCharCode(...input);
}

const mapOfAnswers: Record<number, Array<number>> = {
    3437222: [65,85,94,88,73,69,65,88,94,93,72,89],
    49: [123,84,85,95,88,82,90,80],
}

function generateMapOfAnswers(): void // Delete before the event
{
    let answer: string = "pepa"
    let prt = hash(answer) + ": [" + xor(stringToNumArray("10.99 19.888"), answer) + "],";
    console.log(prt);

    answer = "1"
    prt = hash(answer) + ": [" + xor(stringToNumArray("Jednicka"), answer) + "],";
    console.log(prt);
}

function testAnswer(s: string)
{
    let hashValue: number = hash(s);

    generateMapOfAnswers(); // Delete before the event

    if (mapOfAnswers[hashValue] == undefined)
    {
        alert("Wrong answer!");
    }
    else
    {
        let coor: string = numArrayToString(xor(mapOfAnswers[hashValue], s));
        alert("Correct answer!\nMessage is: " + coor);
        document.getElementById("outputText").innerText = coor;
    }
}
