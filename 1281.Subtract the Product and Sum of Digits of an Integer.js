var subtractProductAndSum = function(n) {
    var arrayInt = []
    var arrayString = n.toString().split("")

    for (let i = 0 ; i < arrayString.length ; i++ ){
    arrayInt.push(parseInt(arrayString[i]));
    }
    
    var resultAdd = arrayInt.reduce((sum,num) => {
        return sum + num
    })
    var resultMulti = arrayInt.reduce((sum,num) => {
        return sum * num
    })
    
    console.log(resultMulti - resultAdd )
};

subtractProductAndSum(234)