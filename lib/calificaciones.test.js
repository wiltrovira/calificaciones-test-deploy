require("./calificaciones.js");
import {libroDeCalificaciones} from "./calificaciones";
import {expect} from "chai";
import mocha from "mocha";

var calificaciones = libroDeCalificaciones;
var describe = mocha.describe;
var it = mocha.it;

describe ("Prueba de calificaciones en lib", () => {
	it("Puede agregar nuevas calificaciones", () => {
		calificaciones.reset();
		calificaciones.agregarCalificacion(5);
		var num = calificaciones.numeroDeCalificaciones();
		expect(num).to.equal(1);
	});
	it("Puede calcular nota final A", () => {
		calificaciones.reset();
		calificaciones.agregarCalificacion(100);
		calificaciones.agregarCalificacion(90);
		var notaFinal = calificaciones.calcularNotaFinal();
		expect(notaFinal).to.equal("A");
	});
	it("Puede calcular nota final B", () => {
		calificaciones.reset();
		calificaciones.agregarCalificacion(90);
		calificaciones.agregarCalificacion(80);
		var notaFinal = calificaciones.calcularNotaFinal();
		expect(notaFinal).to.equal("B");
	});
	it("Puede calcular nota final C", () => {
		calificaciones.reset();
		calificaciones.agregarCalificacion(80);
		calificaciones.agregarCalificacion(70);
		var notaFinal = calificaciones.calcularNotaFinal();
		expect(notaFinal).to.equal("C");
	});
	it("Puede calcular nota final D", () => {
		calificaciones.reset();
		calificaciones.agregarCalificacion(70);
		calificaciones.agregarCalificacion(60);
		var notaFinal = calificaciones.calcularNotaFinal();
		expect(notaFinal).to.equal("D");
	});
	it("Puede calcular nota final E", () => {
		calificaciones.reset();
		calificaciones.agregarCalificacion(60);
		calificaciones.agregarCalificacion(50);
		var notaFinal = calificaciones.calcularNotaFinal();
		expect(notaFinal).to.equal("E");
	});
	it("Puede calcular promedio de notas", () => {
		calificaciones.reset();
		calificaciones.agregarCalificacion(100);
		calificaciones.agregarCalificacion(50);
		var promedio = calificaciones.calcularPromedio();
		expect(promedio).to.equal(75);
	});
});
