import React from 'react'
import { CrownOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons'

// '_defaultProps' is not match eslint rule @typescript-eslint/naming-convention, but match the antd pro template code
// eslint-disable-next-line
const _defaultProps = {
	route: {
		path: '/',
		routes: [
			{
				path: '/welcome',
				name: 'Welcome',
				icon: <SmileOutlined />,
			},
			{
				path: '/user',
				name: 'User',
				icon: <UserOutlined />,
				routes: [
					{
						path: '/user/admins',
						name: 'Admins',
						icon: <CrownOutlined />,
					},
					{
						path: '/user/teachers',
						name: 'Teachers',
						icon: <CrownOutlined />,
					},
					{
						path: '/user/students',
						name: 'Students',
						icon: <CrownOutlined />,
					},
				],
			},
		],
	},
	location: {
		pathname: '/',
	},
}

export default _defaultProps
