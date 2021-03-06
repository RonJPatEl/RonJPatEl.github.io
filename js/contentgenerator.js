
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
									"<b>" + expjson.experience[i].Title + "</b><span class='float-right text-danger'>" + 
										expjson.experience[i].Start + " - " + expjson.experience[i].End + "</span>" + 
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
									"<b>" + expjson.education[i].Title + "</b><span class='float-right text-danger'>" + 
										expjson.education[i].Start + " - " + expjson.education[i].End + "</span>" + 
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


// <!-- AWARDS SECTION: PULL FROM GITHUB JSON -->

getAwards();

async function getAwards() {

            // <!-- download data en wacht tot het er ook echt is -->
            let url = 'https://raw.githubusercontent.com/RonJPatEl/RonJPatEl.github.io/master/content/awards.json';
            let response = await fetch(url);

				if (response.ok) { // if HTTP-status is 200-299
				  // get the response body (the method explained below)
				  var awardjson = await response.json();
			
            
					for (i = 0; i < awardjson.awards.length; i++) {
                       document.getElementById("AWARD").innerHTML += 
					        "<li>" + 
								"<div>" +
									"<b>" + awardjson.awards[i].Title + "</b><span class='float-right text-danger'>" + 
									awardjson.awards[i].Start + "</span>" + 
									"<p class='mt-0 mb-1 text-muted'>" + awardjson.awards[i].Org + "</p>" + 
									awardjson.awards[i].url +
								"</div>" + 
							"</li>";
                     }
						 
				} else {
				  alert("HTTP-Error: " + response.status);
			}
}
// <!-- close AWARDS-section-script -->

// <!-- GRANTS SECTION: PULL FROM GITHUB JSON -->

getGrants();

async function getGrants() {

            // <!-- download data en wacht tot het er ook echt is -->
            let url = 'https://raw.githubusercontent.com/RonJPatEl/RonJPatEl.github.io/master/content/grants.json';
            let response = await fetch(url);

				if (response.ok) { // if HTTP-status is 200-299
				  // get the response body (the method explained below)
				  var grantjson = await response.json();
			
            
					for (i = 0; i < grantjson.grants.length; i++) {
                       document.getElementById("GRANT").innerHTML += 
					        "<li>" + 
								"<div>" +
									"<b>" + grantjson.grants[i].Title + " (Role: " + grantjson.grants[i].Role + ")" +
									"</b><span class='float-right text-danger'>" + 
									grantjson.grants[i].Start + "-" + grantjson.grants[i].End + "</span>" + 
									"<p class='mt-0 mb-1 text-muted'> &euro;" + grantjson.grants[i].Value.toLocaleString() + ",- </p>" +
									"<p class='mt-0 mb-1'> Funding source: " + grantjson.grants[i].Funder + "</p>" +
									"<a href = '" + grantjson.grants[i].url + "'>" + 
									"<span class='label label-info'> click link for more info</span>" +   
								"</div>" + 
							"</li>";
					}
						
					total = 0
					for (i = 0; i < grantjson.grants.length; i++) {
						total += grantjson.grants[i].Value;
					}
					document.getElementById("munnies").innerHTML = "&euro;" + 
					total.toLocaleString()
							
				} else {
				  alert("HTTP-Error: " + response.status);
			}
}
// <!-- close GRANTS-section-script -->