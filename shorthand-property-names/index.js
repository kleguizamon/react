const price = 2700;
const macbook = {
	price,

	set offer(offer) {
		this.price -= offer;
	},

	get finalPrice() {
		return this.price * 1.16;
	},
	//generator function
	*discount(offer) {
		let price = this.finalPrice;
		//entro en un loop infinito
		while (true) {
			//yield es el valor que devolvemos en una fn generadora
			yield (price -= offer);
		}
	},
};

window.price.textContent = macbook.price;
macbook.offer = 500;
window.offer.textContent = macbook.price;
// window.finalPrice.textContent = macbook.finalPrice;

const makeAnOffer = macbook.discount(15);
window.regatear.addEventListener('click', () => {
	//next para pasar al siguiente yield
	window.finalPrice.textContent = makeAnOffer.next().value;
});
