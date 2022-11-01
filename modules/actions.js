import Data from './data.js';

export default class Actions {
  static display= () => {
    const books = Data.getLocalStorage();
    books.forEach((book) => Actions.addBook(book));
  }

  static addBook= (book) => {
    if (book.title !== undefined) {
      const list = document.querySelector('#book-list');
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
      <li>"${book.title}"</li>
      <li>${'by'}</li>
      <li>${book.author}</li>
      <button class="remove">Remove</button>
      `;

      list.appendChild(newRow);
    }
  }

  static removeBook= (element) => {
    if (element.classList.contains('remove')) {
      element.parentElement.remove();
    }
  }

  static clearValues= () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
