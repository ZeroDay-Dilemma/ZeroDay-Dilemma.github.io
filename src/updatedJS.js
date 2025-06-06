// var env = "production"; // Set to "production" or "development" based on your environment
var env = "production";
// var env = "development";
if (env === 'production') {
  console.log = function () {};
  //override new Date() to just return new Date("2025-04-09T22:15:00");
}

const socialIcons = {
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill-rule="nonzero" d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.482 47.121-.092 85.407 38.029 85.499 85.159.091 47.13-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.092c.141 72.602 59.106 131.327 131.69 131.185 72.592-.14 131.35-59.089 131.209-131.691-.141-72.577-59.114-131.336-131.715-131.194-72.585.141-131.325 59.114-131.184 131.7zm237.104-137.092c.033 16.954 13.817 30.682 30.772 30.649 16.961-.034 30.689-13.811 30.664-30.765-.033-16.954-13.818-30.69-30.78-30.656-16.962.033-30.689 13.818-30.656 30.772zm-208.696 345.4c-24.958-1.086-38.511-5.234-47.543-8.709-11.961-4.628-20.496-10.177-29.479-19.093-8.966-8.951-14.532-17.461-19.202-29.397-3.508-9.033-7.73-22.569-8.9-47.527-1.269-26.983-1.559-35.078-1.683-103.433-.133-68.338.116-76.434 1.294-103.441 1.069-24.941 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.478 8.949-8.983 17.459-14.532 29.403-19.202 9.025-3.526 22.561-7.715 47.511-8.9 26.998-1.278 35.085-1.551 103.423-1.684 68.353-.133 76.448.108 103.456 1.294 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.145 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.413 3.524 8.999 7.714 22.552 8.892 47.494 1.285 26.998 1.576 35.094 1.7 103.432.132 68.355-.117 76.451-1.302 103.442-1.087 24.957-5.226 38.52-8.709 47.56-4.629 11.953-10.161 20.488-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.56-103.448 1.684-68.338.133-76.424-.124-103.431-1.294zM149.977 1.773c-27.239 1.286-45.843 5.648-62.101 12.019-16.829 6.561-31.095 15.353-45.286 29.603C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.548 1.302 27.231 5.649 45.827 12.019 62.092 6.569 16.83 15.353 31.089 29.611 45.289 14.25 14.2 28.55 22.918 45.404 29.438 16.282 6.294 34.902 10.583 62.15 11.777 27.305 1.203 36.022 1.468 105.521 1.336 69.532-.133 78.25-.44 105.555-1.734 27.239-1.302 45.826-5.664 62.1-12.019 16.829-6.585 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.404 6.304-16.282 10.592-34.904 11.777-62.134 1.195-27.323 1.478-36.049 1.344-105.557-.133-69.516-.447-78.225-1.741-105.522-1.294-27.256-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.08-29.602-45.288-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.304-34.903-10.6-62.15-11.778C333.747.164 325.03-.101 255.506.031c-69.507.133-78.224.431-105.529 1.742z"/></svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zm-59.942 195.935a161.34 161.34 0 0 1-47.079 12.85c16.914-10.086 29.894-26.22 36.095-45.413-15.862 9.39-33.473 16.287-52.087 19.96-15.048-15.92-36.343-25.83-59.942-25.83-45.331 0-82.04 36.685-82.04 82.016 0 6.355.685 12.626 2.09 18.674-68.186-3.484-128.647-36.13-169.148-85.785a82.08 82.08 0 0 0-11.126 41.245c0 28.465 14.457 53.623 36.485 68.257-13.465-.39-26.068-4.11-37.206-10.205v1.04c0 39.756 28.3 72.969 65.86 80.48a82.817 82.817 0 0 1-21.627 2.883c-5.291 0-10.405-.52-15.472-1.477 10.453 32.587 40.713 56.351 76.642 57-28.134 22.04-63.473 35.163-101.954 35.163-6.65 0-13.134-.39-19.606-1.146 36.39 23.362 79.524 36.85 125.872 36.85 150.935 0 233.507-125.056 233.507-233.494 0-3.603-.06-7.122-.236-10.654 16.027-11.457 29.965-25.937 40.925-42.378l.048-.036z"/></svg>`,
  youtube: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 86.43"><defs><style>.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#fff;}</style></defs><title>black-and-white-youtube</title><path class="cls-1" d="M121.63,18.65s-1.2-8.47-4.9-12.19c-4.67-4.89-9.91-4.92-12.31-5.21C87.24,0,61.43,0,61.43,0h0s-25.8,0-43,1.25c-2.4.29-7.63.31-12.31,5.21C2.4,10.18,1.22,18.65,1.22,18.65A187.15,187.15,0,0,0,0,38.55v9.31a187.65,187.65,0,0,0,1.22,19.9S2.42,76.23,6.09,80c4.68,4.9,10.82,4.74,13.57,5.26,9.83.94,41.78,1.22,41.78,1.22s25.83,0,43-1.27c2.41-.29,7.64-.32,12.32-5.21,3.69-3.72,4.89-12.2,4.89-12.2a187.15,187.15,0,0,0,1.22-19.9V38.54a189.26,189.26,0,0,0-1.25-19.9Z"/><polygon class="cls-2" points="48.71 59.16 48.71 24.63 81.9 41.95 48.71 59.16 48.71 59.16"/></svg>`,
  linktree: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>share-round</title><path class="cls-1" d="M61.44,0A61.46,61.46,0,1,1,18,18,61.23,61.23,0,0,1,61.44,0ZM76,32.62A11.81,11.81,0,1,1,68.45,53.5L52.76,60q.08.68.09,1.35L69.16,68.9a11.76,11.76,0,1,1-4.66,6.92L50,69.15c-7.08,8.27-20.8,3.31-20.8-7.68A11.83,11.83,0,0,1,49,52.71l15.4-6.43A11.81,11.81,0,0,1,76,32.62Z"/></svg>`,
  letterboxd: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="dark-grey"/><circle cx="16" cy="32" r="12" fill="orange"/><circle cx="32" cy="32" r="12" fill="#99cc66"/><circle cx="48" cy="32" r="12" fill="#6699cc"/></svg>`,
  spotify: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 511.992"><path fill-rule="nonzero" d="M255.998.004C114.617.004 0 114.616 0 255.998c0 141.385 114.617 255.994 255.998 255.994C397.395 511.992 512 397.387 512 255.998 512 114.624 397.395.015 255.994.015l.004-.015v.004zm117.4 369.22c-4.585 7.519-14.426 9.907-21.949 5.288-60.104-36.715-135.771-45.028-224.882-24.669-8.587 1.955-17.146-3.425-19.104-12.015-1.966-8.59 3.394-17.149 12.004-19.104 97.517-22.28 181.164-12.687 248.644 28.551 7.523 4.615 9.907 14.427 5.287 21.949zm31.335-69.704c-5.779 9.389-18.067 12.353-27.452 6.578-68.813-42.297-173.703-54.547-255.096-29.837-10.556 3.188-21.704-2.761-24.906-13.298-3.18-10.556 2.772-21.68 13.309-24.89 92.971-28.209 208.551-14.546 287.575 34.015 9.385 5.778 12.349 18.066 6.574 27.44v-.004l-.004-.004zm2.692-72.583c-82.51-49.006-218.635-53.511-297.409-29.603-12.649 3.836-26.027-3.302-29.859-15.955-3.833-12.657 3.302-26.024 15.959-29.868 90.428-27.452 240.753-22.149 335.747 34.245 11.401 6.755 15.133 21.447 8.375 32.809-6.728 11.378-21.462 15.13-32.802 8.372h-.011z"/></svg>`
};


function decodeName(encodedName, key) {
  // Decode the Base64 string
  const encodedBytes = Uint8Array.from(atob(encodedName), c => c.charCodeAt(0));

  // Convert key to byte array
  const keyBytes = new TextEncoder().encode(key);

  // XOR each byte of the encoded name with the corresponding byte of the key
  const decodedBytes = encodedBytes.map((byte, i) => byte ^ keyBytes[i % keyBytes.length]);

  // Convert the byte array back to a string
  return new TextDecoder().decode(decodedBytes);
}


