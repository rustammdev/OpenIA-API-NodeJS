const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt =
  'You are given an array of questions. Your task is to filter this array by removing exact duplicate questions and merging questions that, while not identical, are very similar in meaning into a single, generalized question. Remove simple texts that cannot be called questions, for example, hello, test, or have no meaning.After filtering, create a new object where the filtered questions are grouped by their respective topics rather than listed sequentially. The steps are as follows: 1. **Deduplication**: Identify and remove exact duplicate questions from the array. 2. **Consolidation**: For questions that are not exact duplicates but convey the same or very similar meaning, merge them into a single, comprehensive question. 3. **Categorization**: Organize the resulting questions into groups based on their topics. Each topic should have a category in the new object, and related questions should be grouped under these categories. 4. **Output**: Return the new json with categorized questions.Ensure that the new object structure is clear and that the questions within each category are relevant to that topic. The result should be a well-organized and concise set of questions that covers all the original content without redundancy. Please always return the following data in the same structure. Bring any type of information into the following form:{ "title1": ["content1", "content2", ...], "title2": ["content1", "content2", ...],...}';

const questions = [
  "Dasturlashni oʻrganish jarayonida nimalarga koʻproq etibor berish kerak",
  "Nima qiyinchilik bor Google da",
  "42.uz'da algorithm and data structure xaqida qachon kurs chiqadi?",
  "Kurslar soni kopaysin",
  "Yoqmayapsiz yo'qoling",
  "Aka katta raxmat ko'p narsa o'rgandik",
  "Salom",
  "Qilgan loyihalarizdan pul topasizmi ?",
  "Backend haqida mukammal kurslar qachon chiqadi bro",
  "afoeijiofh aifea",
  "Assalomu alaykum. hozirda monetizatsiya qila olgan loyihalariz bormi?",
  "Dasturlashda qaysi yo'nalishni va qaysi sohani o'rganishni tavsiya qilasiz?",
  "Qaysi dasturlash tilini o'rgansam yaxshi ?",
].join("\n");

let chatCompletion;

async function main() {
  try {
    chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: questions },
      ],
      model: "gpt-4",
    });

    return chatCompletion.choices[0].message.content;
  } catch (error) {
    throw new Error(error);
  }
}

const data = async () => {
  const ResponsData = `${await main()}`;

  const jsonString = ResponsData.match(/\{[\s\S]*\}/)[0];
  const jsonObject = JSON.parse(jsonString);

  console.log(jsonObject);
};

data();

// const responsData = {
//   Dasturlash: [
//     "Dasturlashni oʻrganish jarayonida nimalarga koʻproq etibor berish kerak?",
//     "Dasturlashda qaysi yo'nalishni va qaysi sohani o'rganishni tavsiya qilasiz?",
//     "Qaysi dasturlash tilini o'rgansam yaxshi ?",
//   ],
//   Kurslar: [
//     "42.uz'da algorithm va data structure xaqida qachon kurs chiqadi?",
//     "Backend haqida mukammal kurslar qachon chiqadi?",
//   ],
//   Loyihalar: [
//     "Qilgan loyihalarizdan pul topasizmi ?",
//     "Hozirda monetizatsiya qila olgan loyihalariz bormi?",
//   ],
//   Google: ["Nima qiyinchilik bor Google da"],
// };
