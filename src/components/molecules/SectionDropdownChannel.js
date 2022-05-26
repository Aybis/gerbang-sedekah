export default function SectionDropdownChannel({ value, handlerChange, name }) {
  const dataOrganisasi = [
    {
      id: 4,
      name: 'Tidak',
    },
    {
      id: 1,
      name: 'Gekrafs',
    },
    {
      id: 2,
      name: 'Yakesma',
    },
    {
      id: 3,
      name: 'Pertamina',
    },
  ];

  return (
    <div className="relative flex justify-between items-center mt-6">
      <p className="text-sm font-light text-zinc-500">
        Saya tergabung dalam organisasi{' '}
        <span className="text-apps-primary text-opacity-70">(opsional)</span>
      </p>

      <select
        name={name}
        onChange={handlerChange}
        value={value}
        className="border-zinc-300 rounded-lg text-sm focus:ring-apps-primary w-fit">
        {dataOrganisasi.map((item, index) => (
          <option value={item.name} key={index}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
