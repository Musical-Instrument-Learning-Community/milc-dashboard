import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons'
import type { ProSettings } from '@ant-design/pro-layout'
import ProLayout, { SettingDrawer } from '@ant-design/pro-layout'
import { Avatar } from 'antd'
import Welcome from './Welcome'
import defaultProps from './_defaultProps'

export default function Dashboard() {
	const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
		fixSiderbar: true,
	})
	const [pathname, setPathname] = useState('/welcome')

	return (
		<div id='test-pro-layout' style={{ height: '100vh' }}>
			<ProLayout
				{...defaultProps}
				title='MILC'
				// todo: logo=''
				location={{ pathname }}
				onMenuHeaderClick={(e) => console.log(e)}
				menuItemRender={(item, dom) => (
					// eslint-disable-next-line
					<a
						onClick={() => {
							setPathname(item.path || '/welcome')
						}}
					>
						{dom}
					</a>
				)}
				rightContentRender={() => (
					<div>
						<Avatar shape='square' size='small' icon={<UserOutlined />} />
					</div>
				)}
				{...settings}
			>
				{(() => {
					switch (pathname) {
						case '/welcome':
							return <Welcome />
						default:
							return <Welcome />
					}
				})()}
			</ProLayout>
			<SettingDrawer
				pathname={pathname}
				getContainer={() => document.getElementById('test-pro-layout')}
				settings={settings}
				onSettingChange={(changeSetting) => {
					setSetting(changeSetting)
				}}
				disableUrlParams
			/>
		</div>
	)
}
