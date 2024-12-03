import { ChatOllama } from "@langchain/ollama";

const chatModel = new ChatOllama({
	baseUrl: "http://localhost:11434",
	model: "qwen2.5-coder:32b",
});

const result = await chatModel.invoke("what is LangSmith? speak japanese");

console.log(result);
