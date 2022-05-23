/// <reference types="react" />
declare const Simple: () => JSX.Element;

interface LoginButtonProps {
    label: string;
}
declare const Login: (props: LoginButtonProps) => JSX.Element;

export { Login, Simple };
