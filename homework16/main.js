class MyRequest {
	constructor() {
		this.xhr = new XMLHttpRequest();
	}

	getRequest(url, cb) {
		this.xhr.open('get', url, true);
		this.xhr.onload = function () {
			if (cb) cb(JSON.parse(this.response));
		}
		this.xhr.send();
	}

	postRequest(server, data) {
		this.xhr.open("post", server, true);
		this.xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		this.xhr.send(JSON.stringify(data));
	}
}

class List extends MyRequest {
	constructor() {
		super();
		this.page = 1;
		this.quantity = 0;
		this.cache = [];
        this.firstRequest();
        this.nextPage();
        this.prevPage();
    	}

	firstRequest() {
		const url = `https://swapi.co/api/people/?page=${this.page}`;

		this.getRequest(url, (data) => {
			this.quantity = Math.ceil(data.count / data.results.length);
			this.cache.push(data.results);
			this.renderPage(data.results);
			this.checkButtons();
		});
    }
    nextPage() {
		const nextBtn = document.querySelector('.next');

		nextBtn.addEventListener('click', () => {	

			this.page++;
			this.getPage();

		});
	}

	prevPage() {
		const prevBtn = document.querySelector('.prev');

		prevBtn.addEventListener('click', () => {

			this.page--;
			this.getPage();

		});
    }
    
	getPage() {
		if (this.cache[this.page - 1]) {
			this.getFromCache();
		} else {
			this.getFromAPI();
		}
	}

	getFromAPI() {
		const url = `https://swapi.co/api/people/?page=${this.page}`;

		this.getRequest(url, (data) => {
			this.cache.push(data.results);
			this.renderPage(data.results);
			this.checkButtons();
		});
	}

	getFromCache() {
		const current = this.page - 1;
		this.renderPage(this.cache[current]);
		this.checkButtons();
	}

	renderPage(people) {
		const container = document.querySelector('.heroes');
		container.innerHTML = '';		

		people.forEach(el => {
			createElement(container, 'li', el.name);
		});
	}

	checkButtons() {
		const prevBtn = document.querySelector('.prev');
		const nextBtn = document.querySelector('.next');
		nextBtn.disabled = this.page === this.quantity;
		prevBtn.disabled = this.page === 1;
	}
}

function createElement(parent, name, text) {
	const element = document.createElement(name);
	element.innerText = text;
	parent.appendChild(element);
	return element;
}

new List();