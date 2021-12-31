function login() {
    player_1_name = document.getElementById("p1name").value;
    player_2_name = document.getElementById("p2name").value;

    localStorage.setItem ("player_1_name" , player_1_name);
    localStorage.setItem ("player_2_name" , player_2_name);
    
    window.location = "quiz_game.html";
}