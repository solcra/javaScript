export default function plazom (str){
	let translation = str;

	//Si la palabra termina con "ar"
	if (str.toLowerCase().endsWith('ar')){
		translation = str.slice(0,-2)
	}
	// si la palabra inicia con z añade pe
	if(str.toLowerCase().startsWith('z')){
		translation += 'pe'
	}
	// si la palabra tine mas de 10 caratenes partir a la mitad
	const length = translation.length 
	if(length>=10){
		const firstHalf = translation.slice(0, Math.round(length /2))
		const secondHalf = translation.slice(Math.round(length /2))
		translation = `${firstHalf}-${secondHalf}`
	}
	// si la palabra es un palindrome
	const reverse = (str) => str.split('').reverse().join('') 

	function minMay(str){
		const legth = str.length
		let translation =''
		let capitalize = true
		for(let i =0; i < legth; i++){
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}
	if (str== reverse(str)){
		return minMay(str)
	}
	return translation
}