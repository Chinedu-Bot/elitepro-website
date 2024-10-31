 // create a function to update the date and time
 function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = currentDateTime;
  }

  // call the `updateDateTime` function every second
  setInterval(updateDateTime, 1000);


  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
      document.getElementById('ip').innerText = `Your IP address is: ${data.ip}`;
  })
  .catch(error => {
      console.error('Error fetching IP address:', error);
  });


  navigator.getBattery().then(function(battery) {
    function updateBatteryStatus() {
        const batteryLevel = Math.round(battery.level * 100);
        document.getElementById('battery-status').innerText = `Battery Level: ${batteryLevel}%`;
    }

    updateBatteryStatus();
    battery.addEventListener('levelchange', updateBatteryStatus);
});


function getDeviceName() {
    const userAgent = navigator.userAgent;
    let deviceName = "Unknown Device";

    if (/android/i.test(userAgent)) {
        deviceName = "Android Device";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        deviceName = "iOS Device";
    } else if (/Windows/i.test(userAgent)) {
        deviceName = "Windows Device";
    } else if (/Macintosh/i.test(userAgent)) {
        deviceName = "Mac Device";
    }

    return deviceName;
}

document.getElementById("device-name").innerText = getDeviceName();


function getProcessorInfo() {
    const userAgent = navigator.userAgent;
    const processorInfo = userAgent.includes("Intel") ? "Intel Processor" : 
                          userAgent.includes("AMD") ? "AMD Processor" : 
                          "Processor information not available";
    document.getElementById("processor-info").innerText = processorInfo;
}

getProcessorInfo();


window.onload = function() {
    setTimeout(function() {
        const notification = document.getElementById('notification');
        notification.classList.remove('hidden');
        notification.style.opacity = 1;

        setTimeout(function() {
            notification.style.opacity = 0;
            setTimeout(() => notification.classList.add('hidden'), 500);
        }, 15500); // Close after 10 seconds
    }, 30000); // Show after 30 seconds
};



        // Function to play music after 10 seconds
        function playMusic() {
            const music = document.getElementById('background-music');
            music.play();
        }

        // Set a timeout to play music after 10 seconds
        setTimeout(playMusic, 90000);


        let seconds = 0;
        const timerElement = document.getElementById('timer');

        const startTimer = () => {
            seconds++;
            timerElement.textContent = `Time: ${seconds} seconds`;
        };

        setInterval(startTimer, 1000);