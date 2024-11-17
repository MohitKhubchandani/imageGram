import cloudinary from "../config/cloudinaryConfig.js";


function fetchAllImages() {
    cloudinary.api.resources({
      type: 'upload',  // Fetch only images
      max_results: 100,  // Limit to 100 images per request
    }, (error, result) => {
      if (error) {
        console.error('Error fetching images:', error);
      } else {
        console.log('Fetched Images:');
        result.resources.forEach((image) => {
          console.log(`Public ID: ${image.public_id}, URL: ${image.url}`);
        });
      }
    });
  }
  
  fetchAllImages();
  