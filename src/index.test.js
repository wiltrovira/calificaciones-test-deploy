import {expect} from "chai";
import mocha from "mocha";

var describe = mocha.describe;
var it = mocha.it;

describe ("Prueba de index", () => {
	it("Debería pasar", () => {
		expect(true).to.equal(true);
	});
});
