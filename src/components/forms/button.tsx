export default function StoGidButton(props: { text: string; }) {
    return (
        <button type="submit" className="text-white bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">{props.text}</button>
    );
}