interface ButtonInfo {
    buttonText: string;
}

const Button = ({ buttonText }: ButtonInfo) => {
    return (
        <button className="px-4 py-2 font-semibold text-white bg-black rounded-md shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
            {buttonText}
        </button>
    );
}

export default Button;