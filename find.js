
 

 	//<![CDATA[
        //trackPage("FPC","form");
		// $('#findAnother').css('display', 'none');
		
		/**** options introduced in addresscomplete-2.30 ****/
		addressComplete.listen("options", function (options) {
			options.search = {
				maxSuggestions: 7, //the number of initial search results to return
				maxResults: 100  //the maximum number of clickable addresses to return
			}
			options.minItems = 1; //the minimum size of the list
			options.maxItems = 100; //the maximum size of the list
		});
			
        var fields = [{ element: "addressComplete", field: "{AddressLabel}", mode: 5 }],
             options = {
                 key: "zk49-ew63-zr85-mh95",
                 name: 'PCA-ARIA',
                 list: {
                     allowTab: true,
                 },
                 countries: { codesList: "CAN" },
                 bar: { visible: false },
                 culture: "fr",
                 prompt: true,
                 search: { maxSuggestions: 7, maxResults: 100 }
             }; 
			 
         var control = new pca.Address(fields, options);


         control.listen("populate", function (address) {

             var label, country;
 				label = address.Label;
             country = address.CountryIso3;

             if (country === 'GBR') {
                 document.getElementById('HeaderAddressLabel').innerHTML = label.replace(/(\r\n|\n\n|\n|\r|\,)/gm, '<br />');
             } else {
                 document.getElementById('HeaderAddressLabel').innerHTML = label.replace(/(\r\n|\n\n|\n|\r)/gm, '<br />');
             }
			
			<!--document.getElementById('HeaderAddressLabel').innerHTML = label.replace(/(\r\n|\n\n|\n|\r)/gm, '<br />');-->
 				fixLabel($('#HeaderAddressLabel').html());
 				// document.getElementById('finder-error').style.display = 'none';
             //$('#addressComplete').val('');
             $('#HeaderAddressLabel').val().toUpperCase();
 				 // $('#results').hide();
             //$('#inputContainer').hide();
             $('#addressContainer').slideDown();
             $('#printingLinks').show();
             // $('#find').hide();
             // $('#findAnother').show();
				 // $('#findAnother').css('display', 'inline-block');
             // $('#notInList').hide();
             // $('#noResults').hide();
 				//ReloadBar(true);	
             //trackSuccess("FPC", searchedFor);
         });	

         var searchedFor = "";
			

			
         var noResultsMessage = "<div class='pcamessage'><span>Nous n\'avons pas été en mesure de trouver un code postal ni une adresse compléte ou partielle avec les données que vous avez fournies.</span>";
			 	noResultsMessage += "<ul>";
			 	noResultsMessage += "<li>Vérifiez que le numéro de la rue est exact.</li>";
			 	noResultsMessage += "<li>Vérifiez l\'orthographe du nom de la rue.</li>";
			 	noResultsMessage += "<li>Essayez de nouveau plus tard s'il s'agit d'une nouvelle adresse, notre système est mensuellement mis à jour.</li>";
			 	noResultsMessage += "<li><a href='javascript:openCC('errors');'>Signaler une erreur</a> ou <a href='javascript:O_LC();'>soumettre vos commentaires</a></li>";
			 	noResultsMessage += "</ul></div>";
			
			
			
			
			
			function _RACP(v) {
             searchedFor = v;
         }

         control.listen("noresults", function() {
             //trackNotFound("FPC", searchedFor);
 				// var noResultsMsg = $("#noResults").html();
 				// $(".pcamessage").replaceWith(noResultsMsg);
 				$(".pcamessage").replaceWith(noResultsMessage);				
         });
		 
		 /* IP Address Error messaging Start */
		 control.listen("error", function(message) {
			console.log(message);
			if(message == "Request not allowed from this IP"){
				if($('.msgWarning').is(':visible')){
				}else{
					$('<div class="alert-box message msgWarning" data-alert="data-alert"><code><span>×</span></code><p><a href="#" data-reveal-id="ipModal" class="button show-for-medium-up right">En savoir plus</a> Nous sommes désolés, mais l’accès de votre organisation à l’outil Trouver un code postal a été restreint. <a href="#" data-reveal-id="ipModal" class="button show-for-small-only margintop">En savoir plus</a></p></div>').appendTo('#message-area');
					}
					$("#addressComplete").css("border-color", "#FCBF08");
					
					$.ipAddressError();
			}
		});
		/* IP Address Error messaging END */
		
         setTimeout(function () {
             //control.setCountry("Canada");
             pca.messages.fr.NORESULTS  = "<h3>Nous n\'avons pas été en mesure de trouver un code postal pour cette adresse.</h3>";
				 pca.messages.fr.NORESULTS += "<ul>";
				 pca.messages.fr.NORESULTS += "<li>Vérifiez que le numéro de la rue est exact.</li>";
				 pca.messages.fr.NORESULTS += "<li>Vérifiez l\'orthographe du nom de la rue.</li>";
				 pca.messages.fr.NORESULTS += "<li>Essayez de nouveau plus tard s'il s'agit d'une nouvelle adresse, notre système est mensuellement mis à jour.</li>";
				 pca.messages.fr.NORESULTS += "<li><a href='javascript:openCC('errors');'>Signaler une erreur</a> ou <a href='javascript:O_LC();'>soumettre vos commentaires</a></li>";
				 pca.messages.fr.NORESULTS += "</ul>";
         }, 500);


         function ShowLogin() {
             if (!$('#loginControls').is(":visible")) {
                 //trackPage("FPC", "sign in");
             }
             if (limitTriggered) {
                 $('#limitReachedInformation, #loginControls').toggle();
             } else {
                 $('#allACControls, #loginControls').toggle();
             }
         }
			
			$(document).ready(function() {
				$( window ).resize(function() {
					resizeBox();
				});
				$("#addressComplete").on('input', function() {
				  resizeBox();
				});
				resizeBox();
			});
			
			function resizeBox(){
				var inputboxwidth = $('#addressComplete').width();
				$('div.pcaautocomplete').width(inputboxwidth);
			}
			
			
 	//]]>
     
