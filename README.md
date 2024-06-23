# GPT-4 Chatbot

This is a simple chatbot that utilizes the OpenAI API to generate responses based on user input. This chatbot can be used for a variety of purposes, such as answering questions, providing information, or engaging in general conversation.

## Prerequisites

1. **OpenAI API Key**: You'll need to obtain an API key from OpenAI in order to use their language model. You can sign up for an OpenAI account and generate an API key [here](https://platform.openai.com/account/api-keys).

2. **Dotenv**: This project uses the `dotenv` package to load the API key from an environment variable. You'll need to create a `.env` file in the root of your project and add the following line, replacing `YOUR_API_KEY_HERE` with your actual API key:

   ```
   OPENAI_API_KEY=YOUR_API_KEY_HERE
   ```

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/gpt-4-chatbot.git
   ```

2. Install the dependencies:

   ```
   cd gpt-4-chatbot
   npm install
   ```

## Usage

1. Update the `systemPrompt` variable in the code with the desired prompt for the chatbot.

2. Add your questions or prompts to the `questions` array, separated by newlines.

3. Run the script:

   ```
   node app.js
   ```

   The script will use the OpenAI API to generate responses based on the provided prompts and system prompt, and the responses will be logged to the console.

   You can customize the code to fit your specific use case, such as integrating the chatbot into a web application or processing the responses in a different way.

## Troubleshooting

If you encounter any issues, please check the following:

1. Verify that your OpenAI API key is correct and that your account has sufficient funds to use the API.

2. Ensure that the `dotenv` package is properly configured and that the `.env` file is in the correct location.

3. Double-check the formatting of the `systemPrompt` and `questions` variables to ensure they are properly formatted.

If you continue to encounter issues, feel free to open an issue on the repository or reach out for assistance.
