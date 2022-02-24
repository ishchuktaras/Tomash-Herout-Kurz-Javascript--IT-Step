function formular() {
  $('form').submit(function () {
    let jmeno = $('input[name="jmeno"]').val().length;
    if (jmeno > 1) {

    } else {
      alert('Napište jmeno');
    }
    let psc = $('input[name="psc"]').val().length;
    if (psc == 5 || psc == 6) {

    } else {
      alert("Ukažte PSČ min 5 max 6 znaků");
    }
    let souhlas = $('input[name="souhlas"]').prop("checked");
    if (!souhlas) {
      alert('Souhlas s podmínkami');
    }
  })
}
$(document).ready(function () {
  formular();
});
