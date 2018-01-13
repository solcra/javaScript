const expect = require('chai').expect
const plazom = require('..').default
describe('#plazom', function (){
	it ('Si la palabra termina con ar, se le quitan esas letas', function(){
		const translation = plazom('Programar')
		expect(translation).to.equal("Program")
	})
	it ('Si la palabra inicia con Z, se le añade "pe" al final', function(){
		const translation = plazom('Zorro')
		expect(translation).to.equal("Zorrope")
	})
	it ('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un quión medio', function(){
		const translation = plazom('Abesedario')
		expect(translation).to.equal("Abese-dario")
	})
	it ('Por ultimo, si la palabra original es un palíndrome, ninguna regla anterios cuenta y se devuelve la misma palabra pero intercalando letra mayusculas y minusculas', function(){
		const translation = plazom('sometemos')
		expect(translation).to.equal("SoMeTeMoS")
	})
})