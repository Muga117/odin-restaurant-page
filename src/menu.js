export function addMenuContent() {
    const contentDiv = document.querySelector("div#content");
    contentDiv.innerHTML = "";
    const menuDiv = document.createElement("div");
    menuDiv.innerHTML = `<h1>Menu</h1>
        <ul>
            <li>
                <p>Edamame</p>
                <p>Steamed young soybeans finished with flaky sea salt.</p>
            </li>
            <li>
                <p>Gyoza</p>
                <p>Pan-seared pork dumplings with spicy soy dip</p>
            </li>
            <li>
                <p>Crispy Rice Tuna</p>
                <p>Golden toasted rice cubes topped with spicy tuna and jalapeño.</p>
            </li>
        </ul>`
    return contentDiv.append(menuDiv);
};
