"use server";
import OpenAI from "openai";
import axios from "axios";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getArtistMoreInfo = async (artistData) => {
  const artistName = artistData.name;
  const artistImage = artistData.image;
  const artistDescription = artistData.description || "No description available.";

  const prompt = `In french, 30 words max, Generate a short biography for the artist ${artistName}. Include their background, style, and notable works. Use the following information: ${artistDescription}`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: prompt },
      ],
      max_tokens: 75,
      temperature: 0.7,
    });

    const generatedText = response.choices[0].message.content.trim();
    return generatedText;
  } catch (error) {
    console.error("Error fetching artist info:", error);
    return "No additional information available.";
  }
}

export const getConcerts = async (searchTerm) => {
  const urls = [
    `https://groupietrackers.herokuapp.com/api/artists`,
    `https://groupietrackers.herokuapp.com/api/dates`,
    `https://groupietrackers.herokuapp.com/api/locations`,
    `https://groupietrackers.herokuapp.com/api/relation`
  ]

  const res = await Promise.all(urls.map(url => axios.get(url)));

  const prompt = `
  In french, Generate a list of concerts. Include the date, genre, location and others informations provided by the searchterm.
  You can found the data for concerts and locations here: ${JSON.stringify(res.map(i => i.data))}.
  searchterm: ${searchTerm}

  The genre aren't provided by the api, use your knowledge to determinate the genre from artist name.
  
  if there is no concert, say "Pas de concert trouvé."
  if there is no data about the artist say "Pas de données sur l'artiste."

  use tailwindcss and html to format the output. we are in dark theme.

  don't use \`\`\`, just provide html as text
  `;

  console.log(prompt.length);

  try {
    const response = await openai.chat.completions.create({
      model: "o1-mini",
      messages: [
        { role: "user", content: prompt },
      ],
      max_completion_tokens: 65536,
    });

    const generatedText = response.choices[0].message.content.trim();
    return generatedText;
  } catch (error) {
    console.error("Error fetching concerts:", error);
    return "Pas de concert trouvé.";
  }
}