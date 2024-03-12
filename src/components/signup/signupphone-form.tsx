import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/ui';
import { Router, router } from 'expo-router';
import { SafeAreaView } from 'react-native';

const schema = z.object({
  phonenumber: z.string().regex(new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  ), 'Invalid phone number'),
  name: z.string().optional(),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export type SignUpFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  signUpRouter?: Router;
};

export const SignUpPhoneForm = ({ onSubmit = () => {}, signUpRouter = router }: SignUpFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(z.object({
      phonenumber: z.string().regex(new RegExp(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
      ), 'Invalid phone number')})),
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 justify-center p-4">
        <Text testID="form-title" className="pb-6 text-center text-2xl">
          What's your phone number?
        </Text>
        <Button
          variant='outline'
          size='sm'
          className="absolute top-0 left-0 m-4"
          testID="back-button"
          label="Go Back"
          onPress={() => signUpRouter.back()}
        />
        <ControlledInput
          testID="phonenumber-input"
          control={control}
          name="phonenumber"
          label="Phone Number"
        />
        <Button
          testID="continuephone-button"
          label="Continue"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </SafeAreaView>
  );
};
