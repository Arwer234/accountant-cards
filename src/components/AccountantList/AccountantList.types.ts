import { AccountantType } from '../AccountantCard/AccountantCard.types';

type AccountantResponseType = {
	results: AccountantType[];
	info: {
		page: number;
	};
};

export type { AccountantResponseType };
