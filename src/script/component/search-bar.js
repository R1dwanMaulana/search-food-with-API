class SearchBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = `
        <!-- search -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-8">
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" id="searchInput" placeholder="Cari Menu">
                      <div class="input-group-append">
                        <button class="btn btn-outline-danger" id="searchButton" type="button">Submit</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
  `;
	}
}

customElements.define('search-bar', SearchBar);