function getDaySchedule() {
  console.log("attempting schedule!");
  const DECODE_KEY = "IHEARTWILLTOLEDO!!!!";
    var now = new Date();
    var day = now.getDay();
    var hour = now.getHours();
    var minute = now.getMinutes();

    //example demodate for 12:30 on a monday
    //new Date("2025-02-21T12:30:00");
    //DATE NEW DATE EXMAPLE DATE
    var time = hour + ":" + minute;
    var dayString = "";
    switch (day) {
      case 0:
        dayString = "Sunday";
        break;
      case 1:
        dayString = "Monday";
        break;
      case 2:
        dayString = "Tuesday";
        break;
      case 3:
        dayString = "Wednesday";
        break;
      case 4:
        dayString = "Thursday";
        break;
      case 5:
        dayString = "Friday";
        break;
      case 6:
        dayString = "Saturday";
        break;
    }
    //iterate through the json and load all shows with broadcastTime.dayOfWeek == dayString
    var showsToday = [];
    for (var i = 0; i < DJ_JSON.length; i++) {
      if (DJ_JSON[i].broadcastTime.dayOfWeek == dayString) {
        showsToday.push(DJ_JSON[i]);
      }
    }

    //sort shows in showsToday by start time
    showsToday.sort(function (a, b) {
      var aTime = a.broadcastTime.startTime.split(":");
      var bTime = b.broadcastTime.startTime.split(":");
      var aHour = parseInt(aTime[0]);
      var bHour = parseInt(bTime[0]);
      var aMinute = parseInt(aTime[1]);
      var bMinute = parseInt(bTime[1]);

      if (aHour === bHour) {
        return aMinute - bMinute;
      } else {
        return aHour - bHour;
      }
  });

  // convert to a string in the formt of
  // [Time in 12 hour format] - [show name] ([host name])
  var scheduleString = "";
  for (var i = 0; i < showsToday.length; i++) {
    var show = showsToday[i];
    var startTime = show.broadcastTime.startTime;
    var hostNames = show.hostNames;
    var showName = show.showName;
    //if showname contains %26 replace with &
    showName = showName.replace("%26", "&");
    var hosts = "";
    for (var j = 0; j < hostNames.length; j++) {
      let decodedName = decodeName(hostNames[j], DECODE_KEY);
      if (decodedName.endsWith(".")) {
      decodedName = decodedName.slice(0, -3); // Remove last initial and period
      }
      hosts += decodedName;
      
      if (j < hostNames.length - 1) {
      hosts += ", ";
      }
    }
    //convert to 12 hour time
    var timeParts = startTime.split(":");
    var hour = parseInt(timeParts[0]);
    var minute = timeParts[1];
    var ampm = "AM";
    if (hour > 12) {
      hour -= 12;
      ampm = "PM";
    }
    startTime = hour + ":" + minute;

    scheduleString += startTime + " " + showName + " (" + hosts + ")";
    if (i < showsToday.length - 1) {
      scheduleString += "\n";
    }
  }

  console.log(scheduleString);  

  // merge all hostNames into one string, decode too


  //
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(scheduleString);
    return;
  }
  navigator.clipboard.writeText(scheduleString).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
function fallbackCopyTextToClipboard(text){
  
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);

}


//function override css passed by id and translate them up by -40%
function overrideCSS(id) {
  var element = document.getElementById(id);
  element.style.transform = "translateY(-60%)";
  //remove animation from class so it does not move back down
  //by overriding the css

  element.style.animation = "none";
}


//demo diff dj loads
var CurrDJDemo = 0;
function demoDJs(whichDJ = -1) {
  //-1 = cycle,
  //0-4 = specific DJ
  // getDJ();
  // getDJ(new Date("2025-03-03T22:00:00"));  //no dj
  // getDJ(new Date("2025-03-03T21:00:00"));  //dj with pfp
  // getDJ(new Date("2025-03-03T12:30:00"));  //dj with no pfp
  // getDJ(new Date("2025-03-07T15:30:00"));  //fast minute (long dj list)
  // getDJ(new Date("2025-03-27T21:00:00"));  //jenny (ampersand title!)
  if (whichDJ === -1) {
    CurrDJDemo++;
    if (CurrDJDemo > 4) {
      CurrDJDemo = 0;
    }
    whichDJ = CurrDJDemo;
  }

  switch (whichDJ) {
    case 0:
      getDJ();
      console.log("Selecting live DJ");
      break;
    case 1:
      getDJ(new Date("2025-03-03T22:00:00"));
      console.log("no dj");
      break;
    case 2:
      getDJ(new Date("2025-03-03T21:00:00"));
      console.log("dj with pfp");
      break;
    case 3:
      getDJ(new Date("2025-03-03T12:30:00"));
      console.log("dj with no pfp");
      break;
    case 4:
      getDJ(new Date("2025-03-07T15:30:00"));
      console.log("fast minute (long dj list)");
      break;
  }
}

function animateDJCycle() {
  //cycle them on loop
  let demoIndex = 2;
  const demoInterval = setInterval(() => {
    demoDJs(demoIndex);
    demoIndex++;
    if (demoIndex > 4) {
      demoIndex = 2;
    }
  }, 5000);
  
  // Cleanup interval to prevent memory leaks
  window.addEventListener("beforeunload", () => {
    clearInterval(demoInterval);
  });
} 
let  imageElementaaa = document.querySelector(".radioco-image");
if (imageElementaaa) {
  const trackTitle = document.getElementsByClassName("radioco-nowPlaying")[0].textContent;
  imageElementaaa.setAttribute("alt", "album art for the playing track: " + trackTitle);
}
  document.addEventListener("DOMContentLoaded", function () {
      if (window.innerWidth < 600) {
        let player = document.querySelector(".radioplayer");
        let playButton = document.querySelector(".radioco-playButton");
        let image = document.querySelector(".radioco-image");

        if (player && playButton && image) {
            // Create a wrapper div for the image and play button
            let headerDiv = document.createElement("div");
            headerDiv.classList.add("radioco-header");

            // Append the image and play button to the new div
            headerDiv.appendChild(image);
            headerDiv.appendChild(playButton);
            let spacer = document.createElement("div");
            //make an invible spacer that is the exact same size as the image
            spacer.style.width = "60px";
            spacer.style.height = "60px";
            //no padding or margin
            spacer.style.margin = "0px -10px 0px 0px";
            spacer.style.padding = "0px";
            headerDiv.appendChild(spacer);
            // Insert the header div at the top of the radio player
            player.prepend(headerDiv);
        }
      }
      
  });


document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
const infoDiv = document.querySelector(".radioco-information");
if (infoDiv) {
  const linkDiv = document.createElement("div");
  linkDiv.className = "linkToSite";
  linkDiv.style.textAlign = "center";
  linkDiv.style.marginTop = "10px";

  const link = document.createElement("a");
  link.href = "https://sites.google.com/umbc.edu/wmbc";
  link.target = "_blank";
  link.className = "listen-link";
  link.textContent = "--> Listen On Official Site Here <--";

  linkDiv.appendChild(link);
  infoDiv.appendChild(linkDiv);
}
  if (window.innerWidth < 768) {
    if(false){
      const radioImage = document.querySelector(".radioco-image");

      if (playButton && radioImage) {
        // Create a new div to hold the play button and image
        const playImageContainer = document.createElement("div");
        playImageContainer.className = "play-image-container";

        // Move the image and play button into the new container
        playImageContainer.appendChild(radioImage);
        playImageContainer.appendChild(playButton);

        // Append the new container to the radioplayer div
        radioPlayerDiv.appendChild(playImageContainer);
      }
      //now move the radioco-information div to the end of the radioplayer div
      const infoDiv = document.querySelector(".radioco-information");
      if (infoDiv) {
        radioPlayerDiv.appendChild(infoDiv);
      }
      
    }
  }
  //from socialIcons
  // document.getElementById("instagram").innerHTML = socialIcons.instagram;
  // document.getElementById("facebook").innerHTML = socialIcons.facebook;
  // document.getElementById("linktree").innerHTML = socialIcons.linktree;
  const selectedShowName = event.target.value;
  //get url and split after "baseDJPage.html"
  const url = window.location.href;
  var urlParts = "";
  // url.split("radio_listener.html");
  if (url.includes("radio_listener.html")) {
    urlParts = url.split("radio_listener.html");
  } else {
    urlParts = url.split("baseDJPage.html");
  }
  console.log(urlParts);
  //if it is ?=clock, use the time class and append header 
  //with a clock that updates every minute
  if (urlParts[1] === "?=clock") {
    //replace the header with a clock
    document.querySelector("header").innerHTML += "<h1 id='clock' style='font-size:30px'></h1>";
    //update the clock every minute
    var now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setInterval(() => {
      now.setMinutes(now.getMinutes() + 1);
      document.getElementById("clock").textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }, 60000);

    // Check for desync every 30 minutes
    setInterval(() => {
      now = new Date();
      document.getElementById("clock").textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }, 1800000);
    return;
  }

  
  if (urlParts[1] === "?=yass") {
    //add button and a text area uneditable, 
    //click button and the number adds 1 to current counter in text area
    //save to local storage
    //also load from local storage if exists
    //if it does not exist, set to 0

    //button
    var button = document.createElement("button");
    button.textContent = "Hit the Yass button!";
    button.style.fontSize = "20px";
    button.style.padding = "10px";
    button.style.margin = "10px";
    button.style.borderRadius = "10px";
    button.style.backgroundColor = "var(--Gold)";

    //text area
    var textArea = document.createElement("textarea");
    textArea.style.width = "20%";
    textArea.style.height = "100px";
    textArea.style.fontSize = "20px";
    textArea.style.padding = "10px";
    textArea.style.margin = "10px";
    textArea.style.borderRadius = "10px";
    textArea.style.backgroundColor = "var(--Gold)";
    textArea.readOnly = true;

    //add button and text area to the body
    document.querySelector("header").appendChild(button);
    document.querySelector("header").appendChild(textArea);

    //load from local storage
    var yassCount = localStorage.getItem("yassCount");
    if (yassCount === null) {
      yassCount = 0;
    }
    textArea.textContent = yassCount;
    //add event listener to button
    button.addEventListener("click", function () {
      yassCount++;
      textArea.textContent = yassCount;
      localStorage.setItem("yassCount", yassCount);
    });
    return;




  }
});



//event listener for div radioco-playButton's child
//if = radioco-playButton-paused, apply moveItMoveIt, else remove it
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".radioco-playButton").addEventListener("click", function () {
    if (document.querySelector(".radioco-playButton-playing")) {
      document.querySelector(".over").classList.add("moveItMoveIt");
    } else {
      document.querySelector(".over").classList.remove("moveItMoveIt");
    }
    // Cleanup to prevent memory leaks
    window.addEventListener("beforeunload", () => {
      playButton.removeEventListener("click", toggleMoveItMoveIt);
    });
  });
});


