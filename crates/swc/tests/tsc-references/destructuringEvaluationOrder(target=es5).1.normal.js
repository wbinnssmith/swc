//// [destructuringEvaluationOrder.ts]
// https://github.com/microsoft/TypeScript/issues/39205
import _extends from "@swc/helpers/src/_extends.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
import _throw from "@swc/helpers/src/_throw.mjs";
import _to_property_key from "@swc/helpers/src/_to_property_key.mjs";
var trace = [];
var order = function(n) {
    return trace.push(n);
};
// order(0) should evaluate before order(1) because the first element is undefined
var ref = [], tmp = ref[0], ref1 = tmp === void 0 ? order(0) : tmp, x = ref1[order(1)];
// order(0) should not evaluate because the first element is defined
var tmp1 = {}, ref2 = tmp1 === void 0 ? order(0) : tmp1, y = ref2[order(1)];
// order(0) should evaluate first (destructuring of object literal {})
// order(1) should evaluate next (initializer because property is undefined)
// order(2) should evaluate last (evaluate object binding pattern from initializer)
var _ref = {}, key = order(0), key1 = order(2), tmp2 = _ref[key], ref3 = tmp2 === void 0 ? order(1) : tmp2, z = ref3[key1], w = _object_without_properties(_ref, [
    key
].map(_to_property_key));
// https://github.com/microsoft/TypeScript/issues/39181
// b = a must occur *after* 'a' has been assigned
var _ref1 = [
    {
        x: 1
    }
], __ref = _sliced_to_array(_ref1, 2), ref4 = __ref[0], ref4 = ref4 !== null ? ref4 : _throw(new TypeError("Cannot destructure undefined")), tmp3 = __ref[1], b = tmp3 === void 0 ? a : tmp3, a = _extends({}, _ref1[0]);
