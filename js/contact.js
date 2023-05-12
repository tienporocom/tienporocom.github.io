
$(document).ready(function () {
  function validName() {
    let reg = /^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*)*$/;
    var name = $("#name").val();
    if (name.length == 0) {
      $("#label_name span").html("Not be left blank");
      return false;
    } else if (!reg.test(name)) {
      $("#label_name span").html("Invalid");
      return false;
    } else $("#label_name span").html("");
    return true;
  }
  $("#name").blur(validName);
  function validemail() {
    let reg = /^[A-Za-z0-9_]+@([A-Za-z]+\.)+[A-Za-z]+$/;
    var email = $("#email").val();
    if (email.length == 0) {
      $("#label_email span").html("Not be left blank");
      return false;
    } else if (!reg.test(email)) {
      $("#label_email span").html("Invalid");
      return false;
    } else $("#label_email span").html("");
    return true;
  }
  $("#email").blur(validemail);

  function validtel() {
    let reg = /^[0-9]{9,10}$/;
    var tel = $("#tel").val();
    if (tel.length == 0) {
      $("#label_tel span").html("Not be left blank");
      return false;
    } else if (!reg.test(tel)) {
      $("#label_tel span").html("Invalid");
      return false;
    } else $("#label_tel span").html("");
    return true;
  }
  $("#tel").blur(validtel);

  function validsub() {
    var sub = $("#sub").val();
    if (sub == 0) {
      $("#label_sub span").html("Not be left blank");
      return false;
    } else if (sub > 15 || sub < 0) {
      $("#label_sub span").html("Invalid");
      return false;
    } else $("#label_sub span").html("");
    return true;
  }

  function clearInp() {
    $("#name").val("");
    $("#email").val("");
    $("#tel").val("");
    $("#sub").val("");
    $("#mess").val("");
  }
  $("#sub").blur(validsub);
  $(".b1").click(function () {
    if (validName() && validemail() && validsub() && validtel()) {
      $("#modalSucces").modal();
      $("#suc_1").html($("#name").val());
      $("#suc_2").html($("#email").val());
      $("#suc_3").html($("#tel").val());
      $("#suc_4").html($("#sub").val());
      $("#suc_5").html($("#mess").val());
      clearInp();
    }
  });
  $('.b1').click(function(e) {
    e.preventDefault();

    var name = $('#name').val();
    var email = $('#email').val();
    var tel = $('#tel').val();
    var sub = $('#sub').val();
    var mess = $('#mess').val();

    var data = {
      name: name,
      email: email,
      tel: tel,
      sub: sub,
      mess: mess
    };

    $.ajax({
      type: 'POST',
      url: 'https://6457e33c0c15cb1482135ab6.mockapi.io/BookingList',
      data: data,
      success: function(response) {
        console.log('Booking success');
      },
      error: function(xhr, status, error) {
        console.log(xhr.responseText);
        console.log('Booking failed');
      }
    });
  });
});

