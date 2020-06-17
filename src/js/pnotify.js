import '@pnotify/core/dist/BrightTheme.css';
import { alert, Stack } from '@pnotify/core';

const stackBottomModal = new Stack({
  dir1: 'up',
  dir2: 'right',
  firstpos1: 50,
  firstpos2: 50,
  push: 'top',
  modal: true,
  overlayClose: true,
  context: document.body,
});

function notice() {
  alert({
    text: 'Too many matches found. Please enter a more spesific query!',
    width: '300px',
    type: 'error',
    stack: stackBottomModal,
    hide: true,
    delay: 500,
    closer: false,
    sticker: false,
    remove: true,
  });
}

export { notice };
