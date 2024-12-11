import { COOKIE_KEY } from './constans'

// localStorage.setItem(COOKIE_KEY, 'false')

export class CookieContent {
	constructor(selectContainer) {
		this.cookieContainer = document.querySelector(selectContainer)
		if (localStorage.getItem(COOKIE_KEY) !== 'true' && this.cookieContainer) {
			this.btn = this.cookieContainer.querySelector('.cookie-content__button')
			this.btn?.addEventListener('click', this.onAccept.bind(this))
		} else {
			this.cookieContainer.classList.add('hide')
		}
	}

	onAccept() {
		localStorage.setItem(COOKIE_KEY, 'true')
		this.cookieContainer.classList.add('hide')
		this.btn?.removeEventListener('click', this.onAccept.bind(this))
	}
}
