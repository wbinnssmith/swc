//// [emitRestParametersMethod.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
!function() {
    "use strict";
    function C(name) {
        for(var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)rest[_key - 1] = arguments[_key];
        _class_call_check(this, C);
    }
    var _proto = C.prototype;
    return _proto.bar = function() {
        for(var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++)rest[_key] = arguments[_key];
    }, _proto.foo = function(x) {
        for(var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)rest[_key - 1] = arguments[_key];
    }, C;
}();
