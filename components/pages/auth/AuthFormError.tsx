interface ErrorMessages {
  [key: string]: string;
}

const errorMessages: ErrorMessages = {
  CredentialsSignin: 'Invalid email or password.',
  Callback: 'Authorization failed.',
  Illegal: 'Failed to register.',
  AccessDenied: 'Access denied.',
  Default: 'Something went wrong. Please try again.',
};

const AuthFormError = ({ error }: { error: string }) => {
  const errorMessage = Object.keys(errorMessages).find(message => message.startsWith(error));

  return (
    <div className='mb-4 bg-red-500 w-full py-4 px-8 text-white text-center rounded-lg'>
      {errorMessage ? errorMessages[errorMessage] : 'Something went wrong.'}
    </div>
  );
};

export default AuthFormError;