function fetchAndDisplayTracks() {


  
  const url = "https://public.radio.co/stations/s7a5fb9da6/history";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const tracks = data.tracks;
      const trackList = document.querySelector(".track-list ul");
      trackList.innerHTML = "";

      var addedSongs = []; //prevent duplicates for 
      
      tracks.forEach((track) => {
        if (addedSongs.includes(track.title)) {
          //SKIP to next iteration if song is already added
          return;
        }
        //SKIP IF CURRENTLY PLAYING
        // if (track.title === document.querySelector(".radioco-nowPlaying").textContent) {
        //   return;
        // }
        addedSongs.push(track.title);
        const li = document.createElement("li");
        li.innerHTML = `
      <img src="${track.artwork_url}" alt="${track.title}" width="50" height="50">
      <div class="prev-info-div">
      <span>${track.title}</span>
      
      </div>
    `;
        //<span class="time">${new Date(track.start_time).toLocaleTimeString()}</span>
        li.classList.add("prev-info-li");
        trackList.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error fetching track history:", error);
    });
  console.log("maybe??");

  // remove old tracks (anything more than 15)
  const trackList = document.querySelector(".track-list ul");
  const trackItems = trackList.querySelectorAll("li");
  if (trackItems.length > 20) {
    for (let i = 0; i < trackItems.length - 20; i++) {
      trackList.removeChild(trackItems[i]);
    }
  }

}



//TODO: FIX ME. Does not work



function checkNowPlayingUpdate() {
  const nowPlayingElement = document.querySelector(".radioco-nowPlaying");
  let lastTrack = nowPlayingElement ? nowPlayingElement.textContent : null;

  setInterval(() => {
    if (nowPlayingElement && nowPlayingElement.textContent !== lastTrack) {
      lastTrack = nowPlayingElement.textContent;
      fetchAndDisplayTracks();
    }
  }, 50000); // Check every 50 seconds
}



document.addEventListener("DOMContentLoaded", () => {
  fetchAndDisplayTracks();
  checkNowPlayingUpdate();
  document.getElementById("addClock").addEventListener("click", addClock);
  var firstRecord = document.getElementById('firstRecord');

  // firstRecord.addEventListener('mouseenter', () => {
  //   console.log("hovered");
  //   var currentTranslate = getComputedStyle(firstRecord).transform;
  //   var translateYValue = currentTranslate === 'none' ? 0 : parseFloat(currentTranslate.split(',')[5]);

  // });

  // firstRecord.addEventListener('mouseleave', () => {
  //   console.log("hovered");
  //   var currentTranslate = getComputedStyle(firstRecord).transform;
  //   var translateYValue = currentTranslate === 'none' ? 0 : parseFloat(currentTranslate.split(',')[5]);
  //   console.log(translateYValue);

  // });


});



async function updateTrackTitle() {
  //set track to the website title
  const nowPlayingElement = document.querySelector(".radioco-nowPlaying");
  if (nowPlayingElement) {
    document.title = nowPlayingElement.textContent + " | WMBC Radio";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let volumeSlider = document.querySelector(".radioco-volume");
  volumeSlider.setAttribute("aria-label", "Volume Slider");
  const nowPlayingElement = document.querySelector(".radioco-nowPlaying");

  if (nowPlayingElement) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" || mutation.type === "characterData") {
          updateTrackTitle();
        }
        // add alt text to the radioco-image element
        if (imageElementaaa) {
          const trackTitle = document.getElementsByClassName("radioco-nowPlaying")[0].textContent;
          imageElementaaa.setAttribute("alt", "album art for the playing track: " + trackTitle);
        }
      });
    });

    observer.observe(nowPlayingElement, {
      childList: true,
      characterData: true,
      subtree: true,
    });

    // Initial call to set the title on page load
    updateTrackTitle();
  }
});

const now = new Date();
const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0, 0);
const timeUntilNextHour = nextHour - now;

// Set a timeout to run the function at the start of the next hour
setTimeout(() => {
  console.log("Starting DJ check");
  getDJ();
  // Set an interval to run the function every hour after that
  setInterval(getDJ, 60 * 60 * 1000);
}, timeUntilNextHour);


//run a getDJ 10 seconds after the page loads just in case the page loads at the start of a show
setTimeout(() => {
  getDJ();
}, 3000); //ON START 10 seconds load getDJ
class TrackTimer {
  constructor() {
    this.currentTrack = null;
    this.timerInterval = null;
    this.elapsedTimeElement = null;
    this.nowPlayingElement = document.querySelector(".radioco-nowPlaying");
    this.startButton = document.getElementById("startTimerButton");
  }

  async fetchTrackStatus() {
    const url = "https://public.radio.co/stations/s7a5fb9da6/status";
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.current_track;
    } catch (error) {
      console.error("Error fetching track status:", error);
      return null;
    }
  }
  //lowkey did not write any of this i cannot stand js formatting shit
  calculateElapsedTime(startTime) {
    const start = new Date(startTime).getTime();
    const now = new Date().getTime();
    const elapsedSeconds = Math.floor((now - start) / 1000);
    return this.formatTime(elapsedSeconds);
  }
  formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  updateElapsedTime(startTime) {
    if (!this.elapsedTimeElement) return;
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      const elapsedTime = this.calculateElapsedTime(startTime);
      this.elapsedTimeElement.textContent = elapsedTime;
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
  async init() {
    const track = await this.fetchTrackStatus();
    if (!track) return;
    this.updateElapsedTime(track.start_time);
    console.log(track);
    console.log("DO IT");
    //set track to the website title
    document.title = track.title;
  }
  watchNowPlaying() {
    if (!this.nowPlayingElement) return;
    //only update on song name change so i dont get banned from calling the api LMFAOO this shit is so ass :sob:
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" || mutation.type === "characterData") {
          this.init();
        }
      });
    });

    observer.observe(this.nowPlayingElement, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const trackTimer = new TrackTimer();
  const startButton = trackTimer.startButton;
  if (startButton) {
    startButton.style.display = "block";
    startButton.addEventListener("click", () => {
      var durationPlayed = document.querySelector(".radioco-elapsedTime");
      durationPlayed.remove();
      if (!trackTimer.elapsedTimeElement) {
        trackTimer.elapsedTimeElement = document.createElement("span");
        trackTimer.elapsedTimeElement.className = "custom-elapsed-time";
        trackTimer.elapsedTimeElement.textContent = "00:00:00";
        document.querySelector(".radioco-information").appendChild(trackTimer.elapsedTimeElement);
      }
      trackTimer.init();
      trackTimer.watchNowPlaying();
      //startButton.style.display = "none";
    });
  }
});




var DJ_JSON;
// document.addEventListener("DOMContentLoaded", function () {
//   //Fetch data
//   fetch('./src/showDB_Obscured_encoded.json')
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       DJ_JSON = json;
//       loadSpecialtyShows();
//       getDJ();

//     })
// });

fetch('./src/showDB_Obscured_encoded.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    DJ_JSON = json;

    fullInitSync();
    loadSpecialtyShows();
    getDJ();
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });


async function fullInitSync() {

  await loadSpecialtyShows();
  await getDJ();



}



