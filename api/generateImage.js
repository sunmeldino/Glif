// generateImage.js

// Import Axios for making HTTP requests
const axios = require('axios');

// Handler function for the serverless function
module.exports = async (req, res) => {
    try {
        const glifApiKey = 'your_glif_api_key_here';
        const glifEndpoint = 'https://api.glif.io/v1/image/generate';

        // Make a POST request to Glif API
        const glifResponse = await axios.post(glifEndpoint, {
            apiKey: glifApiKey,
            // Add necessary parameters for generating the image
        });

        const imageUrl = glifResponse.data.imageUrl;

        // Return the image URL or image data
        res.status(200).json({ imageUrl });
    } catch (error) {
        console.error('Error fetching image from Glif API:', error);
        res.status(500).json({ error: 'Failed to fetch image' });
    }
};
