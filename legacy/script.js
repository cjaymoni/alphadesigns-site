// Fill these in before publishing. Leave the WhatsApp number in international format with no "+",
// e.g. "233241234567". While they are empty, the form explains that sending isn't set up yet.
const CONTACT = {
  email: '',
  whatsapp: '',
};

// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('site-nav');

function setMenu(open) {
  menuBtn.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
}

menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menuBtn.focus(); }
});

// Course buttons preselect the matching option in the form
const courseSelect = document.getElementById('f-course');
document.querySelectorAll('[data-course]').forEach((link) => {
  link.addEventListener('click', () => { courseSelect.value = link.dataset.course; });
});

// Enquiry form: opens a pre-written WhatsApp message or email
const form = document.getElementById('enrol-form');
const statusEl = document.getElementById('form-status');

function showStatus(text, isError) {
  statusEl.textContent = text;
  statusEl.classList.toggle('error', Boolean(isError));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const via = e.submitter?.dataset.via || 'whatsapp';
  const name = form.elements.name;
  const phone = form.elements.phone;

  let firstBad = null;
  [name, phone].forEach((input) => {
    const bad = !input.value.trim();
    input.setAttribute('aria-invalid', String(bad));
    if (bad && !firstBad) firstBad = input;
  });
  if (firstBad) {
    showStatus('Please add your name and a phone number so we can reply.', true);
    firstBad.focus();
    return;
  }

  const lines = [
    `Hello Alpha Designs, I'd like to reserve a seat.`,
    `Name: ${name.value.trim()}`,
    `Phone: ${phone.value.trim()}`,
    `Interested in: ${courseSelect.value}`,
  ];
  const note = form.elements.message.value.trim();
  if (note) lines.push(`Message: ${note}`);
  const text = lines.join('\n');

  if (via === 'email') {
    if (!CONTACT.email) return showStatus('Email sending is not set up yet. Please call or WhatsApp us instead.', true);
    const subject = `Seat enquiry: ${courseSelect.value}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  } else {
    if (!CONTACT.whatsapp) return showStatus('WhatsApp sending is not set up yet. Please use the contact details on this page.', true);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  }
  showStatus('Your message is ready. Press send in the app that just opened.');
});

document.getElementById('year').textContent = new Date().getFullYear();
