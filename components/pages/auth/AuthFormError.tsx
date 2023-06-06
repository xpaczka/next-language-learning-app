interface ErrorMessages {
    [key: string]: string;
}

const errorMessages: ErrorMessages = {
    CredentialsSignin: 'Invalid email or password.',
    Default: 'Something went wrong. Please try again.',
}

const AuthFormError = ({ error }: { error: keyof ErrorMessages }) => {
    return <div className='mb-4 bg-red-500 w-full py-4 px-8 text-white text-center rounded-lg'>{errorMessages[error]}</div>;
}

export default AuthFormError