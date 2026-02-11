export default function decorate(block) {
  const {
    title = '',
    description = '',
    ctaText = '',
    ctaUrl = '',
    image = '',
    classes = ''
  } = block.dataset;

  block.innerHTML = '';

  if (classes) {
    block.classList.add(...classes.split(' '));
  }

  const card = document.createElement('div');
  card.className = 'feature-card__wrapper';

  if (image) {
    const img = document.createElement('img');
    img.src = image;
    img.alt = title || '';
    img.loading = 'lazy';
    img.className = 'feature-card__image';
    card.appendChild(img);
  }

  if (title) {
    const heading = document.createElement('h2');
    heading.className = 'feature-card__title';
    heading.textContent = title;
    card.appendChild(heading);
  }

  if (description) {
    const desc = document.createElement('div');
    desc.className = 'feature-card__description';
    desc.innerHTML = description;
    card.appendChild(desc);
  }

  if (ctaText && ctaUrl) {
    const link = document.createElement('a');
    link.href = ctaUrl;
    link.textContent = ctaText;
    link.className = 'feature-card__cta';
    link.setAttribute('data-analytics', 'feature-card-cta');
    card.appendChild(link);
  }

  block.appendChild(card);
}
