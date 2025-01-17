document.addEventListener('DOMContentLoaded', function(){
    const userCam = document.getElementById('userCam');

    async function requestCameraAccess() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            userCam.srcObject = stream;
        } catch (error) {
            console.error("Camera access denied or unavailable:", error);
            alert("Unable to access your camera. Please check your browser settings.");
        }
    }

    window.addEventListener('load', requestCameraAccess);

})