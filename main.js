var $audioUpload = document.getElementById("audio-uploader");
$audioUpload === null || $audioUpload === void 0 ? void 0 : $audioUpload.addEventListener("input", function (event) { InputAudioFile(event); });
function InputAudioFile(event) {
    var target = event.currentTarget;
    if (target.files != null) {
        var file = target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) { var _a; return console.log((_a = e.target) === null || _a === void 0 ? void 0 : _a.result); };
        reader.readAsArrayBuffer(file);
    }
}
