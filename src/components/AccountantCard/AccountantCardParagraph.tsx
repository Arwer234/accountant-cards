import React from 'react';
import { Box } from '../../App.styles';
import {
	Currency,
	EmailContent,
	HeaderContent,
	Subheader,
	Wrapper,
} from './AccountantCardParagraph.styles';
import { AccountantCardParagraphProps } from './AccountantCardParagraph.types';

function AccountantCardParagraph({
	subheaderText,
	subheaderSize = 14,
	contentType,
	children,
}: AccountantCardParagraphProps) {
	let content;

	if (contentType === 'header') {
		content = <HeaderContent>{children}</HeaderContent>;
	} else if (contentType === 'amount') {
		content = (
			<Box>
				<p>
					{children}&nbsp;<Currency>PLN</Currency>
				</p>
			</Box>
		);
	} else if (contentType === 'text') {
		content = <p>{children}</p>;
	} else if (contentType === 'email') {
		content = <EmailContent>{children}</EmailContent>;
	}

	return (
		<Wrapper>
			{subheaderText && (
				<Subheader style={{ fontSize: `${subheaderSize}px` }}>{subheaderText}</Subheader>
			)}
			{content}
		</Wrapper>
	);
}

export { AccountantCardParagraph };
