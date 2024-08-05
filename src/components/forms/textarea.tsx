export default function StoGidTextarea(props: { id: string; name: string; label: string; placeholder: string; }) {
    return (
        <div className="w-full sm:w-2/3">
            <label htmlFor={props.id} className="block mb-2">{props.label}</label>
            <textarea className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-700" id={props.id} placeholder={props.placeholder} name={props.name} rows={5} cols={40}></textarea>
        </div>
    );
}