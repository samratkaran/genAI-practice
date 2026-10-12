import { ChatGroq } from "@langchain/groq"
import dotenv from "dotenv";

dotenv.config();

const llm = new ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0,
    maxTokens: undefined,
    maxRetries: 2,
})


const aiMsg = await llm.invoke([
    {
      role: "system",
      content: "You are a helpful assistant that  Answer the user's questions clearly.",
    },
    {
        role: "user",
        content: "Who is the Home Minister of India?"
      }
])
aiMsg

console.log(aiMsg.content)