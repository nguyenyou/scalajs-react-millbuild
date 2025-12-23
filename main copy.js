'use strict';
import * as $i_react from "react";
import * as $i_react$002ddom$002fclient from "react-dom/client";
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
var $L0;
function $Char(c) {
  this.c = c;
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c);
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))));
}
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)));
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1);
  }
  $throwClassCastException(arg0, arg1);
}
function $throwArrayIndexOutOFBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))));
}
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))));
}
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException());
}
function $throwNullPointerException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NullPointerException());
}
function $n(arg0) {
  if ((arg0 === null)) {
    $throwNullPointerException();
  }
  return arg0;
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf();
        } else {
          return $d_jl_Integer.getClassOf();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf();
      } else {
        return $d_jl_Double.getClassOf();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf();
    }
    case "undefined": {
      return $d_jl_Void.getClassOf();
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name;
      } else {
        return $throwNullPointerException();
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.codePointAt__I__I(x0);
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.hashCode__I.call(instance);
      }
    }
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.repeat__I__T(x0);
  }
}
function $dp_split__T__I__AT(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__split__T__I__AT(instance, x0, x1);
  } else {
    return instance.split__T__I__AT(x0, x1);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_StringIndexOutOfBoundsException__I__(new $c_jl_StringIndexOutOfBoundsException(), arg1));
  } else {
    return r;
  }
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__RTLong(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__RTLong__O__D(arg0, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOFBoundsException(null);
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
function $systemArraycopy(arg0, arg1, arg2, arg3, arg4) {
  arg0.copyTo(arg1, arg2, arg3, arg4);
}
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4);
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)]);
    }
  }
}
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      $systemArraycopy(arg0, arg1, arg2, arg3, arg4);
    } else {
      $throwArrayStoreException(null);
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4);
  } else {
    $throwArrayStoreException(null);
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"));
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"));
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"));
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"));
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"));
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"));
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"));
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"));
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"));
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"));
}
/** @constructor */
function $c_O() {
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that);
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T((i >>> 0.0).toString(16)));
});
$c_O.prototype.toString = (function() {
  return this.toString__T();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null;
    }
  } else {
    this.u = arg;
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice());
});
function $ah_O() {
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false;
    }
  } else {
    this.u = arg;
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Uint16Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int8Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int16Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int32Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0;
    }
  } else {
    this.u = arg;
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float32Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float64Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice());
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0);
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = ({});
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass);
  }
  return this;
});
$TypeData.prototype.initClass = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (kindOrCtor === 2);
  this.name = fullName;
  this.isInterface = (kindOrCtor === 1);
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this;
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException();
      }
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null;
      }
    } else {
      this.u = arg;
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOFBoundsException(i);
    }
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v);
    }
    this.u[i] = v;
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice());
  });
  ArrayClass.prototype.$classData = this;
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this);
  }
  return this._arrayOf;
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this);
  }
  return this._classOf;
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that));
});
$TypeData.prototype.cast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name);
  }
  return obj;
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null);
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null);
});
$TypeData.prototype.newArray = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.getArrayOf().constr)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))));
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth);
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Z", depth);
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "C", depth);
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "B", depth);
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "S", depth);
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "I", depth);
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "J", depth);
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "F", depth);
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "D", depth);
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = ({});
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType() {
}
$c_Ljapgolly_scalajs_react_CtorType.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_CtorType.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType() {
}
$h_Ljapgolly_scalajs_react_CtorType.prototype = $c_Ljapgolly_scalajs_react_CtorType.prototype;
function $as_Ljapgolly_scalajs_react_CtorType(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_CtorType) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.CtorType"));
}
function $isArrayOf_Ljapgolly_scalajs_react_CtorType(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_CtorType)));
}
function $asArrayOf_Ljapgolly_scalajs_react_CtorType(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_CtorType(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.CtorType;", depth));
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType$Mod$() {
}
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType$Mod$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType$Mod$() {
}
$h_Ljapgolly_scalajs_react_CtorType$Mod$.prototype = $c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype;
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype.toString__T = (function() {
  return "Mod";
});
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype.applyAndCast$extension__F1__sjs_js_Object__sjs_js_Object = (function(this$, o) {
  $n(this$).apply__O__O(o);
  return o;
});
var $d_Ljapgolly_scalajs_react_CtorType$Mod$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_CtorType$Mod$, "japgolly.scalajs.react.CtorType$Mod$", ({
  Ljapgolly_scalajs_react_CtorType$Mod$: 1
}));
var $n_Ljapgolly_scalajs_react_CtorType$Mod$;
function $m_Ljapgolly_scalajs_react_CtorType$Mod$() {
  if ((!$n_Ljapgolly_scalajs_react_CtorType$Mod$)) {
    $n_Ljapgolly_scalajs_react_CtorType$Mod$ = new $c_Ljapgolly_scalajs_react_CtorType$Mod$();
  }
  return $n_Ljapgolly_scalajs_react_CtorType$Mod$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType$Summoner$() {
}
$c_Ljapgolly_scalajs_react_CtorType$Summoner$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_CtorType$Summoner$.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType$Summoner$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType$Summoner$() {
}
$h_Ljapgolly_scalajs_react_CtorType$Summoner$.prototype = $c_Ljapgolly_scalajs_react_CtorType$Summoner$.prototype;
$c_Ljapgolly_scalajs_react_CtorType$Summoner$.prototype.summonN__Ljapgolly_scalajs_react_internal_Singleton__Ljapgolly_scalajs_react_CtorType$Summoner = (function(s) {
  var f = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((rc) => new $c_Ljapgolly_scalajs_react_CtorType$Nullary($i_react.createElement(rc, $n(s).Ljapgolly_scalajs_react_internal_Singleton__f_value), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((m) => {
    var m$1 = ((m === null) ? null : $n($as_Ljapgolly_scalajs_react_CtorType$Mod(m)).mod__F1());
    return $i_react.createElement(rc, $m_Ljapgolly_scalajs_react_CtorType$Mod$().applyAndCast$extension__F1__sjs_js_Object__sjs_js_Object(m$1, $n($n(s).Ljapgolly_scalajs_react_internal_Singleton__f_mutableObj).apply__O()));
  })), (void 0))));
  var p = $m_Ljapgolly_scalajs_react_CtorType$ProfunctorN$();
  return new $c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1(f, p);
});
var $d_Ljapgolly_scalajs_react_CtorType$Summoner$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_CtorType$Summoner$, "japgolly.scalajs.react.CtorType$Summoner$", ({
  Ljapgolly_scalajs_react_CtorType$Summoner$: 1
}));
var $n_Ljapgolly_scalajs_react_CtorType$Summoner$;
function $m_Ljapgolly_scalajs_react_CtorType$Summoner$() {
  if ((!$n_Ljapgolly_scalajs_react_CtorType$Summoner$)) {
    $n_Ljapgolly_scalajs_react_CtorType$Summoner$ = new $c_Ljapgolly_scalajs_react_CtorType$Summoner$();
  }
  return $n_Ljapgolly_scalajs_react_CtorType$Summoner$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_ReactDOMClient$() {
  this.Ljapgolly_scalajs_react_ReactDOMClient$__f_raw = null;
  $n_Ljapgolly_scalajs_react_ReactDOMClient$ = this;
  this.Ljapgolly_scalajs_react_ReactDOMClient$__f_raw = $i_react$002ddom$002fclient;
}
$c_Ljapgolly_scalajs_react_ReactDOMClient$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_ReactDOMClient$.prototype.constructor = $c_Ljapgolly_scalajs_react_ReactDOMClient$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_ReactDOMClient$() {
}
$h_Ljapgolly_scalajs_react_ReactDOMClient$.prototype = $c_Ljapgolly_scalajs_react_ReactDOMClient$.prototype;
$c_Ljapgolly_scalajs_react_ReactDOMClient$.prototype.createRoot__Lorg_scalajs_dom_NodeSelector__Ljapgolly_scalajs_react_ReactRoot = (function(container) {
  var raw = this.Ljapgolly_scalajs_react_ReactDOMClient$__f_raw.createRoot(container);
  return new $c_Ljapgolly_scalajs_react_ReactRoot(raw);
});
var $d_Ljapgolly_scalajs_react_ReactDOMClient$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_ReactDOMClient$, "japgolly.scalajs.react.ReactDOMClient$", ({
  Ljapgolly_scalajs_react_ReactDOMClient$: 1
}));
var $n_Ljapgolly_scalajs_react_ReactDOMClient$;
function $m_Ljapgolly_scalajs_react_ReactDOMClient$() {
  if ((!$n_Ljapgolly_scalajs_react_ReactDOMClient$)) {
    $n_Ljapgolly_scalajs_react_ReactDOMClient$ = new $c_Ljapgolly_scalajs_react_ReactDOMClient$();
  }
  return $n_Ljapgolly_scalajs_react_ReactDOMClient$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_Ref$() {
}
$c_Ljapgolly_scalajs_react_Ref$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_Ref$.prototype.constructor = $c_Ljapgolly_scalajs_react_Ref$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_Ref$() {
}
$h_Ljapgolly_scalajs_react_Ref$.prototype = $c_Ljapgolly_scalajs_react_Ref$.prototype;
$c_Ljapgolly_scalajs_react_Ref$.prototype.fromJs__Ljapgolly_scalajs_react_facade_React$RefHandle__Ljapgolly_scalajs_react_Ref$FullF = (function(raw) {
  var this$1 = $m_Ljapgolly_scalajs_react_util_Util$();
  var l = this$1.Ljapgolly_scalajs_react_util_Util$__f_identity;
  var r = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => new $c_s_Some(_$1)));
  var this$3 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
  var FF = this$3.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
  return new $c_Ljapgolly_scalajs_react_Ref$$anon$1(raw, r, FF, l);
});
var $d_Ljapgolly_scalajs_react_Ref$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_Ref$, "japgolly.scalajs.react.Ref$", ({
  Ljapgolly_scalajs_react_Ref$: 1
}));
var $n_Ljapgolly_scalajs_react_Ref$;
function $m_Ljapgolly_scalajs_react_Ref$() {
  if ((!$n_Ljapgolly_scalajs_react_Ref$)) {
    $n_Ljapgolly_scalajs_react_Ref$ = new $c_Ljapgolly_scalajs_react_Ref$();
  }
  return $n_Ljapgolly_scalajs_react_Ref$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_Reusability(test) {
  this.Ljapgolly_scalajs_react_Reusability__f_test = null;
  this.Ljapgolly_scalajs_react_Reusability__f_test = test;
}
$c_Ljapgolly_scalajs_react_Reusability.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_Reusability.prototype.constructor = $c_Ljapgolly_scalajs_react_Reusability;
/** @constructor */
function $h_Ljapgolly_scalajs_react_Reusability() {
}
$h_Ljapgolly_scalajs_react_Reusability.prototype = $c_Ljapgolly_scalajs_react_Reusability.prototype;
$c_Ljapgolly_scalajs_react_Reusability.prototype.hashCode__I = (function() {
  $m_Ljapgolly_scalajs_react_Reusability$();
  var this$ = this.Ljapgolly_scalajs_react_Reusability__f_test;
  var this$2 = $n(this$);
  return $systemIdentityHashCode(this$2);
});
$c_Ljapgolly_scalajs_react_Reusability.prototype.equals__O__Z = (function(x$0) {
  return $m_Ljapgolly_scalajs_react_Reusability$().equals$extension__F2__O__Z(this.Ljapgolly_scalajs_react_Reusability__f_test, x$0);
});
function $as_Ljapgolly_scalajs_react_Reusability(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_Reusability) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.Reusability"));
}
function $isArrayOf_Ljapgolly_scalajs_react_Reusability(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_Reusability)));
}
function $asArrayOf_Ljapgolly_scalajs_react_Reusability(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_Reusability(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.Reusability;", depth));
}
var $d_Ljapgolly_scalajs_react_Reusability = new $TypeData().initClass($c_Ljapgolly_scalajs_react_Reusability, "japgolly.scalajs.react.Reusability", ({
  Ljapgolly_scalajs_react_Reusability: 1
}));
function $p_Ljapgolly_scalajs_react_Reusable__b$lzyINIT1$1__sr_LazyRef__F1__O($thiz, b$lzy1$1, f$1) {
  if ((b$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  return ($n(b$lzy1$1).sr_LazyRef__f__initialized ? $n(b$lzy1$1).sr_LazyRef__f__value : $n(b$lzy1$1).initialize__O__O($n(f$1).apply__O__O($n($thiz.Ljapgolly_scalajs_react_Reusable__f_lazyValue).apply__O())));
}
function $p_Ljapgolly_scalajs_react_Reusable__b$4__sr_LazyRef__F1__O($thiz, b$lzy1$2, f$2) {
  return ($n(b$lzy1$2).sr_LazyRef__f__initialized ? $n(b$lzy1$2).sr_LazyRef__f__value : $p_Ljapgolly_scalajs_react_Reusable__b$lzyINIT1$1__sr_LazyRef__F1__O($thiz, b$lzy1$2, f$2));
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_Reusable(lazyValue, root, isReusable) {
  this.Ljapgolly_scalajs_react_Reusable__f_lazyValue = null;
  this.Ljapgolly_scalajs_react_Reusable__f_root = null;
  this.Ljapgolly_scalajs_react_Reusable__f_isReusable = null;
  this.Ljapgolly_scalajs_react_Reusable__f_lazyValue = lazyValue;
  this.Ljapgolly_scalajs_react_Reusable__f_root = root;
  this.Ljapgolly_scalajs_react_Reusable__f_isReusable = isReusable;
}
$c_Ljapgolly_scalajs_react_Reusable.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_Reusable.prototype.constructor = $c_Ljapgolly_scalajs_react_Reusable;
/** @constructor */
function $h_Ljapgolly_scalajs_react_Reusable() {
}
$h_Ljapgolly_scalajs_react_Reusable.prototype = $c_Ljapgolly_scalajs_react_Reusable.prototype;
$c_Ljapgolly_scalajs_react_Reusable.prototype.toString__T = (function() {
  return (("Reusable(" + this.value__O()) + ")");
});
$c_Ljapgolly_scalajs_react_Reusable.prototype.hashCode__I = (function() {
  var x = this.value__O();
  return $m_sr_Statics$().anyHash__O__I(x);
});
$c_Ljapgolly_scalajs_react_Reusable.prototype.value__O = (function() {
  return $n(this.Ljapgolly_scalajs_react_Reusable__f_lazyValue).apply__O();
});
$c_Ljapgolly_scalajs_react_Reusable.prototype.map__F1__Ljapgolly_scalajs_react_Reusable = (function(f) {
  var b$lzy1 = new $c_sr_LazyRef();
  var b$lzy1$2$1 = b$lzy1;
  return new $c_Ljapgolly_scalajs_react_Reusable(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((b$lzy1$2) => (() => $p_Ljapgolly_scalajs_react_Reusable__b$4__sr_LazyRef__F1__O(this, b$lzy1$2, f)))(b$lzy1$2$1)), this.Ljapgolly_scalajs_react_Reusable__f_root, this.Ljapgolly_scalajs_react_Reusable__f_isReusable);
});
$c_Ljapgolly_scalajs_react_Reusable.prototype.withValue__O__Ljapgolly_scalajs_react_Reusable = (function(b) {
  return new $c_Ljapgolly_scalajs_react_Reusable(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => b)), this.Ljapgolly_scalajs_react_Reusable__f_root, this.Ljapgolly_scalajs_react_Reusable__f_isReusable);
});
$c_Ljapgolly_scalajs_react_Reusable.prototype.withLazyValue__F0__Ljapgolly_scalajs_react_Reusable = (function(b) {
  return this.map__F1__Ljapgolly_scalajs_react_Reusable(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => $n(b).apply__O())));
});
function $as_Ljapgolly_scalajs_react_Reusable(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_Reusable) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.Reusable"));
}
function $isArrayOf_Ljapgolly_scalajs_react_Reusable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_Reusable)));
}
function $asArrayOf_Ljapgolly_scalajs_react_Reusable(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_Reusable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.Reusable;", depth));
}
var $d_Ljapgolly_scalajs_react_Reusable = new $TypeData().initClass($c_Ljapgolly_scalajs_react_Reusable, "japgolly.scalajs.react.Reusable", ({
  Ljapgolly_scalajs_react_Reusable: 1
}));
function $p_Ljapgolly_scalajs_react_Reusable$__root__O__F1__Ljapgolly_scalajs_react_Reusable($thiz, a, isReusable) {
  return new $c_Ljapgolly_scalajs_react_Reusable(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => a)), a, isReusable);
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_Reusable$() {
  $n_Ljapgolly_scalajs_react_Reusable$ = this;
  $m_Ljapgolly_scalajs_react_Reusability$();
}
$c_Ljapgolly_scalajs_react_Reusable$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_Reusable$.prototype.constructor = $c_Ljapgolly_scalajs_react_Reusable$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_Reusable$() {
}
$h_Ljapgolly_scalajs_react_Reusable$.prototype = $c_Ljapgolly_scalajs_react_Reusable$.prototype;
$c_Ljapgolly_scalajs_react_Reusable$.prototype.byRef__O__Ljapgolly_scalajs_react_Reusable = (function(a) {
  return $p_Ljapgolly_scalajs_react_Reusable$__root__O__F1__Ljapgolly_scalajs_react_Reusable(this, a, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$9) => {
    var _$9$1 = $as_Ljapgolly_scalajs_react_Reusable(_$9);
    var x5 = $n(_$9$1).Ljapgolly_scalajs_react_Reusable__f_root;
    if ((x5 !== null)) {
      return Object.is(a, x5);
    }
    return false;
  })));
});
var $d_Ljapgolly_scalajs_react_Reusable$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_Reusable$, "japgolly.scalajs.react.Reusable$", ({
  Ljapgolly_scalajs_react_Reusable$: 1
}));
var $n_Ljapgolly_scalajs_react_Reusable$;
function $m_Ljapgolly_scalajs_react_Reusable$() {
  if ((!$n_Ljapgolly_scalajs_react_Reusable$)) {
    $n_Ljapgolly_scalajs_react_Reusable$ = new $c_Ljapgolly_scalajs_react_Reusable$();
  }
  return $n_Ljapgolly_scalajs_react_Reusable$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_AsyncCallback(underlyingRepr) {
  this.Ljapgolly_scalajs_react_callback_AsyncCallback__f_underlyingRepr = null;
  this.Ljapgolly_scalajs_react_callback_AsyncCallback__f_underlyingRepr = underlyingRepr;
}
$c_Ljapgolly_scalajs_react_callback_AsyncCallback.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_AsyncCallback.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_AsyncCallback;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_AsyncCallback() {
}
$h_Ljapgolly_scalajs_react_callback_AsyncCallback.prototype = $c_Ljapgolly_scalajs_react_callback_AsyncCallback.prototype;
$c_Ljapgolly_scalajs_react_callback_AsyncCallback.prototype.hashCode__I = (function() {
  $m_Ljapgolly_scalajs_react_callback_AsyncCallback$();
  var this$ = this.Ljapgolly_scalajs_react_callback_AsyncCallback__f_underlyingRepr;
  return $n(this$).hashCode__I();
});
$c_Ljapgolly_scalajs_react_callback_AsyncCallback.prototype.equals__O__Z = (function(x$0) {
  return $m_Ljapgolly_scalajs_react_callback_AsyncCallback$().equals$extension__F1__O__Z(this.Ljapgolly_scalajs_react_callback_AsyncCallback__f_underlyingRepr, x$0);
});
function $as_Ljapgolly_scalajs_react_callback_AsyncCallback(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_callback_AsyncCallback) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.callback.AsyncCallback"));
}
function $isArrayOf_Ljapgolly_scalajs_react_callback_AsyncCallback(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_callback_AsyncCallback)));
}
function $asArrayOf_Ljapgolly_scalajs_react_callback_AsyncCallback(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_callback_AsyncCallback(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.callback.AsyncCallback;", depth));
}
var $d_Ljapgolly_scalajs_react_callback_AsyncCallback = new $TypeData().initClass($c_Ljapgolly_scalajs_react_callback_AsyncCallback, "japgolly.scalajs.react.callback.AsyncCallback", ({
  Ljapgolly_scalajs_react_callback_AsyncCallback: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_AsyncCallback$() {
  this.Ljapgolly_scalajs_react_callback_AsyncCallback$__f_newState = null;
  this.Ljapgolly_scalajs_react_callback_AsyncCallback$__f_defaultCompleteWith = null;
  $n_Ljapgolly_scalajs_react_callback_AsyncCallback$ = this;
  var f$proxy3 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $c_Ljapgolly_scalajs_react_callback_AsyncCallback$State()));
  this.Ljapgolly_scalajs_react_callback_AsyncCallback$__f_newState = new $c_Ljapgolly_scalajs_react_callback_CallbackTo(($m_Ljapgolly_scalajs_react_util_Trampoline$(), new $c_Ljapgolly_scalajs_react_util_Trampoline$Delay(f$proxy3))).Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline;
  this.Ljapgolly_scalajs_react_callback_AsyncCallback$__f_defaultCompleteWith = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
    $as_s_util_Try(_$4);
    return new $c_Ljapgolly_scalajs_react_callback_CallbackTo($m_Ljapgolly_scalajs_react_callback_Callback$package$Callback$().Ljapgolly_scalajs_react_callback_Callback$package$Callback$__f_empty);
  }));
  this.pure__O__F1((void 0));
}
$c_Ljapgolly_scalajs_react_callback_AsyncCallback$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_AsyncCallback$.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_AsyncCallback$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_AsyncCallback$() {
}
$h_Ljapgolly_scalajs_react_callback_AsyncCallback$.prototype = $c_Ljapgolly_scalajs_react_callback_AsyncCallback$.prototype;
$c_Ljapgolly_scalajs_react_callback_AsyncCallback$.prototype.apply__F1__F1 = (function(f) {
  return new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$5) => {
    $as_Ljapgolly_scalajs_react_callback_AsyncCallback$State(_$5);
    return f;
  }));
});
$c_Ljapgolly_scalajs_react_callback_AsyncCallback$.prototype.pure__O__F1 = (function(a) {
  var t$proxy1 = new $c_s_util_Success(a);
  return $m_Ljapgolly_scalajs_react_callback_AsyncCallback$().apply__F1__F1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$8) => {
    var _$8$1 = $as_F1(_$8);
    var ev$81 = $n(_$8$1).apply__O__O(t$proxy1);
    return new $c_Ljapgolly_scalajs_react_callback_CallbackTo(((ev$81 === null) ? null : $n($as_Ljapgolly_scalajs_react_callback_CallbackTo(ev$81)).Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline));
  })));
});
$c_Ljapgolly_scalajs_react_callback_AsyncCallback$.prototype.equals$extension__F1__O__Z = (function(this$, x$0) {
  if ((x$0 instanceof $c_Ljapgolly_scalajs_react_callback_AsyncCallback)) {
    var x$0$2 = ((x$0 === null) ? null : $n($as_Ljapgolly_scalajs_react_callback_AsyncCallback(x$0)).Ljapgolly_scalajs_react_callback_AsyncCallback__f_underlyingRepr);
    return ((this$ === null) ? (x$0$2 === null) : $n(this$).equals__O__Z(x$0$2));
  } else {
    return false;
  }
});
$c_Ljapgolly_scalajs_react_callback_AsyncCallback$.prototype.toCallback$extension__F1__Ljapgolly_scalajs_react_util_Trampoline = (function(this$) {
  var CallbackTo_this = $m_Ljapgolly_scalajs_react_callback_AsyncCallback$().Ljapgolly_scalajs_react_callback_AsyncCallback$__f_newState;
  var f$proxy79 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$43) => {
    var _$43$1 = $as_Ljapgolly_scalajs_react_callback_AsyncCallback$State(_$43);
    var ev$148 = $n($as_F1($n(this$).apply__O__O(_$43$1))).apply__O__O($m_Ljapgolly_scalajs_react_callback_AsyncCallback$().Ljapgolly_scalajs_react_callback_AsyncCallback$__f_defaultCompleteWith);
    return new $c_Ljapgolly_scalajs_react_callback_CallbackTo(((ev$148 === null) ? null : $n($as_Ljapgolly_scalajs_react_callback_CallbackTo(ev$148)).Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline));
  }));
  var this$3 = $n(CallbackTo_this);
  var f = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$16) => {
    var _$16$1 = $as_Ljapgolly_scalajs_react_callback_AsyncCallback$State(_$16);
    var ev$149 = f$proxy79.apply__O__O(_$16$1);
    var ev$63 = ((ev$149 === null) ? null : $n($as_Ljapgolly_scalajs_react_callback_CallbackTo(ev$149)).Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline);
    return ev$63;
  }));
  return new $c_Ljapgolly_scalajs_react_util_Trampoline$FlatMap(this$3, f);
});
$c_Ljapgolly_scalajs_react_callback_AsyncCallback$.prototype.runNow$extension__F1__V = (function(this$) {
  var CallbackTo_this = this.toCallback$extension__F1__Ljapgolly_scalajs_react_util_Trampoline(this$);
  var this$2 = $n(CallbackTo_this);
  $m_Ljapgolly_scalajs_react_util_Trampoline$().run__Ljapgolly_scalajs_react_util_Trampoline__O(this$2);
});
var $d_Ljapgolly_scalajs_react_callback_AsyncCallback$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_callback_AsyncCallback$, "japgolly.scalajs.react.callback.AsyncCallback$", ({
  Ljapgolly_scalajs_react_callback_AsyncCallback$: 1
}));
var $n_Ljapgolly_scalajs_react_callback_AsyncCallback$;
function $m_Ljapgolly_scalajs_react_callback_AsyncCallback$() {
  if ((!$n_Ljapgolly_scalajs_react_callback_AsyncCallback$)) {
    $n_Ljapgolly_scalajs_react_callback_AsyncCallback$ = new $c_Ljapgolly_scalajs_react_callback_AsyncCallback$();
  }
  return $n_Ljapgolly_scalajs_react_callback_AsyncCallback$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_AsyncCallback$State() {
}
$c_Ljapgolly_scalajs_react_callback_AsyncCallback$State.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_AsyncCallback$State.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_AsyncCallback$State;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_AsyncCallback$State() {
}
$h_Ljapgolly_scalajs_react_callback_AsyncCallback$State.prototype = $c_Ljapgolly_scalajs_react_callback_AsyncCallback$State.prototype;
function $as_Ljapgolly_scalajs_react_callback_AsyncCallback$State(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_callback_AsyncCallback$State) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.callback.AsyncCallback$State"));
}
function $isArrayOf_Ljapgolly_scalajs_react_callback_AsyncCallback$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_callback_AsyncCallback$State)));
}
function $asArrayOf_Ljapgolly_scalajs_react_callback_AsyncCallback$State(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_callback_AsyncCallback$State(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.callback.AsyncCallback$State;", depth));
}
var $d_Ljapgolly_scalajs_react_callback_AsyncCallback$State = new $TypeData().initClass($c_Ljapgolly_scalajs_react_callback_AsyncCallback$State, "japgolly.scalajs.react.callback.AsyncCallback$State", ({
  Ljapgolly_scalajs_react_callback_AsyncCallback$State: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_Callback$package$Callback$() {
  this.Ljapgolly_scalajs_react_callback_Callback$package$Callback$__f_empty = null;
  $n_Ljapgolly_scalajs_react_callback_Callback$package$Callback$ = this;
  this.Ljapgolly_scalajs_react_callback_Callback$package$Callback$__f_empty = $m_Ljapgolly_scalajs_react_util_Trampoline$().Ljapgolly_scalajs_react_util_Trampoline$__f_unit;
}
$c_Ljapgolly_scalajs_react_callback_Callback$package$Callback$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_Callback$package$Callback$.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_Callback$package$Callback$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_Callback$package$Callback$() {
}
$h_Ljapgolly_scalajs_react_callback_Callback$package$Callback$.prototype = $c_Ljapgolly_scalajs_react_callback_Callback$package$Callback$.prototype;
var $d_Ljapgolly_scalajs_react_callback_Callback$package$Callback$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_callback_Callback$package$Callback$, "japgolly.scalajs.react.callback.Callback$package$Callback$", ({
  Ljapgolly_scalajs_react_callback_Callback$package$Callback$: 1
}));
var $n_Ljapgolly_scalajs_react_callback_Callback$package$Callback$;
function $m_Ljapgolly_scalajs_react_callback_Callback$package$Callback$() {
  if ((!$n_Ljapgolly_scalajs_react_callback_Callback$package$Callback$)) {
    $n_Ljapgolly_scalajs_react_callback_Callback$package$Callback$ = new $c_Ljapgolly_scalajs_react_callback_Callback$package$Callback$();
  }
  return $n_Ljapgolly_scalajs_react_callback_Callback$package$Callback$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_CallbackOption$() {
}
$c_Ljapgolly_scalajs_react_callback_CallbackOption$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_CallbackOption$.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_CallbackOption$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_CallbackOption$() {
}
$h_Ljapgolly_scalajs_react_callback_CallbackOption$.prototype = $c_Ljapgolly_scalajs_react_callback_CallbackOption$.prototype;
var $d_Ljapgolly_scalajs_react_callback_CallbackOption$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_callback_CallbackOption$, "japgolly.scalajs.react.callback.CallbackOption$", ({
  Ljapgolly_scalajs_react_callback_CallbackOption$: 1
}));
var $n_Ljapgolly_scalajs_react_callback_CallbackOption$;
function $m_Ljapgolly_scalajs_react_callback_CallbackOption$() {
  if ((!$n_Ljapgolly_scalajs_react_callback_CallbackOption$)) {
    $n_Ljapgolly_scalajs_react_callback_CallbackOption$ = new $c_Ljapgolly_scalajs_react_callback_CallbackOption$();
  }
  return $n_Ljapgolly_scalajs_react_callback_CallbackOption$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_CallbackTo(trampoline) {
  this.Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline = null;
  this.Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline = trampoline;
}
$c_Ljapgolly_scalajs_react_callback_CallbackTo.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_CallbackTo.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_CallbackTo;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_CallbackTo() {
}
$h_Ljapgolly_scalajs_react_callback_CallbackTo.prototype = $c_Ljapgolly_scalajs_react_callback_CallbackTo.prototype;
$c_Ljapgolly_scalajs_react_callback_CallbackTo.prototype.hashCode__I = (function() {
  var this$ = this.Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline;
  var this$2 = $n(this$);
  return $systemIdentityHashCode(this$2);
});
$c_Ljapgolly_scalajs_react_callback_CallbackTo.prototype.equals__O__Z = (function(x$0) {
  return $m_Ljapgolly_scalajs_react_callback_CallbackTo$().equals$extension__Ljapgolly_scalajs_react_util_Trampoline__O__Z(this.Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline, x$0);
});
function $as_Ljapgolly_scalajs_react_callback_CallbackTo(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_callback_CallbackTo) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.callback.CallbackTo"));
}
function $isArrayOf_Ljapgolly_scalajs_react_callback_CallbackTo(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_callback_CallbackTo)));
}
function $asArrayOf_Ljapgolly_scalajs_react_callback_CallbackTo(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_callback_CallbackTo(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.callback.CallbackTo;", depth));
}
var $d_Ljapgolly_scalajs_react_callback_CallbackTo = new $TypeData().initClass($c_Ljapgolly_scalajs_react_callback_CallbackTo, "japgolly.scalajs.react.callback.CallbackTo", ({
  Ljapgolly_scalajs_react_callback_CallbackTo: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_CallbackTo$() {
}
$c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_CallbackTo$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_CallbackTo$() {
}
$h_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype = $c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype;
$c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype.equals$extension__Ljapgolly_scalajs_react_util_Trampoline__O__Z = (function(this$, x$0) {
  if ((x$0 instanceof $c_Ljapgolly_scalajs_react_callback_CallbackTo)) {
    var x$0$2 = ((x$0 === null) ? null : $n($as_Ljapgolly_scalajs_react_callback_CallbackTo(x$0)).Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline);
    if ((this$ === null)) {
      return (x$0$2 === null);
    } else {
      var this$1 = $n(this$);
      return (this$1 === x$0$2);
    }
  } else {
    return false;
  }
});
var $d_Ljapgolly_scalajs_react_callback_CallbackTo$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_callback_CallbackTo$, "japgolly.scalajs.react.callback.CallbackTo$", ({
  Ljapgolly_scalajs_react_callback_CallbackTo$: 1
}));
var $n_Ljapgolly_scalajs_react_callback_CallbackTo$;
function $m_Ljapgolly_scalajs_react_callback_CallbackTo$() {
  if ((!$n_Ljapgolly_scalajs_react_callback_CallbackTo$)) {
    $n_Ljapgolly_scalajs_react_callback_CallbackTo$ = new $c_Ljapgolly_scalajs_react_callback_CallbackTo$();
  }
  return $n_Ljapgolly_scalajs_react_callback_CallbackTo$;
}
function $f_Ljapgolly_scalajs_react_callback_Exports__$init$__V($thiz) {
  $m_Ljapgolly_scalajs_react_callback_AsyncCallback$();
  $m_Ljapgolly_scalajs_react_callback_Callback$package$Callback$();
  $m_Ljapgolly_scalajs_react_callback_CallbackOption$();
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_Delayed(trampoline) {
  this.Ljapgolly_scalajs_react_component_Delayed__f_trampoline = null;
  this.Ljapgolly_scalajs_react_component_Delayed__f_trampoline = trampoline;
}
$c_Ljapgolly_scalajs_react_component_Delayed.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_Delayed.prototype.constructor = $c_Ljapgolly_scalajs_react_component_Delayed;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_Delayed() {
}
$h_Ljapgolly_scalajs_react_component_Delayed.prototype = $c_Ljapgolly_scalajs_react_component_Delayed.prototype;
$c_Ljapgolly_scalajs_react_component_Delayed.prototype.hashCode__I = (function() {
  var this$ = this.Ljapgolly_scalajs_react_component_Delayed__f_trampoline;
  var this$2 = $n(this$);
  return $systemIdentityHashCode(this$2);
});
$c_Ljapgolly_scalajs_react_component_Delayed.prototype.equals__O__Z = (function(x$0) {
  return $m_Ljapgolly_scalajs_react_component_Delayed$().equals$extension__Ljapgolly_scalajs_react_util_Trampoline__O__Z(this.Ljapgolly_scalajs_react_component_Delayed__f_trampoline, x$0);
});
function $as_Ljapgolly_scalajs_react_component_Delayed(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_component_Delayed) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.Delayed"));
}
function $isArrayOf_Ljapgolly_scalajs_react_component_Delayed(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_Delayed)));
}
function $asArrayOf_Ljapgolly_scalajs_react_component_Delayed(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_Delayed(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.Delayed;", depth));
}
var $d_Ljapgolly_scalajs_react_component_Delayed = new $TypeData().initClass($c_Ljapgolly_scalajs_react_component_Delayed, "japgolly.scalajs.react.component.Delayed", ({
  Ljapgolly_scalajs_react_component_Delayed: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_Delayed$() {
}
$c_Ljapgolly_scalajs_react_component_Delayed$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_Delayed$.prototype.constructor = $c_Ljapgolly_scalajs_react_component_Delayed$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_Delayed$() {
}
$h_Ljapgolly_scalajs_react_component_Delayed$.prototype = $c_Ljapgolly_scalajs_react_component_Delayed$.prototype;
$c_Ljapgolly_scalajs_react_component_Delayed$.prototype.equals$extension__Ljapgolly_scalajs_react_util_Trampoline__O__Z = (function(this$, x$0) {
  if ((x$0 instanceof $c_Ljapgolly_scalajs_react_component_Delayed)) {
    var x$0$2 = ((x$0 === null) ? null : $n($as_Ljapgolly_scalajs_react_component_Delayed(x$0)).Ljapgolly_scalajs_react_component_Delayed__f_trampoline);
    if ((this$ === null)) {
      return (x$0$2 === null);
    } else {
      var this$1 = $n(this$);
      return (this$1 === x$0$2);
    }
  } else {
    return false;
  }
});
var $d_Ljapgolly_scalajs_react_component_Delayed$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_component_Delayed$, "japgolly.scalajs.react.component.Delayed$", ({
  Ljapgolly_scalajs_react_component_Delayed$: 1
}));
var $n_Ljapgolly_scalajs_react_component_Delayed$;
function $m_Ljapgolly_scalajs_react_component_Delayed$() {
  if ((!$n_Ljapgolly_scalajs_react_component_Delayed$)) {
    $n_Ljapgolly_scalajs_react_component_Delayed$ = new $c_Ljapgolly_scalajs_react_component_Delayed$();
  }
  return $n_Ljapgolly_scalajs_react_component_Delayed$;
}
function $f_Ljapgolly_scalajs_react_component_DerivedDisplayName__derivedDisplayName__Lsourcecode_FullName__T($thiz, name) {
  var $x_1 = $m_sc_StringOps$();
  var x = $n(name).Lsourcecode_FullName__f_value;
  var parts = $x_1.split$extension__T__C__AT(x, 46);
  _return: {
    var i = 0;
    while ((i < $n(parts).u.length)) {
      var x1 = i;
      var x0 = $n(parts).get(x1);
      var this$6 = $n($m_sc_StringOps$().headOption$extension__T__s_Option(x0));
      if (this$6.isEmpty__Z()) {
        var $x_2 = true;
      } else {
        var x0$1 = this$6.get__O();
        var _$2 = $uC(x0$1);
        var this$9 = $m_jl_Character$();
        var $x_2 = this$9.isLowerCase__I__Z(_$2);
      }
      if ((!$x_2)) {
        var i$1 = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var i$1 = (-1);
  }
  var idx = ((i$1 < 0) ? $n(parts).u.length : i$1);
  var _1 = $m_sc_ArrayOps$().slice$extension__O__I__I__O(parts, 0, idx);
  var _2 = $m_sc_ArrayOps$().slice$extension__O__I__I__O(parts, idx, $n(parts).u.length);
  var packageName = $asArrayOf_T(_1, 1);
  var className = $asArrayOf_T(_2, 1);
  var \u03b41$___1 = packageName;
  var \u03b41$___2 = className;
  var packageName$2 = $asArrayOf_T(\u03b41$___1, 1);
  var className$2 = $asArrayOf_T(\u03b41$___2, 1);
  var this$11 = $n($m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(className$2));
  var $x_5 = $f_sc_IterableOnceOps__mkString__T__T__T__T(this$11, "", ".", "");
  var this$13 = new $c_s_Some(packageName$2);
  if (this$13.isEmpty__Z()) {
    var $x_3 = true;
  } else {
    var x0$2 = this$13.s_Some__f_value;
    var _$3 = $asArrayOf_T(x0$2, 1);
    var $x_3 = ($n(_$3).u.length !== 0);
  }
  if ($x_3) {
    var this$16 = this$13;
  } else {
    var this$16 = $m_s_None$();
  }
  if (this$16.isEmpty__Z()) {
    var $x_4 = "";
  } else {
    var x0$3 = this$16.get__O();
    var _$4 = $asArrayOf_T(x0$3, 1);
    var this$17 = $n($m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(_$4));
    var $x_4 = $f_sc_IterableOnceOps__mkString__T__T__T__T(this$17, " (", ".", ")");
  }
  return (("" + $x_5) + $x_4);
}
function $is_Ljapgolly_scalajs_react_component_Generic$UnmountedRaw(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_component_Generic$UnmountedRaw)));
}
function $as_Ljapgolly_scalajs_react_component_Generic$UnmountedRaw(obj) {
  return (($is_Ljapgolly_scalajs_react_component_Generic$UnmountedRaw(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.Generic$UnmountedRaw"));
}
function $isArrayOf_Ljapgolly_scalajs_react_component_Generic$UnmountedRaw(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_Generic$UnmountedRaw)));
}
function $asArrayOf_Ljapgolly_scalajs_react_component_Generic$UnmountedRaw(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_Generic$UnmountedRaw(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.Generic$UnmountedRaw;", depth));
}
function $f_Ljapgolly_scalajs_react_hooks_Api$Primary__useState__F0__Ljapgolly_scalajs_react_hooks_Api$AbstractStep__O($thiz, initialState, step) {
  return $f_Ljapgolly_scalajs_react_hooks_Api$Primary__useStateBy__F1__Ljapgolly_scalajs_react_hooks_Api$AbstractStep__O($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$37) => $n(initialState).apply__O())), step);
}
function $f_Ljapgolly_scalajs_react_hooks_Api$Primary__useStateBy__F1__Ljapgolly_scalajs_react_hooks_Api$AbstractStep__O($thiz, initialState, step) {
  return $thiz.next__F1__Ljapgolly_scalajs_react_hooks_Api$AbstractStep__O(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => $m_Ljapgolly_scalajs_react_hooks_Hooks$UseState$().unsafeCreate__F0__Ljapgolly_scalajs_react_hooks_Hooks$UseStateF(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $n(initialState).apply__O__O(ctx)))))), step);
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_hooks_CustomHook$() {
  this.Ljapgolly_scalajs_react_hooks_CustomHook$__f_useForceUpdate$lzy1 = null;
  this.Ljapgolly_scalajs_react_hooks_CustomHook$__f_useForceUpdatebitmap$1 = false;
  $n_Ljapgolly_scalajs_react_hooks_CustomHook$ = this;
  $m_Ljapgolly_scalajs_react_Reusability$();
}
$c_Ljapgolly_scalajs_react_hooks_CustomHook$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_hooks_CustomHook$.prototype.constructor = $c_Ljapgolly_scalajs_react_hooks_CustomHook$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_hooks_CustomHook$() {
}
$h_Ljapgolly_scalajs_react_hooks_CustomHook$.prototype = $c_Ljapgolly_scalajs_react_hooks_CustomHook$.prototype;
$c_Ljapgolly_scalajs_react_hooks_CustomHook$.prototype.apply__Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First = (function() {
  return new $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => (void 0))));
});
$c_Ljapgolly_scalajs_react_hooks_CustomHook$.prototype.useForceUpdate__F1 = (function() {
  if ((!this.Ljapgolly_scalajs_react_hooks_CustomHook$__f_useForceUpdatebitmap$1)) {
    var inc = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$16) => {
      var _$16$1 = $uI(_$16);
      return ((1 + _$16$1) | 0);
    }));
    var this$2 = $n($m_Ljapgolly_scalajs_react_hooks_CustomHook$().apply__Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First());
    var initialState = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => 0));
    var step = new $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep();
    this.Ljapgolly_scalajs_react_hooks_CustomHook$__f_useForceUpdate$lzy1 = $n($as_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent($f_Ljapgolly_scalajs_react_hooks_Api$Primary__useState__F0__Ljapgolly_scalajs_react_hooks_Api$AbstractStep__O(this$2, initialState, step))).buildReturning__F1__F1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((\u03b4) => {
      var \u03b4$1 = $as_Ljapgolly_scalajs_react_hooks_HookCtx$I1(\u03b4);
      var s = $as_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF($n(\u03b4$1).Ljapgolly_scalajs_react_hooks_HookCtx$I1__f_hook1);
      var this$6 = $m_Ljapgolly_scalajs_react_Reusable$();
      var this$3 = $n(s);
      var a = this$3.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_raw[0];
      var this$5 = $m_Ljapgolly_scalajs_react_Reusability$();
      var evidence$2 = this$5.by_$eq$eq__F2();
      var e = new $c_Ljapgolly_scalajs_react_Reusability(evidence$2);
      var r = e.Ljapgolly_scalajs_react_Reusability__f_test;
      return $n($p_Ljapgolly_scalajs_react_Reusable$__root__O__F1__Ljapgolly_scalajs_react_Reusable(this$6, a, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => {
        var _$6$1 = $as_Ljapgolly_scalajs_react_Reusable(_$6);
        var x1 = $n(_$6$1).Ljapgolly_scalajs_react_Reusable__f_root;
        if ((x1 !== null)) {
          if ($isInt(x1)) {
            var x2 = $uI(x1);
            var x2$1 = new $c_s_Some(x2);
          } else {
            var x2$1 = $m_s_None$();
          }
          if ((!x2$1.isEmpty__Z())) {
            var x3 = x2$1.get__O();
            return $uZ($n(r).apply__O__O__O(a, x3));
          }
        }
        return false;
      })))).withLazyValue__F0__Ljapgolly_scalajs_react_Reusable(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var this$8 = $n(s);
        return $n($n($f_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF__modState__Ljapgolly_scalajs_react_Reusable(this$8)).map__F1__Ljapgolly_scalajs_react_Reusable(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$17) => {
          var _$17$1 = $as_F1(_$17);
          return $n(_$17$1).apply__O__O(inc);
        })))).value__O();
      })));
    })));
    this.Ljapgolly_scalajs_react_hooks_CustomHook$__f_useForceUpdatebitmap$1 = true;
  }
  return this.Ljapgolly_scalajs_react_hooks_CustomHook$__f_useForceUpdate$lzy1;
});
$c_Ljapgolly_scalajs_react_hooks_CustomHook$.prototype.toHookResult$extension__F1__s_$eq$colon$eq__Ljapgolly_scalajs_react_util_Trampoline = (function(this$, ev) {
  var a = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $n(this$).apply__O__O(($n(ev), (void 0)))));
  $m_Ljapgolly_scalajs_react_util_Trampoline$();
  return new $c_Ljapgolly_scalajs_react_util_Trampoline$Delay(a);
});
var $d_Ljapgolly_scalajs_react_hooks_CustomHook$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_hooks_CustomHook$, "japgolly.scalajs.react.hooks.CustomHook$", ({
  Ljapgolly_scalajs_react_hooks_CustomHook$: 1
}));
var $n_Ljapgolly_scalajs_react_hooks_CustomHook$;
function $m_Ljapgolly_scalajs_react_hooks_CustomHook$() {
  if ((!$n_Ljapgolly_scalajs_react_hooks_CustomHook$)) {
    $n_Ljapgolly_scalajs_react_hooks_CustomHook$ = new $c_Ljapgolly_scalajs_react_hooks_CustomHook$();
  }
  return $n_Ljapgolly_scalajs_react_hooks_CustomHook$;
}
function $ct_Ljapgolly_scalajs_react_hooks_HookCtx$I0__O__($thiz, input) {
  $thiz.Ljapgolly_scalajs_react_hooks_HookCtx$I0__f_input = input;
  return $thiz;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_hooks_HookCtx$I0() {
  this.Ljapgolly_scalajs_react_hooks_HookCtx$I0__f_input = null;
}
$c_Ljapgolly_scalajs_react_hooks_HookCtx$I0.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_hooks_HookCtx$I0.prototype.constructor = $c_Ljapgolly_scalajs_react_hooks_HookCtx$I0;
/** @constructor */
function $h_Ljapgolly_scalajs_react_hooks_HookCtx$I0() {
}
$h_Ljapgolly_scalajs_react_hooks_HookCtx$I0.prototype = $c_Ljapgolly_scalajs_react_hooks_HookCtx$I0.prototype;
/** @constructor */
function $c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$() {
}
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$.prototype.constructor = $c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$() {
}
$h_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$.prototype = $c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$.prototype;
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$.prototype.unsafeCreate__O__F1__V = (function(effect, a) {
  $i_react.useEffect($n(a).apply__O__O(effect));
});
var $d_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$, "japgolly.scalajs.react.hooks.Hooks$UseEffect$", ({
  Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$: 1
}));
var $n_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$;
function $m_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$() {
  if ((!$n_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$)) {
    $n_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$ = new $c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$();
  }
  return $n_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$() {
}
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$.prototype.constructor = $c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$() {
}
$h_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$.prototype = $c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$.prototype;
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$.prototype.unit__Ljapgolly_scalajs_react_util_Effect$Dispatch__F1 = (function(F) {
  var toJs = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$7) => $f_Ljapgolly_scalajs_react_util_Effect$Dispatch$WithDefaults__dispatchFn__F0__sjs_js_Function0($n(F), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => _$7)))));
  return toJs;
});
var $d_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$, "japgolly.scalajs.react.hooks.Hooks$UseEffectArg$", ({
  Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$: 1
}));
var $n_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$;
function $m_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$() {
  if ((!$n_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$)) {
    $n_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$ = new $c_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$();
  }
  return $n_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$() {
}
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$.prototype.constructor = $c_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$() {
}
$h_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$.prototype = $c_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$.prototype;
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$.prototype.unsafeCreateSimple__Ljapgolly_scalajs_react_Ref$FullF = (function() {
  return $m_Ljapgolly_scalajs_react_Ref$().fromJs__Ljapgolly_scalajs_react_facade_React$RefHandle__Ljapgolly_scalajs_react_Ref$FullF($i_react.useRef(null));
});
var $d_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$, "japgolly.scalajs.react.hooks.Hooks$UseRef$", ({
  Ljapgolly_scalajs_react_hooks_Hooks$UseRef$: 1
}));
var $n_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$;
function $m_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$() {
  if ((!$n_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$)) {
    $n_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$ = new $c_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$();
  }
  return $n_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_hooks_Hooks$UseState$() {
}
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseState$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseState$.prototype.constructor = $c_Ljapgolly_scalajs_react_hooks_Hooks$UseState$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_hooks_Hooks$UseState$() {
}
$h_Ljapgolly_scalajs_react_hooks_Hooks$UseState$.prototype = $c_Ljapgolly_scalajs_react_hooks_Hooks$UseState$.prototype;
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseState$.prototype.unsafeCreate__F0__Ljapgolly_scalajs_react_hooks_Hooks$UseStateF = (function(initialState) {
  var initialStateFn = (() => {
    $m_Ljapgolly_scalajs_react_internal_Box$();
    var value = $n(initialState).apply__O();
    var fields = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("a", value)]));
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
  });
  var originalResult = $i_react.useState(initialStateFn);
  var originalSetState = $m_Ljapgolly_scalajs_react_Reusable$().byRef__O__Ljapgolly_scalajs_react_Reusable(originalResult[1]);
  var this$5 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
  var FF = this$5.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
  var this$10 = new $c_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2(originalResult, originalSetState, FF);
  var f = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$26) => _$26.a));
  var g = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value$1) => {
    $m_Ljapgolly_scalajs_react_internal_Box$();
    var fields$1 = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("a", value$1)]));
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1);
  }));
  return $f_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF__xmap__F1__F1__Ljapgolly_scalajs_react_hooks_Hooks$UseStateF(this$10, f, g);
});
var $d_Ljapgolly_scalajs_react_hooks_Hooks$UseState$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_hooks_Hooks$UseState$, "japgolly.scalajs.react.hooks.Hooks$UseState$", ({
  Ljapgolly_scalajs_react_hooks_Hooks$UseState$: 1
}));
var $n_Ljapgolly_scalajs_react_hooks_Hooks$UseState$;
function $m_Ljapgolly_scalajs_react_hooks_Hooks$UseState$() {
  if ((!$n_Ljapgolly_scalajs_react_hooks_Hooks$UseState$)) {
    $n_Ljapgolly_scalajs_react_hooks_Hooks$UseState$ = new $c_Ljapgolly_scalajs_react_hooks_Hooks$UseState$();
  }
  return $n_Ljapgolly_scalajs_react_hooks_Hooks$UseState$;
}
function $f_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF__modState__Ljapgolly_scalajs_react_Reusable($thiz) {
  return $n($thiz.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_originalSetState).withValue__O__Ljapgolly_scalajs_react_Reusable(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((f) => {
    var f$1 = $as_F1(f);
    return $n($thiz.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_FF$2).delay__F0__O(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      var f$2 = $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(f$1);
      (0, $thiz.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_raw[1])(f$2);
    })));
  })));
}
function $p_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF__newSetStateJs__F1__F1__sjs_js_Function1($thiz, givenValue, givenFn) {
  return ((tOrFn) => {
    if (($as_T((typeof tOrFn)) === "function")) {
      $n(givenFn).apply__O__O(tOrFn);
    } else {
      $n(givenValue).apply__O__O(tOrFn);
    }
  });
}
function $f_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF__xmap__F1__F1__Ljapgolly_scalajs_react_hooks_Hooks$UseStateF($thiz, f, g) {
  var newSetState = $p_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF__newSetStateJs__F1__F1__sjs_js_Function1($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((t) => {
    (0, $thiz.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_raw[1])($n(g).apply__O__O(t));
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((m) => {
    (0, $thiz.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_raw[1])(((s) => $n(g).apply__O__O(m($n(f).apply__O__O(s)))));
  })));
  var _1 = $n(f).apply__O__O($thiz.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_raw[0]);
  var r = [_1, newSetState];
  var oss = $thiz.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_originalSetState;
  var this$5 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
  var FF = this$5.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
  return new $c_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2(r, oss, FF);
}
function $is_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF)));
}
function $as_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF(obj) {
  return (($is_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.hooks.Hooks$UseStateF"));
}
function $isArrayOf_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF)));
}
function $asArrayOf_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.hooks.Hooks$UseStateF;", depth));
}
function $f_Ljapgolly_scalajs_react_hooks_extra__$init$__V($thiz) {
  var $x_2 = $m_Ljapgolly_scalajs_react_hooks_CustomHook$();
  var $x_1 = $m_Ljapgolly_scalajs_react_hooks_CustomHook$().useForceUpdate__F1();
  var this$1 = $m_s_$less$colon$less$();
  $x_2.toHookResult$extension__F1__s_$eq$colon$eq__Ljapgolly_scalajs_react_util_Trampoline($x_1, this$1.s_$less$colon$less$__f_singleton);
  var a = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    var this$2 = $m_Ljapgolly_scalajs_react_hooks_Hooks$UseRef$();
    return this$2.unsafeCreateSimple__Ljapgolly_scalajs_react_Ref$FullF();
  }));
  $m_Ljapgolly_scalajs_react_util_Trampoline$();
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_internal_Box$() {
  this.Ljapgolly_scalajs_react_internal_Box$__f_Unit = null;
  $n_Ljapgolly_scalajs_react_internal_Box$ = this;
  $m_Ljapgolly_scalajs_react_internal_Box$();
  var fields = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("a", (void 0))]));
  this.Ljapgolly_scalajs_react_internal_Box$__f_Unit = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
}
$c_Ljapgolly_scalajs_react_internal_Box$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_internal_Box$.prototype.constructor = $c_Ljapgolly_scalajs_react_internal_Box$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_internal_Box$() {
}
$h_Ljapgolly_scalajs_react_internal_Box$.prototype = $c_Ljapgolly_scalajs_react_internal_Box$.prototype;
var $d_Ljapgolly_scalajs_react_internal_Box$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_internal_Box$, "japgolly.scalajs.react.internal.Box$", ({
  Ljapgolly_scalajs_react_internal_Box$: 1
}));
var $n_Ljapgolly_scalajs_react_internal_Box$;
function $m_Ljapgolly_scalajs_react_internal_Box$() {
  if ((!$n_Ljapgolly_scalajs_react_internal_Box$)) {
    $n_Ljapgolly_scalajs_react_internal_Box$ = new $c_Ljapgolly_scalajs_react_internal_Box$();
  }
  return $n_Ljapgolly_scalajs_react_internal_Box$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_internal_Singleton(value, mutableObj) {
  this.Ljapgolly_scalajs_react_internal_Singleton__f_value = null;
  this.Ljapgolly_scalajs_react_internal_Singleton__f_mutableObj = null;
  this.Ljapgolly_scalajs_react_internal_Singleton__f_value = value;
  this.Ljapgolly_scalajs_react_internal_Singleton__f_mutableObj = mutableObj;
}
$c_Ljapgolly_scalajs_react_internal_Singleton.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_internal_Singleton.prototype.constructor = $c_Ljapgolly_scalajs_react_internal_Singleton;
/** @constructor */
function $h_Ljapgolly_scalajs_react_internal_Singleton() {
}
$h_Ljapgolly_scalajs_react_internal_Singleton.prototype = $c_Ljapgolly_scalajs_react_internal_Singleton.prototype;
var $d_Ljapgolly_scalajs_react_internal_Singleton = new $TypeData().initClass($c_Ljapgolly_scalajs_react_internal_Singleton, "japgolly.scalajs.react.internal.Singleton", ({
  Ljapgolly_scalajs_react_internal_Singleton: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_internal_Singleton$() {
  this.Ljapgolly_scalajs_react_internal_Singleton$__f_BoxUnit = null;
  $n_Ljapgolly_scalajs_react_internal_Singleton$ = this;
  this.Ljapgolly_scalajs_react_internal_Singleton$__f_BoxUnit = new $c_Ljapgolly_scalajs_react_internal_Singleton($m_Ljapgolly_scalajs_react_internal_Box$().Ljapgolly_scalajs_react_internal_Box$__f_Unit, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $m_Ljapgolly_scalajs_react_internal_Box$();
    var fields = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("a", (void 0))]));
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
  })));
}
$c_Ljapgolly_scalajs_react_internal_Singleton$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_internal_Singleton$.prototype.constructor = $c_Ljapgolly_scalajs_react_internal_Singleton$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_internal_Singleton$() {
}
$h_Ljapgolly_scalajs_react_internal_Singleton$.prototype = $c_Ljapgolly_scalajs_react_internal_Singleton$.prototype;
var $d_Ljapgolly_scalajs_react_internal_Singleton$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_internal_Singleton$, "japgolly.scalajs.react.internal.Singleton$", ({
  Ljapgolly_scalajs_react_internal_Singleton$: 1
}));
var $n_Ljapgolly_scalajs_react_internal_Singleton$;
function $m_Ljapgolly_scalajs_react_internal_Singleton$() {
  if ((!$n_Ljapgolly_scalajs_react_internal_Singleton$)) {
    $n_Ljapgolly_scalajs_react_internal_Singleton$ = new $c_Ljapgolly_scalajs_react_internal_Singleton$();
  }
  return $n_Ljapgolly_scalajs_react_internal_Singleton$;
}
function $f_Ljapgolly_scalajs_react_util_Monad__$init$__V($thiz) {
  $thiz.japgolly$scalajs$react$util$Monad$_setter_$unit_$eq__O__V($thiz.pure__O__O((void 0)));
}
function $f_Ljapgolly_scalajs_react_util_Trampoline__map__F1__Ljapgolly_scalajs_react_util_Trampoline($thiz, f) {
  return new $c_Ljapgolly_scalajs_react_util_Trampoline$FlatMap($thiz, $n(f).andThen__F1__F1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => new $c_Ljapgolly_scalajs_react_util_Trampoline$Pure(_$1)))));
}
function $is_Ljapgolly_scalajs_react_util_Trampoline(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_util_Trampoline)));
}
function $as_Ljapgolly_scalajs_react_util_Trampoline(obj) {
  return (($is_Ljapgolly_scalajs_react_util_Trampoline(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.util.Trampoline"));
}
function $isArrayOf_Ljapgolly_scalajs_react_util_Trampoline(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_util_Trampoline)));
}
function $asArrayOf_Ljapgolly_scalajs_react_util_Trampoline(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_util_Trampoline(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.util.Trampoline;", depth));
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_Trampoline$() {
  this.Ljapgolly_scalajs_react_util_Trampoline$__f_unit = null;
  $n_Ljapgolly_scalajs_react_util_Trampoline$ = this;
  this.Ljapgolly_scalajs_react_util_Trampoline$__f_unit = new $c_Ljapgolly_scalajs_react_util_Trampoline$Pure((void 0));
}
$c_Ljapgolly_scalajs_react_util_Trampoline$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_Trampoline$.prototype.constructor = $c_Ljapgolly_scalajs_react_util_Trampoline$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_Trampoline$() {
}
$h_Ljapgolly_scalajs_react_util_Trampoline$.prototype = $c_Ljapgolly_scalajs_react_util_Trampoline$.prototype;
$c_Ljapgolly_scalajs_react_util_Trampoline$.prototype.run__Ljapgolly_scalajs_react_util_Trampoline__O = (function(initial) {
  var next = initial;
  var stack = [];
  while (true) {
    var x1 = next;
    if ((x1 instanceof $c_Ljapgolly_scalajs_react_util_Trampoline$FlatMap)) {
      var t = $as_Ljapgolly_scalajs_react_util_Trampoline$FlatMap(x1);
      stack.push($n(t).Ljapgolly_scalajs_react_util_Trampoline$FlatMap__f_f);
      next = $n(t).Ljapgolly_scalajs_react_util_Trampoline$FlatMap__f_from;
      continue;
    }
    if (false) {
      var t$2 = $as_Ljapgolly_scalajs_react_util_Trampoline$Suspend(x1);
      next = $as_Ljapgolly_scalajs_react_util_Trampoline($n($n(t$2).suspension__F0()).apply__O());
      continue;
    }
    if ((x1 instanceof $c_Ljapgolly_scalajs_react_util_Trampoline$Pure)) {
      var t$3 = $as_Ljapgolly_scalajs_react_util_Trampoline$Pure(x1);
      if (($uI(stack.length) === 0)) {
        return $n(t$3).Ljapgolly_scalajs_react_util_Trampoline$Pure__f_value;
      } else {
        next = $as_Ljapgolly_scalajs_react_util_Trampoline($n($as_F1(stack.pop())).apply__O__O($n(t$3).Ljapgolly_scalajs_react_util_Trampoline$Pure__f_value));
        continue;
      }
    }
    if ((x1 instanceof $c_Ljapgolly_scalajs_react_util_Trampoline$Delay)) {
      var t$4 = $as_Ljapgolly_scalajs_react_util_Trampoline$Delay(x1);
      if (($uI(stack.length) === 0)) {
        return $n($n(t$4).Ljapgolly_scalajs_react_util_Trampoline$Delay__f_value).apply__O();
      } else {
        next = $as_Ljapgolly_scalajs_react_util_Trampoline($n($as_F1(stack.pop())).apply__O__O($n($n(t$4).Ljapgolly_scalajs_react_util_Trampoline$Delay__f_value).apply__O()));
        continue;
      }
    }
    throw new $c_s_MatchError(x1);
  }
});
var $d_Ljapgolly_scalajs_react_util_Trampoline$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_util_Trampoline$, "japgolly.scalajs.react.util.Trampoline$", ({
  Ljapgolly_scalajs_react_util_Trampoline$: 1
}));
var $n_Ljapgolly_scalajs_react_util_Trampoline$;
function $m_Ljapgolly_scalajs_react_util_Trampoline$() {
  if ((!$n_Ljapgolly_scalajs_react_util_Trampoline$)) {
    $n_Ljapgolly_scalajs_react_util_Trampoline$ = new $c_Ljapgolly_scalajs_react_util_Trampoline$();
  }
  return $n_Ljapgolly_scalajs_react_util_Trampoline$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_Util$() {
  this.Ljapgolly_scalajs_react_util_Util$__f_identity = null;
  $n_Ljapgolly_scalajs_react_util_Util$ = this;
  this.Ljapgolly_scalajs_react_util_Util$__f_identity = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((a) => a));
}
$c_Ljapgolly_scalajs_react_util_Util$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_Util$.prototype.constructor = $c_Ljapgolly_scalajs_react_util_Util$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_Util$() {
}
$h_Ljapgolly_scalajs_react_util_Util$.prototype = $c_Ljapgolly_scalajs_react_util_Util$.prototype;
var $d_Ljapgolly_scalajs_react_util_Util$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_util_Util$, "japgolly.scalajs.react.util.Util$", ({
  Ljapgolly_scalajs_react_util_Util$: 1
}));
var $n_Ljapgolly_scalajs_react_util_Util$;
function $m_Ljapgolly_scalajs_react_util_Util$() {
  if ((!$n_Ljapgolly_scalajs_react_util_Util$)) {
    $n_Ljapgolly_scalajs_react_util_Util$ = new $c_Ljapgolly_scalajs_react_util_Util$();
  }
  return $n_Ljapgolly_scalajs_react_util_Util$;
}
function $ct_Ljapgolly_scalajs_react_vdom_Attr__T__($thiz, attrName) {
  $thiz.Ljapgolly_scalajs_react_vdom_Attr__f_attrName = attrName;
  return $thiz;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Attr() {
  this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName = null;
}
$c_Ljapgolly_scalajs_react_vdom_Attr.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_Attr.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Attr;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Attr() {
}
$h_Ljapgolly_scalajs_react_vdom_Attr.prototype = $c_Ljapgolly_scalajs_react_vdom_Attr.prototype;
$c_Ljapgolly_scalajs_react_vdom_Attr.prototype.toString__T = (function() {
  return (("VdomAttr{name=" + this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName) + "}");
});
$c_Ljapgolly_scalajs_react_vdom_Attr.prototype.hashCode__I = (function() {
  return $f_T__hashCode__I($n(this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName));
});
$c_Ljapgolly_scalajs_react_vdom_Attr.prototype.equals__O__Z = (function(any) {
  if ((any instanceof $c_Ljapgolly_scalajs_react_vdom_Attr)) {
    var that = $as_Ljapgolly_scalajs_react_vdom_Attr(any);
    return (this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName === $n(that).Ljapgolly_scalajs_react_vdom_Attr__f_attrName);
  } else {
    return false;
  }
});
function $as_Ljapgolly_scalajs_react_vdom_Attr(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_vdom_Attr) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.vdom.Attr"));
}
function $isArrayOf_Ljapgolly_scalajs_react_vdom_Attr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_vdom_Attr)));
}
function $asArrayOf_Ljapgolly_scalajs_react_vdom_Attr(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_vdom_Attr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.vdom.Attr;", depth));
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Attr$() {
}
$c_Ljapgolly_scalajs_react_vdom_Attr$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_Attr$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Attr$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Attr$() {
}
$h_Ljapgolly_scalajs_react_vdom_Attr$.prototype = $c_Ljapgolly_scalajs_react_vdom_Attr$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_Attr$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_Attr$, "japgolly.scalajs.react.vdom.Attr$", ({
  Ljapgolly_scalajs_react_vdom_Attr$: 1
}));
var $n_Ljapgolly_scalajs_react_vdom_Attr$;
function $m_Ljapgolly_scalajs_react_vdom_Attr$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_Attr$)) {
    $n_Ljapgolly_scalajs_react_vdom_Attr$ = new $c_Ljapgolly_scalajs_react_vdom_Attr$();
  }
  return $n_Ljapgolly_scalajs_react_vdom_Attr$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$() {
  this.Ljapgolly_scalajs_react_vdom_Attr$ValueType$__f_direct = null;
  this.Ljapgolly_scalajs_react_vdom_Attr$ValueType$__f_string = null;
  $n_Ljapgolly_scalajs_react_vdom_Attr$ValueType$ = this;
  var fn$proxy1 = new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$10, _$11) => {
    var _$10$1 = $as_F1(_$10);
    $n(_$10$1).apply__O__O(_$11);
  }));
  this.Ljapgolly_scalajs_react_vdom_Attr$ValueType$__f_direct = fn$proxy1;
  var fn$proxy2 = new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$12, _$13) => {
    var _$12$1 = $as_F1(_$12);
    var _$13$1 = $as_T(_$13);
    $n(_$12$1).apply__O__O(_$13$1);
  }));
  this.Ljapgolly_scalajs_react_vdom_Attr$ValueType$__f_string = fn$proxy2;
}
$c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Attr$ValueType$() {
}
$h_Ljapgolly_scalajs_react_vdom_Attr$ValueType$.prototype = $c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_Attr$ValueType$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$, "japgolly.scalajs.react.vdom.Attr$ValueType$", ({
  Ljapgolly_scalajs_react_vdom_Attr$ValueType$: 1
}));
var $n_Ljapgolly_scalajs_react_vdom_Attr$ValueType$;
function $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_Attr$ValueType$)) {
    $n_Ljapgolly_scalajs_react_vdom_Attr$ValueType$ = new $c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$();
  }
  return $n_Ljapgolly_scalajs_react_vdom_Attr$ValueType$;
}
function $ct_Ljapgolly_scalajs_react_vdom_Exports__($thiz) {
  $m_Ljapgolly_scalajs_react_vdom_VdomNode$();
  $thiz.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $thiz.Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr = $m_Ljapgolly_scalajs_react_vdom_Attr$();
  $m_Ljapgolly_scalajs_react_vdom_VdomNode$();
  return $thiz;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Exports() {
  this.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf = null;
  this.Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr = null;
}
$c_Ljapgolly_scalajs_react_vdom_Exports.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_Exports.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Exports;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Exports() {
}
$h_Ljapgolly_scalajs_react_vdom_Exports.prototype = $c_Ljapgolly_scalajs_react_vdom_Exports.prototype;
function $f_Ljapgolly_scalajs_react_vdom_HtmlAttrs__$init$__V($thiz) {
  $m_Ljapgolly_scalajs_react_vdom_PackageBase$();
  $thiz.Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$__f_onClick = new $c_Ljapgolly_scalajs_react_vdom_Attr$Event("onClick");
}
function $f_Ljapgolly_scalajs_react_vdom_TagLite__apply__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($thiz, self, xs) {
  var this$1 = $m_sci_Nil$();
  return new $c_Ljapgolly_scalajs_react_vdom_TagOf(self, new $c_sci_$colon$colon(xs, this$1));
}
function $is_Ljapgolly_scalajs_react_vdom_TagMod(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_vdom_TagMod)));
}
function $as_Ljapgolly_scalajs_react_vdom_TagMod(obj) {
  return (($is_Ljapgolly_scalajs_react_vdom_TagMod(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.vdom.TagMod"));
}
function $isArrayOf_Ljapgolly_scalajs_react_vdom_TagMod(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_vdom_TagMod)));
}
function $asArrayOf_Ljapgolly_scalajs_react_vdom_TagMod(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_vdom_TagMod(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.vdom.TagMod;", depth));
}
var $d_Ljapgolly_scalajs_react_vdom_TagMod = new $TypeData().initClass(1, "japgolly.scalajs.react.vdom.TagMod", ({
  Ljapgolly_scalajs_react_vdom_TagMod: 1
}));
function $is_Ljapgolly_scalajs_react_vdom_VdomBuilder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_vdom_VdomBuilder)));
}
function $as_Ljapgolly_scalajs_react_vdom_VdomBuilder(obj) {
  return (($is_Ljapgolly_scalajs_react_vdom_VdomBuilder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.vdom.VdomBuilder"));
}
function $isArrayOf_Ljapgolly_scalajs_react_vdom_VdomBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_vdom_VdomBuilder)));
}
function $asArrayOf_Ljapgolly_scalajs_react_vdom_VdomBuilder(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_vdom_VdomBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.vdom.VdomBuilder;", depth));
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$() {
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$__f_build = null;
  $n_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$ = this;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$__f_build = new $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(((tag, props, key, children) => {
    var tag$1 = $as_T(tag);
    if ((key !== (void 0))) {
      props.key = key;
    }
    var $x_1 = $i_react;
    var seq = $m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), children));
    return $x_1.createElement(tag$1, props, ...$m_sjsr_Compat$().toJSVarArgsImpl__sci_Seq__sjs_js_Array(seq));
  }));
}
$c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$() {
}
$h_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$.prototype = $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$, "japgolly.scalajs.react.vdom.VdomBuilder$ToRawReactElement$", ({
  Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$: 1
}));
var $n_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$;
function $m_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$)) {
    $n_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$ = new $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$();
  }
  return $n_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_VdomNode$() {
  this.Ljapgolly_scalajs_react_vdom_VdomNode$__f_empty = null;
  $n_Ljapgolly_scalajs_react_vdom_VdomNode$ = this;
  this.Ljapgolly_scalajs_react_vdom_VdomNode$__f_empty = new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1(null);
}
$c_Ljapgolly_scalajs_react_vdom_VdomNode$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_VdomNode$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_VdomNode$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_VdomNode$() {
}
$h_Ljapgolly_scalajs_react_vdom_VdomNode$.prototype = $c_Ljapgolly_scalajs_react_vdom_VdomNode$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_VdomNode$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_VdomNode$, "japgolly.scalajs.react.vdom.VdomNode$", ({
  Ljapgolly_scalajs_react_vdom_VdomNode$: 1
}));
var $n_Ljapgolly_scalajs_react_vdom_VdomNode$;
function $m_Ljapgolly_scalajs_react_vdom_VdomNode$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_VdomNode$)) {
    $n_Ljapgolly_scalajs_react_vdom_VdomNode$ = new $c_Ljapgolly_scalajs_react_vdom_VdomNode$();
  }
  return $n_Ljapgolly_scalajs_react_vdom_VdomNode$;
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.jl_System$Streams$__f_out = null;
  this.jl_System$Streams$__f_err = null;
  $n_jl_System$Streams$ = this;
  this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
  this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
}
$c_jl_System$Streams$.prototype = new $h_O();
$c_jl_System$Streams$.prototype.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $c_jl_System$Streams$.prototype;
var $d_jl_System$Streams$ = new $TypeData().initClass($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  jl_System$Streams$: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.20.1";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jl_System$SystemProperties$__f_dict = null;
  this.jl_System$SystemProperties$__f_properties = null;
  $n_jl_System$SystemProperties$ = this;
  this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jl_System$SystemProperties$__f_properties = null;
}
$c_jl_System$SystemProperties$.prototype = new $h_O();
$c_jl_System$SystemProperties$.prototype.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $c_jl_System$SystemProperties$.prototype;
$c_jl_System$SystemProperties$.prototype.getProperty__T__T__T = (function(key, default$1) {
  if ((this.jl_System$SystemProperties$__f_dict !== null)) {
    var dict = this.jl_System$SystemProperties$__f_dict;
    return $as_T(($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1));
  } else {
    return $n(this.jl_System$SystemProperties$__f_properties).getProperty__T__T__T(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().initClass($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  jl_System$SystemProperties$: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
  $n_jl_Utils$Cache$ = this;
  this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty;
}
$c_jl_Utils$Cache$.prototype = new $h_O();
$c_jl_Utils$Cache$.prototype.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $c_jl_Utils$Cache$.prototype;
var $d_jl_Utils$Cache$ = new $TypeData().initClass($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  jl_Utils$Cache$: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"));
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)));
}
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth));
}
var $d_jl_Void = new $TypeData().initClass(0, "java.lang.Void", ({
  jl_Void: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  $n(array);
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$c_jl_reflect_Array$.prototype = new $h_O();
$c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $c_jl_reflect_Array$.prototype;
$c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
  if ((array instanceof $ac_O)) {
    var x2 = $asArrayOf_O(array, 1);
    return $n(x2).u.length;
  } else if ((array instanceof $ac_Z)) {
    var x3 = $asArrayOf_Z(array, 1);
    return $n(x3).u.length;
  } else if ((array instanceof $ac_C)) {
    var x4 = $asArrayOf_C(array, 1);
    return $n(x4).u.length;
  } else if ((array instanceof $ac_B)) {
    var x5 = $asArrayOf_B(array, 1);
    return $n(x5).u.length;
  } else if ((array instanceof $ac_S)) {
    var x6 = $asArrayOf_S(array, 1);
    return $n(x6).u.length;
  } else if ((array instanceof $ac_I)) {
    var x7 = $asArrayOf_I(array, 1);
    return $n(x7).u.length;
  } else if ((array instanceof $ac_J)) {
    var x8 = $asArrayOf_J(array, 1);
    return $n(x8).u.length;
  } else if ((array instanceof $ac_F)) {
    var x9 = $asArrayOf_F(array, 1);
    return $n(x9).u.length;
  } else if ((array instanceof $ac_D)) {
    var x10 = $asArrayOf_D(array, 1);
    return $n(x10).u.length;
  } else {
    $p_jl_reflect_Array$__mismatch__O__E(this, array);
  }
});
var $d_jl_reflect_Array$ = new $TypeData().initClass($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  jl_reflect_Array$: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.binarySearch__AI__I__I = (function(a, key) {
  var startIndex = 0;
  var endIndex = $n(a).u.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = $n(a).get(mid);
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
$c_ju_Arrays$.prototype.equals__AJ__AJ__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var t = $n(a).get(i$1);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var i$2 = i;
    var t$1 = $n(b).get(i$2);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AI__AI__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AS__AS__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AC__AC__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AB__AB__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AZ__AZ__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AD__AD__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!Object.is(a$1, b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AF__AF__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!Object.is(a$1, b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.copyOf__AO__I__AO = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var this$3 = $n(original);
  var clazz = $objectGetClass(this$3);
  var componentType = clazz.data.getComponentType();
  var ret = $asArrayOf_O($n(componentType).data.newArray(newLength), 1);
  $systemArraycopyRefs($n(original), 0, $n(ret), 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOfRange__AO__I__I__AO = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = $n(original).u.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var this$3 = $n(original);
  var clazz = $objectGetClass(this$3);
  var componentType = clazz.data.getComponentType();
  var ret = $asArrayOf_O($n(componentType).data.newArray(retLength), 1);
  $systemArraycopyRefs($n(original), from, $n(ret), 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOfRange__AB__I__I__AB = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = $n(original).u.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_B(retLength);
  $systemArraycopy($n(original), start, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOfRange__AS__I__I__AS = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = $n(original).u.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_S(retLength);
  $systemArraycopy($n(original), start, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOfRange__AI__I__I__AI = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = $n(original).u.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_I(retLength);
  $systemArraycopy($n(original), start, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOfRange__AJ__I__I__AJ = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = $n(original).u.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_J(retLength);
  $systemArraycopy($n(original), start, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOfRange__AC__I__I__AC = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = $n(original).u.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_C(retLength);
  $systemArraycopy($n(original), start, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOfRange__AF__I__I__AF = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = $n(original).u.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_F(retLength);
  $systemArraycopy($n(original), start, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOfRange__AD__I__I__AD = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = $n(original).u.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_D(retLength);
  $systemArraycopy($n(original), start, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOfRange__AZ__I__I__AZ = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = $n(original).u.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_Z(retLength);
  $systemArraycopy($n(original), start, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().initClass($c_ju_Arrays$, "java.util.Arrays$", ({
  ju_Arrays$: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.ju_regex_PatternCompiler__f_pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp.exec($thiz.ju_regex_PatternCompiler__f_pattern);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var t = $as_T(x);
      var this$3 = $n(t);
      var end = this$3.length;
      var i = 0;
      while ((i < end)) {
        var value = i;
        var $x_2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
        var $x_1 = $m_ju_regex_PatternCompiler$();
        var this$5 = $n(t);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_2 | $x_1.java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$5, value)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var t$1 = $as_T(x$1);
      var this$8 = $n(t$1);
      var end$1 = this$8.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var value$1 = i$1;
        var $x_4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
        var $x_3 = $m_ju_regex_PatternCompiler$();
        var this$10 = $n(t$1);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_4 & (~$x_3.java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$10, value$1))));
        i$1 = ((1 + i$1) | 0);
      }
    }
    var $x_5 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var x$2 = m[0];
    var this$12 = $n($as_T(x$2));
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($x_5 + this$12.length) | 0);
  }
}
function $p_ju_regex_PatternCompiler__literal__T__T($thiz, s) {
  var result = "";
  var this$1 = $n(s);
  var len = this$1.length;
  var i = 0;
  while ((i !== len)) {
    var cp = $f_T__codePointAt__I__I($n(s), i);
    result = (("" + result) + $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp));
    i = ((i + ((cp >= 65536) ? 2 : 1)) | 0);
  }
  return result;
}
function $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp) {
  var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(cp);
  if ((cp < 128)) {
    switch (cp) {
      case 94:
      case 36:
      case 92:
      case 46:
      case 42:
      case 43:
      case 63:
      case 40:
      case 41:
      case 91:
      case 93:
      case 123:
      case 125:
      case 124: {
        return ("\\" + s);
        break;
      }
      default: {
        return (((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 2) ? s : (((cp >= 65) && (cp <= 90)) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + cp) | 0))) + "]") : (((cp >= 97) && (cp <= 122)) ? ((("[" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + cp) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  while (true) {
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var x1 = $charAt(this$2, index);
      switch (x1) {
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          continue;
          break;
        }
        case 35: {
          $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((startOfRepeater === len)) {
    var repeaterDispatchChar = 46;
  } else {
    var this$2 = $n(pattern);
    var repeaterDispatchChar = $charAt(this$2, startOfRepeater);
  }
  if (((((repeaterDispatchChar === 63) || (repeaterDispatchChar === 42)) || (repeaterDispatchChar === 43)) || (repeaterDispatchChar === 123))) {
    var this$3 = $n(compiledToken);
    var x1 = $charAt(this$3, 0);
    switch (x1) {
      case 94:
      case 36: {
        var isTokenAnAssertion = true;
        break;
      }
      case 40: {
        var this$4 = $n(compiledToken);
        if (($charAt(this$4, 1) === 63)) {
          var this$5 = $n(compiledToken);
          var isTokenAnAssertion = ($charAt(this$5, 2) !== 58);
        } else {
          var isTokenAnAssertion = false;
        }
        break;
      }
      case 92: {
        var this$6 = $n(compiledToken);
        var c = $charAt(this$6, 1);
        var isTokenAnAssertion = ((c === 98) || (c === 66));
        break;
      }
      default: {
        var isTokenAnAssertion = false;
      }
    }
    var wrappedToken = (isTokenAnAssertion ? (("(?:" + compiledToken) + ")") : compiledToken);
    var baseRepeater = $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar);
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$7 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var x1$2 = $charAt(this$7, index);
      switch (x1$2) {
        case 43: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, wrappedToken, baseRepeater);
          break;
        }
        case 63: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return ((("" + wrappedToken) + baseRepeater) + "?");
          break;
        }
        default: {
          return (("" + wrappedToken) + baseRepeater);
        }
      }
    } else {
      return (("" + wrappedToken) + baseRepeater);
    }
  } else {
    return compiledToken;
  }
}
function $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if ((repeaterDispatchChar === 123)) {
    var this$1 = $n(pattern);
    var len = this$1.length;
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      var $x_1 = true;
    } else {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = (!((c >= 48) && (c <= 57)));
    }
    if ($x_1) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    while (true) {
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
        var this$4 = $n(pattern);
        var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var c$1 = $charAt(this$4, index$1);
        var $x_2 = ((c$1 >= 48) && (c$1 <= 57));
      } else {
        var $x_2 = false;
      }
      if ($x_2) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      } else {
        break;
      }
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    var this$6 = $n(pattern);
    var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    if (($charAt(this$6, index$2) === 44)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      while (true) {
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
          var this$7 = $n(pattern);
          var index$3 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c$2 = $charAt(this$7, index$3);
          var $x_3 = ((c$2 >= 48) && (c$2 <= 57));
        } else {
          var $x_3 = false;
        }
        if ($x_3) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        } else {
          break;
        }
      }
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      var $x_4 = true;
    } else {
      var this$9 = $n(pattern);
      var index$4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var $x_4 = ($charAt(this$9, index$4) !== 125);
    }
    if ($x_4) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  }
  return $as_T(pattern.substring(startOfRepeater, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex));
}
function $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken, baseRepeater) {
  var end = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length);
  var i = 0;
  while ((i < end)) {
    var value = i;
    var mapped = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[value]);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[value] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = $as_T(compiledToken.replace($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp, ((arg1$2, arg2$2, arg3$2) => {
    var arg1 = $as_T(arg1$2);
    var arg2 = $as_T(arg2$2);
    var arg3 = $as_T(arg3$2);
    var this$3 = $n(arg2);
    if ((((this$3.length % 2) | 0) === 0)) {
      return arg1;
    } else {
      var groupNumber = $uI(parseInt(arg3, 10));
      return ((groupNumber > compiledGroupCountBeforeThisToken) ? (("" + arg2) + ((1 + groupNumber) | 0)) : arg1);
    }
  })));
  $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  if ((((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0) === len)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\ at end of pattern");
  }
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  var this$2 = $n(pattern);
  var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  var dispatchChar = $charAt(this$2, index);
  switch (dispatchChar) {
    case 100:
    case 68:
    case 104:
    case 72:
    case 115:
    case 83:
    case 118:
    case 86:
    case 119:
    case 87:
    case 112:
    case 80: {
      var cls = $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar);
      var x1$2 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
          break;
        }
        case 2: {
          return (("[" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
          break;
        }
        default: {
          throw new $c_jl_AssertionError(x1$2);
        }
      }
      break;
    }
    case 98: {
      if (($as_T(pattern.substring($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "b{g}")) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\b{g} is not supported");
      } else if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\B with UNICODE_CASE", "2018");
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return "\\B";
      }
      break;
    }
    case 65: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "^";
      break;
    }
    case 71: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\G in the middle of a pattern is not supported");
      break;
    }
    case 90: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var lineTerminator = (((1 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])");
      return (("(?=" + lineTerminator) + "?$)");
      break;
    }
    case 122: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "$";
      break;
    }
    case 82: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "(?:\r\n|[\n-\r\u0085\u2028\u2029])";
      break;
    }
    case 88: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\X is not supported");
      break;
    }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57: {
      var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var end = ((1 + start) | 0);
      while (true) {
        if ((end !== len)) {
          var this$7 = $n(pattern);
          var index$1 = end;
          var c = $charAt(this$7, index$1);
          var $x_2 = ((c >= 48) && (c <= 57));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          var s = $as_T(pattern.substring(start, ((1 + end) | 0)));
          var $x_1 = ($uI(parseInt(s, 10)) <= (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          end = ((1 + end) | 0);
        } else {
          break;
        }
      }
      var groupString = $as_T(pattern.substring(start, end));
      var groupNumber = $uI(parseInt(groupString, 10));
      if ((groupNumber > (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
      return (("(?:\\" + compiledGroupNumber) + ")");
      break;
    }
    case 107: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
        var $x_3 = true;
      } else {
        var this$11 = $n(pattern);
        var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var $x_3 = ($charAt(this$11, index$2) !== 60);
      }
      if ($x_3) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\k is not followed by '<' for named capturing group");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var groupName = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
      var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
      if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, groupName)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = $uI(dict[groupName]);
      var compiledGroupNumber$2 = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber$2]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (("(?:\\" + compiledGroupNumber$2) + ")");
      break;
    }
    case 81: {
      var start$2 = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var this$13 = $n(pattern);
      var end$2 = $uI(this$13.indexOf("\\E", start$2));
      if ((end$2 < 0)) {
        var this$14 = $n(pattern);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = this$14.length;
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2)));
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end$2) | 0);
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2, end$2)));
      }
      break;
    }
    default: {
      return $p_ju_regex_PatternCompiler__literal__I__T($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz));
    }
  }
}
function $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
  switch (x1) {
    case 48: {
      return $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz);
      break;
    }
    case 120: {
      return $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz);
      break;
    }
    case 117: {
      return $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz);
      break;
    }
    case 78: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\N is not supported");
      break;
    }
    case 97: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 7;
      break;
    }
    case 116: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 9;
      break;
    }
    case 110: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 10;
      break;
    }
    case 102: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 12;
      break;
    }
    case 114: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 13;
      break;
    }
    case 101: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 27;
      break;
    }
    case 99: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var $x_1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var this$1 = $n(pattern);
      if (($x_1 === this$1.length)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal control escape sequence");
      }
      var cp = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cp >= 65536) ? 2 : 1)) | 0);
      return (64 ^ cp);
      break;
    }
    default: {
      if ((((x1 >= 65) && (x1 <= 90)) || ((x1 >= 97) && (x1 <= 122)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal/unsupported escape sequence");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
      return x1;
    }
  }
}
function $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((((1 + start) | 0) < len)) {
    var this$2 = $n(pattern);
    var index = ((1 + start) | 0);
    var d1 = (((-48) + $charAt(this$2, index)) | 0);
  } else {
    var d1 = (-1);
  }
  if (((d1 < 0) || (d1 > 7))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal octal escape sequence");
  }
  if ((((2 + start) | 0) < len)) {
    var this$3 = $n(pattern);
    var index$1 = ((2 + start) | 0);
    var d2 = (((-48) + $charAt(this$3, index$1)) | 0);
  } else {
    var d2 = (-1);
  }
  if (((d2 < 0) || (d2 > 7))) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    return d1;
  } else if ((d1 > 3)) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    return (((d1 << 3) + d2) | 0);
  } else {
    if ((((3 + start) | 0) < len)) {
      var this$4 = $n(pattern);
      var index$2 = ((3 + start) | 0);
      var d3 = (((-48) + $charAt(this$4, index$2)) | 0);
    } else {
      var d3 = (-1);
    }
    if (((d3 < 0) || (d3 > 7))) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (((d1 << 3) + d2) | 0);
    } else {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (((((d1 << 6) + (d2 << 3)) | 0) + d3) | 0);
    }
  }
}
function $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if ((start !== len)) {
    var this$2 = $n(pattern);
    var $x_1 = ($charAt(this$2, start) === 123);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var innerStart = ((1 + start) | 0);
    var this$3 = $n(pattern);
    var innerEnd = $uI(this$3.indexOf("}", innerStart));
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed hexadecimal escape sequence");
    }
    var cp = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, innerStart, innerEnd, "hexadecimal");
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + innerEnd) | 0);
    return cp;
  } else {
    var cp$2 = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, ((2 + start) | 0), "hexadecimal");
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + start) | 0);
    return cp$2;
  }
}
function $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  var end = ((4 + start) | 0);
  var codeUnit = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, "Unicode");
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
  var lowStart = ((2 + end) | 0);
  var lowEnd = ((4 + lowStart) | 0);
  if (((((-1024) & codeUnit) === 55296) && ($as_T(pattern.substring(end, lowStart)) === "\\u"))) {
    var low = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, lowStart, lowEnd, "Unicode");
    if ((((-1024) & low) === 56320)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = lowEnd;
      return ((((64 + (1023 & codeUnit)) | 0) << 10) | (1023 & low));
    } else {
      return codeUnit;
    }
  } else {
    return codeUnit;
  }
}
function $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, nameForError) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  if (((start === end) || (end > len))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
  }
  var i = start;
  while ((i < end)) {
    var value = i;
    var this$4 = $n(pattern);
    var c = $charAt(this$4, value);
    if ((!((((c >= 48) && (c <= 57)) || ((c >= 65) && (c <= 70))) || ((c >= 97) && (c <= 102))))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
    }
    i = ((1 + i) | 0);
  }
  if ((((end - start) | 0) > 6)) {
    var cp = 1114112;
  } else {
    var s = $as_T(pattern.substring(start, end));
    var cp = $uI(parseInt(s, 16));
  }
  if ((cp > 1114111)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Hexadecimal codepoint is too big");
  }
  return cp;
}
function $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar) {
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  switch (dispatchChar) {
    case 100:
    case 68: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar;
      break;
    }
    case 112:
    case 80: {
      var positive = $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz);
      break;
    }
    default: {
      var positive;
      throw new $c_jl_AssertionError($bC(dispatchChar));
    }
  }
  return ((dispatchChar >= 97) ? positive : $n(positive).negated__ju_regex_PatternCompiler$CompiledCharClass());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((start === len)) {
    var property = "?";
  } else {
    var this$2 = $n(pattern);
    if (($charAt(this$2, start) === 123)) {
      var innerStart = ((1 + start) | 0);
      var this$3 = $n(pattern);
      var innerEnd = $uI(this$3.indexOf("}", innerStart));
      if ((innerEnd < 0)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character family");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = innerEnd;
      var property = $as_T(pattern.substring(innerStart, innerEnd));
    } else {
      var property = $as_T(pattern.substring(start, ((1 + start) | 0)));
    }
  }
  var dict = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
  if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, property)))) {
    $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
  var result = $as_ju_regex_PatternCompiler$CompiledCharClass(dict$1[property2]);
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var this$2 = $n(pattern);
    var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var isNegated = ($charAt(this$2, index) === 94);
  } else {
    var isNegated = false;
  }
  if (isNegated) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2), isNegated);
  while (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return builder.finish__T();
          break;
        }
        case 38: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
            var this$3 = $n(pattern);
            var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
            var $x_1 = ($charAt(this$3, index$1) === 38);
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            builder.startNewConjunct__V();
            break matchResult;
          } else {
            $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, 38, len, pattern, builder);
            break matchResult;
          }
          break;
        }
        case 91: {
          var cls = $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz);
          $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(builder, cls);
          break matchResult;
          break;
        }
        case 92: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal escape sequence");
          }
          var this$4 = $n(pattern);
          var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c2 = $charAt(this$4, index$2);
          switch (c2) {
            case 100:
            case 68:
            case 104:
            case 72:
            case 115:
            case 83:
            case 118:
            case 86:
            case 119:
            case 87:
            case 112:
            case 80: {
              builder.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
              break matchResult;
              break;
            }
            case 81: {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              var this$5 = $n(pattern);
              var fromIndex = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
              var end = $uI(this$5.indexOf("\\E", fromIndex));
              if ((end < 0)) {
                $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
              }
              builder.addCodePointsInString__T__I__I__V(pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, end);
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end) | 0);
              break matchResult;
              break;
            }
            default: {
              $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz), len, pattern, builder);
              break matchResult;
            }
          }
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
            break matchResult;
          }
          break;
        }
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
      $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, x1, len, pattern, builder);
    }
  }
  $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
}
function $p_ju_regex_PatternCompiler__compileGroup__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((((1 + start) | 0) === len)) {
    var $x_1 = true;
  } else {
    var this$2 = $n(pattern);
    var index = ((1 + start) | 0);
    var $x_1 = ($charAt(this$2, index) !== 63);
  }
  if ($x_1) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + start) | 0);
    $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
    return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var this$3 = $n(pattern);
    var index$1 = ((2 + start) | 0);
    var c1 = $charAt(this$3, index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
      return ((("" + $as_T(pattern.substring(start, ((3 + start) | 0)))) + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var this$4 = $n(pattern);
      var index$2 = ((3 + start) | 0);
      var c2 = $charAt(this$4, index$2);
      if ((((c2 >= 65) && (c2 <= 90)) || ((c2 >= 97) && (c2 <= 122)))) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
        if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, name))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
        var dict$1 = $thiz.ju_regex_PatternCompiler__f_namedGroups;
        var value = (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0);
        dict$1[name] = value;
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
      } else {
        if (((c2 !== 61) && (c2 !== 33))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
      $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
      var groupNumber = $thiz.ju_regex_PatternCompiler__f_compiledGroupCount;
      return (((("(?:(?=(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  while (true) {
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = ((((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122))) || ((c >= 48) && (c <= 57)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    } else {
      break;
    }
  }
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
    var $x_2 = true;
  } else {
    var this$4 = $n(pattern);
    var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var $x_2 = ($charAt(this$4, index$1) !== 62);
  }
  if ($x_2) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "named capturing group is missing trailing '>'");
  }
  return $as_T(pattern.substring(start, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex));
}
function $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, startCodePoint, len$2, pattern$3, builder$1) {
  if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len$2)) {
    var this$1 = $n(pattern$3);
    var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var $x_1 = ($charAt(this$1, index) === 45);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I($n(pattern$3), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
      $n(builder$1).addSingleCodePoint__I__V(45);
    } else {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      $n(builder$1).addCodePointRange__I__I__V(startCodePoint, endCodePoint);
    }
  } else {
    $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.ju_regex_PatternCompiler__f_pattern = null;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = 0;
  this.ju_regex_PatternCompiler__f_sticky = false;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
  this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = null;
  this.ju_regex_PatternCompiler__f_namedGroups = null;
  this.ju_regex_PatternCompiler__f_pattern = pattern;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = flags;
  this.ju_regex_PatternCompiler__f_sticky = false;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
  this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = [0];
  this.ju_regex_PatternCompiler__f_namedGroups = ({});
}
$c_ju_regex_PatternCompiler.prototype = new $h_O();
$c_ju_regex_PatternCompiler.prototype.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $c_ju_regex_PatternCompiler.prototype;
$c_ju_regex_PatternCompiler.prototype.compile__ju_regex_Pattern = (function() {
  if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags);
  }
  var isLiteral = ((16 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("MULTILINE", "2018");
  }
  if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.ju_regex_PatternCompiler__f_pattern);
  } else {
    if (($as_T(this.ju_regex_PatternCompiler__f_pattern.substring(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "\\G")) {
      this.ju_regex_PatternCompiler__f_sticky = true;
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    }
    var jsPattern = this.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "us" : "u");
  var jsFlags = (((66 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.ju_regex_PatternCompiler__f_pattern, this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags, jsPattern, jsFlags, this.ju_regex_PatternCompiler__f_sticky, (((-1) + $uI(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap, this.ju_regex_PatternCompiler__f_namedGroups);
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T = (function(insideGroup) {
  var pattern = this.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var result = "";
  while ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var dispatchCP = $f_T__codePointAt__I__I($n(pattern), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    matchResult: {
      switch (dispatchCP) {
        case 41: {
          if ((!insideGroup)) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unmatched closing ')'");
          }
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return result;
          break;
        }
        case 124: {
          if ((this.ju_regex_PatternCompiler__f_sticky && (!insideGroup))) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "\\G is not supported when there is an alternative at the top level");
          }
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          result = (result + "|");
          break matchResult;
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            this.java$util$regex$PatternCompiler$$skipSharpComment__V();
            break matchResult;
          }
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.ju_regex_PatternCompiler__f_compiledGroupCount;
      switch (dispatchCP) {
        case 92: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileEscape__T(this);
          break;
        }
        case 91: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileCharacterClass__T(this);
          break;
        }
        case 40: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileGroup__T(this);
          break;
        }
        case 94: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var compiledToken = "^";
          break;
        }
        case 36: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var compiledToken = "$";
          break;
        }
        case 46: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var rejected = (((32 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "" : (((1 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T(rejected);
          break;
        }
        default: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
          var compiledToken = $p_ju_regex_PatternCompiler__literal__I__T(this, dispatchCP);
        }
      }
      result = (("" + result) + $p_ju_regex_PatternCompiler__compileRepeater__I__T__T(this, compiledGroupCountBeforeThisToken, compiledToken));
    }
  }
  if (insideGroup) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unclosed group");
  }
  return result;
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$skipSharpComment__V = (function() {
  var pattern = this.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  while (true) {
    if ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = (!(((((c === 10) || (c === 13)) || (c === 133)) || (c === 8232)) || (c === 8233)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    } else {
      break;
    }
  }
});
var $d_ju_regex_PatternCompiler = new $TypeData().initClass($c_ju_regex_PatternCompiler, "java.util.regex.PatternCompiler", ({
  ju_regex_PatternCompiler: 1
}));
function $p_ju_regex_PatternCompiler$__featureTest__T__Z($thiz, flags) {
  try {
    new RegExp("", flags);
    return true;
  } catch (e) {
    return false;
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler$() {
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = new RegExp("(\\\\+)(\\d+)", "g");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = true;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = true;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
  var r = ({});
  var value = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-z");
  r.Lower = value;
  var value$1 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Z");
  r.Upper = value$1;
  var value$2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u007f");
  r.ASCII = value$2;
  var value$3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Za-z");
  r.Alpha = value$3;
  var value$4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  r.Digit = value$4;
  var value$5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Za-z");
  r.Alnum = value$5;
  var value$6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-/:-@[-`{-~");
  r.Punct = value$6;
  var value$7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-~");
  r.Graph = value$7;
  var value$8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, " -~");
  r.Print = value$8;
  var value$9 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t ");
  r.Blank = value$9;
  var value$10 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u001f\u007f");
  r.Cntrl = value$10;
  var value$11 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Fa-f");
  r.XDigit = value$11;
  var value$12 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  r.Space = value$12;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = r;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = new RegExp("(?:^|_)[a-z]", "g");
}
$c_ju_regex_PatternCompiler$.prototype = new $h_O();
$c_ju_regex_PatternCompiler$.prototype.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $c_ju_regex_PatternCompiler$.prototype;
$c_ju_regex_PatternCompiler$.prototype.compile__T__I__ju_regex_Pattern = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).compile__ju_regex_Pattern();
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$charToFlag__C__I = (function(c) {
  switch (c) {
    case 105: {
      return 2;
      break;
    }
    case 100: {
      return 1;
      break;
    }
    case 109: {
      return 8;
      break;
    }
    case 115: {
      return 32;
      break;
    }
    case 117: {
      return 64;
      break;
    }
    case 120: {
      return 4;
      break;
    }
    case 85: {
      return 256;
      break;
    }
    default: {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag");
    }
  }
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointNotAmong__T__T = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "." : "[\\d\\D]"));
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointToString__I__T = (function(codePoint) {
  return $as_T(String.fromCodePoint(codePoint));
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().initClass($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  ju_regex_PatternCompiler$: 1
}));
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
  }
  return $n_ju_regex_PatternCompiler$;
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "")) {
    $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = alt;
  } else {
    $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct + "|") + alt);
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
    return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? negThisSegment : (((("(?:(?!" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment === "") ? (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? "[^\\d\\D]" : (("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")")) : (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? (("[" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "]") : (((("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + "|[") + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(codePoint);
  return (((((codePoint === 93) || (codePoint === 92)) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = false;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = false;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = asciiCaseInsensitive;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = isNegated;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = "";
}
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype;
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.finish__T = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction === "") ? conjunct : ((("(?:" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction) + conjunct) + ")"));
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.startNewConjunct__V = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction + (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = "";
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V = (function(cls) {
  var x1 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
  switch (x1) {
    case 0: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
      break;
    }
    case 1: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
      break;
    }
    case 2: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointsInString__T__I__I__V = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I($n(str), i);
    this.addSingleCodePoint__I__V(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addSingleCodePoint__I__V = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + s) + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
  } else {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + s);
  }
  if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
    if (((codePoint >= 65) && (codePoint <= 90))) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + codePoint) | 0)));
    } else if (((codePoint >= 97) && (codePoint <= 122))) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + codePoint) | 0)));
    }
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointRange__I__I__V = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (s + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
  } else {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + s);
  }
  if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
    }
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
      var start$3 = (((-32) + start$2) | 0);
      var end$3 = (((-32) + end$2) | 0);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().initClass($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
  ju_regex_PatternCompiler$CharacterClassBuilder: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0)) {
    $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_kind), $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_data);
    $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = true;
  }
  return $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.ju_regex_PatternCompiler$CompiledCharClass__f_negated = null;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = 0;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_data = null;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = false;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = kind;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_data = data;
}
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype;
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.negated__ju_regex_PatternCompiler$CompiledCharClass = (function() {
  return ((!this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.ju_regex_PatternCompiler$CompiledCharClass__f_negated);
});
function $as_ju_regex_PatternCompiler$CompiledCharClass(obj) {
  return (((obj instanceof $c_ju_regex_PatternCompiler$CompiledCharClass) || (obj === null)) ? obj : $throwClassCastException(obj, "java.util.regex.PatternCompiler$CompiledCharClass"));
}
function $isArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_regex_PatternCompiler$CompiledCharClass)));
}
function $asArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) {
  return (($isArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.util.regex.PatternCompiler$CompiledCharClass;", depth));
}
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().initClass($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  ju_regex_PatternCompiler$CompiledCharClass: 1
}));
function $s_RTLong__remainderUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderUnsignedImpl__I__I__I__I__I($n(a).RTLong__f_lo, $n(a).RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__remainder__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I($n(a).RTLong__f_lo, $n(a).RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__divideUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideUnsignedImpl__I__I__I__I__I($n(a).RTLong__f_lo, $n(a).RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__divide__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I($n(a).RTLong__f_lo, $n(a).RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__fromDoubleBits__D__O__RTLong(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  return new $c_RTLong($uI(fpBitsDataView.getInt32(0, true)), $uI(fpBitsDataView.getInt32(4, true)));
}
function $s_RTLong__fromDouble__D__RTLong(value) {
  var this$1 = $m_RTLong$();
  var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__fromUnsignedInt__I__RTLong(value) {
  return new $c_RTLong(value, 0);
}
function $s_RTLong__fromInt__I__RTLong(value) {
  return new $c_RTLong(value, (value >> 31));
}
function $s_RTLong__clz__RTLong__I(a) {
  var hi = $n(a).RTLong__f_hi;
  if ((hi !== 0)) {
    return Math.clz32(hi);
  } else {
    var i = $n(a).RTLong__f_lo;
    return ((32 + Math.clz32(i)) | 0);
  }
}
function $s_RTLong__toFloat__RTLong__F(a) {
  var lo = $n(a).RTLong__f_lo;
  var hi = $n(a).RTLong__f_hi;
  var compressedLo = (((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo)));
  return Math.fround(((4.294967296E9 * hi) + (compressedLo >>> 0.0)));
}
function $s_RTLong__toDouble__RTLong__D(a) {
  var lo = $n(a).RTLong__f_lo;
  var hi = $n(a).RTLong__f_hi;
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__RTLong__I(a) {
  return $n(a).RTLong__f_lo;
}
function $s_RTLong__bitsToDouble__RTLong__O__D(a, fpBitsDataView) {
  fpBitsDataView.setInt32(0, $n(a).RTLong__f_lo, true);
  fpBitsDataView.setInt32(4, $n(a).RTLong__f_hi, true);
  return $uD(fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__RTLong__RTLong__RTLong(a, b) {
  var alo = $n(a).RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul($n(a).RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi);
}
function $s_RTLong__sub__RTLong__RTLong__RTLong(a, b) {
  var alo = $n(a).RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var lo = ((alo - blo) | 0);
  return new $c_RTLong(lo, (((($n(a).RTLong__f_hi - $n(b).RTLong__f_hi) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0));
}
function $s_RTLong__add__RTLong__RTLong__RTLong(a, b) {
  var alo = $n(a).RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var lo = ((alo + blo) | 0);
  return new $c_RTLong(lo, (((($n(a).RTLong__f_hi + $n(b).RTLong__f_hi) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0));
}
function $s_RTLong__sar__RTLong__I__RTLong(a, n) {
  var hi = $n(a).RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? ((($n(a).RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
}
function $s_RTLong__shr__RTLong__I__RTLong(a, n) {
  var hi = $n(a).RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? ((($n(a).RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
}
function $s_RTLong__shl__RTLong__I__RTLong(a, n) {
  var lo = $n(a).RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | ($n(a).RTLong__f_hi << n)) : (lo << n)));
}
function $s_RTLong__xor__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(($n(a).RTLong__f_lo ^ $n(b).RTLong__f_lo), ($n(a).RTLong__f_hi ^ $n(b).RTLong__f_hi));
}
function $s_RTLong__and__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(($n(a).RTLong__f_lo & $n(b).RTLong__f_lo), ($n(a).RTLong__f_hi & $n(b).RTLong__f_hi));
}
function $s_RTLong__or__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(($n(a).RTLong__f_lo | $n(b).RTLong__f_lo), ($n(a).RTLong__f_hi | $n(b).RTLong__f_hi));
}
function $s_RTLong__geu__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) >= ($n(b).RTLong__f_lo >>> 0)) : ((ahi >>> 0) >= (bhi >>> 0)));
}
function $s_RTLong__gtu__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) > ($n(b).RTLong__f_lo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) <= ($n(b).RTLong__f_lo >>> 0)) : ((ahi >>> 0) <= (bhi >>> 0)));
}
function $s_RTLong__ltu__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) < ($n(b).RTLong__f_lo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) >= ($n(b).RTLong__f_lo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) > ($n(b).RTLong__f_lo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) <= ($n(b).RTLong__f_lo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) < ($n(b).RTLong__f_lo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__RTLong__RTLong__Z(a, b) {
  return (!(($n(a).RTLong__f_lo === $n(b).RTLong__f_lo) && ($n(a).RTLong__f_hi === $n(b).RTLong__f_hi)));
}
function $s_RTLong__equals__RTLong__RTLong__Z(a, b) {
  return (($n(a).RTLong__f_lo === $n(b).RTLong__f_lo) && ($n(a).RTLong__f_hi === $n(b).RTLong__f_hi));
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi;
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi));
  } else {
    return false;
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi);
});
$c_RTLong.prototype.toString__T = (function() {
  var this$1 = $m_RTLong$();
  return this$1.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24);
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16);
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo;
});
$c_RTLong.prototype.longValue__J = (function() {
  return this;
});
$c_RTLong.prototype.floatValue__F = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  var compressedLo = (((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo)));
  return Math.fround(((4.294967296E9 * hi) + (compressedLo >>> 0.0)));
});
$c_RTLong.prototype.doubleValue__D = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi);
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"));
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)));
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth));
}
var $d_RTLong = new $TypeData().initClass($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  RTLong: 1
}));
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (x | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - Math.clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - Math.clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, true);
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (x | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, false);
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, askQuotient) {
  var shift = ((((bhi !== 0) ? Math.clz32(bhi) : ((32 + Math.clz32(blo)) | 0)) - ((ahi !== 0) ? Math.clz32(ahi) : ((32 + Math.clz32(alo)) | 0))) | 0);
  var b = shift;
  var lo = (((32 & b) === 0) ? (blo << b) : 0);
  var hi = (((32 & b) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - b) | 0)) | 0) | (bhi << b)) : (blo << b));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? ((alo$1 >>> 0) >= (blo$1 >>> 0)) : ((ahi$1 >>> 0) >= (bhi$1 >>> 0)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((hi$1 - hi$2) | 0) + ((((~lo$1) & lo$2) | ((~(lo$1 ^ lo$2)) & lo$3)) >> 31)) | 0);
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? ((alo$2 >>> 0) >= (blo >>> 0)) : ((ahi$2 >>> 0) >= (bhi >>> 0)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + (lo$6 >>> 0.0));
    var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
    if (askQuotient) {
      var x = (remDouble / bDouble);
      var lo$7 = (x | 0.0);
      var x$1 = (x / 4.294967296E9);
      var hi$7 = (x$1 | 0.0);
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((hi$8 + hi$7) | 0) + ((((lo$8 & lo$7) | ((lo$8 | lo$7) & (~lo$9))) >>> 31) | 0)) | 0);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = hi$9;
      return lo$9;
    } else {
      var rem_mod_bDouble = (remDouble % bDouble);
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (x$2 | 0.0);
      return (rem_mod_bDouble | 0.0);
    }
  } else if (askQuotient) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo;
  } else {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo;
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    var this$2 = ((4.294967296E9 * hi) + (lo >>> 0.0));
    return ("" + this$2);
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = $uD(Math.floor((1.0E-9 * approxNum)));
    var x = approxQuot;
    var approxRem = ((rlo - Math.imul(1000000000, (x | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = (((-1000000000) + approxRem) | 0);
    }
    var this$4 = approxRem;
    var remStr = ("" + this$4);
    var this$6 = approxQuot;
    var start = remStr.length;
    var s = ((("" + this$6) + $as_T("000000000".substring(start))) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1);
  } else {
    var rawLo = (value | 0.0);
    var x = (value / 4.294967296E9);
    var rawHi = (x | 0.0);
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : (((alo >>> 0) < (blo >>> 0)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648);
      } else {
        var lo = ((alo / $checkIntDivisor(blo)) | 0);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else {
    var sign = (ahi >> 31);
    var xlo = (alo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var sign$1 = (bhi >> 31);
    var xlo$1 = (blo ^ sign$1);
    var rlo$1 = ((xlo$1 - sign$1) | 0);
    var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, rlo, rhi, rlo$1, rhi$1);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = hi$1;
      return lo$1;
    }
  }
});
$c_RTLong$.prototype.divideUnsignedImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return (((alo >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else {
    return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      var lo = ((alo % $checkIntDivisor(blo)) | 0);
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
      return lo;
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else {
    var sign = (ahi >> 31);
    var xlo = (alo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var sign$1 = (bhi >> 31);
    var xlo$1 = (blo ^ sign$1);
    var rlo$1 = ((xlo$1 - sign$1) | 0);
    var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, rlo, rhi, rlo$1, rhi$1);
    if ((ahi < 0)) {
      var hi = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = hi$1;
      return lo$1;
    } else {
      return absRLo;
    }
  }
});
$c_RTLong$.prototype.remainderUnsignedImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return (((alo >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else {
    return $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
var $d_RTLong$ = new $TypeData().initClass($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  RTLong$: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F0)));
}
function $as_F0(obj) {
  return (($is_F0(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function0"));
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F0)));
}
function $asArrayOf_F0(obj, depth) {
  return (($isArrayOf_F0(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function0;", depth));
}
function $f_F1__compose__F1__F1($thiz, g) {
  return new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $thiz.apply__O__O($n(g).apply__O__O(x$2$2))));
}
function $f_F1__andThen__F1__F1($thiz, g) {
  return new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $n(g).apply__O__O($thiz.apply__O__O(x$2$2))));
}
function $is_F1(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F1)));
}
function $as_F1(obj) {
  return (($is_F1(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function1"));
}
function $isArrayOf_F1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F1)));
}
function $asArrayOf_F1(obj, depth) {
  return (($isArrayOf_F1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function1;", depth));
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$c_s_LowPriorityImplicits2.prototype = new $h_O();
$c_s_LowPriorityImplicits2.prototype.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $c_s_LowPriorityImplicits2.prototype;
/** @constructor */
function $c_sc_ArrayOps$() {
  this.sc_ArrayOps$__f_fallback = null;
  $n_sc_ArrayOps$ = this;
  this.sc_ArrayOps$__f_fallback = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().sc_ArrayOps$__f_fallback));
}
$c_sc_ArrayOps$.prototype = new $h_O();
$c_sc_ArrayOps$.prototype.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $c_sc_ArrayOps$.prototype;
$c_sc_ArrayOps$.prototype.slice$extension__O__I__I__O = (function(this$, from, until) {
  var lo = ((from > 0) ? from : 0);
  var b = $m_jl_reflect_Array$().getLength__O__I(this$);
  var hi = ((until < b) ? until : b);
  if ((hi > lo)) {
    if ((this$ instanceof $ac_O)) {
      var x2 = $asArrayOf_O(this$, 1);
      return $m_ju_Arrays$().copyOfRange__AO__I__I__AO(x2, lo, hi);
    } else if ((this$ instanceof $ac_I)) {
      var x3 = $asArrayOf_I(this$, 1);
      return $m_ju_Arrays$().copyOfRange__AI__I__I__AI(x3, lo, hi);
    } else if ((this$ instanceof $ac_D)) {
      var x4 = $asArrayOf_D(this$, 1);
      return $m_ju_Arrays$().copyOfRange__AD__I__I__AD(x4, lo, hi);
    } else if ((this$ instanceof $ac_J)) {
      var x5 = $asArrayOf_J(this$, 1);
      return $m_ju_Arrays$().copyOfRange__AJ__I__I__AJ(x5, lo, hi);
    } else if ((this$ instanceof $ac_F)) {
      var x6 = $asArrayOf_F(this$, 1);
      return $m_ju_Arrays$().copyOfRange__AF__I__I__AF(x6, lo, hi);
    } else if ((this$ instanceof $ac_C)) {
      var x7 = $asArrayOf_C(this$, 1);
      return $m_ju_Arrays$().copyOfRange__AC__I__I__AC(x7, lo, hi);
    } else if ((this$ instanceof $ac_B)) {
      var x8 = $asArrayOf_B(this$, 1);
      return $m_ju_Arrays$().copyOfRange__AB__I__I__AB(x8, lo, hi);
    } else if ((this$ instanceof $ac_S)) {
      var x9 = $asArrayOf_S(this$, 1);
      return $m_ju_Arrays$().copyOfRange__AS__I__I__AS(x9, lo, hi);
    } else if ((this$ instanceof $ac_Z)) {
      var x10 = $asArrayOf_Z(this$, 1);
      return $m_ju_Arrays$().copyOfRange__AZ__I__I__AZ(x10, lo, hi);
    } else {
      throw new $c_s_MatchError(this$);
    }
  } else {
    var $x_1 = $m_s_reflect_ClassTag$();
    var this$5 = $n(this$);
    var this$6 = $n($objectGetClass(this$5));
    return $n($x_1.apply__jl_Class__s_reflect_ClassTag(this$6.data.getComponentType())).newArray__I__O(0);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().initClass($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  sc_ArrayOps$: 1
}));
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$();
  }
  return $n_sc_ArrayOps$;
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)));
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"));
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)));
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth));
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    $n(f).apply__O__O($n(it).next__O());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  var i = start;
  var y = (($m_jl_reflect_Array$().getLength__O__I(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && $n(it).hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, $n(it).next__O());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
    return (("" + start) + end);
  } else {
    var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
    return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = $n(b).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  }
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var this$3 = $n(jsb);
    var obj = $n(it).next__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while ($n(it).hasNext__Z()) {
      var this$4 = $n(jsb);
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      var this$5 = $n(jsb);
      var obj$1 = $n(it).next__O();
      this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
    }
  }
  var this$6 = $n(end);
  if ((this$6.length !== 0)) {
    var this$7 = $n(jsb);
    this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  }
  return b;
}
function $is_sc_IterableOnceOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnceOps)));
}
function $as_sc_IterableOnceOps(obj) {
  return (($is_sc_IterableOnceOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnceOps"));
}
function $isArrayOf_sc_IterableOnceOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnceOps)));
}
function $asArrayOf_sc_IterableOnceOps(obj, depth) {
  return (($isArrayOf_sc_IterableOnceOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnceOps;", depth));
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.sc_Iterator$ConcatIteratorCell__f_head = null;
  this.sc_Iterator$ConcatIteratorCell__f_tail = null;
  this.sc_Iterator$ConcatIteratorCell__f_head = head;
  this.sc_Iterator$ConcatIteratorCell__f_tail = tail;
}
$c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$c_sc_Iterator$ConcatIteratorCell.prototype.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $c_sc_Iterator$ConcatIteratorCell.prototype;
$c_sc_Iterator$ConcatIteratorCell.prototype.headIterator__sc_Iterator = (function() {
  return $n($as_sc_IterableOnce($n(this.sc_Iterator$ConcatIteratorCell__f_head).apply__O())).iterator__sc_Iterator();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().initClass($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  sc_Iterator$ConcatIteratorCell: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.sc_StringOps$__f_fallback = null;
  $n_sc_StringOps$ = this;
  this.sc_StringOps$__f_fallback = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().sc_StringOps$__f_fallback));
}
$c_sc_StringOps$.prototype = new $h_O();
$c_sc_StringOps$.prototype.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $c_sc_StringOps$.prototype;
$c_sc_StringOps$.prototype.escape$extension__T__C__T = (function(this$, ch) {
  return (((((ch >= 97) && (ch <= 122)) || ((ch >= 65) && (ch <= 90))) || ((ch >= 48) && (ch <= 57))) ? ("" + $cToS(ch)) : ("\\" + $cToS(ch)));
});
$c_sc_StringOps$.prototype.split$extension__T__C__AT = (function(this$, separator) {
  var this$1 = $n(this$);
  var regex = $m_sc_StringOps$().escape$extension__T__C__T(this$, separator);
  return $f_T__split__T__I__AT(this$1, regex, 0);
});
$c_sc_StringOps$.prototype.headOption$extension__T__s_Option = (function(this$) {
  var this$1 = $n(this$);
  if ((this$1 === "")) {
    return $m_s_None$();
  } else {
    var this$2 = $n(this$);
    return new $c_s_Some($bC($charAt(this$2, 0)));
  }
});
var $d_sc_StringOps$ = new $TypeData().initClass($c_sc_StringOps$, "scala.collection.StringOps$", ({
  sc_StringOps$: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_scg_CommonErrors$() {
}
$c_scg_CommonErrors$.prototype = new $h_O();
$c_scg_CommonErrors$.prototype.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $c_scg_CommonErrors$.prototype;
$c_scg_CommonErrors$.prototype.indexOutOfBounds__I__I__jl_IndexOutOfBoundsException = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().initClass($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  scg_CommonErrors$: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.sci_VectorStatics$__f_empty1 = null;
  this.sci_VectorStatics$__f_empty2 = null;
  this.sci_VectorStatics$__f_empty3 = null;
  this.sci_VectorStatics$__f_empty4 = null;
  this.sci_VectorStatics$__f_empty5 = null;
  this.sci_VectorStatics$__f_empty6 = null;
  $n_sci_VectorStatics$ = this;
  this.sci_VectorStatics$__f_empty1 = new $ac_O(0);
  this.sci_VectorStatics$__f_empty2 = new ($d_O.getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
}
$c_sci_VectorStatics$.prototype = new $h_O();
$c_sci_VectorStatics$.prototype.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $c_sci_VectorStatics$.prototype;
$c_sci_VectorStatics$.prototype.copyPrepend__O__AO__AO = (function(elem, a) {
  var this$1 = $n(a);
  var this$2 = $objectGetClass(this$1);
  var componentType = this$2.data.getComponentType();
  var length = ((1 + $n(a).u.length) | 0);
  var ac = $asArrayOf_O($n(componentType).data.newArray(length), 1);
  var length$1 = $n(a).u.length;
  $systemArraycopyRefs($n(a), 0, $n(ac), 1, length$1);
  $n(ac).set(0, elem);
  return ac;
});
$c_sci_VectorStatics$.prototype.foreachRec__I__AO__F1__V = (function(level, a, f) {
  var i = 0;
  var len = $n(a).u.length;
  if ((level === 0)) {
    while ((i < len)) {
      $n(f).apply__O__O($n(a).get(i));
      i = ((1 + i) | 0);
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.foreachRec__I__AO__F1__V(l, $asArrayOf_O($n(a).get(i), 1), f);
      i = ((1 + i) | 0);
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().initClass($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  sci_VectorStatics$: 1
}));
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
  }
  return $n_sci_VectorStatics$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true;
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y);
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y);
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z($n(x), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2);
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $n(x3).c;
      return (x2$1 === this$1);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $n(x3).c;
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z($n(xn), x3));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z($n(xn), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2);
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === ((4.294967296E9 * hi) + (lo >>> 0.0)));
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return $n(x4).equals__O__Z(x2);
    } else {
      return false;
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return (((4.294967296E9 * hi$1) + (lo$1 >>> 0.0)) === x3$3);
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return $n(x4$2).equals__O__Z(new $c_RTLong(lo$1, hi$1));
    } else {
      return false;
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z($n(xn), yn));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $n(xc).c;
    var this$2 = $n(x2).c;
    return (this$1 === this$2);
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $n(xc).c;
      return (x2$1 === this$3);
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $n(xc).c;
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z($n(x3), xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  sr_BoxesRunTime$: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().initClass(0, "scala.runtime.Null$", ({
  sr_Null$: 1
}));
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return $n(x2).get(idx);
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return $n(x3).get(idx);
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return $n(x4).get(idx);
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return $n(x5).get(idx);
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return $n(x6).get(idx);
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC($n(x7).get(idx));
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return $n(x8).get(idx);
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return $n(x9).get(idx);
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return $n(x10).get(idx);
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    $n(x2).set(idx, value);
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    $n(x3).set(idx, $uI(value));
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    $n(x4).set(idx, $uD(value));
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    $n(x5).set(idx, $uJ(value));
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    $n(x6).set(idx, $uF(value));
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    $n(x7).set(idx, $uC(value));
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    $n(x8).set(idx, $uB(value));
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    $n(x9).set(idx, $uS(value));
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    $n(x10).set(idx, $uZ(value));
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = $n($n(x).productIterator__sc_Iterator());
  var start = ($n(x).productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")");
});
$c_sr_ScalaRunTime$.prototype.wrapRefArray__AO__sci_ArraySeq = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if (($n(xs).u.length === 0)) {
    var this$1 = $m_sci_ArraySeq$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$1);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  sr_ScalaRunTime$: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    if ((((4.294967296E9 * hi) + (lo >>> 0.0)) === dv)) {
      return (lo ^ hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        var lo$1 = $uI(fpBitsDataView.getInt32(0, true));
        var hi$1 = $uI(fpBitsDataView.getInt32(4, true));
        return (lo$1 ^ hi$1);
      }
    }
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3);
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi));
  } else {
    return $dp_hashCode__I($n(x));
  }
});
$c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().initClass($c_sr_Statics$, "scala.runtime.Statics$", ({
  sr_Statics$: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_sjs_js_special_package$() {
}
$c_sjs_js_special_package$.prototype = new $h_O();
$c_sjs_js_special_package$.prototype.constructor = $c_sjs_js_special_package$;
/** @constructor */
function $h_sjs_js_special_package$() {
}
$h_sjs_js_special_package$.prototype = $c_sjs_js_special_package$.prototype;
$c_sjs_js_special_package$.prototype.objectLiteral__sci_Seq__sjs_js_Object = (function(properties) {
  var result = ({});
  $n(properties).foreach__F1__V(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((pair$2$2) => {
    var pair$2 = $as_T2(pair$2$2);
    result[$n(pair$2).T2__f__1] = $n(pair$2).T2__f__2;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().initClass($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  sjs_js_special_package$: 1
}));
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$();
  }
  return $n_sjs_js_special_package$;
}
/** @constructor */
function $c_sjsr_Compat$() {
}
$c_sjsr_Compat$.prototype = new $h_O();
$c_sjsr_Compat$.prototype.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
$h_sjsr_Compat$.prototype = $c_sjsr_Compat$.prototype;
$c_sjsr_Compat$.prototype.toJSVarArgsImpl__sci_Seq__sjs_js_Array = (function(seq) {
  if (false) {
    var x2 = $as_sjsr_WrappedVarArgs(seq);
    return $n(x2).sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array;
  } else {
    var result = [];
    $n(seq).foreach__F1__V(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $uI(result.push(x$2$2)))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().initClass($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  sjsr_Compat$: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
/** @constructor */
function $c_s_util_CommandLineParser$() {
}
$c_s_util_CommandLineParser$.prototype = new $h_O();
$c_s_util_CommandLineParser$.prototype.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {
}
$h_s_util_CommandLineParser$.prototype = $c_s_util_CommandLineParser$.prototype;
$c_s_util_CommandLineParser$.prototype.showError__s_util_CommandLineParser$ParseError__V = (function(err) {
  var where = (($n(err).idx__I() === 0) ? "" : (($n(err).idx__I() === 1) ? " after first argument" : ((" after " + $n(err).idx__I()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + $n(err).msg__T());
  var this$2 = $m_s_Console$();
  var this$3 = $n(this$2.out__Ljava_io_PrintStream());
  this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().initClass($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  s_util_CommandLineParser$: 1
}));
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if ((!$n_s_util_CommandLineParser$)) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.s_util_DynamicVariable__f_v = null;
  this.s_util_DynamicVariable__f_v = init;
}
$c_s_util_DynamicVariable.prototype = new $h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().initClass($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  s_util_DynamicVariable: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length));
});
$c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = $n(x).productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I($n($n(x).productPrefix__T()));
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())));
    }
    var i = 0;
    while ((i < arr)) {
      var $x_1 = h;
      var x$1 = $n(x).productElement__I__O(i);
      h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0);
    }
    return this.finalizeHash__I__I__I(h, arr);
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = $n(xs).iterator__sc_Iterator();
  while ($n(iterator).hasNext__Z()) {
    var x = $n(iterator).next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n);
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = $n(xs).iterator__sc_Iterator();
  var h = seed;
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0);
  }
  var x0 = $n(it).next__O();
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1);
  }
  var x1 = $n(it).next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while ($n(it).hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = $n(it).next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while ($n(it).hasNext__Z()) {
        var $x_1 = h;
        var x$1 = $n(it).next__O();
        h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0);
      }
      return this.finalizeHash__I__I__I(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash__O__I__I = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().getLength__O__I(a);
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break;
    }
    default: {
      var x$1 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last));
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).length__I();
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var x = $n(a).apply__I__O(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break;
    }
    default: {
      var x$1 = $n(a).apply__I__O(0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $n(a).apply__I__O(1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $n(a).apply__I__O(i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $n(a).apply__I__O(i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!$n(elems).isEmpty__Z())) {
    var head = $n(elems).head__O();
    var tail = $as_sci_List($n(elems).tail__O());
    var hash = $m_sr_Statics$().anyHash__O__I(head);
    h = this.mix__I__I__I(h, hash);
    var x1 = rangeState;
    switch (x1) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n));
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mZc$sp__AZ__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, ($n(a).get(0) ? 1231 : 1237)), 1);
      break;
    }
    default: {
      var initial = ($n(a).get(0) ? 1231 : 1237);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = ($n(a).get(1) ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = ($n(a).get(i) ? 1231 : 1237);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, ($n(a).get(i) ? 1231 : 1237));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mBc$sp__AB__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break;
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mCc$sp__AC__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break;
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mDc$sp__AD__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var dv = $n(a).get(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().doubleHash__D__I(dv)), 1);
      break;
    }
    default: {
      var dv$1 = $n(a).get(0);
      var initial = $m_sr_Statics$().doubleHash__D__I(dv$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var dv$2 = $n(a).get(1);
      var prev = $m_sr_Statics$().doubleHash__D__I(dv$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var dv$3 = $n(a).get(i);
        var hash = $m_sr_Statics$().doubleHash__D__I(dv$3);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var dv$4 = $n(a).get(i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().doubleHash__D__I(dv$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mFc$sp__AF__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var fv = $n(a).get(0);
      var this$1 = $m_sr_Statics$();
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, this$1.doubleHash__D__I(fv)), 1);
      break;
    }
    default: {
      var fv$1 = $n(a).get(0);
      var this$2 = $m_sr_Statics$();
      var initial = this$2.doubleHash__D__I(fv$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var fv$2 = $n(a).get(1);
      var this$3 = $m_sr_Statics$();
      var prev = this$3.doubleHash__D__I(fv$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var fv$3 = $n(a).get(i);
        var this$4 = $m_sr_Statics$();
        var hash = this$4.doubleHash__D__I(fv$3);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var fv$4 = $n(a).get(i);
            var this$5 = $m_sr_Statics$();
            h = this.mix__I__I__I($x_2, this$5.doubleHash__D__I(fv$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mIc$sp__AI__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break;
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mJc$sp__AJ__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = $n(a).get(0);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi))), 1);
      break;
    }
    default: {
      var t$1 = $n(a).get(0);
      var lo$1 = t$1.RTLong__f_lo;
      var hi$1 = t$1.RTLong__f_hi;
      var initial = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$1, hi$1));
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var t$2 = $n(a).get(1);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      var prev = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$2, hi$2));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var t$3 = $n(a).get(i);
        var lo$3 = t$3.RTLong__f_lo;
        var hi$3 = t$3.RTLong__f_hi;
        var hash = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$3, hi$3));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = $n(a).get(i);
            var lo$4 = t$4.RTLong__f_lo;
            var hi$4 = t$4.RTLong__f_hi;
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$4, hi$4)));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mSc$sp__AS__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break;
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mVc$sp__Ajl_Void__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, 0), 1);
      break;
    }
    default: {
      h = this.mix__I__I__I(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        if (((rangeDiff !== ((-prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, 0);
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
/** @constructor */
function $c_Lsourcecode_SourceValue() {
}
$c_Lsourcecode_SourceValue.prototype = new $h_O();
$c_Lsourcecode_SourceValue.prototype.constructor = $c_Lsourcecode_SourceValue;
/** @constructor */
function $h_Lsourcecode_SourceValue() {
}
$h_Lsourcecode_SourceValue.prototype = $c_Lsourcecode_SourceValue.prototype;
/** @constructor */
function $c_Lwww_ReactApp$() {
  this.Lwww_ReactApp$__f_component = null;
  $n_Lwww_ReactApp$ = this;
  this.Lwww_ReactApp$__f_component = $n($m_Ljapgolly_scalajs_react_package$().Ljapgolly_scalajs_react_internal_CoreGeneralF__f_ScalaFnComponent).apply__F1__Ljapgolly_scalajs_react_CtorType$Summoner__Lsourcecode_FullName__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $as_jl_Void(_$1);
    $m_Ljapgolly_scalajs_react_package$();
    var initial = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => 0));
    var a = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Ljapgolly_scalajs_react_hooks_Hooks$UseState$().unsafeCreate__F0__Ljapgolly_scalajs_react_hooks_Hooks$UseStateF(initial)));
    $m_Ljapgolly_scalajs_react_util_Trampoline$();
    var ev$3 = new $c_Ljapgolly_scalajs_react_util_Trampoline$Delay(a);
    var f$3 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((count) => {
      var count$1 = $as_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF(count);
      $m_Ljapgolly_scalajs_react_package$();
      var f$proxy3 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var $x_1 = document;
        var this$5 = $n(count$1);
        $x_1.title = (("You clicked " + this$5.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_raw[0]) + " times");
      }));
      var effect = new $c_Ljapgolly_scalajs_react_callback_CallbackTo(($m_Ljapgolly_scalajs_react_util_Trampoline$(), new $c_Ljapgolly_scalajs_react_util_Trampoline$Delay(f$proxy3)));
      var isEffectArg = $m_Ljapgolly_scalajs_react_hooks_Hooks$UseEffectArg$().unit__Ljapgolly_scalajs_react_util_Effect$Dispatch__F1($m_Ljapgolly_scalajs_react_util_DefaultEffects$().Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync);
      var a$1 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        $m_Ljapgolly_scalajs_react_hooks_Hooks$UseEffect$().unsafeCreate__O__F1__V(effect, isEffectArg);
      }));
      $m_Ljapgolly_scalajs_react_util_Trampoline$();
      var ev$2 = new $c_Ljapgolly_scalajs_react_util_Trampoline$Delay(a$1);
      var f$1 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
        $as_jl_Void(x$1);
        $m_Ljapgolly_scalajs_react_package$();
        var initial$1 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => "banana"));
        var a$2 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Ljapgolly_scalajs_react_hooks_Hooks$UseState$().unsafeCreate__F0__Ljapgolly_scalajs_react_hooks_Hooks$UseStateF(initial$1)));
        $m_Ljapgolly_scalajs_react_util_Trampoline$();
        var ev$1 = new $c_Ljapgolly_scalajs_react_util_Trampoline$Delay(a$2);
        var f = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((fruit) => {
          var fruit$1 = $as_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF(fruit);
          var this$34 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
          $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
          $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
          var self$3 = "div";
          var $x_6 = $m_sr_ScalaRunTime$();
          var this$20 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
          $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
          $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
          var self = "p";
          var $x_4 = $m_sr_ScalaRunTime$();
          $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$();
          var this$17 = $n(count$1);
          var v = (("You clicked " + this$17.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_raw[0]) + " times");
          $m_Ljapgolly_scalajs_react_vdom_VdomNode$();
          var xs = $x_4.wrapRefArray__AO__sci_ArraySeq(new ($d_Ljapgolly_scalajs_react_vdom_TagMod.getArrayOf().constr)([new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1(v)]));
          var $x_5 = $f_Ljapgolly_scalajs_react_vdom_TagLite__apply__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(this$20, self, xs);
          var this$27 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
          $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
          $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
          var self$1 = "button";
          var xs$1 = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Ljapgolly_scalajs_react_vdom_TagMod.getArrayOf().constr)([$n($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up).Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$__f_onClick).$minus$minus$greater__F0__F1__Ljapgolly_scalajs_react_vdom_TagMod(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
            $m_Ljapgolly_scalajs_react_Reusable$();
            var this$23 = $n(count$1);
            var r = $f_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF__modState__Ljapgolly_scalajs_react_Reusable(this$23);
            var ev$4 = $n($as_F1($n(r).value__O())).apply__O__O(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
              var _$2$1 = $uI(_$2);
              return ((1 + _$2$1) | 0);
            })));
            return new $c_Ljapgolly_scalajs_react_callback_CallbackTo(((ev$4 === null) ? null : $n($as_Ljapgolly_scalajs_react_callback_CallbackTo(ev$4)).Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline));
          })), $m_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$().Ljapgolly_scalajs_react_vdom_Attr$EventCallback$__f_defaultSync), ($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Click meeeeeeeeeeeeeeeee"))]));
          var $x_3 = $f_Ljapgolly_scalajs_react_vdom_TagLite__apply__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(this$27, self$1, xs$1);
          var this$33 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
          $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
          $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
          var self$2 = "p";
          var $x_2 = $m_sr_ScalaRunTime$();
          $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$();
          var this$30 = $n(fruit$1);
          var v$1 = (("Your favourite fruit is a " + this$30.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_raw[0]) + "!");
          $m_Ljapgolly_scalajs_react_vdom_VdomNode$();
          var xs$2 = $x_2.wrapRefArray__AO__sci_ArraySeq(new ($d_Ljapgolly_scalajs_react_vdom_TagMod.getArrayOf().constr)([new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1(v$1)]));
          var xs$3 = $x_6.wrapRefArray__AO__sci_ArraySeq(new ($d_Ljapgolly_scalajs_react_vdom_TagMod.getArrayOf().constr)([$x_5, $x_3, $f_Ljapgolly_scalajs_react_vdom_TagLite__apply__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(this$33, self$2, xs$2)]));
          return $f_Ljapgolly_scalajs_react_vdom_TagLite__apply__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(this$34, self$3, xs$3);
        }));
        return new $c_Ljapgolly_scalajs_react_component_Delayed($f_Ljapgolly_scalajs_react_util_Trampoline__map__F1__Ljapgolly_scalajs_react_util_Trampoline(ev$1, f));
      }));
      var g = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$2) => {
        var _$1$3 = ((_$1$2 === null) ? null : $n($as_Ljapgolly_scalajs_react_component_Delayed(_$1$2)).Ljapgolly_scalajs_react_component_Delayed__f_trampoline);
        return _$1$3;
      }));
      var f$2 = $f_F1__andThen__F1__F1(f$1, g);
      return new $c_Ljapgolly_scalajs_react_component_Delayed(new $c_Ljapgolly_scalajs_react_util_Trampoline$FlatMap(ev$2, f$2));
    }));
    var g$1 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$4) => {
      var _$1$5 = ((_$1$4 === null) ? null : $n($as_Ljapgolly_scalajs_react_component_Delayed(_$1$4)).Ljapgolly_scalajs_react_component_Delayed__f_trampoline);
      return _$1$5;
    }));
    var f$4 = $f_F1__andThen__F1__F1(f$3, g$1);
    return new $c_Ljapgolly_scalajs_react_component_Delayed(new $c_Ljapgolly_scalajs_react_util_Trampoline$FlatMap(ev$3, f$4));
  })), $m_Ljapgolly_scalajs_react_CtorType$Summoner$().summonN__Ljapgolly_scalajs_react_internal_Singleton__Ljapgolly_scalajs_react_CtorType$Summoner($m_Ljapgolly_scalajs_react_internal_Singleton$().Ljapgolly_scalajs_react_internal_Singleton$__f_BoxUnit), new $c_Lsourcecode_FullName("www.ReactApp.component"));
}
$c_Lwww_ReactApp$.prototype = new $h_O();
$c_Lwww_ReactApp$.prototype.constructor = $c_Lwww_ReactApp$;
/** @constructor */
function $h_Lwww_ReactApp$() {
}
$h_Lwww_ReactApp$.prototype = $c_Lwww_ReactApp$.prototype;
var $d_Lwww_ReactApp$ = new $TypeData().initClass($c_Lwww_ReactApp$, "www.ReactApp$", ({
  Lwww_ReactApp$: 1
}));
var $n_Lwww_ReactApp$;
function $m_Lwww_ReactApp$() {
  if ((!$n_Lwww_ReactApp$)) {
    $n_Lwww_ReactApp$ = new $c_Lwww_ReactApp$();
  }
  return $n_Lwww_ReactApp$;
}
/** @constructor */
function $c_Lwww_ReactApp$package$() {
}
$c_Lwww_ReactApp$package$.prototype = new $h_O();
$c_Lwww_ReactApp$package$.prototype.constructor = $c_Lwww_ReactApp$package$;
/** @constructor */
function $h_Lwww_ReactApp$package$() {
}
$h_Lwww_ReactApp$package$.prototype = $c_Lwww_ReactApp$package$.prototype;
$c_Lwww_ReactApp$package$.prototype.main__V = (function() {
  var container = document.getElementById("app");
  var this$4 = $n($m_Ljapgolly_scalajs_react_ReactDOMClient$().createRoot__Lorg_scalajs_dom_NodeSelector__Ljapgolly_scalajs_react_ReactRoot(container));
  var c = $m_Lwww_ReactApp$().Lwww_ReactApp$__f_component;
  var node = $n($as_Ljapgolly_scalajs_react_CtorType$Nullary($n(c).ctor__Ljapgolly_scalajs_react_CtorType())).apply__O();
  var $x_1 = this$4.Ljapgolly_scalajs_react_ReactRoot__f_raw;
  var _$3 = $as_Ljapgolly_scalajs_react_component_Generic$UnmountedRaw(node);
  $x_1.render($n(_$3).raw__Ljapgolly_scalajs_react_facade_React$ComponentElement());
});
var $d_Lwww_ReactApp$package$ = new $TypeData().initClass($c_Lwww_ReactApp$package$, "www.ReactApp$package$", ({
  Lwww_ReactApp$package$: 1
}));
var $n_Lwww_ReactApp$package$;
function $m_Lwww_ReactApp$package$() {
  if ((!$n_Lwww_ReactApp$package$)) {
    $n_Lwww_ReactApp$package$ = new $c_Lwww_ReactApp$package$();
  }
  return $n_Lwww_ReactApp$package$;
}
function $s_Lwww_main__main__AT__V(args) {
  try {
    $m_Lwww_ReactApp$package$().main__V();
  } catch (e) {
    if (false) {
      var error = $as_s_util_CommandLineParser$ParseError(e);
      $m_s_util_CommandLineParser$().showError__s_util_CommandLineParser$ParseError__V(error);
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType$Nullary(unmodified, construct, mods) {
  this.Ljapgolly_scalajs_react_CtorType$Nullary__f_unmodified = null;
  this.Ljapgolly_scalajs_react_CtorType$Nullary__f_construct = null;
  this.Ljapgolly_scalajs_react_CtorType$Nullary__f_mods = null;
  this.Ljapgolly_scalajs_react_CtorType$Nullary__f_unmodified = unmodified;
  this.Ljapgolly_scalajs_react_CtorType$Nullary__f_construct = construct;
  this.Ljapgolly_scalajs_react_CtorType$Nullary__f_mods = mods;
}
$c_Ljapgolly_scalajs_react_CtorType$Nullary.prototype = new $h_Ljapgolly_scalajs_react_CtorType();
$c_Ljapgolly_scalajs_react_CtorType$Nullary.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType$Nullary;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType$Nullary() {
}
$h_Ljapgolly_scalajs_react_CtorType$Nullary.prototype = $c_Ljapgolly_scalajs_react_CtorType$Nullary.prototype;
$c_Ljapgolly_scalajs_react_CtorType$Nullary.prototype.apply__O = (function() {
  var x = this.Ljapgolly_scalajs_react_CtorType$Nullary__f_mods;
  var f = this.Ljapgolly_scalajs_react_CtorType$Nullary__f_construct;
  return ((x === (void 0)) ? this.Ljapgolly_scalajs_react_CtorType$Nullary__f_unmodified : $n(f).apply__O__O(x));
});
function $as_Ljapgolly_scalajs_react_CtorType$Nullary(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_CtorType$Nullary) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.CtorType$Nullary"));
}
function $isArrayOf_Ljapgolly_scalajs_react_CtorType$Nullary(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_CtorType$Nullary)));
}
function $asArrayOf_Ljapgolly_scalajs_react_CtorType$Nullary(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_CtorType$Nullary(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.CtorType$Nullary;", depth));
}
var $d_Ljapgolly_scalajs_react_CtorType$Nullary = new $TypeData().initClass($c_Ljapgolly_scalajs_react_CtorType$Nullary, "japgolly.scalajs.react.CtorType$Nullary", ({
  Ljapgolly_scalajs_react_CtorType$Nullary: 1,
  Ljapgolly_scalajs_react_CtorType: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$() {
}
$c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType$ProfunctorN$() {
}
$h_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype = $c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype;
$c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype.rmap__Ljapgolly_scalajs_react_CtorType$Nullary__F1__Ljapgolly_scalajs_react_CtorType$Nullary = (function(x, g) {
  return new $c_Ljapgolly_scalajs_react_CtorType$Nullary($n(g).apply__O__O($n(x).Ljapgolly_scalajs_react_CtorType$Nullary__f_unmodified), $n(g).compose__F1__F1($n(x).Ljapgolly_scalajs_react_CtorType$Nullary__f_construct), $n(x).Ljapgolly_scalajs_react_CtorType$Nullary__f_mods);
});
$c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype.dimap__Ljapgolly_scalajs_react_CtorType$Nullary__F1__F1__Ljapgolly_scalajs_react_CtorType$Nullary = (function(x, f, g) {
  return new $c_Ljapgolly_scalajs_react_CtorType$Nullary($n(g).apply__O__O($n(x).Ljapgolly_scalajs_react_CtorType$Nullary__f_unmodified), $n(g).compose__F1__F1($n(x).Ljapgolly_scalajs_react_CtorType$Nullary__f_construct), $n(x).Ljapgolly_scalajs_react_CtorType$Nullary__f_mods);
});
var $d_Ljapgolly_scalajs_react_CtorType$ProfunctorN$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$, "japgolly.scalajs.react.CtorType$ProfunctorN$", ({
  Ljapgolly_scalajs_react_CtorType$ProfunctorN$: 1,
  Ljapgolly_scalajs_react_internal_Profunctor: 1
}));
var $n_Ljapgolly_scalajs_react_CtorType$ProfunctorN$;
function $m_Ljapgolly_scalajs_react_CtorType$ProfunctorN$() {
  if ((!$n_Ljapgolly_scalajs_react_CtorType$ProfunctorN$)) {
    $n_Ljapgolly_scalajs_react_CtorType$ProfunctorN$ = new $c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$();
  }
  return $n_Ljapgolly_scalajs_react_CtorType$ProfunctorN$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1(f$8, p$3) {
  this.Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_summon = null;
  this.Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_pf = null;
  this.Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_summon = f$8;
  this.Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_pf = p$3;
}
$c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1() {
}
$h_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1.prototype = $c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1.prototype;
var $d_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1 = new $TypeData().initClass($c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1, "japgolly.scalajs.react.CtorType$Summoner$$anon$1", ({
  Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1: 1,
  Ljapgolly_scalajs_react_CtorType$Summoner: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_JsFn$() {
  this.Ljapgolly_scalajs_react_component_JsFn$__f_japgolly$scalajs$react$component$JsFn$$$constUnit = null;
  $n_Ljapgolly_scalajs_react_component_JsFn$ = this;
  this.Ljapgolly_scalajs_react_component_JsFn$__f_japgolly$scalajs$react$component$JsFn$$$constUnit = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => (void 0)));
}
$c_Ljapgolly_scalajs_react_component_JsFn$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_JsFn$.prototype.constructor = $c_Ljapgolly_scalajs_react_component_JsFn$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_JsFn$() {
}
$h_Ljapgolly_scalajs_react_component_JsFn$.prototype = $c_Ljapgolly_scalajs_react_component_JsFn$.prototype;
$c_Ljapgolly_scalajs_react_component_JsFn$.prototype.force__O__Ljapgolly_scalajs_react_CtorType$Summoner__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(raw, s) {
  var this$2 = $n($n(s).Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_pf);
  var f = $n($n(s).Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_summon).apply__O__O(raw);
  var m = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((r) => new $c_Ljapgolly_scalajs_react_component_JsFn$$anon$3(r)));
  var c = this$2.rmap__Ljapgolly_scalajs_react_CtorType$Nullary__F1__Ljapgolly_scalajs_react_CtorType$Nullary($as_Ljapgolly_scalajs_react_CtorType$Nullary(f), m);
  var pf = $n(s).Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_pf;
  return new $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1(raw, c, pf, this);
});
var $d_Ljapgolly_scalajs_react_component_JsFn$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_component_JsFn$, "japgolly.scalajs.react.component.JsFn$", ({
  Ljapgolly_scalajs_react_component_JsFn$: 1,
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate: 1
}));
var $n_Ljapgolly_scalajs_react_component_JsFn$;
function $m_Ljapgolly_scalajs_react_component_JsFn$() {
  if ((!$n_Ljapgolly_scalajs_react_component_JsFn$)) {
    $n_Ljapgolly_scalajs_react_component_JsFn$ = new $c_Ljapgolly_scalajs_react_component_JsFn$();
  }
  return $n_Ljapgolly_scalajs_react_component_JsFn$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_ScalaFn$() {
}
$c_Ljapgolly_scalajs_react_component_ScalaFn$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_ScalaFn$.prototype.constructor = $c_Ljapgolly_scalajs_react_component_ScalaFn$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_ScalaFn$() {
}
$h_Ljapgolly_scalajs_react_component_ScalaFn$.prototype = $c_Ljapgolly_scalajs_react_component_ScalaFn$.prototype;
$c_Ljapgolly_scalajs_react_component_ScalaFn$.prototype.japgolly$scalajs$react$component$ScalaFn$$$create__T__F1__Ljapgolly_scalajs_react_CtorType$Summoner__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(displayName, render, s) {
  var jsRender = $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1($n(render).andThen__F1__F1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    var _$1$1 = ((_$1 === null) ? null : $n($as_Ljapgolly_scalajs_react_component_Delayed(_$1)).Ljapgolly_scalajs_react_component_Delayed__f_trampoline);
    var this$2 = $n(_$1$1);
    return $n($as_Ljapgolly_scalajs_react_vdom_VdomNode($m_Ljapgolly_scalajs_react_util_Trampoline$().run__Ljapgolly_scalajs_react_util_Trampoline__O(this$2))).rawNode__O();
  }))));
  jsRender.displayName = displayName;
  return $n($n($m_Ljapgolly_scalajs_react_component_JsFn$().force__O__Ljapgolly_scalajs_react_CtorType$Summoner__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot(jsRender, s)).cmapCtorProps__F1__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $m_Ljapgolly_scalajs_react_internal_Box$();
    var fields = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("a", _$2)]));
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
  })))).mapUnmounted__F1__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
    var _$3$1 = $as_Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot(_$3);
    return $n(_$3$1).mapUnmountedProps__F1__Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.a)));
  })));
});
$c_Ljapgolly_scalajs_react_component_ScalaFn$.prototype.apply__F1__Ljapgolly_scalajs_react_CtorType$Summoner__Lsourcecode_FullName__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(render, s, name) {
  return this.japgolly$scalajs$react$component$ScalaFn$$$create__T__F1__Ljapgolly_scalajs_react_CtorType$Summoner__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot($f_Ljapgolly_scalajs_react_component_DerivedDisplayName__derivedDisplayName__Lsourcecode_FullName__T(this, name), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b) => {
    var ev$3 = $n(render).apply__O__O(b.a);
    return new $c_Ljapgolly_scalajs_react_component_Delayed(((ev$3 === null) ? null : $n($as_Ljapgolly_scalajs_react_component_Delayed(ev$3)).Ljapgolly_scalajs_react_component_Delayed__f_trampoline));
  })), s);
});
var $d_Ljapgolly_scalajs_react_component_ScalaFn$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_component_ScalaFn$, "japgolly.scalajs.react.component.ScalaFn$", ({
  Ljapgolly_scalajs_react_component_ScalaFn$: 1,
  Ljapgolly_scalajs_react_component_DerivedDisplayName: 1
}));
var $n_Ljapgolly_scalajs_react_component_ScalaFn$;
function $m_Ljapgolly_scalajs_react_component_ScalaFn$() {
  if ((!$n_Ljapgolly_scalajs_react_component_ScalaFn$)) {
    $n_Ljapgolly_scalajs_react_component_ScalaFn$ = new $c_Ljapgolly_scalajs_react_component_ScalaFn$();
  }
  return $n_Ljapgolly_scalajs_react_component_ScalaFn$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First(init) {
  this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First__f_init = null;
  this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First__f_init = init;
}
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First.prototype.constructor = $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First;
/** @constructor */
function $h_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First() {
}
$h_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First.prototype = $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First.prototype;
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First.prototype.next__F1__Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep__Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent = (function(f, step) {
  return $n(step).next__F1__F1__T__Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent(this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First__f_init, f, "");
});
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First.prototype.next__F1__Ljapgolly_scalajs_react_hooks_Api$AbstractStep__O = (function(f, step) {
  return this.next__F1__Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep__Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent(f, $as_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep(step));
});
var $d_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First = new $TypeData().initClass($c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First, "japgolly.scalajs.react.hooks.CustomHook$Builder$First", ({
  Ljapgolly_scalajs_react_hooks_CustomHook$Builder$First: 1,
  Ljapgolly_scalajs_react_hooks_Api$Primary: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep() {
}
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep.prototype.constructor = $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep;
/** @constructor */
function $h_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep() {
}
$h_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep.prototype = $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep.prototype;
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep.prototype.next__F1__F1__T__Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent = (function(initFirst, hook1, displayName) {
  var build = new $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1(initFirst, hook1);
  return new $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent(displayName, build);
});
function $as_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.hooks.CustomHook$Builder$FirstStep"));
}
function $isArrayOf_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep)));
}
function $asArrayOf_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.hooks.CustomHook$Builder$FirstStep;", depth));
}
var $d_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep = new $TypeData().initClass($c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep, "japgolly.scalajs.react.hooks.CustomHook$Builder$FirstStep", ({
  Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep: 1,
  Ljapgolly_scalajs_react_hooks_Api$AbstractStep: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1(initFirst$4, hook1$2) {
  this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1__f_initFirst$2 = null;
  this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1__f_hook1$1 = null;
  this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1__f_initFirst$2 = initFirst$4;
  this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1__f_hook1$1 = hook1$2;
}
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1.prototype.constructor = $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1() {
}
$h_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1.prototype = $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1.prototype;
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1.prototype.apply__F1__F1 = (function(f) {
  $m_Ljapgolly_scalajs_react_hooks_CustomHook$();
  var f$1 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((i) => {
    $n(this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1__f_initFirst$2).apply__O__O(i);
    var h1 = $n(this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1__f_hook1$1).apply__O__O(i);
    var ctx = new $c_Ljapgolly_scalajs_react_hooks_HookCtx$I1(i, h1);
    return $n(f).apply__O__O(ctx);
  }));
  return f$1;
});
var $d_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1 = new $TypeData().initClass($c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1, "japgolly.scalajs.react.hooks.CustomHook$Builder$FirstStep$$anon$1", ({
  Ljapgolly_scalajs_react_hooks_CustomHook$Builder$FirstStep$$anon$1: 1,
  Ljapgolly_scalajs_react_hooks_CustomHook$Builder$BuildFn: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_hooks_HookCtx$I1(input, hook1) {
  this.Ljapgolly_scalajs_react_hooks_HookCtx$I0__f_input = null;
  this.Ljapgolly_scalajs_react_hooks_HookCtx$I1__f_hook1 = null;
  this.Ljapgolly_scalajs_react_hooks_HookCtx$I1__f_hook1 = hook1;
  $ct_Ljapgolly_scalajs_react_hooks_HookCtx$I0__O__(this, input);
}
$c_Ljapgolly_scalajs_react_hooks_HookCtx$I1.prototype = new $h_Ljapgolly_scalajs_react_hooks_HookCtx$I0();
$c_Ljapgolly_scalajs_react_hooks_HookCtx$I1.prototype.constructor = $c_Ljapgolly_scalajs_react_hooks_HookCtx$I1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_hooks_HookCtx$I1() {
}
$h_Ljapgolly_scalajs_react_hooks_HookCtx$I1.prototype = $c_Ljapgolly_scalajs_react_hooks_HookCtx$I1.prototype;
$c_Ljapgolly_scalajs_react_hooks_HookCtx$I1.prototype.toString__T = (function() {
  return (((("HookCtx.withInput(\n  input = " + this.Ljapgolly_scalajs_react_hooks_HookCtx$I0__f_input) + ",\n  hook1 = ") + this.Ljapgolly_scalajs_react_hooks_HookCtx$I1__f_hook1) + ")");
});
function $as_Ljapgolly_scalajs_react_hooks_HookCtx$I1(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_hooks_HookCtx$I1) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.hooks.HookCtx$I1"));
}
function $isArrayOf_Ljapgolly_scalajs_react_hooks_HookCtx$I1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_hooks_HookCtx$I1)));
}
function $asArrayOf_Ljapgolly_scalajs_react_hooks_HookCtx$I1(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_hooks_HookCtx$I1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.hooks.HookCtx$I1;", depth));
}
var $d_Ljapgolly_scalajs_react_hooks_HookCtx$I1 = new $TypeData().initClass($c_Ljapgolly_scalajs_react_hooks_HookCtx$I1, "japgolly.scalajs.react.hooks.HookCtx$I1", ({
  Ljapgolly_scalajs_react_hooks_HookCtx$I1: 1,
  Ljapgolly_scalajs_react_hooks_HookCtx$I0: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2(r$5, oss$1, FF$1) {
  this.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_FF$2 = null;
  this.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_raw = null;
  this.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_originalSetState = null;
  this.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_FF$2 = FF$1;
  this.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_raw = r$5;
  this.Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2__f_originalSetState = oss$1;
}
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2.prototype.constructor = $c_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2;
/** @constructor */
function $h_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2() {
}
$h_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2.prototype = $c_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2.prototype;
var $d_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2 = new $TypeData().initClass($c_Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2, "japgolly.scalajs.react.hooks.Hooks$UseStateF$$anon$2", ({
  Ljapgolly_scalajs_react_hooks_Hooks$UseStateF$$anon$2: 1,
  Ljapgolly_scalajs_react_hooks_Hooks$UseStateF: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_Trampoline$Delay(value) {
  this.Ljapgolly_scalajs_react_util_Trampoline$Delay__f_value = null;
  this.Ljapgolly_scalajs_react_util_Trampoline$Delay__f_value = value;
}
$c_Ljapgolly_scalajs_react_util_Trampoline$Delay.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_Trampoline$Delay.prototype.constructor = $c_Ljapgolly_scalajs_react_util_Trampoline$Delay;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_Trampoline$Delay() {
}
$h_Ljapgolly_scalajs_react_util_Trampoline$Delay.prototype = $c_Ljapgolly_scalajs_react_util_Trampoline$Delay.prototype;
function $as_Ljapgolly_scalajs_react_util_Trampoline$Delay(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_util_Trampoline$Delay) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.util.Trampoline$Delay"));
}
function $isArrayOf_Ljapgolly_scalajs_react_util_Trampoline$Delay(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_util_Trampoline$Delay)));
}
function $asArrayOf_Ljapgolly_scalajs_react_util_Trampoline$Delay(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_util_Trampoline$Delay(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.util.Trampoline$Delay;", depth));
}
var $d_Ljapgolly_scalajs_react_util_Trampoline$Delay = new $TypeData().initClass($c_Ljapgolly_scalajs_react_util_Trampoline$Delay, "japgolly.scalajs.react.util.Trampoline$Delay", ({
  Ljapgolly_scalajs_react_util_Trampoline$Delay: 1,
  Ljapgolly_scalajs_react_util_Trampoline: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_Trampoline$FlatMap(from, f) {
  this.Ljapgolly_scalajs_react_util_Trampoline$FlatMap__f_from = null;
  this.Ljapgolly_scalajs_react_util_Trampoline$FlatMap__f_f = null;
  this.Ljapgolly_scalajs_react_util_Trampoline$FlatMap__f_from = from;
  this.Ljapgolly_scalajs_react_util_Trampoline$FlatMap__f_f = f;
}
$c_Ljapgolly_scalajs_react_util_Trampoline$FlatMap.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_Trampoline$FlatMap.prototype.constructor = $c_Ljapgolly_scalajs_react_util_Trampoline$FlatMap;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_Trampoline$FlatMap() {
}
$h_Ljapgolly_scalajs_react_util_Trampoline$FlatMap.prototype = $c_Ljapgolly_scalajs_react_util_Trampoline$FlatMap.prototype;
function $as_Ljapgolly_scalajs_react_util_Trampoline$FlatMap(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_util_Trampoline$FlatMap) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.util.Trampoline$FlatMap"));
}
function $isArrayOf_Ljapgolly_scalajs_react_util_Trampoline$FlatMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_util_Trampoline$FlatMap)));
}
function $asArrayOf_Ljapgolly_scalajs_react_util_Trampoline$FlatMap(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_util_Trampoline$FlatMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.util.Trampoline$FlatMap;", depth));
}
var $d_Ljapgolly_scalajs_react_util_Trampoline$FlatMap = new $TypeData().initClass($c_Ljapgolly_scalajs_react_util_Trampoline$FlatMap, "japgolly.scalajs.react.util.Trampoline$FlatMap", ({
  Ljapgolly_scalajs_react_util_Trampoline$FlatMap: 1,
  Ljapgolly_scalajs_react_util_Trampoline: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_Trampoline$Pure(value) {
  this.Ljapgolly_scalajs_react_util_Trampoline$Pure__f_value = null;
  this.Ljapgolly_scalajs_react_util_Trampoline$Pure__f_value = value;
}
$c_Ljapgolly_scalajs_react_util_Trampoline$Pure.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_Trampoline$Pure.prototype.constructor = $c_Ljapgolly_scalajs_react_util_Trampoline$Pure;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_Trampoline$Pure() {
}
$h_Ljapgolly_scalajs_react_util_Trampoline$Pure.prototype = $c_Ljapgolly_scalajs_react_util_Trampoline$Pure.prototype;
function $as_Ljapgolly_scalajs_react_util_Trampoline$Pure(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_util_Trampoline$Pure) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.util.Trampoline$Pure"));
}
function $isArrayOf_Ljapgolly_scalajs_react_util_Trampoline$Pure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_util_Trampoline$Pure)));
}
function $asArrayOf_Ljapgolly_scalajs_react_util_Trampoline$Pure(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_util_Trampoline$Pure(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.util.Trampoline$Pure;", depth));
}
var $d_Ljapgolly_scalajs_react_util_Trampoline$Pure = new $TypeData().initClass($c_Ljapgolly_scalajs_react_util_Trampoline$Pure, "japgolly.scalajs.react.util.Trampoline$Pure", ({
  Ljapgolly_scalajs_react_util_Trampoline$Pure: 1,
  Ljapgolly_scalajs_react_util_Trampoline: 1
}));
function $as_Ljapgolly_scalajs_react_util_Trampoline$Suspend(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.util.Trampoline$Suspend"));
}
function $isArrayOf_Ljapgolly_scalajs_react_util_Trampoline$Suspend(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_util_Trampoline$Suspend)));
}
function $asArrayOf_Ljapgolly_scalajs_react_util_Trampoline$Suspend(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_util_Trampoline$Suspend(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.util.Trampoline$Suspend;", depth));
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Attr$Event(name) {
  this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName = null;
  this.Ljapgolly_scalajs_react_vdom_Attr$Event__f_name = null;
  this.Ljapgolly_scalajs_react_vdom_Attr$Event__f_name = name;
  $ct_Ljapgolly_scalajs_react_vdom_Attr__T__(this, name);
}
$c_Ljapgolly_scalajs_react_vdom_Attr$Event.prototype = new $h_Ljapgolly_scalajs_react_vdom_Attr();
$c_Ljapgolly_scalajs_react_vdom_Attr$Event.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Attr$Event;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Attr$Event() {
}
$h_Ljapgolly_scalajs_react_vdom_Attr$Event.prototype = $c_Ljapgolly_scalajs_react_vdom_Attr$Event.prototype;
$c_Ljapgolly_scalajs_react_vdom_Attr$Event.prototype.$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod = (function(a, t) {
  var f$1 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b) => {
    var b$1 = $as_Ljapgolly_scalajs_react_vdom_VdomBuilder(b);
    $n(t).apply__O__O__O(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((f) => {
      $n($n(b$1).Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addEventHandler).apply__O__O__O(this.Ljapgolly_scalajs_react_vdom_Attr$Event__f_name, f);
    })), a);
  }));
  return new $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3(f$1);
});
$c_Ljapgolly_scalajs_react_vdom_Attr$Event.prototype.$minus$minus$greater__F0__F1__Ljapgolly_scalajs_react_vdom_TagMod = (function(callback, F) {
  return this.$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod($n(F).apply__O__O(callback), $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$().Ljapgolly_scalajs_react_vdom_Attr$ValueType$__f_direct);
});
var $d_Ljapgolly_scalajs_react_vdom_Attr$Event = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_Attr$Event, "japgolly.scalajs.react.vdom.Attr$Event", ({
  Ljapgolly_scalajs_react_vdom_Attr$Event: 1,
  Ljapgolly_scalajs_react_vdom_Attr: 1
}));
function $f_Ljapgolly_scalajs_react_vdom_Attr$EventCallback2__dispatch__Ljapgolly_scalajs_react_util_Effect$Dispatch__F1($thiz, F) {
  return new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((fa) => {
    var fa$1 = $as_F0(fa);
    return $f_Ljapgolly_scalajs_react_util_Effect$Dispatch$WithDefaults__dispatchFn__F0__sjs_js_Function0($n(F), fa$1);
  }));
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Exports$() {
  this.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf = null;
  this.Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr = null;
  $ct_Ljapgolly_scalajs_react_vdom_Exports__(this);
}
$c_Ljapgolly_scalajs_react_vdom_Exports$.prototype = new $h_Ljapgolly_scalajs_react_vdom_Exports();
$c_Ljapgolly_scalajs_react_vdom_Exports$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Exports$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Exports$() {
}
$h_Ljapgolly_scalajs_react_vdom_Exports$.prototype = $c_Ljapgolly_scalajs_react_vdom_Exports$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_Exports$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_Exports$, "japgolly.scalajs.react.vdom.Exports$", ({
  Ljapgolly_scalajs_react_vdom_Exports$: 1,
  Ljapgolly_scalajs_react_vdom_Exports: 1
}));
var $n_Ljapgolly_scalajs_react_vdom_Exports$;
function $m_Ljapgolly_scalajs_react_vdom_Exports$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_Exports$)) {
    $n_Ljapgolly_scalajs_react_vdom_Exports$ = new $c_Ljapgolly_scalajs_react_vdom_Exports$();
  }
  return $n_Ljapgolly_scalajs_react_vdom_Exports$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$() {
}
$c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_HtmlTagOf$() {
}
$h_Ljapgolly_scalajs_react_vdom_HtmlTagOf$.prototype = $c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_HtmlTagOf$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$, "japgolly.scalajs.react.vdom.HtmlTagOf$", ({
  Ljapgolly_scalajs_react_vdom_HtmlTagOf$: 1,
  Ljapgolly_scalajs_react_vdom_TagLite: 1
}));
var $n_Ljapgolly_scalajs_react_vdom_HtmlTagOf$;
function $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_HtmlTagOf$)) {
    $n_Ljapgolly_scalajs_react_vdom_HtmlTagOf$ = new $c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  }
  return $n_Ljapgolly_scalajs_react_vdom_HtmlTagOf$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_HtmlTags$() {
}
$c_Ljapgolly_scalajs_react_vdom_HtmlTags$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_HtmlTags$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_HtmlTags$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_HtmlTags$() {
}
$h_Ljapgolly_scalajs_react_vdom_HtmlTags$.prototype = $c_Ljapgolly_scalajs_react_vdom_HtmlTags$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_HtmlTags$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_HtmlTags$, "japgolly.scalajs.react.vdom.HtmlTags$", ({
  Ljapgolly_scalajs_react_vdom_HtmlTags$: 1,
  Ljapgolly_scalajs_react_vdom_HtmlTags: 1
}));
var $n_Ljapgolly_scalajs_react_vdom_HtmlTags$;
function $m_Ljapgolly_scalajs_react_vdom_HtmlTags$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_HtmlTags$)) {
    $n_Ljapgolly_scalajs_react_vdom_HtmlTags$ = new $c_Ljapgolly_scalajs_react_vdom_HtmlTags$();
  }
  return $n_Ljapgolly_scalajs_react_vdom_HtmlTags$;
}
function $f_Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr1__$init$__V($thiz) {
  var this$2 = $m_s_$less$colon$less$();
  var k = this$2.s_$less$colon$less$__f_singleton;
  $f_Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr1__vdomAttrVtKey__F1__F2($thiz, k);
}
function $f_Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr1__vdomAttrVtKey__F1__F2($thiz, k) {
  var fn$proxy2 = new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((b, a) => {
    var b$1 = $as_F1(b);
    $n(b$1).apply__O__O($n(k).apply__O__O(a));
  }));
  return fn$proxy2;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3(f$2) {
  this.Ljapgolly_scalajs_react_vdom_TagMod$$anon$3__f_f$1 = null;
  this.Ljapgolly_scalajs_react_vdom_TagMod$$anon$3__f_f$1 = f$2;
}
$c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3() {
}
$h_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3.prototype = $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3.prototype;
$c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3.prototype.applyTo__Ljapgolly_scalajs_react_vdom_VdomBuilder__V = (function(b) {
  $n(this.Ljapgolly_scalajs_react_vdom_TagMod$$anon$3__f_f$1).apply__O__O(b);
});
var $d_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3 = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3, "japgolly.scalajs.react.vdom.TagMod$$anon$3", ({
  Ljapgolly_scalajs_react_vdom_TagMod$$anon$3: 1,
  Ljapgolly_scalajs_react_vdom_TagMod: 1
}));
function $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__$init$__V($thiz) {
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props = ({});
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_styles = ({});
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_children = [];
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_key = (void 0);
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_nonEmptyClassName = (void 0);
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addEventHandler = new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((k, g) => {
    var k$1 = $as_T(k);
    var o = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props;
    var cur = o[k$1];
    if ((cur === (void 0))) {
      var $x_1 = g;
    } else {
      if ((cur === (void 0))) {
        throw new $c_ju_NoSuchElementException("undefined.get");
      }
      var $x_1 = ((e) => {
        cur(e);
        return g(e);
      });
    }
    o[k$1] = $x_1;
  }));
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addStyle = new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$5, _$6) => {
    var _$5$1 = $as_T(_$5);
    var o$1 = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_styles;
    o$1[_$5$1] = _$6;
  }));
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_appendChild = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$7) => {
    $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_children.push(_$7);
  }));
}
function $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__addClassNameToProps__V($thiz) {
  var x = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_nonEmptyClassName;
  if ((x !== (void 0))) {
    var o = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props;
    o.className = x;
  }
}
function $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__addStyleToProps__V($thiz) {
  var o = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_styles;
  var x = (($uI(Object.keys(o).length) === 0) ? (void 0) : o);
  if ((x !== (void 0))) {
    var o$1 = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props;
    o$1.style = x;
  }
}
function $is_Ljapgolly_scalajs_react_vdom_VdomNode(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_vdom_VdomNode)));
}
function $as_Ljapgolly_scalajs_react_vdom_VdomNode(obj) {
  return (($is_Ljapgolly_scalajs_react_vdom_VdomNode(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.vdom.VdomNode"));
}
function $isArrayOf_Ljapgolly_scalajs_react_vdom_VdomNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_vdom_VdomNode)));
}
function $asArrayOf_Ljapgolly_scalajs_react_vdom_VdomNode(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_vdom_VdomNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.vdom.VdomNode;", depth));
}
function $p_jl_Character$__getTypeGE256__I__I($thiz, codePoint) {
  return $n($p_jl_Character$__charTypes__AI($thiz)).get($p_jl_Character$__findIndexOfRange__AI__I__Z__I($thiz, $p_jl_Character$__charTypeIndices__AI($thiz), codePoint, false));
}
function $p_jl_Character$__isLowerCaseGE256__I__Z($thiz, c) {
  return ((((((((((((((((((c >= 688) && (c <= 696)) || ((c >= 704) && (c <= 705))) || ((c >= 736) && (c <= 740))) || (c === 837)) || (c === 890)) || ((c >= 7468) && (c <= 7530))) || (c === 7544)) || ((c >= 7579) && (c <= 7615))) || (c === 8305)) || (c === 8319)) || ((c >= 8336) && (c <= 8348))) || ((c >= 8560) && (c <= 8575))) || ((c >= 9424) && (c <= 9449))) || ((c >= 11388) && (c <= 11389))) || (c === 42864)) || ((c >= 43000) && (c <= 43001))) || ($p_jl_Character$__getTypeGE256__I__I($thiz, c) === 2));
}
function $p_jl_Character$__java$lang$Character$$charTypesFirst256$lzycompute__AI($thiz) {
  if (((((1 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_java$lang$Character$$charTypesFirst256 = new $ac_I(new Int32Array([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 12, 24, 24, 24, 26, 24, 24, 24, 21, 22, 24, 25, 24, 20, 24, 24, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 24, 24, 25, 25, 25, 24, 24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21, 24, 22, 27, 23, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 21, 25, 22, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 12, 24, 26, 26, 26, 26, 28, 24, 27, 28, 5, 29, 25, 16, 28, 27, 28, 25, 11, 11, 27, 2, 24, 24, 27, 11, 5, 30, 11, 11, 11, 24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 25, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 25, 2, 2, 2, 2, 2, 2, 2, 2]));
    $thiz.jl_Character$__f_bitmap$0 = (((1 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24);
  }
  return $thiz.jl_Character$__f_java$lang$Character$$charTypesFirst256;
}
function $p_jl_Character$__charTypeIndices$lzycompute__AI($thiz) {
  if (((((2 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    var deltas = new $ac_I(new Int32Array([257, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 2, 1, 1, 1, 2, 1, 3, 2, 4, 1, 2, 1, 3, 3, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 3, 1, 1, 1, 2, 2, 1, 1, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 2, 1, 2, 2, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 69, 1, 27, 18, 4, 12, 14, 5, 7, 1, 1, 1, 17, 112, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 1, 1, 4, 2, 1, 1, 3, 1, 1, 1, 2, 1, 17, 1, 9, 35, 1, 2, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 2, 2, 51, 48, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 38, 2, 1, 6, 41, 1, 1, 2, 2, 1, 1, 45, 1, 1, 1, 2, 1, 2, 1, 1, 8, 27, 4, 4, 2, 11, 6, 3, 2, 1, 2, 2, 11, 1, 1, 3, 32, 1, 10, 21, 10, 4, 2, 1, 99, 1, 1, 7, 1, 1, 6, 2, 2, 1, 4, 2, 10, 3, 2, 1, 14, 1, 1, 1, 1, 30, 27, 2, 89, 11, 1, 14, 10, 33, 9, 2, 1, 3, 1, 2, 1, 2, 22, 4, 1, 9, 1, 3, 1, 5, 2, 15, 1, 25, 3, 2, 1, 1, 11, 5, 24, 1, 6, 1, 2, 6, 8, 41, 1, 24, 1, 32, 1, 54, 1, 1, 1, 1, 3, 8, 4, 1, 2, 1, 7, 10, 2, 2, 10, 1, 1, 15, 1, 2, 1, 8, 2, 2, 2, 22, 1, 7, 1, 1, 3, 4, 2, 1, 1, 3, 4, 2, 2, 2, 2, 1, 1, 8, 1, 4, 2, 1, 3, 2, 2, 10, 2, 2, 6, 1, 1, 1, 1, 1, 2, 2, 1, 1, 6, 4, 2, 2, 22, 1, 7, 1, 2, 1, 2, 1, 2, 2, 1, 1, 3, 2, 4, 2, 2, 3, 3, 1, 7, 4, 1, 1, 7, 10, 2, 3, 1, 1, 10, 2, 1, 1, 9, 1, 3, 1, 22, 1, 7, 1, 2, 1, 5, 2, 1, 1, 3, 5, 1, 2, 1, 1, 2, 1, 2, 1, 15, 2, 2, 2, 10, 1, 1, 7, 1, 6, 1, 1, 2, 1, 8, 2, 2, 2, 22, 1, 7, 1, 2, 1, 5, 2, 1, 1, 1, 1, 1, 4, 2, 2, 2, 2, 1, 7, 2, 1, 4, 2, 1, 3, 2, 2, 10, 1, 1, 6, 10, 1, 1, 1, 6, 3, 3, 1, 4, 3, 2, 1, 1, 1, 2, 3, 2, 3, 3, 3, 12, 4, 2, 1, 2, 3, 3, 1, 3, 1, 2, 1, 6, 1, 14, 10, 3, 6, 1, 1, 5, 1, 3, 1, 8, 1, 3, 1, 23, 1, 16, 2, 1, 1, 3, 4, 1, 3, 1, 4, 7, 2, 1, 3, 2, 1, 2, 2, 2, 2, 10, 7, 1, 7, 1, 1, 1, 2, 1, 8, 1, 3, 1, 23, 1, 10, 1, 5, 2, 1, 1, 1, 1, 5, 1, 1, 2, 1, 2, 2, 7, 2, 6, 2, 1, 2, 2, 2, 10, 1, 2, 1, 12, 2, 2, 9, 1, 3, 1, 41, 2, 1, 3, 4, 1, 3, 1, 3, 1, 1, 1, 4, 3, 1, 7, 3, 2, 2, 10, 9, 1, 6, 1, 1, 2, 1, 18, 3, 24, 1, 9, 1, 1, 2, 7, 3, 1, 4, 3, 3, 1, 1, 1, 8, 6, 10, 2, 2, 1, 12, 48, 1, 2, 7, 4, 1, 6, 1, 8, 1, 10, 2, 37, 2, 1, 1, 1, 5, 1, 24, 1, 1, 1, 10, 1, 2, 9, 1, 2, 5, 1, 1, 1, 7, 1, 10, 2, 4, 32, 1, 3, 15, 1, 1, 3, 2, 6, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 8, 1, 36, 4, 14, 1, 5, 1, 2, 5, 11, 1, 36, 1, 8, 1, 6, 1, 2, 5, 4, 2, 37, 43, 2, 4, 1, 6, 1, 2, 2, 2, 1, 10, 6, 6, 2, 2, 4, 3, 1, 3, 2, 7, 3, 4, 13, 1, 2, 2, 6, 1, 1, 1, 10, 3, 1, 2, 38, 1, 1, 5, 1, 2, 43, 1, 1, 3, 329, 1, 4, 2, 7, 1, 1, 1, 4, 2, 41, 1, 4, 2, 33, 1, 4, 2, 7, 1, 1, 1, 4, 2, 15, 1, 57, 1, 4, 2, 67, 2, 3, 9, 20, 3, 16, 10, 6, 86, 2, 6, 2, 1, 620, 1, 1, 17, 1, 26, 1, 1, 3, 75, 3, 3, 8, 7, 18, 3, 1, 9, 19, 2, 1, 2, 9, 18, 2, 12, 13, 1, 3, 1, 2, 12, 52, 2, 1, 7, 8, 1, 2, 11, 3, 1, 3, 1, 1, 1, 2, 10, 6, 10, 6, 6, 1, 4, 3, 1, 1, 10, 6, 35, 1, 53, 7, 5, 2, 34, 1, 1, 5, 70, 10, 31, 1, 3, 4, 2, 3, 4, 2, 1, 6, 3, 4, 1, 3, 2, 10, 30, 2, 5, 11, 44, 4, 26, 6, 10, 1, 3, 34, 23, 2, 2, 1, 2, 2, 53, 1, 1, 1, 7, 1, 1, 1, 1, 2, 8, 6, 10, 2, 1, 10, 6, 10, 6, 7, 1, 6, 2, 14, 1, 16, 49, 4, 1, 47, 1, 1, 5, 1, 1, 5, 1, 2, 8, 3, 10, 7, 10, 9, 9, 2, 1, 2, 1, 30, 1, 4, 2, 2, 1, 3, 2, 10, 44, 1, 1, 2, 3, 1, 1, 3, 2, 8, 4, 36, 8, 8, 2, 2, 3, 5, 10, 3, 3, 10, 30, 6, 2, 9, 7, 43, 2, 3, 8, 8, 3, 1, 13, 1, 7, 4, 1, 6, 1, 2, 1, 2, 1, 5, 44, 63, 13, 1, 34, 37, 64, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 8, 6, 2, 6, 2, 8, 8, 8, 8, 6, 2, 6, 2, 8, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 14, 2, 8, 8, 8, 8, 8, 8, 5, 1, 2, 4, 1, 1, 1, 3, 3, 1, 2, 4, 1, 3, 4, 2, 2, 4, 1, 3, 8, 5, 3, 2, 3, 1, 2, 4, 1, 2, 1, 11, 5, 6, 2, 1, 1, 1, 2, 1, 1, 1, 8, 1, 1, 5, 1, 9, 1, 1, 4, 2, 3, 1, 1, 1, 11, 1, 1, 1, 10, 1, 5, 1, 10, 1, 1, 2, 6, 3, 1, 1, 1, 10, 3, 1, 1, 1, 13, 3, 33, 15, 13, 4, 1, 3, 12, 15, 2, 1, 4, 1, 2, 1, 3, 2, 3, 1, 1, 1, 2, 1, 5, 6, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 4, 1, 2, 2, 2, 5, 1, 4, 1, 1, 2, 1, 1, 16, 35, 1, 1, 4, 1, 2, 4, 5, 5, 2, 4, 1, 2, 1, 2, 1, 7, 1, 31, 2, 2, 1, 1, 1, 31, 268, 8, 1, 1, 1, 1, 20, 2, 7, 1, 1, 81, 1, 30, 25, 40, 6, 69, 25, 11, 21, 60, 78, 22, 183, 1, 9, 1, 54, 8, 111, 1, 248, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 30, 44, 5, 1, 1, 31, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 256, 131, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 63, 1, 1, 1, 1, 32, 1, 1, 258, 48, 21, 2, 6, 39, 2, 32, 1, 105, 48, 48, 1, 1, 3, 2, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 1, 6, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 6, 1, 1, 1, 1, 3, 1, 1, 5, 4, 1, 2, 38, 1, 1, 5, 1, 2, 56, 7, 1, 1, 14, 1, 23, 9, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 32, 2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 9, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 10, 2, 4, 1, 1, 1, 13, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 34, 26, 1, 89, 12, 214, 26, 12, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 9, 4, 2, 1, 5, 2, 3, 1, 1, 1, 2, 1, 86, 2, 2, 2, 2, 1, 1, 90, 1, 3, 1, 5, 43, 1, 94, 1, 2, 4, 10, 32, 36, 12, 16, 31, 1, 10, 30, 8, 1, 15, 32, 10, 39, 15, 320, 6592, 64, 21013, 1, 1143, 3, 55, 9, 40, 6, 2, 268, 1, 3, 16, 10, 2, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 70, 10, 2, 6, 8, 23, 9, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24, 3, 1, 1, 1, 2, 1, 7, 1, 3, 1, 4, 1, 23, 2, 2, 1, 4, 1, 3, 6, 2, 1, 1, 6, 52, 4, 8, 2, 50, 16, 2, 8, 2, 10, 6, 18, 6, 3, 1, 1, 2, 1, 10, 28, 8, 2, 23, 11, 2, 11, 1, 29, 3, 3, 1, 47, 1, 2, 4, 2, 2, 3, 13, 1, 1, 10, 4, 2, 5, 1, 1, 9, 10, 5, 1, 41, 6, 2, 2, 2, 2, 9, 3, 1, 8, 1, 1, 2, 10, 2, 4, 16, 1, 6, 3, 1, 1, 1, 1, 50, 1, 1, 3, 2, 2, 5, 2, 1, 1, 1, 24, 2, 1, 2, 11, 1, 2, 2, 2, 1, 2, 1, 1, 10, 6, 2, 6, 2, 6, 9, 7, 1, 7, 1, 43, 1, 4, 9, 1, 2, 4, 80, 35, 2, 1, 2, 1, 2, 1, 1, 1, 2, 10, 6, 11172, 12, 23, 4, 49, 4, 2048, 6400, 366, 2, 106, 38, 7, 12, 5, 5, 1, 1, 10, 1, 13, 1, 5, 1, 1, 1, 2, 1, 2, 1, 108, 17, 16, 363, 1, 1, 16, 64, 2, 54, 7, 1, 32, 12, 1, 3, 16, 7, 1, 1, 1, 6, 16, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4, 3, 3, 1, 4, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 2, 4, 5, 1, 135, 2, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 2, 10, 2, 3, 2, 26, 1, 1, 1, 1, 1, 1, 26, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 10, 1, 45, 2, 31, 3, 6, 2, 6, 2, 6, 2, 3, 3, 2, 1, 1, 1, 2, 1, 1, 4, 2, 10, 3, 2, 2, 12, 1, 26, 1, 19, 1, 2, 1, 15, 2, 14, 34, 123, 5, 3, 4, 45, 3, 9, 53, 4, 17, 2, 3, 1, 13, 3, 1, 47, 45, 1, 130, 29, 3, 49, 15, 1, 27, 4, 32, 4, 9, 20, 1, 8, 1, 5, 38, 5, 5, 30, 1, 1, 36, 4, 8, 1, 5, 42, 40, 40, 78, 2, 10, 6, 36, 4, 36, 4, 40, 8, 52, 11, 1, 11, 1, 15, 1, 7, 1, 2, 1, 11, 1, 15, 1, 7, 1, 2, 67, 311, 9, 22, 10, 8, 24, 6, 1, 42, 1, 9, 69, 6, 2, 1, 1, 44, 1, 2, 3, 1, 2, 23, 1, 1, 8, 23, 2, 7, 31, 8, 9, 48, 19, 1, 2, 5, 5, 22, 6, 3, 1, 26, 5, 1, 64, 56, 4, 2, 2, 16, 2, 46, 1, 3, 1, 2, 5, 4, 4, 1, 3, 1, 29, 2, 3, 4, 1, 9, 7, 9, 7, 29, 2, 1, 29, 3, 32, 8, 1, 28, 2, 4, 5, 7, 9, 54, 3, 7, 22, 2, 8, 19, 5, 8, 18, 7, 4, 12, 7, 80, 73, 55, 51, 13, 51, 7, 6, 36, 4, 8, 10, 294, 31, 1, 42, 1, 2, 1, 2, 2, 75, 3, 29, 10, 1, 8, 22, 11, 4, 5, 22, 18, 4, 4, 38, 21, 7, 20, 23, 9, 1, 1, 1, 53, 15, 7, 4, 20, 10, 1, 2, 2, 1, 9, 3, 1, 45, 3, 4, 2, 2, 2, 1, 4, 1, 10, 1, 2, 25, 7, 10, 6, 3, 36, 5, 1, 8, 1, 10, 4, 1, 2, 1, 8, 35, 1, 2, 1, 9, 2, 1, 48, 3, 9, 2, 4, 4, 4, 1, 1, 1, 10, 1, 1, 1, 3, 1, 20, 11, 18, 1, 25, 3, 3, 2, 1, 1, 2, 6, 1, 2, 1, 62, 7, 1, 1, 1, 4, 1, 15, 1, 10, 1, 6, 47, 1, 3, 8, 5, 10, 6, 2, 2, 1, 8, 2, 2, 2, 22, 1, 7, 1, 2, 1, 5, 1, 2, 1, 2, 1, 4, 2, 2, 2, 3, 2, 1, 6, 1, 5, 5, 2, 2, 7, 3, 5, 139, 53, 3, 8, 2, 3, 1, 1, 4, 5, 10, 2, 1, 1, 1, 3, 30, 48, 3, 6, 1, 1, 4, 2, 1, 2, 2, 1, 1, 8, 10, 166, 47, 3, 4, 2, 4, 2, 1, 2, 23, 4, 2, 34, 48, 3, 8, 2, 1, 1, 2, 3, 1, 11, 10, 6, 13, 19, 43, 1, 1, 1, 2, 6, 1, 1, 1, 1, 6, 10, 54, 27, 2, 3, 2, 4, 1, 5, 4, 10, 2, 3, 1, 7, 185, 44, 3, 9, 1, 2, 1, 100, 32, 32, 10, 9, 12, 8, 2, 1, 2, 8, 1, 2, 1, 24, 6, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 9, 10, 70, 8, 2, 39, 3, 4, 2, 2, 4, 1, 1, 1, 1, 1, 27, 1, 10, 40, 6, 1, 1, 4, 8, 1, 8, 1, 6, 2, 3, 46, 13, 1, 2, 3, 1, 5, 13, 73, 7, 10, 246, 9, 1, 37, 1, 7, 1, 6, 1, 1, 1, 5, 10, 10, 19, 3, 2, 30, 2, 22, 1, 1, 7, 1, 2, 1, 2, 73, 7, 1, 2, 1, 38, 6, 3, 1, 1, 2, 1, 7, 1, 1, 8, 10, 6, 6, 1, 2, 1, 32, 5, 1, 2, 1, 2, 1, 1, 1, 1, 7, 10, 310, 19, 2, 2, 2, 7, 2, 1, 1, 13, 1, 34, 2, 5, 3, 2, 1, 1, 1, 13, 10, 86, 1, 15, 21, 8, 4, 17, 13, 1, 922, 102, 111, 1, 5, 11, 196, 2636, 97, 2, 13, 1072, 16, 1, 6, 15, 4010, 583, 8633, 569, 7, 31, 1, 10, 4, 2, 79, 1, 10, 6, 30, 2, 5, 1, 10, 48, 7, 5, 4, 4, 1, 1, 10, 10, 1, 7, 1, 21, 5, 19, 688, 32, 32, 23, 4, 101, 75, 4, 1, 1, 55, 7, 4, 13, 64, 2, 1, 1, 1, 11, 2, 14, 6136, 8, 1238, 42, 9, 8935, 4, 1, 7, 1, 2, 1, 291, 15, 1, 29, 3, 2, 1, 14, 4, 8, 396, 2308, 107, 5, 13, 3, 9, 7, 10, 2, 1, 2, 1, 4, 4700, 46, 2, 23, 9, 116, 60, 246, 10, 39, 2, 60, 2, 3, 3, 6, 8, 8, 2, 7, 30, 4, 61, 21, 66, 3, 1, 122, 20, 12, 20, 12, 87, 9, 25, 135, 26, 26, 26, 7, 1, 18, 26, 26, 1, 1, 2, 2, 1, 2, 2, 2, 4, 1, 8, 4, 1, 1, 1, 7, 1, 11, 26, 26, 2, 1, 4, 2, 8, 1, 7, 1, 26, 2, 1, 4, 1, 5, 1, 1, 3, 7, 1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 28, 2, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 1, 1, 2, 50, 512, 55, 4, 50, 8, 1, 14, 1, 2, 5, 15, 5, 1, 15, 1104, 10, 1, 20, 6, 6, 213, 7, 1, 17, 2, 7, 1, 2, 1, 5, 5, 62, 33, 1, 112, 45, 3, 7, 7, 2, 10, 4, 1, 1, 320, 30, 1, 17, 44, 4, 10, 5, 1, 464, 27, 1, 4, 10, 742, 7, 1, 4, 1, 2, 1, 15, 1, 197, 2, 9, 7, 41, 34, 34, 7, 1, 4, 10, 4, 2, 785, 59, 1, 3, 1, 4, 76, 45, 1, 15, 194, 4, 1, 27, 1, 2, 1, 1, 2, 1, 1, 10, 1, 4, 1, 1, 1, 1, 6, 1, 4, 1, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 4, 1, 7, 1, 4, 1, 4, 1, 1, 1, 10, 1, 17, 5, 3, 1, 5, 1, 17, 52, 2, 270, 44, 4, 100, 12, 15, 2, 15, 1, 15, 1, 37, 10, 13, 161, 56, 29, 13, 44, 4, 9, 7, 2, 14, 6, 154, 251, 5, 728, 4, 17, 3, 13, 3, 119, 4, 95, 6, 12, 4, 1, 15, 12, 4, 56, 8, 10, 6, 40, 8, 30, 2, 2, 78, 340, 12, 14, 2, 13, 3, 9, 7, 46, 1, 7, 8, 14, 4, 9, 7, 9, 7, 147, 1, 55, 37, 10, 1030, 42720, 32, 4154, 6, 222, 2, 5762, 14, 7473, 3103, 542, 1506, 4939, 5, 4192, 711761, 1, 30, 96, 128, 240, 65040, 65534, 2, 65534]));
    $thiz.jl_Character$__f_charTypeIndices = $p_jl_Character$__uncompressDeltas__AI__AI($thiz, deltas);
    $thiz.jl_Character$__f_bitmap$0 = (((2 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24);
  }
  return $thiz.jl_Character$__f_charTypeIndices;
}
function $p_jl_Character$__charTypeIndices__AI($thiz) {
  return (((((2 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__charTypeIndices$lzycompute__AI($thiz) : $thiz.jl_Character$__f_charTypeIndices);
}
function $p_jl_Character$__charTypes$lzycompute__AI($thiz) {
  if (((((4 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_charTypes = new $ac_I(new Int32Array([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 1, 2, 5, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 4, 27, 4, 27, 4, 27, 4, 27, 4, 27, 6, 1, 2, 1, 2, 4, 27, 1, 2, 0, 4, 2, 24, 1, 0, 27, 1, 24, 1, 0, 1, 0, 1, 2, 1, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 25, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 28, 6, 7, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 0, 4, 24, 2, 24, 20, 0, 28, 26, 0, 6, 20, 6, 24, 6, 24, 6, 24, 6, 0, 5, 0, 5, 24, 0, 16, 25, 24, 26, 24, 28, 6, 24, 16, 24, 5, 4, 5, 6, 9, 24, 5, 6, 5, 24, 5, 6, 16, 28, 6, 4, 6, 28, 6, 5, 9, 5, 28, 5, 24, 0, 16, 5, 6, 5, 6, 0, 5, 6, 5, 0, 9, 5, 6, 4, 28, 24, 4, 0, 6, 26, 5, 6, 4, 6, 4, 6, 4, 6, 0, 24, 0, 5, 6, 0, 24, 0, 5, 0, 5, 27, 5, 0, 16, 0, 6, 5, 4, 6, 16, 6, 8, 5, 6, 8, 6, 5, 8, 6, 8, 6, 8, 5, 6, 5, 6, 24, 9, 24, 4, 5, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 0, 8, 0, 8, 6, 5, 0, 8, 0, 5, 0, 5, 6, 0, 9, 5, 26, 11, 28, 26, 5, 24, 6, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 0, 8, 6, 0, 6, 0, 6, 0, 6, 0, 5, 0, 5, 0, 9, 6, 5, 6, 24, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 0, 6, 8, 0, 8, 6, 0, 5, 0, 5, 6, 0, 9, 24, 26, 0, 5, 6, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 8, 6, 0, 8, 0, 8, 6, 0, 6, 8, 0, 5, 0, 5, 6, 0, 9, 28, 5, 11, 0, 6, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 8, 6, 8, 0, 8, 0, 8, 6, 0, 5, 0, 8, 0, 9, 11, 28, 26, 28, 0, 6, 8, 6, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 6, 8, 0, 6, 0, 6, 0, 6, 0, 5, 0, 5, 0, 5, 6, 0, 9, 0, 24, 11, 28, 5, 6, 8, 24, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 8, 0, 6, 8, 0, 8, 6, 0, 8, 0, 5, 0, 5, 6, 0, 9, 0, 5, 8, 0, 6, 8, 5, 0, 5, 0, 5, 6, 5, 8, 6, 0, 8, 0, 8, 6, 5, 28, 0, 5, 8, 11, 5, 6, 0, 9, 11, 28, 5, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 0, 8, 6, 0, 6, 0, 8, 0, 9, 0, 8, 24, 0, 5, 6, 5, 6, 0, 26, 5, 4, 6, 24, 9, 24, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 6, 5, 6, 5, 0, 5, 0, 4, 0, 6, 0, 9, 0, 5, 0, 5, 28, 24, 28, 24, 28, 6, 28, 9, 11, 28, 6, 28, 6, 28, 6, 21, 22, 21, 22, 8, 5, 0, 5, 0, 6, 8, 6, 24, 6, 5, 6, 0, 6, 0, 28, 6, 28, 0, 28, 24, 28, 24, 0, 5, 8, 6, 8, 6, 8, 6, 8, 6, 5, 9, 24, 5, 8, 6, 5, 6, 5, 8, 5, 8, 5, 6, 5, 6, 8, 6, 8, 6, 5, 8, 9, 8, 6, 28, 1, 0, 1, 0, 1, 0, 2, 24, 4, 2, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 24, 11, 0, 5, 28, 0, 1, 0, 2, 0, 20, 5, 28, 24, 5, 12, 5, 21, 22, 0, 5, 24, 10, 5, 0, 5, 6, 8, 0, 5, 6, 8, 24, 0, 5, 6, 0, 5, 0, 5, 0, 6, 0, 5, 6, 8, 6, 8, 6, 8, 6, 24, 4, 24, 26, 5, 6, 0, 9, 0, 11, 0, 24, 20, 24, 6, 16, 6, 9, 0, 5, 4, 5, 0, 5, 6, 5, 6, 5, 0, 5, 0, 5, 0, 6, 8, 6, 8, 0, 8, 6, 8, 6, 0, 28, 0, 24, 9, 5, 0, 5, 0, 5, 0, 5, 0, 9, 11, 0, 28, 5, 6, 8, 6, 0, 24, 5, 8, 6, 8, 6, 0, 6, 8, 6, 8, 6, 8, 6, 0, 6, 9, 0, 9, 0, 24, 4, 24, 0, 6, 7, 6, 0, 6, 8, 5, 6, 8, 6, 8, 6, 8, 6, 8, 5, 0, 9, 24, 28, 6, 28, 24, 0, 6, 8, 5, 8, 6, 8, 6, 8, 6, 5, 9, 5, 6, 8, 6, 8, 6, 8, 6, 8, 0, 24, 5, 8, 6, 8, 6, 0, 24, 9, 0, 5, 9, 5, 4, 24, 2, 0, 1, 0, 1, 24, 0, 6, 24, 6, 8, 6, 5, 6, 5, 6, 5, 8, 6, 5, 0, 2, 4, 2, 4, 2, 4, 6, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 0, 2, 1, 2, 1, 2, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 2, 0, 2, 3, 2, 3, 2, 3, 2, 0, 2, 1, 3, 27, 2, 27, 2, 0, 2, 1, 3, 27, 2, 0, 2, 1, 0, 27, 2, 1, 27, 0, 2, 0, 2, 1, 3, 27, 0, 12, 16, 20, 24, 29, 30, 21, 29, 30, 21, 29, 24, 13, 14, 16, 12, 24, 29, 30, 24, 23, 24, 25, 21, 22, 24, 25, 24, 23, 24, 12, 16, 0, 16, 11, 4, 0, 11, 25, 21, 22, 4, 11, 25, 21, 22, 0, 4, 0, 26, 0, 6, 7, 6, 7, 6, 0, 28, 1, 28, 1, 28, 2, 1, 2, 1, 2, 28, 1, 28, 25, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 2, 1, 2, 5, 2, 28, 2, 1, 25, 1, 2, 28, 25, 28, 2, 28, 11, 10, 1, 2, 10, 11, 28, 0, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 21, 22, 21, 22, 28, 25, 28, 21, 22, 28, 25, 28, 25, 28, 25, 28, 0, 28, 0, 11, 28, 11, 28, 25, 28, 25, 28, 25, 28, 25, 28, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 11, 28, 25, 21, 22, 25, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 25, 28, 25, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 25, 21, 22, 21, 22, 25, 21, 22, 25, 28, 25, 28, 25, 28, 0, 28, 0, 28, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 28, 1, 2, 1, 2, 6, 1, 2, 0, 24, 11, 24, 2, 0, 2, 0, 2, 0, 5, 0, 4, 24, 0, 6, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 24, 29, 30, 29, 30, 24, 29, 30, 24, 29, 30, 24, 20, 24, 20, 24, 29, 30, 24, 29, 30, 21, 22, 21, 22, 21, 22, 21, 22, 24, 4, 24, 20, 24, 20, 24, 21, 24, 28, 24, 21, 22, 21, 22, 21, 22, 21, 22, 20, 0, 28, 0, 28, 0, 28, 0, 28, 0, 12, 24, 28, 4, 5, 10, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 28, 21, 22, 21, 22, 21, 22, 21, 22, 20, 21, 22, 28, 10, 6, 8, 20, 4, 28, 10, 4, 5, 24, 28, 0, 5, 0, 6, 27, 4, 5, 20, 5, 24, 4, 5, 0, 5, 0, 5, 0, 28, 11, 28, 5, 28, 0, 5, 28, 0, 11, 28, 11, 28, 11, 28, 11, 28, 11, 28, 5, 28, 5, 4, 5, 0, 28, 0, 5, 4, 24, 5, 4, 24, 5, 9, 5, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 6, 7, 24, 6, 24, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 6, 5, 10, 6, 24, 0, 27, 4, 27, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 27, 1, 2, 1, 2, 5, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 2, 0, 2, 0, 2, 1, 2, 1, 2, 0, 4, 1, 2, 5, 4, 2, 5, 6, 5, 6, 5, 6, 5, 8, 6, 8, 28, 6, 0, 11, 28, 26, 28, 0, 5, 24, 0, 8, 5, 8, 6, 0, 24, 9, 0, 6, 5, 24, 5, 24, 5, 6, 9, 5, 6, 24, 5, 6, 8, 0, 24, 5, 0, 6, 8, 5, 6, 8, 6, 8, 6, 8, 24, 0, 4, 9, 0, 24, 5, 6, 4, 5, 9, 5, 0, 5, 6, 8, 6, 8, 6, 0, 5, 6, 5, 6, 8, 0, 9, 0, 24, 5, 4, 5, 28, 5, 8, 6, 8, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 0, 5, 4, 24, 5, 8, 6, 8, 24, 5, 4, 8, 6, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 2, 27, 4, 2, 4, 27, 0, 2, 5, 8, 6, 8, 6, 8, 24, 8, 6, 0, 9, 0, 5, 0, 5, 0, 5, 0, 19, 18, 5, 0, 5, 0, 2, 0, 2, 0, 5, 6, 5, 25, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 27, 0, 5, 22, 21, 28, 5, 0, 5, 0, 28, 0, 5, 26, 28, 6, 24, 21, 22, 24, 0, 6, 24, 20, 23, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 24, 21, 22, 24, 23, 24, 0, 24, 20, 21, 22, 21, 22, 21, 22, 24, 25, 20, 25, 0, 24, 26, 24, 0, 5, 0, 5, 0, 16, 0, 24, 26, 24, 21, 22, 24, 25, 24, 20, 24, 9, 24, 25, 24, 1, 21, 24, 22, 27, 23, 27, 2, 21, 25, 22, 25, 21, 22, 24, 21, 22, 24, 5, 4, 5, 4, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 26, 25, 27, 28, 26, 0, 28, 25, 28, 0, 16, 28, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 24, 0, 11, 0, 28, 10, 11, 28, 11, 28, 0, 28, 0, 28, 0, 28, 6, 0, 5, 0, 5, 0, 6, 11, 0, 5, 11, 0, 5, 10, 5, 10, 0, 5, 6, 0, 5, 0, 24, 5, 0, 5, 24, 10, 0, 1, 2, 5, 0, 9, 0, 1, 0, 2, 0, 5, 0, 5, 0, 24, 1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 5, 0, 5, 0, 5, 0, 4, 0, 4, 0, 4, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 24, 11, 5, 28, 11, 5, 0, 11, 0, 5, 0, 5, 0, 11, 5, 11, 0, 24, 5, 0, 24, 0, 5, 0, 11, 5, 11, 0, 11, 5, 6, 0, 6, 0, 6, 5, 0, 5, 0, 5, 0, 6, 0, 6, 11, 0, 24, 0, 5, 11, 24, 5, 11, 0, 5, 28, 5, 6, 0, 11, 24, 0, 5, 0, 24, 5, 0, 11, 5, 0, 11, 5, 0, 24, 0, 11, 0, 5, 0, 1, 0, 2, 0, 11, 5, 6, 0, 9, 0, 11, 0, 5, 0, 6, 20, 0, 5, 0, 6, 5, 11, 5, 0, 5, 6, 11, 24, 0, 5, 6, 24, 0, 5, 11, 0, 5, 0, 8, 6, 8, 5, 6, 24, 0, 11, 9, 6, 5, 6, 5, 0, 6, 8, 5, 8, 6, 8, 6, 24, 16, 24, 6, 0, 16, 0, 5, 0, 9, 0, 6, 5, 6, 8, 6, 0, 9, 24, 5, 8, 5, 0, 5, 6, 24, 5, 0, 6, 8, 5, 8, 6, 8, 5, 24, 6, 24, 8, 6, 9, 5, 24, 5, 24, 0, 11, 0, 5, 0, 5, 8, 6, 8, 6, 8, 6, 24, 6, 5, 6, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 24, 0, 5, 6, 8, 6, 0, 9, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 8, 0, 8, 0, 8, 0, 5, 0, 8, 0, 5, 8, 0, 6, 0, 6, 0, 5, 8, 6, 8, 6, 8, 6, 5, 24, 9, 24, 0, 24, 6, 5, 0, 5, 8, 6, 8, 6, 8, 6, 8, 6, 5, 24, 5, 0, 9, 0, 5, 8, 6, 0, 8, 6, 8, 6, 24, 5, 6, 0, 5, 8, 6, 8, 6, 8, 6, 24, 5, 0, 9, 0, 24, 0, 5, 6, 8, 6, 8, 6, 8, 6, 5, 24, 0, 9, 0, 5, 0, 6, 8, 6, 8, 6, 0, 9, 11, 24, 28, 5, 0, 5, 8, 6, 8, 6, 24, 0, 1, 2, 9, 11, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 8, 0, 8, 0, 6, 8, 6, 5, 8, 5, 8, 6, 24, 0, 9, 0, 5, 0, 5, 8, 6, 0, 6, 8, 6, 5, 24, 5, 8, 0, 5, 6, 5, 6, 8, 5, 6, 24, 6, 0, 5, 6, 8, 6, 5, 6, 8, 6, 24, 5, 24, 0, 5, 0, 24, 0, 5, 0, 5, 8, 6, 0, 6, 8, 6, 5, 24, 0, 9, 11, 0, 24, 5, 0, 6, 0, 8, 6, 8, 6, 8, 6, 0, 5, 0, 5, 0, 5, 6, 0, 6, 0, 6, 0, 6, 5, 6, 0, 9, 0, 5, 0, 5, 0, 5, 8, 0, 6, 0, 8, 6, 8, 6, 5, 0, 9, 0, 5, 6, 8, 24, 0, 6, 5, 8, 5, 0, 5, 8, 6, 0, 8, 6, 8, 6, 24, 9, 0, 5, 0, 11, 28, 26, 28, 0, 24, 5, 0, 10, 0, 24, 0, 5, 0, 5, 24, 0, 5, 16, 6, 5, 6, 0, 5, 0, 5, 0, 5, 0, 9, 0, 24, 5, 0, 9, 0, 5, 0, 6, 24, 0, 5, 6, 24, 28, 4, 24, 28, 0, 9, 0, 11, 0, 5, 0, 5, 0, 1, 2, 11, 24, 0, 5, 0, 6, 5, 8, 0, 6, 4, 0, 4, 24, 4, 6, 0, 8, 0, 5, 0, 5, 0, 5, 0, 4, 0, 4, 0, 4, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 28, 6, 24, 16, 0, 6, 0, 6, 0, 28, 0, 28, 0, 28, 0, 28, 8, 6, 28, 8, 16, 6, 28, 6, 28, 6, 28, 0, 28, 6, 28, 0, 11, 0, 11, 0, 28, 0, 11, 0, 1, 2, 1, 2, 0, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 2, 0, 2, 0, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 2, 0, 9, 28, 6, 28, 6, 28, 6, 28, 6, 28, 24, 0, 6, 0, 6, 0, 2, 5, 2, 0, 2, 0, 6, 0, 6, 0, 6, 0, 6, 0, 6, 0, 4, 0, 6, 0, 5, 0, 6, 4, 0, 9, 0, 5, 28, 0, 5, 6, 0, 5, 6, 9, 0, 26, 0, 5, 4, 6, 9, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 11, 6, 0, 1, 2, 6, 4, 0, 9, 0, 24, 0, 11, 28, 11, 26, 11, 0, 11, 28, 11, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 25, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 11, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 27, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 9, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 16, 0, 16, 0, 6, 0, 18, 0, 18, 0]));
    $thiz.jl_Character$__f_bitmap$0 = (((4 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24);
  }
  return $thiz.jl_Character$__f_charTypes;
}
function $p_jl_Character$__charTypes__AI($thiz) {
  return (((((4 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__charTypes$lzycompute__AI($thiz) : $thiz.jl_Character$__f_charTypes);
}
function $p_jl_Character$__uncompressDeltas__AI__AI($thiz, deltas) {
  var acc = $n(deltas).get(0);
  var i = 1;
  var len = $n(deltas).u.length;
  while ((i !== len)) {
    acc = ((acc + $n(deltas).get(i)) | 0);
    $n(deltas).set(i, acc);
    i = ((1 + i) | 0);
  }
  return deltas;
}
function $p_jl_Character$__findIndexOfRange__AI__I__Z__I($thiz, startOfRangesArray, value, hasEmptyRanges) {
  var i = $m_ju_Arrays$().binarySearch__AI__I__I(startOfRangesArray, value);
  if ((i >= 0)) {
    if (hasEmptyRanges) {
      var j = ((1 + i) | 0);
      while (((j < $n(startOfRangesArray).u.length) && ($n(startOfRangesArray).get(j) === value))) {
        j = ((1 + j) | 0);
      }
      return j;
    } else {
      return ((1 + i) | 0);
    }
  } else {
    return (((-1) - i) | 0);
  }
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.jl_Character$__f_bitmap$0 = (((32 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24);
  }
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints);
}
/** @constructor */
function $c_jl_Character$() {
  this.jl_Character$__f_java$lang$Character$$charTypesFirst256 = null;
  this.jl_Character$__f_charTypeIndices = null;
  this.jl_Character$__f_charTypes = null;
  this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
  this.jl_Character$__f_bitmap$0 = 0;
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.digitWithValidRadix__I__I__I = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().binarySearch__AI__I__I($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - $n($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this)).get(zeroCodePointIndex)) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
$c_jl_Character$.prototype.isLowerCase__I__Z = (function(c) {
  return ((c < 256) ? (((c === 170) || (c === 186)) || ($n(this.java$lang$Character$$charTypesFirst256__AI()).get(c) === 2)) : $p_jl_Character$__isLowerCaseGE256__I__Z(this, c));
});
$c_jl_Character$.prototype.java$lang$Character$$charTypesFirst256__AI = (function() {
  return (((((1 & this.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__java$lang$Character$$charTypesFirst256$lzycompute__AI(this) : this.jl_Character$__f_java$lang$Character$$charTypesFirst256);
});
var $d_jl_Character$ = new $TypeData().initClass($c_jl_Character$, "java.lang.Character$", ({
  jl_Character$: 1,
  Ljava_io_Serializable: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Integer$() {
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.java$lang$Integer$$parseIntFail__T__E = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$c_jl_Integer$.prototype.java$lang$Integer$$parseIntImpl__T__I__I__I = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    this.java$lang$Integer$$parseIntFail__T__E(s);
  }
  var this$1 = $n(s);
  var len = this$1.length;
  if ((len === 0)) {
    this.java$lang$Integer$$parseIntFail__T__E(s);
  }
  var character = $m_jl_Character$();
  var this$2 = $n(s);
  var firstChar = $charAt(this$2, 0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    this.java$lang$Integer$$parseIntFail__T__E(s);
  }
  var result = 0;
  while ((i !== len)) {
    var this$3 = $n(s);
    var index = i;
    var digit = character.digitWithValidRadix__I__I__I($charAt(this$3, index), radix);
    if (((digit === (-1)) || ((result >>> 0) > (overflowBarrier >>> 0)))) {
      this.java$lang$Integer$$parseIntFail__T__E(s);
    }
    result = ((Math.imul(result, radix) + digit) | 0);
    i = ((1 + i) | 0);
  }
  if (((result >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    this.java$lang$Integer$$parseIntFail__T__E(s);
  }
  return (((result ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().initClass($c_jl_Integer$, "java.lang.Integer$", ({
  jl_Integer$: 1,
  Ljava_io_Serializable: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Number() {
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)));
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth));
}
/** @constructor */
function $c_jl_String$() {
}
$c_jl_String$.prototype = new $h_O();
$c_jl_String$.prototype.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
}
$h_jl_String$.prototype = $c_jl_String$.prototype;
$c_jl_String$.prototype.new__AC__I__I__T = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > $n(value).u.length))) {
    throw $ct_jl_StringIndexOutOfBoundsException__(new $c_jl_StringIndexOutOfBoundsException());
  }
  var result = "";
  var i = offset;
  while ((i !== end)) {
    var $x_1 = result;
    var this$1 = $n(value).get(i);
    result = ($x_1 + ("" + $cToS(this$1)));
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_jl_String$ = new $TypeData().initClass($c_jl_String$, "java.lang.String$", ({
  jl_String$: 1,
  Ljava_io_Serializable: 1
}));
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$();
  }
  return $n_jl_String$;
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
  }
  getMessage__T() {
    return this.jl_Throwable__f_s;
  }
  fillInStackTrace__jl_Throwable() {
    var reference = (false ? this.sjs_js_JavaScriptException__f_exception : this);
    var identifyingString = Object.prototype.toString.call(reference);
    if ((identifyingString !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || $uZ(Object.isSealed(this)))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this);
  }
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that);
  }
  get "message"() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.toString__T();
  }
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"));
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)));
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth));
}
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.ju_regex_Matcher__f_lastMatch === null)) {
    throw new $c_jl_IllegalStateException("No match available");
  }
  return $thiz.ju_regex_Matcher__f_lastMatch;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.ju_regex_Matcher__f_pattern0 = null;
  this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = null;
  this.ju_regex_Matcher__f_regionStart0 = 0;
  this.ju_regex_Matcher__f_inputstr = null;
  this.ju_regex_Matcher__f_position = 0;
  this.ju_regex_Matcher__f_lastMatch = null;
  this.ju_regex_Matcher__f_pattern0 = pattern0;
  this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = input0;
  this.ju_regex_Matcher__f_regionStart0 = 0;
  $n(this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0);
  this.ju_regex_Matcher__f_inputstr = this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0;
  this.ju_regex_Matcher__f_position = 0;
  this.ju_regex_Matcher__f_lastMatch = null;
}
$c_ju_regex_Matcher.prototype = new $h_O();
$c_ju_regex_Matcher.prototype.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $c_ju_regex_Matcher.prototype;
$c_ju_regex_Matcher.prototype.find__Z = (function() {
  var this$1 = $n(this.ju_regex_Matcher__f_pattern0);
  var input = this.ju_regex_Matcher__f_inputstr;
  var start = this.ju_regex_Matcher__f_position;
  var mtch = this$1.java$util$regex$Pattern$$execFindInternal__T__I__O(input, start);
  var end = $uI(this$1.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind.lastIndex);
  if ((mtch !== null)) {
    var $x_1 = ((end === $uI(mtch.index)) ? ((1 + end) | 0) : end);
  } else {
    var this$2 = $n(this.ju_regex_Matcher__f_inputstr);
    var $x_1 = ((1 + this$2.length) | 0);
  }
  this.ju_regex_Matcher__f_position = $x_1;
  this.ju_regex_Matcher__f_lastMatch = mtch;
  return (mtch !== null);
});
$c_ju_regex_Matcher.prototype.start__I = (function() {
  return (($uI($p_ju_regex_Matcher__ensureLastMatch__O(this).index) + this.ju_regex_Matcher__f_regionStart0) | 0);
});
$c_ju_regex_Matcher.prototype.end__I = (function() {
  var $x_1 = this.start__I();
  var this$1 = $n(this.group__T());
  return (($x_1 + this$1.length) | 0);
});
$c_ju_regex_Matcher.prototype.group__T = (function() {
  var x = $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
  return $as_T(x);
});
var $d_ju_regex_Matcher = new $TypeData().initClass($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  ju_regex_Matcher: 1,
  ju_regex_MatchResult: 1
}));
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.ju_regex_Pattern__f__pattern = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = false;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = null;
  this.ju_regex_Pattern__f__pattern = _pattern;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = jsFlags;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = sticky;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = new RegExp(jsPattern, (this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags + (this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky ? "gy" : "g")));
  new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$c_ju_regex_Pattern.prototype = new $h_O();
$c_ju_regex_Pattern.prototype.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $c_ju_regex_Pattern.prototype;
$c_ju_regex_Pattern.prototype.java$util$regex$Pattern$$execFindInternal__T__I__O = (function(input, start) {
  var regexp = this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$c_ju_regex_Pattern.prototype.toString__T = (function() {
  return this.ju_regex_Pattern__f__pattern;
});
$c_ju_regex_Pattern.prototype.java$util$regex$Pattern$$split__T__I__AT = (function(inputStr, limit) {
  if ((inputStr === "")) {
    return new ($d_T.getArrayOf().constr)([""]);
  } else {
    var lim = ((limit > 0) ? limit : 2147483647);
    var this$1 = $n(inputStr);
    var matcher = new $c_ju_regex_Matcher(this, this$1);
    var result = [];
    var prevEnd = 0;
    while ((($uI(result.length) < (((-1) + lim) | 0)) && matcher.find__Z())) {
      if ((matcher.end__I() !== 0)) {
        var this$2 = $n(inputStr);
        var beginIndex = prevEnd;
        var endIndex = matcher.start__I();
        if ((beginIndex < 0)) {
          $charAt(this$2, beginIndex);
        }
        if ((endIndex > this$2.length)) {
          $charAt(this$2, endIndex);
        }
        if ((endIndex < beginIndex)) {
          $charAt(this$2, (-1));
        }
        var $x_1 = result.push($as_T(this$2.substring(beginIndex, endIndex)));
        $uI($x_1);
      }
      prevEnd = matcher.end__I();
    }
    var this$3 = $n(inputStr);
    var beginIndex$1 = prevEnd;
    if (((beginIndex$1 < 0) || (beginIndex$1 > this$3.length))) {
      $charAt(this$3, beginIndex$1);
    }
    result.push($as_T(this$3.substring(beginIndex$1)));
    var actualLength = $uI(result.length);
    if ((limit === 0)) {
      while (true) {
        if ((actualLength !== 0)) {
          var x = result[(((-1) + actualLength) | 0)];
          var $x_2 = ((x !== null) && $dp_equals__O__Z($n(x), ""));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          actualLength = (((-1) + actualLength) | 0);
        } else {
          break;
        }
      }
    }
    var r = new ($d_T.getArrayOf().constr)(actualLength);
    var end = actualLength;
    var i = 0;
    while ((i < end)) {
      var value = i;
      r.set(value, $as_T(result[value]));
      i = ((1 + i) | 0);
    }
    return r;
  }
});
var $d_ju_regex_Pattern = new $TypeData().initClass($c_ju_regex_Pattern, "java.util.regex.Pattern", ({
  ju_regex_Pattern: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_$less$colon$less$() {
  this.s_$less$colon$less$__f_singleton = null;
  $n_s_$less$colon$less$ = this;
  this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1();
}
$c_s_$less$colon$less$.prototype = new $h_O();
$c_s_$less$colon$less$.prototype.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $c_s_$less$colon$less$.prototype;
var $d_s_$less$colon$less$ = new $TypeData().initClass($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  s_$less$colon$less$: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_$less$colon$less$;
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$();
  }
  return $n_s_$less$colon$less$;
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
/** @constructor */
function $c_s_Array$() {
}
$c_s_Array$.prototype = new $h_O();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__O = (function(it, evidence$3) {
  var n = $n(it).knownSize__I();
  if ((n > (-1))) {
    var elements = $n(evidence$3).newArray__I__O(n);
    var iterator = $n(it).iterator__sc_Iterator();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().array_update__O__I__O__V(elements, i, $n(iterator).next__O());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = $n(evidence$3).runtimeClass__jl_Class();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.getClassOf());
    jsElems = [];
    var iterator$2 = $n(it).iterator__sc_Iterator();
    while ($n(iterator$2).hasNext__Z()) {
      var elem = $n(iterator$2).next__O();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $n(elementClass).data.zero : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.getClassOf()) ? $d_jl_Void.getClassOf() : (((elementClass === $d_sr_Null$.getClassOf()) || (elementClass === $d_sr_Nothing$.getClassOf())) ? $d_O.getClassOf() : elementClass));
    return $n(elemRuntimeClass).data.getArrayOf().wrapArray(jsElems);
  }
});
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var this$1 = $n(src);
  var srcClass = $objectGetClass(this$1);
  var this$2 = $n(srcClass);
  if (this$2.data.isArrayClass) {
    var this$3 = $n(dest);
    var this$4 = $n($objectGetClass(this$3));
    var $x_1 = this$4.data.isAssignableFrom($n(srcClass).data);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    $systemArraycopyFull($n(src), srcPos, $n(dest), destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$c_s_Array$.prototype.equals__AO__AO__Z = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if (($n(xs).u.length !== $n(ys).u.length)) {
    return false;
  }
  var len = $n(xs).u.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($n(xs).get(i), $n(ys).get(i)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().initClass($c_s_Array$, "scala.Array$", ({
  s_Array$: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_Console$() {
  this.s_Console$__f_outVar = null;
  $n_s_Console$ = this;
  this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
}
$c_s_Console$.prototype = new $h_O();
$c_s_Console$.prototype.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $c_s_Console$.prototype;
$c_s_Console$.prototype.out__Ljava_io_PrintStream = (function() {
  return $as_Ljava_io_PrintStream($n(this.s_Console$__f_outVar).s_util_DynamicVariable__f_v);
});
var $d_s_Console$ = new $TypeData().initClass($c_s_Console$, "scala.Console$", ({
  s_Console$: 1,
  s_io_AnsiColor: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$c_s_LowPriorityImplicits.prototype.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $c_s_LowPriorityImplicits.prototype;
$c_s_LowPriorityImplicits.prototype.wrapRefArray__AO__scm_ArraySeq$ofRef = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if (($n(xs).u.length === 0)) {
    var this$1 = $m_scm_ArraySeq$();
    return this$1.scm_ArraySeq$__f_EmptyArraySeq;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
/** @constructor */
function $c_s_Option$() {
}
$c_s_Option$.prototype = new $h_O();
$c_s_Option$.prototype.constructor = $c_s_Option$;
/** @constructor */
function $h_s_Option$() {
}
$h_s_Option$.prototype = $c_s_Option$.prototype;
$c_s_Option$.prototype.apply__O__s_Option = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
});
var $d_s_Option$ = new $TypeData().initClass($c_s_Option$, "scala.Option$", ({
  s_Option$: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_Option$;
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$();
  }
  return $n_s_Option$;
}
function $f_s_PartialFunction__andThen__F1__s_PartialFunction($thiz, k) {
  if ($is_s_PartialFunction(k)) {
    var x2 = $as_s_PartialFunction(k);
    return new $c_s_PartialFunction$Combined($thiz, x2);
  } else {
    return new $c_s_PartialFunction$AndThen($thiz, k);
  }
}
function $is_s_PartialFunction(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_PartialFunction)));
}
function $as_s_PartialFunction(obj) {
  return (($is_s_PartialFunction(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.PartialFunction"));
}
function $isArrayOf_s_PartialFunction(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_PartialFunction)));
}
function $asArrayOf_s_PartialFunction(obj, depth) {
  return (($isArrayOf_s_PartialFunction(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.PartialFunction;", depth));
}
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.addAll__sc_IterableOnce__scm_Growable($m_scm_Buffer$().from__sc_IterableOnce__sc_SeqOps(elems));
  } else {
    var it = $n(elems).iterator__sc_Iterator();
    while ($n(it).hasNext__Z()) {
      $thiz.addOne__O__scm_Growable($n(it).next__O());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.s_reflect_ClassTag$__f_Byte = null;
  this.s_reflect_ClassTag$__f_Short = null;
  this.s_reflect_ClassTag$__f_Char = null;
  this.s_reflect_ClassTag$__f_Int = null;
  this.s_reflect_ClassTag$__f_Long = null;
  this.s_reflect_ClassTag$__f_Float = null;
  this.s_reflect_ClassTag$__f_Double = null;
  this.s_reflect_ClassTag$__f_Boolean = null;
  this.s_reflect_ClassTag$__f_Unit = null;
  this.s_reflect_ClassTag$__f_Any = null;
  this.s_reflect_ClassTag$__f_Object = null;
  this.s_reflect_ClassTag$__f_AnyRef = null;
  this.s_reflect_ClassTag$__f_Nothing = null;
  this.s_reflect_ClassTag$__f_Null = null;
  $n_s_reflect_ClassTag$ = this;
  this.s_reflect_ClassTag$__f_Byte = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.s_reflect_ClassTag$__f_Short = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.s_reflect_ClassTag$__f_Char = $m_s_reflect_ManifestFactory$CharManifest$();
  this.s_reflect_ClassTag$__f_Int = $m_s_reflect_ManifestFactory$IntManifest$();
  this.s_reflect_ClassTag$__f_Long = $m_s_reflect_ManifestFactory$LongManifest$();
  this.s_reflect_ClassTag$__f_Float = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.s_reflect_ClassTag$__f_Double = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.s_reflect_ClassTag$__f_Boolean = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.s_reflect_ClassTag$__f_Unit = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.s_reflect_ClassTag$__f_Any = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.s_reflect_ClassTag$__f_Object = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.s_reflect_ClassTag$__f_AnyRef = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.s_reflect_ClassTag$__f_Nothing = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.s_reflect_ClassTag$__f_Null = $m_s_reflect_ManifestFactory$NullManifest$();
}
$c_s_reflect_ClassTag$.prototype = new $h_O();
$c_s_reflect_ClassTag$.prototype.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $c_s_reflect_ClassTag$.prototype;
$c_s_reflect_ClassTag$.prototype.apply__jl_Class__s_reflect_ClassTag = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.getClassOf()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.getClassOf()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.getClassOf()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.getClassOf()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.getClassOf()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.getClassOf()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.getClassOf()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.getClassOf()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.getClassOf()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.getClassOf()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.getClassOf()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.getClassOf()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().initClass($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  s_reflect_ClassTag$: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.compose__F1__F1 = (function(g) {
  return $f_F1__compose__F1__F1(this, g);
});
$c_sr_AbstractFunction1.prototype.andThen__F1__F1 = (function(g) {
  return $f_F1__andThen__F1__F1(this, g);
});
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$c_sr_AbstractFunction2.prototype = new $h_O();
$c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
$c_sr_AbstractFunction2.prototype.toString__T = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction4() {
}
$c_sr_AbstractFunction4.prototype = new $h_O();
$c_sr_AbstractFunction4.prototype.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
}
$h_sr_AbstractFunction4.prototype = $c_sr_AbstractFunction4.prototype;
$c_sr_AbstractFunction4.prototype.toString__T = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_LazyRef() {
  this.sr_LazyRef__f__initialized = false;
  this.sr_LazyRef__f__value = null;
}
$c_sr_LazyRef.prototype = new $h_O();
$c_sr_LazyRef.prototype.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $c_sr_LazyRef.prototype;
$c_sr_LazyRef.prototype.initialize__O__O = (function(value) {
  this.sr_LazyRef__f__value = value;
  this.sr_LazyRef__f__initialized = true;
  return value;
});
$c_sr_LazyRef.prototype.toString__T = (function() {
  return ("LazyRef " + (this.sr_LazyRef__f__initialized ? ("of: " + this.sr_LazyRef__f__value) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().initClass($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  sr_LazyRef: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
  this.unorderedHash__sc_IterableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed);
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x2 = $as_sc_IndexedSeq(xs);
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else if ((xs instanceof $c_sci_List)) {
    var x3 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_Reusability$() {
}
$c_Ljapgolly_scalajs_react_Reusability$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_Reusability$.prototype.constructor = $c_Ljapgolly_scalajs_react_Reusability$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_Reusability$() {
}
$h_Ljapgolly_scalajs_react_Reusability$.prototype = $c_Ljapgolly_scalajs_react_Reusability$.prototype;
$c_Ljapgolly_scalajs_react_Reusability$.prototype.by_$eq$eq__F2 = (function() {
  return new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((a, b) => $m_sr_BoxesRunTime$().equals__O__O__Z(a, b)));
});
$c_Ljapgolly_scalajs_react_Reusability$.prototype.equals$extension__F2__O__Z = (function(this$, x$0) {
  if ((x$0 instanceof $c_Ljapgolly_scalajs_react_Reusability)) {
    var x$0$2 = ((x$0 === null) ? null : $n($as_Ljapgolly_scalajs_react_Reusability(x$0)).Ljapgolly_scalajs_react_Reusability__f_test);
    if ((this$ === null)) {
      return (x$0$2 === null);
    } else {
      var this$1 = $n(this$);
      return (this$1 === x$0$2);
    }
  } else {
    return false;
  }
});
var $d_Ljapgolly_scalajs_react_Reusability$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_Reusability$, "japgolly.scalajs.react.Reusability$", ({
  Ljapgolly_scalajs_react_Reusability$: 1,
  Ljapgolly_scalajs_react_ReusabilityMacros: 1,
  Ljapgolly_scalajs_react_ScalaVersionSpecificReusability: 1
}));
var $n_Ljapgolly_scalajs_react_Reusability$;
function $m_Ljapgolly_scalajs_react_Reusability$() {
  if ((!$n_Ljapgolly_scalajs_react_Reusability$)) {
    $n_Ljapgolly_scalajs_react_Reusability$ = new $c_Ljapgolly_scalajs_react_Reusability$();
  }
  return $n_Ljapgolly_scalajs_react_Reusability$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent(displayName, buildFn) {
  this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent__f_displayName = null;
  this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent__f_buildFn = null;
  this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent__f_displayName = displayName;
  this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent__f_buildFn = buildFn;
}
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent.prototype.constructor = $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent;
/** @constructor */
function $h_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent() {
}
$h_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent.prototype = $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent.prototype;
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent.prototype.next__F1__Ljapgolly_scalajs_react_hooks_CustomHook$Builder$SubsequentStep__O = (function(f, step) {
  return $n($n(step).next__F3()).apply__O__O__O__O(this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent__f_buildFn, f, this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent__f_displayName);
});
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent.prototype.buildReturning__F1__F1 = (function(f) {
  return $n(this.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent__f_buildFn).apply__F1__F1(f);
});
$c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent.prototype.next__F1__Ljapgolly_scalajs_react_hooks_Api$AbstractStep__O = (function(f, step) {
  return this.next__F1__Ljapgolly_scalajs_react_hooks_CustomHook$Builder$SubsequentStep__O(f, $as_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$SubsequentStep(step));
});
function $as_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.hooks.CustomHook$Builder$Subsequent"));
}
function $isArrayOf_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent)));
}
function $asArrayOf_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.hooks.CustomHook$Builder$Subsequent;", depth));
}
var $d_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent = new $TypeData().initClass($c_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent, "japgolly.scalajs.react.hooks.CustomHook$Builder$Subsequent", ({
  Ljapgolly_scalajs_react_hooks_CustomHook$Builder$Subsequent: 1,
  Ljapgolly_scalajs_react_hooks_Api$Primary: 1,
  Ljapgolly_scalajs_react_hooks_Api$Secondary: 1
}));
function $is_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$SubsequentStep(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$SubsequentStep)));
}
function $as_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$SubsequentStep(obj) {
  return (($is_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$SubsequentStep(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.hooks.CustomHook$Builder$SubsequentStep"));
}
function $isArrayOf_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$SubsequentStep(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_hooks_CustomHook$Builder$SubsequentStep)));
}
function $asArrayOf_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$SubsequentStep(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_hooks_CustomHook$Builder$SubsequentStep(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.hooks.CustomHook$Builder$SubsequentStep;", depth));
}
function $f_Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr__$init$__V($thiz) {
  $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$();
  $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$();
  $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$();
  $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$();
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement() {
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_styles = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_children = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_key = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_nonEmptyClassName = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addEventHandler = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addStyle = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_appendChild = null;
  $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__$init$__V(this);
}
$c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement() {
}
$h_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement.prototype = $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement.prototype;
$c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement.prototype.render__T__Ljapgolly_scalajs_react_facade_React$Element = (function(tag) {
  $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__addClassNameToProps__V(this);
  $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__addStyleToProps__V(this);
  return $n($m_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$().Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$__f_build).apply__O__O__O__O__O(tag, this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props, this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_key, this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_children);
});
var $d_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement, "japgolly.scalajs.react.vdom.VdomBuilder$ToRawReactElement", ({
  Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement: 1,
  Ljapgolly_scalajs_react_vdom_VdomBuilder: 1,
  Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1(n$2) {
  this.Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1__f_n$1 = null;
  this.Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1__f_n$1 = n$2;
}
$c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1() {
}
$h_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype = $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype;
$c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype.applyTo__Ljapgolly_scalajs_react_vdom_VdomBuilder__V = (function(b) {
  $n($n(b).Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_appendChild).apply__O__O(this.Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1__f_n$1);
});
$c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype.rawNode__O = (function() {
  return this.Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1__f_n$1;
});
var $d_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1 = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1, "japgolly.scalajs.react.vdom.VdomNode$$anon$1", ({
  Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1: 1,
  Ljapgolly_scalajs_react_vdom_TagMod: 1,
  Ljapgolly_scalajs_react_vdom_VdomNode: 1
}));
/** @constructor */
function $c_jl_Class($data) {
  this.data = $data;
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.data.isInterface ? "interface " : (this.data.isPrimitive ? "" : "class ")) + this.data.name);
});
var $d_jl_Class = new $TypeData().initClass($c_jl_Class, "java.lang.Class", ({
  jl_Class: 1,
  Ljava_io_Serializable: 1,
  jl_constant_Constable: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_s_$less$colon$less() {
}
$c_s_$less$colon$less.prototype = new $h_O();
$c_s_$less$colon$less.prototype.constructor = $c_s_$less$colon$less;
/** @constructor */
function $h_s_$less$colon$less() {
}
$h_s_$less$colon$less.prototype = $c_s_$less$colon$less.prototype;
/** @constructor */
function $c_s_Predef$() {
}
$c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$c_s_Predef$.prototype.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $c_s_Predef$.prototype;
var $d_s_Predef$ = new $TypeData().initClass($c_s_Predef$, "scala.Predef$", ({
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  s_LowPriorityImplicits2: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T2__f__1;
      break;
    }
    case 1: {
      return $thiz.T2__f__2;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null;
}
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype;
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.from__sc_IterableOnce__O = (function(it) {
  return $n(this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate).from__sc_IterableOnce__O__O(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).concat__F0__sc_Iterator(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = $n(that).iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && $n(those).hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), $n(those).next__O()))) {
      return false;
    }
  }
  return ($thiz.hasNext__Z() === $n(those).hasNext__Z());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19();
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass($c_sc_Iterator$, "scala.collection.Iterator$", ({
  sc_Iterator$: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)));
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"));
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)));
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth));
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"));
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)));
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f = null;
  this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f = f;
}
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype;
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype.apply__O = (function() {
  return $n(this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().initClass($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855: 1,
  sr_AbstractFunction0: 1,
  F0: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28__f_f = null;
  this.sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28__f_f = f;
}
$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype;
$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype.apply__O__O = (function(x0) {
  return $n(this.sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28__f_f)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().initClass($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28: 1,
  sr_AbstractFunction1: 1,
  F1: 1
}));
var $d_sr_Nothing$ = new $TypeData().initClass(0, "scala.runtime.Nothing$", ({
  sr_Nothing$: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$c_sjs_js_Any$.prototype = new $h_O();
$c_sjs_js_Any$.prototype.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $c_sjs_js_Any$.prototype;
$c_sjs_js_Any$.prototype.fromFunction1__F1__sjs_js_Function1 = (function(f) {
  return ((arg1$2) => $n(f).apply__O__O(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().initClass($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  sjs_js_Any$: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
/** @constructor */
function $c_sjsr_AnonFunction0() {
}
$c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
}
$h_sjsr_AnonFunction0.prototype = $c_sjsr_AnonFunction0.prototype;
/** @constructor */
function $c_sjsr_AnonFunction1() {
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
/** @constructor */
function $c_sjsr_AnonFunction2() {
}
$c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$c_sjsr_AnonFunction2.prototype.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
}
$h_sjsr_AnonFunction2.prototype = $c_sjsr_AnonFunction2.prototype;
/** @constructor */
function $c_sjsr_AnonFunction4() {
}
$c_sjsr_AnonFunction4.prototype = new $h_sr_AbstractFunction4();
$c_sjsr_AnonFunction4.prototype.constructor = $c_sjsr_AnonFunction4;
/** @constructor */
function $h_sjsr_AnonFunction4() {
}
$h_sjsr_AnonFunction4.prototype = $c_sjsr_AnonFunction4.prototype;
function $as_Ljapgolly_scalajs_react_CtorType$Mod(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.CtorType$Mod"));
}
function $isArrayOf_Ljapgolly_scalajs_react_CtorType$Mod(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_CtorType$Mod)));
}
function $asArrayOf_Ljapgolly_scalajs_react_CtorType$Mod(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_CtorType$Mod(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.CtorType$Mod;", depth));
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_ReactRoot(raw) {
  this.Ljapgolly_scalajs_react_ReactRoot__f_raw = null;
  this.Ljapgolly_scalajs_react_ReactRoot__f_raw = raw;
}
$c_Ljapgolly_scalajs_react_ReactRoot.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_ReactRoot.prototype.constructor = $c_Ljapgolly_scalajs_react_ReactRoot;
/** @constructor */
function $h_Ljapgolly_scalajs_react_ReactRoot() {
}
$h_Ljapgolly_scalajs_react_ReactRoot.prototype = $c_Ljapgolly_scalajs_react_ReactRoot.prototype;
$c_Ljapgolly_scalajs_react_ReactRoot.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Ljapgolly_scalajs_react_ReactRoot.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Ljapgolly_scalajs_react_ReactRoot.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ljapgolly_scalajs_react_ReactRoot)) {
    var x$0$2 = $as_Ljapgolly_scalajs_react_ReactRoot(x$0);
    var x = this.Ljapgolly_scalajs_react_ReactRoot__f_raw;
    var y = $n(x$0$2).Ljapgolly_scalajs_react_ReactRoot__f_raw;
    return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y);
  } else {
    return false;
  }
});
$c_Ljapgolly_scalajs_react_ReactRoot.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Ljapgolly_scalajs_react_ReactRoot.prototype.productArity__I = (function() {
  return 1;
});
$c_Ljapgolly_scalajs_react_ReactRoot.prototype.productPrefix__T = (function() {
  return "ReactRoot";
});
$c_Ljapgolly_scalajs_react_ReactRoot.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Ljapgolly_scalajs_react_ReactRoot__f_raw;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Ljapgolly_scalajs_react_ReactRoot(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_ReactRoot) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.ReactRoot"));
}
function $isArrayOf_Ljapgolly_scalajs_react_ReactRoot(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_ReactRoot)));
}
function $asArrayOf_Ljapgolly_scalajs_react_ReactRoot(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_ReactRoot(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.ReactRoot;", depth));
}
var $d_Ljapgolly_scalajs_react_ReactRoot = new $TypeData().initClass($c_Ljapgolly_scalajs_react_ReactRoot, "japgolly.scalajs.react.ReactRoot", ({
  Ljapgolly_scalajs_react_ReactRoot: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_DefaultEffects$() {
  this.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync = null;
  $n_Ljapgolly_scalajs_react_util_DefaultEffects$ = this;
  $m_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$();
  this.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync = $m_Ljapgolly_scalajs_react_util_EffectCallback$callback$();
}
$c_Ljapgolly_scalajs_react_util_DefaultEffects$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_DefaultEffects$.prototype.constructor = $c_Ljapgolly_scalajs_react_util_DefaultEffects$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_DefaultEffects$() {
}
$h_Ljapgolly_scalajs_react_util_DefaultEffects$.prototype = $c_Ljapgolly_scalajs_react_util_DefaultEffects$.prototype;
var $d_Ljapgolly_scalajs_react_util_DefaultEffects$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_util_DefaultEffects$, "japgolly.scalajs.react.util.DefaultEffects$", ({
  Ljapgolly_scalajs_react_util_DefaultEffects$: 1,
  Ljapgolly_scalajs_react_util_DefaultEffectsApiLowPri: 1,
  Ljapgolly_scalajs_react_util_DefaultEffectsLowPri: 1,
  Ljapgolly_scalajs_react_util_DefaultEffectsApi: 1
}));
var $n_Ljapgolly_scalajs_react_util_DefaultEffects$;
function $m_Ljapgolly_scalajs_react_util_DefaultEffects$() {
  if ((!$n_Ljapgolly_scalajs_react_util_DefaultEffects$)) {
    $n_Ljapgolly_scalajs_react_util_DefaultEffects$ = new $c_Ljapgolly_scalajs_react_util_DefaultEffects$();
  }
  return $n_Ljapgolly_scalajs_react_util_DefaultEffects$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$() {
  this.Ljapgolly_scalajs_react_vdom_Attr$EventCallback$__f_defaultSync = null;
  $n_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$ = this;
  var this$1 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
  var F = this$1.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
  this.Ljapgolly_scalajs_react_vdom_Attr$EventCallback$__f_defaultSync = $f_Ljapgolly_scalajs_react_vdom_Attr$EventCallback2__dispatch__Ljapgolly_scalajs_react_util_Effect$Dispatch__F1(this, F);
}
$c_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$() {
}
$h_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$.prototype = $c_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$, "japgolly.scalajs.react.vdom.Attr$EventCallback$", ({
  Ljapgolly_scalajs_react_vdom_Attr$EventCallback$: 1,
  Ljapgolly_scalajs_react_vdom_Attr$EventCallback1: 1,
  Ljapgolly_scalajs_react_vdom_Attr$EventCallback2: 1,
  Ljapgolly_scalajs_react_vdom_Attr$EventCallback3: 1
}));
var $n_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$;
function $m_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$)) {
    $n_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$ = new $c_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$();
  }
  return $n_Ljapgolly_scalajs_react_vdom_Attr$EventCallback$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$() {
  this.Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$__f_onClick = null;
  $n_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$ = this;
  $f_Ljapgolly_scalajs_react_vdom_HtmlAttrs__$init$__V(this);
}
$c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$() {
}
$h_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$.prototype = $c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$, "japgolly.scalajs.react.vdom.HtmlAttrAndStyles$", ({
  Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$: 1,
  Ljapgolly_scalajs_react_vdom_HtmlAttrs: 1,
  Ljapgolly_scalajs_react_vdom_HtmlStyles: 1,
  Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles: 1
}));
var $n_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$;
function $m_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$)) {
    $n_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$ = new $c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$();
  }
  return $n_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_TagOf(tag, modifiers) {
  this.Ljapgolly_scalajs_react_vdom_TagOf__f_tag = null;
  this.Ljapgolly_scalajs_react_vdom_TagOf__f_modifiers = null;
  this.Ljapgolly_scalajs_react_vdom_TagOf__f_rawElement$lzy1 = null;
  this.Ljapgolly_scalajs_react_vdom_TagOf__f_rawElementbitmap$1 = false;
  this.Ljapgolly_scalajs_react_vdom_TagOf__f_tag = tag;
  this.Ljapgolly_scalajs_react_vdom_TagOf__f_modifiers = modifiers;
}
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_TagOf;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_TagOf() {
}
$h_Ljapgolly_scalajs_react_vdom_TagOf.prototype = $c_Ljapgolly_scalajs_react_vdom_TagOf.prototype;
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype.rawNode__O = (function() {
  return this.rawElement__Ljapgolly_scalajs_react_facade_React$Element();
});
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype.rawElement__Ljapgolly_scalajs_react_facade_React$Element = (function() {
  if ((!this.Ljapgolly_scalajs_react_vdom_TagOf__f_rawElementbitmap$1)) {
    var b = new $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement();
    var arr = [];
    var current = this.Ljapgolly_scalajs_react_vdom_TagOf__f_modifiers;
    while (true) {
      var x = current;
      var x$2 = $m_sci_Nil$();
      if ((!((x !== null) && $n(x).equals__O__Z(x$2)))) {
        arr.push($as_sci_Seq($n(current).head__O()));
        current = $as_sci_List($n(current).tail__O());
      } else {
        break;
      }
    }
    var j = $uI(arr.length);
    while ((j > 0)) {
      j = (((-1) + j) | 0);
      $n($as_sc_IterableOnceOps(arr[j])).foreach__F1__V(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b) => ((_$1) => {
        var _$1$1 = $as_Ljapgolly_scalajs_react_vdom_TagMod(_$1);
        $n(_$1$1).applyTo__Ljapgolly_scalajs_react_vdom_VdomBuilder__V(b);
      }))(b)));
    }
    this.Ljapgolly_scalajs_react_vdom_TagOf__f_rawElement$lzy1 = b.render__T__Ljapgolly_scalajs_react_facade_React$Element(this.Ljapgolly_scalajs_react_vdom_TagOf__f_tag);
    this.Ljapgolly_scalajs_react_vdom_TagOf__f_rawElementbitmap$1 = true;
  }
  return this.Ljapgolly_scalajs_react_vdom_TagOf__f_rawElement$lzy1;
});
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype.applyTo__Ljapgolly_scalajs_react_vdom_VdomBuilder__V = (function(b) {
  $n($n(b).Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_appendChild).apply__O__O(this.rawElement__Ljapgolly_scalajs_react_facade_React$Element());
});
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype.toString__T = (function() {
  return ($n(this.Ljapgolly_scalajs_react_vdom_TagOf__f_modifiers).isEmpty__Z() ? (("<" + this.Ljapgolly_scalajs_react_vdom_TagOf__f_tag) + " />") : (((("<" + this.Ljapgolly_scalajs_react_vdom_TagOf__f_tag) + ">\u2026</") + this.Ljapgolly_scalajs_react_vdom_TagOf__f_tag) + ">"));
});
var $d_Ljapgolly_scalajs_react_vdom_TagOf = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_TagOf, "japgolly.scalajs.react.vdom.TagOf", ({
  Ljapgolly_scalajs_react_vdom_TagOf: 1,
  Ljapgolly_scalajs_react_vdom_TagMod: 1,
  Ljapgolly_scalajs_react_vdom_VdomNode: 1,
  Ljapgolly_scalajs_react_vdom_VdomElement: 1
}));
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$c_Ljava_io_OutputStream.prototype = new $h_O();
$c_Ljava_io_OutputStream.prototype.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $c_Ljava_io_OutputStream.prototype;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    var message = ("" + detailMessage);
    if ((detailMessage instanceof $c_jl_Throwable)) {
      var x2 = $as_jl_Throwable(detailMessage);
      var cause = x2;
    } else {
      var cause = null;
    }
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().initClass($c_jl_AssertionError, "java.lang.AssertionError", ({
  jl_AssertionError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().initClass(0, "java.lang.Boolean", ({
  jl_Boolean: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $n($as_jl_Character(that)).c;
    return ($thiz === this$1);
  } else {
    return false;
  }
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)));
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth));
}
var $d_jl_Character = new $TypeData().initClass(0, "java.lang.Character", ({
  jl_Character: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null;
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.append__AC__jl_StringBuilder = (function(str) {
  var this$1 = $m_jl_String$();
  var count = $n(str).u.length;
  var str$1 = this$1.new__AC__I__I__T(str, 0, count);
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
  return this;
});
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return this$1.length;
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return $charAt(this$1, index);
});
var $d_jl_StringBuilder = new $TypeData().initClass($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  jl_StringBuilder: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
/** @constructor */
function $c_s_$eq$colon$eq() {
}
$c_s_$eq$colon$eq.prototype = new $h_s_$less$colon$less();
$c_s_$eq$colon$eq.prototype.constructor = $c_s_$eq$colon$eq;
/** @constructor */
function $h_s_$eq$colon$eq() {
}
$h_s_$eq$colon$eq.prototype = $c_s_$eq$colon$eq.prototype;
/** @constructor */
function $c_s_PartialFunction$AndThen(pf, k) {
  this.s_PartialFunction$AndThen__f_pf = null;
  this.s_PartialFunction$AndThen__f_k = null;
  this.s_PartialFunction$AndThen__f_pf = pf;
  this.s_PartialFunction$AndThen__f_k = k;
}
$c_s_PartialFunction$AndThen.prototype = new $h_O();
$c_s_PartialFunction$AndThen.prototype.constructor = $c_s_PartialFunction$AndThen;
/** @constructor */
function $h_s_PartialFunction$AndThen() {
}
$h_s_PartialFunction$AndThen.prototype = $c_s_PartialFunction$AndThen.prototype;
$c_s_PartialFunction$AndThen.prototype.compose__F1__F1 = (function(g) {
  return $f_F1__compose__F1__F1(this, g);
});
$c_s_PartialFunction$AndThen.prototype.toString__T = (function() {
  return "<function1>";
});
$c_s_PartialFunction$AndThen.prototype.apply__O__O = (function(x) {
  return $n(this.s_PartialFunction$AndThen__f_k).apply__O__O($n(this.s_PartialFunction$AndThen__f_pf).apply__O__O(x));
});
$c_s_PartialFunction$AndThen.prototype.andThen__F1__F1 = (function(g) {
  return $f_s_PartialFunction__andThen__F1__s_PartialFunction(this, g);
});
var $d_s_PartialFunction$AndThen = new $TypeData().initClass($c_s_PartialFunction$AndThen, "scala.PartialFunction$AndThen", ({
  s_PartialFunction$AndThen: 1,
  s_PartialFunction: 1,
  F1: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_PartialFunction$Combined(pf, k) {
  this.s_PartialFunction$Combined__f_pf = null;
  this.s_PartialFunction$Combined__f_k = null;
  this.s_PartialFunction$Combined__f_pf = pf;
  this.s_PartialFunction$Combined__f_k = k;
}
$c_s_PartialFunction$Combined.prototype = new $h_O();
$c_s_PartialFunction$Combined.prototype.constructor = $c_s_PartialFunction$Combined;
/** @constructor */
function $h_s_PartialFunction$Combined() {
}
$h_s_PartialFunction$Combined.prototype = $c_s_PartialFunction$Combined.prototype;
$c_s_PartialFunction$Combined.prototype.compose__F1__F1 = (function(g) {
  return $f_F1__compose__F1__F1(this, g);
});
$c_s_PartialFunction$Combined.prototype.toString__T = (function() {
  return "<function1>";
});
$c_s_PartialFunction$Combined.prototype.apply__O__O = (function(x) {
  return $n(this.s_PartialFunction$Combined__f_k).apply__O__O($n(this.s_PartialFunction$Combined__f_pf).apply__O__O(x));
});
$c_s_PartialFunction$Combined.prototype.andThen__F1__F1 = (function(g) {
  return $f_s_PartialFunction__andThen__F1__s_PartialFunction(this, g);
});
var $d_s_PartialFunction$Combined = new $TypeData().initClass($c_s_PartialFunction$Combined, "scala.PartialFunction$Combined", ({
  s_PartialFunction$Combined: 1,
  s_PartialFunction: 1,
  F1: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this;
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return this.sliceIterator__I__I__sc_Iterator(n, (-1));
});
$c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>";
});
$c_sc_AbstractIterator.prototype.foreach__F1__V = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$c_sc_AbstractIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1);
});
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
}
$c_sc_SeqFactory$Delegate.prototype = new $h_O();
$c_sc_SeqFactory$Delegate.prototype.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $c_sc_SeqFactory$Delegate.prototype;
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return $as_sc_SeqOps($n(this.sc_SeqFactory$Delegate__f_delegate).from__sc_IterableOnce__O(it));
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sc_SeqOps(source);
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = $n(that).knownSize__I();
    var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var knownSizeDifference = false;
  }
  if ((!knownSizeDifference)) {
    var this$1 = $n($thiz.iterator__sc_Iterator());
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that);
  } else {
    return false;
  }
}
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)));
}
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"));
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)));
}
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth));
}
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(f) {
  this.sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1__f_f = null;
  this.sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1__f_f = f;
}
$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = new $h_sjsr_AnonFunction0();
$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype.constructor = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1() {
}
$h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype;
$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype.apply__O = (function() {
  return $n(this.sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1__f_f)();
});
var $d_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1 = new $TypeData().initClass($c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1, "scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1", ({
  sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1: 1,
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  F0: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab__f_f = null;
  this.sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab__f_f = f;
}
$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype;
$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype.apply__O__O = (function(x0) {
  return $n(this.sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab__f_f)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().initClass($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab: 1,
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  F1: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(f) {
  this.sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2__f_f = null;
  this.sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2__f_f = f;
}
$c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = new $h_sjsr_AnonFunction2();
$c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype.constructor = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2() {
}
$h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype;
$c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype.apply__O__O__O = (function(x0, x1) {
  return $n(this.sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2__f_f)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2 = new $TypeData().initClass($c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2, "scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2", ({
  sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2: 1,
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  F2: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(f) {
  this.sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b__f_f = null;
  this.sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b__f_f = f;
}
$c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = new $h_sjsr_AnonFunction4();
$c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype.constructor = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b() {
}
$h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype;
$c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype.apply__O__O__O__O__O = (function(x0, x1, x2, x3) {
  return $n(this.sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b__f_f)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b = new $TypeData().initClass($c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b, "scala.scalajs.runtime.AnonFunction4.$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b", ({
  sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b: 1,
  sjsr_AnonFunction4: 1,
  sr_AbstractFunction4: 1,
  F4: 1
}));
function $as_s_util_CommandLineParser$ParseError(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.CommandLineParser$ParseError"));
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_CommandLineParser$ParseError)));
}
function $asArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (($isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.CommandLineParser$ParseError;", depth));
}
/** @constructor */
function $c_s_util_Try() {
}
$c_s_util_Try.prototype = new $h_O();
$c_s_util_Try.prototype.constructor = $c_s_util_Try;
/** @constructor */
function $h_s_util_Try() {
}
$h_s_util_Try.prototype = $c_s_util_Try.prototype;
function $as_s_util_Try(obj) {
  return (((obj instanceof $c_s_util_Try) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Try"));
}
function $isArrayOf_s_util_Try(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Try)));
}
function $asArrayOf_s_util_Try(obj, depth) {
  return (($isArrayOf_s_util_Try(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Try;", depth));
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_Ref$$anon$1(_raw$1, r$1, FF$1, l$1) {
  this.Ljapgolly_scalajs_react_Ref$$anon$1__f_FF$2 = null;
  this.Ljapgolly_scalajs_react_Ref$$anon$1__f_raw = null;
  this.Ljapgolly_scalajs_react_Ref$$anon$1__f_FF$2 = FF$1;
  this.Ljapgolly_scalajs_react_Ref$$anon$1__f_raw = _raw$1;
  $n(this.Ljapgolly_scalajs_react_Ref$$anon$1__f_FF$2).delay__F0__O(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    var an = this.Ljapgolly_scalajs_react_Ref$$anon$1__f_raw.current;
    var this$3 = $n($m_s_Option$().apply__O__s_Option(an));
    return (this$3.isEmpty__Z() ? $m_s_None$() : $as_s_Option($n(r$1).apply__O__O(this$3.get__O())));
  })));
}
$c_Ljapgolly_scalajs_react_Ref$$anon$1.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_Ref$$anon$1.prototype.constructor = $c_Ljapgolly_scalajs_react_Ref$$anon$1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_Ref$$anon$1() {
}
$h_Ljapgolly_scalajs_react_Ref$$anon$1.prototype = $c_Ljapgolly_scalajs_react_Ref$$anon$1.prototype;
var $d_Ljapgolly_scalajs_react_Ref$$anon$1 = new $TypeData().initClass($c_Ljapgolly_scalajs_react_Ref$$anon$1, "japgolly.scalajs.react.Ref$$anon$1", ({
  Ljapgolly_scalajs_react_Ref$$anon$1: 1,
  Ljapgolly_scalajs_react_Ref$HandleF: 1,
  Ljapgolly_scalajs_react_Ref$SetF: 1,
  Ljapgolly_scalajs_react_Ref$GetF: 1,
  Ljapgolly_scalajs_react_Ref$FullF: 1
}));
function $is_Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot)));
}
function $as_Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot(obj) {
  return (($is_Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.JsFn$UnmountedWithRoot"));
}
function $isArrayOf_Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot)));
}
function $asArrayOf_Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.JsFn$UnmountedWithRoot;", depth));
}
function $f_Ljapgolly_scalajs_react_util_Effect$Dispatch$WithDefaults__dispatchFn__F0__sjs_js_Function0($thiz, fa) {
  return (() => {
    $thiz.dispatch__O__V($n(fa).apply__O());
  });
}
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_Ljava_io_FilterOutputStream.prototype.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $c_Ljava_io_FilterOutputStream.prototype;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().initClass($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArrayStoreException = new $TypeData().initClass($c_jl_ArrayStoreException, "java.lang.ArrayStoreException", ({
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().initClass(0, "java.lang.Byte", ({
  jl_Byte: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ClassCastException = new $TypeData().initClass($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().initClass($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().initClass($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $as_jl_SecurityException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"));
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)));
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().initClass(0, "java.lang.Short", ({
  jl_Short: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().initClass($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : $n(cause).toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass($c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError, "org.scalajs.linker.runtime.UndefinedBehaviorError", ({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_$less$colon$less$$anon$1() {
}
$c_s_$less$colon$less$$anon$1.prototype = new $h_s_$eq$colon$eq();
$c_s_$less$colon$less$$anon$1.prototype.constructor = $c_s_$less$colon$less$$anon$1;
/** @constructor */
function $h_s_$less$colon$less$$anon$1() {
}
$h_s_$less$colon$less$$anon$1.prototype = $c_s_$less$colon$less$$anon$1.prototype;
$c_s_$less$colon$less$$anon$1.prototype.apply__O__O = (function(x) {
  return x;
});
$c_s_$less$colon$less$$anon$1.prototype.compose__F1__F1 = (function(r) {
  return r;
});
$c_s_$less$colon$less$$anon$1.prototype.andThen__F1__F1 = (function(r) {
  return r;
});
$c_s_$less$colon$less$$anon$1.prototype.toString__T = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  F1: 1,
  Ljava_io_Serializable: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true;
  }
  return $thiz.s_MatchError__f_objString;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $n($thiz.s_MatchError__f_obj);
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.s_MatchError__f_obj + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().initClass($c_s_MatchError, "scala.MatchError", ({
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_Option() {
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $c_s_Option.prototype;
$c_s_Option.prototype.isEmpty__Z = (function() {
  return (this === $m_s_None$());
});
$c_s_Option.prototype.knownSize__I = (function() {
  return (this.isEmpty__Z() ? 0 : 1);
});
$c_s_Option.prototype.iterator__sc_Iterator = (function() {
  if (this.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  } else {
    var a = this.get__O();
    return new $c_sc_Iterator$$anon$20(a);
  }
});
function $as_s_Option(obj) {
  return (((obj instanceof $c_s_Option) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Option"));
}
function $isArrayOf_s_Option(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Option)));
}
function $asArrayOf_s_Option(obj, depth) {
  return (($isArrayOf_s_Option(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Option;", depth));
}
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = 0;
  this.s_Product$$anon$1__f_$outer = null;
  $n(outer);
  this.s_Product$$anon$1__f_$outer = outer;
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = $n(outer).productArity__I();
}
$c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_s_Product$$anon$1.prototype.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $c_s_Product$$anon$1.prototype;
$c_s_Product$$anon$1.prototype.hasNext__Z = (function() {
  return (this.s_Product$$anon$1__f_c < this.s_Product$$anon$1__f_cmax);
});
$c_s_Product$$anon$1.prototype.next__O = (function() {
  var result = $n(this.s_Product$$anon$1__f_$outer).productElement__I__O(this.s_Product$$anon$1__f_c);
  this.s_Product$$anon$1__f_c = ((1 + this.s_Product$$anon$1__f_c) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().initClass($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  s_Product$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.T2__f__1 = null;
  this.T2__f__2 = null;
  this.T2__f__1 = _1;
  this.T2__f__2 = _2;
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2;
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")");
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2";
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_T2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_T2)) {
    var Tuple2$1 = $as_T2(x$1);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, $n(Tuple2$1).T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, $n(Tuple2$1).T2__f__2));
  } else {
    return false;
  }
});
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"));
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)));
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth));
}
var $d_T2 = new $TypeData().initClass($c_T2, "scala.Tuple2", ({
  T2: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().initClass($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  sc_ClassTagSeqFactory$AnySeqDelegate: 1,
  sc_ClassTagIterableFactory$AnyIterableDelegate: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1,
  sc_SeqFactory: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.className__T() + "("), ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false;
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0;
});
$c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return this;
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.sc_Iterator$$anon$20__f_consumed = false;
  this.sc_Iterator$$anon$20__f_a$1 = null;
  this.sc_Iterator$$anon$20__f_a$1 = a$1;
  this.sc_Iterator$$anon$20__f_consumed = false;
}
$c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$20.prototype.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $c_sc_Iterator$$anon$20.prototype;
$c_sc_Iterator$$anon$20.prototype.hasNext__Z = (function() {
  return (!this.sc_Iterator$$anon$20__f_consumed);
});
$c_sc_Iterator$$anon$20.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$20__f_consumed) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  } else {
    this.sc_Iterator$$anon$20__f_consumed = true;
    return this.sc_Iterator$$anon$20__f_a$1;
  }
});
$c_sc_Iterator$$anon$20.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return (((this.sc_Iterator$$anon$20__f_consumed || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().initClass($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_current instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $as_sc_Iterator$ConcatIterator($thiz.sc_Iterator$ConcatIterator__f_current);
      $thiz.sc_Iterator$ConcatIterator__f_current = $n(c).sc_Iterator$ConcatIterator__f_current;
      $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = $n(c).sc_Iterator$ConcatIterator__f_currentHasNextChecked;
      if (($n(c).sc_Iterator$ConcatIterator__f_tail !== null)) {
        if (($thiz.sc_Iterator$ConcatIterator__f_last === null)) {
          $thiz.sc_Iterator$ConcatIterator__f_last = $n(c).sc_Iterator$ConcatIterator__f_last;
        }
        $n($n(c).sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail;
        $thiz.sc_Iterator$ConcatIterator__f_tail = $n(c).sc_Iterator$ConcatIterator__f_tail;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_tail === null)) {
      $thiz.sc_Iterator$ConcatIterator__f_current = null;
      $thiz.sc_Iterator$ConcatIterator__f_last = null;
      return false;
    } else {
      $thiz.sc_Iterator$ConcatIterator__f_current = $n($thiz.sc_Iterator$ConcatIterator__f_tail).headIterator__sc_Iterator();
      if (($thiz.sc_Iterator$ConcatIterator__f_last === $thiz.sc_Iterator$ConcatIterator__f_tail)) {
        $thiz.sc_Iterator$ConcatIterator__f_last = $n($thiz.sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail;
      }
      $thiz.sc_Iterator$ConcatIterator__f_tail = $n($thiz.sc_Iterator$ConcatIterator__f_tail).sc_Iterator$ConcatIteratorCell__f_tail;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
        return true;
      } else if ((($thiz.sc_Iterator$ConcatIterator__f_current !== null) && $n($thiz.sc_Iterator$ConcatIterator__f_current).hasNext__Z())) {
        $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.sc_Iterator$ConcatIterator__f_current = null;
  this.sc_Iterator$ConcatIterator__f_tail = null;
  this.sc_Iterator$ConcatIterator__f_last = null;
  this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
  this.sc_Iterator$ConcatIterator__f_current = current;
  this.sc_Iterator$ConcatIterator__f_tail = null;
  this.sc_Iterator$ConcatIterator__f_last = null;
  this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
}
$c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$ConcatIterator.prototype.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $c_sc_Iterator$ConcatIterator.prototype;
$c_sc_Iterator$ConcatIterator.prototype.hasNext__Z = (function() {
  if (this.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
    return true;
  } else if ((this.sc_Iterator$ConcatIterator__f_current !== null)) {
    if ($n(this.sc_Iterator$ConcatIterator__f_current).hasNext__Z()) {
      this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$c_sc_Iterator$ConcatIterator.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
    return $n(this.sc_Iterator$ConcatIterator__f_current).next__O();
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
});
$c_sc_Iterator$ConcatIterator.prototype.concat__F0__sc_Iterator = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.sc_Iterator$ConcatIterator__f_tail === null)) {
    this.sc_Iterator$ConcatIterator__f_tail = c;
    this.sc_Iterator$ConcatIterator__f_last = c;
  } else {
    $n(this.sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail = c;
    this.sc_Iterator$ConcatIterator__f_last = c;
  }
  if ((this.sc_Iterator$ConcatIterator__f_current === null)) {
    this.sc_Iterator$ConcatIterator__f_current = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  }
  return this;
});
function $as_sc_Iterator$ConcatIterator(obj) {
  return (((obj instanceof $c_sc_Iterator$ConcatIterator) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator$ConcatIterator"));
}
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator$ConcatIterator)));
}
function $asArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (($isArrayOf_sc_Iterator$ConcatIterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator$ConcatIterator;", depth));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().initClass($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  sc_Iterator$ConcatIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($n($thiz.sc_Iterator$SliceIterator__f_underlying).hasNext__Z()) {
      $n($thiz.sc_Iterator$SliceIterator__f_underlying).next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0);
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1);
  } else {
    var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.sc_Iterator$SliceIterator__f_underlying = null;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
  this.sc_Iterator$SliceIterator__f_dropping = 0;
  this.sc_Iterator$SliceIterator__f_underlying = underlying;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
  this.sc_Iterator$SliceIterator__f_dropping = start;
}
$c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $c_sc_Iterator$SliceIterator.prototype;
$c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
  var size = $n(this.sc_Iterator$SliceIterator__f_underlying).knownSize__I();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      return dropSize;
    } else {
      var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && $n(this.sc_Iterator$SliceIterator__f_underlying).hasNext__Z());
});
$c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
    return $n(this.sc_Iterator$SliceIterator__f_underlying).next__O();
  } else {
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? $n(this.sc_Iterator$SliceIterator__f_underlying).next__O() : $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O());
  }
});
$c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  } else if ((sum < 0)) {
    this.sc_Iterator$SliceIterator__f_dropping = 2147483647;
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
    var xs = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.sc_Iterator$SliceIterator__f_underlying, (((-2147483647) + sum) | 0), rest)));
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
  } else {
    this.sc_Iterator$SliceIterator__f_dropping = sum;
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().initClass($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if ($n(skipped).isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return $n(skipped).head__O();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2);
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that);
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var this$1 = $n(a);
      if ((!this$1.isEmpty__Z())) {
        var this$2 = $n(b);
        var $x_1 = (!this$2.isEmpty__Z());
      } else {
        var $x_1 = false;
      }
      if (($x_1 && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sc_LinearSeq($n(a).tail__O());
        var temp$b = $as_sc_LinearSeq($n(b).tail__O());
        a = temp$a;
        b = temp$b;
      } else {
        return ($n(a).isEmpty__Z() && $n(b).isEmpty__Z());
      }
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer;
}
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype;
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.hasNext__Z = (function() {
  return (!$n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).isEmpty__Z());
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.next__O = (function() {
  var r = $n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).head__O();
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_StrictOptimizedLinearSeqOps($n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).tail__O());
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_IndexedSeq$.prototype.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $c_sci_IndexedSeq$.prototype;
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sci_IndexedSeq = (function(it) {
  if ($is_sci_IndexedSeq(it)) {
    var x2 = $as_sci_IndexedSeq(it);
    return x2;
  } else {
    return $as_sci_IndexedSeq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it));
  }
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(source);
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(it);
});
var $d_sci_IndexedSeq$ = new $TypeData().initClass($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$();
  }
  return $n_sci_IndexedSeq$;
}
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    var this$ = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250");
    var this$3 = $m_jl_Integer$();
    return this$3.java$lang$Integer$$parseIntImpl__T__I__I__I(this$, 10, 214748364);
  } catch (e) {
    if (false) {
      return 250;
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
  $n_sci_Vector$ = this;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $ps_sci_Vector$__liftedTree1$1__I();
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$c_sci_Vector$.prototype = new $h_O();
$c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $c_sci_Vector$.prototype;
$c_sci_Vector$.prototype.from__sc_IterableOnce__sci_Vector = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(it);
    return x2;
  } else {
    var knownSize = $n(it).knownSize__I();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var a1$3;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x2$2 = $as_sci_ArraySeq$ofRef(it);
          var x = $n($n(x2$2).elemTag__s_reflect_ClassTag()).runtimeClass__jl_Class();
          if ((x !== null)) {
            var this$1 = $n(x);
            var $x_1 = (this$1 === $d_O.getClassOf());
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var a1$3 = $n(x2$2).sci_ArraySeq$ofRef__f_unsafeArray;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var x3 = $as_sci_Iterable(it);
          var a1 = new $ac_O(knownSize);
          var this$2 = $n(x3);
          this$2.copyToArray__O__I__I__I(a1, 0, 2147483647);
          var a1$3 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        var this$3 = $n($n(it).iterator__sc_Iterator());
        this$3.copyToArray__O__I__I__I(a1$2, 0, 2147483647);
        var a1$3 = a1$2;
      }
      return new $c_sci_Vector1(a1$3);
    } else {
      var this$4 = new $c_sci_VectorBuilder();
      var this$5 = $n(this$4.addAll__sc_IterableOnce__sci_VectorBuilder(it));
      return this$5.result__sci_Vector();
    }
  }
});
$c_sci_Vector$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Vector(source);
});
var $d_sci_Vector$ = new $TypeData().initClass($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  sci_Vector$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$();
  }
  return $n_sci_Vector$;
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.sci_VectorBuilder__f_depth >= 6)) {
    a = $thiz.sci_VectorBuilder__f_a6;
    var i = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      $systemArraycopyRefs($n(src), i, $n(dest), 0, length);
    }
    var newOffset = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 33554432) | 0);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset) | 0)) | 0);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset;
    if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 25) | 0) === 0)) {
      $thiz.sci_VectorBuilder__f_depth = 5;
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 5)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a5;
    }
    var i$2 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 20) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        $systemArraycopyRefs($n(src$1), i$2, $n(dest$1), 0, length$1);
      }
      $thiz.sci_VectorBuilder__f_a5 = $asArrayOf_O(a, 5);
      var newOffset$1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 1048576) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$1) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$1;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 20) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 4;
      }
    } else {
      if ((i$2 > 0)) {
        var original = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, i$2, 32);
      }
      $n(aParent).set(0, a);
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 4)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a4;
    }
    var i$3 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 15) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        $systemArraycopyRefs($n(src$2), i$3, $n(dest$2), 0, length$2);
      }
      $thiz.sci_VectorBuilder__f_a4 = $asArrayOf_O(a, 4);
      var newOffset$2 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 32768) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$2) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$2;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 15) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 3;
      }
    } else {
      if ((i$3 > 0)) {
        var original$1 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, i$3, 32);
      }
      $n(aParent).set(0, a);
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 3)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a3;
    }
    var i$4 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 10) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        $systemArraycopyRefs($n(src$3), i$4, $n(dest$3), 0, length$3);
      }
      $thiz.sci_VectorBuilder__f_a3 = $asArrayOf_O(a, 3);
      var newOffset$3 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 1024) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$3) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$3;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 10) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 2;
      }
    } else {
      if ((i$4 > 0)) {
        var original$2 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$2, i$4, 32);
      }
      $n(aParent).set(0, a);
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 2)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a2;
    }
    var i$5 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 5) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        $systemArraycopyRefs($n(src$4), i$5, $n(dest$4), 0, length$4);
      }
      $thiz.sci_VectorBuilder__f_a2 = $asArrayOf_O(a, 2);
      var newOffset$4 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 32) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$4) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$4;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 5) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 1;
      }
    } else {
      if ((i$5 > 0)) {
        var original$3 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$3, i$5, 32);
      }
      $n(aParent).set(0, a);
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 1)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a1;
    }
    var i$6 = (31 & $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset);
    if (($thiz.sci_VectorBuilder__f_depth === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        $systemArraycopyRefs($n(src$5), i$6, $n(dest$5), 0, length$5);
      }
      $thiz.sci_VectorBuilder__f_a1 = a;
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
    } else {
      if ((i$6 > 0)) {
        var original$4 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$4, i$6, 32);
      }
      $n(aParent).set(0, a);
    }
  }
  $thiz.sci_VectorBuilder__f_prefixIsRightAligned = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = $n(data).u.length;
  if ((dl > 0)) {
    if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.sci_VectorBuilder__f_a1;
    var destPos = $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1;
    $systemArraycopyRefs($n(data), 0, $n(dest), destPos, copy1);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.sci_VectorBuilder__f_a1;
      $systemArraycopyRefs($n(data), copy1, $n(dest$1), 0, copy2);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if (($n(slice).u.length === 0)) {
    return (void 0);
  }
  if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = $n(slice).u.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 5) | 0));
      var dest = $thiz.sci_VectorBuilder__f_a2;
      $systemArraycopyRefs($n(slice), 0, $n(dest), destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.sci_VectorBuilder__f_a2;
        $systemArraycopyRefs($n(slice), copy1, $n(dest$1), 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 1024) | 0) !== 0)) {
        var f = ((e$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2$2, 1), 2);
        });
        var len = $n(slice).u.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var x0 = $n(slice).get(i);
            f(x0);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          var x3 = $asArrayOf_I(slice, 1);
          while ((i < len)) {
            var x0$1 = $n(x3).get(i);
            f(x0$1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          var x4 = $asArrayOf_D(slice, 1);
          while ((i < len)) {
            var x0$2 = $n(x4).get(i);
            f(x0$2);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          var x5 = $asArrayOf_J(slice, 1);
          while ((i < len)) {
            var t = $n(x5).get(i);
            var lo = t.RTLong__f_lo;
            var hi = t.RTLong__f_hi;
            f(new $c_RTLong(lo, hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          var x6 = $asArrayOf_F(slice, 1);
          while ((i < len)) {
            var x0$3 = $n(x6).get(i);
            f(x0$3);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          var x7 = $asArrayOf_C(slice, 1);
          while ((i < len)) {
            var x0$4 = $n(x7).get(i);
            f($bC(x0$4));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          var x8 = $asArrayOf_B(slice, 1);
          while ((i < len)) {
            var x0$5 = $n(x8).get(i);
            f(x0$5);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          var x9 = $asArrayOf_S(slice, 1);
          while ((i < len)) {
            var x0$6 = $n(x9).get(i);
            f(x0$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10 = $asArrayOf_Z(slice, 1);
          while ((i < len)) {
            var x0$7 = $n(x10).get(i);
            f(x0$7);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 10) | 0));
      var dest$2 = $thiz.sci_VectorBuilder__f_a3;
      $systemArraycopyRefs($n(slice), 0, $n(dest$2), destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.sci_VectorBuilder__f_a3;
        $systemArraycopyRefs($n(slice), copy1$2, $n(dest$3), 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 32768) | 0) !== 0)) {
        var f$1 = ((e$2$2$1) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2$2$1, 1), 3);
        });
        var len$1 = $n(slice).u.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var x0$8 = $n(slice).get(i$1);
            f$1(x0$8);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$1 = $asArrayOf_I(slice, 1);
          while ((i$1 < len$1)) {
            var x0$9 = $n(x3$1).get(i$1);
            f$1(x0$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$1 = $asArrayOf_D(slice, 1);
          while ((i$1 < len$1)) {
            var x0$10 = $n(x4$1).get(i$1);
            f$1(x0$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$1 = $asArrayOf_J(slice, 1);
          while ((i$1 < len$1)) {
            var t$1 = $n(x5$1).get(i$1);
            var lo$1 = t$1.RTLong__f_lo;
            var hi$1 = t$1.RTLong__f_hi;
            f$1(new $c_RTLong(lo$1, hi$1));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$1 = $asArrayOf_F(slice, 1);
          while ((i$1 < len$1)) {
            var x0$11 = $n(x6$1).get(i$1);
            f$1(x0$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$1 = $asArrayOf_C(slice, 1);
          while ((i$1 < len$1)) {
            var x0$12 = $n(x7$1).get(i$1);
            f$1($bC(x0$12));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$1 = $asArrayOf_B(slice, 1);
          while ((i$1 < len$1)) {
            var x0$13 = $n(x8$1).get(i$1);
            f$1(x0$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$1 = $asArrayOf_S(slice, 1);
          while ((i$1 < len$1)) {
            var x0$14 = $n(x9$1).get(i$1);
            f$1(x0$14);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$1 = $asArrayOf_Z(slice, 1);
          while ((i$1 < len$1)) {
            var x0$15 = $n(x10$1).get(i$1);
            f$1(x0$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 15) | 0));
      var dest$4 = $thiz.sci_VectorBuilder__f_a4;
      $systemArraycopyRefs($n(slice), 0, $n(dest$4), destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.sci_VectorBuilder__f_a4;
        $systemArraycopyRefs($n(slice), copy1$3, $n(dest$5), 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 1048576) | 0) !== 0)) {
        var f$2 = ((e$2$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2$2$2, 1), 4);
        });
        var len$2 = $n(slice).u.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var x0$16 = $n(slice).get(i$2);
            f$2(x0$16);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$2 = $asArrayOf_I(slice, 1);
          while ((i$2 < len$2)) {
            var x0$17 = $n(x3$2).get(i$2);
            f$2(x0$17);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$2 = $asArrayOf_D(slice, 1);
          while ((i$2 < len$2)) {
            var x0$18 = $n(x4$2).get(i$2);
            f$2(x0$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$2 = $asArrayOf_J(slice, 1);
          while ((i$2 < len$2)) {
            var t$2 = $n(x5$2).get(i$2);
            var lo$2 = t$2.RTLong__f_lo;
            var hi$2 = t$2.RTLong__f_hi;
            f$2(new $c_RTLong(lo$2, hi$2));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$2 = $asArrayOf_F(slice, 1);
          while ((i$2 < len$2)) {
            var x0$19 = $n(x6$2).get(i$2);
            f$2(x0$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$2 = $asArrayOf_C(slice, 1);
          while ((i$2 < len$2)) {
            var x0$20 = $n(x7$2).get(i$2);
            f$2($bC(x0$20));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$2 = $asArrayOf_B(slice, 1);
          while ((i$2 < len$2)) {
            var x0$21 = $n(x8$2).get(i$2);
            f$2(x0$21);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$2 = $asArrayOf_S(slice, 1);
          while ((i$2 < len$2)) {
            var x0$22 = $n(x9$2).get(i$2);
            f$2(x0$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$2 = $asArrayOf_Z(slice, 1);
          while ((i$2 < len$2)) {
            var x0$23 = $n(x10$2).get(i$2);
            f$2(x0$23);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 20) | 0));
      var dest$6 = $thiz.sci_VectorBuilder__f_a5;
      $systemArraycopyRefs($n(slice), 0, $n(dest$6), destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.sci_VectorBuilder__f_a5;
        $systemArraycopyRefs($n(slice), copy1$4, $n(dest$7), 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 33554432) | 0) !== 0)) {
        var f$3 = ((e$2$2$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2$2$3, 1), 5);
        });
        var len$3 = $n(slice).u.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var x0$24 = $n(slice).get(i$3);
            f$3(x0$24);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$3 = $asArrayOf_I(slice, 1);
          while ((i$3 < len$3)) {
            var x0$25 = $n(x3$3).get(i$3);
            f$3(x0$25);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$3 = $asArrayOf_D(slice, 1);
          while ((i$3 < len$3)) {
            var x0$26 = $n(x4$3).get(i$3);
            f$3(x0$26);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$3 = $asArrayOf_J(slice, 1);
          while ((i$3 < len$3)) {
            var t$3 = $n(x5$3).get(i$3);
            var lo$3 = t$3.RTLong__f_lo;
            var hi$3 = t$3.RTLong__f_hi;
            f$3(new $c_RTLong(lo$3, hi$3));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$3 = $asArrayOf_F(slice, 1);
          while ((i$3 < len$3)) {
            var x0$27 = $n(x6$3).get(i$3);
            f$3(x0$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$3 = $asArrayOf_C(slice, 1);
          while ((i$3 < len$3)) {
            var x0$28 = $n(x7$3).get(i$3);
            f$3($bC(x0$28));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$3 = $asArrayOf_B(slice, 1);
          while ((i$3 < len$3)) {
            var x0$29 = $n(x8$3).get(i$3);
            f$3(x0$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$3 = $asArrayOf_S(slice, 1);
          while ((i$3 < len$3)) {
            var x0$30 = $n(x9$3).get(i$3);
            f$3(x0$30);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$3 = $asArrayOf_Z(slice, 1);
          while ((i$3 < len$3)) {
            var x0$31 = $n(x10$3).get(i$3);
            f$3(x0$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.sci_VectorBuilder__f_a6;
      $systemArraycopyRefs($n(slice), 0, $n(dest$8), destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = $n(xs).vectorSliceCount__I();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = $n(xs).vectorSlice__I__AO(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var sign = (a >> 31);
    var x1 = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32) || ($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().foreachRec__I__AO__F1__V((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
        var data$2 = $asArrayOf_O(data$2$2, 1);
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest + n) | 0);
    var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.sci_VectorBuilder__f_a1) + ", a2=") + $thiz.sci_VectorBuilder__f_a2) + ", a3=") + $thiz.sci_VectorBuilder__f_a3) + ", a4=") + $thiz.sci_VectorBuilder__f_a4) + ", a5=") + $thiz.sci_VectorBuilder__f_a5) + ", a6=") + $thiz.sci_VectorBuilder__f_a6) + ", depth=") + $thiz.sci_VectorBuilder__f_depth));
  } else if ((xor < 1024)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 1)) {
      $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a2).set(0, $thiz.sci_VectorBuilder__f_a1);
      $thiz.sci_VectorBuilder__f_depth = 2;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
  } else if ((xor < 32768)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 2)) {
      $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a3).set(0, $thiz.sci_VectorBuilder__f_a2);
      $thiz.sci_VectorBuilder__f_depth = 3;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
  } else if ((xor < 1048576)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 3)) {
      $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a4).set(0, $thiz.sci_VectorBuilder__f_a3);
      $thiz.sci_VectorBuilder__f_depth = 4;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
  } else if ((xor < 33554432)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 4)) {
      $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a5).set(0, $thiz.sci_VectorBuilder__f_a4);
      $thiz.sci_VectorBuilder__f_depth = 5;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
  } else {
    if (($thiz.sci_VectorBuilder__f_depth <= 5)) {
      $thiz.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $n($thiz.sci_VectorBuilder__f_a6).set(0, $thiz.sci_VectorBuilder__f_a5);
      $thiz.sci_VectorBuilder__f_depth = 6;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
    $n($thiz.sci_VectorBuilder__f_a6).set(((idx >>> 25) | 0), $thiz.sci_VectorBuilder__f_a5);
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.sci_VectorBuilder__f_a6 = null;
  this.sci_VectorBuilder__f_a5 = null;
  this.sci_VectorBuilder__f_a4 = null;
  this.sci_VectorBuilder__f_a3 = null;
  this.sci_VectorBuilder__f_a2 = null;
  this.sci_VectorBuilder__f_a1 = null;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
  this.sci_VectorBuilder__f_prefixIsRightAligned = false;
  this.sci_VectorBuilder__f_depth = 0;
  this.sci_VectorBuilder__f_a1 = new $ac_O(32);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
  this.sci_VectorBuilder__f_prefixIsRightAligned = false;
  this.sci_VectorBuilder__f_depth = 1;
}
$c_sci_VectorBuilder.prototype = new $h_O();
$c_sci_VectorBuilder.prototype.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $c_sci_VectorBuilder.prototype;
$c_sci_VectorBuilder.prototype.initFrom__sci_Vector__sci_VectorBuilder = (function(v) {
  var x1 = $n(v).vectorSliceCount__I();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      var v1 = $as_sci_Vector1(v);
      this.sci_VectorBuilder__f_depth = 1;
      var i = $n($n(v1).sci_Vector__f_prefix1).u.length;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      var a = $n(v1).sci_Vector__f_prefix1;
      this.sci_VectorBuilder__f_a1 = (($n(a).u.length === 32) ? a : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 0, 32));
      break;
    }
    case 3: {
      var v2 = $as_sci_Vector2(v);
      var d2 = $n(v2).sci_Vector2__f_data2;
      var a$1 = $n(v2).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$1).u.length === 32) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 0, 32));
      this.sci_VectorBuilder__f_depth = 2;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((32 - $n(v2).sci_Vector2__f_len1) | 0);
      var i$1 = (($n(v2).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$1);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$1 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a2).set(0, $n(v2).sci_Vector__f_prefix1);
      var dest = this.sci_VectorBuilder__f_a2;
      var length = $n(d2).u.length;
      $systemArraycopyRefs($n(d2), 0, $n(dest), 1, length);
      $n(this.sci_VectorBuilder__f_a2).set(((1 + $n(d2).u.length) | 0), this.sci_VectorBuilder__f_a1);
      break;
    }
    case 5: {
      var v3 = $as_sci_Vector3(v);
      var d3 = $n(v3).sci_Vector3__f_data3;
      var s2 = $n(v3).sci_Vector3__f_suffix2;
      var a$2 = $n(v3).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$2).u.length === 32) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 0, 32));
      this.sci_VectorBuilder__f_depth = 3;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((1024 - $n(v3).sci_Vector3__f_len12) | 0);
      var i$2 = (($n(v3).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$2);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$2 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a3).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v3).sci_Vector__f_prefix1, $n(v3).sci_Vector3__f_prefix2), 2));
      var dest$1 = this.sci_VectorBuilder__f_a3;
      var length$1 = $n(d3).u.length;
      $systemArraycopyRefs($n(d3), 0, $n(dest$1), 1, length$1);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2, 32), 2);
      $n(this.sci_VectorBuilder__f_a3).set(((1 + $n(d3).u.length) | 0), this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2).u.length, this.sci_VectorBuilder__f_a1);
      break;
    }
    case 7: {
      var v4 = $as_sci_Vector4(v);
      var d4 = $n(v4).sci_Vector4__f_data4;
      var s3 = $n(v4).sci_Vector4__f_suffix3;
      var s2$2 = $n(v4).sci_Vector4__f_suffix2;
      var a$3 = $n(v4).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$3).u.length === 32) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 0, 32));
      this.sci_VectorBuilder__f_depth = 4;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((32768 - $n(v4).sci_Vector4__f_len123) | 0);
      var i$3 = (($n(v4).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$3);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$3 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a4).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v4).sci_Vector__f_prefix1, $n(v4).sci_Vector4__f_prefix2), $n(v4).sci_Vector4__f_prefix3), 3));
      var dest$2 = this.sci_VectorBuilder__f_a4;
      var length$2 = $n(d4).u.length;
      $systemArraycopyRefs($n(d4), 0, $n(dest$2), 1, length$2);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$2, 32), 2);
      $n(this.sci_VectorBuilder__f_a4).set(((1 + $n(d4).u.length) | 0), this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$2).u.length, this.sci_VectorBuilder__f_a1);
      break;
    }
    case 9: {
      var v5 = $as_sci_Vector5(v);
      var d5 = $n(v5).sci_Vector5__f_data5;
      var s4 = $n(v5).sci_Vector5__f_suffix4;
      var s3$2 = $n(v5).sci_Vector5__f_suffix3;
      var s2$3 = $n(v5).sci_Vector5__f_suffix2;
      var a$4 = $n(v5).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$4).u.length === 32) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 0, 32));
      this.sci_VectorBuilder__f_depth = 5;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((1048576 - $n(v5).sci_Vector5__f_len1234) | 0);
      var i$4 = (($n(v5).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$4);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$4 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a5).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v5).sci_Vector__f_prefix1, $n(v5).sci_Vector5__f_prefix2), $n(v5).sci_Vector5__f_prefix3), $n(v5).sci_Vector5__f_prefix4), 4));
      var dest$3 = this.sci_VectorBuilder__f_a5;
      var length$3 = $n(d5).u.length;
      $systemArraycopyRefs($n(d5), 0, $n(dest$3), 1, length$3);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$2, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$3, 32), 2);
      $n(this.sci_VectorBuilder__f_a5).set(((1 + $n(d5).u.length) | 0), this.sci_VectorBuilder__f_a4);
      $n(this.sci_VectorBuilder__f_a4).set($n(s4).u.length, this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3$2).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$3).u.length, this.sci_VectorBuilder__f_a1);
      break;
    }
    case 11: {
      var v6 = $as_sci_Vector6(v);
      var d6 = $n(v6).sci_Vector6__f_data6;
      var s5 = $n(v6).sci_Vector6__f_suffix5;
      var s4$2 = $n(v6).sci_Vector6__f_suffix4;
      var s3$3 = $n(v6).sci_Vector6__f_suffix3;
      var s2$4 = $n(v6).sci_Vector6__f_suffix2;
      var a$5 = $n(v6).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$5).u.length === 32) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 0, 32));
      this.sci_VectorBuilder__f_depth = 6;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((33554432 - $n(v6).sci_Vector6__f_len12345) | 0);
      var i$5 = (($n(v6).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$5);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$5 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $n(this.sci_VectorBuilder__f_a6).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v6).sci_Vector__f_prefix1, $n(v6).sci_Vector6__f_prefix2), $n(v6).sci_Vector6__f_prefix3), $n(v6).sci_Vector6__f_prefix4), $n(v6).sci_Vector6__f_prefix5), 5));
      var dest$4 = this.sci_VectorBuilder__f_a6;
      var length$4 = $n(d6).u.length;
      $systemArraycopyRefs($n(d6), 0, $n(dest$4), 1, length$4);
      this.sci_VectorBuilder__f_a5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s5, 32), 5);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4$2, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$4, 32), 2);
      $n(this.sci_VectorBuilder__f_a6).set(((1 + $n(d6).u.length) | 0), this.sci_VectorBuilder__f_a5);
      $n(this.sci_VectorBuilder__f_a5).set($n(s5).u.length, this.sci_VectorBuilder__f_a4);
      $n(this.sci_VectorBuilder__f_a4).set($n(s4$2).u.length, this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3$3).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$4).u.length, this.sci_VectorBuilder__f_a1);
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest > 0))) {
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 32;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (((-32) + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  }
  return this;
});
$c_sci_VectorBuilder.prototype.addOne__O__sci_VectorBuilder = (function(elem) {
  if ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  $n(this.sci_VectorBuilder__f_a1).set(this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1, elem);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = ((1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
  return this;
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__sci_VectorBuilder = (function(xs) {
  if ((xs instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(xs);
    return ((((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest === 0)) && (!this.sci_VectorBuilder__f_prefixIsRightAligned)) ? this.initFrom__sci_Vector__sci_VectorBuilder(x2) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, x2));
  } else {
    return $as_sci_VectorBuilder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
  }
});
$c_sci_VectorBuilder.prototype.result__sci_Vector = (function() {
  if (this.sci_VectorBuilder__f_prefixIsRightAligned) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var realLen = ((len - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.sci_VectorBuilder__f_a1;
    return new $c_sci_Vector1((($n(a).u.length === realLen) ? a : $m_ju_Arrays$().copyOf__AO__I__AO(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var original = this.sci_VectorBuilder__f_a2;
    var data = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, 1, i2), 2);
    var prefix1 = $n(this.sci_VectorBuilder__f_a2).get(0);
    var a$1 = $n(this.sci_VectorBuilder__f_a2).get(i2);
    var len$1 = ((1 + i1) | 0);
    var suffix1 = (($n(a$1).u.length === len$1) ? a$1 : $m_ju_Arrays$().copyOf__AO__I__AO(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var original$1 = this.sci_VectorBuilder__f_a3;
    var data$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, 1, i3), 3);
    var a$2 = $n(this.sci_VectorBuilder__f_a3).get(0);
    var to = $n(a$2).u.length;
    var prefix2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 1, to), 2);
    var prefix1$2 = $n($n(this.sci_VectorBuilder__f_a3).get(0)).get(0);
    var original$2 = $n(this.sci_VectorBuilder__f_a3).get(i3);
    var suffix2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$2, i2$2), 2);
    var a$3 = $n($n(this.sci_VectorBuilder__f_a3).get(i3)).get(i2$2);
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = (($n(a$3).u.length === len$2) ? a$3 : $m_ju_Arrays$().copyOf__AO__I__AO(a$3, len$2));
    var len1 = $n(prefix1$2).u.length;
    var len12 = ((len1 + ($n(prefix2).u.length << 5)) | 0);
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, len12, data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var original$3 = this.sci_VectorBuilder__f_a4;
    var data$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$3, 1, i4), 4);
    var a$4 = $n(this.sci_VectorBuilder__f_a4).get(0);
    var to$1 = $n(a$4).u.length;
    var prefix3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 1, to$1), 3);
    var a$5 = $n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0);
    var to$2 = $n(a$5).u.length;
    var prefix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 1, to$2), 2);
    var prefix1$3 = $n($n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0)).get(0);
    var original$4 = $n(this.sci_VectorBuilder__f_a4).get(i4);
    var suffix3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$4, i3$2), 3);
    var original$5 = $n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2);
    var suffix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$5, i2$3), 2);
    var a$6 = $n($n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2)).get(i2$3);
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = (($n(a$6).u.length === len$3) ? a$6 : $m_ju_Arrays$().copyOf__AO__I__AO(a$6, len$3));
    var len1$2 = $n(prefix1$3).u.length;
    var len12$2 = ((len1$2 + ($n(prefix2$2).u.length << 5)) | 0);
    var len123 = ((len12$2 + ($n(prefix3).u.length << 10)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, len123, data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var original$6 = this.sci_VectorBuilder__f_a5;
    var data$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$6, 1, i5), 5);
    var a$7 = $n(this.sci_VectorBuilder__f_a5).get(0);
    var to$3 = $n(a$7).u.length;
    var prefix4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$7, 1, to$3), 4);
    var a$8 = $n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0);
    var to$4 = $n(a$8).u.length;
    var prefix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$8, 1, to$4), 3);
    var a$9 = $n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0);
    var to$5 = $n(a$9).u.length;
    var prefix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$9, 1, to$5), 2);
    var prefix1$4 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0)).get(0);
    var original$7 = $n(this.sci_VectorBuilder__f_a5).get(i5);
    var suffix4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$7, i4$2), 4);
    var original$8 = $n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2);
    var suffix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$8, i3$3), 3);
    var original$9 = $n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3);
    var suffix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$9, i2$4), 2);
    var a$10 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3)).get(i2$4);
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = (($n(a$10).u.length === len$4) ? a$10 : $m_ju_Arrays$().copyOf__AO__I__AO(a$10, len$4));
    var len1$3 = $n(prefix1$4).u.length;
    var len12$3 = ((len1$3 + ($n(prefix2$3).u.length << 5)) | 0);
    var len123$2 = ((len12$3 + ($n(prefix3$2).u.length << 10)) | 0);
    var len1234 = ((len123$2 + ($n(prefix4).u.length << 15)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, len1234, data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var original$10 = this.sci_VectorBuilder__f_a6;
    var data$5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$10, 1, i6), 6);
    var a$11 = $n(this.sci_VectorBuilder__f_a6).get(0);
    var to$6 = $n(a$11).u.length;
    var prefix5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$11, 1, to$6), 5);
    var a$12 = $n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0);
    var to$7 = $n(a$12).u.length;
    var prefix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$12, 1, to$7), 4);
    var a$13 = $n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0);
    var to$8 = $n(a$13).u.length;
    var prefix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$13, 1, to$8), 3);
    var a$14 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0);
    var to$9 = $n(a$14).u.length;
    var prefix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$14, 1, to$9), 2);
    var prefix1$5 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0)).get(0);
    var original$11 = $n(this.sci_VectorBuilder__f_a6).get(i6);
    var suffix5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$11, i5$2), 5);
    var original$12 = $n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2);
    var suffix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$12, i4$3), 4);
    var original$13 = $n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3);
    var suffix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$13, i3$4), 3);
    var original$14 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4);
    var suffix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$14, i2$5), 2);
    var a$15 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4)).get(i2$5);
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = (($n(a$15).u.length === len$5) ? a$15 : $m_ju_Arrays$().copyOf__AO__I__AO(a$15, len$5));
    var len1$4 = $n(prefix1$5).u.length;
    var len12$4 = ((len1$4 + ($n(prefix2$4).u.length << 5)) | 0);
    var len123$3 = ((len12$4 + ($n(prefix3$3).u.length << 10)) | 0);
    var len1234$2 = ((len123$3 + ($n(prefix4$2).u.length << 15)) | 0);
    var len12345 = ((len1234$2 + ($n(prefix5).u.length << 20)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$c_sci_VectorBuilder.prototype.toString__T = (function() {
  return (((((((("VectorBuilder(len1=" + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) + ", lenRest=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) + ", offset=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) + ", depth=") + this.sci_VectorBuilder__f_depth) + ")");
});
$c_sci_VectorBuilder.prototype.result__O = (function() {
  return this.result__sci_Vector();
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__sci_VectorBuilder(elems);
});
$c_sci_VectorBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sci_VectorBuilder(elem);
});
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"));
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)));
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth));
}
var $d_sci_VectorBuilder = new $TypeData().initClass($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  sci_VectorBuilder: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$c_scm_Buffer$.prototype.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $c_scm_Buffer$.prototype;
var $d_scm_Buffer$ = new $TypeData().initClass($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  scm_Buffer$: 1,
  sc_SeqFactory$Delegate: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.runtimeClass__jl_Class();
    var x$3 = $n($as_s_reflect_ClassTag(x)).runtimeClass__jl_Class();
    if ((x$2 === null)) {
      return (x$3 === null);
    } else {
      var this$1 = $n(x$2);
      return (this$1 === x$3);
    }
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  var this$1 = $n(clazz);
  if (this$1.data.isArrayClass) {
    var this$2 = $n(clazz);
    return (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this$2.data.getComponentType())) + "]");
  } else {
    var this$3 = $n(clazz);
    return this$3.data.name;
  }
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_reflect_ClassTag)));
}
function $as_s_reflect_ClassTag(obj) {
  return (($is_s_reflect_ClassTag(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.reflect.ClassTag"));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_reflect_ClassTag)));
}
function $asArrayOf_s_reflect_ClassTag(obj, depth) {
  return (($isArrayOf_s_reflect_ClassTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.reflect.ClassTag;", depth));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = $n(x$2).productArity__I();
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax);
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = $n(this.sr_ScalaRunTime$$anon$1__f_x$2).productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
$c_sjs_js_WrappedArray$.prototype = new $h_O();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__sjs_js_WrappedArray = (function(source) {
  var this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
  return $as_sjs_js_WrappedArray($n($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source))).result__O());
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  sjs_js_WrappedArray$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
/** @constructor */
function $c_s_util_Success(value) {
  this.s_util_Success__f_value = null;
  this.s_util_Success__f_value = value;
}
$c_s_util_Success.prototype = new $h_s_util_Try();
$c_s_util_Success.prototype.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $c_s_util_Success.prototype;
$c_s_util_Success.prototype.productPrefix__T = (function() {
  return "Success";
});
$c_s_util_Success.prototype.productArity__I = (function() {
  return 1;
});
$c_s_util_Success.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Success__f_value : $m_sr_Statics$().ioobe__I__O(x$1));
});
$c_s_util_Success.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_util_Success.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_s_util_Success.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_s_util_Success.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Success)) {
    var Success$1 = $as_s_util_Success(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Success__f_value, $n(Success$1).s_util_Success__f_value);
  } else {
    return false;
  }
});
function $as_s_util_Success(obj) {
  return (((obj instanceof $c_s_util_Success) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Success"));
}
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Success)));
}
function $asArrayOf_s_util_Success(obj, depth) {
  return (($isArrayOf_s_util_Success(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Success;", depth));
}
var $d_s_util_Success = new $TypeData().initClass($c_s_util_Success, "scala.util.Success", ({
  s_util_Success: 1,
  s_util_Try: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lsourcecode_FullName(value) {
  this.Lsourcecode_FullName__f_value = null;
  this.Lsourcecode_FullName__f_value = value;
}
$c_Lsourcecode_FullName.prototype = new $h_Lsourcecode_SourceValue();
$c_Lsourcecode_FullName.prototype.constructor = $c_Lsourcecode_FullName;
/** @constructor */
function $h_Lsourcecode_FullName() {
}
$h_Lsourcecode_FullName.prototype = $c_Lsourcecode_FullName.prototype;
$c_Lsourcecode_FullName.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lsourcecode_FullName.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lsourcecode_FullName.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsourcecode_FullName)) {
    var x$0$2 = $as_Lsourcecode_FullName(x$0);
    return ((this.Lsourcecode_FullName__f_value === $n(x$0$2).Lsourcecode_FullName__f_value) && ($n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Lsourcecode_FullName.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lsourcecode_FullName.prototype.productArity__I = (function() {
  return 1;
});
$c_Lsourcecode_FullName.prototype.productPrefix__T = (function() {
  return "FullName";
});
$c_Lsourcecode_FullName.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lsourcecode_FullName__f_value;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lsourcecode_FullName(obj) {
  return (((obj instanceof $c_Lsourcecode_FullName) || (obj === null)) ? obj : $throwClassCastException(obj, "sourcecode.FullName"));
}
function $isArrayOf_Lsourcecode_FullName(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsourcecode_FullName)));
}
function $asArrayOf_Lsourcecode_FullName(obj, depth) {
  return (($isArrayOf_Lsourcecode_FullName(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lsourcecode.FullName;", depth));
}
var $d_Lsourcecode_FullName = new $TypeData().initClass($c_Lsourcecode_FullName, "sourcecode.FullName", ({
  Lsourcecode_FullName: 1,
  Lsourcecode_SourceValue: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1(rc$1, c$1, pf$1, outer) {
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_pf$2 = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_raw = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_ctor = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_$outer = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_pf$2 = pf$1;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_$outer = outer;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_raw = rc$1;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_ctor = c$1;
}
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype.constructor = $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1() {
}
$h_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype = $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype;
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype.raw__sjs_js_Any = (function() {
  return this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_raw;
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype.ctor__Ljapgolly_scalajs_react_CtorType = (function() {
  return this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_ctor;
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype.cmapCtorProps__F1__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(f) {
  var this$3 = $n(this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_$outer);
  var this$1 = $m_Ljapgolly_scalajs_react_util_Util$();
  var mc = this$1.Ljapgolly_scalajs_react_util_Util$__f_identity;
  var this$2 = $m_Ljapgolly_scalajs_react_util_Util$();
  var mu = this$2.Ljapgolly_scalajs_react_util_Util$__f_identity;
  var pf = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_pf$2;
  return new $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2(this, mc, f, mu, pf, this$3);
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype.mapUnmounted__F1__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(f) {
  var this$3 = $n(this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_$outer);
  var this$1 = $m_Ljapgolly_scalajs_react_util_Util$();
  var cp = this$1.Ljapgolly_scalajs_react_util_Util$__f_identity;
  var this$2 = $m_Ljapgolly_scalajs_react_util_Util$();
  var mc = this$2.Ljapgolly_scalajs_react_util_Util$__f_identity;
  var pf = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_pf$2;
  return new $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2(this, mc, cp, f, pf, this$3);
});
var $d_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1 = new $TypeData().initClass($c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1, "japgolly.scalajs.react.component.JsBaseComponentTemplate$$anon$1", ({
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1: 1,
  Ljapgolly_scalajs_react_component_Generic$ComponentRaw: 1,
  Ljapgolly_scalajs_react_component_Generic$ComponentSimple: 1,
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$ComponentWithRoot: 1,
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2(from$1, mc$1, cp$1, mu$1, pf$3, outer) {
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_from$2 = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_pf$4 = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_cp$2 = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mc$2 = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mu$2 = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_raw = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_ctor = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_$outer = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_from$2 = from$1;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_pf$4 = pf$3;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_cp$2 = cp$1;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mc$2 = mc$1;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mu$2 = mu$1;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_$outer = outer;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_raw = $n(from$1).raw__sjs_js_Any();
  var f = $n(mc$1).apply__O__O($n(from$1).ctor__Ljapgolly_scalajs_react_CtorType());
  var ev$1 = $as_Ljapgolly_scalajs_react_CtorType(f);
  var p = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_pf$4;
  var this$3 = $n(p);
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_ctor = this$3.dimap__Ljapgolly_scalajs_react_CtorType$Nullary__F1__F1__Ljapgolly_scalajs_react_CtorType$Nullary($as_Ljapgolly_scalajs_react_CtorType$Nullary(ev$1), cp$1, mu$1);
}
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype.constructor = $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2() {
}
$h_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype = $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype;
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype.raw__sjs_js_Any = (function() {
  return this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_raw;
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype.ctor__Ljapgolly_scalajs_react_CtorType = (function() {
  return this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_ctor;
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype.cmapCtorProps__F1__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(f) {
  var this$1 = $n(this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_$outer);
  var from = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_from$2;
  var cp = $n(this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_cp$2).compose__F1__F1(f);
  var mc = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mc$2;
  var mu = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mu$2;
  var pf = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_pf$4;
  return new $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2(from, mc, cp, mu, pf, this$1);
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype.mapUnmounted__F1__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(f) {
  var this$1 = $n(this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_$outer);
  var from = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_from$2;
  var cp = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_cp$2;
  var mc = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mc$2;
  var mu = $n(f).compose__F1__F1(this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mu$2);
  var pf = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_pf$4;
  return new $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2(from, mc, cp, mu, pf, this$1);
});
var $d_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2 = new $TypeData().initClass($c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2, "japgolly.scalajs.react.component.JsBaseComponentTemplate$$anon$2", ({
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2: 1,
  Ljapgolly_scalajs_react_component_Generic$ComponentRaw: 1,
  Ljapgolly_scalajs_react_component_Generic$ComponentSimple: 1,
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$ComponentWithRoot: 1,
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_JsFn$$anon$3(r$1) {
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$3__f_raw = null;
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$3__f_mountRaw = null;
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$3__f_raw = r$1;
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$3__f_mountRaw = $m_Ljapgolly_scalajs_react_component_JsFn$().Ljapgolly_scalajs_react_component_JsFn$__f_japgolly$scalajs$react$component$JsFn$$$constUnit;
}
$c_Ljapgolly_scalajs_react_component_JsFn$$anon$3.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_JsFn$$anon$3.prototype.constructor = $c_Ljapgolly_scalajs_react_component_JsFn$$anon$3;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_JsFn$$anon$3() {
}
$h_Ljapgolly_scalajs_react_component_JsFn$$anon$3.prototype = $c_Ljapgolly_scalajs_react_component_JsFn$$anon$3.prototype;
$c_Ljapgolly_scalajs_react_component_JsFn$$anon$3.prototype.mapUnmountedProps__F1__Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot = (function(f) {
  var this$1 = $m_Ljapgolly_scalajs_react_util_Util$();
  var mm = this$1.Ljapgolly_scalajs_react_util_Util$__f_identity;
  return new $c_Ljapgolly_scalajs_react_component_JsFn$$anon$4(this, mm, f);
});
$c_Ljapgolly_scalajs_react_component_JsFn$$anon$3.prototype.raw__Ljapgolly_scalajs_react_facade_React$ComponentElement = (function() {
  return this.Ljapgolly_scalajs_react_component_JsFn$$anon$3__f_raw;
});
$c_Ljapgolly_scalajs_react_component_JsFn$$anon$3.prototype.mountRaw__F1 = (function() {
  return this.Ljapgolly_scalajs_react_component_JsFn$$anon$3__f_mountRaw;
});
var $d_Ljapgolly_scalajs_react_component_JsFn$$anon$3 = new $TypeData().initClass($c_Ljapgolly_scalajs_react_component_JsFn$$anon$3, "japgolly.scalajs.react.component.JsFn$$anon$3", ({
  Ljapgolly_scalajs_react_component_JsFn$$anon$3: 1,
  Ljapgolly_scalajs_react_component_Generic$UnmountedRaw: 1,
  Ljapgolly_scalajs_react_component_Generic$UnmountedSimple: 1,
  Ljapgolly_scalajs_react_component_JsFn$UnmountedSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$UnmountedWithRoot: 1,
  Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_JsFn$$anon$4(from$1, mm$1, mp$1) {
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_from$2 = null;
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_mp$2 = null;
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_mm$2 = null;
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_raw = null;
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_mountRaw = null;
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_from$2 = from$1;
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_mp$2 = mp$1;
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_mm$2 = mm$1;
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_raw = $n(from$1).raw__Ljapgolly_scalajs_react_facade_React$ComponentElement();
  this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_mountRaw = $n(mm$1).compose__F1__F1($n(from$1).mountRaw__F1());
}
$c_Ljapgolly_scalajs_react_component_JsFn$$anon$4.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_JsFn$$anon$4.prototype.constructor = $c_Ljapgolly_scalajs_react_component_JsFn$$anon$4;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_JsFn$$anon$4() {
}
$h_Ljapgolly_scalajs_react_component_JsFn$$anon$4.prototype = $c_Ljapgolly_scalajs_react_component_JsFn$$anon$4.prototype;
$c_Ljapgolly_scalajs_react_component_JsFn$$anon$4.prototype.raw__Ljapgolly_scalajs_react_facade_React$ComponentElement = (function() {
  return this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_raw;
});
$c_Ljapgolly_scalajs_react_component_JsFn$$anon$4.prototype.mountRaw__F1 = (function() {
  return this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_mountRaw;
});
$c_Ljapgolly_scalajs_react_component_JsFn$$anon$4.prototype.mapUnmountedProps__F1__Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot = (function(f) {
  var from = this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_from$2;
  var mp = $n(f).compose__F1__F1(this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_mp$2);
  var mm = this.Ljapgolly_scalajs_react_component_JsFn$$anon$4__f_mm$2;
  return new $c_Ljapgolly_scalajs_react_component_JsFn$$anon$4(from, mm, mp);
});
var $d_Ljapgolly_scalajs_react_component_JsFn$$anon$4 = new $TypeData().initClass($c_Ljapgolly_scalajs_react_component_JsFn$$anon$4, "japgolly.scalajs.react.component.JsFn$$anon$4", ({
  Ljapgolly_scalajs_react_component_JsFn$$anon$4: 1,
  Ljapgolly_scalajs_react_component_Generic$UnmountedRaw: 1,
  Ljapgolly_scalajs_react_component_Generic$UnmountedSimple: 1,
  Ljapgolly_scalajs_react_component_JsFn$UnmountedSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$UnmountedWithRoot: 1,
  Ljapgolly_scalajs_react_component_JsFn$UnmountedWithRoot: 1
}));
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    var lo = $uI(fpBitsDataView.getInt32(0, true));
    var hi = $uI(fpBitsDataView.getInt32(4, true));
    return (lo ^ hi);
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"));
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)));
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth));
}
var $d_jl_Double = new $TypeData().initClass(0, "java.lang.Double", ({
  jl_Double: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    var lo = $uI(fpBitsDataView.getInt32(0, true));
    var hi = $uI(fpBitsDataView.getInt32(4, true));
    return (lo ^ hi);
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().initClass(0, "java.lang.Float", ({
  jl_Float: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
function $as_jl_Integer(obj) {
  return (($isInt(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Integer"));
}
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Integer)));
}
function $asArrayOf_jl_Integer(obj, depth) {
  return (($isArrayOf_jl_Integer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Integer;", depth));
}
var $d_jl_Integer = new $TypeData().initClass(0, "java.lang.Integer", ({
  jl_Integer: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $n(x2);
    var b = $uJ(this$1);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi));
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $x_1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($x_1 ^ hi);
}
function $f_jl_Long__toString__T($thiz) {
  var this$1 = $m_RTLong$();
  return this$1.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi);
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"));
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)));
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth));
}
var $d_jl_Long = new $TypeData().initClass(0, "java.lang.Long", ({
  jl_Long: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().initClass($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_T__codePointAt__I__I($thiz, index) {
  $charAt($thiz, index);
  return $uI($thiz.codePointAt(index));
}
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    var $x_2 = h;
    var $x_1 = h;
    var index = i;
    h = ((((($x_2 << 5) - $x_1) | 0) + $charAt($thiz, index)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  } else {
    return $as_T($thiz.repeat(count));
  }
}
function $f_T__split__T__I__AT($thiz, regex, limit) {
  var this$2 = $n($m_ju_regex_PatternCompiler$().compile__T__I__ju_regex_Pattern(regex, 0));
  return this$2.java$util$regex$Pattern$$split__T__I__AT($thiz, limit);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"));
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)));
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth));
}
var $d_T = new $TypeData().initClass(0, "java.lang.String", ({
  T: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "string")));
function $ct_jl_StringIndexOutOfBoundsException__I__($thiz, index) {
  var s = ("String index out of range: " + index);
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_StringIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.ju_regex_PatternSyntaxException__f_desc = null;
    this.ju_regex_PatternSyntaxException__f_regex = null;
    this.ju_regex_PatternSyntaxException__f_index = 0;
    this.ju_regex_PatternSyntaxException__f_desc = desc;
    this.ju_regex_PatternSyntaxException__f_regex = regex;
    this.ju_regex_PatternSyntaxException__f_index = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    var idx = this.ju_regex_PatternSyntaxException__f_index;
    var re = this.ju_regex_PatternSyntaxException__f_regex;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.ju_regex_PatternSyntaxException__f_desc + indexHint) + "\n") + re);
    if (((idx >= 0) && (re !== null))) {
      var this$1 = $n(re);
      var $x_1 = (idx < this$1.length);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      return (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^");
    } else {
      return base;
    }
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().initClass($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  ju_regex_PatternSyntaxException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_None$() {
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.get__E = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None";
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0;
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1);
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880;
});
$c_s_None$.prototype.toString__T = (function() {
  return "None";
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E();
});
var $d_s_None$ = new $TypeData().initClass($c_s_None$, "scala.None$", ({
  s_None$: 1,
  s_Option: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value;
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value;
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some";
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1;
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1));
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, $n(Some$1).s_Some__f_value);
  } else {
    return false;
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"));
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)));
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth));
}
var $d_s_Some = new $TypeData().initClass($c_s_Some, "scala.Some", ({
  s_Some: 1,
  s_Option: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T();
});
$c_sc_AbstractIterable.prototype.foreach__F1__V = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$c_sc_AbstractIterable.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterable.prototype.knownSize__I = (function() {
  return (-1);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.sc_ArrayOps$ArrayIterator__f_xs = xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  var xs$1 = $thiz.sc_ArrayOps$ArrayIterator__f_xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_len = $m_jl_reflect_Array$().getLength__O__I(xs$1);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
}
$c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_ArrayOps$ArrayIterator.prototype.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $c_sc_ArrayOps$ArrayIterator.prototype;
$c_sc_ArrayOps$ArrayIterator.prototype.knownSize__I = (function() {
  return ((this.sc_ArrayOps$ArrayIterator__f_len - this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
});
$c_sc_ArrayOps$ArrayIterator.prototype.hasNext__Z = (function() {
  return (this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos < this.sc_ArrayOps$ArrayIterator__f_len);
});
$c_sc_ArrayOps$ArrayIterator.prototype.next__O = (function() {
  var $x_1 = this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos;
  var xs = this.sc_ArrayOps$ArrayIterator__f_xs;
  if (($x_1 >= $m_jl_reflect_Array$().getLength__O__I(xs))) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $m_sr_ScalaRunTime$().array_apply__O__I__O(this.sc_ArrayOps$ArrayIterator__f_xs, this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.sc_ArrayOps$ArrayIterator__f_len;
    } else {
      var a = this.sc_ArrayOps$ArrayIterator__f_len;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = $n(self).length__I();
}
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0);
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
    var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
    return r;
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
    var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  }
  return this;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.sci_ArraySeq$__f_bitmap$0)) {
    $thiz.sci_ArraySeq$__f_emptyImpl = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.sci_ArraySeq$__f_bitmap$0 = true;
  }
  return $thiz.sci_ArraySeq$__f_emptyImpl;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.sci_ArraySeq$__f_bitmap$0) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.sci_ArraySeq$__f_emptyImpl);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.sci_ArraySeq$__f_emptyImpl = null;
  this.sci_ArraySeq$__f_untagged = null;
  this.sci_ArraySeq$__f_bitmap$0 = false;
  $n_sci_ArraySeq$ = this;
  this.sci_ArraySeq$__f_untagged = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$c_sci_ArraySeq$.prototype = new $h_O();
$c_sci_ArraySeq$.prototype.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $c_sci_ArraySeq$.prototype;
$c_sci_ArraySeq$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__sci_ArraySeq = (function(it, tag) {
  if ((it instanceof $c_sci_ArraySeq)) {
    var x2 = $as_sci_ArraySeq(it);
    return x2;
  } else {
    return this.unsafeWrapArray__O__sci_ArraySeq($m_s_Array$().from__sc_IterableOnce__s_reflect_ClassTag__O(it, tag));
  }
});
$c_sci_ArraySeq$.prototype.unsafeWrapArray__O__sci_ArraySeq = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    var x3 = $asArrayOf_O(x, 1);
    return new $c_sci_ArraySeq$ofRef(x3);
  } else if ((x instanceof $ac_I)) {
    var x4 = $asArrayOf_I(x, 1);
    return new $c_sci_ArraySeq$ofInt(x4);
  } else if ((x instanceof $ac_D)) {
    var x5 = $asArrayOf_D(x, 1);
    return new $c_sci_ArraySeq$ofDouble(x5);
  } else if ((x instanceof $ac_J)) {
    var x6 = $asArrayOf_J(x, 1);
    return new $c_sci_ArraySeq$ofLong(x6);
  } else if ((x instanceof $ac_F)) {
    var x7 = $asArrayOf_F(x, 1);
    return new $c_sci_ArraySeq$ofFloat(x7);
  } else if ((x instanceof $ac_C)) {
    var x8 = $asArrayOf_C(x, 1);
    return new $c_sci_ArraySeq$ofChar(x8);
  } else if ((x instanceof $ac_B)) {
    var x9 = $asArrayOf_B(x, 1);
    return new $c_sci_ArraySeq$ofByte(x9);
  } else if ((x instanceof $ac_S)) {
    var x10 = $asArrayOf_S(x, 1);
    return new $c_sci_ArraySeq$ofShort(x10);
  } else if ((x instanceof $ac_Z)) {
    var x11 = $asArrayOf_Z(x, 1);
    return new $c_sci_ArraySeq$ofBoolean(x11);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    var x12 = $asArrayOf_jl_Void(x, 1);
    return new $c_sci_ArraySeq$ofUnit(x12);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$c_sci_ArraySeq$.prototype.from__sc_IterableOnce__O__O = (function(it, evidence$5) {
  return this.from__sc_IterableOnce__s_reflect_ClassTag__sci_ArraySeq(it, $as_s_reflect_ClassTag(evidence$5));
});
var $d_sci_ArraySeq$ = new $TypeData().initClass($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  sci_ArraySeq$: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)));
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)));
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth));
}
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
  var slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  while (($n(slice).u.length === 0)) {
    $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
    slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  }
  $thiz.sci_NewVectorIterator__f_sliceStart = $thiz.sci_NewVectorIterator__f_sliceEnd;
  var count = $thiz.sci_NewVectorIterator__f_sliceCount;
  var idx = $thiz.sci_NewVectorIterator__f_sliceIdx;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.sci_NewVectorIterator__f_sliceDim = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x1 = $thiz.sci_NewVectorIterator__f_sliceDim;
  switch (x1) {
    case 1: {
      $thiz.sci_NewVectorIterator__f_a1 = slice;
      break;
    }
    case 2: {
      $thiz.sci_NewVectorIterator__f_a2 = $asArrayOf_O(slice, 2);
      break;
    }
    case 3: {
      $thiz.sci_NewVectorIterator__f_a3 = $asArrayOf_O(slice, 3);
      break;
    }
    case 4: {
      $thiz.sci_NewVectorIterator__f_a4 = $asArrayOf_O(slice, 4);
      break;
    }
    case 5: {
      $thiz.sci_NewVectorIterator__f_a5 = $asArrayOf_O(slice, 5);
      break;
    }
    case 6: {
      $thiz.sci_NewVectorIterator__f_a6 = $asArrayOf_O(slice, 6);
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.sci_NewVectorIterator__f_sliceEnd = (($thiz.sci_NewVectorIterator__f_sliceStart + Math.imul($n(slice).u.length, (1 << Math.imul(5, (((-1) + $thiz.sci_NewVectorIterator__f_sliceDim) | 0))))) | 0);
  if (($thiz.sci_NewVectorIterator__f_sliceEnd > $thiz.sci_NewVectorIterator__f_totalLength)) {
    $thiz.sci_NewVectorIterator__f_sliceEnd = $thiz.sci_NewVectorIterator__f_totalLength;
  }
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    $thiz.sci_NewVectorIterator__f_oldPos = (((-1) + (1 << Math.imul(5, $thiz.sci_NewVectorIterator__f_sliceDim))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + $thiz.sci_NewVectorIterator__f_totalLength) | 0);
  if ((pos === $thiz.sci_NewVectorIterator__f_sliceEnd)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    var io = ((pos - $thiz.sci_NewVectorIterator__f_sliceStart) | 0);
    var xor = ($thiz.sci_NewVectorIterator__f_oldPos ^ io);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor);
    $thiz.sci_NewVectorIterator__f_oldPos = io;
  }
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var a = $n($thiz.sci_NewVectorIterator__f_a1).u.length;
  var b = $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
  $thiz.sci_NewVectorIterator__f_a1len = ((a < b) ? a : b);
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get(0);
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.sci_NewVectorIterator__f_v = null;
  this.sci_NewVectorIterator__f_totalLength = 0;
  this.sci_NewVectorIterator__f_sliceCount = 0;
  this.sci_NewVectorIterator__f_a1 = null;
  this.sci_NewVectorIterator__f_a2 = null;
  this.sci_NewVectorIterator__f_a3 = null;
  this.sci_NewVectorIterator__f_a4 = null;
  this.sci_NewVectorIterator__f_a5 = null;
  this.sci_NewVectorIterator__f_a6 = null;
  this.sci_NewVectorIterator__f_a1len = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 0;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = 0;
  this.sci_NewVectorIterator__f_v = v;
  this.sci_NewVectorIterator__f_totalLength = totalLength;
  this.sci_NewVectorIterator__f_sliceCount = sliceCount;
  this.sci_NewVectorIterator__f_a1 = $n(v).sci_Vector__f_prefix1;
  this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = this.sci_NewVectorIterator__f_totalLength;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 1;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_a1len;
}
$c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_NewVectorIterator.prototype.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $c_sci_NewVectorIterator.prototype;
$c_sci_NewVectorIterator.prototype.knownSize__I = (function() {
  return ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
});
$c_sci_NewVectorIterator.prototype.hasNext__Z = (function() {
  return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
});
$c_sci_NewVectorIterator.prototype.next__O = (function() {
  if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = $n(this.sci_NewVectorIterator__f_a1).get(this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((1 + this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  return r;
});
$c_sci_NewVectorIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + this.sci_NewVectorIterator__f_totalLength) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.sci_NewVectorIterator__f_totalLength;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.sci_NewVectorIterator__f_totalLength)) {
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
      this.sci_NewVectorIterator__f_a1len = 0;
    } else {
      while ((newpos >= this.sci_NewVectorIterator__f_sliceEnd)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.sci_NewVectorIterator__f_sliceStart) | 0);
      if ((this.sci_NewVectorIterator__f_sliceDim > 1)) {
        var xor = (this.sci_NewVectorIterator__f_oldPos ^ io);
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, xor);
        this.sci_NewVectorIterator__f_oldPos = io;
      }
      this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = (31 & io);
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + ((this.sci_NewVectorIterator__f_totalLength - newpos) | 0)) | 0);
      if ((this.sci_NewVectorIterator__f_a1len > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1)) {
        this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
      }
    }
  }
  return this;
});
$c_sci_NewVectorIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var srcLen = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = (($n(this.sci_NewVectorIterator__f_a1).u.length - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.sci_NewVectorIterator__f_a1;
      var srcPos = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1;
      var destPos = ((start + copied) | 0);
      $systemArraycopyFull($n(src), srcPos, $n(xs), destPos, count);
    } else {
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_NewVectorIterator__f_a1, this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1, xs, ((start + copied) | 0), count);
    }
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().initClass($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  sci_NewVectorIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  jl_Cloneable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$() {
  this.scm_ArraySeq$__f_untagged = null;
  this.scm_ArraySeq$__f_EmptyArraySeq = null;
  $n_scm_ArraySeq$ = this;
  this.scm_ArraySeq$__f_untagged = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.scm_ArraySeq$__f_EmptyArraySeq = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$c_scm_ArraySeq$.prototype = new $h_O();
$c_scm_ArraySeq$.prototype.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $c_scm_ArraySeq$.prototype;
$c_scm_ArraySeq$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__scm_ArraySeq = (function(it, evidence$2) {
  return this.make__O__scm_ArraySeq($m_s_Array$().from__sc_IterableOnce__s_reflect_ClassTag__O(it, evidence$2));
});
$c_scm_ArraySeq$.prototype.make__O__scm_ArraySeq = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    var x3 = $asArrayOf_O(x, 1);
    return new $c_scm_ArraySeq$ofRef(x3);
  } else if ((x instanceof $ac_I)) {
    var x4 = $asArrayOf_I(x, 1);
    return new $c_scm_ArraySeq$ofInt(x4);
  } else if ((x instanceof $ac_D)) {
    var x5 = $asArrayOf_D(x, 1);
    return new $c_scm_ArraySeq$ofDouble(x5);
  } else if ((x instanceof $ac_J)) {
    var x6 = $asArrayOf_J(x, 1);
    return new $c_scm_ArraySeq$ofLong(x6);
  } else if ((x instanceof $ac_F)) {
    var x7 = $asArrayOf_F(x, 1);
    return new $c_scm_ArraySeq$ofFloat(x7);
  } else if ((x instanceof $ac_C)) {
    var x8 = $asArrayOf_C(x, 1);
    return new $c_scm_ArraySeq$ofChar(x8);
  } else if ((x instanceof $ac_B)) {
    var x9 = $asArrayOf_B(x, 1);
    return new $c_scm_ArraySeq$ofByte(x9);
  } else if ((x instanceof $ac_S)) {
    var x10 = $asArrayOf_S(x, 1);
    return new $c_scm_ArraySeq$ofShort(x10);
  } else if ((x instanceof $ac_Z)) {
    var x11 = $asArrayOf_Z(x, 1);
    return new $c_scm_ArraySeq$ofBoolean(x11);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    var x12 = $asArrayOf_jl_Void(x, 1);
    return new $c_scm_ArraySeq$ofUnit(x12);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$c_scm_ArraySeq$.prototype.from__sc_IterableOnce__O__O = (function(it, evidence$5) {
  return this.from__sc_IterableOnce__s_reflect_ClassTag__scm_ArraySeq(it, $as_s_reflect_ClassTag(evidence$5));
});
var $d_scm_ArraySeq$ = new $TypeData().initClass($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  scm_ArraySeq$: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = null;
  this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = runtimeClass;
}
$c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$c_s_reflect_ClassTag$GenericClassTag.prototype.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $c_s_reflect_ClassTag$GenericClassTag.prototype;
$c_s_reflect_ClassTag$GenericClassTag.prototype.equals__O__Z = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.hashCode__I = (function() {
  var x = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
  return $m_sr_Statics$().anyHash__O__I(x);
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.toString__T = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass);
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.runtimeClass__jl_Class = (function() {
  return this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.newArray__I__O = (function(len) {
  var componentType = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
  return $n(componentType).data.newArray(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().initClass($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  s_reflect_ClassTag$GenericClassTag: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$() {
  $n_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$ = this;
  $f_Ljapgolly_scalajs_react_util_Monad__$init$__V(this);
}
$c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$.prototype.constructor = $c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$() {
}
$h_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$.prototype = $c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$.prototype;
$c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$.prototype.japgolly$scalajs$react$util$Monad$_setter_$unit_$eq__O__V = (function(x$0) {
});
$c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$.prototype.pure__O__O = (function(a) {
  return new $c_Ljapgolly_scalajs_react_callback_AsyncCallback($m_Ljapgolly_scalajs_react_callback_AsyncCallback$().pure__O__F1(a));
});
$c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$.prototype.dispatch__O__V = (function(fa) {
  var fa$1 = ((fa === null) ? null : $n($as_Ljapgolly_scalajs_react_callback_AsyncCallback(fa)).Ljapgolly_scalajs_react_callback_AsyncCallback__f_underlyingRepr);
  $m_Ljapgolly_scalajs_react_callback_AsyncCallback$().runNow$extension__F1__V(fa$1);
});
var $d_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$, "japgolly.scalajs.react.util.EffectCallback$asyncCallback$", ({
  Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$: 1,
  Ljapgolly_scalajs_react_util_Monad: 1,
  Ljapgolly_scalajs_react_util_Effect: 1,
  Ljapgolly_scalajs_react_util_Effect$Dispatch: 1,
  Ljapgolly_scalajs_react_util_Effect$Async: 1,
  Ljapgolly_scalajs_react_util_Effect$WithDefaults: 1,
  Ljapgolly_scalajs_react_util_Effect$Dispatch$WithDefaults: 1
}));
var $n_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$;
function $m_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$() {
  if ((!$n_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$)) {
    $n_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$ = new $c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$();
  }
  return $n_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$;
}
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$c_Ljava_io_PrintStream.prototype.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $c_Ljava_io_PrintStream.prototype;
function $as_Ljava_io_PrintStream(obj) {
  return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"));
}
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_PrintStream)));
}
function $asArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (($isArrayOf_Ljava_io_PrintStream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.PrintStream;", depth));
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next$mcB$sp__B = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next__O = (function() {
  return this.next$mcB$sp__B();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  sc_ArrayOps$ArrayIterator$mcB$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next$mcC$sp__C = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next__O = (function() {
  return $bC(this.next$mcC$sp__C());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  sc_ArrayOps$ArrayIterator$mcC$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next$mcD$sp__D = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next__O = (function() {
  return this.next$mcD$sp__D();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  sc_ArrayOps$ArrayIterator$mcD$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next$mcF$sp__F = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next__O = (function() {
  return this.next$mcF$sp__F();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  sc_ArrayOps$ArrayIterator$mcF$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next$mcI$sp__I = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next__O = (function() {
  return this.next$mcI$sp__I();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  sc_ArrayOps$ArrayIterator$mcI$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next$mcJ$sp__J = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var t = $n(this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return new $c_RTLong(lo, hi);
});
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next__O = (function() {
  return this.next$mcJ$sp__J();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  sc_ArrayOps$ArrayIterator$mcJ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next$mcS$sp__S = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next__O = (function() {
  return this.next$mcS$sp__S();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  sc_ArrayOps$ArrayIterator$mcS$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next$mcV$sp__V = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  $n(this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
});
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next__O = (function() {
  this.next$mcV$sp__V();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  sc_ArrayOps$ArrayIterator$mcV$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next$mcZ$sp__Z = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next__O = (function() {
  return this.next$mcZ$sp__Z();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  sc_ArrayOps$ArrayIterator$mcZ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.className__T() + "(<not computed>)");
}
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_AnyValManifest.prototype = new $h_O();
$c_s_reflect_AnyValManifest.prototype.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $c_s_reflect_AnyValManifest.prototype;
$c_s_reflect_AnyValManifest.prototype.toString__T = (function() {
  return this.s_reflect_AnyValManifest__f_toString;
});
$c_s_reflect_AnyValManifest.prototype.equals__O__Z = (function(that) {
  return (this === that);
});
$c_s_reflect_AnyValManifest.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype;
function $as_sjs_js_JavaScriptException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"));
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)));
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth));
}
function $f_Ljapgolly_scalajs_react_util_Effect$Sync$WithDefaultDispatch__dispatch__O__V($thiz, fa) {
  if ((!$thiz.isEmpty__O__Z(fa))) {
    var CallbackTo_this = ((fa === null) ? null : $n($as_Ljapgolly_scalajs_react_callback_CallbackTo(fa)).Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline);
    var this$2 = $n(CallbackTo_this);
    $m_Ljapgolly_scalajs_react_util_Trampoline$().run__Ljapgolly_scalajs_react_util_Trampoline__O(this$2);
  }
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    if (($thiz.jl_JSConsoleBasedPrintStream__f_isErr && $uZ((!(!console.error))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.jl_JSConsoleBasedPrintStream__f_isErr = false;
  this.jl_JSConsoleBasedPrintStream__f_buffer = null;
  this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
  var out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
  this.jl_JSConsoleBasedPrintStream__f_buffer = "";
}
$c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$c_jl_JSConsoleBasedPrintStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $c_jl_JSConsoleBasedPrintStream.prototype;
$c_jl_JSConsoleBasedPrintStream.prototype.java$lang$JSConsoleBasedPrintStream$$printString__T__V = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = $n(rest);
    var nlPos = $uI(this$1.indexOf("\n"));
    if ((nlPos < 0)) {
      this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
      rest = "";
    } else {
      var $x_1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
      var this$2 = $n(rest);
      if ((nlPos > this$2.length)) {
        $charAt(this$2, nlPos);
      }
      if ((nlPos < 0)) {
        $charAt(this$2, (-1));
      }
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + $as_T(this$2.substring(0, nlPos))));
      this.jl_JSConsoleBasedPrintStream__f_buffer = "";
      var this$3 = $n(rest);
      var beginIndex = ((1 + nlPos) | 0);
      if (((beginIndex < 0) || (beginIndex > this$3.length))) {
        $charAt(this$3, beginIndex);
      }
      rest = $as_T(this$3.substring(beginIndex));
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || $n(s).isEmpty__Z())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = $as_sc_LinearSeq($n(s).tail__O());
      n = temp$n;
      s = temp$s;
    }
  }
}
function $is_sc_StrictOptimizedLinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_StrictOptimizedLinearSeqOps)));
}
function $as_sc_StrictOptimizedLinearSeqOps(obj) {
  return (($is_sc_StrictOptimizedLinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StrictOptimizedLinearSeqOps"));
}
function $isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StrictOptimizedLinearSeqOps)));
}
function $asArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (($isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StrictOptimizedLinearSeqOps;", depth));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$BooleanManifest.prototype.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $c_s_reflect_ManifestFactory$BooleanManifest.prototype;
$c_s_reflect_ManifestFactory$BooleanManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_Z.getClassOf();
});
$c_s_reflect_ManifestFactory$BooleanManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$ByteManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $c_s_reflect_ManifestFactory$ByteManifest.prototype;
$c_s_reflect_ManifestFactory$ByteManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_B.getClassOf();
});
$c_s_reflect_ManifestFactory$ByteManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$CharManifest.prototype.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $c_s_reflect_ManifestFactory$CharManifest.prototype;
$c_s_reflect_ManifestFactory$CharManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_C.getClassOf();
});
$c_s_reflect_ManifestFactory$CharManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$DoubleManifest.prototype.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $c_s_reflect_ManifestFactory$DoubleManifest.prototype;
$c_s_reflect_ManifestFactory$DoubleManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_D.getClassOf();
});
$c_s_reflect_ManifestFactory$DoubleManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$FloatManifest.prototype.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $c_s_reflect_ManifestFactory$FloatManifest.prototype;
$c_s_reflect_ManifestFactory$FloatManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_F.getClassOf();
});
$c_s_reflect_ManifestFactory$FloatManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$IntManifest.prototype.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $c_s_reflect_ManifestFactory$IntManifest.prototype;
$c_s_reflect_ManifestFactory$IntManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_I.getClassOf();
});
$c_s_reflect_ManifestFactory$IntManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$LongManifest.prototype.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $c_s_reflect_ManifestFactory$LongManifest.prototype;
$c_s_reflect_ManifestFactory$LongManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_J.getClassOf();
});
$c_s_reflect_ManifestFactory$LongManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $c_s_reflect_ManifestFactory$PhantomManifest.prototype;
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.toString__T = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_toString;
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.equals__O__Z = (function(that) {
  return (this === that);
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$ShortManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $c_s_reflect_ManifestFactory$ShortManifest.prototype;
$c_s_reflect_ManifestFactory$ShortManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_S.getClassOf();
});
$c_s_reflect_ManifestFactory$ShortManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$UnitManifest.prototype.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $c_s_reflect_ManifestFactory$UnitManifest.prototype;
$c_s_reflect_ManifestFactory$UnitManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_V.getClassOf();
});
$c_s_reflect_ManifestFactory$UnitManifest.prototype.newArray__I__O = (function(len) {
  return new ($d_jl_Void.getArrayOf().constr)(len);
});
function $f_Ljapgolly_scalajs_react_internal_CoreGeneral__$init$__V($thiz) {
  $thiz.Ljapgolly_scalajs_react_internal_CoreGeneralF__f_ScalaFnComponent = $m_Ljapgolly_scalajs_react_component_ScalaFn$();
  $m_Ljapgolly_scalajs_react_hooks_CustomHook$();
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_EffectCallback$callback$() {
  $n_Ljapgolly_scalajs_react_util_EffectCallback$callback$ = this;
  $f_Ljapgolly_scalajs_react_util_Monad__$init$__V(this);
  $m_Ljapgolly_scalajs_react_callback_Callback$package$Callback$();
}
$c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype.constructor = $c_Ljapgolly_scalajs_react_util_EffectCallback$callback$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_EffectCallback$callback$() {
}
$h_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype = $c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype;
$c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype.japgolly$scalajs$react$util$Monad$_setter_$unit_$eq__O__V = (function(x$0) {
});
$c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype.dispatch__O__V = (function(fa) {
  $f_Ljapgolly_scalajs_react_util_Effect$Sync$WithDefaultDispatch__dispatch__O__V(this, fa);
});
$c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype.isEmpty__O__Z = (function(f) {
  var f$1 = ((f === null) ? null : $n($as_Ljapgolly_scalajs_react_callback_CallbackTo(f)).Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline);
  var this$ = $m_Ljapgolly_scalajs_react_callback_Callback$package$Callback$().Ljapgolly_scalajs_react_callback_Callback$package$Callback$__f_empty;
  return (f$1 === this$);
});
$c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype.delay__F0__O = (function(a) {
  return new $c_Ljapgolly_scalajs_react_callback_CallbackTo(new $c_Ljapgolly_scalajs_react_callback_CallbackTo(($m_Ljapgolly_scalajs_react_util_Trampoline$(), new $c_Ljapgolly_scalajs_react_util_Trampoline$Delay(a))).Ljapgolly_scalajs_react_callback_CallbackTo__f_trampoline);
});
$c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype.pure__O__O = (function(a) {
  return new $c_Ljapgolly_scalajs_react_callback_CallbackTo(($m_Ljapgolly_scalajs_react_util_Trampoline$(), new $c_Ljapgolly_scalajs_react_util_Trampoline$Pure(a)));
});
var $d_Ljapgolly_scalajs_react_util_EffectCallback$callback$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_util_EffectCallback$callback$, "japgolly.scalajs.react.util.EffectCallback$callback$", ({
  Ljapgolly_scalajs_react_util_EffectCallback$callback$: 1,
  Ljapgolly_scalajs_react_util_Monad: 1,
  Ljapgolly_scalajs_react_util_Effect: 1,
  Ljapgolly_scalajs_react_util_Effect$Dispatch: 1,
  Ljapgolly_scalajs_react_util_Effect$UnsafeSync: 1,
  Ljapgolly_scalajs_react_util_Effect$Sync: 1,
  Ljapgolly_scalajs_react_util_Effect$WithDefaults: 1,
  Ljapgolly_scalajs_react_util_Effect$Dispatch$WithDefaults: 1,
  Ljapgolly_scalajs_react_util_Effect$Sync$WithDefaultDispatch: 1
}));
var $n_Ljapgolly_scalajs_react_util_EffectCallback$callback$;
function $m_Ljapgolly_scalajs_react_util_EffectCallback$callback$() {
  if ((!$n_Ljapgolly_scalajs_react_util_EffectCallback$callback$)) {
    $n_Ljapgolly_scalajs_react_util_EffectCallback$callback$ = new $c_Ljapgolly_scalajs_react_util_EffectCallback$callback$();
  }
  return $n_Ljapgolly_scalajs_react_util_EffectCallback$callback$;
}
function $ct_Ljapgolly_scalajs_react_vdom_PackageBase__($thiz) {
  $ct_Ljapgolly_scalajs_react_vdom_Exports__($thiz);
  $f_Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr1__$init$__V($thiz);
  $f_Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr__$init$__V($thiz);
  return $thiz;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_PackageBase() {
  this.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf = null;
  this.Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr = null;
}
$c_Ljapgolly_scalajs_react_vdom_PackageBase.prototype = new $h_Ljapgolly_scalajs_react_vdom_Exports();
$c_Ljapgolly_scalajs_react_vdom_PackageBase.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_PackageBase;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_PackageBase() {
}
$h_Ljapgolly_scalajs_react_vdom_PackageBase.prototype = $c_Ljapgolly_scalajs_react_vdom_PackageBase.prototype;
/** @constructor */
function $c_sc_AbstractView() {
}
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
}
$c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $c_s_reflect_ManifestFactory$AnyManifest$.prototype;
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_O.getClassOf();
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$();
  }
  return $n_s_reflect_ManifestFactory$AnyManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Boolean";
}
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  s_reflect_ManifestFactory$BooleanManifest$: 1,
  s_reflect_ManifestFactory$BooleanManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$();
  }
  return $n_s_reflect_ManifestFactory$BooleanManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Byte";
}
$c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $c_s_reflect_ManifestFactory$ByteManifest$.prototype;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  s_reflect_ManifestFactory$ByteManifest$: 1,
  s_reflect_ManifestFactory$ByteManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$();
  }
  return $n_s_reflect_ManifestFactory$ByteManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Char";
}
$c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$c_s_reflect_ManifestFactory$CharManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $c_s_reflect_ManifestFactory$CharManifest$.prototype;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  s_reflect_ManifestFactory$CharManifest$: 1,
  s_reflect_ManifestFactory$CharManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$();
  }
  return $n_s_reflect_ManifestFactory$CharManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Double";
}
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  s_reflect_ManifestFactory$DoubleManifest$: 1,
  s_reflect_ManifestFactory$DoubleManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
  }
  return $n_s_reflect_ManifestFactory$DoubleManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Float";
}
$c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $c_s_reflect_ManifestFactory$FloatManifest$.prototype;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  s_reflect_ManifestFactory$FloatManifest$: 1,
  s_reflect_ManifestFactory$FloatManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
  }
  return $n_s_reflect_ManifestFactory$FloatManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Int";
}
$c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$c_s_reflect_ManifestFactory$IntManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $c_s_reflect_ManifestFactory$IntManifest$.prototype;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_ManifestFactory$IntManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Long";
}
$c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$c_s_reflect_ManifestFactory$LongManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $c_s_reflect_ManifestFactory$LongManifest$.prototype;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  s_reflect_ManifestFactory$LongManifest$: 1,
  s_reflect_ManifestFactory$LongManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
  }
  return $n_s_reflect_ManifestFactory$LongManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
}
$c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $c_s_reflect_ManifestFactory$NothingManifest$.prototype;
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_sr_Nothing$.getClassOf();
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  s_reflect_ManifestFactory$NothingManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$();
  }
  return $n_s_reflect_ManifestFactory$NothingManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null";
}
$c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$NullManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $c_s_reflect_ManifestFactory$NullManifest$.prototype;
$c_s_reflect_ManifestFactory$NullManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_sr_Null$.getClassOf();
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  s_reflect_ManifestFactory$NullManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$();
  }
  return $n_s_reflect_ManifestFactory$NullManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
}
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype;
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_O.getClassOf();
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Short";
}
$c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $c_s_reflect_ManifestFactory$ShortManifest$.prototype;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  s_reflect_ManifestFactory$ShortManifest$: 1,
  s_reflect_ManifestFactory$ShortManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$();
  }
  return $n_s_reflect_ManifestFactory$ShortManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Unit";
}
$c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $c_s_reflect_ManifestFactory$UnitManifest$.prototype;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  s_reflect_ManifestFactory$UnitManifest$: 1,
  s_reflect_ManifestFactory$UnitManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
  }
  return $n_s_reflect_ManifestFactory$UnitManifest$;
}
function $ct_Ljapgolly_scalajs_react_internal_CoreGeneralF__Ljapgolly_scalajs_react_util_Effect$Sync__($thiz, F) {
  $f_Ljapgolly_scalajs_react_hooks_extra__$init$__V($thiz);
  $f_Ljapgolly_scalajs_react_internal_CoreGeneral__$init$__V($thiz);
  return $thiz;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_internal_CoreGeneralF() {
  this.Ljapgolly_scalajs_react_internal_CoreGeneralF__f_ScalaFnComponent = null;
}
$c_Ljapgolly_scalajs_react_internal_CoreGeneralF.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_internal_CoreGeneralF.prototype.constructor = $c_Ljapgolly_scalajs_react_internal_CoreGeneralF;
/** @constructor */
function $h_Ljapgolly_scalajs_react_internal_CoreGeneralF() {
}
$h_Ljapgolly_scalajs_react_internal_CoreGeneralF.prototype = $c_Ljapgolly_scalajs_react_internal_CoreGeneralF.prototype;
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_PackageBase$() {
  this.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf = null;
  this.Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr = null;
  $ct_Ljapgolly_scalajs_react_vdom_PackageBase__(this);
}
$c_Ljapgolly_scalajs_react_vdom_PackageBase$.prototype = new $h_Ljapgolly_scalajs_react_vdom_PackageBase();
$c_Ljapgolly_scalajs_react_vdom_PackageBase$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_PackageBase$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_PackageBase$() {
}
$h_Ljapgolly_scalajs_react_vdom_PackageBase$.prototype = $c_Ljapgolly_scalajs_react_vdom_PackageBase$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_PackageBase$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_PackageBase$, "japgolly.scalajs.react.vdom.PackageBase$", ({
  Ljapgolly_scalajs_react_vdom_PackageBase$: 1,
  Ljapgolly_scalajs_react_vdom_PackageBase: 1,
  Ljapgolly_scalajs_react_vdom_Exports: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForTagMod: 1,
  Ljapgolly_scalajs_react_vdom_CssUnitsOps: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr1: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr: 1,
  Ljapgolly_scalajs_react_vdom_VdomNodeScalaSpecificImplicits: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForVdomNode: 1,
  Ljapgolly_scalajs_react_vdom_Implicits: 1
}));
var $n_Ljapgolly_scalajs_react_vdom_PackageBase$;
function $m_Ljapgolly_scalajs_react_vdom_PackageBase$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_PackageBase$)) {
    $n_Ljapgolly_scalajs_react_vdom_PackageBase$ = new $c_Ljapgolly_scalajs_react_vdom_PackageBase$();
  }
  return $n_Ljapgolly_scalajs_react_vdom_PackageBase$;
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$() {
  this.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf = null;
  this.Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr = null;
  this.Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less = null;
  this.Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up = null;
  $ct_Ljapgolly_scalajs_react_vdom_PackageBase__(this);
  $n_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$ = this;
  this.Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less = $m_Ljapgolly_scalajs_react_vdom_HtmlTags$();
  this.Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up = $m_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$();
}
$c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$.prototype = new $h_Ljapgolly_scalajs_react_vdom_PackageBase();
$c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$() {
}
$h_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$.prototype = $c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$, "japgolly.scalajs.react.vdom.html_$less$up$", ({
  Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$: 1,
  Ljapgolly_scalajs_react_vdom_PackageBase: 1,
  Ljapgolly_scalajs_react_vdom_Exports: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForTagMod: 1,
  Ljapgolly_scalajs_react_vdom_CssUnitsOps: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr1: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr: 1,
  Ljapgolly_scalajs_react_vdom_VdomNodeScalaSpecificImplicits: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForVdomNode: 1,
  Ljapgolly_scalajs_react_vdom_Implicits: 1
}));
var $n_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$;
function $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$)) {
    $n_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$ = new $c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$();
  }
  return $n_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$;
}
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = $as_sc_Seq(o);
      if ($n(x2).canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)));
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)));
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth));
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true;
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this);
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$c_sc_AbstractSeq.prototype.compose__F1__F1 = (function(g) {
  return $f_F1__compose__F1__F1(this, g);
});
$c_sc_AbstractSeq.prototype.andThen__F1__F1 = (function(g) {
  return $f_s_PartialFunction__andThen__F1__s_PartialFunction(this, g);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)));
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)));
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)));
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)));
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth));
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_package$() {
  this.Ljapgolly_scalajs_react_internal_CoreGeneralF__f_ScalaFnComponent = null;
  $ct_Ljapgolly_scalajs_react_internal_CoreGeneralF__Ljapgolly_scalajs_react_util_Effect$Sync__(this, $m_Ljapgolly_scalajs_react_util_DefaultEffects$().Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync);
  $n_Ljapgolly_scalajs_react_package$ = this;
  $f_Ljapgolly_scalajs_react_callback_Exports__$init$__V(this);
}
$c_Ljapgolly_scalajs_react_package$.prototype = new $h_Ljapgolly_scalajs_react_internal_CoreGeneralF();
$c_Ljapgolly_scalajs_react_package$.prototype.constructor = $c_Ljapgolly_scalajs_react_package$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_package$() {
}
$h_Ljapgolly_scalajs_react_package$.prototype = $c_Ljapgolly_scalajs_react_package$.prototype;
var $d_Ljapgolly_scalajs_react_package$ = new $TypeData().initClass($c_Ljapgolly_scalajs_react_package$, "japgolly.scalajs.react.package$", ({
  Ljapgolly_scalajs_react_package$: 1,
  Ljapgolly_scalajs_react_internal_CoreGeneralF: 1,
  Ljapgolly_scalajs_react_ReactEventTypes: 1,
  Ljapgolly_scalajs_react_ReactExtensions: 1,
  Ljapgolly_scalajs_react_util_DomUtil: 1,
  Ljapgolly_scalajs_react_internal_FacadeExports: 1,
  Ljapgolly_scalajs_react_hooks_react17: 1,
  Ljapgolly_scalajs_react_hooks_react18: 1,
  Ljapgolly_scalajs_react_hooks_extra: 1,
  Ljapgolly_scalajs_react_hooks_all: 1,
  Ljapgolly_scalajs_react_internal_CoreGeneral: 1,
  Ljapgolly_scalajs_react_internal_ReactCallbackExtensions: 1,
  Ljapgolly_scalajs_react_callback_Exports: 1
}));
var $n_Ljapgolly_scalajs_react_package$;
function $m_Ljapgolly_scalajs_react_package$() {
  if ((!$n_Ljapgolly_scalajs_react_package$)) {
    $n_Ljapgolly_scalajs_react_package$ = new $c_Ljapgolly_scalajs_react_package$();
  }
  return $n_Ljapgolly_scalajs_react_package$;
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null;
}
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx);
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).length__I();
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).isEmpty__Z();
});
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)));
}
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"));
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)));
}
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth));
}
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView";
});
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true;
  } else {
    var x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === $n(x2).length__I());
  }
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    var x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true;
    } else {
      var length = $thiz.length__I();
      var equal = (length === $n(x2).length__I());
      if (equal) {
        var index = 0;
        var a = $thiz.applyPreferredMaxLength__I();
        var b = $n(x2).applyPreferredMaxLength__I();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), $n(x2).apply__I__O(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $n($thiz.iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          var thatIt = $n($n(x2).iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          while ((equal && $n(thisIt).hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z($n(thisIt).next__O(), $n(thatIt).next__O());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)));
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)));
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
function $as_sjsr_WrappedVarArgs(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.WrappedVarArgs"));
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)));
}
function $asArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (($isArrayOf_sjsr_WrappedVarArgs(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.WrappedVarArgs;", depth));
}
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
$c_scm_AbstractBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
/** @constructor */
function $c_sci_ArraySeq() {
}
$c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$c_sci_ArraySeq.prototype.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $c_sci_ArraySeq.prototype;
$c_sci_ArraySeq.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$c_sci_ArraySeq.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$c_sci_ArraySeq.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sci_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sci_ArraySeq.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_sci_ArraySeq.prototype.className__T = (function() {
  return "ArraySeq";
});
$c_sci_ArraySeq.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var srcLen = this.length__I();
  var destLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V(this.unsafeArray__O(), 0, xs, start, copied);
  }
  return copied;
});
$c_sci_ArraySeq.prototype.applyPreferredMaxLength__I = (function() {
  return 2147483647;
});
function $as_sci_ArraySeq(obj) {
  return (((obj instanceof $c_sci_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq"));
}
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq)));
}
function $asArrayOf_sci_ArraySeq(obj, depth) {
  return (($isArrayOf_sci_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq;", depth));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.sci_Vector__f_prefix1 = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.sci_Vector__f_prefix1 = null;
}
$c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$c_sci_Vector.prototype.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $c_sci_Vector.prototype;
$c_sci_Vector.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$c_sci_Vector.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$c_sci_Vector.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sci_Vector.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_sci_Vector.prototype.length__I = (function() {
  return ((this instanceof $c_sci_BigVector) ? $n($as_sci_BigVector(this)).sci_BigVector__f_length0 : $n(this.sci_Vector__f_prefix1).u.length);
});
$c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator : new $c_sci_NewVectorIterator(this, this.length__I(), this.vectorSliceCount__I()));
});
$c_sci_Vector.prototype.className__T = (function() {
  return "Vector";
});
$c_sci_Vector.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $n(this.iterator__sc_Iterator()).copyToArray__O__I__I__I(xs, start, len);
});
$c_sci_Vector.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength;
});
$c_sci_Vector.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException(index, (((-1) + this.length__I()) | 0));
});
$c_sci_Vector.prototype.foreach__F1__V = (function(f) {
  var c = this.vectorSliceCount__I();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.foreachRec__I__AO__F1__V((((-1) + ((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0)) | 0), this.vectorSlice__I__AO(i), f);
    i = ((1 + i) | 0);
  }
});
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"));
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)));
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth));
}
/** @constructor */
function $c_scm_ArraySeq() {
}
$c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$c_scm_ArraySeq.prototype.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $c_scm_ArraySeq.prototype;
$c_scm_ArraySeq.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_scm_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_ArraySeq.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_scm_ArraySeq.prototype.className__T = (function() {
  return "ArraySeq";
});
$c_scm_ArraySeq.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    var x2 = $as_scm_ArraySeq(other);
    var xs = this.array__O();
    var $x_1 = $m_jl_reflect_Array$().getLength__O__I(xs);
    var xs$1 = $n(x2).array__O();
    if (($x_1 !== $m_jl_reflect_Array$().getLength__O__I(xs$1))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $as_scm_ArraySeq(obj) {
  return (((obj instanceof $c_scm_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq"));
}
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq)));
}
function $asArrayOf_scm_ArraySeq(obj, depth) {
  return (($isArrayOf_scm_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq;", depth));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.sci_ArraySeq$ofBoolean__f_unsafeArray = null;
  this.sci_ArraySeq$ofBoolean__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofBoolean.prototype.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $c_sci_ArraySeq$ofBoolean.prototype;
$c_sci_ArraySeq$ofBoolean.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofBoolean__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofBoolean.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofBoolean__f_unsafeArray;
  return this$1.arrayHash$mZc$sp__AZ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofBoolean.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofBoolean)) {
    var x2 = $as_sci_ArraySeq$ofBoolean(that);
    var a = this.sci_ArraySeq$ofBoolean__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofBoolean__f_unsafeArray;
    return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofBoolean.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.sci_ArraySeq$ofBoolean__f_unsafeArray);
});
$c_sci_ArraySeq$ofBoolean.prototype.apply$mcZI$sp__I__Z = (function(i) {
  return $n(this.sci_ArraySeq$ofBoolean__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofBoolean.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcZI$sp__I__Z(i);
});
$c_sci_ArraySeq$ofBoolean.prototype.apply__I__O = (function(i) {
  return this.apply$mcZI$sp__I__Z(i);
});
$c_sci_ArraySeq$ofBoolean.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofBoolean__f_unsafeArray;
});
function $as_sci_ArraySeq$ofBoolean(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofBoolean) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofBoolean"));
}
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofBoolean)));
}
function $asArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofBoolean;", depth));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().initClass($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  sci_ArraySeq$ofBoolean: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.sci_ArraySeq$ofByte__f_unsafeArray = null;
  this.sci_ArraySeq$ofByte__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofByte.prototype.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $c_sci_ArraySeq$ofByte.prototype;
$c_sci_ArraySeq$ofByte.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofByte__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofByte.prototype.apply__I__B = (function(i) {
  return $n(this.sci_ArraySeq$ofByte__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofByte.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofByte__f_unsafeArray;
  return this$1.arrayHash$mBc$sp__AB__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofByte.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofByte)) {
    var x2 = $as_sci_ArraySeq$ofByte(that);
    var a = this.sci_ArraySeq$ofByte__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofByte__f_unsafeArray;
    return $m_ju_Arrays$().equals__AB__AB__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofByte.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.sci_ArraySeq$ofByte__f_unsafeArray);
});
$c_sci_ArraySeq$ofByte.prototype.apply__O__O = (function(v1) {
  return this.apply__I__B($uI(v1));
});
$c_sci_ArraySeq$ofByte.prototype.apply__I__O = (function(i) {
  return this.apply__I__B(i);
});
$c_sci_ArraySeq$ofByte.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofByte__f_unsafeArray;
});
function $as_sci_ArraySeq$ofByte(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofByte) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofByte"));
}
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofByte)));
}
function $asArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofByte(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofByte;", depth));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().initClass($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  sci_ArraySeq$ofByte: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.sci_ArraySeq$ofChar__f_unsafeArray = null;
  this.sci_ArraySeq$ofChar__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofChar.prototype.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $c_sci_ArraySeq$ofChar.prototype;
$c_sci_ArraySeq$ofChar.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofChar__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofChar.prototype.apply__I__C = (function(i) {
  return $n(this.sci_ArraySeq$ofChar__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofChar.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofChar__f_unsafeArray;
  return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofChar.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofChar)) {
    var x2 = $as_sci_ArraySeq$ofChar(that);
    var a = this.sci_ArraySeq$ofChar__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofChar__f_unsafeArray;
    return $m_ju_Arrays$().equals__AC__AC__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofChar.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.sci_ArraySeq$ofChar__f_unsafeArray);
});
$c_sci_ArraySeq$ofChar.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.sci_ArraySeq$ofChar__f_unsafeArray).addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end);
});
$c_sci_ArraySeq$ofChar.prototype.apply__O__O = (function(v1) {
  return $bC(this.apply__I__C($uI(v1)));
});
$c_sci_ArraySeq$ofChar.prototype.apply__I__O = (function(i) {
  return $bC(this.apply__I__C(i));
});
$c_sci_ArraySeq$ofChar.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofChar__f_unsafeArray;
});
function $as_sci_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofChar"));
}
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofChar)));
}
function $asArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofChar;", depth));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().initClass($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  sci_ArraySeq$ofChar: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.sci_ArraySeq$ofDouble__f_unsafeArray = null;
  this.sci_ArraySeq$ofDouble__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofDouble.prototype.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $c_sci_ArraySeq$ofDouble.prototype;
$c_sci_ArraySeq$ofDouble.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofDouble__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofDouble.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofDouble__f_unsafeArray;
  return this$1.arrayHash$mDc$sp__AD__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofDouble.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofDouble)) {
    var x2 = $as_sci_ArraySeq$ofDouble(that);
    var a = this.sci_ArraySeq$ofDouble__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofDouble__f_unsafeArray;
    return $m_ju_Arrays$().equals__AD__AD__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofDouble.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.sci_ArraySeq$ofDouble__f_unsafeArray);
});
$c_sci_ArraySeq$ofDouble.prototype.apply$mcDI$sp__I__D = (function(i) {
  return $n(this.sci_ArraySeq$ofDouble__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofDouble.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcDI$sp__I__D(i);
});
$c_sci_ArraySeq$ofDouble.prototype.apply__I__O = (function(i) {
  return this.apply$mcDI$sp__I__D(i);
});
$c_sci_ArraySeq$ofDouble.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofDouble__f_unsafeArray;
});
function $as_sci_ArraySeq$ofDouble(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofDouble) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofDouble"));
}
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofDouble)));
}
function $asArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofDouble(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofDouble;", depth));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().initClass($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  sci_ArraySeq$ofDouble: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.sci_ArraySeq$ofFloat__f_unsafeArray = null;
  this.sci_ArraySeq$ofFloat__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofFloat.prototype.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $c_sci_ArraySeq$ofFloat.prototype;
$c_sci_ArraySeq$ofFloat.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofFloat__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofFloat.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofFloat__f_unsafeArray;
  return this$1.arrayHash$mFc$sp__AF__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofFloat.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofFloat)) {
    var x2 = $as_sci_ArraySeq$ofFloat(that);
    var a = this.sci_ArraySeq$ofFloat__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofFloat__f_unsafeArray;
    return $m_ju_Arrays$().equals__AF__AF__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofFloat.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.sci_ArraySeq$ofFloat__f_unsafeArray);
});
$c_sci_ArraySeq$ofFloat.prototype.apply$mcFI$sp__I__F = (function(i) {
  return $n(this.sci_ArraySeq$ofFloat__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofFloat.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcFI$sp__I__F(i);
});
$c_sci_ArraySeq$ofFloat.prototype.apply__I__O = (function(i) {
  return this.apply$mcFI$sp__I__F(i);
});
$c_sci_ArraySeq$ofFloat.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofFloat__f_unsafeArray;
});
function $as_sci_ArraySeq$ofFloat(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofFloat) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofFloat"));
}
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofFloat)));
}
function $asArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofFloat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofFloat;", depth));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().initClass($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  sci_ArraySeq$ofFloat: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.sci_ArraySeq$ofInt__f_unsafeArray = null;
  this.sci_ArraySeq$ofInt__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofInt.prototype.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $c_sci_ArraySeq$ofInt.prototype;
$c_sci_ArraySeq$ofInt.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofInt__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofInt.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofInt__f_unsafeArray;
  return this$1.arrayHash$mIc$sp__AI__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofInt.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofInt)) {
    var x2 = $as_sci_ArraySeq$ofInt(that);
    var a = this.sci_ArraySeq$ofInt__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofInt__f_unsafeArray;
    return $m_ju_Arrays$().equals__AI__AI__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofInt.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.sci_ArraySeq$ofInt__f_unsafeArray);
});
$c_sci_ArraySeq$ofInt.prototype.apply$mcII$sp__I__I = (function(i) {
  return $n(this.sci_ArraySeq$ofInt__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofInt.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcII$sp__I__I(i);
});
$c_sci_ArraySeq$ofInt.prototype.apply__I__O = (function(i) {
  return this.apply$mcII$sp__I__I(i);
});
$c_sci_ArraySeq$ofInt.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofInt__f_unsafeArray;
});
function $as_sci_ArraySeq$ofInt(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofInt"));
}
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofInt)));
}
function $asArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofInt;", depth));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().initClass($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  sci_ArraySeq$ofInt: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.sci_ArraySeq$ofLong__f_unsafeArray = null;
  this.sci_ArraySeq$ofLong__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofLong.prototype.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $c_sci_ArraySeq$ofLong.prototype;
$c_sci_ArraySeq$ofLong.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofLong__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofLong.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofLong__f_unsafeArray;
  return this$1.arrayHash$mJc$sp__AJ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofLong)) {
    var x2 = $as_sci_ArraySeq$ofLong(that);
    var a = this.sci_ArraySeq$ofLong__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofLong__f_unsafeArray;
    return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofLong.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.sci_ArraySeq$ofLong__f_unsafeArray);
});
$c_sci_ArraySeq$ofLong.prototype.apply$mcJI$sp__I__J = (function(i) {
  return $n(this.sci_ArraySeq$ofLong__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofLong.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcJI$sp__I__J(i);
});
$c_sci_ArraySeq$ofLong.prototype.apply__I__O = (function(i) {
  return this.apply$mcJI$sp__I__J(i);
});
$c_sci_ArraySeq$ofLong.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofLong__f_unsafeArray;
});
function $as_sci_ArraySeq$ofLong(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofLong) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofLong"));
}
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofLong)));
}
function $asArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofLong;", depth));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().initClass($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  sci_ArraySeq$ofLong: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.sci_ArraySeq$ofRef__f_unsafeArray = null;
  this.sci_ArraySeq$ofRef__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofRef.prototype.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $c_sci_ArraySeq$ofRef.prototype;
$c_sci_ArraySeq$ofRef.prototype.elemTag__s_reflect_ClassTag = (function() {
  var $x_1 = $m_s_reflect_ClassTag$();
  var this$1 = $n(this.sci_ArraySeq$ofRef__f_unsafeArray);
  var this$2 = $objectGetClass(this$1);
  return $x_1.apply__jl_Class__s_reflect_ClassTag(this$2.data.getComponentType());
});
$c_sci_ArraySeq$ofRef.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofRef.prototype.apply__I__O = (function(i) {
  return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofRef.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofRef__f_unsafeArray;
  return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofRef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofRef)) {
    var x2 = $as_sci_ArraySeq$ofRef(that);
    return $m_s_Array$().equals__AO__AO__Z(this.sci_ArraySeq$ofRef__f_unsafeArray, $n(x2).sci_ArraySeq$ofRef__f_unsafeArray);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.sci_ArraySeq$ofRef__f_unsafeArray);
});
$c_sci_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1));
});
$c_sci_ArraySeq$ofRef.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofRef__f_unsafeArray;
});
function $as_sci_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"));
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)));
}
function $asArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofRef;", depth));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().initClass($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  sci_ArraySeq$ofRef: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.sci_ArraySeq$ofShort__f_unsafeArray = null;
  this.sci_ArraySeq$ofShort__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofShort.prototype.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $c_sci_ArraySeq$ofShort.prototype;
$c_sci_ArraySeq$ofShort.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofShort__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofShort.prototype.apply__I__S = (function(i) {
  return $n(this.sci_ArraySeq$ofShort__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofShort.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofShort__f_unsafeArray;
  return this$1.arrayHash$mSc$sp__AS__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofShort.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofShort)) {
    var x2 = $as_sci_ArraySeq$ofShort(that);
    var a = this.sci_ArraySeq$ofShort__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofShort__f_unsafeArray;
    return $m_ju_Arrays$().equals__AS__AS__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofShort.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.sci_ArraySeq$ofShort__f_unsafeArray);
});
$c_sci_ArraySeq$ofShort.prototype.apply__O__O = (function(v1) {
  return this.apply__I__S($uI(v1));
});
$c_sci_ArraySeq$ofShort.prototype.apply__I__O = (function(i) {
  return this.apply__I__S(i);
});
$c_sci_ArraySeq$ofShort.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofShort__f_unsafeArray;
});
function $as_sci_ArraySeq$ofShort(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofShort) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofShort"));
}
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofShort)));
}
function $asArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofShort(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofShort;", depth));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().initClass($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  sci_ArraySeq$ofShort: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.sci_ArraySeq$ofUnit__f_unsafeArray = null;
  this.sci_ArraySeq$ofUnit__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofUnit.prototype.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $c_sci_ArraySeq$ofUnit.prototype;
$c_sci_ArraySeq$ofUnit.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofUnit__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofUnit.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofUnit__f_unsafeArray;
  return this$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofUnit.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofUnit)) {
    var x2 = $as_sci_ArraySeq$ofUnit(that);
    return ($n(this.sci_ArraySeq$ofUnit__f_unsafeArray).u.length === $n($n(x2).sci_ArraySeq$ofUnit__f_unsafeArray).u.length);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofUnit.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.sci_ArraySeq$ofUnit__f_unsafeArray);
});
$c_sci_ArraySeq$ofUnit.prototype.apply$mcVI$sp__I__V = (function(i) {
  $n(this.sci_ArraySeq$ofUnit__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofUnit.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  this.apply$mcVI$sp__I__V(i);
});
$c_sci_ArraySeq$ofUnit.prototype.apply__I__O = (function(i) {
  this.apply$mcVI$sp__I__V(i);
});
$c_sci_ArraySeq$ofUnit.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofUnit__f_unsafeArray;
});
function $as_sci_ArraySeq$ofUnit(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofUnit) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofUnit"));
}
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofUnit)));
}
function $asArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofUnit(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofUnit;", depth));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().initClass($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  sci_ArraySeq$ofUnit: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1);
    } else if ($n(xs).isEmpty__Z()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sci_List($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var aEmpty = $n(a).isEmpty__Z();
      var bEmpty = $n(b).isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sci_List($n(a).tail__O());
        var temp$b = $as_sci_List($n(b).tail__O());
        a = temp$a;
        b = temp$b;
      } else {
        return (aEmpty && bEmpty);
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq";
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$());
});
$c_sci_List.prototype.foreach__F1__V = (function(f) {
  var these = this;
  while ((!$n(these).isEmpty__Z())) {
    $n(f).apply__O__O($n(these).head__O());
    these = $as_sci_List($n(these).tail__O());
  }
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!$n(these).isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sci_List($n(these).tail__O());
  }
  return len;
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$c_sci_List.prototype.className__T = (function() {
  return "List";
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x2 = $as_sci_List(o);
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2);
  } else {
    return $f_sc_Seq__equals__O__Z(this, o);
  }
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"));
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)));
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.sci_Vector__f_prefix1 = null;
}
$c_sci_VectorImpl.prototype = new $h_sci_Vector();
$c_sci_VectorImpl.prototype.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $c_sci_VectorImpl.prototype;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.scm_ArraySeq$ofBoolean__f_array = null;
  this.scm_ArraySeq$ofBoolean__f_array = array;
}
$c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofBoolean.prototype.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $c_scm_ArraySeq$ofBoolean.prototype;
$c_scm_ArraySeq$ofBoolean.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofBoolean__f_array).u.length;
});
$c_scm_ArraySeq$ofBoolean.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofBoolean__f_array;
  return this$1.arrayHash$mZc$sp__AZ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofBoolean.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofBoolean)) {
    var x2 = $as_scm_ArraySeq$ofBoolean(that);
    var a = this.scm_ArraySeq$ofBoolean__f_array;
    var b = $n(x2).scm_ArraySeq$ofBoolean__f_array;
    return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofBoolean.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.scm_ArraySeq$ofBoolean__f_array);
});
$c_scm_ArraySeq$ofBoolean.prototype.apply$mcZI$sp__I__Z = (function(index) {
  return $n(this.scm_ArraySeq$ofBoolean__f_array).get(index);
});
$c_scm_ArraySeq$ofBoolean.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcZI$sp__I__Z(index);
});
$c_scm_ArraySeq$ofBoolean.prototype.apply__I__O = (function(i) {
  return this.apply$mcZI$sp__I__Z(i);
});
$c_scm_ArraySeq$ofBoolean.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofBoolean__f_array;
});
function $as_scm_ArraySeq$ofBoolean(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofBoolean) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofBoolean"));
}
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofBoolean)));
}
function $asArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofBoolean;", depth));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().initClass($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  scm_ArraySeq$ofBoolean: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.scm_ArraySeq$ofByte__f_array = null;
  this.scm_ArraySeq$ofByte__f_array = array;
}
$c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofByte.prototype.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $c_scm_ArraySeq$ofByte.prototype;
$c_scm_ArraySeq$ofByte.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofByte__f_array).u.length;
});
$c_scm_ArraySeq$ofByte.prototype.apply__I__B = (function(index) {
  return $n(this.scm_ArraySeq$ofByte__f_array).get(index);
});
$c_scm_ArraySeq$ofByte.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofByte__f_array;
  return this$1.arrayHash$mBc$sp__AB__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofByte.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofByte)) {
    var x2 = $as_scm_ArraySeq$ofByte(that);
    var a = this.scm_ArraySeq$ofByte__f_array;
    var b = $n(x2).scm_ArraySeq$ofByte__f_array;
    return $m_ju_Arrays$().equals__AB__AB__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofByte.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.scm_ArraySeq$ofByte__f_array);
});
$c_scm_ArraySeq$ofByte.prototype.apply__O__O = (function(v1) {
  return this.apply__I__B($uI(v1));
});
$c_scm_ArraySeq$ofByte.prototype.apply__I__O = (function(i) {
  return this.apply__I__B(i);
});
$c_scm_ArraySeq$ofByte.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofByte__f_array;
});
function $as_scm_ArraySeq$ofByte(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofByte) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofByte"));
}
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofByte)));
}
function $asArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofByte(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofByte;", depth));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().initClass($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  scm_ArraySeq$ofByte: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.scm_ArraySeq$ofChar__f_array = null;
  this.scm_ArraySeq$ofChar__f_array = array;
}
$c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofChar.prototype.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $c_scm_ArraySeq$ofChar.prototype;
$c_scm_ArraySeq$ofChar.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofChar__f_array).u.length;
});
$c_scm_ArraySeq$ofChar.prototype.apply__I__C = (function(index) {
  return $n(this.scm_ArraySeq$ofChar__f_array).get(index);
});
$c_scm_ArraySeq$ofChar.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofChar__f_array;
  return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofChar.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofChar)) {
    var x2 = $as_scm_ArraySeq$ofChar(that);
    var a = this.scm_ArraySeq$ofChar__f_array;
    var b = $n(x2).scm_ArraySeq$ofChar__f_array;
    return $m_ju_Arrays$().equals__AC__AC__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofChar.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.scm_ArraySeq$ofChar__f_array);
});
$c_scm_ArraySeq$ofChar.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  var jsb = $n(sb).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  }
  var len = $n(this.scm_ArraySeq$ofChar__f_array).u.length;
  if ((len !== 0)) {
    var this$3 = $n(sep);
    if ((this$3 === "")) {
      $n(jsb).append__AC__jl_StringBuilder(this.scm_ArraySeq$ofChar__f_array);
    } else {
      $n(jsb);
      $n(jsb).length__I();
      $n(end);
      $n(sep);
      var this$6 = $n(jsb);
      var c = $n(this.scm_ArraySeq$ofChar__f_array).get(0);
      var str = ("" + $cToS(c));
      this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
      var i = 1;
      while ((i < len)) {
        var this$8 = $n(jsb);
        this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$9 = $n(jsb);
        var c$1 = $n(this.scm_ArraySeq$ofChar__f_array).get(i);
        var str$1 = ("" + $cToS(c$1));
        this$9.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$9.jl_StringBuilder__f_java$lang$StringBuilder$$content + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  var this$11 = $n(end);
  if ((this$11.length !== 0)) {
    var this$12 = $n(jsb);
    this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  }
  return sb;
});
$c_scm_ArraySeq$ofChar.prototype.apply__O__O = (function(v1) {
  return $bC(this.apply__I__C($uI(v1)));
});
$c_scm_ArraySeq$ofChar.prototype.apply__I__O = (function(i) {
  return $bC(this.apply__I__C(i));
});
$c_scm_ArraySeq$ofChar.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofChar__f_array;
});
function $as_scm_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofChar"));
}
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofChar)));
}
function $asArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofChar;", depth));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().initClass($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  scm_ArraySeq$ofChar: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.scm_ArraySeq$ofDouble__f_array = null;
  this.scm_ArraySeq$ofDouble__f_array = array;
}
$c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofDouble.prototype.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $c_scm_ArraySeq$ofDouble.prototype;
$c_scm_ArraySeq$ofDouble.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofDouble__f_array).u.length;
});
$c_scm_ArraySeq$ofDouble.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofDouble__f_array;
  return this$1.arrayHash$mDc$sp__AD__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofDouble.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
    var x2 = $as_scm_ArraySeq$ofDouble(that);
    var a = this.scm_ArraySeq$ofDouble__f_array;
    var b = $n(x2).scm_ArraySeq$ofDouble__f_array;
    return $m_ju_Arrays$().equals__AD__AD__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofDouble.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.scm_ArraySeq$ofDouble__f_array);
});
$c_scm_ArraySeq$ofDouble.prototype.apply$mcDI$sp__I__D = (function(index) {
  return $n(this.scm_ArraySeq$ofDouble__f_array).get(index);
});
$c_scm_ArraySeq$ofDouble.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcDI$sp__I__D(index);
});
$c_scm_ArraySeq$ofDouble.prototype.apply__I__O = (function(i) {
  return this.apply$mcDI$sp__I__D(i);
});
$c_scm_ArraySeq$ofDouble.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofDouble__f_array;
});
function $as_scm_ArraySeq$ofDouble(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofDouble) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofDouble"));
}
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofDouble)));
}
function $asArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofDouble(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofDouble;", depth));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().initClass($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  scm_ArraySeq$ofDouble: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.scm_ArraySeq$ofFloat__f_array = null;
  this.scm_ArraySeq$ofFloat__f_array = array;
}
$c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofFloat.prototype.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $c_scm_ArraySeq$ofFloat.prototype;
$c_scm_ArraySeq$ofFloat.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofFloat__f_array).u.length;
});
$c_scm_ArraySeq$ofFloat.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofFloat__f_array;
  return this$1.arrayHash$mFc$sp__AF__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofFloat.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
    var x2 = $as_scm_ArraySeq$ofFloat(that);
    var a = this.scm_ArraySeq$ofFloat__f_array;
    var b = $n(x2).scm_ArraySeq$ofFloat__f_array;
    return $m_ju_Arrays$().equals__AF__AF__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofFloat.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.scm_ArraySeq$ofFloat__f_array);
});
$c_scm_ArraySeq$ofFloat.prototype.apply$mcFI$sp__I__F = (function(index) {
  return $n(this.scm_ArraySeq$ofFloat__f_array).get(index);
});
$c_scm_ArraySeq$ofFloat.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcFI$sp__I__F(index);
});
$c_scm_ArraySeq$ofFloat.prototype.apply__I__O = (function(i) {
  return this.apply$mcFI$sp__I__F(i);
});
$c_scm_ArraySeq$ofFloat.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofFloat__f_array;
});
function $as_scm_ArraySeq$ofFloat(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofFloat) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofFloat"));
}
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofFloat)));
}
function $asArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofFloat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofFloat;", depth));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().initClass($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  scm_ArraySeq$ofFloat: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.scm_ArraySeq$ofInt__f_array = null;
  this.scm_ArraySeq$ofInt__f_array = array;
}
$c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofInt.prototype.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $c_scm_ArraySeq$ofInt.prototype;
$c_scm_ArraySeq$ofInt.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofInt__f_array).u.length;
});
$c_scm_ArraySeq$ofInt.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofInt__f_array;
  return this$1.arrayHash$mIc$sp__AI__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofInt.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofInt)) {
    var x2 = $as_scm_ArraySeq$ofInt(that);
    var a = this.scm_ArraySeq$ofInt__f_array;
    var b = $n(x2).scm_ArraySeq$ofInt__f_array;
    return $m_ju_Arrays$().equals__AI__AI__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofInt.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.scm_ArraySeq$ofInt__f_array);
});
$c_scm_ArraySeq$ofInt.prototype.apply$mcII$sp__I__I = (function(index) {
  return $n(this.scm_ArraySeq$ofInt__f_array).get(index);
});
$c_scm_ArraySeq$ofInt.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcII$sp__I__I(index);
});
$c_scm_ArraySeq$ofInt.prototype.apply__I__O = (function(i) {
  return this.apply$mcII$sp__I__I(i);
});
$c_scm_ArraySeq$ofInt.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofInt__f_array;
});
function $as_scm_ArraySeq$ofInt(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofInt"));
}
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofInt)));
}
function $asArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofInt;", depth));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().initClass($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  scm_ArraySeq$ofInt: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.scm_ArraySeq$ofLong__f_array = null;
  this.scm_ArraySeq$ofLong__f_array = array;
}
$c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofLong.prototype.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $c_scm_ArraySeq$ofLong.prototype;
$c_scm_ArraySeq$ofLong.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofLong__f_array).u.length;
});
$c_scm_ArraySeq$ofLong.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofLong__f_array;
  return this$1.arrayHash$mJc$sp__AJ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofLong)) {
    var x2 = $as_scm_ArraySeq$ofLong(that);
    var a = this.scm_ArraySeq$ofLong__f_array;
    var b = $n(x2).scm_ArraySeq$ofLong__f_array;
    return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofLong.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.scm_ArraySeq$ofLong__f_array);
});
$c_scm_ArraySeq$ofLong.prototype.apply$mcJI$sp__I__J = (function(index) {
  return $n(this.scm_ArraySeq$ofLong__f_array).get(index);
});
$c_scm_ArraySeq$ofLong.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcJI$sp__I__J(index);
});
$c_scm_ArraySeq$ofLong.prototype.apply__I__O = (function(i) {
  return this.apply$mcJI$sp__I__J(i);
});
$c_scm_ArraySeq$ofLong.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofLong__f_array;
});
function $as_scm_ArraySeq$ofLong(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofLong) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofLong"));
}
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofLong)));
}
function $asArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofLong;", depth));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().initClass($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  scm_ArraySeq$ofLong: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.scm_ArraySeq$ofRef__f_array = null;
  this.scm_ArraySeq$ofRef__f_array = array;
}
$c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofRef.prototype.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $c_scm_ArraySeq$ofRef.prototype;
$c_scm_ArraySeq$ofRef.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofRef__f_array).u.length;
});
$c_scm_ArraySeq$ofRef.prototype.apply__I__O = (function(index) {
  return $n(this.scm_ArraySeq$ofRef__f_array).get(index);
});
$c_scm_ArraySeq$ofRef.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofRef__f_array;
  return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofRef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofRef)) {
    var x2 = $as_scm_ArraySeq$ofRef(that);
    return $m_s_Array$().equals__AO__AO__Z(this.scm_ArraySeq$ofRef__f_array, $n(x2).scm_ArraySeq$ofRef__f_array);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.scm_ArraySeq$ofRef__f_array);
});
$c_scm_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1));
});
$c_scm_ArraySeq$ofRef.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofRef__f_array;
});
function $as_scm_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofRef"));
}
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofRef)));
}
function $asArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofRef;", depth));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().initClass($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  scm_ArraySeq$ofRef: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.scm_ArraySeq$ofShort__f_array = null;
  this.scm_ArraySeq$ofShort__f_array = array;
}
$c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofShort.prototype.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $c_scm_ArraySeq$ofShort.prototype;
$c_scm_ArraySeq$ofShort.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofShort__f_array).u.length;
});
$c_scm_ArraySeq$ofShort.prototype.apply__I__S = (function(index) {
  return $n(this.scm_ArraySeq$ofShort__f_array).get(index);
});
$c_scm_ArraySeq$ofShort.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofShort__f_array;
  return this$1.arrayHash$mSc$sp__AS__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofShort.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofShort)) {
    var x2 = $as_scm_ArraySeq$ofShort(that);
    var a = this.scm_ArraySeq$ofShort__f_array;
    var b = $n(x2).scm_ArraySeq$ofShort__f_array;
    return $m_ju_Arrays$().equals__AS__AS__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofShort.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.scm_ArraySeq$ofShort__f_array);
});
$c_scm_ArraySeq$ofShort.prototype.apply__O__O = (function(v1) {
  return this.apply__I__S($uI(v1));
});
$c_scm_ArraySeq$ofShort.prototype.apply__I__O = (function(i) {
  return this.apply__I__S(i);
});
$c_scm_ArraySeq$ofShort.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofShort__f_array;
});
function $as_scm_ArraySeq$ofShort(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofShort) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofShort"));
}
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofShort)));
}
function $asArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofShort(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofShort;", depth));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().initClass($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  scm_ArraySeq$ofShort: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.scm_ArraySeq$ofUnit__f_array = null;
  this.scm_ArraySeq$ofUnit__f_array = array;
}
$c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofUnit.prototype.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $c_scm_ArraySeq$ofUnit.prototype;
$c_scm_ArraySeq$ofUnit.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofUnit__f_array).u.length;
});
$c_scm_ArraySeq$ofUnit.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofUnit__f_array;
  return this$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofUnit.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofUnit)) {
    var x2 = $as_scm_ArraySeq$ofUnit(that);
    return ($n(this.scm_ArraySeq$ofUnit__f_array).u.length === $n($n(x2).scm_ArraySeq$ofUnit__f_array).u.length);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofUnit.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.scm_ArraySeq$ofUnit__f_array);
});
$c_scm_ArraySeq$ofUnit.prototype.apply$mcVI$sp__I__V = (function(index) {
  $n(this.scm_ArraySeq$ofUnit__f_array).get(index);
});
$c_scm_ArraySeq$ofUnit.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  this.apply$mcVI$sp__I__V(index);
});
$c_scm_ArraySeq$ofUnit.prototype.apply__I__O = (function(i) {
  this.apply$mcVI$sp__I__V(i);
});
$c_scm_ArraySeq$ofUnit.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofUnit__f_array;
});
function $as_scm_ArraySeq$ofUnit(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofUnit) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofUnit"));
}
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofUnit)));
}
function $asArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofUnit(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofUnit;", depth));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().initClass($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  scm_ArraySeq$ofUnit: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.sci_BigVector__f_suffix1 = suffix1;
  $thiz.sci_BigVector__f_length0 = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
}
$c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$c_sci_BigVector.prototype.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $c_sci_BigVector.prototype;
function $as_sci_BigVector(obj) {
  return (((obj instanceof $c_sci_BigVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BigVector"));
}
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BigVector)));
}
function $asArrayOf_sci_BigVector(obj, depth) {
  return (($isArrayOf_sci_BigVector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BigVector;", depth));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.sci_Vector__f_prefix1 = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$c_sci_Vector1.prototype.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $c_sci_Vector1.prototype;
$c_sci_Vector1.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    return $n(this.sci_Vector__f_prefix1).get(index);
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector1.prototype.vectorSliceCount__I = (function() {
  return 1;
});
$c_sci_Vector1.prototype.vectorSlice__I__AO = (function(idx) {
  return this.sci_Vector__f_prefix1;
});
$c_sci_Vector1.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    return $n(this.sci_Vector__f_prefix1).get(index);
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector1(obj) {
  return (((obj instanceof $c_sci_Vector1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector1"));
}
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector1)));
}
function $asArrayOf_sci_Vector1(obj, depth) {
  return (($isArrayOf_sci_Vector1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector1;", depth));
}
var $d_sci_Vector1 = new $TypeData().initClass($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  sci_Vector1: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_next = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_next = next;
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head;
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::";
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2;
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break;
    }
    case 1: {
      return this.sci_$colon$colon__f_next;
      break;
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1);
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_next;
});
var $d_sci_$colon$colon = new $TypeData().initClass($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
}));
/** @constructor */
function $c_sci_Nil$() {
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil";
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1);
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E();
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E();
});
var $d_sci_Nil$ = new $TypeData().initClass($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
/** @constructor */
function $c_sci_Vector0$() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, 0);
}
$c_sci_Vector0$.prototype = new $h_sci_BigVector();
$c_sci_Vector0$.prototype.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $c_sci_Vector0$.prototype;
$c_sci_Vector0$.prototype.apply__I__E = (function(index) {
  throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
});
$c_sci_Vector0$.prototype.vectorSliceCount__I = (function() {
  return 0;
});
$c_sci_Vector0$.prototype.vectorSlice__I__AO = (function(idx) {
  return null;
});
$c_sci_Vector0$.prototype.equals__O__Z = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$c_sci_Vector0$.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$c_sci_Vector0$.prototype.apply__O__O = (function(v1) {
  this.apply__I__E($uI(v1));
});
$c_sci_Vector0$.prototype.apply__I__O = (function(i) {
  this.apply__I__E(i);
});
var $d_sci_Vector0$ = new $TypeData().initClass($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  sci_Vector0$: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$();
  }
  return $n_sci_Vector0$;
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector2__f_len1 = 0;
  this.sci_Vector2__f_data2 = null;
  this.sci_Vector2__f_len1 = len1;
  this.sci_Vector2__f_data2 = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector2.prototype = new $h_sci_BigVector();
$c_sci_Vector2.prototype.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $c_sci_Vector2.prototype;
$c_sci_Vector2.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector2.prototype.vectorSliceCount__I = (function() {
  return 3;
});
$c_sci_Vector2.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector2__f_data2;
      break;
    }
    case 2: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector2.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector2(obj) {
  return (((obj instanceof $c_sci_Vector2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector2"));
}
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector2)));
}
function $asArrayOf_sci_Vector2(obj, depth) {
  return (($isArrayOf_sci_Vector2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector2;", depth));
}
var $d_sci_Vector2 = new $TypeData().initClass($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  sci_Vector2: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector3__f_len1 = 0;
  this.sci_Vector3__f_prefix2 = null;
  this.sci_Vector3__f_len12 = 0;
  this.sci_Vector3__f_data3 = null;
  this.sci_Vector3__f_suffix2 = null;
  this.sci_Vector3__f_len1 = len1;
  this.sci_Vector3__f_prefix2 = prefix2;
  this.sci_Vector3__f_len12 = len12;
  this.sci_Vector3__f_data3 = data3;
  this.sci_Vector3__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector3.prototype = new $h_sci_BigVector();
$c_sci_Vector3.prototype.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $c_sci_Vector3.prototype;
$c_sci_Vector3.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)));
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector3.prototype.vectorSliceCount__I = (function() {
  return 5;
});
$c_sci_Vector3.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector3__f_prefix2;
      break;
    }
    case 2: {
      return this.sci_Vector3__f_data3;
      break;
    }
    case 3: {
      return this.sci_Vector3__f_suffix2;
      break;
    }
    case 4: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector3.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)));
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector3(obj) {
  return (((obj instanceof $c_sci_Vector3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector3"));
}
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector3)));
}
function $asArrayOf_sci_Vector3(obj, depth) {
  return (($isArrayOf_sci_Vector3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector3;", depth));
}
var $d_sci_Vector3 = new $TypeData().initClass($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  sci_Vector3: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector4__f_len1 = 0;
  this.sci_Vector4__f_prefix2 = null;
  this.sci_Vector4__f_len12 = 0;
  this.sci_Vector4__f_prefix3 = null;
  this.sci_Vector4__f_len123 = 0;
  this.sci_Vector4__f_data4 = null;
  this.sci_Vector4__f_suffix3 = null;
  this.sci_Vector4__f_suffix2 = null;
  this.sci_Vector4__f_len1 = len1;
  this.sci_Vector4__f_prefix2 = prefix2;
  this.sci_Vector4__f_len12 = len12;
  this.sci_Vector4__f_prefix3 = prefix3;
  this.sci_Vector4__f_len123 = len123;
  this.sci_Vector4__f_data4 = data4;
  this.sci_Vector4__f_suffix3 = suffix3;
  this.sci_Vector4__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector4.prototype = new $h_sci_BigVector();
$c_sci_Vector4.prototype.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $c_sci_Vector4.prototype;
$c_sci_Vector4.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))));
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector4.prototype.vectorSliceCount__I = (function() {
  return 7;
});
$c_sci_Vector4.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector4__f_prefix2;
      break;
    }
    case 2: {
      return this.sci_Vector4__f_prefix3;
      break;
    }
    case 3: {
      return this.sci_Vector4__f_data4;
      break;
    }
    case 4: {
      return this.sci_Vector4__f_suffix3;
      break;
    }
    case 5: {
      return this.sci_Vector4__f_suffix2;
      break;
    }
    case 6: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector4.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))));
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector4(obj) {
  return (((obj instanceof $c_sci_Vector4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector4"));
}
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector4)));
}
function $asArrayOf_sci_Vector4(obj, depth) {
  return (($isArrayOf_sci_Vector4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector4;", depth));
}
var $d_sci_Vector4 = new $TypeData().initClass($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  sci_Vector4: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector5__f_len1 = 0;
  this.sci_Vector5__f_prefix2 = null;
  this.sci_Vector5__f_len12 = 0;
  this.sci_Vector5__f_prefix3 = null;
  this.sci_Vector5__f_len123 = 0;
  this.sci_Vector5__f_prefix4 = null;
  this.sci_Vector5__f_len1234 = 0;
  this.sci_Vector5__f_data5 = null;
  this.sci_Vector5__f_suffix4 = null;
  this.sci_Vector5__f_suffix3 = null;
  this.sci_Vector5__f_suffix2 = null;
  this.sci_Vector5__f_len1 = len1;
  this.sci_Vector5__f_prefix2 = prefix2;
  this.sci_Vector5__f_len12 = len12;
  this.sci_Vector5__f_prefix3 = prefix3;
  this.sci_Vector5__f_len123 = len123;
  this.sci_Vector5__f_prefix4 = prefix4;
  this.sci_Vector5__f_len1234 = len1234;
  this.sci_Vector5__f_data5 = data5;
  this.sci_Vector5__f_suffix4 = suffix4;
  this.sci_Vector5__f_suffix3 = suffix3;
  this.sci_Vector5__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector5.prototype = new $h_sci_BigVector();
$c_sci_Vector5.prototype.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $c_sci_Vector5.prototype;
$c_sci_Vector5.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))));
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector5.prototype.vectorSliceCount__I = (function() {
  return 9;
});
$c_sci_Vector5.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector5__f_prefix2;
      break;
    }
    case 2: {
      return this.sci_Vector5__f_prefix3;
      break;
    }
    case 3: {
      return this.sci_Vector5__f_prefix4;
      break;
    }
    case 4: {
      return this.sci_Vector5__f_data5;
      break;
    }
    case 5: {
      return this.sci_Vector5__f_suffix4;
      break;
    }
    case 6: {
      return this.sci_Vector5__f_suffix3;
      break;
    }
    case 7: {
      return this.sci_Vector5__f_suffix2;
      break;
    }
    case 8: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector5.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))));
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector5(obj) {
  return (((obj instanceof $c_sci_Vector5) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector5"));
}
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector5)));
}
function $asArrayOf_sci_Vector5(obj, depth) {
  return (($isArrayOf_sci_Vector5(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector5;", depth));
}
var $d_sci_Vector5 = new $TypeData().initClass($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  sci_Vector5: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector6__f_len1 = 0;
  this.sci_Vector6__f_prefix2 = null;
  this.sci_Vector6__f_len12 = 0;
  this.sci_Vector6__f_prefix3 = null;
  this.sci_Vector6__f_len123 = 0;
  this.sci_Vector6__f_prefix4 = null;
  this.sci_Vector6__f_len1234 = 0;
  this.sci_Vector6__f_prefix5 = null;
  this.sci_Vector6__f_len12345 = 0;
  this.sci_Vector6__f_data6 = null;
  this.sci_Vector6__f_suffix5 = null;
  this.sci_Vector6__f_suffix4 = null;
  this.sci_Vector6__f_suffix3 = null;
  this.sci_Vector6__f_suffix2 = null;
  this.sci_Vector6__f_len1 = len1;
  this.sci_Vector6__f_prefix2 = prefix2;
  this.sci_Vector6__f_len12 = len12;
  this.sci_Vector6__f_prefix3 = prefix3;
  this.sci_Vector6__f_len123 = len123;
  this.sci_Vector6__f_prefix4 = prefix4;
  this.sci_Vector6__f_len1234 = len1234;
  this.sci_Vector6__f_prefix5 = prefix5;
  this.sci_Vector6__f_len12345 = len12345;
  this.sci_Vector6__f_data6 = data6;
  this.sci_Vector6__f_suffix5 = suffix5;
  this.sci_Vector6__f_suffix4 = suffix4;
  this.sci_Vector6__f_suffix3 = suffix3;
  this.sci_Vector6__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector6.prototype = new $h_sci_BigVector();
$c_sci_Vector6.prototype.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $c_sci_Vector6.prototype;
$c_sci_Vector6.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))));
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4));
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector6.prototype.vectorSliceCount__I = (function() {
  return 11;
});
$c_sci_Vector6.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector6__f_prefix2;
      break;
    }
    case 2: {
      return this.sci_Vector6__f_prefix3;
      break;
    }
    case 3: {
      return this.sci_Vector6__f_prefix4;
      break;
    }
    case 4: {
      return this.sci_Vector6__f_prefix5;
      break;
    }
    case 5: {
      return this.sci_Vector6__f_data6;
      break;
    }
    case 6: {
      return this.sci_Vector6__f_suffix5;
      break;
    }
    case 7: {
      return this.sci_Vector6__f_suffix4;
      break;
    }
    case 8: {
      return this.sci_Vector6__f_suffix3;
      break;
    }
    case 9: {
      return this.sci_Vector6__f_suffix2;
      break;
    }
    case 10: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector6.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))));
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4));
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector6(obj) {
  return (((obj instanceof $c_sci_Vector6) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector6"));
}
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector6)));
}
function $asArrayOf_sci_Vector6(obj, depth) {
  return (($isArrayOf_sci_Vector6(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector6;", depth));
}
var $d_sci_Vector6 = new $TypeData().initClass($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  sci_Vector6: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null;
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1);
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.scm_StringBuilder__f_underlying).length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_StringBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.addOne__C__scm_StringBuilder = (function(x) {
  var this$1 = $n(this.scm_StringBuilder__f_underlying);
  var str = ("" + $cToS(x));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
  return this;
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return ($n(this.scm_StringBuilder__f_underlying).length__I() === 0);
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_scm_StringBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__C__scm_StringBuilder($uC(elem));
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
var $d_scm_StringBuilder = new $TypeData().initClass($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null;
}
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1);
});
$c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  var x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index];
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
});
$c_sjs_js_WrappedArray.prototype.knownSize__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
});
$c_sjs_js_WrappedArray.prototype.className__T = (function() {
  return "WrappedArray";
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this;
});
$c_sjs_js_WrappedArray.prototype.addOne__O__scm_Growable = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this;
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index];
});
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"));
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)));
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth));
}
var $d_sjs_js_WrappedArray = new $TypeData().initClass($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
$s_Lwww_main__main__AT__V(new ($d_T.getArrayOf().constr)([]));
//# sourceMappingURL=main.js.map
