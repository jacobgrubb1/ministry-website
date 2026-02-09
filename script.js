// ========== FREQUENCY TOGGLE ==========
const freqBtns = document.querySelectorAll('.freq-btn');
freqBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    freqBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ========== AMOUNT SELECTION ==========
const amountBtns = document.querySelectorAll('.amount-btn');
const customWrapper = document.getElementById('customAmountWrapper');
const customInput = document.getElementById('customAmount');

amountBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    amountBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (btn.dataset.amount === 'other') {
      customWrapper.style.display = 'block';
      customInput.focus();
    } else {
      customWrapper.style.display = 'none';
      customInput.value = '';
    }
  });
});

// ========== GIVE BUTTON ==========
document.getElementById('giveBtn').addEventListener('click', () => {
  const activeAmount = document.querySelector('.amount-btn.active');
  let amount;

  if (activeAmount && activeAmount.dataset.amount === 'other') {
    amount = parseFloat(customInput.value);
    if (!amount || amount <= 0) {
      alert('Please enter a valid donation amount.');
      customInput.focus();
      return;
    }
  } else if (activeAmount) {
    amount = parseFloat(activeAmount.dataset.amount);
  } else {
    alert('Please select a donation amount.');
    return;
  }

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!firstName || !lastName || !email) {
    alert('Please fill in all fields.');
    return;
  }

  const freq = document.querySelector('.freq-btn.active').dataset.freq;
  const freqLabel = freq === 'monthly' ? 'monthly' : 'one-time';

  alert(`Thank you, ${firstName}! Your ${freqLabel} gift of $${amount.toFixed(2)} is appreciated.`);
});

// ========== MOBILE MENU ==========
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavClose = document.querySelector('.mobile-nav-close');

mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.add('open');
});

mobileNavClose.addEventListener('click', () => {
  mobileNav.classList.remove('open');
});

// Close mobile nav when a link is clicked
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});
