export function navbar_dropdown() {
    function mouseout_func(link) {
        setTimeout(() => {
            if (link.lastChild.matches(':hover')) {
                return
            }

            link.lastChild.classList.add('hide')
            link.lastChild.classList.remove('show')
            setTimeout(() => {
                link.lastChild.classList.remove('hide')
            }, 300);
        }, 150);
    }
    const navbar_links = document.querySelectorAll(".navbar_link")
    navbar_links.forEach(link => {
        link.firstChild.addEventListener("mouseover", (e) => {
            link.lastChild.classList.add('show')
        })

        link.firstChild.addEventListener("mouseout", (e) => {
            mouseout_func(link)
        })

        link.lastChild.addEventListener("mouseout", () => {
            mouseout_func(link)
        })
    })
}