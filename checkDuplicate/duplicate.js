//2. Optimal way: Big O(n)
function checkDuplicate(arr) {
    var mySet = new Set();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (mySet.has(item)) {
            console.log("duplicate exists\n");
            return true;
        }
        mySet.add(item);
    }
    console.log("No duplication\n");
    return false;
}
checkDuplicate([1, 2, 3]);
