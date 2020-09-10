class Movie {
	constructor(title,studio,rating) {
		this.title=title;
		this.studio=studio;
		this.rating=rating;
	}
	getPG(array) {
		var result=array.filter((movie_name)=>(movie_name.rating=='PG'));
		return result;
	}
}
var movie_1=new Movie('EndGame','Marvel Studios','PG');
var movie_2=new Movie('Aladdin','Walt Disney','');
var movie_3=new Movie('InfinityWar','Marvel Studios','PG');

var input_array=[movie_1,movie_2,movie_3];

console.log(movie_1.getPG(input_array));