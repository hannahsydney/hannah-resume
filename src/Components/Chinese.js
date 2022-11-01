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
									我是华裔澳洲人，在澳洲出生、长大。所以我一直对普通话和中国语言学感兴趣。我目前通过网上教学的课程{' '}
									<a href="https://www.culturestride.com" style={{ color: 'inherit' }}>
										CultureStride
									</a>{' '}
									学习普通话。目前我已经在 UNSW 完成了非母语课程的中文初级班，并且获得 92 分的优等成绩。
								</p>
								<p>
									Growing up as an Australian with a Chinese heritage, I have always been interested
									in Mandarin and liguistics. I'm currently studying Mandarin Chinese with the Chinese
									language school,{' '}
									<a href="https://www.elitelinguistic.com/chinese-lesson-free-trial/ref/eln/?campaign=GAds&gclid=CjwKCAjwh4ObBhAzEiwAHzZYUxsYYOjpIAYOJ637Clh9BUJNh0-3nDkixoK23yTibZh8Mm5TyAa2QhoCUS8QAvD_BwE" style={{ color: 'inherit' }}>
										Elite Linguistic Network Chinese Language School
									</a>, here in Singapore. I have also completed Introductory Chinese for Background Speakers at UNSW,
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
