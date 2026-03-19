import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content.toLowerCase();

    // Custom Logic: The "Recruiter Agent"
    let response = "I'm Pavan's AI. I can tell you about his MCA projects at Atria or his Physics background. What would you like to know?";

    if (lastMessage.includes("python")) {
      response = "Pavan uses Python extensively for AI. In his 'AI Fitness Coach', he utilized MediaPipe and OpenCV for real-time human pose estimation.";
    } else if (lastMessage.includes("mca") || lastMessage.includes("education")) {
      response = "Pavan is currently pursuing his MCA at Atria Institute of Technology, Bengaluru, maintaining high technical standards in full-stack dev.";
    } else if (lastMessage.includes("physics")) {
      response = "Pavan holds a B.Sc. in Physics. This gives him a unique advantage in understanding the mathematical logic behind Neural Networks.";
    } else if (lastMessage.includes("project")) {
      response = "Pavan has worked on an AI Fitness Coach (Computer Vision), a Physics-based System Architecture, and an Automated Receipt Analyzer using OCR.";
    }

    return NextResponse.json({ role: "assistant", content: response });
  } catch (error) {
    return NextResponse.json({ role: "assistant", content: "I'm having a bit of trouble thinking right now. Could you try asking again?" }, { status: 500 });
  }
}
