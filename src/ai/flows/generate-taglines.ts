// Use server directive is required for Genkit Flows.
'use server';

/**
 * @fileOverview Generates taglines for a brand based on keywords and a description.
 *
 * - generateTaglines - A function that generates taglines.
 * - GenerateTaglinesInput - The input type for the generateTaglines function.
 * - GenerateTaglinesOutput - The output type for the generateTaglines function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTaglinesInputSchema = z.object({
  keywords: z
    .string()
    .describe('Comma separated keywords related to the brand or product.'),
  brandDescription: z.string().describe('A brief description of the brand.'),
});

export type GenerateTaglinesInput = z.infer<typeof GenerateTaglinesInputSchema>;

const GenerateTaglinesOutputSchema = z.object({
  taglines: z.array(z.string()).describe('An array of generated taglines.'),
});

export type GenerateTaglinesOutput = z.infer<typeof GenerateTaglinesOutputSchema>;

export async function generateTaglines(input: GenerateTaglinesInput): Promise<GenerateTaglinesOutput> {
  return generateTaglinesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTaglinesPrompt',
  input: {schema: GenerateTaglinesInputSchema},
  output: {schema: GenerateTaglinesOutputSchema},
  prompt: `You are a branding expert. Generate 5 taglines for a brand based on the following description and keywords.

Brand Description: {{{brandDescription}}}
Keywords: {{{keywords}}}

Taglines:`,
});

const generateTaglinesFlow = ai.defineFlow(
  {
    name: 'generateTaglinesFlow',
    inputSchema: GenerateTaglinesInputSchema,
    outputSchema: GenerateTaglinesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
