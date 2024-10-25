import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
    return (
        <div>
            <nav className="flex items-center justify-between h-16 bg-[rgb(60,174,226)] px-10">
                <div>
                    <Image src="/logo.png" alt="logo" width={50} height={50} />
                </div>
                <h1 className="flex-grow ml-6 text-lg md:text-xl lg:text-2xl text-gray-800 font-myr">
                    Tuition-Free Education Program on Latest Technologies
                </h1>
                <div className="flex gap-7">
                    <div>
                        <Link href="/" className="relative py-1.5 px-2.5 text-[rgb(1,1,3)] font-calibri text-xl group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-700 group-hover:w-full transition-all"></span>
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href="/contact-us" className="relative py-1.5 px-2.5 text-black font-calibri text-xl group">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-700 group-hover:w-full transition-all"></span>
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href="/about" className="relative py-1.5 px-2.5 text-black font-calibri text-xl group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-700 group-hover:w-full transition-all"></span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
