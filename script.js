 // Select all FAQ boxes
 const faqBoxes = document.querySelectorAll('.faq-box');

 faqBoxes.forEach(faqBox => {
     // Add click event listener to each FAQ box
     faqBox.addEventListener('click', function() {
         const arrow = this.querySelector('.arrow');
         const answer = this.querySelector('.answer');
         
         // Toggle the answer visibility and rotation of the arrow
         this.classList.toggle('open');
         
         // If open class is present, arrow rotates, and max-height is applied
         if (this.classList.contains('open')) {
             arrow.classList.add('open');
         } else {
             arrow.classList.remove('open');
         }
     });
 });
 document.addEventListener("DOMContentLoaded", function() {
    // Get the "Enroll Now" button
    const enrollButton = document.querySelector(".enroll-button");

    // Add a click event listener to the button
    enrollButton.addEventListener("click", function(event) {
        // Prevent default action (if needed, like navigating to another page)
        event.preventDefault();

        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.getElementById("enrollForm");

    // Get the thank you message container
    const thankYouMessage = document.getElementById("thankYouMessage");

    // Add an event listener for form submission
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission action (so the page doesn't refresh)
        event.preventDefault();

        // Display the thank you message
        thankYouMessage.style.display = "block";

        // Optionally, clear the form fields
        form.reset();

        // You can also add any other custom behavior, like sending the data to a server
        // For example, using fetch or AJAX to send the form data to the server

        // If you want to hide the message after a few seconds, you can do it like this:
        setTimeout(function() {
            thankYouMessage.style.display = "none";
        }, 5000); // Hide the message after 5 seconds
    });
});
const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('demoModal');
    const form = document.getElementById('demoForm');
    const thankYouMsg = document.getElementById('thankYouMsg');

    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      form.reset();
      thankYouMsg.style.display = 'none';
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      thankYouMsg.style.display = 'block';
      setTimeout(() => {
        modal.classList.remove('active');
        form.reset();
        thankYouMsg.style.display = 'none';
      }, 2000);
    });
      // Toggle chat window visibility
      function toggleChat() {
        const bot = document.getElementById('chatbot');
        bot.style.display = bot.style.display === 'block' ? 'none' : 'block';
      }
    
      // Function to send the user input message
      function sendMessage() {
        const input = document.getElementById("userInput");
        const message = input.value.trim();
        if (!message) return;
    
        // Display user message
        addMessage("user", message);
        input.value = "";
    
        setTimeout(() => {
          botAutoReply(message);
        }, 500);
      }
    
      // Function for quick replies
      function quickReply(option) {
        addMessage("user", option);
        setTimeout(() => {
          botAutoReply(option);
        }, 500);
      }
    
      // Function to add messages in the chat window
      function addMessage(sender, message) {
        const chatBody = document.getElementById("chat-body");
        const div = document.createElement("div");
        div.className = sender === "bot" ? "bot-message" : "user-message";
        div.innerHTML = message;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
      }
    
      // Handle Enter key press to send message
      function handleKey(event) {
        if (event.key === "Enter") {
          sendMessage();
        }
      }
    
      // Bot auto-replies based on user input
      function botAutoReply(input) {
        let reply = "";
    
        switch (input.toLowerCase()) {
          case "digital marketing courses":
            reply = "We offer SEO, Social Media, and Google Ads courses with certifications.";
            break;
          case "course duration":
            reply = "Course duration will be 3 to 6 months.";
            break;
          case "careers":
            reply = "We offer resume help, mock interviews, and placement support.";
            break;
          case "chat with counsellor":
            reply = "Please provide your contact, and our counsellor will reach out.";
            break;
          default:
            reply = "Thanks for your message! A team member will get back to you shortly.";
        }
    
        addMessage("bot", reply);
      }  

      