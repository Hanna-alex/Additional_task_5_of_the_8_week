import { COOKIE_KEY } from './constans'
// localStorage.setItem(COOKIE_KEY, 'false')

export function onAccept(selectContainer, selectBtn) {
	const cookieContainer = document.querySelector(selectContainer)
	const btn = cookieContainer.querySelector(selectBtn)

	if (localStorage.getItem(COOKIE_KEY) === 'true') {
		cookieContainer.classList.add('hide')
	} else {
		btn.addEventListener('click', () => {
			localStorage.setItem(COOKIE_KEY, 'true')
			cookieContainer.classList.add('hide')
		})
	}
}
