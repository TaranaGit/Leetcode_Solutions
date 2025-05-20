//2. Optimal way: Big O(n)
function checkDuplicate(arr:number[]):boolean{
const mySet = new Set<number>()

for(const item of arr){
    if(mySet.has(item)){
        console.log("duplicate exists\n")
        return true;
    }
    
    mySet.add(item);
}
console.log("No duplication\n")
return false;
}
checkDuplicate([1,2,3,3])


//1.Brute force
// let numArray:number[] = [10,1,3,4,4]
// // [10,1,3,4,3,10,50,1]
// let duplicate_exist:boolean =false;
// let loop_count:number = 0;

// for(let i=0; i<numArray.length;i++){

//     for(let j=i+1; j<numArray.length; j++){
//         if(numArray[j] == numArray[i]){
//             duplicate_exist = true;
//             break;
//         }
//     }
//     if (duplicate_exist == true){
//         console.log("duplicate exists");
//         break;
//     }
// }
// if(!duplicate_exist){
//     console.log("No duplication")
// }




