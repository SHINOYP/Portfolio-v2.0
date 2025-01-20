'use client';

import { useEffect } from 'react';

export default function AnimatedFavicon() {
    useEffect(() => {
        const timer = setTimeout(() => {
            let favicon_video_image_counter = 0;
            const favicon_video_icon_tag = document.querySelector("link[rel='icon']");

            if (!favicon_video_icon_tag) {
                // Create favicon link if it doesn't exist
                const link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }

            const favicon_video_images = [
                "https://favicongenerator.s3.amazonaws.com/7a917f7f8f125.png",
                "https://favicongenerator.s3.amazonaws.com/fe4c568e599a6.png",
                "https://favicongenerator.s3.amazonaws.com/2d3f0d53c4cde.png",
                "https://favicongenerator.s3.amazonaws.com/396b23d430237.png",
                "https://favicongenerator.s3.amazonaws.com/ab605f7e68f7b.png",
                "https://favicongenerator.s3.amazonaws.com/3777354af8019.png",
                "https://favicongenerator.s3.amazonaws.com/0328353e7e221.png",
                "https://favicongenerator.s3.amazonaws.com/d3d99bcf0d032.png",
                "https://favicongenerator.s3.amazonaws.com/d2478a056c997.png",
                "https://favicongenerator.s3.amazonaws.com/904be123abe02.png",
                "https://favicongenerator.s3.amazonaws.com/99720bb6fc836.png",
                "https://favicongenerator.s3.amazonaws.com/8a19150641f65.png",
                "https://favicongenerator.s3.amazonaws.com/6b1b86f0e123a.png",
                "https://favicongenerator.s3.amazonaws.com/e50122080782c.png",
                "https://favicongenerator.s3.amazonaws.com/8b30240a558f8.png",
                "https://favicongenerator.s3.amazonaws.com/e38d7d1b78984.png",
                "https://favicongenerator.s3.amazonaws.com/1f5694efd7f33.png",
                "https://favicongenerator.s3.amazonaws.com/76b6d714da811.png"
            ];

            async function favicon_video_to_data_url(url) {
                try {
                    const response = await fetch(url);
                    const blob = await response.blob();
                    return new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result);
                        reader.readAsDataURL(blob);
                    });
                } catch (error) {
                    console.error('Error loading favicon:', error);
                    return null;
                }
            }

            const favicon_video_loaded_images = [];

            // Load all images
            Promise.all(
                favicon_video_images.map((url, idx) =>
                    favicon_video_to_data_url(url).then(dataUrl => {
                        favicon_video_loaded_images[idx] = dataUrl;
                    })
                )
            );

            // Start animation interval
            const intervalId = setInterval(() => {
                if (favicon_video_loaded_images[favicon_video_image_counter]) {
                    const favicon = document.querySelector("link[rel='icon']");
                    if (favicon) {
                        favicon.href = favicon_video_loaded_images[favicon_video_image_counter].replace(
                            "application/octet-stream",
                            "image/png"
                        );
                    }
                }

                favicon_video_image_counter =
                    favicon_video_image_counter === favicon_video_loaded_images.length - 1
                        ? 0
                        : favicon_video_image_counter + 1;
            }, 100);

            // Cleanup function
            return () => {
                clearInterval(intervalId);
            };
        }, 2000);

        // Cleanup timeout
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this runs once on mount

    return null; // This component doesn't render anything
}