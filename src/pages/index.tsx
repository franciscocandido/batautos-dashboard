import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import Head from 'next/head';
import * as yup from 'yup';

import FormHeaderImage from '../components/FormHeaderImage';

interface loginFormProps {
  email: string;
  password: string;
}

export default function Home() {
  const loginFormSchema = yup.object().shape({
    email: yup
      .string()
      .email('Esse não é um email válido.')
      .required('Você precisa fornecer um email.'),
    password: yup
      .string()
      .required('Você precisar fornecer uma senha.')
      .min(8, 'Sua senha precisa ter no mínimo 8 caracteres.'),
  });

  async function handleLoginFormSubmit(values: loginFormProps): Promise<void> {
    return;
  }

  return (
    <>
      <Head>
        <title>Entrar</title>
      </Head>

      <Container maxW='380px'>
        <FormHeaderImage />

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
          validationSchema={loginFormSchema}>
          {({ handleSubmit, errors, isValid, touched, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <FormControl isInvalid={!isValid}>
                <FormLabel htmlFor='email'>Seu email</FormLabel>
                <Field
                  as={Input}
                  id='email'
                  name='email'
                  type='email'
                  isDisabled={isSubmitting}
                  variant='filled'
                  border='1px'
                  borderColor='gray.600'
                />
                {!errors.email ? (
                  <Box w='full' h='19px' marginTop='8px' />
                ) : (
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                )}

                <FormLabel htmlFor='password'>Sua senha</FormLabel>
                <Field
                  as={Input}
                  id='password'
                  name='password'
                  type='password'
                  isDisabled={isSubmitting}
                  variant='filled'
                  border='1px'
                  borderColor='gray.600'
                />
                {!errors.password ? (
                  <Box w='full' h='19px' marginTop='8px' />
                ) : (
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                )}
              </FormControl>
              <Button
                type='submit'
                colorScheme='green'
                w='full'
                marginTop='10px'
                isDisabled={!isValid || !touched.password}
                isLoading={isSubmitting}>
                Continuar
              </Button>
            </form>
          )}
        </Formik>
      </Container>
    </>
  );
}
