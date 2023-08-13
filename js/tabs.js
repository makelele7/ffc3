function showTab(tabIndex) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.classList.remove('active');
  });

  // Show the selected tab content
  const selectedTabContent = document.getElementById(`tab${tabIndex}-content`);
  selectedTabContent.classList.add('active');

  // Deactivate all tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  // Activate the selected tab
  const selectedTab = document.querySelector(`.tab:nth-child(${tabIndex})`);
  selectedTab.classList.add('active');
}