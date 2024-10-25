export default function Footer() {
    return (
        <footer className="bg-[rgb(60,174,226)] shadow dark:bg-gray-800 mt-[44px]">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
                <span className="text-sm text-black sm:text-center">©2024 Noor Hassan™. All Rights Reserved.
                </span>
                <ul className="flex text-sm font-normal text-black">
                    <li>
                        <a href="about" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#Privacy-Policy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#licensing" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="contact-us" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
