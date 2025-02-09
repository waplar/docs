import { defineConfig } from 'vitepress'

export default defineConfig({
	base: process.env.VITEPRESS_BASE || '/',
	title: 'Waplar',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: '/assets/favicon.ico'
			}
		]
	],
	description: "Waplar Framework",
	themeConfig: {
		logo: '/assets/logo.png',
		siteTitle: false,
		lastUpdated: true,
		team: [
			{
				avatar: '/assets/kaneki-yuto.avatar.jpg',
				name: 'KanekiYuto',
				title: '创始人',
				links: [{
					icon: 'github', link: 'https://github.com/KanekiYuto'
				}, {
					icon: 'gravatar', link: 'https://gravatar.com/wildlypeaceeb3d586ab7'
				}]
			}
		],

		editLink: {
			pattern: 'https://github.com/waplar/doc/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		},

		search: {
			provider: 'local'
		},

		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/waplar/framework'
			},
		],

		// carbonAds: {
		//     code: 'your-carbon-code',
		//     placement: 'your-carbon-placement'
		// },

		footer: {
			message: '基于 MIT 许可发布',
			copyright: '版权所有 © 2024 - 2025 Kaneki Yuto'
		},

		nav: [
			{
				text: '主页',
				link: '/'
			},
			{
				text: '更新日志',
				link: '/change'
			},
			{
				text: '版本',
				items: [{
					text: '最新', link: 'https://waplar.cn'
				}, {
					text: 'alpha.x', link: 'https://waplar.cn/alpha'
				}]
			}
		],

		sidebar: [
			{
				text: '序言',
				collapsed: false,
				items: [
					{
						text: '发行说明',
						link: '/preface/release',
					}
				]
			},
			{
				text: '入门指南',
				collapsed: false,
				items: [
					{
						text: '安装',
						link: '/start/installation'
					},
					{
						text: '目录结构',
						link: '/start/directory-structure'
					}
				]
			}
		]
	}
})
