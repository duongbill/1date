// Translations object
const translations = {
  vi: {
    title: "💕 Thư Mời First Date 💕",
    greeting: "Gửi Em,",
    intro: 'Chào <span class="special-name">Huyền Nga</span> ✨',
    "main-content":
      "Cảm ơn em đã quét QR nha heheh. Anh viết những dòng này với mong muốn chúng ta có một buổi hẹn ở bên ngoài, để mình có cơ hội trò chuyện nhiều hơn, chia sẻ những điều thú vị và cùng tạo nên một kỷ niệm đáng nhớ cho cả hai.",
    "location-info":
      "Anh sắp phải rời khỏi Lào Cai rùi, nên buổi hẹn đầu tiên của anh và em chắc sẽ là ở dưới Hà Nội",
    "hope-message":
      "Anh hy vọng buổi hẹn này sẽ là khoảng thời gian thật thoải mái giữa hai ta, để mình có thể lắng nghe, chia sẻ và hiểu nhau hơn. Biết đâu, buổi đi chơi này lại là khởi đầu cho một điều gì đó… thật đẹp giữa hai đứa mình, đúng hong?",
    "choice-message":
      "Anh vẫn muốn để em chọn nơi mà em muốn đi khi em xuống Hà Nội, em hong cần điền vội đâu, khi nào gần xuống Hà Nội rùi em vô lại đây, em bấm vô đó và chọn nơi em muốn đi nha, anh sẽ đến đón và đưa em đi.",
    "pate-message":
      "À, pate cho Cam anh mua vị gà với cá tuyết, đúng yêu cầu của Cam nha. Anh chúc Cam ăn ngon miệng nhaaa.",
    "closing-message":
      "Anh chúc Huyền Nga đỗ NV1 nha, hẹn gặp em ở Hà Nội nhé 💕",
    signature: "Cảm ơn em đã đọc,",
    "button-text": "Chọn Nơi Đi Date Ở Đây Nè Em",
    "button-tooltip":
      "Khám phá những địa điểm tuyệt vời cho buổi hẹn đầu tiên! 🌸",
    "button-tooltip-title": "Click để khám phá những địa điểm lãng mạn! 🌟",
  },
  en: {
    title: "💕 First Date Invitation 💕",
    greeting: "Dear You,",
    intro: 'Hello <span class="special-name">Huyền Nga</span> ✨',
    "main-content":
      "Thank you for scanning the QR code hehe. I'm writing these lines hoping we can have a date outside, so we can have the opportunity to talk more, share interesting things and create a memorable moment for both of us.",
    "location-info":
      "I'm about to leave Lào Cai soon, so our first date will probably be in Hanoi",
    "hope-message":
      "I hope this date will be a really comfortable time between us, so we can listen, share and understand each other better. Who knows, this outing might be the beginning of something... really beautiful between us, right?",
    "choice-message":
      "I still want to let you choose where you want to go when you come to Hanoi, you don't need to fill it out in a hurry, when you're about to come to Hanoi, come back here, click on it and choose where you want to go, I'll come pick you up and take you there.",
    "pate-message":
      "Oh, I bought chicken and snow fish flavored pate for Cam, exactly as Cam requested. I wish Cam a delicious meal!",
    "closing-message": "I wish Huyền Nga success in NV1, see you in Hanoi 💕",
    signature: "Thank you for reading,",
    "button-text": "Choose Date Location Here",
    "button-tooltip": "Explore wonderful places for our first date! 🌸",
    "button-tooltip-title": "Click to explore romantic locations! 🌟",
  },
  zh: {
    title: "💕 初次约会邀请函 💕",
    greeting: "亲爱的你，",
    intro: '你好 <span class="special-name">Huyền Nga</span> ✨',
    "main-content":
      "谢谢你扫描二维码呢嘿嘿。我写下这些话，希望我们能在外面约会，这样我们就有机会多聊聊，分享有趣的事情，为我们两个创造一个难忘的回忆。",
    "location-info": "我很快就要离开老街了，所以我们的第一次约会可能会在河内",
    "hope-message":
      "我希望这次约会对我们来说是一段真正舒适的时光，这样我们就能倾听、分享并更好地了解彼此。谁知道呢，这次出游可能是我们之间某种...真正美好事物的开始，对吧？",
    "choice-message":
      "我仍然想让你选择当你来河内时想去的地方，你不需要急着填写，当你快要来河内时，回到这里，点击它并选择你想去的地方，我会来接你并带你去那里。",
    "pate-message":
      "哦，我给Cam买了鸡肉和雪鱼味的肉酱，完全按照Cam的要求。祝Cam用餐愉快！",
    "closing-message": "祝Huyền Nga在NV1中成功，河内见 💕",
    signature: "谢谢你的阅读，",
    "button-text": "在这里选择约会地点",
    "button-tooltip": "探索我们第一次约会的美妙地点！🌸",
    "button-tooltip-title": "点击探索浪漫地点！🌟",
  },
};

