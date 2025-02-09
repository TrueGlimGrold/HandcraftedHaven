'use client';

import { lusitana } from '@/app/ui/fonts';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/database/actions';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
    const [errorMessage, dispatch ] = useFormState(authenticate, undefined);
    return (
        <div className="login-continer">
            <form action={dispatch} className="login-form">
                <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                    Please log in to continue.
                </h1>
                <div className="form-group">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required
                        minLength={6}
                    />
                </div>
                <LoginButton />
                {errorMessage && (
                    <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
            </form>
            <p className="signup-link">
                Don't have an account? <Link href="/signup">Sign up</Link>
            </p>
        </div>
        
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="login-button" aria-disabled={pending} type="submit">
            {pending ? 'Logging in...' : 'Log in'}
        </Button>
    );
}