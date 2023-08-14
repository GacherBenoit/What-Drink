// We create on object to set the propertie of position at every interraction
// The properties will be increment at every key push.
export const navigationPosition = { current: -1 };

// We create a table with all propositions
export const listElement = document.getElementsByClassName('navbar--search__input__items__list__element');
export default function keyboardNavigation(
  evt, // The event object to have the key properties to check what keyboard touch has pressed
  search,
  SetSearch, // useState for read the controlled field
  handleSubmit, // handler to redirect to result component
) {
  if (search && search) { // We check if the input is'nt empty
    const elementToRemove = document.getElementsByClassName('highLight'); // We create a table with the recipes with highlight className

    // On arrowdown interraction, if the current position is set at the end of the table:
    // We set the currentposition at -1 ( because it will be finally set at 0 with incrementation)
    // We remove the previous highlight className (the preview element will disapear)
    if (evt.key === 'ArrowDown') {
      if (navigationPosition.current === listElement.length - 1) {
        navigationPosition.current = -1;
        elementToRemove[0].classList.remove('highLight');
      }

      // At every interraction with arrowDown, the position is increment by +1
      // We add the className highlight to the index of the table with the current position.
      // We create a currentProposition variable to store the proposition's value in highLight

      navigationPosition.current += 1;
      listElement[navigationPosition.current].classList.add('highLight');

      // If we have two element with the classname highlight , we remove the previous one
      // (here at the index 0 cause to the different direction navigation )
      if (elementToRemove.length === 2) {
        elementToRemove[0].classList.remove('highLight');
      }
    }

    // If arrowUp is the first interraction, the current position is set at -1
    // So we set the current position to the end of the proposition's table
    if (evt.key === 'ArrowUp') {
      if (navigationPosition.current === -1) {
        navigationPosition.current = listElement.length;
      }

      // If the current position is set to 0 (at the begining of the list)
      // We set the current posittion to the end of the proposition's table
      // And remove the previous element with className highlight
      if (navigationPosition.current === 0) {
        navigationPosition.current = listElement.length;
        elementToRemove[0].classList.remove('highLight');
      }

      // At every arrowUp interraction , we decrement the current position by -1
      // We add the className highlight to the index of the table with the current position.
      // We create a currentProposition variable to store the proposition's value in highLight
      navigationPosition.current -= 1;
      listElement[navigationPosition.current].classList.add('highLight');

      // If we have two element with the classname highlight , we remove the previous one
      // (here at the index 1 cause to the different direction navigation )
      if (elementToRemove.length === 2) {
        elementToRemove[1].classList.remove('highLight');
      }
    }
  }
  // If we push on enter we set the search's state to the element in highlight's value
  if (evt.key === 'Enter') {
    if (navigationPosition.current === -1) {
      handleSubmit();
    }
    // To not sent an error in console when none element is in highlight
    // we declare the variable only if current position isn't on -1
    if (navigationPosition.current !== -1) {
      const currentHighLightElement = document.getElementsByClassName('highLight');
      if (currentHighLightElement[0].value !== undefined) {
        SetSearch(currentHighLightElement[0].value);
      }
    }
  }
}
