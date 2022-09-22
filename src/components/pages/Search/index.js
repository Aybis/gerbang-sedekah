import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllCampaign } from '../../../redux/actions/campaign';
import {
  fetchDataCategory,
  setDataCategoryTemp,
} from '../../../redux/actions/category';
import { Heading1 } from '../../atoms';
import { SectionCampaign, SectionCampaignMendesak } from '../../molecules';
import Layout from '../includes/Layout';
import Category from './Category';
import InputSearch from './InputSearch';

export default function Search() {
  const [search, setsearch] = useState('');
  const CAMPAIGN = useSelector((state) => state.campaign);
  const CATEGORY = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handlerSelectedCategory = (item) => {
    console.log(item);
    dispatch(setDataCategoryTemp(item));
  };

  const handlerChangeInput = (event) => {
    setsearch(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchAllCampaign());
    dispatch(fetchDataCategory());
  }, [dispatch]);

  return (
    <Layout>
      <Heading1
        title={'Search Campaign'}
        addClass="text-xl md:text-2xl font-medium"
      />

      <div className="relative my-4">
        <Heading1 title={'Kategori'} addClass="font-medium" />
        <div className="relative flex gap-2 text-sm overflow-auto pb-2 mt-3">
          {CATEGORY?.dataCategory?.length > 0 &&
            CATEGORY?.dataCategory?.map((item, index) => (
              <Category
                handlerSelectedCategory={handlerSelectedCategory}
                item={item}
                key={index}
                selected={CATEGORY}
              />
            ))}
        </div>
      </div>

      <InputSearch handlerChangeInput={handlerChangeInput} search={search} />

      {/* Campaign Horizontal */}
      <div className="relative mb-4 mt-8">
        <Heading1
          title={'Campaign Mendesak'}
          addClass="text-sm md:text-base font-medium mb-2"
        />
        <div className="relative flex space-x-3 gap-4 overflow-x-auto -mx-4 px-4 pb-3">
          {CAMPAIGN?.isLoading
            ? ''
            : CAMPAIGN?.allCampaign?.length > 0
            ? CAMPAIGN?.allCampaign
                .slice(0, 2)
                .map((item, index) => (
                  <SectionCampaignMendesak item={item} key={index} />
                ))
            : ''}
        </div>
      </div>

      {/* Campaign Vertical */}
      {/* List Campaign */}
      <div className="relative my-8">
        <div className="relative flex justify-between items-center">
          <Heading1
            title={'List Campaign'}
            addClass="md:text-base font-medium"
          />

          <Link
            to={'/all/yatim-piatu'}
            className="text-xs font-light text-zinc-400 cursor-pointer hover:text-zinc-500 transition-all duration-300 ease-in-out">
            show all
          </Link>
        </div>
        <div className="relative grid grid-cols-1 gap-4 mt-2">
          {CAMPAIGN?.allCampaign?.length > 0
            ? CAMPAIGN?.allCampaign?.slice(1, 5)?.map((item, index) => (
                // Campaign Card
                <SectionCampaign item={item} key={index} />
              ))
            : ''}
        </div>
      </div>
      {/* End List Campaign */}
    </Layout>
  );
}
