let profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
    profileMenu.classList.toggle("open-menu");
}

let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity() {
    sideActivity.classList.toggle("open-activity");
    if (sideActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-</b>";

    }
    else {
        moreLink.innerHTML = "Show More <b>+</b>";
    }
}
const ctx = document.getElementById('eventLineChart').getContext('2d');

const eventChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2022', '2023', '2024', '2025'],
    datasets: [{
      label: 'Events Attended',
      data: [6, 12, 13, 9],
      borderColor: '#3498db',
      backgroundColor: 'rgba(52, 152, 219, 0.1)',
      fill: true,
      tension: 0, // Straight lines
      pointBackgroundColor: '#3498db',
      pointBorderColor: '#fff',
      pointRadius: 4,
      pointHoverRadius: 6,
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 10,
          font: {
            size: 12
          }
        }
      },
      title: {
        display: true,
        text: 'Tech Events Joined (2022–2025)',
        font: {
          size: 14
        }
      },
      tooltip: {
        callbacks: {
          label: context => `${context.parsed.y} events`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 10
          }
        },
        title: {
          display: true,
          text: 'Event Count',
          font: {
            size: 12
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 10
          }
        },
        title: {
          display: true,
          text: 'Year',
          font: {
            size: 12
          }
        }
      }
    }
  }
});
const winCtx = document.getElementById('winningLineChart').getContext('2d');

  const winningChart = new Chart(winCtx, {
    type: 'line',
    data: {
      labels: ['2022', '2023', '2024', '2025'],
      datasets: [{
        label: 'Competitions Won',
        data: [3, 5, 6, 4],
        borderColor: '#27ae60', // Green line
        backgroundColor: 'rgba(39, 174, 96, 0.1)', // Light green fill
        fill: true,
        tension: 0,
        pointBackgroundColor: '#27ae60',
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 10,
            font: {
              size: 12
            }
          }
        },
        title: {
          display: true,
          text: 'Competitions Won (2022–2025)',
          font: {
            size: 14
          }
        },
        tooltip: {
          callbacks: {
            label: context => `${context.parsed.y} wins`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 10
            }
          },
          title: {
            display: true,
            text: 'Win Count',
            font: {
              size: 12
            }
          }
        },
        x: {
          ticks: {
            font: {
              size: 10
            }
          },
          title: {
            display: true,
            text: 'Year',
            font: {
              size: 12
            }
          }
        }
      }
    }
  });
  const modal = document.getElementById("achievement-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".ach-close");

  // Query all elements with id 'ach-img' (even though technically IDs should be unique)
  const achImgs = document.querySelectorAll("#ach-img");

  achImgs.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  // Optional: close modal when clicking outside image
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
  const navLinks = document.querySelectorAll('.nav-link');

  // Click handler
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active-link'));
      this.classList.add('active-link');
    });
  });

  // Scroll-based active link
  window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 100;

    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (section &&
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop) {
        navLinks.forEach(l => l.classList.remove('active-link'));
        link.classList.add('active-link');
      }
    });
  });

   const contactModal = document.getElementById("contactModal");
  const openContactBtn = document.getElementById("openContactModal");
  const closeContactBtn = document.querySelector(".contact-close");

  openContactBtn.onclick = function (e) {
    e.preventDefault();
    contactModal.style.display = "block";
    setTimeout(() => contactModal.classList.add("show"), 10);
  };

  closeContactBtn.onclick = function () {
    contactModal.classList.remove("show");
    setTimeout(() => (contactModal.style.display = "none"), 400);
  };

  window.onclick = function (e) {
    if (e.target === contactModal) {
      contactModal.classList.remove("show");
      setTimeout(() => (contactModal.style.display = "none"), 400);
    }
  };
  var t = gsap.timeline();
  t.from("#nav li",{
y:-50,
delay:1,
stagger:0.3,

  })
  gsap.from("#graph #graph-a",{
    x:400,
    duration:1,
    delay:1.2,
   
 })
 gsap.from("#graph #graph-b",{
  x:400,
  duration:1,
  delay:2.2,
 
})
 
 gsap.to("#my-img",{
  rotateY: 360,
  duration: 1.2,
  
 })