function addCurrentDJInfo(show, onDeck=false){
  // alert(show.showName);

  //Current-OnDeck inner text
  //if onDeck is true, set to "Up Next at (HOUR): (show name)"
  //else set to "Current DJ(s): ""
  const DECODE_KEY = "IHEARTWILLTOLEDO!!!!";
  console.log("there is a live DJ!");
  // merge all hostNames into one string, decode too
  var hostNames = "";
  var currShowName = show.showName;
  var isStandard = show.standardShow;
  for (let i = 0; i < show.hostNames.length; i++) {
    if(isStandard){
      hostNames += decodeName(show.hostNames[i], DECODE_KEY);
    }
    else{
      hostNames += show.hostNames[i];
    }
    if (i === show.hostNames.length - 2) {
      hostNames += ", and ";
    } else if (i < show.hostNames.length - 2) {
      hostNames += ", ";
    }
  }

  //replace the headerlogo with the live gif
  // document.querySelector(".logo-circle img").src = "media/1200w/Artboard   .gif"

  // document.getElementById("currDJSpan").textContent = hostNames;
  document.querySelector(".current-DJ").style.display = "flex";
  document.querySelector(".Show-Info-up-next").style.display = "";
  console.log(document.querySelector("#Current-OnDeck"));
  if(onDeck){
    //convert show hour in 24 hour in format 13:00 to 1:00 PM

    console.log(show);
    var showTime = show.broadcastTime.startTime.split(":");
    var hour = parseInt(showTime[0]);
    var minute = showTime[1]; 
    var ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    var showTimeStr = hour + ":" + minute + " " + ampm;
    document.querySelector("#Current-OnDeck").innerHTML = "Up Next at " + showTimeStr + ": " + show.showName;
    //add class to make text bigger
    document.querySelector("#Current-OnDeck").classList.add("upNextText");
  }
  else{

    document.getElementById("Current-OnDeck").innerHTML = 'Current DJ(s): <span id="currDJSpan"></span>';
    document.getElementById("currDJSpan").textContent = hostNames;
    //remove .upNextText class
    document.querySelector("#Current-OnDeck").classList.remove("upNextText");
  }
  //set current-DJ display: not none

  //add .djInfo-margin-fix to .djInfo to fix the margin
  document.querySelector(".djInfo").classList.add("djInfo-margin-fix");
  // add link to show page. which is baseDJPage?showName=show.showName
  console.log("currShowName: " + currShowName);
  //check if the link already exists
  if (document.getElementById("showPageLink")) {
    document.getElementById("showPageLink").remove();
  }
  var newLinkElem = document.createElement("a");
  newLinkElem.id = "showPageLink";
  newLinkElem.textContent = "More Info!";
  //encode the show name
  currShowName = encodeURI(currShowName);
  // set it to changeToShowPage(currShowName) on click
  // newLinkElem.onclick = "changeToShowPage(" + currShowName + ")";
  // alert("show na aaa me: " + currShowName);
  if(!EVENT_FLAG){
    document.getElementsByClassName("current-DJ")[0].appendChild(newLinkElem);
    document.getElementById("showPageLink").addEventListener("click", function() {
      changeToShowPage(currShowName);
    });
  }


  // alert("test test test");
  // if we have a dj, replace the info with the live dj info
  // <div id="showInfoBox">
  // <h2 id="titleShowInfoBox"></h2>
  // <p id="descShowInfoBox"></p>


  //hide this if onDeck is true
  
  if (onDeck) {
    document.querySelector(".Show-Info-up-next").style.display = "none";
    if(EVENT_FLAG === false){
      document.querySelector("#showPageLink").style.display = "none";
    }
  }
  else{
    document.querySelector(".Show-Info-up-next").style.display = "";
    if(EVENT_FLAG === false){
      document.querySelector("#showPageLink").style.display = "";
    }
    
  }
  
  document.getElementById("titleShowInfoBox").textContent = show.showName;
  document.getElementById("descShowInfoBox").textContent = show.showBlurb;
  if (show.image === "") {
    document.getElementById("showImageSpot").src =
      "imgs/wmbc/logo-text-225x255.png";
  }
  else {
    document.getElementById("showImageSpot").src = show.image;
  }
  // document.getElementById("showImageSpot").src = show.image;
  document.getElementById("showImageSpot").style.display = "";

  //document.getElementById("currDJSpan").href = "baseDJPage?showName=" + show.showName;
  return true;
}
// function determineOnDeckDJ(shows) {
  
// }
var EVENT_FLAG = false;

function getSpecialEventDJ(demoDate = "BAH") {
  var now = new Date();
  var day = now.getDay();
  var hour = now.getHours();
  var minute = now.getMinutes();
  console.log(demoDate);
  if (demoDate !== "BAH") {
    console.log("demo date");
    now = new Date(demoDate);
    day = now.getDay();
    hour = now.getHours();
    minute = now.getMinutes();
  }

  var time = hour + ":" + minute;
  var dayString = "";
  switch (day) {
    case 0:
      dayString = "Sunday";
      break;
    case 1:
      dayString = "Monday";
      break;
    case 2:
      dayString = "Tuesday";
      break;
    case 3:
      dayString = "Wednesday";
      break;
    case 4:
      dayString = "Thursday";
      break;
    case 5:
      dayString = "Friday";
      break;
    case 6:
      dayString = "Saturday";
      break;
  }

  // Filter shows for today
  var showsToday = DJ_JSON.filter(show => show.broadcastTime.dayOfWeek === dayString);

  // Sort shows by start time
  showsToday.sort(function (a, b) {
    var aTime = a.broadcastTime.startTime.split(":");
    var bTime = b.broadcastTime.startTime.split(":");
    var aHour = parseInt(aTime[0]);
    var bHour = parseInt(bTime[0]);
    var aMinute = parseInt(aTime[1]);
    var bMinute = parseInt(bTime[1]);

    if (aHour === bHour) {
      return aMinute - bMinute;
    } else {
      return aHour - bHour;
    }
  });

  console.log("shows today");
  console.log(showsToday);

  // Prioritize non-standard shows
  var prioritizedShows = showsToday.filter(show => !show.standardShow);
  var remainingShows = showsToday.filter(show => show.standardShow);
  showsToday = [...prioritizedShows, ...remainingShows];

  // Iterate through the shows and find the one that is currently playing
  for (let show of showsToday) {
    const runHour = parseInt(show.broadcastTime.startTime.split(":")[0]);
    const runMinutes = parseInt(show.broadcastTime.startTime.split(":")[1]);
    const runDuration = show.broadcastTime.durationMinutes;

    const endHour = (runHour + Math.floor(runDuration / 60)) % 24;
    const endMinutes = (runMinutes + runDuration % 60) % 60;

    if (hour < runHour) {
      console.log("upcoming show");
      console.log(show);
      return addCurrentDJInfo(show, true);
      
    }
    if (hour >= runHour && hour < endHour) {
      if (hour === endHour && minute > endMinutes) {
        continue;
      }
      if(EVENT_FLAG === true){
        if(show.standardShow === false){
          return addCurrentDJInfo(show);
        }
      }
      else{
        return addCurrentDJInfo(show);
      }
    }
  }

  console.log("no live DJ");
  document.querySelector(".current-DJ").style.display = "none";
  document.getElementById("titleShowInfoBox").innerText = "";
  document.getElementById("descShowInfoBox").innerText = "";
  document.querySelector(".Show-Info-up-next").style.display = "none";
  document.querySelector(".djInfo").classList.remove("djInfo-margin-fix");
}

//in the format of new Date("2025-02-21T12:30:00");
// write the date for wednesday at 12:30 PM
//new Date("2025-02-21T12:30:00");
async function getDJ(demoDate = "BAH") {
  if(EVENT_FLAG) {
    getSpecialEventDJ(demoDate);
    return;
  }
  
  var now = new Date();
  var day = now.getDay();
  var hour = now.getHours();
  var minute = now.getMinutes();
  console.log(demoDate);
  if (demoDate !== "BAH") {
    console.log("demo date");
    now = new Date(demoDate);
    day = now.getDay();
    hour = now.getHours();
    minute = now.getMinutes();
  }
  //example demodate for 12:30 on a monday
  //new Date("2025-02-21T12:30:00");
  //DATE NEW DATE EXMAPLE DATE
  var time = hour + ":" + minute;
  var dayString = "";
  switch (day) {
    case 0:
      dayString = "Sunday";
      break;
    case 1:
      dayString = "Monday";
      break;
    case 2:
      dayString = "Tuesday";
      break;
    case 3:
      dayString = "Wednesday";
      break;
    case 4:
      dayString = "Thursday";
      break;
    case 5:
      dayString = "Friday";
      break;
    case 6:
      dayString = "Saturday";
      break;
  }
  //iterate through the json and load all shows with broadcastTime.dayOfWeek == dayString
  var showsToday = [];
  for (var i = 0; i < DJ_JSON.length; i++) {
    if (DJ_JSON[i].broadcastTime.dayOfWeek == dayString) {
      showsToday.push(DJ_JSON[i]);
    }
  }

  //sort shows in showsToday by start time
  showsToday.sort(function (a, b) {
    var aTime = a.broadcastTime.startTime.split(":");
    var bTime = b.broadcastTime.startTime.split(":");
    var aHour = parseInt(aTime[0]);
    var bHour = parseInt(bTime[0]);
    var aMinute = parseInt(aTime[1]);
    var bMinute = parseInt(bTime[1]);

    if (aHour === bHour) {
      return aMinute - bMinute;
    } else {
      return aHour - bHour;
    }
  });

  console.log("shows today");
  console.log(showsToday);

  var showIter = 0;
  
  // Iterate through the shows and find the one that is currently playing
  for (let show of showsToday) {
    const runHour = parseInt(show.broadcastTime.startTime.split(":")[0]);
    const runMinutes = parseInt(show.broadcastTime.startTime.split(":")[1]);
    const runDuration = show.broadcastTime.durationMinutes;

    const endHour = (runHour + Math.floor(runDuration / 60)) % 24;
    const endMinutes = (runMinutes + runDuration % 60) % 60;
    //check if we've passed the current hour


    if (hour < runHour) {
      //weve passed the curernt hour, but still are in loop
      //this means theres at least 1 more show today
      //display the upcoming show 
      console.log("upcoming show");
      console.log(show)
      return addCurrentDJInfo(show, true);
    }
    if (hour >= runHour && hour < endHour) {
      if (hour === endHour && minute > endMinutes) {
        showIter++;
        continue;


      }
      //display it!
      return addCurrentDJInfo(show);
    }


    console.log("no live DJ");
    //if we have no dj, if there is another one today, display it
    //as upcoming

    // if no show is currently playing, hide the current DJ
    document.querySelector(".current-DJ").style.display = "none";

    document.getElementById("titleShowInfoBox").innerText = "";
    document.getElementById("descShowInfoBox").innerText = "";
    document.querySelector(".Show-Info-up-next").style.display = "none";
    document.querySelector(".djInfo").classList.remove("djInfo-margin-fix");
    //replace the headerlogo with the live gif
  }

  // if no show is currently playing, hide the current DJ
  document.querySelector(".current-DJ").style.display = "none";

  /*
    "broadcastTime": {
      "dayOfWeek": "Monday",
      "startTime": "17:00",
      "durationMinutes": 60
    },
  */



}



// SCHEDULE CODE 100% PORTED NO EDITS

const dayToIndex = {
  "Sunday": 0,
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6
};

