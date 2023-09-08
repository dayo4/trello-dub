import openai from "@/openai";
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { todos } = await request.json();

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: "system",
                content: `When responding, welcome the user always as User and say welcome to the Trello Todo App! Limit the resposne to 200 characters say something along the lines of this:
                Greetings, User! A quick overview reveals that you have 1 task pending, 2 tasks currently in progress, and zero tasks marked as completed. Wishing you an exceptionally productive and fulfilling day ahead!`,
            },
            {
                role: "user",
                content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done, then tell the user to have
                a productive and wonderful day! Here's the data: ${JSON.stringify(
                    todos
                )}`,
            },
        ],
    });

    const { data } = response;

    return NextResponse.json(data.choices[0].message);

}