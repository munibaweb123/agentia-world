import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// ✅ Ensure key is defined before use
if (!process.env.GOOGLE_API_KEY) {
  throw new Error('GOOGLE_API_KEY is not configured');
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // ✅ Basic validation
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // ✅ Optional: Use "gemini-1.5-flash" for speed

    // ✅ Retry logic for model overload
    let attempts = 0;
    let text = "";
    while (attempts < 3) {
      try {
        const result = await model.generateContent(message);
        const response = await result.response;
        text = response.text();
        break; // exit loop on success
      } catch (err: unknown) {
        if (
          typeof err === "object" &&
          err !== null &&
          "message" in err &&
          typeof (err as { message?: string }).message === "string" &&
          (err as { message: string }).message.includes("overloaded") &&
          attempts < 2
        ) {
          attempts++;
          await new Promise((res) => setTimeout(res, 1500)); // wait 1.5s
        } else {
          throw err;
        }
      }
    }

    return NextResponse.json({ message: text });

  } catch (error) {
    console.error('Gemini API Error:', JSON.stringify(error, null, 2));
    return NextResponse.json(
      {
        error: error instanceof Error ? `[Gemini Error]: ${error.message}` : 'Internal server error'
      },
      { status: 500 }
    );
  }
}
