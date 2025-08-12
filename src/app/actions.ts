'use server';

import {
  generateTaglines as generateTaglinesFlow,
  type GenerateTaglinesInput,
} from '@/ai/flows/generate-taglines';
import { firestore } from '@/lib/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { z } from 'zod';

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

const contactFormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
});

export async function submitContactForm(formData: FormData) {
    try {
        const parsedData = contactFormSchema.parse({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        });
        await addDoc(collection(firestore, "contacts"), {
            ...parsedData,
            createdAt: new Date(),
        });
        return { success: true, message: "Message sent successfully!" };
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return { success: false, message: "Failed to send message." };
    }
}
