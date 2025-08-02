// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Add click effect to closed letter
  const letterClosed = document.getElementById("letterClosed");
  letterClosed.addEventListener("click", function () {
    openLetter();
  });

  // Add click effect to hearts (only after letter is opened)
  function addHeartEffects() {
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart) => {
      heart.addEventListener("click", function () {
        createHeartBurst(this);
      });
    });
  }

  // Add scroll effect to letter (only after letter is opened)
  function addScrollEffect() {
    window.addEventListener("scroll", function () {
      const letter = document.querySelector(".letter");
      if (letter) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        letter.style.transform = `translateY(${rate}px)`;
      }
    });
  }

  // Add typing effect to content (only after letter is opened)
  function addTypingEffect() {
    setTimeout(() => {
      typeWriter();
    }, 1000);
  }

  // Add parallax effect to background
  window.addEventListener("mousemove", function (e) {
    const heartBg = document.querySelector(".heart-bg");
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    heartBg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  });

  // Add music note click effect (only after letter is opened)
  function addMusicNoteEffects() {
    const musicNotes = document.querySelectorAll(".music-note");
    musicNotes.forEach((note) => {
      note.addEventListener("click", function () {
        createMusicNote(this);
      });
    });
  }

  // Add envelope click effect (only after letter is opened)
  function addEnvelopeEffects() {
    const envelope = document.querySelector(".envelope");
    if (envelope) {
      envelope.addEventListener("click", function () {
        openEnvelope();
      });
    }
  }

  // Function to open letter
  window.openLetter = function () {
    // Animate envelope opening
    const envelopeFlapTop = document.querySelector(".envelope-flap-top");
    const letterInside = document.querySelector(".letter-inside");
    const heartSeal = document.querySelector(".heart-seal");
    const letterContent = document.querySelector(".letter-content-preview");
    const letterTexts = document.querySelectorAll(".letter-content-preview p");

    // Open the envelope flap
    envelopeFlapTop.style.transform = "rotateX(-180deg)";

    // Hide heart seal
    heartSeal.style.opacity = "0";
    heartSeal.style.transform = "translate(-50%, -50%) scale(0.5)";

    setTimeout(() => {
      // Show letter inside with smooth animation
      letterInside.style.opacity = "1";
      letterInside.style.transform = "translateY(0) scale(1)";

      setTimeout(() => {
        // Show letter content
        letterContent.style.opacity = "1";

        // Animate each text line with sequential typewriter effect
        const textContents = ["Gửi tới Huyền Ngaaaa"];

        let currentLine = 0;

        function typeNextLine() {
          if (currentLine < letterTexts.length) {
            const text = letterTexts[currentLine];
            text.style.opacity = "1";
            text.style.transform = "translateY(0)";

            let i = 0;
            const typeInterval = setInterval(() => {
              if (i < textContents[currentLine].length) {
                text.textContent += textContents[currentLine].charAt(i);
                i++;
              } else {
                clearInterval(typeInterval);
                currentLine++;
                // Start next line only after current line is completely finished
                if (currentLine < letterTexts.length) {
                  setTimeout(typeNextLine, 300);
                }
              }
            }, 50);
          }
        }

        // Start the sequential typing
        setTimeout(typeNextLine, 200);

        setTimeout(() => {
          // Move letter up and out smoothly
          letterInside.style.transform = "translateY(-40px) scale(1.05)";

          setTimeout(() => {
            // Continue moving letter out
            letterInside.style.transform = "translateY(-80px) scale(1.1)";
            letterInside.style.opacity = "0.8";

            setTimeout(() => {
              // Hide closed letter
              const letterClosed = document.getElementById("letterClosed");
              letterClosed.style.animation =
                "letterClose 0.5s ease-out forwards";

              setTimeout(() => {
                letterClosed.style.display = "none";

                // Show opened letter
                const letterOpened = document.getElementById("letterOpened");
                letterOpened.style.display = "block";

                // Add all effects after letter is opened
                addHeartEffects();
                addScrollEffect();
                addTypingEffect();
                addMusicNoteEffects();
                addEnvelopeEffects();

                // Create confetti effect
                createConfetti();
              }, 500);
            }, 400);
          }, 600);
        }, 800);
      }, 300);
    }, 400);
  };
});

