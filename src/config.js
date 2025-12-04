// Centralized config for URLs, API keys, coordinates, and theme values
export default {
    calendarUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HA-h8kiHIB8ocD3mX_7JlxFUYejBsGkq6C5OSISFQVrhMZvxn0ESlXoPRRKA35Ms1gINR4JfO",
    weather: {
        apiKey: "b70600f4495d4665c49354e8081d5424", // Move to .env for production
        lat: 41.31,
        lon: -75.32,
        openWeatherUrl: "https://api.openweathermap.org/data/2.5/weather",
        nwsForecastUrl: "https://api.weather.gov/gridpoints/BGM/82,33/forecast"
    },
    theme: {
        primary: "#00b140",
        secondary: "#3b82f6",
        background: "#333",
        text: "#fff"
    },
    portfolio: [
        {
            title: "SamTube",
            text: "An application I built for my son to curate his favorite YouTube videos and share them with his teachers.",
            technologies: "Svelte, HTML, JavaScript, YouTube API, CSS, Netlify, Bootstrap",
            link: "https://sam-tube.netlify.app/",
            imageLink: "/src/assets/images/portfolio/sam-tube-ss.png"
        },
        {
            title: "Spot Network",
            text: "An application to create communication between first responders, meteorologiests and the public.",
            technologies: "PHP, Symfony, Python, VueJS",
            link: "https://spot.weather.gov/",
            imageLink: "/src/assets/images/portfolio/spot.png"
        },
        {
            title: "Wasabi AIR",
            text: "Wasabi AIR is a cloud-based storage service provided by Wasabi, designed to offer fast, reliable, and cost-effective storage solutions. It focuses on delivering low-latency access to stored data, making it ideal for applications requiring frequent data retrieval. Wasabi AIR leverages Wasabi's hot cloud storage technology to provide scalable storage options, often at a lower cost than traditional cloud storage providers, without sacrificing performance or security.",
            link: "https://wasabi.com/cloud-object-storage/wasabi-air",
            imageLink: "https://wasabi.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1019449%2F811x613%2F173e91969b%2Fwasabi-air-ui-logo.png%2Fm%2F1024x0%2Ffilters%3Aquality(70)&w=1920&q=75"
        }
    ]
}
