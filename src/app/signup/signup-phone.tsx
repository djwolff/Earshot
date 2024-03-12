import { useRouter } from 'expo-router';
import React from 'react';

import { SignUpPhoneForm } from '@/components/signup/signupphone-form';
import { useSoftKeyboardEffect } from '@/core/keyboard';
import { FocusAwareStatusBar } from '@/ui';

export default function Signup1() {
  const router = useRouter();
  useSoftKeyboardEffect();
  
  return (
    <>
      <FocusAwareStatusBar />
      <SignUpPhoneForm signUpRouter={router}/>
    </>
  );
}
