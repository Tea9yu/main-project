

export default function TailSelect({opItem, handleChange}) {
    if(!opItem) {
        return;
    }
    const ops = opItem.map((item, idx) =>
            <option key={`op${idx}`} value={item}>{item}</option> 

    );
    return (
        <select
            onChange={handleChange}
            className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">상품정렬</option>
            {ops}
        </select>
    )
}
