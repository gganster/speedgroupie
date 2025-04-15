"use server";
import OpenAI from "openai";

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