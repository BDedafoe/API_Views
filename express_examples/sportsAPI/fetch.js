class Fetch {
    async getCurrent(input) {
        const api_key = '42bf439e61771905bd136834d596bda8' || 'YOUR_API_KEY'
  
      //make request to url
       const response = await fetch(
        // `https://api.the-odds-api.com/v4/sports/?apiKey=${api_key}`
        `https://api.the-odds-api.com/v4/sports/${input}/scores/?daysFrom=1&apiKey=${api_key}`
        );
  
        const data = await response.json();
            console.log(data);
            return data;
    }
}