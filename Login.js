function sign_in() {
    P1_name=document.getElementById("P1-name").value;
    P2_name=document.getElementById("P2-name").value;
    localStorage.setItem("P1_name",P1name);
    localStorage.setItem("P2_name",P2name);
    window.location("Game_page.html");
}