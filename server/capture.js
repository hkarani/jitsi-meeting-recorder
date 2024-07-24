// Initialize Jitsi Meet API
const domain = "5275-197-232-27-164.ngrok-free.app";
const options = {
    roomName: "CulturalNoticesSuitStraight",
    width: 800,
    height: 600,
    parentNode: document.querySelector('body'),
    interfaceConfigOverwrite: { filmStripOnly: true },
    configOverwrite: { disableDeepLinking: true }
};
const api = new JitsiMeetExternalAPI(domain, options);

// Wait for the Jitsi API to be ready
api.addEventListener('videoConferenceJoined', () => {
    console.log('Joined the meeting');

    // Access the video element
    const videoElement = document.querySelector('video');

    // Set up canvas for capturing frames
    const canvas = document.getElementById('jitsiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;

    // Capture frames periodically
    setInterval(() => {
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        const frame = canvas.toDataURL('image/png');
        console.log('Captured frame:', frame);
        // You can send the frame to a server or process it further
    }, 1000); // Capture a frame every second
});
console.log("Capture js has loaded")
