let api = "http://localhost:3000";
let token = "f7deaa757e034458bb5c8a8b911c82eb";

const queryStringify = (obj, prefix) => {
    var pairs = []
    for (var key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
            continue;
        }

        var value = obj[key];
        var enkey = encodeURIComponent(key);
        
    }
}