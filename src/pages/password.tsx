import {
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

import FormErrorMessagePlaceholder from '../components/FormErrorMessagePlaceholder';
import FormHeaderImage from '../components/FormHeaderImage';

interface setPasswordFormProps {
  password: string;
  passwordConfirmation: string;
}

export default function Password() {
  const setPasswordFormSchema = yup.object().shape({
    password: yup
      .string()
      .required('Você precisa fornecer uma senha.')
      .min(8, 'Sua senha precisa ter no mínimo 8 caracteres.'),
    passwordConfirmation: yup
      .string()
      .required('Você precisa repetir sua senha.')
      .oneOf([yup.ref('password'), null], 'As senhas não são iguais.'),
  });

  async function handleSetPasswordFormSubmit(
    values: setPasswordFormProps
  ): Promise<void> {
    return;
  }

  return (
    <>
      <Head>
        <title>Definir nova senha</title>
      </Head>

      <Container maxW='380px'>
        <FormHeaderImage />

        <Formik
          initialValues={{ password: '', passwordConfirmation: '' }}
          onSubmit={(values) => console.log(values)}
          validationSchema={setPasswordFormSchema}>
          {({ handleSubmit, errors, isValid, touched, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <FormControl isInvalid={!isValid}>
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
                  <FormErrorMessagePlaceholder />
                ) : (
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                )}

                <FormLabel htmlFor='passwordConfirmation'>
                  Repita sua senha
                </FormLabel>
                <Field
                  as={Input}
                  id='passwordConfirmation'
                  name='passwordConfirmation'
                  type='password'
                  isDisabled={isSubmitting}
                  variant='filled'
                  border='1px'
                  borderColor='gray.600'
                />
                {!errors.passwordConfirmation ? (
                  <FormErrorMessagePlaceholder />
                ) : (
                  <FormErrorMessage>
                    {errors.passwordConfirmation}
                  </FormErrorMessage>
                )}
              </FormControl>
              <Button
                type='submit'
                colorScheme='green'
                w='full'
                marginTop='10px'
                isDisabled={!isValid || !touched.password}
                isLoading={isSubmitting}>
                Cadastrar Senha
              </Button>
            </form>
          )}
        </Formik>
      </Container>
    </>
  );
}
