import React from 'react';
import { type MenuProps, Skeleton } from "antd";
import { Dropdown, Space, Typography } from 'antd';
import {useTranslation} from "react-i18next";

import {DropDownItem} from "./components/DropDownItem/DropDownItem";

import {StyledWatchListImg, StyledWatchListText} from "./styled";

import {POSTER_PATH} from "../../../../constants";

import WatchListSave from '../../../../assets/img/WatchListSave.png';
import nonFound from "../../../../assets/img/nonFound.png"
import { useFetchMovieQuery } from "../../hooks/use-fetch-movie-quary.ts";

export const DropDownUi: React.FC = () => {
    const {data, isLoading} = useFetchMovieQuery();
    const items: MenuProps['items'] = [];

    if(data) {
        data?.forEach(item => {
            items.push({
                key: item.id,
                label: <DropDownItem
                    key={item.id}
                    img={item.backdrop_path ? `${POSTER_PATH}${item.backdrop_path}`: nonFound}
                    label={item.title}
                    rating={item.vote_average} />
            })
        })
    }
    const {t} = useTranslation();

    if(!isLoading) {
        return (
            <Dropdown
                arrow={true}
                menu={{
                    items,
                    selectable: true,
                    defaultSelectedKeys: ['3'],
                    style: { width: 300, minHeight: 200, backgroundColor: '#1a1a1a', padding: 8, borderRadius: 10}
                }}
            >
                <Typography.Link>
                    <Space>
                        <StyledWatchListText>{t('header.watchlist')}</StyledWatchListText>
                        <StyledWatchListImg src={WatchListSave} alt={'WatchListSave'} />
                    </Space>
                </Typography.Link>
            </Dropdown>
        );
    } else {
        return (
          <Skeleton active />
        )
    }
}