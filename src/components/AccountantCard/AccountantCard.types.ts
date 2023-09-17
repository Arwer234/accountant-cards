type AccountantType = {
	cell: string; // numer telefonu
	name: {
		first: string;
		last: string;
	};
	email: string;
	picture: { thumbnail: string; medium: string };
	login: {
		uuid: string;
	};
	gender: string;
};

export type { AccountantType };
