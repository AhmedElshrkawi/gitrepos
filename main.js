

// main varibles
let theInput = document.querySelector(".get-repos input");

let getButton = document.querySelector('.get-button');

let reposData = document.querySelector('.show-data');

getButton.onclick = function(){
    getRepos();
}
// get repos functhion

function getRepos(){

    //  console.log('function get repos');
    if(theInput.value == ""){ // if value is empty

     reposData.innerHTML = "<span>plesase write Github Username.</span>";

    }else{
   
         fetch(`https://api.github.com/users/${theInput.value}/repos`)
        
         .then((res) =>{
            return res.json();
         })
         .then((repos) =>{

        // 
        reposData.innerHTML = "";

        // loop on Reposeltes

        reposiTories.forEach(repo =>{
          // create teh Main Div
          var mainDiv = document.createElement('div');

          // craet repo name  text
          let repoName = document.createTextNode(repo.name);

          /// append the text to Main Div
          mainDiv.appendChild(repoName);
          
          /// get link repo
           var teheUrl = document.createElement('a');
       
        // create repo url text;
        let theUrlText = document.createTextNode('Visit');

        // Append the url text
        teheUrl.appendChild(theUrlText)

        // Add the hypertext 
        teheUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

        // open link on new pgae
         
        teheUrl.setAttribute('target', '_blank');

        // append url to main dive
         
        mainDiv.appendChild(teheUrl);

        // create start count span

        let startSpan = document.createElement("span");


        // create the start count text;
        var startText  = document.createTextNode('Stars ${repo.stargazros_count}');

        //Add start count 
        startSpan.appendChild(startText);
        //   APPEND STERTS COUNT SPAN
         mainDiv.appendChild(startSpan);

         // add class on main div
         mainDiv.className = 'repo-box';


          // append the main div to container

          reposData.appendChild(mainDiv);

        });
            
       

         });
    }
}