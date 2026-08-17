export function addHomeContent(){
    const contentDiv = document.querySelector("div#content");
    contentDiv.innerHTML = "";
    const homeDiv = document.createElement("div");
    homeDiv.id = "home";
    homeDiv.innerHTML = `<h1>Welcome to the Western Cuisine Nekoya</h1>
        <p>Western Restaurant Nekoya is a popular eatery located on a street corner in a Tokyo shopping district. Serving both traditional Japanese fare as well as Western dishes, this eating establishment is popular among Tokyo's residents.</p>`;
    return contentDiv.append(homeDiv);
};
