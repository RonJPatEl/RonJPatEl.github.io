
getExperience();

async function getExperience() {

            // <!-- download data en wacht tot het er ook echt is -->
            let url = 'https://raw.githubusercontent.com/RonJPatEl/RonJPatEl.github.io/master/content/experience.json';
            let response = await fetch(url);

				if (response.ok) { // if HTTP-status is 200-299
				  // get the response body (the method explained below)
				  var expjson = await response.json();
			
            
					for (i = 0; i < expjson.experience.length; i++) {
                       document.getElementById("XP").innerHTML += 
					        "<li>" + 
								"<div>" +
									"<b>" + expjson.experience[i].Title + "<span class='float-right'>" + 
										expjson.experience[i].Start + " - " + expjson.experience[i].End + "</span></b>" + 
									"<p class='mt-0 mb-1 text-muted'>" + expjson.experience[i].Org + "</p>" + 
									expjson.experience[i].Comment +
								"</div>" + 
							"</li>";
                     }
						 
				} else {
				  alert("HTTP-Error: " + response.status);
			}
}
// <!-- close Experience-section-script -->

// <!-- EDUCATION SECTION: PULL FROM GITHUB JSON -->

getEducation();

async function getEducation() {

            // <!-- download data en wacht tot het er ook echt is -->
            let url = 'https://raw.githubusercontent.com/RonJPatEl/RonJPatEl.github.io/master/content/education.json';
            let response = await fetch(url);

				if (response.ok) { // if HTTP-status is 200-299
				  // get the response body (the method explained below)
				  var expjson = await response.json();
			
            
					for (i = 0; i < expjson.education.length; i++) {
                       document.getElementById("EDU").innerHTML += 
					        "<li>" + 
								"<div>" +
									"<b>" + expjson.education[i].Title + "<span class='float-right'>" + 
										expjson.education[i].Start + " - " + expjson.education[i].End + "</span></b>" + 
									"<p class='mt-0 mb-1 text-muted'>" + expjson.education[i].School + "</p>" + 
									expjson.education[i].Comment +
								"</div>" + 
							"</li>";
                     }
						 
				} else {
				  alert("HTTP-Error: " + response.status);
			}
}
// <!-- close EDUCATION-section-script -->