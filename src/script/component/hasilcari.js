class Hasil extends HTMLElement {
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = `
        <!-- menu list -->
        <div class="container">
            <div class="row" id="menuList">
            </div>
        </div>
  `;
	}
}

customElements.define('hasil-cari', Hasil);
