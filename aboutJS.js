const topics = document.querySelectorAll('.topic');

topics.forEach((topic) => {
  const header = topic.querySelector('.topic-header');
  const icon = topic.querySelector('.icon');
  const description = topic.querySelector('.description');

  header.addEventListener('click', function () {
    topic.classList.toggle('active');
    if (topic.classList.contains('active')) {
      icon.textContent = '-';
      description.style.display = 'block';
    } else {
      icon.textContent = '+';
      description.style.display = 'none';
    }
  });
});
