// Contains the operations code for CRUD and calidation .

'use server';
import { supabase } from './supabaseClient';
import bcrypt from 'bcryptjs';
// import { z } from 'zod';
//import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { signIn } from '@/auth'; //Elisha Login
//import { AuthError } from 'next-auth'; // Signups Autentication. This is commented out since we are using supabase authentication instead of next-auth.

export async function authenticate(prevState: string | undefined, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    console.log('Attempting to authenticate with email:', email); //1. log email

    try {
        //authenticate with Supabase
        //const { data, error } = await supabase.auth.signInWithPassword({email, password,});

       /* if (error) {
            console.log('Authentication successful. Fetching user role...'); //2. log success
            throw error;
        }*/
        type UserType = {
            privilege: string;
            password: string;
        };
        //fetch user role from Users table
        const { data: userData, error: userError } = await supabase
            .from('users')
            .select('privilege')
            .eq('email', email)
            .single() as { data: UserType | null, error: any};
 
        if (userError || !userData) {
            console.log('Error fetching user role:', userError?.message); //3. log user role error

            return 'Invalid credentials';
            //throw userError;
        }

        //compare the input password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, userData.password);
        if (!isPasswordValid) {
            console.log('Invalid password attempt');
            return 'Wrong password';
        }
        console.log('User role fetched:', userData.privilege); //4. log user role

        //if successful redirect based on role
        if (userData.privilege === 'Seller') {
            console.log('Redirecting to /edit-product.....') //5. log redirect
            redirect('edit-product'); //redirect seller or admin to edit-product page.
        } else {
            console.log('Redirecting to home....'); //6. log redirect
            redirect('/HCH-Home/shop'); //Redirect normal users to home page
        }
    } catch (error) {
        //handle supabase specific error here
        if (error instanceof Error) {
            console.log('error caught:', error.message); // 7. log caught error
            switch (error.message) {
                case 'Invalid Login credentials':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        return 'An unexpected error occured.';
    }
}
