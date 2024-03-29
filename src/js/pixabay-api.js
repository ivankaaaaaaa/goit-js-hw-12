import axios from 'axios';
export async function getImage(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
      key: '43042645-53d81a66cc18e8ae6a97e5a5a',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
  
    const url = `${BASE_URL}?${params}`;

    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
    }
    catch(error){
        throw new Error('Failed to fetch data from Pixabay API');
  }
    }