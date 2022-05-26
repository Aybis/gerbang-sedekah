import { Switch } from '@headlessui/react';

const SwitchToggle = ({ enabled = false, setEnabled }) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11 transition-all duration-300 ease-in-out`}>
      <span className="sr-only">Enable</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full transition-all duration-300 ease-in-out`}
      />
    </Switch>
  );
};

export default SwitchToggle;
