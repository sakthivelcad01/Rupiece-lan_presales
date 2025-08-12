'use server';

/**
 * @fileOverview A flow that recommends a trading program based on user's quiz answers.
 *
 * - findProgram - A function that recommends a program.
 * - FindProgramInput - The input type for the findProgram function.
 * - FindProgramOutput - The output type for the findProgram function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FindProgramInputSchema = z.object({
  experience: z.enum(['beginner', 'intermediate', 'advanced']),
  risk: z.enum(['low', 'medium', 'high']),
  style: z.enum(['day', 'swing', 'scalper']),
});
export type FindProgramInput = z.infer<typeof FindProgramInputSchema>;

export const FindProgramOutputSchema = z.object({
  recommendation: z
    .number()
    .describe('The recommended account size. Must be one of 100000, 300000, 500000, or 1000000.'),
  reasoning: z
    .string()
    .describe('A brief (2-3 sentences) explanation for the recommendation.'),
});
export type FindProgramOutput = z.infer<typeof FindProgramOutputSchema>;

export async function findProgram(
  input: FindProgramInput
): Promise<FindProgramOutput> {
  return findProgramFlow(input);
}

const prompt = ai.definePrompt({
  name: 'findProgramPrompt',
  input: {schema: FindProgramInputSchema},
  output: {schema: FindProgramOutputSchema},
  prompt: `You are an expert trading advisor for a proprietary trading firm. Your goal is to recommend the best starting account size for a new trader based on their answers to a short quiz.

The available account sizes are: 100,000 INR, 300,000 INR, 500,000 INR, and 1,000,000 INR.

Analyze the user's profile:
- Experience: {{{experience}}}
- Risk Tolerance: {{{risk}}}
- Trading Style: {{{style}}}

Based on this profile, recommend the most suitable account size.
- Beginners, especially with low risk tolerance, should start smaller (100k or 300k).
- Advanced traders with high risk tolerance, especially scalpers or active day traders, can handle larger accounts (500k or 1M).
- Swing traders might fall in the middle, depending on their risk tolerance.

Provide a brief reasoning for your recommendation. Be encouraging and professional.
`,
});

const findProgramFlow = ai.defineFlow(
  {
    name: 'findProgramFlow',
    inputSchema: FindProgramInputSchema,
    outputSchema: FindProgramOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
