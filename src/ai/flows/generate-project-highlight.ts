'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating project highlights.
 *
 * - generateProjectHighlight - A function that generates a concise highlight for a given project description.
 * - GenerateProjectHighlightInput - The input type for the generateProjectHighlight function.
 * - GenerateProjectHighlightOutput - The return type for the generateProjectHighlight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectHighlightInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the project for which to generate a highlight.'),
});
export type GenerateProjectHighlightInput = z.infer<typeof GenerateProjectHighlightInputSchema>;

const GenerateProjectHighlightOutputSchema = z.object({
  projectHighlight: z
    .string()
    .describe('A concise, AI-generated highlight of the project description.'),
});
export type GenerateProjectHighlightOutput = z.infer<typeof GenerateProjectHighlightOutputSchema>;

export async function generateProjectHighlight(
  input: GenerateProjectHighlightInput
): Promise<GenerateProjectHighlightOutput> {
  return generateProjectHighlightFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectHighlightPrompt',
  input: {schema: GenerateProjectHighlightInputSchema},
  output: {schema: GenerateProjectHighlightOutputSchema},
  prompt: `You are an AI assistant designed to generate concise and engaging highlights for project descriptions.

  Based on the following project description, create a short, one-sentence highlight that captures the essence of the project and its key features.

  Project Description: {{{projectDescription}}}
  `,
});

const generateProjectHighlightFlow = ai.defineFlow(
  {
    name: 'generateProjectHighlightFlow',
    inputSchema: GenerateProjectHighlightInputSchema,
    outputSchema: GenerateProjectHighlightOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
