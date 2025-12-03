'use server'
import { z } from "zod";
import { sendMail } from "./sendMail";
export type State = {
	errors?:{
		name?: string[];
		email?: string[];
		project?: string[];
        message?: string[];
		};
	message: string | null
}


const ContactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    project: z.string().min(1, "Project is required"),
    message: z.string().min(1, "Message is required")
})
export async function sendEMail(prevState: State, formData: FormData) {
    const valid = ContactFormSchema.safeParse(Object.fromEntries(formData.entries()));
    if(!valid.success) return{
        errors: valid.error.flatten().fieldErrors,
        message: 'Missing fields failed to send email'
    }
    const { name, email, project, message } = valid.data
    try {
        await sendMail({ name, email, project, message });
        return {
            message: "Email sent successfully"
        };
    }catch (error) {
        console.error("Error sending contact form data:", error);
        throw new Error("Failed to send contact form data.");
    }
}