// Telegram configuration
const TELEGRAM_CONFIG = {
  // Token bot từ BotFather
  BOT_TOKEN: "8188463035:AAEQtz13139Qsnmb_Gzgb18NU5m2u9VibOM",

  // Chat ID của bạn
  CHAT_ID: "1898063540",
};

// Function to get visitor's IP address and location
async function getVisitorInfo() {
  // List of APIs to try
  const apis = [
    {
      url: "https://ipapi.co/json/",
      parser: (data) => ({
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_name,
        timezone: data.timezone,
        isp: data.org,
      }),
    },
    {
      url: "https://api.ipify.org?format=json",
      parser: (data) => ({
        ip: data.ip,
        city: "Unknown",
        region: "Unknown",
        country: "Unknown",
        timezone: "Unknown",
        isp: "Unknown",
      }),
    },
    {
      url: "https://httpbin.org/ip",
      parser: (data) => ({
        ip: data.origin,
        city: "Unknown",
        region: "Unknown",
        country: "Unknown",
        timezone: "Unknown",
        isp: "Unknown",
      }),
    },
  ];

  // Try each API
  for (const api of apis) {
    try {
      console.log(`Trying API: ${api.url}`);
      const response = await fetch(api.url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        timeout: 5000,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("API response:", data);
        const result = api.parser(data);

        // Check if we got valid data
        if (result.ip && result.ip !== "undefined") {
          console.log("Successfully got visitor info:", result);
          return result;
        }
      }
    } catch (error) {
      console.log(`API ${api.url} failed:`, error);
      continue;
    }
  }

  // If all APIs fail, return basic info
  console.log("All APIs failed, using fallback info");
  return {
    ip: "Không xác định",
    city: "Không xác định",
    region: "Không xác định",
    country: "Việt Nam",
    timezone: "Asia/Ho_Chi_Minh",
    isp: "Không xác định",
  };
}

// Function to send notification to Telegram
async function sendTelegramNotification(visitorInfo) {
  const currentTime = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Format location info
  const locationInfo =
    [visitorInfo.city, visitorInfo.region, visitorInfo.country]
      .filter((item) => item && item !== "Unknown" && item !== "Không xác định")
      .join(", ") || "Không xác định";

  const message = `🚨 CÓ NGƯỜI TRUY CẬP TRANG WEB! 🚨

📅 Thời gian: ${currentTime}
🌐 IP Address: ${visitorInfo.ip}
📍 Vị trí: ${locationInfo}
🕐 Múi giờ: ${visitorInfo.timezone}
🏢 ISP: ${visitorInfo.isp}
📱 Trình duyệt: ${
    navigator.userAgent.includes("Chrome")
      ? "Chrome"
      : navigator.userAgent.includes("Firefox")
      ? "Firefox"
      : navigator.userAgent.includes("Safari")
      ? "Safari"
      : "Khác"
  }
💻 Hệ điều hành: ${
    navigator.userAgent.includes("Windows")
      ? "Windows"
      : navigator.userAgent.includes("Mac")
      ? "macOS"
      : navigator.userAgent.includes("Linux")
      ? "Linux"
      : navigator.userAgent.includes("Android")
      ? "Android"
      : navigator.userAgent.includes("iOS")
      ? "iOS"
      : "Khác"
  }
📱 Thiết bị: ${navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop"}

💕 Có thể là Huyền Nga đấy! 💕`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CONFIG.CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    if (response.ok) {
      console.log("Telegram notification sent successfully");
    } else {
      console.log("Failed to send Telegram notification");
    }
  } catch (error) {
    console.log("Error sending Telegram notification:", error);
  }
}

