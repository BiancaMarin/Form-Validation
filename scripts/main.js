const form = document.querySelector('[data-form]');
const firstName = form.elements.firstName;
const lastName = form.elements.lastName;
console.log(lastName);
const email = form.elements.email;
const password = form.elements.password;
const retypePassword = form.elements.retype;
const phone = form.elements.phone;
console.log(phone);
const url = form.elements.url;
const selectRegion = form.elements.region;
const countries = form.elements.country;
const terms = form.elements.terms;
const female = document.querySelector('[data-female]');
const male = document.querySelector('[data-male]');
const userDateInput = document.querySelector('[data-birth]');

//error message//
const firstNameError = document.querySelector('[data-error-message-firstName]');
const lastNameError = document.querySelector('[data-error-message-lastName]');
const emailError = document.querySelector('[data-error-message-email]');
const passwordError = document.querySelector('[data-error-message-password]');
const retypePasswordError = document.querySelector(
  '[data-error-message-retype]'
);
const phoneError = document.querySelector('[data-error-message-phone]');
const urlError = document.querySelector('[data-error-message-url]');
const regionError = document.querySelector('[data-error-message-region]');
const countryError = document.querySelector('[data-error-message-country]');
const genderError = document.querySelector('[data-error-message-gender]');
const termsError = document.querySelector('[data-error-message-terms]');
const birthDateError = document.querySelector('[data-error-message-birth]');
const ageError = document.querySelector('[data-error-message-age]');

//form validation//
form.addEventListener('submit', handleInput);

function displayError(error) {
  error.classList.add('error');
}

function handleInput(e) {
  e.preventDefault();

  console.log(email.value);
  if (!firstName.value.trim()) {
    firstNameError.innerText = 'Please enter your first name.';
    displayError(firstNameError);
  }

  if (!lastName.value.trim()) {
    lastNameError.innerText = 'Please enter your last name.';
    displayError(lastNameError);
  }

  const emailRegExp =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
  if (!email.value.trim() || !emailRegExp.test(email.value)) {
    emailError.innerText = 'Please enter a valid e-mail address.';
    displayError(emailError);
  }

  const phoneRegExp = /^[0-9]{10}$/;
  if (!phone.value.trim() || !phoneRegExp.test(phone.value)) {
    phoneError.innerText = 'Please enter a valid phone number.';
    displayError(phoneError);
  }

  function checkPassword(data) {
    const passCheck = document.querySelectorAll('[data-check]');
    const lowerCase = new RegExp('(?=.*[a-z])');
    const upperCase = new RegExp('(?=.[A-Z])');
    const eightCharacters = new RegExp('(?=.{8,})');

    if (!data.trim()) {
      passwordError.innerText = 'Please enter a password.';
      displayError(passwordError);
    }

    if (eightCharacters.test(data)) {
      passCheck[0].style.color = 'green';
    } else {
      passCheck[0].style.color = 'red';
      passwordError.innerText = 'Please enter a valid password.';
      displayError(passwordError);
    }
    if (lowerCase.test(data)) {
      passCheck[1].style.color = 'green';
    } else {
      passCheck[1].style.color = 'red';
      passwordError.innerText = 'Please enter a valid password.';
      displayError(passwordError);
    }
    if (upperCase.test(data)) {
      passCheck[2].style.color = 'green';
    } else {
      passCheck[2].style.color = 'red';
      passwordError.innerText = 'Please enter a valid password.';
      displayError(passwordError);
    }
  }

  checkPassword(password.value);

  if (!retypePassword.value.trim()) {
    retypePasswordError.innerText = 'Please retype your password.';
    displayError(retypePasswordError);
  }

  if (password.value !== retypePassword.value) {
    retypePasswordError.innerText = 'The two passwords do not match.';
    displayError(retypePasswordError);
  }

  function checkDate(dob) {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const maxDob = new Date(
      currentDate.getFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate()
    );

    console.log(maxDob.getTime() > birthDate.getTime());

    if (!dob.trim() || dob === null) {
      birthDateError.innerText = 'Please select your birth date.';
      displayError(birthDateError);
    }
    if (dob.trim() && maxDob.getTime() > birthDate.getTime() === false) {
      ageError.innerText = 'Please note that age has to be more than 18.';
      displayError(ageError);
    }
  }

  checkDate(userDateInput.value);

  if (!url.value.trim()) {
    urlError.innerText = 'Please enter the url for the image.';
    displayError(urlError);
  }
  if (selectRegion.value === '') {
    regionError.innerText = 'Please select one region.';
    displayError(regionError);
  }
  if (countries.value === '') {
    countryError.innerText = 'Please select one country.';
    displayError(countryError);
  }

  if (!male.checked && !female.checked) {
    genderError.innerText = 'Please choose one option.';
    displayError(genderError);
  }

  if (!terms.checked) {
    termsError.innerText = 'Please accept the terms and conditions.';
    displayError(termsError);
  }
}

