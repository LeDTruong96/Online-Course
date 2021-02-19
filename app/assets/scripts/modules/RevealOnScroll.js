import throttle from 'lodash/throttle';

class RevealOnScroll {
	constructor(el) {
		this.itemsToReveal = el;
		this.throttle = throttle(() => this.callbackfunc(), 500);
		this.hideInitially();
		this.events();
	}

	events() {
		window.addEventListener('scroll', this.throttle);
	}

	callbackfunc() {
		this.itemsToReveal.forEach((el) => {
			if (window.scrollY + window.innerHeight > el.offsetTop) {
				el.classList.add('reveal-item--is-visible');
			}
		});
	}

	hideInitially() {
		this.itemsToReveal.forEach((el) => el.classList.add('reveal-item'));
	}
}

export default RevealOnScroll;
