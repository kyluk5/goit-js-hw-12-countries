import { alert, Stack } from '@pnotify/core';

const stackBottomModal = new Stack({
  dir1: 'up', // With a dir1 of "up", the stacks will start appearing at the bottom.
  // Without a `dir2`, this stack will be horizontally centered, since the `dir1` axis is vertical.
  firstpos1: 25, // The notices will appear 25 pixels from the bottom of the context.
  // Without a `spacing1`, this stack's notices will be placed 25 pixels apart.
  push: 'top', // Each new notice will appear at the bottom of the screen, which is where the "top" of the stack is. Other notices will be pushed up.
  modal: true, // When a notice appears in this stack, a modal overlay will be created.
  overlayClose: true, // When the user clicks on the overlay, all notices in this stack will be closed.
  context: document.getElementById('page-container'), // The notices will be placed in the "page-container" element.
});

function notice() {
  alert({
    text:
      'Слишком много совпадений найдено. Пожалуйста, введите более конкретный запрос',
    width: 'auto',
    type: 'error',
    stack: stackBottomModal,
  });
}

// function timer() {
//   // Display a notice at a random time between 4 and 8 seconds.
//   setTimeout(() => {
//     notice();
//     timer();
//   }, Math.random() * 4000 + 4000);
// }

notice();
// timer();
