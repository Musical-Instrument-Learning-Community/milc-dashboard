import React from 'react'
import { CrownOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons'

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
