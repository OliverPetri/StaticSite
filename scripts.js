const defaultColor = '#eee';
const header = document.querySelector('#header');
const button = document.querySelector('button');

const setHeaderColor =(value) => {
	if (value === 'default') {
		header.style.background = defaultColor; 
	} else {
		header.style.background = value; 
	}
}