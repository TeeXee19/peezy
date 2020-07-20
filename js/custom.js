 $(document).ready(function(e){
	      $('.search-panel .dropdown-menu').find('a').click(function(e) {
				e.preventDefault();
				var param = $(this).attr("href").replace("#","");
				var concept = $(this).text();
				$('.search-panel span#search_concept').text(concept);
				$('.input-group #search_param').val(param);
		   	});
	      });
/* $(document).ready(function(e){
var a = document.getElementByTagName('a').item(0);
$(a).on('keyup', function(evt){
  console.log(evt);
  if(evt.keycode === 13){
    
    alert('search?');
  } 
}); */

// Disable form submissions if there are invalid fields
$(document).ready(function() {
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
});


// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable(
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



$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  var actions = $(".table2 td:last-child").html();
  // Append table with add row form on add new button click
    $(".add-new").click(function(){
    $(this).attr("disabled", "disabled");
    var index = $(".table2 tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' +
            '<td><input type="text" class="form-control" name="email" id="email"></td>' +
            '<td><input type="text" class="form-control" name="address" id="address"></td>' +
            '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
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

  // Disable form submissions if there are invalid fields
$(document).ready(function() {
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
