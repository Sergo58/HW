import React from 'react';
import {Meta, Story} from "@storybook/react";





import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";
import HW12 from "./HW12";


export default {
    title:"Example/HW12",
    component:HW12,
    decorators:[ReduxStoreProviderDecorator]
} as Meta;



const Template: Story = (args) => <HW12  /> ;




export const BaseExample = Template.bind({});
BaseExample.args = {

}

