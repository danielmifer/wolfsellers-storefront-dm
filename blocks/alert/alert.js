export default function decorate(block) {
  const {
    message = '',
    type = 'info'
  } = block.dataset;

  block.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'alert';

  wrapper.classList.add(`alert--${type}`);

  const content = document.createElement('div');
  content.className = 'alert__content';
  content.innerHTML = message;

  wrapper.appendChild(content);
  block.appendChild(wrapper);
}
