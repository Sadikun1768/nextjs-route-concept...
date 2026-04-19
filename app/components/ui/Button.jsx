"use client";
import { useFormStatus } from 'react-dom'


export default function Button() {

    const { pending } = useFormStatus()

    return (
        <div>
            <button
                type="submit"
                className="text-cyan-500 bg-amber-50 p-2 rounded"
                disabled={pending}
            >
                Submit
            </button>
        </div>
    );
}