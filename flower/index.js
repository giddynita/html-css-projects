const getMenu = document.querySelector('.header_nav_list')
const getIcon = document.querySelector('.header_nav')

getIcon.addEventListener('click', () => {
  const classList = getMenu.classList
  if (classList.contains('click')) {
    classList.remove('click')
    getIcon.style.transform = 'rotate(90deg)'
  } else {
    classList.add('click', 'rotate')
    getIcon.style.transform = 'rotate(0deg)'
  }
})
