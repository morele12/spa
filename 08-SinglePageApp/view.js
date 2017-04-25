var view = {
		display: function (data) {
			// create new data view to be displayed
			var elem, text, i;
			this.clear();
			var tabela, tytul, wiersz;
			tabela = document.createElement("table");
			tabela.setAttribute('border','1');
			wiersz = document.createElement("tr");
			tabela.appendChild(wiersz);
			
			tytul = document.createElement("th");
			text = document.createTextNode("Waluta");
			tytul.appendChild(text);
			tabela.appendChild(tytul);
			
			tytul = document.createElement("th");
			text = document.createTextNode("Kurs");
			tytul.appendChild(text);
			tabela.appendChild(tytul);
			
			tytul = document.createElement("th");
			text = document.createTextNode("Waluta słownie");
			tytul.appendChild(text);
			tabela.appendChild(tytul);
			
			for (i = 0; i < data.length; i++) {
				wiersz = document.createElement("tr");
				wiersz.setAttribute('id',i);
				
				elem = document.createElement("td");
				text = document.createTextNode(data[i].code);
				elem.appendChild(text);
				wiersz.appendChild(elem);
				
				elem = document.createElement("td");
				text = document.createTextNode(data[i].rate);
				elem.appendChild(text);
				wiersz.appendChild(elem);
				
				elem = document.createElement("td");
				text = document.createTextNode(data[i].name);
				elem.appendChild(text);
				wiersz.appendChild(elem);
				
				tabela.appendChild(wiersz);
			}
			document.getElementById('dataview').appendChild(tabela);
		},
		clear: function () {
			// remove old data
			var dataView = document.getElementById('dataview');
			while (dataView.firstChild) {
				dataView.removeChild(dataView.firstChild);
			}
		},
		addCurrency: function () {
			var currency = {
					code: document.getElementById('code').value,
					rate: document.getElementById('rate').value,
					name: document.getElementById('name').value
			}
			controller.storeCurrency(currency);
		}
	};
