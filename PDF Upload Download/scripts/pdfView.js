// alert("connected");
var data = null;
var arr = null;

function uploadFile() {
    var fileInput = document.getElementById('myFile');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function (readerEvt) {
        var arrayBuffer = readerEvt.target.result;
        var byteArray = new Uint8Array(arrayBuffer);
        arr = byteArray;
        var byteString = '' + byteArray[0];
        for (var i = 1; i < byteArray.byteLength; i++) {
            byteString += ',' + byteArray[i];
        }
        byteString = btoa(byteString);
        data = byteString;
    };

    reader.readAsArrayBuffer(file);
    console.log("File uploaded");
}

function downloadFile() {
    var byteArray = base64ToArrayBuffer(data);
    saveByteArray("Sample Report", byteArray);
    console.log("File downloaded");
}

function base64ToArrayBuffer(base64) {
    var byteArray = atob(base64).split(',');
    var binaryLen = byteArray.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
        var ascii = byteArray[i];
        bytes[i] = ascii;
    }
    return bytes;
}

function saveByteArray(reportName, byte) {
    var blob = new Blob([byte]);
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName + ".pdf";
    link.download = fileName;
    link.click();
}
