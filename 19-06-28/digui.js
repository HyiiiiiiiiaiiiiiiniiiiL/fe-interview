/** 
 * 生成一个长度为5的空数据arr
 * 生成一个(2-32)之间的随机整数rand
 * 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand
 * 并插入到arr内【需要使用递归实现，不能使用for/while等循环】
 * 最终输出一个长度为5，且内容不重复的数组arr
*/

//第一种方法
(function() {
    var arr = new Array(5)
    var num = randomNumber()
    var i = 0
    randomArr(arr, num)
    function randomArr(arr, num) {
        if (arr.indexOf(num) < 0) {
            arr[i] = num;
            i++
        } else {
            num = randomNumber()
        }
        if (i >= arr.length) {
            console.log("arr", arr)
            return;
        } else {
            randomArr(arr, num)
        }
    }
    function randomNumber() {
        return Math.floor(Math.random() * 31 + 2)
    }
})();

//第二种方法
(function() {
    function insertArr(arr, i = 0, min = 2, max = 32) {
        const num = Math.max(min, Math.ceil(Math.random() * max))
        if (!arr[arr.length - 1]) {
            if (!arr.includes(num)) {
                arr[i++] = num
            }
            return insertArr(arr, i)
        }
        return arr
    }
    const arr = new Array(5)
    const result = insertArr(arr)
    console.log("result", result)
})();