// Create heart burst effect
function createHeartBurst(heart) {
  for (let i = 0; i < 8; i++) {
    const burstHeart = document.createElement("div");
    burstHeart.innerHTML = "💖";
    burstHeart.style.position = "absolute";
    burstHeart.style.left = heart.offsetLeft + "px";
    burstHeart.style.top = heart.offsetTop + "px";
    burstHeart.style.fontSize = "1rem";
    burstHeart.style.pointerEvents = "none";
    burstHeart.style.zIndex = "1000";

    const angle = i * 45 * (Math.PI / 180);
    const distance = 50;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    burstHeart.style.animation = `burstHeart 1s ease-out forwards`;
    burstHeart.style.setProperty("--x", x + "px");
    burstHeart.style.setProperty("--y", y + "px");

    document.body.appendChild(burstHeart);

    setTimeout(() => {
      burstHeart.remove();
    }, 1000);
  }
}

// Create music note effect
function createMusicNote(note) {
  const newNote = document.createElement("div");
  newNote.innerHTML = "🎵";
  newNote.style.position = "absolute";
  newNote.style.left = note.offsetLeft + "px";
  newNote.style.top = note.offsetTop + "px";
  newNote.style.fontSize = "2rem";
  newNote.style.pointerEvents = "none";
  newNote.style.zIndex = "1000";
  newNote.style.animation = "musicNotePop 1s ease-out forwards";

  document.body.appendChild(newNote);

  setTimeout(() => {
    newNote.remove();
  }, 1000);
}

// Open envelope effect
function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  const flap = document.querySelector(".envelope-flap");

  envelope.style.animation = "envelopeOpen 0.5s ease-out forwards";
  flap.style.animation = "flapOpen 0.5s ease-out forwards";

  setTimeout(() => {
    envelope.style.animation = "envelopeFloat 3s ease-in-out infinite";
    flap.style.animation = "flapWave 2s ease-in-out infinite";
  }, 500);
}

// Smooth Typewriter effect
function typeWriter() {
  const text = document.querySelector(".content-text");
  const signature = document.getElementById("signature");

  if (!text) return;

  const originalText = text.textContent;
  text.textContent = "";
  text.style.opacity = "0";

  setTimeout(() => {
    text.style.opacity = "1";

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < originalText.length) {
        text.textContent += originalText.charAt(i);

        // Add subtle ink drop effect occasionally
        if (Math.random() < 0.05) {
          createInkDrop(text);
        }

        i++;
      } else {
        clearInterval(typeInterval);

        // Hide cursor after typing is done
        setTimeout(() => {
          text.style.setProperty("--cursor-display", "none");
        }, 1000);

        if (signature) {
          setTimeout(() => {
            signature.classList.add("show");
            // Create sparkle effect around signature
            createSignatureSparkles();

            // Hiển thị button sau khi chữ ký đã hiển thị xong
            setTimeout(() => {
              const buttonContainer = document.querySelector(
                ".date-button-container"
              );
              if (buttonContainer) {
                buttonContainer.classList.add("show");
                // Create celebration effect
                createCelebrationEffect();
              }
            }, 1000);
          }, 800);
        }
      }
    }, 60); // Slower, smoother typing speed
  }, 1000);
}

// Create ink drop effect
function createInkDrop(element) {
  const drop = document.createElement("div");
  drop.innerHTML = "💧";
  drop.style.position = "absolute";
  drop.style.fontSize = "0.8rem";
  drop.style.color = "#ff1493";
  drop.style.pointerEvents = "none";
  drop.style.zIndex = "1000";
  drop.style.animation = "inkDrop 1s ease-out forwards";

  const rect = element.getBoundingClientRect();
  drop.style.left = rect.right - 20 + "px";
  drop.style.top = rect.bottom - 10 + "px";

  document.body.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 1000);
}

// Create sparkles around signature
function createSignatureSparkles() {
  const signature = document.getElementById("signature");
  const rect = signature.getBoundingClientRect();

  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement("div");
    sparkle.innerHTML = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.fontSize = "1.2rem";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "1000";
    sparkle.style.left = rect.left + Math.random() * rect.width + "px";
    sparkle.style.top = rect.top + Math.random() * rect.height + "px";
    sparkle.style.animation = "signatureSparkle 2s ease-out forwards";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 2000);
  }
}

