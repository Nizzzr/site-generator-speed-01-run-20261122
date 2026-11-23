// makefun-site 1.0.0, the house baseline, as reference.
// An entry exports run(input) returning makefun-site 1.0.0's answer byte-for-byte.
import * as lib from "./vendor/makefun-site/index.js";

const fn = lib["build"] ?? (lib.default != null && typeof lib.default["build"] === 'function' ? lib.default["build"].bind(lib.default) : undefined);
if (typeof fn !== 'function') throw new Error("makefun-site 1.0.0 exports no function build from index.js");

export function run(input) {
  return fn(input);
}
