'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating summaries of blog posts.
 *
 * - generateBlogPostSummary - An async function that takes a blog post as input and returns an AI-generated summary.
 * - GenerateBlogPostSummaryInput - The input type for the generateBlogPostSummary function.
 * - GenerateBlogPostSummaryOutput - The return type for the generateBlogPostSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogPostSummaryInputSchema = z.object({
  blogPostContent: z.string().describe('The content of the blog post to summarize.'),
});
export type GenerateBlogPostSummaryInput = z.infer<typeof GenerateBlogPostSummaryInputSchema>;

const GenerateBlogPostSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the blog post.'),
});
export type GenerateBlogPostSummaryOutput = z.infer<typeof GenerateBlogPostSummaryOutputSchema>;

export async function generateBlogPostSummary(input: GenerateBlogPostSummaryInput): Promise<GenerateBlogPostSummaryOutput> {
  return generateBlogPostSummaryFlow(input);
}

const blogPostSummaryPrompt = ai.definePrompt({
  name: 'blogPostSummaryPrompt',
  input: {schema: GenerateBlogPostSummaryInputSchema},
  output: {schema: GenerateBlogPostSummaryOutputSchema},
  prompt: `Summarize the following blog post content in a concise and engaging manner:\n\n{{{blogPostContent}}}`,
});

const generateBlogPostSummaryFlow = ai.defineFlow(
  {
    name: 'generateBlogPostSummaryFlow',
    inputSchema: GenerateBlogPostSummaryInputSchema,
    outputSchema: GenerateBlogPostSummaryOutputSchema,
  },
  async input => {
    const {output} = await blogPostSummaryPrompt(input);
    return output!;
  }
);
