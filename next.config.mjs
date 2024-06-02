/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: [
            "icon-library.com","res.cloudinary.com"
        ]
    },
    experimental:{
        missingSuspenseWithCSRBailout: false
    }
};

export default 
nextConfig;
