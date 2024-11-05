import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme(
        {
            sidebar: [
                {
                    title: 'Get Started',
                    text: 'Installation',
                    children: [
                        {
                            text: 'Installation',
                            link: '/installation',
                        },
                        {
                            text: 'Directory Structure',
                            link: '/installation',
                        },
                        {
                            text: 'Configuration',
                            link: '/installation',
                        }
                    ],
                },
            ],
        }
    ),
    title: 'Daravel',
    description: 'A Back-End Framework inspired by PHP\'s popular Back-End Framework: Laravel, written in Dart.',
    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap' }],
    ],
    plugins: [
        [
            '@vuepress/plugin-toc',
            {},
        ],
    ],
});