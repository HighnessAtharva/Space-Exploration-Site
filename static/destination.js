const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');
let tabIndex = 0;

function handleTabClick(event) {
    const clickedTab = event.target;
    const panelId = clickedTab.getAttribute("aria-controls");
    const imageId = clickedTab.getAttribute("data-image");
    const tabContainer = clickedTab.parentNode;
    const tabListContainer = tabContainer.parentNode;

    tabContainer.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
    clickedTab.setAttribute("aria-selected", true);

    hideAll(tabListContainer, '[role="tabpanel"]');
    show(tabListContainer, `#${panelId}`);
    hideAll(tabListContainer, "picture");
    show(tabListContainer, `#${imageId}`);
}

function hideAll(container, selector) {
    container.querySelectorAll(selector).forEach(element => {
        element.setAttribute("hidden", true);
    });
}

function show(container, selector) {
    container.querySelector(selector).removeAttribute("hidden");
}

tabList.addEventListener("keydown", function (event) {
    if (event.keyCode === 37 || event.keyCode === 39) {
        tabs[tabIndex].setAttribute("tabindex", -1);
        if (event.keyCode === 37) {
            if (--tabIndex < 0) {
                tabIndex = tabs.length - 1;
            }
        } else if (event.keyCode === 39) {
            if (++tabIndex >= tabs.length) {
                tabIndex = 0;
            }
        }
        tabs[tabIndex].setAttribute("tabindex", 0);
        tabs[tabIndex].focus();
    }
});

tabs.forEach(tab => {
    tab.addEventListener("click", handleTabClick);
});
