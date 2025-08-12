'use server';

import {
  generateTaglines as generateTaglinesFlow,
  type GenerateTaglinesInput,
} from '@/ai/flows/generate-taglines';
import {
  findProgram as findProgramFlow,
  type FindProgramInput,
} from '@/ai/flows/find-program-flow';
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

export async function findProgramAction(input: FindProgramInput) {
  try {
    const output = await findProgramFlow(input);
    return { ...output, error: null };
  } catch (error) {
    console.error(error);
    return {
      recommendation: null,
      reasoning: '',
      error: 'Something went wrong on the server. Please try again.',
    };
  }
}

const preRegisterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function preRegisterEmail(formData: FormData) {
    const rawData = {
        email: formData.get('email'),
    };

    const validatedFields = preRegisterSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return { success: false, message: validatedFields.error.errors[0].message };
    }

    try {
        await addDoc(collection(firestore, "preregistrations"), {
            email: validatedFields.data.email,
            createdAt: new Date(),
        });
        return { success: true, message: "You've been successfully pre-registered!" };
    } catch (error) {
        console.error("Error saving pre-registration email:", error);
        return { success: false, message: "A server error occurred. Please try again later." };
    }
}
