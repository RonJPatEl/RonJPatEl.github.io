getPresentations();

async function getPresentations() {

            // <!-- download data en wacht tot het er ook echt is -->
            let url = 'https://api.zotero.org/users/6167652/publications/items?v=3&format=json&include=bib&linkwrap=1&itemType=Presentation&sort=date&style=apa';
            let response = await fetch(url);

				if (response.ok) { // if HTTP-status is 200-299
				  // get the response body (the method explained below)
				  var prespubjson = await response.json();
			
            
					for (i = 0; i < prespubjson.length; i++) {            		
						document.getElementById("presentations").innerHTML += prespubjson[i].bib
					}
				
					document.getElementById("totalpresentations").innerHTML += prespubjson.length
				} else {
				  alert("HTTP-Error: " + response.status);
			}
            // <!-- data is er, en doe er nu dingen mee -->
}

// <!-- pull journal articles and proceedings from zotero -->
getArticles();

async function getArticles() {

            // <!-- download data en wacht tot het er ook echt is -->
            let uri = 'https://api.zotero.org/users/6167652/publications/items?v=3&format=json&include=bib&linkwrap=1&itemType=journalArticle || conferencePaper&sort=date&style=apa';
            let url =  encodeURI(uri);   
            let response = await fetch(url);

				if (response.ok) { // if HTTP-status is 200-299
				  // get the response body (the method explained below)
				  var artpubjson = await response.json();
			
            
					for (i = 0; i < artpubjson.length; i++) {            		
						document.getElementById("articles").innerHTML += artpubjson[i].bib
					}
				function updateHaystack(input, needle) {
                    return input.replace(new RegExp('(^|\\s)(' + needle + ')(\\s|$)','ig'), '$1<b>$2</b>$3');
                }
				var markup = document.getElementById('articles').innerHTML;
                var output = updateHaystack(markup, 'Pat-El');
                document.getElementById('articles').innerHTML = output;		 
			
				document.getElementById("totalarticles").innerHTML += artpubjson.length
			
			} else {
				  alert("HTTP-Error: " + response.status);
			}
            // <!-- data is er, en doe er nu dingen mee -->
}

// <!-- pull books, book chapters and website-books from zotero -->
getBooks();

async function getBooks() {

            // <!-- download data en wacht tot het er ook echt is -->
            let uri = 'https://api.zotero.org/users/6167652/publications/items?v=3&format=json&include=bib&linkwrap=1&itemType=book || thesis || bookSection || webpage&sort=date&style=apa';
            let url =  encodeURI(uri);   
            let response = await fetch(url);

				if (response.ok) { // if HTTP-status is 200-299
				  // get the response body (the method explained below)
				  var bookpubjson = await response.json();
			
            
					for (i = 0; i < bookpubjson.length; i++) {            		
						document.getElementById("books").innerHTML += bookpubjson[i].bib
					}
				
				document.getElementById("totalbooks").innerHTML += bookpubjson.length

				} else {
				  alert("HTTP-Error: " + response.status);
			}
            // <!-- data is er, en doe er nu dingen mee -->
}


getMagazines();

async function getMagazines() {

            // <!-- download data en wacht tot het er ook echt is -->
            let url = 'https://api.zotero.org/users/6167652/publications/items?v=3&format=json&include=bib&linkwrap=1&itemType=magazineArticle&sort=date&style=apa';
            let response = await fetch(url);

				if (response.ok) { // if HTTP-status is 200-299
				  // get the response body (the method explained below)
				  var magpubjson = await response.json();
			
            
					for (i = 0; i < magpubjson.length; i++) {            		
						document.getElementById("magazine").innerHTML += magpubjson[i].bib
					}
				
				document.getElementById("totalmags").innerHTML += magpubjson.length		 
				
				} else {
				  alert("HTTP-Error: " + response.status);
			}
            // <!-- data is er, en doe er nu dingen mee -->
}
