# About

Task 1 - Gallery
imports a SimpleLightbox package, then logs an array of gallery items to the console. It creates a list of gallery items in the HTML document using the imported galleryItems array, and sets up a SimpleLightbox to display the full-sized images when a gallery item is clicked. The SimpleLightbox has several customizable settings, such as captions and zooming options.

Task 2 - Video
imports the Vimeo video player package and the throttle function from lodash library. It sets up a Vimeo player on an HTML element with an ID of "vimeo-player". The code then listens for the "timeupdate" event on the player and saves the current time of the video to the browser's localStorage every second using the throttle function to limit the frequency of updates. The saved current time is retrieved from localStorage, and if it is not null, the player's current time is set to the saved time. If it is null, the player's current time is set to 0.

Task 3 - Feedback
when the user types in their email and message, the form state is saved in the browser's localStorage. When the page is loaded, the code retrieves the saved form state from localStorage and sets the form fields' values to the saved values. When the form is submitted, it prevents the default behavior, resets the form fields, removes the saved form state from localStorage, and logs the email and message values to the console. Additionally the throttle function from the lodash library is used, to limit the frequency of saving the email value in localStorage to every 500 milliseconds.
