"use client";

interface EmailFormProps {

}

async function handleSubmit(event: any) {
    event.preventDefault();
    const data = {
        firstName: String(event.target.firstName.value),
        lastName: String(event.target.lastName.value),
        email: String(event.target.email.value),
        message: String(event.target.message.value),
    }

    // TODO: make this acutally send by setting up an API
}

const EmailForm: React.FC<EmailFormProps> = ({}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex">
                <h1 className="font-bold text-xl">
                    Name
                </h1>
                <p className="text-gray-400 text-sm px-1">
                    (required)
                </p>
            </div>
            <div className="w-full flex">
                <div className="w-1/2 flex flex-col my-4 pr-2">
                    <label className="font-bold text-gray-800" htmlFor="firstName">
                        First Name
                    </label>
                    <input type="text" id="firstName" minLength={2} maxLength={100} required autoComplete="off" className="w-full p-4 bg-gray-50 border border border-gray-300"/>
                </div>
                <div className="w-1/2 flex flex-col my-4 pl-2">
                    <label className="font-bold text-gray-800" htmlFor="lastName">
                        Last Name
                    </label>
                    <input type="text" id="lastName" minLength={2} maxLength={100} required autoComplete="off" className="w-full p-4 bg-gray-50 border border border-gray-300"/>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className="flex">
                    <label className="font-bold text-gray-800 text-xl" htmlFor="email">
                        Email
                    </label>
                    <p className="text-gray-400 text-sm px-1">
                        (required)
                    </p>
                </div>
                <input type="text" id="email" required autoComplete="off" minLength={5} maxLength={150} className="w-full p-4 bg-gray-50 border border-gray-300"/>
            </div>
            <div>
                <div className="flex">
                    <label className="font-bold text-gray-800 text-xl" htmlFor="message">
                        Message
                    </label>
                    <p className="text-gray-400 text-sm px-1">
                        (required)
                    </p>
                </div>
                <textarea rows={4} className="w-full border border-gray-300" required minLength={10} maxLength={500} id="message"/>
                <div className={"flex justify-center"}>
                    <button type="submit" className="px-4 py-2 bg-black text-white font-medium w-40 mt-4">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default EmailForm;