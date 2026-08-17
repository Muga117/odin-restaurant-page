export function addAboutContent() {
    const contentDiv = document.querySelector("div#content");
    contentDiv.innerHTML = "";
    const aboutDiv = document.createElement("div");
    aboutDiv.innerHTML = `<h1>Contact Us</h1>
        <p>777-777-777</p>
        <p>nekoyaeatery@gmail.com</p>
        <p>Tokyo</p>`
    return contentDiv.append(aboutDiv);
};