//add function so when its viewed on mobile, the day titles are replaced
//with abbreviations, and the cells are elongated
document.addEventListener("DOMContentLoaded", function () {
  const dayTitles = document.querySelectorAll(".calendar thead th");
  const dayCells = document.querySelectorAll(".calendar tbody tr td");
  // if (window.innerWidth < 600) {
  if(true){
    dayTitles.forEach((title, i) => {
      if (title.textContent !== "Time") {
        title.textContent = title.textContent.slice(0, 3);
      }
    });
    dayCells.forEach(cell => {
      cell.style.width = "20%";
      //make cells taller
      cell.style.padding = "20px 0";
    });
    //remove sat/sun from the schedule, so first and last child for each row

  }
});


function decodeName(encodedName, key) {
  // Decode the Base64 string
  const encodedBytes = Uint8Array.from(atob(encodedName), c => c.charCodeAt(0));

  // Convert key to byte array
  const keyBytes = new TextEncoder().encode(key);

  // XOR each byte of the encoded name with the corresponding byte of the key
  const decodedBytes = encodedBytes.map((byte, i) => byte ^ keyBytes[i % keyBytes.length]);

  // Convert the byte array back to a string
  return new TextDecoder().decode(decodedBytes);
}

// var DJ_JSON;
// document.addEventListener("DOMContentLoaded", function () {
//   //Fetch data
//   fetch('./src/showDB_Obscured_encoded.json')
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       DJ_JSON = json;
//       loadSpecialtyShows();
//     })
// });


//is always run so 
async function loadSpecialtyShows() {
  const bkup_DJ = DJ_JSON;
  fetch('./src/specialEvents.json')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      //append to existing array of shows
      //remove the first element, which is the header
      const now = new Date();
      if (json.length === 0) {
        console.log("no special events");
        populateSchedule();
        return false; 
      }
      
      json[0].runTime.dayOfWeek = json[0].runTime.dayOfWeek.charAt(0).toUpperCase() + json[0].runTime.dayOfWeek.slice(1);
      console.log(json[0].runTime.dayOfWeek);
      if (json[0].runTime.dayOfWeek !== Object.keys(dayToIndex)[now.getDay()]) {
        console.log("not the same day, not loading specialty shows");
        console.log(json[0].runTime.dayOfWeek);
        console.log(Object.keys(dayToIndex)[now.getDay()]);
        populateSchedule();
        return;
      }
      //check if same date as today, otherwise dont load
      
      
      // json[0].runTime.dayOfWeek = json[0].runTime.dayOfWeek.charAt(0).toUpperCase() + json[0].runTime.dayOfWeek.slice(1);
      // console.log(json[0].runTime.dayOfWeek);
      // console.log(now.getDay());
      // if (json[0].runTime.dayOfWeek !== Object.keys(dayToIndex)[now.getDay()]) {
      //   console.log("not the same day, not loading specialty shows");
      //   console.log(json[0].runTime.dayOfWeek);
      //   console.log(Object.keys(dayToIndex)[now.getDay()]);
      //   populateSchedule();
      //   return;
      // }
      EVENT_FLAG = true;
      if (!json[0].hasOwnProperty("eventTitle") || !json[0].hasOwnProperty("eventDescription") || !json[0].hasOwnProperty("runTime")) {
        console.log("incorrectly formatted specialty show list!");
        DJ_JSON = bkup_DJ;
        populateSchedule();
        return false;
      }

      const eventInfoJson = json.shift();
      DJ_JSON = DJ_JSON.concat(json);

      console.log(eventInfoJson)
      console.log("passing event title to populate schedule");
      populateSchedule(eventInfoJson)
      return true;
    }).catch(error => {
      console.log(error);
      console.log("SHOULD ONLY HIT ON FAILURE");
      console.log("error loading specialty shows");

      DJ_JSON = bkup_DJ;
      populateSchedule();
      return false;
    });




}


// JavaScript to highlight the current hour
const highlightCurrentHour = () => {
  console.log("highlighting current hour");
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  //if time is outside of 11am-11pm, return
  if (currentHour < 11 || currentHour > 23) {
    console.log("outside of 11am-11pm");
    return;
  }
  // Convert current time to 12-hour format
  let displayHour = currentHour % 12 || 12;
  const ampm = currentHour >= 12 ? "PM" : "AM";
  const currentTime = `${displayHour}:00 ${ampm}`;
  const currentDay = now.getDay();
  const currentDayName = Object.keys(dayToIndex).find(key => dayToIndex[key] === currentDay);
  // Find the row with the current hour and add the "current-hour" class
  const rows = document.querySelectorAll(".calendar tbody tr");
  rows.forEach(row => {
    const hourCell = row.querySelector(".hour-mark");
    //get the current hour, and the current day of the week
    if (hourCell.textContent === currentTime) {
      hourCell.parentElement.children[currentDay + 1];
      hourCell.parentElement.children[currentDay + 1].classList.add("current-hour");
    }
  });

  //add a check to see if the current hour cell also has the class "show-cell"
  //if so, overwrite the <p> tag to read "Now Playing!"
  //wait until 
  const currentHourCell = document.querySelector(".current-hour");  if (currentHourCell) {
    console.log("current cell found");
    var classList = currentHourCell.classList
    if (classList.contains("show-cell")) {
      const showElemDiv = currentHourCell.querySelector(".showElemDiv");
      showElemDiv.children[1].innerHTML += `<br> <span style="font-weight:bold; font-size:1em">Now Playing!</span>`;
    }
  }

  // FIXME CLEARER WAY TO DO THIS. PUT AT END OF GENERTION SO IT DOESNT BREAK ANYTHING!
  // if (window.innerWidth < 600) {
  //   const rows = document.querySelectorAll(".calendar tbody tr");
  //   rows.forEach(row => {
  //     row.children[1].remove();
  //     row.children[row.children.length - 1].remove();

  //   });
  //   //remove from calendar header
  //   const header = document.querySelector(".calendar thead tr");
  //   header.children[1].remove();
  //   header.children[header.children.length - 1].remove();

  // }
};
function loadHostNamesa(hostNames, DECODE_KEY) {
  console.log("decrypting....");
  var outputNames = [];
  hostNames.forEach(name => {
    console.log(name);
    if (name) {
      //console.log(name, "todo");
      var crackedName = decodeName(name, DECODE_KEY);
      //console.log(crackedName, "todo");
      outputNames.push(crackedName);
    }
  });
  return outputNames;
}

function isEventLive(eventInfoJson, demoDate="BAH") {
  //determine if event is currently running via runTime
  // "runTime": {
  //   "dayOfWeek": "Monday",
  //   "startTime": "12:00",
  //   "durationMinutes": 660
  // } 
  var now = new Date();
  if (demoDate !== "BAH") {
    console.log("demo date");
    now = new Date(demoDate);
  }
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentDay = now.getDay();
  const currentDayName = Object.keys(dayToIndex).find(key => dayToIndex[key] === currentDay);
  const currentTime = `${currentHour}:${currentMinutes}`;
  console.log(eventInfoJson.runTime);
  const runDay = eventInfoJson.runTime.dayOfWeek;
  const runHour = eventInfoJson.runTime.startTime.split(":")[0];
  const runMinutes = eventInfoJson.runTime.startTime.split(":")[1];
  const runDuration = eventInfoJson.runTime.durationMinutes;
  // need to match day to current day and schedule time to current time
  if (runDay === currentDayName) { //same day
    //show ends at start hour + runDuration%60 (its in minutes), then also then round the remainder to 15/30/45/00 minutes
    const endHour = (parseInt(runHour) + Math.floor(runDuration / 60)) % 24;
    const endMinutes = (parseInt(runMinutes) + runDuration % 60) % 60;
    console.log("end time: ", endHour, ":", endMinutes);
    console.log(currentHour, " >=? ", parseInt(runHour), " && ", currentHour, " <? ", (parseInt(endHour)));
    if (currentHour >= parseInt(runHour) && currentHour < endHour) {
      console.log("event is live!");
      return true;
    }
  }
  console.log("event is not live");
  return false;

}
var eventInfoJRJRJR;
function populateSchedule(eventInfoJson = { eventTitle: "!NOEVENT", eventDescription: "", runTimeStr: "", runTime: "" }) {


  if (eventInfoJson.eventTitle !== "!NOEVENT") {
    console.log(eventInfoJson);
    console.log("handling a special event!");
    const specialEventTitle = document.getElementById("specialEventTitlebox");
    const specialEventLink = document.getElementById("clickableLive");
    let eventDisplayTitle = eventInfoJson.eventTitle + " " + eventInfoJson.runTimeStr + "! ";

    eventInfoJRJRJR = eventInfoJson;
    const isLiveBool = isEventLive(eventInfoJson);
    
    specialEventTitle.innerHTML = eventDisplayTitle + `<span id="isLiveDot" style="color=var(--Red)">${isLiveBool ? "●LIVE" : ""}</span>`;
    // if (isLiveBool) {
    //   specialEventLink.href = "radio_listener.html";
    // }
    specialEventLink.classList.add("special-event-enabled");
    specialEventTitle.classList.add("special-event-enabled");

  }
  else {
    console.log("no special event");
    console.log("moving on....");
  }

  const DECODE_KEY = "IHEARTWILLTOLEDO!!!!";
  const schedule = DJ_JSON;
  const rows = document.querySelectorAll(".calendar tbody tr");
  for (let i = 0; i < schedule.length; i++) {
    const show = schedule[i];
    const dayIndex = dayToIndex[show.broadcastTime.dayOfWeek];
    //console.log(dayIndex);
    const startTime = show.broadcastTime.startTime.split(":")[0];
    //console.log(startTime);
    const duration = show.broadcastTime.durationMinutes;
    //console.log(duration);
    //duration is minutes, start time in 24 hour format
    const isHour = (duration === 60) ? true : false;
    //console.log(isHour);
    const endTime = (parseInt(startTime) + (isHour ? 1 : 0)) % 24;
    //console.log(endTime);
    let showName = show.showName;
    //console.log(showName);
    // if (showName === "Ebbs %26 Flows") {
    //   showName = "Ebbs & Flows";
    //   console.log("jenny handled");
    // }
    // else if (showName === "Ranting %26 Raving") {
    //   showName = "Ranting & Raving";
    //   console.log("other person handled");
    // }
    const encryptedHostNames = show.hostNames;
    //console.log(encryptedHostNames);
    const standardShow = show.standardShow;
    //if special show, do not decrypt
    var hostNamesa = "";
    if (standardShow) {
      hostNamesa = loadHostNamesa(encryptedHostNames, DECODE_KEY);
    }
    else {
      hostNamesa = encryptedHostNames;
    }

    //console.log(hostNames);
    const showBlurb = show.showBlurb;
    //console.log(showBlurb);
    const image = show.image;

    //console.log(standardShow);
    //const previousPlaylists = show.previousPlaylists;
    const row = rows[startTime - 11];
    const cell = row.children[dayIndex + 1];
    const showElement = document.createElement("div");
    //check if already has a show
    //if so, check if new show is special
    //if so, overwrite

    if (cell.children.length > 0) {
      if (standardShow) {
        continue;
      } else {
        cell.innerHTML = "";
      }
    }

    // showname encode for url  
    showNameE = encodeURIComponent(showName);
    console.log(showName + "~~~~~~~~~");
    showElement.classList.add("show");
    //make each element clickable and bring you to
    //the show's page, which will be
    // URLbaseDJPage.html?showName=${encodeURIComponent(selectedShowName)}
    showElement.innerHTML = `
    
    <a role="button" onclick=changeToShowPage("${showNameE}")>
    <div class="showElemDiv">
      <p class="showElem sh_nm">${showName}</p>
      <p class="othTxt">${hostNamesa.join(", ")}</p>
    </div>
    </a>
    `;
    //if special, set class to special
    cell.classList.add("show-cell");

    if (!standardShow) {
      cell.classList += " specialEvent";
      //remove href if special
      showElement.children[0].removeAttribute("href");
    }
    cell.appendChild(showElement);

  }
  highlightCurrentHour();



}

