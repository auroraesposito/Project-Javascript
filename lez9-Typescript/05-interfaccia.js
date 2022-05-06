var Auto = /** @class */ (function () {
    function Auto(colore) {
        this.colore = colore;
    }
    Object.defineProperty(Auto.prototype, "color", {
        get: function () {
            return this.colore;
        },
        enumerable: false,
        configurable: true
    });
    return Auto;
}());
var miaAuto = new Auto('Rossa');
console.log(miaAuto.color);
var notANumber = /** @class */ (function () {
    function notANumber(_messaggio, _id) {
        this._messaggio = _messaggio;
        this._id = _id;
    }
    return notANumber;
}());
var NAN = new notANumber('non è un numero');
console.log(NAN._messaggio);
