import React, { useContext, useState, useEffect, ReactNode } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyAkMIr3iik7o-byLFqmxmGi_Pepoxabv-M',
  authDomain: 'saints-clothing-6703a.firebaseapp.com',
  projectId: 'saints-clothing-6703a',
  storageBucket: 'saints-clothing-6703a.appspot.com',
  messagingSenderId: '704836982344',
  appId: '1:704836982344:web:3b82dd22d845f4fddcea7d',
  measurementId: 'G-80SPLS16XZ',
};

const app = initializeApp(firebaseConfig);

interface User {
  email: string | null;
  // Add other user-related properties if needed
}

interface AuthContextProps {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<unknown>;
  signup: (email: string, password: string) => Promise<unknown>;
  logout: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

const auth = getAuth(app);

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextProps = {
    currentUser,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
