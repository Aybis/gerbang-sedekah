import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import RenderIf from '../../utils/helpers/RenderIf';

export default function Heading1({ title, addClass, showBackPage = false }) {
  const navigate = useNavigate();

  return (
    <div className="flex space-x-2 items-center">
      <RenderIf isTrue={showBackPage}>
        <div
          onClick={() => navigate('/')}
          className="block p-2 cursor-pointer hover:bg-zinc-100 rounded-lg transition-all duration-300 ease-in-out">
          <ArrowNarrowLeftIcon className="h-6 text-zinc-700" />
        </div>
      </RenderIf>
      <h1 className={['text-sm font-bold text-zinc-800', addClass].join(' ')}>
        {title}
      </h1>
    </div>
  );
}
