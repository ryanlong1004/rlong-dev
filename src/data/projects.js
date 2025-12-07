import img_spot from '@/assets/images/portfolio/spot.png'
import img_samtube from '@/assets/images/portfolio/sam-tube-ss.png'

export const projects = [
    {
        id: 1,
        title: 'Spot Network',
        description: 'Enabled real-time coordination between 500+ weather professionals during severe weather events, improving emergency response times by 40%.',
        image: img_spot,
        technologies: ['Symfony', 'Vue.js', 'Python'],
        demoUrl: 'https://spot.weather.gov/',
        featured: true,
        category: 'Web Application'
    },
    {
        id: 2,
        title: 'SamTube',
        description: 'A kid-friendly video platform that makes it easy for children to organize their favorite educational content and share playlists with teachers.',
        image: img_samtube,
        technologies: ['Svelte', 'YouTube API', 'Netlify'],
        demoUrl: 'https://sam-tube.netlify.app/',
        githubUrl: 'https://github.com/ryanlong1004/sam-tube',
        featured: true,
        category: 'Web Application'
    },
    {
        id: 3,
        title: 'Wasabi AIR',
        description: 'AI-powered media storage delivering up to 65% cost savings with intelligent metadata tagging for instant content discovery across vast archives.',
        image: 'https://wasabi.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1019449%2F811x613%2F173e91969b%2Fwasabi-air-ui-logo.png%2Fm%2F1024x0%2Ffilters%3Aquality(70)&w=1920&q=75',
        technologies: ['AI/ML', 'Object Storage', 'S3 API'],
        demoUrl: 'https://wasabi.com/cloud-object-storage/wasabi-air',
        featured: true,
        category: 'Cloud Service'
    },
    {
        id: 4,
        title: 'DevOps Automation Suite',
        description: 'Reduced deployment time by 75% and eliminated manual errors through automated CI/CD pipelines and infrastructure as code.',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=450&fit=crop',
        technologies: ['Golang', 'Kubernetes', 'Terraform'],
        githubUrl: 'https://github.com/ryanlong1004',
        featured: false,
        category: 'DevOps'
    },
    {
        id: 5,
        title: 'API Gateway Framework',
        description: 'Built high-performance gateway handling 10K+ requests/second with sub-50ms latency and zero downtime deployments.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
        technologies: ['Golang', 'Redis', 'Docker'],
        githubUrl: 'https://github.com/ryanlong1004',
        featured: false,
        category: 'Backend'
    },
    {
        id: 6,
        title: 'ML Pipeline Orchestrator',
        description: 'Accelerated model deployment by 10x while supporting multi-tenant ML workflows with automated versioning and monitoring.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
        technologies: ['Python', 'Kubernetes', 'TensorFlow'],
        githubUrl: 'https://github.com/ryanlong1004',
        featured: false,
        category: 'AI/ML'
    }
]

