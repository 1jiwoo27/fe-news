import { initSubscriptionBadge } from './components/subBadge.js';
import { initPressGrid } from './components/pressGrid.js';
import { initProviderTabs } from './components/providerTabs.js';
import { initRollingNews } from './components/rollingNews.js';

const subscriptionBadge = initSubscriptionBadge();

initRollingNews();
initProviderTabs();
initPressGrid();
subscriptionBadge.update();