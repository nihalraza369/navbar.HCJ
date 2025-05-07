document.getElementById('subscribe-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const msg = document.getElementById('subscribe-msg');
    msg.textContent = 'Thank you for subscribing!';
    this.reset();
  });
  