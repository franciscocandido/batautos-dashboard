import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  useColorMode,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import Head from 'next/head';
import * as yup from 'yup';

interface setPasswordFormProps {
  password: string;
  passwordConfirmation: string;
}

export default function Password() {
  const { colorMode } = useColorMode();

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
        <Image
          src={
            colorMode == 'dark'
              ? 'batautos-logo-dark.webp'
              : 'batautos-logo-light.webp'
          }
          alt='Logotipo da Batautos Auto Service'
          w='auto'
          h='auto'
          paddingBottom='25px'
          paddingTop='10rem'
          draggable='false'
        />

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
                  <Box w='full' h='19px' marginTop='8px' />
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
                  <Box w='full' h='19px' marginTop='8px' />
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