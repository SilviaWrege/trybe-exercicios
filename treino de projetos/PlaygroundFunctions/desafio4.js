// 50 pontos quando o time tenha 14 vitórias e 8 empates;
// 5 pontos quando o time tenha 1 vitória e 2 empates;
// 0 pontos quando o time tenha 0 vitórias e 0 empates.

 // 15 * 3 = 45
 // 10 * 1 = 10
 //total = 55 pontos

 function footballPoints(wins, ties){
    let result;
    result = (wins * 3) + ties;
    return result;
 }
 console.log(footballPoints(14,8));