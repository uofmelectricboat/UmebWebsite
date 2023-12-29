import  '../globals.css'


interface ButtonInfo {
    buttonText: string;
}

const Button = ({ buttonText }: ButtonInfo) => {
    return (
        <button className="px-4 py-2 font-semibold text-white bg-white rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 multicolored-border button-pop">
            {buttonText}
        </button>

    );
}

export default Button;