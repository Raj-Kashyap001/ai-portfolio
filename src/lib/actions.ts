'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(1000, { message: 'Message must be less than 1000 characters.' }),
})

export type ContactFormState = {
  message: string
  success: boolean
}

export async function sendContactMessage(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      message: 'There was an error with your submission. Please check the form and try again.',
      success: false,
    }
  }

  try {
    // Here you would typically send an email or save to a database.
    // We'll just log it to the console for this example.
    console.log('New contact message received:')
    console.log(validatedFields.data)

    return {
      message: "Thanks for your message! I'll get back to you soon.",
      success: true,
    }
  } catch (error) {
    console.error('Error sending contact message:', error)
    return {
      message: 'Something went wrong on our end. Please try again later.',
      success: false,
    }
  }
}
