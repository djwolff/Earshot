import { Stack } from 'expo-router';
import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';

export default function Signup() {
  useSoftKeyboardEffect();
  return (
      <Stack>
        <Stack.Screen name="signup-phone" options={{ headerShown: false }} />
        <Stack.Screen name="signup-email" options={{ headerShown: false }} />
        {/* <Stack.Screen name="signup-password" options={{ headerShown: false }} />
        <Stack.Screen name="signup-name" options={{ headerShown: false }} />
        <Stack.Screen name="signup-username" options={{ headerShown: false }} />
        <Stack.Screen name="signup-profpic" options={{ headerShown: false }} />
        <Stack.Screen name="signup-location" options={{ headerShown: false }} /> */}
      </Stack>
  );
}
