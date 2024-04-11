import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, ref, string } from 'yup';
import { Form } from '@/components/forms/Form';
import { Input } from '@/components/forms/Input';
import { PrimaryButton } from '@/components/forms/Buttons';

const schema = object({
  email: string()
    .required('Please enter an email address')
    .email('The email address needs to be valid.'),
  password: string()
    .required('Please enter a password')
    .min(4, 'The password needs to be at least 4 characters long.'),
  retypePassword: string()
    .required('Please type your password again.')
    .oneOf([ref('password')], 'The passwords did not match.'),
  firstName: string().required('Please tell us your first name.'),
  lastName: string().required('Please tell us your last name.'),
});

export function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          {...register('email')}
          labelText="Email"
          errorMessage={errors?.email?.message}
        />
        <Input
          type="password"
          {...register('password')}
          labelText="Password"
          errorMessage={errors?.password?.message}
        />
        <Input
          type="password"
          {...register('retypePassword')}
          labelText="Retype Password"
          errorMessage={errors?.retypePassword?.message}
        />
        <Input
          type="text"
          {...register('firstName')}
          labelText="First Name"
          errorMessage={errors?.firstName?.message}
        />
        <Input
          type="text"
          {...register('lastName')}
          labelText="Last Name"
          errorMessage={errors?.lastName?.message}
        />

        <PrimaryButton className="col-start-2">Register</PrimaryButton>
      </Form>
    </>
  );
}

function handleSubmit(submitFunc) {
  return function (e) {
    e.preventDefault();
    const data = getFormData();
    const isValid = validateInput(data);
    if (isValid) {
      submitFunc(data);
    }
  };
}
