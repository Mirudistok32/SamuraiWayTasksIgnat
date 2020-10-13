import { Meta } from '@storybook/react/types-6-0';
import React from 'react'
import { Provider, } from 'react-redux';
import store from '../h10/bll/store';

import HW12 from "./HW12";

export default {
    title: 'HW12',
    component: HW12,
    decorators: [(Story) => <Provider store={store}><Story /></Provider>]
} as Meta

// Все что смогу придумать, не придумал как реализовать , чтобы сразу все можно было изменять
export const SomeTheme = () => <HW12 themesList={['some']} themeLabel={'some'} />
export const DarkTheme = () => <HW12 themesList={['dark']} themeLabel={'dark'} />
export const RedTheme = () => <HW12 themesList={['red']} themeLabel={'red'} />
export const DarkturquoiseTheme = () => <HW12 themesList={['darkturquoise']} themeLabel={'darkturquoise'} />
export const DeepskyblueTheme = () => <HW12 themesList={['deepskyblue']} themeLabel={'deepskyblue'} />
export const HotpinkTheme = () => <HW12 themesList={['hotpink']} themeLabel={'hotpink'} />