// Create celebration effect when button appears
function createCelebrationEffect() {
  const colors = ["🎉", "🎊", "✨", "💖", "🌸"];

  for (let i = 0; i < 15; i++) {
    const celebration = document.createElement("div");
    celebration.innerHTML = colors[Math.floor(Math.random() * colors.length)];
    celebration.style.position = "fixed";
    celebration.style.fontSize = "1.5rem";
    celebration.style.left = Math.random() * 100 + "vw";
    celebration.style.top = "100vh";
    celebration.style.pointerEvents = "none";
    celebration.style.zIndex = "1000";
    celebration.style.animation = `celebrationPop ${
      Math.random() * 2 + 2
    }s ease-out forwards`;

    document.body.appendChild(celebration);

    setTimeout(() => {
      celebration.remove();
    }, 4000);
  }
}

// Add CSS animations dynamically
const style = document.createElement("style");
style.textContent = `

    @keyframes inkDrop {
        0% {
            transform: scale(0) translateY(0);
            opacity: 1;
        }
        50% {
            transform: scale(1) translateY(5px);
            opacity: 0.8;
        }
        100% {
            transform: scale(0.5) translateY(15px);
            opacity: 0;
        }
    }

    @keyframes signatureSparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes celebrationPop {
        0% {
            transform: translateY(0) scale(0) rotate(0deg);
            opacity: 1;
        }
        20% {
            transform: translateY(-20vh) scale(1) rotate(90deg);
            opacity: 1;
        }
        80% {
            transform: translateY(-80vh) scale(1) rotate(270deg);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) scale(0) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes burstHeart {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--x), var(--y)) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes musicNotePop {
        0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes envelopeOpen {
        0% {
            transform: translateX(-50%) scale(1);
        }
        50% {
            transform: translateX(-50%) scale(1.1);
        }
        100% {
            transform: translateX(-50%) scale(1);
        }
    }
    
    @keyframes flapOpen {
        0% {
            transform: rotateX(0deg);
        }
        100% {
            transform: rotateX(90deg);
        }
    }
    
    @keyframes letterClose {
        0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(0.3) rotate(-15deg);
            opacity: 0;
        }
    }
    
    .letter {
        transition: all 0.3s ease;
    }
    
    .letter:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 25px 70px rgba(255, 105, 180, 0.4);
    }
    
    .heart, .music-note {
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    
    .heart:hover, .music-note:hover {
        transform: scale(1.2);
    }
    
    .letter-closed {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .letter-closed:hover {
        transform: scale(1.1);
    }
`;

document.head.appendChild(style);

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = "smooth";

// Add loading screen effect
window.addEventListener("load", function () {
  const container = document.querySelector(".container");
  container.style.opacity = "0";
  container.style.transform = "scale(0.9)";

  setTimeout(() => {
    container.style.transition = "all 1s ease-out";
    container.style.opacity = "1";
    container.style.transform = "scale(1)";
  }, 100);
});

// Add confetti effect on page load
function createConfetti() {
  const colors = ["#ff69b4", "#ff1493", "#ffb6c1", "#ffc0cb"];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "1000";
    confetti.style.animation = `confettiFall ${
      Math.random() * 3 + 2
    }s linear forwards`;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Add confetti animation
const confettiStyle = document.createElement("style");
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;

document.head.appendChild(confettiStyle);

// Don't trigger confetti on page load - only when letter is opened
// setTimeout(createConfetti, 2000);

// Add keyboard shortcuts
document.addEventListener("keydown", function (e) {
  if (e.key === "h" || e.key === "H") {
    createConfetti();
  }
  if (e.key === "Enter") {
    // Check if letter is closed, open it. If opened, open envelope
    const letterClosed = document.getElementById("letterClosed");
    if (letterClosed && letterClosed.style.display !== "none") {
      openLetter();
    } else {
      openEnvelope();
    }
  }
});

// Add touch support for mobile
document.addEventListener("touchstart", function (e) {
  if (e.target.classList.contains("letter-closed")) {
    e.preventDefault();
    openLetter();
  } else if (
    e.target.classList.contains("heart") ||
    e.target.classList.contains("music-note")
  ) {
    e.preventDefault();
    if (e.target.classList.contains("heart")) {
      createHeartBurst(e.target);
    } else {
      createMusicNote(e.target);
    }
  }
});

// Đã chuyển logic hiển thị chữ ký vào typeWriter()
