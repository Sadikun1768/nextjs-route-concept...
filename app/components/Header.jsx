import Link from "next/link";


export default function Header() {

    return (
        <div className="flex items-center justify-center gap-6 mt-10">

            <Link href="/sequential">
              <div className="bg-lime-700 p-6 rounded">
                Sequential Data
            </div>
            </Link>

            <Link href="/parallel">
                <div className="bg-amber-500 p-6 rounded">
                    Parallel Data
                </div>
            </Link>


        </div>
    );
}