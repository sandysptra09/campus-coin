import testimonials from '../data/testimonials.json'

export async function getTestimonials() {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return testimonials;
}