//END OF SCHEUDLE CODE



var CurrentTab = "mainPlayer";


// can be "mainPlayer", "schedule", or "showPages"

// remove the lift / unlift animation from record of current page, keep it translated
// up by -30% and only spin

//mainPlayer = #firstRecord, schedule = #secondRecord, showPages = #thirdRecord
//current css
/* #firstRecord:hover {
  animation-delay: 0s, 0.2s;
  animation-name: lift, spinCircleSVGs;
  animation-duration: 0.2s, 5s;
  animation-timing-function: ease-in, linear;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: forwards;



  transform-origin: 45% 115%;
}

#firstRecord {
  animation: unlift 0.2s ease-out forwards;
}
  */
function handleRecordAnims() {
  // Remove lift animation from current tab
  // mainPlayer = #firstRecord, schedule = #secondRecord, showPages = #thirdRecord
  var currRecord;
  switch (CurrentTab) {
    case "mainPlayer":
      currRecord = document.getElementById("firstRecord");
      break;
    case "schedule":
      currRecord = document.getElementById("secondRecord");
      break;
    case "showPages":
      currRecord = document.getElementById("thirdRecord");
      break;
  }

}



/* 
 dj pages
*/



var CURRENT_SHOW_PAGE = "Perfect Sound Forever"

var socials = {
  instagram: "",
  twitter: "",
  youtube: "",
  linktree: "",
  spotify: [],
  other: []
};

function populateSocials(dj_socials) {
  //clear the list of socials
  socials.instagram = "";
  socials.twitter = "";
  socials.youtube = "";
  socials.linktree = "";
  socials.spotify = [];
  socials.other = [];
  socials.bandcamp = "";
  socials.letterboxd = "";



  /*
  DJ_JSON[0].socials: =
    {
      "socials": {
      "instagram": "@s0unds.of.silenc3",
      "twitter": "",
      "otherSocials": []
    },
    */
  // handle others, which will be a list of "social: handle".
  // populate youtube and linktree correctly, put rest in other
  // if (document.getElementById("socialsList").innerHTML !== "") {
  //   console.log("list is not empty, clearing...");
  //   document.getElementById("socialsList").innerHTML = "";
  // }
  console.log(dj_socials);
  if (dj_socials.instagram) {
    socials.instagram = dj_socials.instagram;
  }
  if (dj_socials.twitter != '') {
    socials.twitter = dj_socials.twitter;
  }
  if (dj_socials.spotify.length > 0) {
    socials.spotify = [dj_socials.spotify[0], dj_socials.spotify[1]];
    console.log(dj_socials.spotify[0])
  }
  else{
    socials.spotify = ["", ""];
  }
  if (dj_socials.otherSocials) {
    dj_socials.otherSocials.forEach(social => {
      const [platform, handle] = social.split(": ");
      if (platform === "youtube") {
        socials.youtube = handle;
      } else if (platform === "linktree") {
        socials.linktree = handle;
      }
      else if (platform === "letterboxd") {
        socials.letterboxd = handle;
      }
      else if (platform === "bandcamp") {
        socials.bandcamp = handle;
      }
      //spotify will be in form of ["displayName","url"]. push as "spotify: url"
      else {
        socials.other.push(social);
      }
    });
  }
  // if other === []
  loadSocialImgs();
}

function loadSocialImgs() {
  const socialsList = document.getElementById("socialsList");
  Object.entries(socials).forEach(([platform, handle]) => {
    //if other is [], skip it
    if (handle && !(platform === "other" && handle.length === 0)) {

      const li = document.createElement("li");
      if (platform === "linktree") {
        li.innerHTML = `${socialIcons[platform]} <a href="${handle}" target="_blank">${handle}</a>`;
      }
      else if (platform === "instagram") {
        li.innerHTML = `${socialIcons[platform]} <a href="https://${platform}.com/${handle.split("@")[1]}" target="_blank">${handle}</a>`;
      }
      else if (platform === "letterboxd") {
        li.innerHTML = `${socialIcons[platform]} <a href="https://letterboxd.com/${handle}" target="_blank">${handle}</a>`;
      }
      else if (platform === "spotify") {
        console.log("TOOOO")
        console.log(handle)
        if(handle[0] !== "") {
          li.innerHTML = `${socialIcons[platform]} <a href="${handle[1]}" target="_blank">${handle[0]}</a>`;
        }
      }
      else if (platform === "bandcamp") {
        //just get the bandcamp name
        //spliy s://(HERE).bandcamp
        const bandcampName = handle.split("://")[1].split(".bandcamp")[0];
        li.innerHTML = `<p style="font-size:24px; margin-top:0px; margin-bottom:0px; padding-top:0px">🛁 <a href="${handle}" target="_blank">${bandcampName}</a></p>`;
      }
      else {
        li.innerHTML = `${socialIcons[platform]} <a href="https://${platform}.com/${handle}" target="_blank">${handle}</a>`;
      }
      socialsList.appendChild(li);
    }
  });
}
function loadHostNames(hostNames, DECODE_KEY) {
  const hostList = document.getElementById("hostNamesList");
  hostNames.forEach(name => {
    if (name) {
      const li = document.createElement("li");
      name = decodeName(name, DECODE_KEY);
      li.innerHTML = `${name}`;
      hostList.appendChild(li);
    }
  });
}
// var DJ_JSON;
// document.addEventListener("DOMContentLoaded", function () {
//   //Fetch data
//   fetch('./src/showDB_Obscured_encoded.json')
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       DJ_JSON = json;
//       //load the schedule
//       // generatePage();
//     })

// });

function decodeName(encodedName, key) {
  // Decode the Base64 string
  const encodedBytes = Uint8Array.from(atob(encodedName), c => c.charCodeAt(0));

  // Convert key to byte array
  const keyBytes = new TextEncoder().encode(key);

  // XOR each byte of the encoded name with the corresponding byte of the key
  const decodedBytes = encodedBytes.map((byte, i) => byte ^ keyBytes[i % keyBytes.length]);

  // Convert the byte array back to a string
  return new TextDecoder().decode(decodedBytes);
}


