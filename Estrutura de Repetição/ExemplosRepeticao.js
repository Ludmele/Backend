import rl from 'readline-sync';

//let num = rl.questionInt("Informe um numero:");

//while (num <= 10){
    //num++;
    //if (num % 2 == 0) {
   //     continue;
    //}
    //else{
        //console.log(num);
    //}
//}

///continue ---> encerra a iteração daquela repetição

let num1 = 0;
do {
    let num1 = rl.questionInt("Informe a idade: ");
} while (num1 < 18);