import { isSubscribed, addSubscription } from '../store/subscription.js';
import { initSubscriptionBadge } from './subBadge.js';
import { createSubAlert } from './subAlert.js';

const BUTTON_TEXT = {
  subscribed: '× 해지하기',
  unsubscribed: '+ 구독하기',
};

const subscriptionBadge = initSubscriptionBadge();

export function createSubButton(pressId, pressGrid) {
  const button = document.createElement('button');
  button.className = 'sub-button';
  updateButton(button, pressId);

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    (isSubscribed(pressId)) ? createSubAlert(pressId, pressGrid) : addSubscription(pressId);
    updateButton(button, pressId);
    subscriptionBadge.update();
  });

  return button;
}

function updateButton(button, pressId) {
  button.textContent = isSubscribed(pressId) ? BUTTON_TEXT.subscribed : BUTTON_TEXT.unsubscribed;
}
