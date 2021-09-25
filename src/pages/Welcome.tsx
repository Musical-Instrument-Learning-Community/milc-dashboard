import React, { useEffect, useState } from 'react'
import { LikeOutlined } from '@ant-design/icons'
import { PageContainer } from '@ant-design/pro-layout'
import { Descriptions, Result, Space, Statistic } from 'antd'
import { mockUser } from '../mockData'
import { UserProps } from '../types'

export default function Welcome() {
	const [user, setUser] = useState<UserProps | null>(null)

	useEffect(() => {
		// todo: fetch user data here by api
		setUser(mockUser)
	}, [])

	return (
		<PageContainer
			content={
				<Descriptions size='small' column={2} bordered>
					<Descriptions.Item label='name'>{user?.name}</Descriptions.Item>
					<Descriptions.Item label='username'>{user?.username}</Descriptions.Item>
					<Descriptions.Item label='phoneNumber'>{user?.phoneNumber}</Descriptions.Item>
					<Descriptions.Item label='email'>{user?.email}</Descriptions.Item>
					<Descriptions.Item label='createdAt'>{user?.createdAt}</Descriptions.Item>
					<Descriptions.Item label='updatedAt'>{user?.updatedAt}</Descriptions.Item>
				</Descriptions>
			}
			extraContent={
				<Space size={24}>
					<Statistic title='Feedback' value={1128} prefix={<LikeOutlined />} />
					<Statistic title='Unmerged' value={93} suffix='/ 100' />
				</Space>
			}
		>
			<div
				style={{
					height: '120vh',
				}}
			>
				<Result
					status='success'
					style={{
						height: '100%',
						background: '#fff',
					}}
					title={'Hello, ' + user?.name}
				/>
			</div>
		</PageContainer>
	)
}
