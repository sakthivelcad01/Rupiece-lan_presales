'use server';

import {
  generateTaglines as generateTaglinesFlow,
  type GenerateTaglinesInput,
} from '@/ai/flows/generate-taglines';

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
