export default function Textarea({
  isDisabled = false,
  name,
  value,
  onchange,
}) {
  return (
    <div className="text-left">
      <label
        htmlFor="comment"
        className=" text-sm font-medium text-gray-700 hidden">
        Add your comment
      </label>
      <div className="mt-1">
        <textarea
          rows={3}
          cols={120}
          disabled={isDisabled}
          name={name}
          value={value}
          onChange={onchange}
          placeholder="Semoga setelah saya berdonasi, saya bisa jadi Presiden agar Indonesia lebih baik"
          id="comment"
          className="disabled:opacity-70 disabled:bg-zinc-200 disabled:cursor-not-allowed transition-all duration-300 ease-in-out inset-x-0 focus:ring-lime-600 focus:border-lime-600 text-sm placeholder:font-light placeholder:text-zinc-400 block w-full sm:text-sm border rounded-md bg-slate-100 border-transparent placeholder-opacity-25"
        />
      </div>
    </div>
  );
}
