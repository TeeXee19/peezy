// Disable form submissions if there are invalid fields
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);


// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    "order": [[2, "desc"]]
  });

  $('#dataTable2').DataTable(
    );
});


  $(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
}); 

$("#uploadImage").click(function(e) {
    $("#imageUpload").click();
});

function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
          $('#profileImage').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
    }
}

$("#imageUpload").change(function(){
    fasterPreview( this );
});


//Manage Cards DataTable
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  var actions = $(".table2 td:last-child").html();
  // Append table with add row form on add new button click
    $(".add-new").click(function(){
    $(this).attr("disabled", "disabled");
    var index = $(".table2 tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="date" class="form-control" name="date" id="date"></td>' +
            '<td><input type="text" class="form-control" name="ip" id="ip"></td>' +
      '<td>' + actions + '</td>' +
        '</tr>';
      $(".table2").append(row);   
    $(".table2 tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
  // Add row on add button click
  $(document).on("click", ".add", function(){
    var empty = false;
    var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
      if(!$(this).val()){
        $(this).addClass("error");
        empty = true;
      } else{
                $(this).removeClass("error");
            }
    });
    $(this).parents("tr").find(".error").first().focus();
    if(!empty){
      input.each(function(){
        $(this).parent("td").html($(this).val());
      });     
      $(this).parents("tr").find(".add, .edit").toggle();
      $(".add-new").removeAttr("disabled");
    }   
    });
  // Edit row on edit button click
  $(document).on("click", ".edit", function(){    
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
      $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
    });   
    $(this).parents("tr").find(".add, .edit").toggle();
    $(".add-new").attr("disabled", "disabled");
    });
  // Delete row on delete button click
  $(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
    $(".add-new").removeAttr("disabled");
    });
});


$(document).on("click", ".delete-card", function(){
        $(this).parents("tr").remove();
 });

$(document).ready(function(){
     $('#btnClick').on('click',function(){
      if($('#1').css('display')!='none'){
      $('#2').show().siblings('div').hide();
      }else if($('#2').css('display')!='none'){
          $('#1').show().siblings('div').hide();
      }
      });

       $('#btnClick1').on('click',function(){
      if($('#2').css('display')!='none'){
      $('#1').show().siblings('div').hide();
      }else if($('#1').css('display')!='none'){
          $('#2').show().siblings('div').hide();
      }
      });

       $('#btnClick2').on('click',function(){
      if($('#2').css('display')!='none'){
      $('#3').show().siblings('div').hide();
      }else if($('#3').css('display')!='none'){
          $('#2').show().siblings('div').hide();
      }
      });

      $('btnClick3').on('click',function(){
      if($('#3').css('display')!='none'){
      $('#2').show().siblings('div').hide();
      }else if($('#2').css('display')!='none'){
          $('#3').show().siblings('div').hide();
      }
      });


   $('#btnClick4').on('click',function(){
      if($('#1').css('display')!='none'){
      $('#4').show().siblings('div').hide();
      }else if($('#4').css('display')!='none'){
          $('#1').show().siblings('div').hide();
      }
      });

      $('#btnClick5').on('click',function(){
      if($('#4').css('display')!='none'){
      $('#1').show().siblings('div').hide();
      }else if($('#1').css('display')!='none'){
          $('#4').show().siblings('div').hide();
      }
      });
});

$(document).ready(function(){
  //Password visibility toggle
   $(".toggle-password").click(function() {

        $(this).toggleClass("ri-eye-fill ri-eye-off-fill");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });

   //Phone Number and country selector
    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
    });

 });


 $(document).ready(function () {
  $('.payment-method').hide();
  $('.m1').show();

  $('#select').on("change",function () {
    $('.payment-method').hide();
    $('.m'+$(this).val()).show();
  }).val("1");
});

// Hide Report Div
$(document).ready(function(){
   $('.report').hide();
  $('#dataTable2').DataTable(
    );
  $('#dataTable3').DataTable(
    );
     $('#dataTable4').DataTable(
    );

     $('#dataTable5').DataTable(
    );

    $('#dataTable6').DataTable(
    );

     $('#dataTable7').DataTable(
    );

    $('#dataTable8').DataTable(
    );
    $('#dataTable9').DataTable(
    );
 });

function toggle(reportTab){
   $('.report').hide();
  $(reportTab).show();
 
};
// Hide Report Div End

$(document).ready(function(){
 $('#editButton').click(function(){
        $('.adminProfile').prop('disabled', 
           function (i, val) {
        return !val;
    });
  }); 
});


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  var actions = $(".table3 td:last-child").html();
  // Append table with add row form on add new button click
    $(".add-new").click(function(){
    $(this).attr("disabled", "disabled");
    var index = $(".table3 tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="Name" id="name"></td>' +
            '<td><input type="text" class="form-control" name="Number" id="number"></td>' +
            '<td><input type="text" class="form-control" name="Status" id="status"></td>' +
      '<td>' + actions + '</td>' +
        '</tr>';
      $(".table3").append(row);   
    $(".table3 tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
  // Add row on add button click
  $(document).on("click", ".add", function(){
    var empty = false;
    var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
      if(!$(this).val()){
        $(this).addClass("error");
        empty = true;
      } else{
                $(this).removeClass("error");
            }
    });
    $(this).parents("tr").find(".error").first().focus();
    if(!empty){
      input.each(function(){
        $(this).parent("td").html($(this).val());
      });     
      $(this).parents("tr").find(".add, .edit").toggle();
      $(".add-new").removeAttr("disabled");
    }   
    });
  // Edit row on edit button click
  $(document).on("click", ".edit", function(){    
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
      $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
    });   
    $(this).parents("tr").find(".add, .edit").toggle();
    $(".add-new").attr("disabled", "disabled");
    });
  // Delete row on delete button click
  $(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
    $(".add-new").removeAttr("disabled");
    });
});

$(document).ready(function () {
  $('.plan-type').hide();
  $('.p1').show();

  $('#select').on("change",function () {
    $('.plan-type').hide();
    $('.p'+$(this).val()).show();
  }).val("1");
});

$(document).ready(function () {
        var pwd = document.getElementById("pwd");
        var cpwd = document.getElementById("cpwd");
        pwd.onchange = ConfirmPassword;
        cpwd.onkeyup = ConfirmPassword;
        function ConfirmPassword() {
            cpwd.setCustomValidity("");
            if (pwd.value != cpwd.value) {
                cpwd.setCustomValidity("Passwords do not match.");
            }
        }
  });