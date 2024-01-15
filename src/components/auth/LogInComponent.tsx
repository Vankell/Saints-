import React, { useRef, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth, AuthProvider } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    try {
      setError('');
      await login(emailRef.current?.value ?? '', passwordRef.current?.value ?? '');
      if (emailRef.current) {
        emailRef.current.value = '';
      }

      if (passwordRef.current) {
        passwordRef.current.value = '';
      }
      navigate('/');
    } catch {
      setError('Failed to log in');
    }
  }

  return (
    <>
      <AuthProvider>
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form.Group className='mb-3' controlId='logInEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' ref={emailRef} required />
            <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='logInPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' ref={passwordRef} required />
          </Form.Group>
          <Button variant='dark' type='submit'>
            Log in
          </Button>
        </Form>
      </AuthProvider>
    </>
  );
}
