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

const preRegisterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function preRegisterEmail(formData: FormData) {
    try {
        const parsedData = preRegisterSchema.parse({
            email: formData.get('email'),
        });
        await addDoc(collection(firestore, "preregistrations"), {
            email: parsedData.email,
            createdAt: new Date(),
        });
        return { success: true, message: "You've been successfully pre-registered!" };
    } catch (error) {
        if (error instanceof z.ZodError) {
             return { success: false, message: error.errors[0].message };
        }
        console.error("Error saving pre-registration email:", error);
        return { success: false, message: "Failed to save email. Please try again." };
    }
}
