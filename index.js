const { OpenAI } = require("openai");
require("dotenv").config();

// OpenAI api key
// You get a secret_key from the API and use it by topping up your Account with at least $5
// Or you can ask a friend to generate a secret_key and use it :)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// You write a Prompt to this variable based on your purpose
// systemPrompt works on the information you send as a user 
const systemPrompt =""

// Question data must be in string format, you just send the string data using the simple method `data="some text"`
// If your data is in the form of an array, you need to convert it to a string
const questions = [].join("\n");
let chatCompletion;

async function main() {
  try {
    chatCompletion = await openai.chat.completions.create({
      messages: [
        //You can delete the 1.role: "system", 2. systemPrompt section if you only need answers to questions.
        { role: "system", content: systemPrompt },
        { role: "user", content: questions },
      ],
      model: "gpt-4", // or others modell
    });

    // return data
    return chatCompletion.choices[0].message.content;
  } catch (error) {
    throw new Error(error);
  }
}

const data = async () => {
  const ResponsData = await main();
  console.log(ResponsData);
};

data();
