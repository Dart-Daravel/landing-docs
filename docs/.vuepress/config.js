import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    base: '/landing-docs/',
    theme: defaultTheme(
        {
            logo: 'assets/logo.svg',
            sidebar: [
                {
                    text: 'Getting Started',
                    children: [
                        {
                            text: 'Installation',
                            link: '/getting-started/installation',
                        },
                        {
                            text: 'Directory Structure',
                            link: '/getting-started/directory-structure',
                        },
                        {
                            text: 'Configuration',
                            link: '/getting-started/configuration',
                        }
                    ],
                },
                {
                    text: 'General',
                    children: [
                        {
                            text: 'Helpers',
                            link: '/general/helpers',
                        },
                    ],
                },
                {
                    text: 'HTTP',
                    children: [
                        {
                            text: 'Routing',
                            link: '/http/routing',
                        },
                        {
                            text: 'Middleware',
                            link: '/http/directory-structure',
                        },
                        {
                            text: 'Response',
                            link: '/http/response',
                        }
                    ],
                },
                {
                    text: 'Database',
                    children: [
                        {
                            text: 'Configuration',
                            link: '/database/configuration',
                        },
                        {
                            text: 'Query Builder',
                            link: '/database/query-builder',
                        },
                        {
                            text: 'Migration',
                            link: '/database/migration',
                        },
                        {
                            text: 'ORM',
                            link: '/database/migration',
                        }
                    ],
                },
            ],
        }
    ),
    title: 'Daravel',
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