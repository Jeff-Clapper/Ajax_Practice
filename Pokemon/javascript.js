$(document).ready(function(){
    for(var ind = 1; ind <= 151; ind++){
        $(".all_pokemon").append(`<img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ind}.png">`)
    }
})