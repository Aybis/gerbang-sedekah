import RenderIf from '../../utils/helpers/RenderIf';

export default function Textarea({
  isDisabled = false,
  name,
  value,
  onchange,
  showLabel = false,
  label,
  addClass,
  isTransaction = true,
  placeholder = 'Semoga setelah saya berdonasi, saya bisa jadi Presiden agar Indonesia lebih baik',
}) {
  return (
    <div className="text-left">
      <RenderIf isTrue={showLabel}>
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700 capitalize">
          {label}
        </label>
      </RenderIf>
      <div className="mt-1">
        <textarea
          rows={3}
          cols={120}
          disabled={isDisabled}
          name={name}
          value={value}
          onChange={onchange}
          placeholder={placeholder}
          className={[
            'disabled:opacity-70 disabled:bg-zinc-200 disabled:cursor-not-allowed transition-all duration-300 ease-in-out inset-x-0  text-sm placeholder:font-light placeholder:text-zinc-400 block w-full sm:text-sm border rounded-md  placeholder-opacity-25',
            isTransaction
              ? 'focus:ring-lime-600 focus:border-lime-600 border-transparent bg-slate-100'
              : 'focus:ring-apps-primary focus:border-apps-primary bg-white border border-gray-300',
            addClass,
          ].join(' ')}
        />
      </div>
    </div>
  );
}
