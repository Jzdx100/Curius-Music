document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
const elements = document.querySelectorAll('.accordion_element');

elements.forEach(element => {
  element.addEventListener('click', () => { 

    const content = element.querySelector('.accordion_content');
    const icon = element.querySelector('.accordion_icon');
    content.classList.toggle('active');
    element.classList.toggle('active');

    if (content.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.classList.add('active');

    } else {
      content.style.maxHeight = 0;
      icon.classList.remove('active');
    }
  });
});