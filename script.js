function rc4(key, str) {
    var s = [], j = 0, x, res = '';
    for (var i = 0; i < 256; i++) {
        s[i] = i;
    }
    for (i = 0; i < 256; i++) {
        j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
    }
    i = 0;
    j = 0;
    for (var y = 0; y < str.length; y++) {
        i = (i + 1) % 256;
        j = (j + s[i]) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
        res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
    }
    return res;
}

function encryptDecrypt() {
    var messages = document.getElementById("messages").value;
    var key = document.getElementById("key").value;
    var result = document.getElementById("result");
    if (messages && key) {
        // Proses enkripsi atau dekripsi
        var encrypted = rc4(key, messages);
        result.value = encrypted;
    } else {
        alert("Please enter both message and key.");
    }
}

function clearFields() {
    document.getElementById("messages").value = "";
    document.getElementById("key").value = "";
    document.getElementById("result").value = "";
}