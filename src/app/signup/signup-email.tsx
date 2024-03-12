import { useRouter } from 'expo-router';
import React from 'react';

import { SignUpEmailForm } from '@/components/signup/signupemail-form';
import { useAuth } from '@/core';
import { useSoftKeyboardEffect } from '@/core/keyboard';
import { FocusAwareStatusBar } from '@/ui';

export default function Signup2() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();
  useSoftKeyboardEffect();

  return (
    <>
      <FocusAwareStatusBar />
      <SignUpEmailForm signUpRouter={router} />
    </>
  );
}
