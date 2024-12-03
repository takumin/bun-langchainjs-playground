import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/ollama";

const model = new ChatOllama({
	baseUrl: "http://localhost:11434",
	model: "qwen2.5-coder:32b",
});

const systemTemplate = "Translate the following into {language}:";

const promptTemplate = ChatPromptTemplate.fromMessages([
	["system", systemTemplate],
	["user", "{text}"],
]);

const parser = new StringOutputParser();
const chain = promptTemplate.pipe(model).pipe(parser);
const result = await chain.invoke({ language: "japanese", text: "hi!" });

console.log(result);
