interface ButtonInfo {
    buttonText: string;
}

const Button = ({ buttonText }: ButtonInfo) => {
    return (
        <button className="px-4 py-2 font-semibold text-white bg-red-500 rounded-md shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            {buttonText}
        </button>

    );
}

export default Button;