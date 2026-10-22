import { ChatGroq } from "@langchain/groq"
import dotenv from "dotenv";
import { ChatGoogle } from "@langchain/google";


dotenv.config();

// const llm = new ChatGroq({
//     model: "openai/gpt-oss-120b",
//     temperature: 0,
//     maxTokens: undefined,
//     maxRetries: 2,
// })


// const aiMsg = await llm.invoke([
//     {
//       role: "system",
//       content: "You are a helpful assistant that  Answer the user's questions clearly.",
//     },
//     {
//         role: "user",
//         content: "Who is the Home Minister of India?"
//       }
// ])

// const aiMsg = await llm.invoke('who is the home minister of india ')
// aiMsg

// console.log(aiMsg.content)
// ------------------------------------------------------------------------

const llm = new ChatGoogle({
            model:"gemini-3.5-flash-lite",
            temperature:0,
})

const aiMsg = await llm.invoke('who is indian T20 internationl cricker captain')

console.log(aiMsg.content)
// ---------------------------------------------------------------------------  
