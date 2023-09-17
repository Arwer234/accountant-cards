import { AccountantCardWrapper } from './AccountantCard.styles';

import React from 'react';
import { AccountantCardParagraph } from './AccountantCardParagraph';
import { AccountantType } from './AccountantCard.types';
import { Box, StyledButton } from '../../App.styles';
import { GENDER_TO_CARD_SUBTITLE } from './AccountantCard.constants';

export default function AccountantCard({ ...props }: AccountantType) {
	const { name, picture, gender, email, cell } = props;

	return (
		<AccountantCardWrapper>
			<Box style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
				<img
					style={{ width: '64px', height: '64px' }}
					src={picture.medium}
					alt={`${name}`}
				/>
				<AccountantCardParagraph
					subheaderText={
						GENDER_TO_CARD_SUBTITLE[gender as keyof typeof GENDER_TO_CARD_SUBTITLE] ??
						'Księgowy'
					}
					subheaderSize={16}
					contentType="header"
				>{`${name.first} ${name.last}`}</AccountantCardParagraph>
			</Box>

			<AccountantCardParagraph subheaderText="E-mail" contentType="email">
				{email}
			</AccountantCardParagraph>

			<AccountantCardParagraph subheaderText="Telefon" contentType="text">
				{cell}
			</AccountantCardParagraph>

			<AccountantCardParagraph
				subheaderText="Średnia cena netto usługi / m-c"
				contentType="amount"
			>
				350,00
			</AccountantCardParagraph>

			<StyledButton>Dowiedz się więcej</StyledButton>
		</AccountantCardWrapper>
	);
}
