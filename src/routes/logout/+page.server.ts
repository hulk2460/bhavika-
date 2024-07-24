import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    // Handle authentication logic here
    // For example, you might check the credentials against a database

    if (email === 'test@example.com' && password === 'password') {
        // Successful login
        return {
            status: 200,
            body: { success: true, message: 'Login successful' }
        };
    } else {
        // Failed login
        return {
            status: 401,
            body: { success: false, message: 'Invalid email or password' }
        };
    }
};
