function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function validateForm() {
  const lastName = document.getElementById('last_name').value;
  const company = document.getElementById('company').value;
  const status = document.getElementById('status').value;
  const captchaResponse = grecaptcha.getResponse();

  (!lastName || !company || !status) {
    alert('Please fill out all required fields.');
    return false;
  }

  if (!captchaResponse) {
    alert('Please complete the CAPTCHA.');
   
