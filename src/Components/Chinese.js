import React, { Component } from 'react';

class Chinese extends Component {
	render() {
		return (
			<section id="testimonials">
				<div className="text-container">
					<div className="row banner">
						<div className="banner-text">
							<h1 className="responsive-headline">你好, 我是陈佳容.</h1>
							<p style={{ color: '#fff', textAlign: 'center', fontStyle: 'italic', fontSize: '24px' }}>
								(Hi, I'm Hannah.)
							</p>
							<br />
							<br />
							<br />
							<br />
							<blockquote>
								<p>
									我成长为具有中国传统的澳大利亚人，所以我一直对普通话和语言学感兴趣。我目前正在使用 CultureStride 学习普通话，并且已经在 UNSW
									完成了背景演讲者入门汉语课程，最终成绩达到 92.
								</p>
								<p>
									Growing up as an Australian with a Chinese heritage, I have always been interested
									in Mandarin and liguistics. I'm currently studying Mandarin Chinese with the online
									language school,{' '}
									<a href="culturestride.com" style={{ color: 'inherit' }}>
										CultureStride
									</a>. I have also completed Introductory Chinese for Background Speakers at UNSW,
									achieving a final grade of 92.
								</p>
							</blockquote>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Chinese;
