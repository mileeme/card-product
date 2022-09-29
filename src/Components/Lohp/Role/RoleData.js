const roleData = [
  "Data analyst",
  "Digital marketer",
  "Data scientist",
  "Bookkeeper",
  "Back-end developer",
  "Front-end developer",
  "Project manager",
  "Cybersecurity analyst",
]

// Chart data
const chartData = {
  labels: ["2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032"],
  datasets: [
    {
      // label: "IT support specialist open positions",
      data: [9, 10, 11, 12, 13, 14, 17, 18, 20, 21, 23],
      fill: true,
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      backgroundColor: "rgba(0,85,208,1)",
      borderColor: "rgba(0,85,208,1)",        
    },
  ]
};

// Chart options
const chartOptions = {
  maintainAspectRation: false,
  responsive: true,
  animations: {
    delay: 800,
    duration: 600,
    easing: 'easeInOutBack',
  },

  transitions: {
    show: {
      animations: {
        x: {
          from: 0
        },
        y: {
          from: 0
        }
      }
    },
    hide: {
      animations: {
        x: {
          to: 0
        },
        y: {
          to: 0
        },
      }
    }
  },
  plugins: {
    legend: {
      display: false,
    }
  },
  title: {
    display: false
  },
  scales: {
    x: {
      grid: {
        display: false,
        borderColor: 'rgba(0,85,208,0)',
      },
      ticks: {
        display: false,
      }
    },
    y: {
      grid: {
        display: true,
        borderColor: 'rgba(0,85,208,0)',
      },
      ticks: {
        display: false,
        autoSkip: true,
        maxTicksLimit: 2,
        beginAtZero: false,
        stepSize: 20,
        // max: 30,
        // min: 20,
        // padding: -40
      }
    }
  },
}

export {roleData, chartData, chartOptions}