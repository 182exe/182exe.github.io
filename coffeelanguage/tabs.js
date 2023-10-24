function transitionTab(tab, active) {
    var tabContent = tab.querySelector(".tab-content");
    if (!tabContent) {
        return;
    }
    if (active) {
        tabContent.style.height = `0`;
    } else {
        tabContent.style.height = `${tabContent.scrollHeight}px`;
    }
}

function makeTabsInteractive() {
    const tabHeaders = document.querySelectorAll('.header');
    let openTab = null;

    tabHeaders.forEach(function (tabHeader) {
        if ('ontouchstart' in document.documentElement) {
            tabHeader.parentNode.addEventListener("click", function (event) {
                let selectedTab;
                if ((event.target.nodeName === "H2" && event.target.classList.value.includes("header")) || event.target.classList.value.includes("tab-content")) {
                    selectedTab = event.target.parentNode;
                } else if (event.target.nodeName === "DIV" && event.target.classList.value.includes("tab")) {
                    selectedTab = event.target;
                } else if (event.target.parentNode.classList.value.includes("tab-content")) {
                    selectedTab = event.target.parentNode.parentNode;
                } else {
                    return;
                }
                if (openTab && selectedTab !== openTab) {
                    transitionTab(openTab, true);
                    openTab.classList.remove("active");
                }
                
                openTab = selectedTab;
                transitionTab(selectedTab, false);
                selectedTab.classList.add("active");
            });
        } else {
            tabHeader.parentNode.addEventListener("mouseover", function (event) {
                let selectedTab;
                if ((event.target.nodeName === "H2" && event.target.classList.value.includes("header")) || event.target.classList.value.includes("tab-content")) {
                    selectedTab = event.target.parentNode;
                } else if (event.target.nodeName === "DIV" && event.target.classList.value.includes("tab")) {
                    selectedTab = event.target;
                } else if (event.target.parentNode.classList.value.includes("tab-content")) {
                    selectedTab = event.target.parentNode.parentNode;
                } else {
                    return;
                }
                if (openTab && selectedTab !== openTab) {
                    transitionTab(openTab, true);
                    openTab.classList.remove("active");
                }

                openTab = selectedTab;
                transitionTab(selectedTab, false);
                selectedTab.classList.add("active");
            });

            tabHeader.parentNode.addEventListener("mouseout", function (event) {
                let selectedTab;
                if ((event.target.nodeName === "H2" && event.target.classList.value.includes("header")) || event.target.classList.value.includes("tab-content")) {
                    selectedTab = event.target.parentNode;
                } else if (event.target.nodeName === "DIV" && event.target.classList.value.includes("tab")) {
                    selectedTab = event.target;
                } else if (event.target.parentNode.classList.value.includes("tab-content")) {
                    selectedTab = event.target.parentNode.parentNode;
                } else {
                    return;
                }
                if (selectedTab === openTab && ![...document.querySelectorAll(".tab")].some(tab => tab.matches(':hover'))){
                    transitionTab(openTab, true);
                    openTab.classList.remove("active");
                    openTab = null;
                }
            });
        }
    });
}

window.onload = function() {
    makeTabsInteractive();
};