// Send notification when page loads
async function notifyPageVisit() {
  const visitorInfo = await getVisitorInfo();
  await sendTelegramNotification(visitorInfo);
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Send notification about page visit
  notifyPageVisit();

  // Add cat effects immediately (available before letter is opened)
  addCatEffects();

  // Initialize enhanced background effects
  initializeStars();
  initializeParticles();
  initializeParallax();
  initializePetals();
  initializeButterflies();
  initializeThemeSwitcher();
  initializeTouchRipples();

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

  // Add cat icon effects (available immediately)
  function addCatEffects() {
    const catIcons = document.querySelectorAll(".cat-icon");
    catIcons.forEach((cat) => {
      cat.addEventListener("click", function () {
        createCatEffect(this);
      });

      // Add random movement (only when letter is not opened)
      setInterval(() => {
        if (
          Math.random() < 0.1 &&
          !document.body.classList.contains("letter-opened")
        ) {
          // 10% chance every interval, but only if letter is not opened
          moveCatRandomly(cat);
        }
      }, 3000);
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

  // Function to send notification when letter is opened
  async function notifyLetterOpened() {
    const visitorInfo = await getVisitorInfo();
    const currentTime = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const message = `💌 NGƯỜI DÙNG ĐÃ MỞ THƯ! 💌

📅 Thời gian: ${currentTime}
🌐 IP Address: ${visitorInfo.ip}
📍 Vị trí: ${visitorInfo.city}, ${visitorInfo.region}, ${visitorInfo.country}

💕 Huyền Nga đã đọc thư rồi! 💕`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CONFIG.CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        console.log("Letter opened notification sent successfully");
      }
    } catch (error) {
      console.log("Error sending letter opened notification:", error);
    }
  }

  // Function to open letter
  window.openLetter = function () {
    // Send notification that letter was opened
    notifyLetterOpened();
    // Animate envelope opening
    const envelopeFlapTop = document.querySelector(".envelope-flap-top");
    const letterInside = document.querySelector(".letter-inside");
    const heartSeal = document.querySelector(".heart-seal");
    const letterContent = document.querySelector(".letter-content-preview");
    const letterTexts = document.querySelectorAll(".letter-content-preview p");

    // Open the envelope flap
    envelopeFlapTop.style.transform = "rotateX(-180deg)";

    // Add melting animation to heart seal
    heartSeal.classList.add("melting");

    // Hide heart seal after melting
    setTimeout(() => {
      heartSeal.style.opacity = "0";
      heartSeal.style.transform = "translate(-50%, -50%) scale(0.5)";
    }, 500);

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

                // Add class to body to indicate letter is opened (this will hide cats)
                document.body.classList.add("letter-opened");

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

// Create cat effect when clicked
function createCatEffect(cat) {
  // Special effects for new cats and icons (cat5, cat6, cat7, dav-icon, ftu-icon) - always work
  if (
    cat.classList.contains("cat5") ||
    cat.classList.contains("cat6") ||
    cat.classList.contains("cat7") ||
    cat.classList.contains("dav-icon") ||
    cat.classList.contains("ftu-icon")
  ) {
    // Add bounce animation
    cat.classList.add("bounce");

    // Create special effects based on icon type
    if (cat.classList.contains("dav-icon")) {
      createDAVEffect(cat);
    } else if (cat.classList.contains("ftu-icon")) {
      createFTUEffect(cat);
    } else {
      createSpecialHeartExplosion(cat);
    }

    // Remove bounce class after animation
    setTimeout(() => {
      cat.classList.remove("bounce");
    }, 600);

    return;
  }

  // Original logic for old cats - don't create effect if letter is already opened
  if (document.body.classList.contains("letter-opened")) {
    return;
  }

  // Add bounce animation
  cat.classList.add("bounce");

  // Remove bounce class after animation
  setTimeout(() => {
    cat.classList.remove("bounce");
  }, 600);

  // Create cat particles
  const catEmojis = ["🐾", "💕", "✨", "🎀", "🐟"];

  for (let i = 0; i < 6; i++) {
    const particle = document.createElement("div");
    particle.innerHTML =
      catEmojis[Math.floor(Math.random() * catEmojis.length)];
    particle.style.position = "fixed";
    particle.style.left = cat.offsetLeft + 40 + "px"; // Center of cat image
    particle.style.top = cat.offsetTop + 40 + "px"; // Center of cat image
    particle.style.fontSize = "1.5rem";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "1000";

    const angle = i * 60 * (Math.PI / 180);
    const distance = 80;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    particle.style.animation = `catParticle 1.2s ease-out forwards`;
    particle.style.setProperty("--x", x + "px");
    particle.style.setProperty("--y", y + "px");

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1200);
  }

  // Play meow sound effect (visual representation)
  createMeowEffect(cat);
}

// Special heart explosion for new cats
function createSpecialHeartExplosion(cat) {
  const rect = cat.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const specialEmojis = ["💖", "💕", "💗", "💓", "💝", "🌸", "✨", "🎀"];

  for (let i = 0; i < 12; i++) {
    const emoji = document.createElement("div");
    emoji.textContent =
      specialEmojis[Math.floor(Math.random() * specialEmojis.length)];
    emoji.style.position = "fixed";
    emoji.style.left = centerX + "px";
    emoji.style.top = centerY + "px";
    emoji.style.fontSize = "24px";
    emoji.style.pointerEvents = "none";
    emoji.style.zIndex = "9999";
    emoji.style.userSelect = "none";

    document.body.appendChild(emoji);

    const angle = (i / 12) * 2 * Math.PI;
    const distance = 100 + Math.random() * 50;
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;

    emoji.animate(
      [
        {
          transform: "translate(0, 0) scale(0) rotate(0deg)",
          opacity: 1,
        },
        {
          transform: `translate(${endX - centerX}px, ${
            endY - centerY
          }px) scale(1.5) rotate(360deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }
    ).onfinish = () => {
      emoji.remove();
    };
  }
}

// Special DAV effect
function createDAVEffect(icon) {
  const rect = icon.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const davEmojis = ["🎓", "📚", "✏️", "🏫", "🌟", "💡", "🎯", "🏆"];

  for (let i = 0; i < 10; i++) {
    const emoji = document.createElement("div");
    emoji.textContent = davEmojis[Math.floor(Math.random() * davEmojis.length)];
    emoji.style.position = "fixed";
    emoji.style.left = centerX + "px";
    emoji.style.top = centerY + "px";
    emoji.style.fontSize = "20px";
    emoji.style.pointerEvents = "none";
    emoji.style.zIndex = "9999";
    emoji.style.userSelect = "none";

    document.body.appendChild(emoji);

    const angle = (i / 10) * 2 * Math.PI;
    const distance = 80 + Math.random() * 40;
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;

    emoji.animate(
      [
        {
          transform: "translate(0, 0) scale(0) rotate(0deg)",
          opacity: 1,
        },
        {
          transform: `translate(${endX - centerX}px, ${
            endY - centerY
          }px) scale(1.2) rotate(180deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 1200,
        easing: "ease-out",
      }
    ).onfinish = () => {
      emoji.remove();
    };
  }
}

// Special FTU effect
function createFTUEffect(icon) {
  const rect = icon.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const ftuEmojis = ["🏛️", "📖", "🎭", "🎨", "🌍", "🗣️", "📝", "🎪"];

  for (let i = 0; i < 10; i++) {
    const emoji = document.createElement("div");
    emoji.textContent = ftuEmojis[Math.floor(Math.random() * ftuEmojis.length)];
    emoji.style.position = "fixed";
    emoji.style.left = centerX + "px";
    emoji.style.top = centerY + "px";
    emoji.style.fontSize = "20px";
    emoji.style.pointerEvents = "none";
    emoji.style.zIndex = "9999";
    emoji.style.userSelect = "none";

    document.body.appendChild(emoji);

    const angle = (i / 10) * 2 * Math.PI;
    const distance = 80 + Math.random() * 40;
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;

    emoji.animate(
      [
        {
          transform: "translate(0, 0) scale(0) rotate(0deg)",
          opacity: 1,
        },
        {
          transform: `translate(${endX - centerX}px, ${
            endY - centerY
          }px) scale(1.2) rotate(-180deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 1200,
        easing: "ease-out",
      }
    ).onfinish = () => {
      emoji.remove();
    };
  }
}

// Create meow effect
function createMeowEffect(cat) {
  const meow = document.createElement("div");
  meow.innerHTML = "Meow! 🗣️";
  meow.style.position = "fixed";
  meow.style.left = cat.offsetLeft + 40 + "px"; // Center above cat
  meow.style.top = cat.offsetTop - 20 + "px"; // Above cat image
  meow.style.fontSize = "1.2rem";
  meow.style.color = "#ff1493";
  meow.style.fontWeight = "bold";
  meow.style.pointerEvents = "none";
  meow.style.zIndex = "1000";
  meow.style.animation = "meowPop 1.5s ease-out forwards";
  meow.style.textShadow = "2px 2px 4px rgba(0,0,0,0.3)";

  document.body.appendChild(meow);

  setTimeout(() => {
    meow.remove();
  }, 1500);
}

// Move cat randomly
function moveCatRandomly(cat) {
  const catSize = 80; // Cat image size
  const maxX = window.innerWidth - catSize;
  const maxY = window.innerHeight - catSize;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  cat.style.transition = "all 2s ease-in-out";
  cat.style.left = newX + "px";
  cat.style.top = newY + "px";

  // Reset transition after movement
  setTimeout(() => {
    cat.style.transition = "all 0.3s ease";
  }, 2000);
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

    @keyframes catParticle {
        0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(var(--x), var(--y)) scale(0) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes meowPop {
        0% {
            transform: scale(0) translateY(0);
            opacity: 1;
        }
        50% {
            transform: scale(1.2) translateY(-20px);
            opacity: 1;
        }
        100% {
            transform: scale(0.8) translateY(-40px);
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
  } else if (e.target.classList.contains("cat-icon")) {
    e.preventDefault();
    createCatEffect(e.target);
  }
});

// Đã chuyển logic hiển thị chữ ký vào typeWriter()

// ===== ENHANCED BACKGROUND EFFECTS =====

// Initialize parallax stars
function initializeStars() {
  const starsContainer = document.getElementById("starsContainer");
  const starCount = 50;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.innerHTML = "✨";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    starsContainer.appendChild(star);
  }
}

// Initialize floating particles
function initializeParticles() {
  const particlesContainer = document.getElementById("particlesContainer");
  const particles = ["💖", "💕", "✨", "🌸", "💫", "⭐", "🌟", "💎"];

  function createParticle() {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.innerHTML =
      particles[Math.floor(Math.random() * particles.length)];
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = Math.random() * 5 + 8 + "s";
    particle.style.animationDelay = Math.random() * 2 + "s";

    particlesContainer.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 10000);
  }

  // Create initial particles
  for (let i = 0; i < 8; i++) {
    setTimeout(() => createParticle(), i * 1000);
  }

  // Continue creating particles
  setInterval(createParticle, 2000);
}

// Initialize parallax effect for stars
function initializeParallax() {
  document.addEventListener("mousemove", function (e) {
    const stars = document.querySelectorAll(".star");
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    stars.forEach((star, index) => {
      const speed = ((index % 3) + 1) * 0.5; // Different speeds for depth
      const x = (mouseX - 0.5) * speed * 20;
      const y = (mouseY - 0.5) * speed * 20;

      star.style.transform = `translate(${x}px, ${y}px) scale(${
        star.style.transform.includes("scale")
          ? star.style.transform.match(/scale\(([\d.]+)\)/)[1]
          : 1
      })`;
    });
  });
}

// Initialize falling petals
function initializePetals() {
  const petalsContainer = document.getElementById("petalsContainer");
  const petals = ["🌸", "🌺", "🌻", "🌷", "🌹", "💮"];

  function createPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
    petal.style.left = Math.random() * 100 + "%";
    petal.style.animationDuration = Math.random() * 3 + 8 + "s";
    petal.style.animationDelay = Math.random() * 2 + "s";

    petalsContainer.appendChild(petal);

    setTimeout(() => {
      if (petal.parentNode) {
        petal.parentNode.removeChild(petal);
      }
    }, 12000);
  }

  // Create petals continuously
  setInterval(createPetal, 1500);
}

// Initialize butterflies
function initializeButterflies() {
  const butterflyContainer = document.getElementById("butterflyContainer");
  const butterflies = ["🦋", "🦋", "🦋"];

  function createButterfly() {
    const butterfly = document.createElement("div");
    butterfly.className = "butterfly";
    butterfly.innerHTML =
      butterflies[Math.floor(Math.random() * butterflies.length)];
    butterfly.style.animationDuration = Math.random() * 5 + 15 + "s";
    butterfly.style.animationDelay = Math.random() * 3 + "s";

    butterflyContainer.appendChild(butterfly);

    setTimeout(() => {
      if (butterfly.parentNode) {
        butterfly.parentNode.removeChild(butterfly);
      }
    }, 20000);
  }

  // Create butterflies occasionally
  setInterval(createButterfly, 8000);
  createButterfly(); // Create first one immediately
}

// Initialize theme switcher
function initializeThemeSwitcher() {
  const themeButtons = document.querySelectorAll(".theme-btn");

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const theme = this.dataset.theme;
      changeTheme(theme);
    });
  });
}

function changeTheme(theme) {
  const body = document.body;

  switch (theme) {
    case "pink":
      body.style.background =
        "linear-gradient(135deg, #ffeef8, #ffe0f0, #ffd1e8, #ffb6c1, #ff69b4)";
      break;
    case "purple":
      body.style.background =
        "linear-gradient(135deg, #f3e5f5, #e1bee7, #ce93d8, #ba68c8, #9c27b0)";
      break;
    case "blue":
      body.style.background =
        "linear-gradient(135deg, #e3f2fd, #bbdefb, #90caf9, #64b5f6, #2196f3)";
      break;
  }
}

// Initialize touch ripples
function initializeTouchRipples() {
  document.addEventListener("touchstart", function (e) {
    createRipple(e.touches[0].clientX, e.touches[0].clientY, e.target);
  });

  document.addEventListener("click", function (e) {
    createRipple(e.clientX, e.clientY, e.target);
  });
}

function createRipple(x, y, element) {
  const ripple = document.createElement("div");
  ripple.className = "touch-ripple";

  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x - rect.left - size / 2 + "px";
  ripple.style.top = y - rect.top - size / 2 + "px";

  element.style.position = "relative";
  element.appendChild(ripple);

  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 600);
}

// Language switching functionality
let currentLanguage = "vi"; // Default language

function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("selectedLanguage", lang);

  // Update all elements with data-translate attribute
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Update button tooltip title
  const buttonWrapper = document.querySelector("[data-translate-title]");
  if (buttonWrapper && translations[lang]["button-tooltip-title"]) {
    buttonWrapper.setAttribute(
      "title",
      translations[lang]["button-tooltip-title"]
    );
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

function initializeLanguage() {
  // Get saved language or default to Vietnamese
  const savedLanguage = localStorage.getItem("selectedLanguage") || "vi";
  const languageSelect = document.getElementById("languageSelect");

  if (languageSelect) {
    languageSelect.value = savedLanguage;
    changeLanguage(savedLanguage);

    // Add event listener for language change
    languageSelect.addEventListener("change", function () {
      changeLanguage(this.value);
    });
  }
}

// Initialize language when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeLanguage();
});
