import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Code } from './Code'
import { type ArticleCodeBlock } from 'entities/Article'

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Normal = Template.bind({})
Normal.args = {
    block: {
        code: 'import React from \'react\'\n' +
            'import { type ComponentMeta, type ComponentStory } from \'@storybook/react\'\n' +
            '\n' +
            'import { Code } from \'./Code\'\n' +
            '\n' +
            'export default {\n' +
            '    title: \'shared/Code\',\n' +
            '    component: Code,\n' +
            '    argTypes: {\n' +
            '        backgroundColor: { control: \'color\' }\n' +
            '    }\n' +
            '} as ComponentMeta<typeof Code>\n' +
            '\n' +
            'const Template: ComponentStory<typeof Code> = (args) => <Code/>'
    } as ArticleCodeBlock,
    className: 'm-[15px]'
}
