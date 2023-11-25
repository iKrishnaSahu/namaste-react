export const ContactUs = () => {
    return (
        <div className="p-4 m-4">
            <h1 className="font-bold text-3xl">Contact Us</h1>
            <form className="flex flex-col w-[200px]">
                <input type="text" className="border border-black p-2 m-2" placeholder="Name"></input>
                <input type="text" className="border border-black p-2 m-2" placeholder="Message"></input>
                <button className="border border-black p-2 m-2 rounded-lg">Submit</button>
            </form>
        </div>
    )
}