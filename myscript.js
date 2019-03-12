var btnElement = document.getElementById('btn');
btnElement.onclick=function () {
    var startingNumberValue = document.getElementById('startingNumber').value;
    var endingNumberValue = document.getElementById('endingNumber').value;

    var res=' ';

    for (var x=startingNumberValue; x<=endingNumberValue; x++){
        // document.write(x+'');
        res+=x;
    }
    document.getElementById('result').value = res;
};