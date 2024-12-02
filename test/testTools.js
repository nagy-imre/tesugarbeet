/*
* File: testTools.js
* Author: Nagy Imre
* Copyright: 2024, Nagy Imre
* Group: I/2/E
* Date: 2024-12-02
* Github: https://github.com/nagy-imre/tesugarbeet
* Licenc: 
*/

import assert from "assert";
import { calcTotal } from "../src/tools.js";

describe("A calcTotal() függvény tesztje", () => {
  it("A 25, 25, 50 bemenetre 100", () => {
    let actual = calcTotal(25, 25, 50);
    let expected = 100;
    assert.equal(actual, expected);
  });

  it("A 123, 149, 89 bemenetre 361", () => {
    let actual = calcTotal(123, 149, 89);
    let expected = 361;
    assert.equal(actual, expected);
  });

  it("A 100, 250, 110 bemenetre 460", () => {
    let actual = calcTotal(100, 250, 110);
    let expected = 460;
    assert.equal(actual, expected);
  });
});
