$('#searchButton').on('click', (e) => {
	e.preventDefault();
	cari();
});
function cari() {
	const title = $('#searchInput').val();

	$.getJSON(
		`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`,
		(eat) => {
			const mealss = eat.meals;
			console.log(mealss);
			let makanan = document.getElementById('menuList');
			makanan.innerHTML = '';
			$.each(mealss, (i, data) => {
				$('#menuList').append(`
				<div class="col-md-4">
					<div class="card mb-4">
						<img class="card-img-top" src="${data.strMealThumb}" alt="${data.strMeal}">
						<div class="card-body">
							<h3 class="card-title">${data.strMeal}</h3> 
							<P>Category : ${data.strCategory}</p>
							<a href="${data.strYoutube}" class="btn btn-info btn-sm">play</a>
						</div>
					</div>
				</div>

				`);
			});

			$('#searchInput').val('');
		}
	);
}
