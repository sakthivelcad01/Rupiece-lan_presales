'use server';

import {
  generateTaglines as generateTaglinesFlow,
  type GenerateTaglinesInput,
} from '@/ai/flows/generate-taglines';
import { firestore } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function generateTaglinesAction(input: GenerateTaglinesInput) {
  try {
    const output = await generateTaglinesFlow(input);
    return {taglines: output.taglines, error: null};
  } catch (error) {
    console.error(error);
    return {
      taglines: [],
      error: 'Something went wrong on the server. Please try again.',
    };
  }
}

export async function submitContactForm(data: { name: string; email: string; message: string }) {
    try {
        await addDoc(collection(firestore, "contacts"), {
            ...data,
            timestamp: serverTimestamp(),
        });
        return { success: true };
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return { success: false, error: "Failed to submit message." };
    }
}
