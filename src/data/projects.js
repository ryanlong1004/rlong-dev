import img_spot from '@/assets/images/portfolio/spot.png'
import img_samtube from '@/assets/images/portfolio/sam-tube-ss.png'

export const projects = [
    {
        id: 1,
        title: 'Spot Network',
        description: 'An application to create communication between first responders, meteorologists and the public.',
        longDescription: 'Spot Network is a comprehensive platform designed to facilitate real-time communication and data sharing between emergency response teams, weather professionals, and the general public during severe weather events.',
        image: img_spot,
        technologies: ['PHP', 'Symfony', 'Python', 'Vue.js', 'MySQL'],
        demoUrl: 'https://spot.weather.gov/',
        featured: true,
        category: 'Web Application'
    },
    {
        id: 2,
        title: 'SamTube',
        description: 'An application I built for my son to curate his favorite YouTube videos and share them with his teachers.',
        longDescription: 'SamTube is a kid-friendly video curation platform that allows children to safely organize and share their favorite educational content with teachers and parents.',
        image: img_samtube,
        technologies: ['Svelte', 'JavaScript', 'YouTube API', 'Bootstrap', 'Netlify'],
        demoUrl: 'https://sam-tube.netlify.app/',
        featured: true,
        category: 'Web Application'
    },
    {
        id: 3,
        title: 'Wasabi AIR',
        description: 'Cloud-based storage service providing fast, reliable, and cost-effective storage solutions.',
        longDescription: 'Wasabi AIR is a cloud-based storage service designed to offer fast, reliable, and cost-effective storage solutions. It focuses on delivering low-latency access to stored data, making it ideal for applications requiring frequent data retrieval.',
        image: 'https://wasabi.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1019449%2F811x613%2F173e91969b%2Fwasabi-air-ui-logo.png%2Fm%2F1024x0%2Ffilters%3Aquality(70)&w=1920&q=75',
        technologies: ['Cloud Storage', 'S3 API', 'Object Storage', 'CDN'],
        demoUrl: 'https://wasabi.com/cloud-object-storage/wasabi-air',
        featured: true,
        category: 'Cloud Service'
    }
]
