import { getSubscribedCount } from './state/subscription.js';
import { initPressGrid } from './ui/pressGrid.js';
import { initRollingNews } from './ui/rollingNews.js';

const badge = document.querySelector('.sub-badge');

function updateSubscriptionBadge() {
    const count = getSubscribedCount();
    badge.textContent = count;
}

initRollingNews();
initPressGrid({
    onSubscribeChange: updateSubscriptionBadge,
});

updateSubscriptionBadge();

