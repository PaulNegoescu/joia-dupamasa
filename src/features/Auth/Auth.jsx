import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, ref, string } from 'yup';

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
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
        <label htmlFor="retypePassword">Retype Password</label>
        <input
          type="password"
          id="retypePassword"
          {...register('retypePassword')}
        />
        {errors.retypePassword && <p>{errors.retypePassword.message}</p>}
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="fistName" {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <button type="submit">Register</button>
      </form>
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
