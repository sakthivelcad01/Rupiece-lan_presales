
'use server';

import {
  generateTaglines as generateTaglinesFlow,
  type GenerateTaglinesInput,
} from '@/ai/flows/generate-taglines';
import { firestore } from '@/lib/firebase';
import { addDoc, collection, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
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

const giveawayEntrySchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function enterGiveawayAction(formData: FormData) {
    const rawData = {
        email: formData.get('email'),
    };

    const validatedFields = giveawayEntrySchema.safeParse(rawData);

    if (!validatedFields.success) {
        return { success: false, message: validatedFields.error.errors[0].message };
    }

    try {
        const giveawayCollection = collection(firestore, "giveaway_entries");
        const q = query(giveawayCollection, where("email", "==", validatedFields.data.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return { success: false, message: "This email has already been entered in the giveaway." };
        }

        await addDoc(giveawayCollection, {
            email: validatedFields.data.email,
            createdAt: new Date(),
        });
        return { success: true, message: "You've successfully entered the giveaway. Good luck!" };
    } catch (error) {
        console.error("Error saving giveaway entry:", error);
        return { success: false, message: "A server error occurred. Please try again later." };
    }
}

const preRegisterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function preRegisterAction(formData: FormData) {
    const rawData = {
        email: formData.get('email'),
    };

    const validatedFields = preRegisterSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return { success: false, message: validatedFields.error.errors[0].message };
    }

    try {
        const preRegCollection = collection(firestore, "preregistrations");
        const q = query(preRegCollection, where("email", "==", validatedFields.data.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return { success: false, message: "This email has already been pre-registered." };
        }

        await addDoc(preRegCollection, {
            email: validatedFields.data.email,
            createdAt: new Date(),
        });
        return { success: true, message: "You've successfully pre-registered. We'll notify you on launch!" };
    } catch (error) {
        console.error("Error saving pre-registration:", error);
        return { success: false, message: "A server error occurred. Please try again later." };
    }
}

const purchaseSchema = z.object({
    email: z.string().email(),
    programSize: z.number(),
    price: z.number(),
    paymentId: z.string(),
    userId: z.string().optional(),
});

export async function savePurchaseAction(data: {
    email: string;
    programSize: number;
    price: number;
    paymentId: string;
    userId?: string;
}) {
    const validatedFields = purchaseSchema.safeParse(data);

    if (!validatedFields.success) {
        console.error("Purchase validation failed:", validatedFields.error);
        return { success: false, message: "Invalid purchase data." };
    }

    try {
        const purchasesCollection = collection(firestore, "pre_sales");
        await addDoc(purchasesCollection, {
            ...validatedFields.data,
            purchasedAt: serverTimestamp(),
        });
        return { success: true, message: "Purchase recorded successfully." };
    } catch (error) {
        console.error("Error saving purchase:", error);
        return { success: false, message: "A server error occurred while saving the purchase." };
    }
}
