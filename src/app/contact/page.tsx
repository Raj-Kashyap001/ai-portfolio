import Image from 'next/image'
import ContactForm from '@/components/contact-form'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const metadata = {
  title: 'Contact | Digital Oasis',
  description: 'Get in touch with me.',
}

const contactImage = PlaceHolderImages.find((img) => img.id === 'contact')

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Let&apos;s Connect
            </h1>
            <p className="mt-4 max-w-[500px] text-muted-foreground md:text-xl/relaxed">
              Have a project in mind, a question, or just want to say hello?
              Drop me a line.
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="relative order-first h-64 w-full overflow-hidden rounded-xl shadow-lg md:order-last md:h-[500px]">
          {contactImage && (
            <Image
              src={contactImage.imageUrl}
              alt={contactImage.description}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint={contactImage.imageHint}
            />
          )}
        </div>
      </div>
    </div>
  )
}
