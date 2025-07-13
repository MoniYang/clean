  

  let swiper = new Swiper(".mySwiper", {
      pagination: {
          el: ".swiper-pagination",
      },
    });


  let PromoGameSwiper = new Swiper(".promoGame", {
    slidesPerView: 'auto',
  });


  function toggleDropdown(button) {
    const dropdown = button.closest('[data-component="dropdown"]');
    const isOpen = dropdown.getAttribute('data-open') === 'true';
    dropdown.setAttribute('data-open', !isOpen);
  }

  function sideMenuOpen() {
    const sideMenu = document.querySelector('.side-menu');
    const allElements = document.querySelectorAll('[data-open]');
  allElements.forEach((el) => {
    if (!el.classList.contains('.side-menu') && !el.classList.contains('.side-menu')) {
      el.setAttribute('data-open', 'false');
  }
});
    // 檢查目前的 data-open 屬性值
    const isOpen = sideMenu.getAttribute('data-open') === 'true';
    
    // 切換 data-open 屬性
    sideMenu.setAttribute('data-open', !isOpen);
}

function prodiverOpen() {
   const allElements = document.querySelectorAll('[data-open]');
   allElements.forEach((el) => {
     if (!el.classList.contains('provider')) {
       el.setAttribute('data-open', 'false');
     }
   });

  // Set `data-open` to 'true' for the `.provider` element
  const provider = document.querySelector('.provider');
  if (provider) {
    provider.setAttribute('data-open', 'true');
  }
}
function homeEvent() {
  
  const allElements = document.querySelectorAll('[data-open]');
  allElements.forEach((el) => {
    if (!el.classList.contains('provider')) {
      el.setAttribute('data-open', 'false');
    }
  });
}



function prodiverclose() {
  
  const provider = document.querySelector('.provider');
  provider.setAttribute('data-open', 'false');
  const allElements = document.querySelectorAll('[data-open]');
  allElements.forEach((el) => {
    if (!el.classList.contains('provider') && !el.classList.contains('provider')) {
      el.setAttribute('data-open', 'false');
  }
});
}

function profileEvent() {
  const profile = document.querySelector('.profile');
  const allElements = document.querySelectorAll('[data-open]');
  allElements.forEach((el) => {
    if (!el.classList.contains('profile') && !el.classList.contains('profile')) {
      el.setAttribute('data-open', 'false');
  }
});
  
  // 檢查目前的 data-open 屬性值
  const isOpen = profile.getAttribute('data-open') === 'true';
  
  // 切換 data-open 屬性
  profile.setAttribute('data-open', !isOpen);
}

function promoEvent() {
  const promo = document.querySelector('.promo');
  
  const allElements = document.querySelectorAll('[data-open]');
  allElements.forEach((el) => {
    if (!el.classList.contains('promo') && !el.classList.contains('promo')) {
      el.setAttribute('data-open', 'false');
  }
});
  // 檢查目前的 data-open 屬性值
  const isOpen = promo.getAttribute('data-open') === 'true';
  
  // 切換 data-open 屬性
  promo.setAttribute('data-open', !isOpen);
}

function walletEvent() {
  const wallet = document.querySelector('.wallet');
  const allElements = document.querySelectorAll('[data-open]');
  allElements.forEach((el) => {
    if (!el.classList.contains('wallet') && !el.classList.contains('wallet')) {
      el.setAttribute('data-open', 'false');
  }
});
  // 檢查目前的 data-open 屬性值
  const isOpen = wallet.getAttribute('data-open') === 'true';
  
  // 切換 data-open 屬性
  wallet.setAttribute('data-open', !isOpen);
}

