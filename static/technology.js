// Numbered buttons of technology page
const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');
let currentTabIndex = 0;

function activateTab(tab) {
  const panelId = tab.getAttribute("aria-controls");
  const imageId = tab.getAttribute("data-image");
  const tabParent = tab.parentNode;
  const tabListParent = tabParent.parentNode;

  // Deselect all tabs
  tabParent.querySelectorAll('[aria-selected="true"]').forEach(selectedTab => {
    selectedTab.setAttribute("aria-selected", "false");
  });

  // Select the current tab
  tab.setAttribute("aria-selected", "true");

  // Hide all tab panels and images
  hideElements(tabListParent, '[role="tabpanel"]');
  hideElements(tabListParent, "picture");

  // Show the current tab panel and image
  showElement(tabListParent, `#${panelId}`);
  showElement(tabListParent, `#${imageId}`);
}

function hideElements(parent, selector) {
  parent.querySelectorAll(selector).forEach(element => {
    element.setAttribute("hidden", "true");
  });
}

function showElement(parent, selector) {
  const element = parent.querySelector(selector);
  if (element) {
    element.removeAttribute("hidden");
  }
}

tabs.forEach(tab => {
  tab.addEventListener("click", function (e) {
    activateTab(e.currentTarget);
  });
});

// Initially, activate the first tab
activateTab(tabs[currentTabIndex]);
