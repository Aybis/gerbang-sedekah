import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllCampaign } from '../../../redux/actions/campaign';
import { fetchDataCategory } from '../../../redux/actions/category';
import RenderIf from '../../../utils/helpers/RenderIf';
import { Heading1 } from '../../atoms';
import {
  SectionCampaign,
  SectionCampaignMendesak,
  SectionKategori,
} from '../../molecules';
import { SkeletonCampaign, SkeletonCampaignMendesak } from '../../skeletons';
import Layout from '../includes/Layout';
import SectionHeader from '../includes/SectionHeader';

export default function Index() {
  const [didMount, setDidMount] = useState(false);
  const dispatch = useDispatch();
  const CAMPAIGN = useSelector((state) => state.campaign);
  const CATEGORY = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchDataCategory());
    dispatch(fetchAllCampaign());
    setDidMount(true);
    return () => setDidMount(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (!didMount) {
    return null;
  }

  return (
    <Layout>
      {/* SectionHeader */}
      <SectionHeader />
      {/* End SectionHeader */}

      <div className="relative mt-8">
        <Heading1
          title={'Campaign Mendesak'}
          addClass="text-sm md:text-base font-medium mb-2"
        />
        <div className="relative flex gap-4 overflow-x-auto -mx-4 px-4 pb-3">
          {CAMPAIGN?.isLoading ? (
            <SkeletonCampaignMendesak />
          ) : CAMPAIGN?.allCampaign?.length > 0 ? (
            CAMPAIGN?.allCampaign
              .slice(0, 2)
              .map((item, index) => (
                <SectionCampaignMendesak item={item} key={index} />
              ))
          ) : (
            ''
          )}
        </div>
      </div>

      {/* SectionKategori */}
      <RenderIf isTrue={CATEGORY?.isError}>
        <div className="relative p-4 flex justify-center items-center">
          <p className="text-sm text-zinc-800">Gagal memuat data kategori</p>
        </div>
      </RenderIf>
      <RenderIf isTrue={CATEGORY?.isLoading}>
        <div className="relative p-4 flex justify-center items-center">
          <p className="text-sm text-zinc-800">Memuat data kategori</p>
        </div>
      </RenderIf>
      <RenderIf isTrue={!CATEGORY?.isError && !CATEGORY?.isLoading}>
        <div className="relative my-8">
          <Heading1 title={'Kategori'} addClass="md:text-base font-medium" />
          <div className="relative grid grid-cols-3 gap-4 place-items-center mt-3">
            {CATEGORY?.dataCategory?.length > 0 &&
              CATEGORY?.dataCategory?.map((item, index) => (
                <SectionKategori item={item} key={index} />
              ))}
          </div>
        </div>
        {/* End SectionKategori */}
      </RenderIf>

      {/* List Campaign */}
      <div className="relative my-12">
        <div className="relative flex justify-between items-center">
          <Heading1
            title={'List Campaign'}
            addClass="md:text-base font-medium"
          />

          <Link
            to={'/all/yatim-piatu'}
            className="text-xs font-light text-zinc-400 cursor-pointer hover:text-zinc-500 transition-all duration-300 ease-in-out">
            lihat semua
          </Link>
        </div>

        <div className="relative grid grid-cols-1 gap-4 mt-3">
          <RenderIf isTrue={CAMPAIGN?.isLoading}>
            {Array.from({ length: 4 }).map((item, index) => (
              <SkeletonCampaign key={index} />
            ))}
          </RenderIf>

          <RenderIf isTrue={!CAMPAIGN?.isLoading}>
            {CAMPAIGN?.allCampaign?.length > 0 ? (
              CAMPAIGN?.allCampaign?.slice(1, 5)?.map((item, index) => (
                // Campaign Card
                <SectionCampaign item={item} key={index} />
              ))
            ) : (
              <div className="relative text-center w-full">
                <p className="text-sm font-light text-zinc-500">
                  Tidak ada campaign
                </p>
              </div>
            )}
          </RenderIf>
        </div>
      </div>
      {/* End List Campaign */}
    </Layout>
  );
}
