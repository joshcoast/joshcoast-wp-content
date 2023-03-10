const el = wp.element.createElement;

export default function getIcon( icon ) {
	if ( 'generateblocks' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 50 60.12', fill: 'none', style: { padding: '1px' } },
			el( 'path', {
				d: 'M6.686 31.622V18.918a.077.077 0 01.05-.072l6.5-2.313 6.5-2.313 9.682-3.445L39.1 7.33a.067.067 0 00.036-.028.074.074 0 00.014-.044V.076a.077.077 0 00-.032-.062.076.076 0 00-.069-.009l-13 4.625-13 4.625-6.5 2.313-6.5 2.313a.067.067 0 00-.036.028.097.097 0 00-.013.046V52.067c0 .026.013.048.032.062s.044.018.069.009l3.267-1.163 3.267-1.163c.015-.005.028-.015.036-.028s.014-.028.014-.044V37.999l.001-6.377c-.001 0 0 0 0 0z',
				fill: '#1e72bd',
			} ),
			el( 'path', {
				d: 'M23.949 29.976l13-4.625 13-4.625c.015-.005.028-.015.036-.028s.015-.028.015-.044V8.056a.077.077 0 00-.032-.062.076.076 0 00-.069-.009l-13 4.625-13 4.625-6.5 2.313-6.5 2.313a.067.067 0 00-.036.028.074.074 0 00-.014.044V60.045c0 .026.013.048.032.062a.076.076 0 00.069.009l6.475-2.304 6.475-2.304 6.525-2.322 6.525-2.322 6.5-2.313 6.5-2.313c.015-.005.028-.015.036-.028s.014-.025.014-.041V27.193a.077.077 0 00-.032-.062.076.076 0 00-.069-.009l-6.45 2.295L37 31.711a.067.067 0 00-.036.028.074.074 0 00-.014.044v6.272a.077.077 0 01-.05.072l-6.45 2.295L24 42.715a.075.075 0 01-.101-.071V30.046c0-.016.005-.031.014-.044a.08.08 0 01.036-.026z',
				fill: '#1e72bd',
			} ),
		);
	}

	if ( 'effects' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.283 6.217c8.289 8.29 8.289 91.776 0 100.066-8.29 8.289-91.776 8.289-100.066 0-8.289-8.29-8.289-91.776 0-100.066 8.29-8.289 91.776-8.289 100.066 0zM96.276 16.224c6.632 6.632 6.632 73.42 0 80.052-6.632 6.632-73.42 6.632-80.052 0-6.632-6.632-6.632-73.42 0-80.052 6.632-6.632 73.42-6.632 80.052 0z',
			} ),
			el( 'path', {
				d: 'M48.418 58.413H33.304c-.71 0-1.019-.577-.687-1.288l16.637-35.68c.332-.71 1.178-1.287 1.889-1.287h22.962c.711 0 1.02.577.687 1.288l-10.934 23.45h15.74c.796 0 1.14.647.77 1.443L37.959 91.72c-2.42 2.448-5.343.578-3.83-2.666l14.289-30.642z',
			} ),
		);
	}

	if ( 'colors' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.283,6.217c8.289,8.29 8.289,91.776 0,100.066c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.29,-8.289 91.776,-8.289 100.066,0Zm-50.033,12.818c-20.551,0 -37.215,16.664 -37.215,37.215c0,20.551 16.664,37.215 37.215,37.215c3.432,0 6.202,-2.77 6.202,-6.203c0,-1.612 -0.62,-3.059 -1.612,-4.176c-0.951,-1.075 -1.571,-2.522 -1.571,-4.094c0,-3.432 2.77,-6.202 6.202,-6.202l7.319,0c11.413,0 20.675,-9.262 20.675,-20.675c0,-18.277 -16.664,-33.08 -37.215,-33.08Zm-22.742,37.215c-3.433,0 -6.203,-2.77 -6.203,-6.202c0,-3.433 2.77,-6.203 6.203,-6.203c3.432,0 6.202,2.77 6.202,6.203c0,3.432 -2.77,6.202 -6.202,6.202Zm45.484,0c-3.432,0 -6.202,-2.77 -6.202,-6.202c0,-3.433 2.77,-6.203 6.202,-6.203c3.433,0 6.203,2.77 6.203,6.203c0,3.432 -2.77,6.202 -6.203,6.202Zm-33.079,-16.54c-3.433,0 -6.203,-2.77 -6.203,-6.202c0,-3.433 2.77,-6.203 6.203,-6.203c3.432,0 6.202,2.77 6.202,6.203c0,3.432 -2.77,6.202 -6.202,6.202Zm20.674,0c-3.432,0 -6.202,-2.77 -6.202,-6.202c0,-3.433 2.77,-6.203 6.202,-6.203c3.433,0 6.203,2.77 6.203,6.203c0,3.432 -2.77,6.202 -6.203,6.202Z',
			} ),
		);
	}

	if ( 'gradient' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 24 24', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M17.66 8L12 2.35L6.34 8A8.02 8.02 0 0 0 4 13.64c0 2 .78 4.11 2.34 5.67a7.99 7.99 0 0 0 11.32 0c1.56-1.56 2.34-3.67 2.34-5.67S19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z',
			} ),
		);
	}

	if ( 'copy' === icon ) {
		return <svg strokeWidth="1.2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M19.4 20H9.6a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h9.8a.6.6 0 0 1 .6.6v9.8a.6.6 0 0 1-.6.6Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M15 9V4.6a.6.6 0 0 0-.6-.6H4.6a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6H9" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
		</svg>;
	}

	if ( 'link' === icon ) {
		return <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false"><path d="M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"></path></svg>;
	}

	if ( 'globe' === icon ) {
		return <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" role="img" aria-hidden="true" focusable="false"><path d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711 0 512t40.5-199 109-163.5T313 40.5 512 0t199 40.5 163.5 109 109 163.5 40.5 199-40.5 199-109 163.5-163.5 109-199 40.5zM293 293l-48-42q-11 0-26 2.5t-27 2.5q-1-1-18-37Q64 346 64 512q0 3 .5 8t.5 7q6 6 29.5 22.5T128 576h64q3-2 5.5-3t5.5-2q-10-11-29.5-32.5T144 507q4-23 11-69.5t10-69.5q86-36 128-53v-22zm201-163q-14-6-26-11-3-8-4-12-6 19-19 57 4 1 11.5 2t11.5 2h26v-38zm-4 471q-5 5-7 8-12 21-34 64t-33 64q14 21 42.5 64t42.5 64q130 8 197 12 2 25 16 34 91-46 154-127.5T951 601q-19-4-41.5-11t-32.5-9.5-39.5-5T776 579q-12 1-15.5-15.5t-3.5-34-4-18.5q-22-4-89 7.5t-89 7.5q-13 12-85 75zm59-501q-3 20-10.5 60T527 221q5-1 16.5-2.5T560 217q-3-2-7-4 15-5 22-8-17-70-26-105zm116-9q-2 11-2 31t-10 53q1 2 4 4 20-2 67-7 0-21 21-42-38-23-80-39zm125 70q-2 4-7 11 19 3 25 5-12-11-18-16zm27 24q-3 6-9.5 18t-9.5 18q-29 1-78 3l-4-34q-2 1-7 2.5t-8 1.5v49q-21 2-64.5 6t-64.5 6q-7 10-15 22 27 58 41 87-20 5-82 22v34q0 2 1.5 6t2.5 6q17 8 53 24t54 25l22-27q-1-10-5-31.5t-6-32.5q3-2 9.5-5.5t9.5-5.5q27-8 41-11 13 21 36.5 60t29.5 49q9-8 25-24.5t24-24.5q-54-38-71-49 1-8 4-23h37q56 48 115 98 1 0 2-1.5t2-1.5q-4-8-26-49 0-1 3-4l4-4h41q1-1 17-9-34-116-124-200z" /></svg>;
	}

	if ( 'info' === icon ) {
		return <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" /></svg>;
	}

	if ( 'wrench' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M16.68 9.77c-1.34 1.34-3.3 1.67-4.95.99l-5.41 6.52c-.99.99-2.59.99-3.58 0s-.99-2.59 0-3.57l6.52-5.42c-.68-1.65-.35-3.61.99-4.95 1.28-1.28 3.12-1.62 4.72-1.06l-2.89 2.89 2.82 2.82 2.86-2.87c.53 1.58.18 3.39-1.08 4.65zM3.81 16.21c.4.39 1.04.39 1.43 0 .4-.4.4-1.04 0-1.43-.39-.4-1.03-.4-1.43 0-.39.39-.39 1.03 0 1.43z" /></g></svg>;
	}

	if ( 'x' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z" /></g></svg>;
	}

	if ( 'ellipsis' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M5 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></g></svg>;
	}

	if ( 'trash' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={ { fill: 'none' } } stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" /></svg>;
	}

	if ( 'question' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={ { fill: 'none' } } stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" /></svg>;
	}

	if ( 'lock' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={ { fill: 'none' } } stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>;
	}

	if ( 'template-library' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="gblocks-block-icon"><path style={ { fill: 'none' } } d="M0 0h24v24H0z" /><path d="M21.375 12.625H2.625A.625.625 0 0 1 2 12V2.625C2 2.28 2.28 2 2.625 2h18.75c.345 0 .625.28.625.625V12c0 .345-.28.625-.625.625zM3.25 11.375h17.5V3.25H3.25v8.125zM10.283 22H2.625A.625.625 0 0 1 2 21.375V15.31c0-.345.28-.625.625-.625h7.658c.345 0 .625.28.625.625v6.065c0 .345-.28.625-.625.625zM3.25 20.75h6.407v-4.815H3.25v4.815zm18.125-1.783h-7.892a.625.625 0 0 1 0-1.25h7.892a.625.625 0 0 1 0 1.25zm0 3.033h-7.892a.625.625 0 0 1 0-1.25h7.892a.625.625 0 0 1 0 1.25zm0-6.065h-7.892a.625.625 0 0 1 0-1.25h7.892a.625.625 0 0 1 0 1.25z" /><path d="M12 10.106a.625.625 0 0 1-.625-.625V5.144a.625.625 0 0 1 1.25 0v4.337c0 .346-.28.625-.625.625z" /><path d="M14.169 7.938H9.831a.625.625 0 0 1 0-1.25h4.337a.625.625 0 0 1 .001 1.25z" /></svg>;
	}

	if ( 'accordion' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="gblocks-block-icon"><path style={ { fill: 'none' } } d="M0 0h24v24H0z" /><path d="M21.375 9.067H2.625A.625.625 0 0 1 2 8.441V2.625C2 2.28 2.28 2 2.625 2h18.751c.344 0 .624.28.624.625v5.816c0 .346-.28.626-.625.626zM3.249 7.816H20.75V3.25H3.249v4.566zm18.126 11.032H2.625a.625.625 0 0 1 0-1.251h18.751a.625.625 0 1 1-.001 1.251zm0 3.152H2.625a.625.625 0 0 1 0-1.25h18.751a.625.625 0 1 1-.001 1.25zm0-6.305H2.625a.625.625 0 0 1 0-1.25h18.751a.625.625 0 1 1-.001 1.25zm0-3.152H2.625a.625.625 0 0 1 0-1.25h18.751a.625.625 0 1 1-.001 1.25z" /><path d="M17.831 6.874a.517.517 0 0 1-.368-.153L15.9 5.159l.737-.737 1.194 1.194 1.194-1.194.737.737-1.563 1.563a.522.522 0 0 1-.368.152z" /></svg>;
	}

	if ( 'tabs' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="gblocks-block-icon"><path style={ { fill: 'none' } } d="M0 0h24v24H0V0z" /><path d="M21.38 2H2.62c-.34 0-.62.28-.62.62v18.75c0 .35.28.63.62.63h18.75c.34 0 .62-.28.62-.62V2.62a.608.608 0 0 0-.61-.62zM9.5 3.25h5v2.51h-5V3.25zm11.25 17.5H3.25V3.25h5v3.14c0 .34.28.62.62.62h11.88v13.74zm0-14.99h-5V3.25h5v2.51z" /><path d="M18.23 13.26H5.77c-.34 0-.62.28-.62.62s.28.62.62.62h12.46c.34 0 .62-.28.62-.62s-.27-.62-.62-.62zm0 3.03H5.77c-.34 0-.62.28-.62.62 0 .34.28.62.62.62h12.46c.34 0 .62-.28.62-.62a.61.61 0 0 0-.62-.62zM5.14 10.85c0 .34.28.62.62.62h12.46c.34 0 .62-.28.62-.62s-.28-.62-.62-.62H5.77a.613.613 0 0 0-.63.62z" /></svg>;
	}

	if ( 'addContainer' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path style={ { fill: 'none' } } d="M0 0h24v24H0z" /><path d="M21.375 22h-3.75v-1.25h3.125v-3.125H22v3.75c0 .345-.28.625-.625.625zM9.188 20.75h5.625V22H9.188zM6.375 22h-3.75A.625.625 0 0 1 2 21.375v-3.75h1.25v3.125h3.125V22zM2 9.187h1.25v5.625H2zm1.25-2.812H2v-3.75C2 2.28 2.28 2 2.625 2h3.75v1.25H3.25v3.125zM9.188 2h5.625v1.25H9.188zM22 6.375h-1.25V3.25h-3.125V2h3.75c.345 0 .625.28.625.625v3.75zm-1.25 2.812H22v5.625h-1.25zM12 18.293a.625.625 0 0 1-.625-.625V6.331a.625.625 0 0 1 1.25 0v11.337c0 .346-.28.625-.625.625z" /><path d="M17.669 12.625H6.332a.625.625 0 0 1 0-1.25h11.337a.625.625 0 0 1 0 1.25z" /></svg>;
	}

	if ( 'horizontal-tabs' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100"><path d="M83.91 48.67H16.09a1.92 1.92 0 0 0 0 3.84h67.82a1.92 1.92 0 0 0 0-3.84zm0 15.17H16.09a1.92 1.92 0 0 0 0 3.84h67.82a1.92 1.92 0 0 0 0-3.84zm0 15.17H16.09a1.92 1.92 0 0 0 0 3.84h67.82a1.92 1.92 0 0 0 0-3.84zm0-45.51H16.09a1.92 1.92 0 0 0 0 3.84h67.82a1.92 1.92 0 0 0 0-3.84z" /><path d="M98.08 0H1.92C.86 0 0 .86 0 1.92v96.15C0 99.14.86 100 1.92 100h96.15c1.06 0 1.92-.86 1.92-1.92V1.92C100 .86 99.14 0 98.08 0zm-1.93 15.59-28.2.09V3.85h28.2v11.74zM35.9 3.85h28.21v11.84l-28.21.08V3.85zM3.85 96.15V3.85h28.21V17.7c0 .51.2 1 .57 1.36.36.36.85.56 1.36.56H34l62.17-.19v76.72H3.85z" /></svg>;
	}

	if ( 'vertical-tabs' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100"><path d="M33.41 52.51h50.91a1.92 1.92 0 0 0 0-3.84H33.41a1.92 1.92 0 0 0 0 3.84zm0 15.17h50.91a1.92 1.92 0 0 0 0-3.84H33.41a1.92 1.92 0 0 0 0 3.84zm0 15.18h50.91a1.92 1.92 0 0 0 0-3.84H33.41a1.92 1.92 0 0 0 0 3.84zm0-45.52h50.91a1.92 1.92 0 0 0 0-3.84H33.41a1.92 1.92 0 0 0 0 3.84zm0-15.17h50.91a1.92 1.92 0 0 0 0-3.84H33.41a1.92 1.92 0 0 0 0 3.84z" /><path d="M98.08 0H1.92C.86 0 0 .86 0 1.92v96.15C0 99.14.86 100 1.92 100h96.15c1.06 0 1.92-.86 1.92-1.92V1.92C100 .86 99.14 0 98.08 0zM3.85 52.12h12.52l-.05 19.97H3.85V52.12zm12.53-3.84H3.85V27.99h12.58l-.05 20.29zM3.85 75.94H16.3l-.05 20.21H3.85V75.94zm92.3 20.21H20.09l.19-70.08a1.932 1.932 0 0 0-1.92-1.93H3.85V3.85h92.31v92.3z" /></svg>;
	}

	if ( 'button-tabs' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100"><path d="M16.09 55.55h67.82a1.92 1.92 0 0 0 0-3.84H16.09a1.92 1.92 0 0 0 0 3.84zm0 14.22h67.82a1.92 1.92 0 0 0 0-3.84H16.09a1.92 1.92 0 0 0 0 3.84zm0 14.23h67.82a1.92 1.92 0 0 0 0-3.84H16.09a1.92 1.92 0 0 0 0 3.84zm0-42.67h67.82a1.92 1.92 0 0 0 0-3.84H16.09a1.92 1.92 0 0 0 0 3.84z" /><path d="M98.08 21.47H1.92C.86 21.47 0 22.33 0 23.4v74.68C0 99.14.86 100 1.92 100h96.15c1.06 0 1.92-.86 1.92-1.92V23.4c.01-1.07-.85-1.93-1.91-1.93zm-1.93 74.68H3.85V25.32h92.31v70.83zM1.92 14.9l25 .05c.48 0 .95-.19 1.29-.53.34-.34.54-.81.54-1.29V1.83C28.75.82 27.93 0 26.92 0h-25C.91 0 .1.82.1 1.83v11.24c0 1.01.81 1.82 1.82 1.83zM3.75 3.66H25.1v7.63l-21.35-.05V3.66zM37.5 14.9l25 .05c.48 0 .95-.19 1.29-.53.34-.34.54-.81.54-1.29V1.83C64.33.82 63.51 0 62.5 0h-25c-1.01 0-1.83.82-1.83 1.83v11.24c0 1.01.82 1.82 1.83 1.83zm1.83-11.24h21.35v7.63l-21.35-.05V3.66zM73.07 14.9l25 .05c.48 0 .95-.19 1.29-.53.34-.34.54-.81.54-1.29V1.83C99.9.82 99.09 0 98.08 0h-25c-1.01 0-1.83.82-1.83 1.83v11.24c0 1.01.82 1.82 1.82 1.83zM74.9 3.66h21.35v7.63l-21.35-.05V3.66z" /></svg>;
	}
}
