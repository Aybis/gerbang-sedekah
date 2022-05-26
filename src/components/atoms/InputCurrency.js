import NumberFormat from 'react-number-format';

export default function InputCurrency({ value, handlerChange, target, name }) {
  const withValueLimit = ({ floatValue }) => floatValue <= target;
  return (
    <div className="mt-5 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-500 sm:text-sm"> Rp </span>
      </div>
      <NumberFormat
        value={value}
        thousandSeparator={true}
        name={name}
        onValueChange={handlerChange}
        isAllowed={withValueLimit}
        className="disabled:bg-zinc-200 disabled:opacity-75 disabled:cursor-not-allowed bg-slate-100 px-4 py-3 w-full rounded-lg text-zinc-800 text-sm placeholder-opacity-30 font-medium focus:ring-blue-600 focus:border-blue-600 border border-transparent placeholder:font-light transition-all duration-300 ease-in-out pl-10"
        inputMode="numeric"
        allowLeadingZeros={false}
      />
      <div className="absolute inset-y-0 right-0 pr-3 items-center pointer-events-none hidden">
        <span className="text-gray-500 sm:text-sm" id="price-currency">
          {' '}
          IDR{' '}
        </span>
      </div>
    </div>
  );
}
