import {MetadataRoute} from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            disallow: ['/account', '/media-hub'],
        },
        sitemap: 'https://ialgc.org/sitemap.xml',
    }
}