var firstGen = true;
function generatePage() {
  console.log("!!(U#!*#*!(@#&*@&!#&*( &*(@RAN");
  //prevent multiple runs for some reason
  if (document.getElementById("showName").innerText === showName) {
    console.log("already generated this page, skipping...");
    return;
  }
  const DECODE_KEY = "IHEARTWILLTOLEDO!!!!";
  const urlParams = window.location.href;
  var showName = CURRENT_SHOW_PAGE;
  if (!showName) {
    console.error("No show name provided in URL, defaulting to first show in JSON");
    showName = DJ_JSON[0].showName;

  }
  console.log(showName);
  // showName = decodeURI(showName);
  //Get the show name from the URL);
  console.log(showName);
  if (showName.includes("%") && !(showName === "100% Electronic")) {
    console.log("showName is encoded, decoding...");
    showName = decodeURI(showName);
  }
  //make a const array of all showNames
  //only append if standardShow = true
  const showNames = DJ_JSON.filter(show => show.standardShow === true).map(show => show.showName);
  //const showNames = DJ_JSON.map(show => show.showName);

  console.log(showName + " is the show name 1");
  //Find the show in the JSON
  const show = DJ_JSON.find(show => show.showName === showName);
  console.log(show);

  // console.log(show.showName + " is the show name 2");
  //populate it!!! RAAAHHH
  console.log(show.showName + " is the show name");
  if (show.showName === "Ebbs %26 Flows") {
    show.showName = "Ebbs & Flows";
  }
  else if (show.showName === "Ranting %26 Raving") {
    show.showName = "Ranting & Raving";
  }
  document.getElementById("showName").innerText = show.showName;

  
  // let showBlurbWithBreaks = show.showBlurb;
  // showBlurbWithBreaks = showBlurbWithBreaks.replace(/\n/g, "<br>"); // Assign the result back to the variable
  // console.log(showBlurbWithBreaks);
  // document.getElementById("showBlurb").innerHTML = showBlurbWithBreaks;
  document.getElementById("showBlurb").innerText = show.showBlurb;
  let b = document.getElementById("socialsList");
  console.log("==-===-=-= -=-=--=-=--=-=--=-=--=-=--=-=--=-=--=-=");
  console.log(b.children);
  for (let i = b.children.length - 1; i >= 0; i--) {
    b.removeChild(b.children[i]);
  }
  console.log(b.children);
  console.log("cleared socials list");
  console.log(show.socials);
  console.log(" ~~ running socials on " + show.showName);
  populateSocials(show.socials);
  loadHostNames(show.hostNames, DECODE_KEY);

  //    "broadcastTime": {
  //    "dayOfWeek": "Tuesday",
  //    "startTime": "14:00",
  //   "durationMinutes": 60}
  //    should format to "Tuesday @ 2:00 PM"
  const broadcastTime = show.broadcastTime;
  const dayOfWeek = broadcastTime.dayOfWeek;
  const startTime = broadcastTime.startTime;
  const durationMinutes = broadcastTime.durationMinutes;

  const [hour, minute] = startTime.split(':');
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  const formattedTime = `${dayOfWeek} @ ${formattedHour}:${minute} ${ampm}`;
  document.getElementById("timeSlot").innerText = formattedTime;
  document.getElementById("showImgSlot").src = (show.image === "") ? "imgs/wmbc/logo-text-225x255.png" : show.image;
  document.getElementById("showBlurbHeader").innerText = "About " + show.showName;

  //load show selecter thingy

  //only do if empty
  if (firstGen) {
    firstGen = false;
  const showSelecter = document.getElementById('showSelecter');
  showNames.forEach(namer => {
    console.log(namer, "namer elem");
    const option = document.createElement('option');
    option.value = namer;
    option.textContent = namer;
    console.log(option.textContent, "   ", showName);
    if (option.textContent === "Ebbs %26 Flows") {
      console.log("jenny handler");
      option.textContent = "Ebb & Flow";
    }
    else if (option.textContent === "Ranting %26 Raving") {
      console.log("jenny handler");
      option.textContent = "Ranting & Raving";
    }


    if (namer === showName) {
      console.log(namer, "   ", show);
      option.selected = true; // Set the default selected show
    }
    if (show.standardShow === true) {
      console.log(show.standardShow);
      showSelecter.appendChild(option);
    }
    else {
      console.log("Not appending option because standardShow is false");
    }

  });
  //if specialty show, skip adding to the selecter


  //remove all current listener if it exists
  
  console.log("adding event listeners");
  // console.log(getEventListeners(showSelecter));
  showSelecter.addEventListener('change', (event) => {
    console.log("!!! Triggered Show Selection Change");
    const selectedShowName = event.target.value;
    CURRENT_SHOW_PAGE = selectedShowName;
    console.log(selectedShowName);
    //set current html to blank so it can be reloaded
      
    removeCustomCss();
    document.getElementById("showBlurb").innerText = "";
    document.getElementById("timeSlot").innerText = "";
    document.getElementById("showName").innerText = "";
    //clear hostNames
    document.getElementById("hostNamesList").innerText = "";

    //clear all socials
    // document.getElementById("socialsList").innerHTML = "";
    console.log("~~~~~~~~Clearing Socials")
    // var gg = document.getElementById("socialsList").innerHTML;
    // let b = document.getElementById("socialsList");
    // for (let i = b.children.length-1; i >= 0; i--) {
    //   b.children[0].remove();
    // }
    // if (gg !== "") {
    //   console.log("FAILED TO CLEAR!!");
    // }
    // //clear all past broadcasts
    document.getElementById("pastBroadcastsDiv").innerHTML = "";
    //clear all custom css

    //clear all custom html

    generatePage();

    //get url and split after "baseDJPage.html"
    // const url = window.location.href;
    // const urlParts = url.split("baseDJPage.html");
    // const newUrl = urlParts[0] + `baseDJPage.html?showName=${encodeURIComponent(selectedShowName)}`;

    // window.location.href = newUrl; // Redirect to the new URL
  });
  }

  //if passed custom css, pass it to the applyCustomCss function
  //but first clear any existing custom css
  removeCustomCss();
  if (show.customFormatting) {
    if (show.customFormatting.css) {
      applyCustomCss(show.customFormatting.css);
    }
    if (show.customFormatting.html) {
      loadHTML(show.customFormatting.html);
    }
  }
  //if past broadcasts exist, load them!
  //<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5v1N0su1k3tzZRTsthTdKM?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  if (show.previousPlaylists.length > 0) {
    const pastBroadcastsContainer = document.getElementById('pastBroadcastsDiv');
    pastBroadcastsContainer.style.visibility = "visible";
    const rowDiv = document.createElement('div');
    rowDiv.style.display = "flex";
    rowDiv.style.flexWrap = "wrap";
    rowDiv.style.justifyContent = "space-between";
    pastBroadcastsContainer.appendChild(rowDiv);


    show.previousPlaylists.forEach((broadcast, index) => {

      const iframeContainer = document.createElement('div');

      iframeContainer.className = "iframeContainer";
      iframeContainer.style.flex = "0 0 48%";
      iframeContainer.style.marginBottom = "20px";
      const iframe = document.createElement('iframe');
      iframe.className = "spotifyIframe";
      const playlistID = broadcast[1].split("playlist/").pop();
      console.log(playlistID);
      iframe.src = "https://open.spotify.com/embed/playlist/" + playlistID;
      //if its on mobile, make it smaller
      if (window.innerWidth < 768) {
        iframe.width = "80%";

        

      } else {
        iframe.width = "100%";
      }
      iframe.height = "352px";
      iframe.frameBorder = "0";
      iframe.allowFullscreen = "";
      iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      iframe.loading = "lazy";
      iframeContainer.appendChild(iframe);
      rowDiv.appendChild(iframeContainer);
    });
  }
}


