//5 Oct 2022
// https://edabit.com/challenge/9fQ4KKTjAdKeTbYxm

function wumbo(string) {    
    //console.log('1')
    let arr1 = [...string]
    //console.log('2')
    for (i=0; i<arr1.length; i++) {
        //console.log('ppp')
        let replacement = arr1.indexOf('M')
        
        if (replacement !== -1) {
            arr1[replacement] = 'W';
        } 
        else  {return(arr1.join(''))}
    }
}
console.log(wumbo("I LOVE MAKING CHALLENGES"))
console.log(wumbo("MEET ME IN WARSAW"))
console.log(wumbo("WUMBOLOGY"))