// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {
    if (performance.getEntriesByType("navigation")[0].type != "back_forward") {
        // Scroll to the top of the page
        document.getElementById('hero').scrollIntoView({ behavior: "smooth" });
    }
});

function showSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
}

const modules = document.querySelectorAll('.module');
modules.forEach(module => {
    module.addEventListener('click', () => {
        module.classList.toggle('show');
    });
});

let activeIndex = 0;
const groups = document.getElementsByClassName("module");
const handleLeftButton = () => {
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    });
}

const handleRightButton = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    });
}