function genLite() {
  console.log("!!! Called by " + genLite.caller.caller.name); 
  console.log("!!!lite gen called");
  if (document.getElementById("showName").innerText === showName) {
    console.log("already generated this page, skipping...");
    return;
  }
  const DECODE_KEY = "IHEARTWILLTOLEDO!!!!";
  // const urlParams = window.location.href;
  var showName = CURRENT_SHOW_PAGE;
  if (!showName) {
    console.error("No show name provided in URL, defaulting to first show in JSON");
    showName = DJ_JSON[0].showName;

  }
  console.log(showName);
  
  // check if showName is encoded
  if (showName.includes("%") && !(showName === "100% Electronic")) {
    console.log("showName is encoded, decoding...");
    showName = decodeURI(showName);
  }
  //Get the show name from the URL);
  console.log(showName);

  //make a const array of all showNames
  //only append if standardShow = true
  const showNames = DJ_JSON.filter(show => show.standardShow === true).map(show => show.showName);
  //const showNames = DJ_JSON.map(show => show.showName);

  console.log(showName + " is the show name 1");
  //Find the show in the JSON
  const show = DJ_JSON.find(show => show.showName === showName);

  // console.log(show.showName + " is the show name 2");
  //populate it!!! RAAAHHH
  console.log(show.showName + " is the show name");
  if (show.showName === "Ebbs %26 Flows") {
    show.showName = "Ebbs & Flows";
  }
  else if (show.showName === "Ranting %26 Raving") {
    show.showName = "Ranting & Raving";
  }
  document.getElementById("showName").innerText = show.showName;

  // let showBlurbWithBreaks = show.showBlurb;
  // showBlurbWithBreaks = showBlurbWithBreaks.replace(/\n/g, "<br>"); // Assign the result back to the variable
  // console.log(showBlurbWithBreaks);
  // document.getElementById("showBlurb").innerHTML = showBlurbWithBreaks;
  document.getElementById("showBlurb").innerText = show.showBlurb;;

  //    "broadcastTime": {
  //    "dayOfWeek": "Tuesday",
  //    "startTime": "14:00",
  //   "durationMinutes": 60}
  //    should format to "Tuesday @ 2:00 PM"
  const broadcastTime = show.broadcastTime;
  const dayOfWeek = broadcastTime.dayOfWeek;
  const startTime = broadcastTime.startTime;
  const durationMinutes = broadcastTime.durationMinutes;

  const [hour, minute] = startTime.split(':');
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  const formattedTime = `${dayOfWeek} @ ${formattedHour}:${minute} ${ampm}`;
  document.getElementById("timeSlot").innerText = formattedTime;
  document.getElementById("showImgSlot").src = (show.image === "") ? "imgs/wmbc/logo-text-225x255.png" : show.image;
  document.getElementById("showBlurbHeader").innerText = "About " + show.showName;

  //load show selecter thingy
  const showSelecter = document.getElementById('showSelecter');

  //if specialty show, skip adding to the selecter

  //remove current event listener if it exists
  const oldListener = showSelecter.getAttribute('data-listener');
  if (oldListener) {
    console.log("~~~removing old listener");
    showSelecter.removeEventListener('change', oldListener);
  }
  //add new event listener

  //only add new event listener for change if it doesn't exist
  
  // showSelecter.addEventListener('change', (event) => {

  //   // why does this exponentially increase the time it takes to load the page?
  //   console.log("!!! Triggered Show Selection Change");
  //   //get url and split after "baseDJPage.html"
  //   const selectedShowName = event.target.value;
  //   CURRENT_SHOW_PAGE = selectedShowName;
  //   console.log(selectedShowName);
  //   //set current html to blank so it can be reloaded
      
  //   removeCustomCss();
  //   //if showBlurb exists, set to ""
  //   if (document.getElementById("showBlurb")) {
  //     document.getElementById("showBlurb").innerText = "";
  //   }
    
  //   document.getElementById("timeSlot").innerText = "";
  //   document.getElementById("showName").innerText = "";
  //   //clear hostNames
  //   document.getElementById("hostNamesList").innerText = "";

  //   //clear all socials
  //   document.getElementById("socialsList").innerHTML = "";
  //   //clear all past broadcasts
  //   document.getElementById("pastBroadcastsDiv").innerHTML = "";
  //   //clear all custom css

  //   //clear all custom html

  //   generatePage();
  // });


  console.log("did generation break somehow?");
  if (document.getElementById("showName").innerText === showName) {
    console.log("show name is the same, skipping...");
    return;
  }
  console.log("show name is different, generating...");

}
function removeCustomCss() {
  const styleElement = document.getElementById("custom-style");
  if (styleElement) {
    styleElement.remove();
  }
  //remove links added by user (will be at the end of the head)
  let head = document.head.innerHTML;
  let link = "";
  let i = head.length - 1;
  while (head[i] !== ">") {
    link = head[i] + link;
    i--;
  }
  if (link.includes("<link")) {
    document.head.innerHTML = head.slice(0, i + 1);
  }
//changed this from innerHTML to full remove!! FIXME IF SOMETHING ELSE BREAKS
  document.getElementById("showBlurbDiv").innerHTML = `    <div id="showBlurbDiv">
      <h2 id="showBlurbHeader"> About {showName}:</h2>
      <p id="showBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum</p>
    </div>`;
    console.log("calling genLite from removeCustomCss()");
    genLite();


}
function loadHTML(savedHtml) {
  console.log("fetching data");
  if (savedHtml) {
    document.getElementById("showBlurbDiv").innerHTML = savedHtml;
  }
  console.log("calling genLite from loadHTML()");

  genLite();




}

function applyCustomCss(css) {
  let styleElement = document.getElementById("custom-style");
  //parse for <link> </link> tags inside the css box,
  //place them in the head of the document

  for (let i = 0; i < css.length; i++) {
    if (css[i] === "<" && css[i + 1] === "l" && css[i + 2] === "i" && css[i + 3] === "n" && css[i + 4] === "k") {
      let link = "";
      let j = i;
      while (css[j] !== ">") {
        link += css[j];
        j++;
      }
      link += ">";
      console.log(link);
      //check for duplicate links
      if (!document.head.innerHTML.includes(link)) {
        document.head.innerHTML += link;
      }
      //remove the link from the css variable 
      css = css.slice(0, i) + css.slice(j + 1);
    }
  }
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = "custom-style";
    document.head.appendChild(styleElement);
  }
  styleElement.textContent = css;
}

function changeToShowPage(showName) {
  //uri decode the show name
  showName = decodeURIComponent(showName);
  //sets var, runs loadShowinfoPage()
  CURRENT_SHOW_PAGE = showName;
  console.log("changing to show page: " + showName);
  //set current html to blank so it can be reloaded
  document.getElementById("showBlurb").innerText = "";
  document.getElementById("timeSlot").innerText = "";
  document.getElementById("showName").innerText = "";
  //clear hostNames
  document.getElementById("hostNamesList").innerText = "";

  //clear all socials
  // document.getElementById("socialsList").innerHTML = "";
  //clear all past broadcasts
  document.getElementById("pastBroadcastsDiv").innerHTML = "";
  //clear all custom css
  //select the current show in the dropdown
  //decode the show name
  // var eShowName = decodeURIComponent(showName);
  document.getElementById("showSelecter").value = showName;
  removeCustomCss();
    //set current html to blank so it can be reloaded
  document.getElementById("showBlurb").innerText = "";
  document.getElementById("timeSlot").innerText = "";
  document.getElementById("showName").innerText = "";
  //clear hostNames
  document.getElementById("hostNamesList").innerText = "";

  //clear all socials
  // document.getElementById("socialsList").innerHTML = "";
  //clear all past broadcasts
  document.getElementById("pastBroadcastsDiv").innerHTML = "";
  //clear all custom css


  console.log("!calling generatePage from changeToShowPage()");
  // generatePage();
  loadShowinfoPage();
}
/* 
end dj pages
*/


var doCull = true;
function loadSchedule() {
  //set both lowerHalfChild class elements display to none
  var lowerHalfChildren = document.getElementsByClassName("lowerHalfChild");
  for (var i = 0; i < lowerHalfChildren.length; i++) {
    lowerHalfChildren[i].style.display = "none";
  }

  document.getElementById("theShowsInfoPage").style.display = "none";
  document.getElementById("theShowsInfoPageDropdown").style.display = "none";
  //show #theSchedule
  document.getElementById("theSchedule").style.display = "block";
  if (doCull){//(window.innerWidth < 600 && doCull) {
    doCull = false;
    const rows = document.querySelectorAll(".calendar tbody tr");
    rows.forEach(row => {
      row.children[1].remove();
      row.children[row.children.length - 1].remove();
    });
    //remove from calendar header
    const header = document.querySelector(".calendar thead tr");
    header.children[1].remove();
    header.children[header.children.length - 1].remove();

    // Set a flag to indicate that the adjustment has been made
    window.mobileViewAdjusted = true;
  }
  document.getElementById("lowerHalf").style.flexDirection = "";
  //set current html to blank so it can be reloaded
    
  removeCustomCss();
  document.getElementById("showBlurb").innerText = "";
  document.getElementById("timeSlot").innerText = "";
  document.getElementById("showName").innerText = "";
  //clear hostNames
  document.getElementById("hostNamesList").innerText = "";

  //clear all socials
  // document.getElementById("socialsList").innerHTML = "";
  //clear all past broadcasts
  document.getElementById("pastBroadcastsDiv").innerHTML = "";
  //clear all custom css


}
function loadMainPlayer() {
  //set both lowerHalfChild class elements display to none
  var lowerHalfChildren = document.getElementsByClassName("lowerHalfChild");
  for (var i = 0; i < lowerHalfChildren.length; i++) {
    lowerHalfChildren[i].style.display = "flex";
  }
  //show #theSchedule
    
  removeCustomCss();
  document.getElementById("theSchedule").style.display = "none";
  document.getElementById("theShowsInfoPage").style.display = "none";
  document.getElementById("theShowsInfoPageDropdown").style.display = "none";
  document.getElementById("lowerHalf").style.flexDirection = "";
  document.getElementById("showBlurb").innerText = "";
  document.getElementById("timeSlot").innerText = "";
  document.getElementById("showName").innerText = "";
  //clear hostNames
  document.getElementById("hostNamesList").innerText = "";

  //clear all socials
  // document.getElementById("socialsList").innerHTML = "";
  //clear all past broadcasts
  document.getElementById("pastBroadcastsDiv").innerHTML = "";
  //clear all custom css

}

function loadShowinfoPage() {
  //set both lowerHalfChild class elements display to none
  var lowerHalfChildren = document.getElementsByClassName("lowerHalfChild");
  for (var i = 0; i < lowerHalfChildren.length; i++) {
    lowerHalfChildren[i].style.display = "none";
  }
  //show #theSchedule
  document.getElementById("theSchedule").style.display = "none";
  document.getElementById("theShowsInfoPage").style.display = "block";
  document.getElementById("theShowsInfoPageDropdown").style.display = "block";

  //add flex-direction: column; to #lowerHalf
  document.getElementById("lowerHalf").style.flexDirection = "column";

  generatePage();
  
}



function addClock() {
  if (window.location.href.includes("?=clock")) {
    //will apply to radio_listener.html if on that page, or aquarium_layout.html too
    if (window.location.href.includes("radio_listener.html")) {
      window.location.href = "radio_listener.html";
      document.getElementById("clock").remove();
    }
    if( window.location.href.includes("aquarium_layout.html")) {
      window.location.href = "aquarium_layout.html";
    }

    
  }
  else{
    if(window.location.href.includes("radio_listener.html")) {
      window.location.href = "radio_listener.html?=clock";
    }
    if(window.location.href.includes("aquarium_layout.html")) {
      window.location.href = "aquarium_layout.html?=clock";
    }
  // window.location.href = "radio_listener.html?=clock";
  }
}
