export function navbar_dropdown() {
    const navbar_links = document.querySelectorAll(".navbar_link")
    navbar_links.forEach(link => {
        console.log(link);
        link.firstChild.addEventListener("mouseover", (e) => {
            link.lastChild.classList.add('show')
        })
        link.firstChild.addEventListener("mouseout", (e) => {
            console.log("mouseout");
            setTimeout(() => {
                if (link.lastChild.matches(':hover')) {
                    return
                }
                link.lastChild.classList.remove('show')
            }, 150);
        })
        link.lastChild.addEventListener("mouseout", () => {
            setTimeout(() => {
                if (link.lastChild.matches(':hover')) {
                    return
                }
                link.lastChild.classList.remove('show')
            }, 150);
        })
    })
}