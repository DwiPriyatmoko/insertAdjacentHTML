/*
// 1. creating HTML element objects and appending

const ul = document.querySelector('.dc-overview');

// <li></li>
const newListItem = document.createElement('li');

// <li>I'm a new list item tag.</li>
newListItem.textContent = "I'm a new list item tag.";

// <li class="dc-code">I'm a new list item tag.</li>
newListItem.classList.add('dc-code');

ul.appendChild(newListItem);
*/

/*
// 2. using innerHTML
const ul = document.querySelector('.dc-overview');
const existingListItem = document.querySelectorAll('.dc-overview > li')[1];
const numVisits = 82;

//	<li>[innerHTML]</li>
ul.innerHTML += `
<li>
	<strong>You've visited ${numVisits} times!</strong>
</li>
`;
*/

// 3. using insertAdjacentHTML

const ul = document.querySelector('.dc-overview');
// <li>I'm new!</li>
ul.insertAdjacentHTML('beforeend', `<li>I'm new end!</li>`);

// <li>I'm after new!</li>
ul.insertAdjacentHTML('afterbegin', `<li>I'm new beginning!</li>`);

// <strong>I'm before new!</strong>
ul.insertAdjacentHTML('beforebegin', `<strong>I'm before new!</strong>`);

// input a string element
ul.insertAdjacentText('beforebegin', ' <strong>This is string text</strong>');
