class Modal {
	constructor() {
		this.btnElement = document.querySelectorAll('.btn');
		this.modalElement = document.querySelector('.modal');
		this.modalClose = document.querySelector('.modal__close');
		this.events();
	}

	events() {
		this.btnElement.forEach((el) => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				this.modalElement.classList.add('modal--show');
			});
		});

		this.modalClose.addEventListener('click', () => {
			this.modalElement.classList.remove('modal--show');
		});
	}
}

export default Modal;