//keypress validation//
firstName.addEventListener('keydown', handleKeyDownFirstName);
lastName.addEventListener('keydown', handleKeyDownLastName);
email.addEventListener('keydown', handleKeyDownEmail);
password.addEventListener('keydown', handleKeyDownPassword);
retypePassword.addEventListener('keydown', handleKeyDownRetype);
url.addEventListener('keydown', handleKeyDownUrl);
selectRegion.addEventListener('click', handleClickRegion);
countries.addEventListener('click', handleClickCountry);
male.addEventListener('click', handleClickMale);
female.addEventListener('click', handleClickFemale);
terms.addEventListener('click', handleClickTerms);
userDateInput.addEventListener('click', handleClickDate);
userDateInput.addEventListener('click', handleClickAge);
phone.addEventListener('keydown', handleKeyDownPhone);

function handleKeyDownFirstName() {
  firstNameError.innerText = '';
}
function handleKeyDownLastName() {
  lastNameError.innerText = '';
}
function handleKeyDownEmail() {
  emailError.innerText = '';
}
function handleKeyDownPassword() {
  passwordError.innerText = '';
}
function handleKeyDownRetype() {
  retypePasswordError.innerText = '';
}
function handleKeyDownUrl() {
  urlError.innerText = '';
}
function handleClickRegion() {
  regionError.innerText = '';
}
function handleClickCountry() {
  countryError.innerText = '';
}
function handleClickMale() {
  genderError.innerText = '';
}
function handleClickFemale() {
  genderError.innerText = '';
}
function handleClickTerms() {
  termsError.innerText = '';
}
function handleClickDate() {
  birthDateError.innerText = '';
}
function handleClickAge() {
  ageError.innerText = '';
}
function handleKeyDownPhone() {
  phoneError.innerText = '';
}

//dynamically populate dropdown//
function handleGetCountries() {
  fetch('http://localhost:3000/regions/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const regions = data;
      for (const region of regions) {
        const optionRegions = document.createElement('option');
        optionRegions.text = region.region_name;
        optionRegions.value = region.region_name;
        selectRegion.append(optionRegions);
      }

      const asiaArr = data[0].countries;
      const europeArr = data[1].countries;
      const centralAmericaArr = data[2].countries;
      const southAmericaArr = data[3].countries;
      const subSaharanAmericaArr = data[4].countries;
      const australiaArr = data[5].countries;
      const middleEastArr = data[6].countries;
      const northAmericaArr = data[7].countries;

      selectRegion.addEventListener('change', handleChangeRegion);

      function handleChangeRegion(e) {
        countries.innerHTML = '';
        if (e.target.value === 'Asia') {
          asiaArr.forEach((elem) => {
            const optionCountry = document.createElement('option');
            optionCountry.text = elem.country_name;
            optionCountry.value = elem.country_name;
            countries.append(optionCountry);
          });
        }
        if (e.target.value === 'Europe') {
          europeArr.forEach((elem) => {
            const optionCountry = document.createElement('option');
            optionCountry.text = elem.country_name;
            optionCountry.value = elem.country_name;
            countries.append(optionCountry);
          });
        }
        if (e.target.value === 'Central America and the Caribbean') {
          centralAmericaArr.forEach((elem) => {
            const optionCountry = document.createElement('option');
            optionCountry.text = elem.country_name;
            optionCountry.value = elem.country_name;
            countries.append(optionCountry);
          });
        }
        if (e.target.value === 'South America') {
          southAmericaArr.forEach((elem) => {
            const optionCountry = document.createElement('option');
            optionCountry.text = elem.country_name;
            optionCountry.value = elem.country_name;
            countries.append(optionCountry);
          });
        }
        if (e.target.value === 'Sub-Saharan Africa') {
          subSaharanAmericaArr.forEach((elem) => {
            const optionCountry = document.createElement('option');
            optionCountry.text = elem.country_name;
            optionCountry.value = elem.country_name;
            countries.append(optionCountry);
          });
        }
        if (e.target.value === 'Australia and Oceania') {
          australiaArr.forEach((elem) => {
            const optionCountry = document.createElement('option');
            optionCountry.text = elem.country_name;
            optionCountry.value = elem.country_name;
            countries.append(optionCountry);
          });
        }
        if (
          e.target.value === 'Middle East - North Africa and Greater Arabia'
        ) {
          middleEastArr.forEach((elem) => {
            const optionCountry = document.createElement('option');
            optionCountry.text = elem.country_name;
            optionCountry.value = elem.country_name;
            countries.append(optionCountry);
          });
        }
        if (e.target.value === 'North America') {
          northAmericaArr.forEach((elem) => {
            const optionCountry = document.createElement('option');
            optionCountry.text = elem.country_name;
            optionCountry.value = elem.country_name;
            countries.append(optionCountry);
          });
        }
      }
    });
}

handleGetCountries();
