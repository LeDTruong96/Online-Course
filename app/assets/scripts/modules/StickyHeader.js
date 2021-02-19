import throttle from 'lodash/throttle';

class StickyHeader {
	constructor() {
		this.targetHeader = document.querySelector('.site-header');
		this.pageSection = document.querySelectorAll('.page-section');
		this.throttle = throttle(() => this.callFunc(), 100);
		this.events();
	}

	events() {
		window.addEventListener('scroll', this.throttle);
	}

	callFunc() {
		if (window.scrollY > 60) {
			this.targetHeader.classList.add('site-header--darker');
		} else {
			this.targetHeader.classList.remove('site-header--darker');
		}

		this.pageSection.forEach((el) => {
			let positionSection = window.scrollY + window.innerHeight * 0.5 - el.offsetTop;
			let matchingLink = el.getAttribute('data-section-link');

			if (positionSection - 150 > 0 && positionSection - 140 < el.offsetHeight) {
				document
					.querySelector(`#${matchingLink}`)
					.classList.add('primary-nav--active-section');
			} else {
				document
					.querySelector(`#${matchingLink}`)
					.classList.remove('primary-nav--active-section');
			}
		});
	}
}

export default StickyHeader;
