import React, { useRef, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router';

export default function SignupComponent() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      await signup(emailRef.current?.value ?? '', passwordRef.current?.value ?? '');
      if (emailRef.current) {
        emailRef.current.value = '';
      }

      if (passwordRef.current) {
        passwordRef.current.value = '';
      }
      if (passwordConfirmRef.current) {
        passwordConfirmRef.current.value = '';
      }
      navigate('/');
    } catch {
      setError('Failed to sign up');
    }
  }
  return (
    <>
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
        <Form.Group id='password-confirm' className='mb-3'>
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type='password' placeholder='Confirm Your Password' ref={passwordConfirmRef} required />
        </Form.Group>
        <Button variant='dark' type='submit'>
          Sign Up
        </Button>
      </Form>
    </>
  );
}
