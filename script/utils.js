export function toggleHide(elementToShowHide, plusIconElement, filterElement) {
     filterElement.addEventListener('click', () => {
          elementToShowHide.classList.toggle('hide');
          if (plusIconElement.classList.contains('uil-plus')) {
               plusIconElement.classList.remove('uil-plus');
               plusIconElement.classList.add('uil-minus');
          } else {
               plusIconElement.classList.remove('uil-minus');
               plusIconElement.classList.add('uil-plus');
          }
     });
     const selectedCriteria = filterElement.textContent.trim();
     // console.log(selectedCriteria)
}
export function toggleCheckbox(checkboxIcon,) {
     checkboxIcon.classList.toggle('fa-square');
     checkboxIcon.classList.toggle('fa-square-check');
}
export function filterItemsClicked(elementItems) {
     elementItems.forEach((item, index) => {
          item.addEventListener('click', () => {
               const checkboxIcon = item.querySelector('i.fa-regular.fa-square')
               // Add your operations here
               if (checkboxIcon) {
                    toggleCheckbox(checkboxIcon)
               }
          });
     });
}

// Filter Data function
export function createFilterFunction(property) {
     let set = new Set();
   
     return function (data) {
       data.forEach((item) => {
         if (Array.isArray(item[0])) {
           set.add(item[property]);
         } else {
           set.add(item[property]);
         }
       });
   
       return Array.from(set);
     };
   }