const deposit = document.querySelector('[data-page="deposit"]');
const withdraw = document.querySelector('[data-page="withdraw"]');
const betHistory = document.querySelector('[data-page="betHistory"]');
const statement = document.querySelector('[data-page="statement"]');
const withdrawButton = document.querySelector('[onclick="withdrawEvent(this)"]'); // Select withdraw button
const depositButton = document.querySelector('[onclick="depositEvent(this)"]'); // Select deposit button
const statementButton = document.querySelector('[onclick="statementEvent(this)"]'); // Select statemnet button
const betHistoryButton = document.querySelector('[onclick="betHistoryEvent(this)"]'); // Select deposit button
// deposit.setAttribute('data-open', true);
// depositButton.setAttribute('data-selected', true);

function depositEvent(button) {
 
  // Toggle `data-open` attribute values
  const isOpen = deposit.getAttribute('data-open') === 'true';
  deposit.setAttribute('data-open', !isOpen);
  withdraw.setAttribute('data-open', isOpen);
  statement.setAttribute('data-open', isOpen);
  betHistory.setAttribute('data-open', isOpen);

 // Set the `data-selected` attribute on the deposit button and clear it on the withdraw button
 button.setAttribute('data-selected', true);
 withdrawButton.setAttribute('data-selected', false);
 betHistoryButton.setAttribute('data-selected', false);
 statementButton.setAttribute('data-selected', false);

}

function withdrawEvent(button) {
  // const deposit = document.querySelector('[data-page="deposit"]');
  // const withdraw = document.querySelector('[data-page="withdraw"]');

  // Toggle `data-open` attribute values
  const isOpen = withdraw.getAttribute('data-open') === 'true';
  deposit.setAttribute('data-open', isOpen);
  withdraw.setAttribute('data-open', !isOpen);
  statement.setAttribute('data-open', isOpen);
  betHistory.setAttribute('data-open', isOpen);

 // Set the `data-selected` attribute on the withdraw button and clear it on the deposit button
 button.setAttribute('data-selected', true);
 depositButton.setAttribute('data-selected', false);
 betHistoryButton.setAttribute('data-selected', false);
 statementButton.setAttribute('data-selected', false);

}


function statementEvent(button) {

  // Toggle `data-open` attribute values
  const isOpen = statement.getAttribute('data-open') === 'true';
  statement.setAttribute('data-open', !isOpen);
  deposit.setAttribute('data-open', isOpen);
  betHistory.setAttribute('data-open', isOpen);
  withdraw.setAttribute('data-open', isOpen);

 // Set the `data-selected` attribute on the withdraw button and clear it on the deposit button
 button.setAttribute('data-selected', true);
 depositButton.setAttribute('data-selected', false);
 withdrawButton.setAttribute('data-selected', false);
 betHistoryButton.setAttribute('data-selected', false);
}

function betHistoryEvent(button) {

  // Toggle `data-open` attribute values
  const isOpen = betHistory.getAttribute('data-open') === 'true';
  betHistory.setAttribute('data-open', !isOpen);
  deposit.setAttribute('data-open', isOpen);
  statement.setAttribute('data-open', isOpen);
  withdraw.setAttribute('data-open', isOpen);

 // Set the `data-selected` attribute on the withdraw button and clear it on the deposit button
 button.setAttribute('data-selected', true);
 depositButton.setAttribute('data-selected', false);
 withdrawButton.setAttribute('data-selected', false);
 statementButton.setAttribute('data-selected', false);
}


const menuSlot = document.querySelector('[data-menu-item="slot"]');
const menuPageSlot = document.querySelector('.slot');

menuSlot.addEventListener('click', function () {
  menuPageSlot.setAttribute('data-open', 'true');
  const sideMenu = document.querySelector('.side-menu');
  sideMenu.setAttribute('data-open', 'false');
});

const menuVIP = document.querySelector('[data-menu-item="vip"]');
const menuPageVIP = document.querySelector('.VIPPage');



menuVIP.addEventListener('click', function () {
  menuPageVIP.setAttribute('data-open', 'true');
  const sideMenu = document.querySelector('.side-menu');
  sideMenu.setAttribute('data-open', 'false');
});