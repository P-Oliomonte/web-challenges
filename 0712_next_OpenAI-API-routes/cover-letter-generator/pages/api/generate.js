import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

export default async function handler(request, response) {
  const { userInfo, companyInfo } = request.body;
  console.log(request.body);

  const prompt = `Write a cover letter for a job application. Some info about the company and the position: ${companyInfo}. Some info about myself: ${userInfo}.`;

  const data = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  const completion = data.choices[0].message.content;

  response.status(200).json({ output: completion });
}
