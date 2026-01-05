let currentView = 'grid';

const gridVeiw = document.querySelector('.grid-view');
const listVeiw = document.querySelector('.list-view');

function setView(view) {
    if (view === currentView) return;
    currentTab = view;
    updateView(view);
}

function updateView(currentView) {
    gridVeiw.classList.toggle('view-logo--active', currentView === 'grid');
    listVeiw.classList.toggle('view-logo--active', currentView === 'list');
}

export function initViewTabs() {
    gridVeiw.addEventListener('click', () => {
        setView('grid');
    });

    listVeiw.addEventListener('click', () => {
        setView('list');
    });
}